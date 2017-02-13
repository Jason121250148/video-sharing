import { Router } from 'express';

const router = Router();

router.use('/project', require('./project').default);

export default router;
