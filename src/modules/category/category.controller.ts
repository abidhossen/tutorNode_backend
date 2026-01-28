import { Request, Response } from 'express';
import { categoryService } from './category.service';
import { response } from '../../helpers/response';
const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.createCategory(req.body);
    response.created(res, result, 'Comment');
  } catch (error) {
    response.badRequest(res, error);
  }
};
export const categoryController = { createCategory };
