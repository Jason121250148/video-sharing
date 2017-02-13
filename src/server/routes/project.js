import { Router } from 'express';

const router = Router();

router.get('/app', (req, res) => {
    res.render('project/welcome');
});

export default router;
