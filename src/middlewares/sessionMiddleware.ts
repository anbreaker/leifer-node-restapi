import { Request, Response, NextFunction } from 'express';

import { getProperties } from '../utils/handlePropertiesEngine';
import { handleHttpError } from '../utils/handleHttpError';
import { verifyToken } from '../utils/handleJWT';

const engineDB = process.env.ENGINE_DB;
const { User } = require(`../models/${engineDB}/user.model`);

const propertiesKey = getProperties(engineDB!);

export const authMiddleware = async (req: Request | any, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, 'NEED_INIT_SESSION', 401);

      return;
    }

    const token = req.headers.authorization?.split(' ').pop(); //without bearer

    const dataToken: any = await verifyToken(token!);

    if (!dataToken) {
      handleHttpError(res, 'NOT_JWT_TOKEN', 401);

      return;
    }

    const query = {
      [propertiesKey.id]: dataToken[propertiesKey.id],
    };

    const user = await User.findOne(query);

    req.user = user;

    next();
  } catch (error) {
    handleHttpError(res, 'ERROR_INIT_SESSION', 401);

    console.log(error);
  }
};
