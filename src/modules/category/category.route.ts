import express from 'express';
import { categoryController } from './category.controller';
import { UserRole } from '../../middleware/auth';
import auth from '../../middleware/auth';
const router = express.Router();

router.get('/', categoryController.createCategory);

export const categoryRoute = router;
