import { Router } from 'express';

import app from '../app';

const router = Router();

router.get('/app', (req, res) => {
    res.render('project/main', { app });
});

export default router;
