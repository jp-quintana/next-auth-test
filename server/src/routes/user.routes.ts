import { Router } from 'express';
import { getUser } from '../controllers/user.controller';
import { checkAuth } from '../middlewares/auth.middlewares';

const router = Router();

router.post('/', checkAuth, getUser);

export default router;
