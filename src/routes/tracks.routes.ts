import { Router } from 'express';

import { greetingsMiddleware } from '../middlewares/greetingsMiddleware';
import { getItem, getItems, createItem } from '../controllers/tracks.controller';
import { validateCreateTrack } from '../validators/track.validator';

const router = Router();

// /tracks/
router.get('/', greetingsMiddleware, getItems);

// /tracks/:id
router.get('/:id', greetingsMiddleware, getItem);

// /tracks/:id
router.post('/', validateCreateTrack, createItem);

export default router;
