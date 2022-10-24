import { Router } from 'express';

import { greetingsMiddleware } from '../middlewares/greetingsMiddleware';
import {
  createTrack,
  deleteTrack,
  getTrack,
  getTracks,
  updateTrack,
} from '../controllers/tracks.controller';
import { validateCreateTrack, validateGetTrack } from '../validators/track.validator';

const router = Router();

/**
 * list of tracks
 * path: /tracks/
 */
router.get('/', getTracks);

/**
 * get a track
 * /tracks/:id
 */
router.get('/:id', getTrack);

/**
 * create a track
 * /tracks/
 */
router.post('/', validateCreateTrack, createTrack);

/**
 * updated track
 * /tracks/:id
 */
router.put('/:id', validateGetTrack, validateCreateTrack, updateTrack);

/**
 * delete track
 * /tracks/:id
 */
router.delete('/:id', deleteTrack);

export default router;
