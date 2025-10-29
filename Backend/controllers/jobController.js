import Job from "../modules/jobs.js";

// @route   POST /api/jobs
export const createJob = async (req, res) => {
  try {
    if (req.user.role !== "recruiter") {
      return res.status(403).json({ message: "Only recruiters can post jobs" });
    }

    const job = await Job.create({ ...req.body, postedBy: req.user.id });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error creating job" });
  }
};

// @route   GET /api/jobs
export const getJobs = async (req, res) => {
  try {
    const { page = 1, limit = 5, location, experience, skills, search } = req.query;

    const query = {};
    if (location) query.location = location;
    if (experience) query.experience = experience;
    if (skills) query.skills = { $in: skills.split(",") };
    if (search) query.title = { $regex: search, $options: "i" };

    const jobs = await Job.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Job.countDocuments(query);

    res.json({ total, page: Number(page), totalPages: Math.ceil(total / limit), jobs });
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
};
