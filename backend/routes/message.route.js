import express from "express";
import { sendMessage, getMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage); // whoever logged in can send message to anyone
router.get("/:id", protectRoute, getMessage); // whoever logged in can get message from anyone

export default router;
