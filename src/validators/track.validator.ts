import { Request, Response, NextFunction } from 'express';
import { check } from 'express-validator';

import { validateResults } from '../utils/handleValidator';

export const validateCreateTrack = [
  check('name').exists().notEmpty().isLength({ min: 3, max: 30 }),
  check('album').exists().notEmpty(),
  check('cover').exists().notEmpty(),
  check('artist').exists().notEmpty(),
  check('artist.name').exists().notEmpty(),
  check('artist.nickname').exists().notEmpty(),
  check('artist.nationality').exists().notEmpty(),
  check('duration').exists().notEmpty(),
  check('duration.start').exists().notEmpty(),
  check('duration.end').exists().notEmpty(),
  check('mediaId').exists().notEmpty().isMongoId(),

  (req: Request, res: Response, next: NextFunction) => validateResults(req, res, next),
];
