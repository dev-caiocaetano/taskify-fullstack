import { Router } from 'express';
import { listAllTasks, createTask, updateTask, deleteTask } from '../controllers/taskController.js';
import { authenticatedUser } from '../middlewares/authMiddlewares.js';

const router = Router();
router.get('/', authenticatedUser, listAllTasks);
router.post('/', authenticatedUser, createTask);
router.put('/:id', authenticatedUser, updateTask);
router.delete('/:id', authenticatedUser, deleteTask);

export default router;
