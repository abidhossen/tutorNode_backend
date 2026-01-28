import express from 'express';
import { userController } from './user.controller';
import { UserRole } from '../../middleware/auth';
import auth from '../../middleware/auth';
const router = express.Router();

router.get('/:id', userController.getUserById);

export const userRoute = router;
