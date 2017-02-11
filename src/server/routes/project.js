import { Router } from 'express';

const router = Router();

router.get('/app', (req, res) => {
    res.render('project/project-app');
});

export default router;
