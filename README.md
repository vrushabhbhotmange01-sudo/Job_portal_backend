## 💼 3. Job Portal Backend 


A production-ready RESTful API built with Node.js, Express, and MongoDB, enabling users to register, post jobs, and apply for jobs.
Implements JWT authentication, bcrypt password hashing, and role-based access control (Admin/User) for secure data management.
---

## ⚙️ Tech Stack

Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: JWT, bcrypt
Environment Management: dotenv
API Testing: Postman

---

## 🚀 Live Demo
🔗 [Live API](https://job-portal-backend-1-9r9x.onrender.com)

🧪 [Postman Collection](https://vrushabhbhotmange01-5159632.postman.co/workspace/Vrushabh-Bhotmange's-Workspace~af3d36d0-36b4-4bf2-8033-3f2374248426/collection/49645752-4feb6bd4-b79c-4223-896d-169d9086012b?action=share&creator=49645752)

---

## 🧱 Features

👤 User Registration & Login with JWT
🏢 Role-Based Access (Admin / User)
💼 Job CRUD Operations (create, view, delete)
📝 Apply for Jobs (Users only)
📜 Fetch Applied Jobs for a specific user
🧭 Protected Routes using middleware
🧠 Clean, modular, and maintainable code structure
---

## 📚 Endpoints Summary

👤 Authentication
| Method | Endpoint              | Description             |
| ------ | --------------------- | ----------------------- |
| `POST` | `/api/users/register` | Register a new user     |
| `POST` | `/api/users/login`    | Login and get JWT token |

💼 Jobs
| Method | Endpoint        | Description                     |
| ------ | --------------- | ------------------------------- |
| `GET`  | `/api/jobs`     | Get all job listings            |
| `POST` | `/api/jobs`     | Create a new job *(Admin only)* |

📝 Applications
| Method | Endpoint                      | Description              |
| ------ | ----------------------------- | ------------------------ |
| `POST` | `/api/jobs/:id/apply`         | Apply for a specific job |
| `GET`  | `/api/users/:id/applications` | View user’s applied jobs |

---

## 🧩 Folder Structure
/controllers     → Logic for users, jobs, and applications
/models          → MongoDB schemas
/routes          → Route definitions
/middleware      → JWT auth and role verification
server.js        → Main entry point



---

## 🧰 How to Run Locally
```bash
git clone https://github.com/yourusername/jobportal-backend.git
cd jobportal-backend
npm install
npm start

Create .env:
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
PORT=5000

