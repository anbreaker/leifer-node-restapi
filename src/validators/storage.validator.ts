import { Request, Response, NextFunction } from 'express';
import { check } from 'express-validator';

import { validateResults } from '../middlewares/handleValidator';

export const validateGetItem = [
  check('id').exists().notEmpty().isMongoId(),

  (req: Request, res: Response, next: NextFunction) => validateResults(req, res, next),
];
