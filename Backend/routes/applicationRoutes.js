import express from "express";
import { applyToJob, getApplications } from "../controllers/applicationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, applyToJob);
router.get("/", protect, getApplications);

export default router;
