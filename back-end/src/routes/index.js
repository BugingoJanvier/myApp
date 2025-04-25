import express from 'express';
//import { loginController, logoutController } from '../controllers/authController.js';
import auth from './authantication.js';

const router = express();

router.use('/auth', auth);

export default router;
