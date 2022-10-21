import { Router } from 'express';

import { greetingsMiddleware } from '../middlewares/greetingsMiddleware';
import { getItems } from '../controllers/tracks.controller';

const router = Router();

// /api/
router.get('/', greetingsMiddleware, getItems);

export default router;
