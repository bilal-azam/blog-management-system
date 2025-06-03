# Blog Management System

A full-stack blog management system built with **React, Node.js, Express, MongoDB, and Tailwind CSS**. Supports user authentication and CRUD operations for blog posts.

![Demo Screenshot](/client/public/demo-screenshot.png)  
*(Replace with an actual screenshot path)*

---

## Features
- 🔒 **JWT Authentication** (Login/Register with `bcrypt` hashing)
- ✍️ **Blog Post CRUD** (Create, Read, Update, Delete)
- 🎨 **Tailwind CSS UI** (Responsive, modern forms with React Hook Form)
- ⚡ **Real-time Feedback** (Loading states & error handling)

---

## Tech Stack
| Frontend               | Backend                |
|------------------------|------------------------|
| React                  | Node.js/Express        |
| Tailwind CSS           | MongoDB (Mongoose)     |
| React Hook Form        | JWT Authentication     |
| Axios                  | Bcrypt (Password Hash) |

---

## Quick Start

### 1. Clone & Install
```
git clone https://github.com/bilal-azam/blog-management-system.git
cd blog-management-system
cd client && npm install  # Frontend
cd ../server && npm install  # Backend
```

### 2. Configure Environment
Create .env in /server:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 3. Run
```
# Backend (from /server)
npm start  # http://localhost:5000

# Frontend (from /client)
npm start  # http://localhost:3000
```

## API Endpoints
| Method   | Endpoint               | Description                     |
|----------|------------------------|---------------------------------|
| `POST`   | `/api/auth/register`   | Register a new user             |
| `POST`   | `/api/auth/login`      | Login an existing user          |
| `GET`    | `/api/posts`           | Fetch all blog posts            |
| `GET`    | `/api/posts/:id`       | Fetch a single blog post        |
| `POST`   | `/api/posts`           | Create a new blog post          |
| `PUT`    | `/api/posts/:id`       | Update a blog post              |
| `DELETE` | `/api/posts/:id`       | Delete a blog post              |

## Project Structure

**Frontend**  
`client/`  
├── `public/`       # Static assets  
└── `src/`  
│   ├── `components/` # UI components  
│   ├── `pages/`      # Route views  
│   ├── `hooks/`      # Custom hooks  
│   ├── `App.js`  
│   └── `index.js`  

**Backend**  
`server/`  
├── `config/`        # Configuration  
├── `controllers/`   # Business logic  
├── `models/`        # DB schemas  
├── `routes/`        # API endpoints  
├── `middleware/`    # Auth handlers  
├── `app.js`         # Express config  
└── `server.js`      # Entry point  

### Happy Blogging! 🚀
## Developed by Bilal Azam
