import { Router } from 'express';
import { createUser, userLogin, verifyEmail, requestPasswordReset, resetPassword, getProfile } from '../controllers/userController.js';
import { authenticatedUser } from '../middlewares/authMiddlewares.js';

const router = Router();
router.post('/cadastro', createUser);
router.post('/login', userLogin);
router.get('/verificar-email', verifyEmail);
router.post('/recuperar-senha', requestPasswordReset);
router.post('/resetar-senha/:token', resetPassword);
router.get('/me', authenticatedUser, getProfile);

export default router;
