import { Router } from 'express';

import { getRegister } from '../controllers/auth.controller';
import { validateLogin, validateRegister } from '../validators/auth.validator';

const router = Router();

/**
 * create a track
 * /auth/
 */
router.post('/register', validateRegister, getRegister);

export default router;
