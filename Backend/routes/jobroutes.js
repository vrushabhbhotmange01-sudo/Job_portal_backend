import express from "express";
import { createJob, getJobs } from "../controllers/jobController.js";
import { authorize, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect,authorize("recruiter"), createJob); // Recruiters only
router.get("/", getJobs); // Public listing

export default router;
