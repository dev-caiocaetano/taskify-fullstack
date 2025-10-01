import { Router } from 'express';
import { createUser, userLogin, verifyEmail, requestPasswordReset, resetPassword } from '../controllers/userController.js';


const router = Router();
router.post('/cadastro', createUser);
router.post('/login', userLogin);
router.get('/verificar-email', verifyEmail);
router.post('/recuperar-senha', requestPasswordReset);
router.post('/resetar-senha/:token', resetPassword);

export default router;
