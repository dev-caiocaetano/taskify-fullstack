import jwt from 'jsonwebtoken';

export function authenticatedUser(req, res, next) {
  const authenticatedHeader = req.headers.authorization;

  if (!authenticatedHeader) {
    return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
  }

  const token = authenticatedHeader.split(' ')[1];

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decodedToken._id;
    next();
  } catch (error) {
    console.log('Erro ao tentar autenticar o usuário: ')
    return res.status(401).json({ message: 'Token inválido ou expirado.' });
  }
};
