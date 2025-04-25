// routes/authRoutes.js
import express from 'express';
import { loginController } from '../controllers/authController.js';

const router = express.Router();

// Define the login route
router.post('/login', loginController);

export default router;
