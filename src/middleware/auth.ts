import { NextFunction, Request, Response } from 'express';
import { auth as betterAuth } from '../lib/auth';
import { response } from '../helpers/response';
import { error } from 'console';

export enum UserRole {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  TUTOR = 'TUTOR',
}
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        name: string;
        role: string;
        emailVerified: boolean;
      };
    }
  }
}

const auth = (...roles: UserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const session = await betterAuth.api.getSession({
      headers: req.headers as any,
    });
    if (!session) {
      response.unauthorized(res, error('Unauthorized access'));
      return;
    }
    if (!session.user.emailVerified) {
      response.forbidden(res, error('Email not verified'));
      return;
    }
    req.user = {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
      role: session.user.role!,
      emailVerified: session.user.emailVerified,
    };
    if (roles.length && !roles.includes(req.user.role as UserRole)) {
      response.forbidden(
        res,
        error('You do not have permission to access this resource'),
      );
      return;
    }
    next();
  };
};

export default auth;
