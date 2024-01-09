import { Router } from 'express';
import { getProfile } from '../controllers/user.controller';
import { checkAuth } from '../middlewares/auth.middlewares';

const router = Router();

router.get('/', checkAuth, getProfile);

export default router;
