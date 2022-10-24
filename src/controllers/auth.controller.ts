import { Request, Response } from 'express';

import { handleHttpError } from '../utils/handleHttpError';
import { matchedData } from 'express-validator';
import { compare, encrypt } from '../utils/handlePassword';
import { User } from '../models/nosql/user.model';

/**
 * Get list DB
 * @param req
 * @param res
 * @returns
 */
export const getRegister = async (req: Request | any, res: Response) => {
  try {
    req = matchedData(req);

    const password = await encrypt(req.password);

    const body = { ...req, password };

    const data = await User.create(body);

    return res.json({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_REGISTER');

    console.log(error);
  }
};
