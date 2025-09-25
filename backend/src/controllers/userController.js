import UserModel from '../models/User.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function createUser(req, res) {
  try {
    const { name, lastName, email, password, birthDate } = req.body;
    const checkExistingUser = await UserModel.findOne({ email: email });

    if (checkExistingUser) {
      return res.status(400).json({ message: 'Erro ao tentar se cadastrar, e-mail em uso.' });
    };

    const salt = bcryptjs.genSaltSync();
    const hash = bcryptjs.hashSync(password, salt);

    const newUser = await UserModel.create({
      name,
      lastName,
      email,
      password: hash,
      birthDate,
    });
    newUser.password = undefined;
    return res.status(201).json(newUser);
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
