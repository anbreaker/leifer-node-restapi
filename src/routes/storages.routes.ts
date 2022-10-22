import { Router } from 'express';

import { createItem } from '../controllers/storages.controller';
import { uploadMiddleware } from '../middlewares/multerMiddleware';

const router = Router();

// /storage/

router.post('/', uploadMiddleware.single('myfile'), createItem);

export default router;
