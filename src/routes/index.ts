import { Router } from 'express';

const router = Router();

import welcome from './welcome'

router.use('/', welcome);

export default router;
