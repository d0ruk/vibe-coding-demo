import { Router } from "express";
import { HealthController } from "../controllers/HealthController";

const router = Router();

router.get("/health", HealthController);

export default router;
