import Application from "../modules/Application.js";

// @route   POST /api/applications
export const applyToJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    // Prevent duplicate applications
    const existing = await Application.findOne({ job: jobId, applicant: req.user.id });
    if (existing) return res.status(400).json({ message: "Already applied to this job" });

    const application = await Application.create({ job: jobId, applicant: req.user.id });
    res.status(201).json({ message: "Application submitted", application });
  } catch (error) {
    res.status(500).json({ message: "Error applying to job" });
  }
};

// @route   GET /api/applications
export const getApplications = async (req, res) => {
  try {
    let filter = {};
    if (req.user.role === "user") filter.applicant = req.user.id;
    if (req.user.role === "recruiter") filter.postedBy = req.user.id;

    const applications = await Application.find(filter).populate("job applicant", "title name email");
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: "Error fetching applications" });
  }
};
