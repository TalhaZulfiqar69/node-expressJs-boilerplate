import express from 'express';
import authRouter from './users';
const router = express.Router();

/* GET default server response. */
router.get('/', function (req, res) {
    res.status(200).json({
        status: 200,
        success: true,
        message: 'Welcome to Backend APIs',
        data: {},
    });
});

router.use('/api/admin', authRouter); // Auth routes

export default router
