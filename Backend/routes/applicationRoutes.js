import express from "express";
import { applyToJob, getApplications } from "../controllers/applicationController.js";
import { authorize, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, applyToJob);
router.get("/", protect,authorize("recruiter"), getApplications);

export default router;
