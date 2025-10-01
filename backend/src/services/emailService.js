import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});

export async function sendVerificationEmail(userEmail, token) {
  try {
    const verificationLink = `http://localhost:3000/usuarios/verificar-email?token=${token}`

    const infoEmail = await transporter.sendMail({
      from: `"Taskify" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: "Confirmação de cadastro no Taskify",
      html: `
        <h2>Olá! Bem-vindo(a) ao Taskify.</h2>
        <p>Obrigado por se cadastrar. Falta só um passo!</p>
        <p>Por favor, clique no link abaixo para verificar seu endereço de e-mail:</p>
        <a href="${verificationLink}" style="background-color: #007bff; color: white; padding: 15px 25px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">Verificar meu E-mail</a>
        <p>Este link de verificação expira em 1 hora.</p>
        <p>Se você não se cadastrou no Taskify, por favor ignore este e-mail.</p>
      `,
    })
    return infoEmail;
  } catch (error) {
    console.error("Erro ao enviar e-mail de verificação: ", error);
    throw new Error("Não foi possível enviar o e-mail de verificação.");
  };
};

export async function sendPasswordResetEmail(userEmail, token) {
  try {
    const resetLink = `http://localhost:5173/resetar-senha/${token}`

    const infoEmail = await transporter.sendMail({
      from: `"Taskify" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: "Recuperação de senha",
      html: `
        <p>Olá!</p>
        <p>Recebemos uma solicitação para redefinir sua senha na plataforma Taskify.</>
        <p>Por favor, clique no link abaixo para cadastrar uma nova senha:</p>
        <a href="${resetLink}" style="background-color: #007bff; color: white; padding: 15px 25px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">Redefinir minha senha</a>
        <p>Este link expira em 15 minutos.</p>
        <p>Se você não solicitou uma recuperação de senha, pode ignorar este e-mail com segurança.</p>
      `,
    })

    return infoEmail;
  } catch (error) {
    console.error("Erro ao enviar e-mail de recuperação de senha: ", error);
    throw new Error("Não foi possível enviar o e-mail de recuperação de senha.");
  };
};
