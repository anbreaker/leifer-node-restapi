import { Request, Response, NextFunction } from 'express';

import { handleHttpError } from '../utils/handleHttpError';
import { User } from '../models/nosql/user.model';
import { verifyToken } from '../utils/handleJWT';

export const authMiddleware = async (req: Request | any, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, 'NEED_INIT_SESSION', 401);

      return;
    }

    const token = req.headers.authorization?.split(' ').pop(); //without bearer

    const dataToken: any = await verifyToken(token!);

    if (!dataToken._id) {
      handleHttpError(res, 'ERROR_ID_TOKEN', 401);

      return;
    }

    const user = await User.findById(dataToken._id);

    req.user = user;

    next();
  } catch (error) {
    handleHttpError(res, 'ERROR_INIT_SESSION', 401);

    console.log(error);
  }
};
