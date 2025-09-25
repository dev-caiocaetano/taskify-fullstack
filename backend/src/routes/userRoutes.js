import { Router } from 'express';
import { createUser, userLogin } from '../controllers/userController.js';

const router = Router();
router.post('/cadastro', createUser);
router.post('/login', userLogin);

export default router;
