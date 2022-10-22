import { Router } from 'express';

import { greetingsMiddleware } from '../middlewares/greetingsMiddleware';
import { getItem, getItems, createItem } from '../controllers/tracks.controller';

const router = Router();

// /tracks/
router.get('/', greetingsMiddleware, getItems);

// /tracks/:id
router.get('/:id', greetingsMiddleware, getItem);

// /tracks/:id
router.post('/', greetingsMiddleware, createItem);

export default router;
