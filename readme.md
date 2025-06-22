# ✅ Task Manager API

A simple RESTful API server built with **Node.js**, **Express.js**, and **MongoDB** to manage tasks with full **CRUD** functionality.

---

## 📌 Features

- 4 API Endpoints (Create, Read, Update, Delete)
- MongoDB integration with Mongoose
- Clean and modular structure
- Tested using Postman and curl

---

## ⚙️ Setup Instructions

1. Clone the repo & install dependencies:
   ```bash
   git clone https://github.com/your-username/task-manager-api.git
   cd task-manager-api
   npm install
````

2. Add `.env` file:

   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/taskmanager
   ```

3. Start the server:

   ```bash
   npm start
   ```

---

## 📘 API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/api/tasks`     | Get all tasks       |
| POST   | `/api/tasks`     | Create a new task   |
| PUT    | `/api/tasks/:id` | Update a task by ID |
| DELETE | `/api/tasks/:id` | Delete a task by ID |

---

## 🧪 Testing

Use **curl** or **Postman** to test endpoints.

Example:

```bash
curl http://localhost:5000/api/tasks
```