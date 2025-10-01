import UserModel from '../models/User.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import crypto from 'crypto';
import { sendVerificationEmail, sendPasswordResetEmail } from '../services/emailService.js';

export async function createUser(req, res) {
  try {
    const { name, lastName, email, password, birthDate } = req.body;

    const passwordValidation = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0
    };

    if (!validator.isStrongPassword(password, passwordValidation)) {
      return res.status(400).json({
        message: 'A senha precisa ter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula e um número.'
      });
    };

    const checkExistingUser = await UserModel.findOne({ email: email });

    if (checkExistingUser) {
      return res.status(400).json({ message: 'Erro ao tentar se cadastrar, e-mail em uso.' });
    };

    const salt = bcryptjs.genSaltSync();
    const hash = bcryptjs.hashSync(password, salt);

    const cryptoToken = crypto.randomBytes(32).toString('hex');
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 1);

    const newUser = await UserModel.create({
      name,
      lastName,
      email,
      password: hash,
      birthDate,
      emailVerificationToken: cryptoToken,
      emailVerificationTokenExpires: expirationDate
    });

    await sendVerificationEmail(newUser.email, newUser.emailVerificationToken);

    return res.status(201).json({
      message: "Usuário cadastrado com sucesso! Verifique seu e-mail para ativar sua conta."
    });
  } catch (error) {
    console.error('Erro ao tentar criar usuário: ', error);
    return res.status(500).json({ message: 'Erro ao tentar criar um usuário.' })
  }
};

export async function userLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ message: 'Usuário ou senha inválidos' });
    };

    if (!user.emailVerified) {
      return res.status(400).json({ message: 'Seu e-mail ainda não foi verificado. Por favor, cheque a caixa de entrada do e-mail cadastrado.' })
    }

    const passwordValid = bcryptjs.compareSync(password, user.password);

    if (!passwordValid) {
      return res.status(400).json({ message: 'Usuário ou senha inválidos' });
    };

    const payload = { _id: user._id }
    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      { expiresIn: '30d' }
    );

    const userResponse = { name: user.name, email: user.email };
    return res.status(200).json({
      message: 'Login efetuado com sucesso!',
      user: userResponse,
      token: token
    });
  } catch (error) {
    console.error('Erro no login: ', error);
    return res.status(500).json({ message: 'Erro ao tentar logar.' })
  }
};

export async function verifyEmail(req, res) {
  const { token } = req.query;
  if (!token) {
    return res.status(400).json({ message: 'Token de verificação não fornecido.' });
  };

  const user = await UserModel.findOne({ emailVerificationToken: token });
  if (!user) {
    return res.status(400).json({ message: 'Token de verificação inválido.' });
  };

  if (new Date() > user.emailVerificationTokenExpires) {
    return res.status(400).json({ message: 'Token de verificação expirado. Por favor, solicite um novo.' })
  };

  if (user.emailVerified) {
    return res.redirect('http://localhost:5173/login?message=Este+email+ja+foi+verificado');
  };

  user.emailVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationTokenExpires = undefined;

  await user.save();
  return res.redirect('http://localhost:5173/verificacao-sucesso');
}

export async function requestPasswordReset(req, res) {
  try {
    const { email } = req.body;
    const recoveryEmail = await UserModel.findOne({ email: email })

    if (recoveryEmail) {
      const token = crypto.randomBytes(32).toString('hex');
      const tokenExpiration = new Date(Date.now() + 15 * 60 * 1000);

      recoveryEmail.passwordResetVerificationToken = token;
      recoveryEmail.passwordResetVerificationTokenExpires = tokenExpiration;
      await recoveryEmail.save();

      await sendPasswordResetEmail(recoveryEmail.email, token);
    };

    return res.status(200).json({
      message: 'Se um usuário com este e-mail estiver cadastrado, um link de recuperação foi enviado.'
    });
  } catch (error) {
    console.error("Erro na solicitação para recuperar senha:", error);
    return res.status(200).json({
      message: 'Se um usuário com este e-mail estiver cadastrado, um link de recuperação foi enviado.'
    });
  };
};

export async function resetPassword(req, res) {
  const { token } = req.params;
  const { newPassword, confirmNewPassword } = req.body;

  if (newPassword !== confirmNewPassword) {
    return res.status(400).json({ message: 'As senhas não coincidem' });
  };

  const newPasswordValidation = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0
  };

  if (!validator.isStrongPassword(newPassword, newPasswordValidation)) {
    return res.status(400).json({
      message: 'A senha precisa ter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula e um número.'
    });
  };

  const user = await UserModel.findOne({ passwordResetVerificationToken: token });

  if (!user) {
    return res.status(400).json({ message: 'Token inválido.' });
  }

  if (new Date() > user.passwordResetVerificationTokenExpires) {
    return res.status(400).json({ message: 'Token de verificação expirado. Por favor, solicite um novo.' });
  };

  const salt = bcryptjs.genSaltSync();
  const hash = bcryptjs.hashSync(newPassword, salt);

  user.password = hash;
  user.passwordResetVerificationToken = undefined;
  user.passwordResetVerificationTokenExpires = undefined;

  await user.save();

  return res.status(200).json({
    message: "Nova senha cadastrada com sucesso!"
  });
};
