import { Request, Response, NextFunction } from 'express';
import { check } from 'express-validator';

import { validateResults } from '../middlewares/handleValidator';

export const validateRegister = [
  check('name').exists().notEmpty().isLength({ min: 3, max: 33 }),
  check('age').exists().notEmpty().isNumeric(),
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty().isLength({ min: 3, max: 15 }),

  (req: Request, res: Response, next: NextFunction) => validateResults(req, res, next),
];

export const validateLogin = [
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty().isLength({ min: 3, max: 15 }),

  (req: Request, res: Response, next: NextFunction) => validateResults(req, res, next),
];
