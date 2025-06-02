# Blog Management System

A full-stack blog management application with authentication and CRUD operations.

## Features

- User authentication (register, login, logout)
- Create, read, update, and delete blog posts
- Responsive design with Tailwind CSS
- Form validation with React Hook Form and Zod
- API documentation with Swagger
- Protected routes
- Loading states and error handling

## Tech Stack

### Frontend
- React.js
- Vite (build tool)
- Tailwind CSS
- React Hook Form + Zod (form handling)
- React Router (routing)
- Axios (HTTP client)

### Backend
- Node.js
- Express.js
- MongoDB (database)
- Mongoose (ODM)
- JWT (authentication)
- Bcrypt (password hashing)
- Swagger (API documentation)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/blog-management-system.git
   cd blog-management-system
   ```
Install server dependencies:


cd server
npm install
Install client dependencies:


cd ../client
npm install
Create a .env file in the server directory with the following variables:

NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/blogdb
JWT_SECRET=your_jwt_secret
Running the Application

Start the server:
cd server
npm run dev

Start the client:
cd ../client
npm run dev
Open your browser and navigate to:

Client: http://localhost:5173

API Docs: http://localhost:5000/api-docs

Project Structure
Server
server/
├── config/          # Database configuration
├── controllers/     # Route controllers
├── middlewares/     # Express middlewares
├── models/          # Mongoose models
├── routes/          # API routes
├── utils/           # Utility functions
├── .env             # Environment variables
├── app.js           # Express app configuration
└── server.js        # Server entry point
Client
client/
├── public/          # Static files
├── src/
│   ├── components/  # Reusable components
│   ├── context/     # React context providers
│   ├── pages/       # Application pages
│   ├── utils/       # Utility functions
│   ├── App.jsx      # Main application component
│   ├── index.css    # Global styles
│   └── main.jsx     # Client entry point
├── tailwind.config.js # Tailwind configuration
└── postcss.config.js # PostCSS configuration
API Documentation
The API documentation is available at /api-docs when the server is running. It provides detailed information about all available endpoints, request/response formats, and authentication requirements.

Testing
Basic tests can be added using Jest. To run tests:


cd server
npm test
Deployment
Backend
Set up a production MongoDB database

Update the .env file with production values

Use a process manager like PM2 to run the server

Frontend
Build the production version:


cd client
npm run build
Deploy the dist folder to a static hosting service (Vercel, Netlify, etc.)


## Additional Documentation

### API Documentation with Swagger

The Swagger documentation is automatically generated from JSDoc comments in the route files. You can access it at `http://localhost:5000/api-docs` when the server is running.

### Error Handling

The application includes comprehensive error handling:
- Backend: Custom error middleware that formats errors consistently
- Frontend: Error boundaries and context-based error states
- Form validation: Client-side validation with Zod and server-side validation

### Security Considerations

1. **Authentication**:
   - JWT with HTTP-only cookies (or Authorization header)
   - Password hashing with bcrypt
   - Protected routes on both client and server

2. **Input Validation**:
   - Client-side validation with Zod
   - Server-side validation with Mongoose schemas

3. **Security Headers**:
   - CORS configured for the client origin
   - Helmet middleware can be added for production