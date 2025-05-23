import { Router } from "express";
import { authController } from "../controllers/authController";

const router = Router();

router.post("/signup", authController.register);
router.post("/signin", authController.login);

export const authRoutes = router;
