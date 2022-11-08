import { Request, Response } from 'express';

import { compare, encrypt } from '../utils/handlePassword';
import { handleHttpError } from '../utils/handleHttpError';
import { matchedData } from 'express-validator';
import { tokenSing } from '../utils/handleJWT';

const engineDB = process.env.ENGINE_DB;
const { User } = require(`../models/${engineDB}/user.model`);

/**
 * Controller Register User
 * @param req
 * @param res
 * @returns
 */
export const registerControl = async (req: Request | any, res: Response) => {
  try {
    req = matchedData(req);

    const password: string = await encrypt(req.password);

    const body = { ...req, password };

    const dataUser = await User.create(body);

    const data = {
      token: await tokenSing(dataUser),
      user: dataUser,
    };

    return res.json({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_REGISTER');

    console.log(error);
  }
};

/**
 * Controller Login User
 * @param req
 * @param res
 * @returns
 */
export const loginControl = async (req: Request | any, res: Response) => {
  try {
    req = matchedData(req);

    const user = await User.findOne({ email: req.email });

    if (!user) {
      handleHttpError(res, 'USER_NOT_EXISTS', 404);

      return;
    }

    const hashPassword = user!.password;

    const check = await compare(req.password, hashPassword);

    if (!check) {
      handleHttpError(res, 'PASSWORD_INVALID', 401);

      return;
    }

    user.set('password', undefined, { strict: false });

    const data = {
      token: await tokenSing(user),
      user,
    };

    return res.json({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_LOGIN');

    console.log(error);
  }
};
