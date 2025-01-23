import express from 'express';
import loginValidation from '../middlewares/validation_middleware';
import AuthController from '../controllers/auth.controller';
const router = express.Router();


router.get("/login", loginValidation, AuthController.login); // Admin Login api

export default router;
