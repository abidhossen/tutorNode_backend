import { Request, Response } from 'express';
import { userService } from './user.service';
import { response } from '../../helpers/response';
const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (typeof id !== 'string') {
      throw new Error('Id is not string');
    }
    const result = await userService.getUserById(id);
    response.ok(res, result);
  } catch (error) {
    response.badRequest(res, error);
  }
};
export const userController = { getUserById };
