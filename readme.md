# 🏢 MERN Job Portal

A full-stack **Job Portal application** built with the **MERN stack (MongoDB, Express, React, Node.js)**.  
It allows **users** to register, log in, apply for jobs, and view their applications, while **recruiters** can post jobs and manage applicants.

---

## 🚀 Features

- 🔐 **Authentication & Authorization** with JWT  
- 👤 **User Roles**: Job Seeker & Recruiter  
- 📋 **Job Posting** (Recruiters only)  
- 🔎 **Job Listings** with filters & search  
- 📄 **Job Applications** (Users can apply, recruiters can track)  
- ⚡ **Form Validation & Error Handling**  
- 🔄 **Pagination** for large job listings  

---

## 🛠 Tech Stack
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Mongoose ODM)  
**Auth:** JWT (JSON Web Token), bcrypt.js  
**Deployment:** Render/Heroku (backend), Vercel/Netlify (frontend)  

---

## 📂 Project Structure

project-root/
│── config/ # Database connection
│── controllers/ # Request handlers (Auth, Jobs, Applications)
│── middleware/ # Auth middleware
│── models/ # Mongoose schemas (User, Job, Application)
│── routes/ # Express route files
│── server.js # Main entry point
│── package.json # Dependencies
│── README.md # Project documentation
│── .env # Environment variables (not uploaded)


## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/mern-job-portal.git
cd mern-job-portal

Install Dependencies
npm install

Setup Environment Variables

Create a .env file in the project root:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=yourSecretKey

Run the Backend
server.js file

API Endpoints
Auth

POST /api/auth/register → Register new user/recruiter

POST /api/auth/login → Login user

Jobs

POST /api/jobs → Create job (recruiter only)

GET /api/jobs → List jobs (with filters, search & pagination)

Applications

POST /api/applications → Apply to job (user only)

GET /api/applications → View applications (role-based)

Testing Examples

Register User JSON:

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "password123",
  "role": "user"
}


Post Job JSON (Recruiter only):

{
  "title": "Full Stack Developer",
  "description": "Work on MERN stack projects",
  "company": "Tech Corp",
  "location": "Remote",
  "experience": "2+ years",
  "skills": ["Node.js", "React", "MongoDB"]
}


Notes / Improvements

✅ Profile management (future)

✅ Email notifications for job applications (future)

⏳ Admin dashboard (future)
