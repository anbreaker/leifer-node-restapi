import { Router } from 'express';

import { createItem, deleteItem, getItem, getItems } from '../controllers/storages.controller';
import { uploadMiddleware } from '../middlewares/multerMiddleware';
import { validateGetItem } from '../validators/storage.validator';

const router = Router();

/**
 * Get list items storage
 * /storage/
 */
router.get('/', getItems);

/**
 * Get a item storage
 * /storage/:id
 */
router.get('/:id', validateGetItem, getItem);

/**
 * Create a item storage
 * /storage/
 */
router.post('/', uploadMiddleware.single('myfile'), createItem);

/**
 * Delete a item storage
 * /storage/:id
 */
router.delete('/:id', validateGetItem, deleteItem);

export default router;
