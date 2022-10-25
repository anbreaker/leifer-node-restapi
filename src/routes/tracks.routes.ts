import { Router } from 'express';

import { authMiddleware } from '../middlewares/sessionMiddleware';
import { checkRole } from '../middlewares/roleMiddleware';
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
router.get('/', authMiddleware, getTracks);

/**
 * get a track
 * /tracks/:id
 */
router.get('/:id', authMiddleware, getTrack);

/**
 * create a track
 * /tracks/
 */
router.post('/', authMiddleware, checkRole(['admin']), validateCreateTrack, createTrack);

/**
 * updated track
 * /tracks/:id
 */
router.put('/:id', authMiddleware, validateGetTrack, validateCreateTrack, updateTrack);

/**
 * delete track
 * /tracks/:id
 */
router.delete('/:id', authMiddleware, deleteTrack);

export default router;
