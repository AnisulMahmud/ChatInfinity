import express from 'express';
import { sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';
const router = express.Router();


router.post('/send/:id', protectRoute, sendMessage ) // whoever logged in can send message to anyone



export default router;
