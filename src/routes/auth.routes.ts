import { Router } from 'express';

import { loginControl, registerControl } from '../controllers/auth.controller';
import { validateLogin, validateRegister } from '../validators/auth.validator';

const router = Router();

/**
 * Create a register user
 * /auth/
 */
router.post('/register', validateRegister, registerControl);

/**
 * Login User
 * /auth/
 */
router.post('/login', validateLogin, loginControl);

export default router;
