# 📚 Node.js API Authentication with Role-Based Access

A simple Node.js REST API for user authentication and book management, featuring JWT-based auth, hashed passwords, role-based authorization, and in-memory data storage.

---

##  Features

-  User registration and login with hashed passwords (`bcryptjs`)
-  JWT authentication using `jsonwebtoken`
-  Role-based authorization (e.g., admin-only routes)
-  Protected book CRUD operations
-  Basic input validation
-  `.env` file for storing secrets

---

## 📁 Project Structure

├── data/
│ └── store.js # In-memory data storage for users and books
├── middleware/
│ └── auth.js # JWT authentication and role authorization
├── routes/
│ ├── auth.js # User registration and login
│ └── books.js # Book management (CRUD)
├── utils/
│ └── validate.js # Book input validation
├── .env # Environment variables (JWT secret, port)
├── .gitignore # Ignore node_modules, .env, etc.
├── index.js # Entry point
├── package.json # Project dependencies

---

## 🔐 .env Example

Create a `.env` file in the root of the project:

```env
PORT=5000
JWT_SECRET=your_jwt_secret_here
Make sure .env is included in .gitignore to keep secrets safe.

🛠 Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/Adebayozz1994/API-Authentication-.git
cd your-repo-name
Install dependencies

bash
Copy
Edit
npm install
Run the server

bash
Copy
Edit
node index.js
Server runs on http://localhost:5000 by default.

🔑 API Endpoints
Auth Routes
Method	Route	Description
POST	/api/register	Register new user
POST	/api/login	Login and get JWT

Book Routes (Protected)
Method	Route	Description	Role
GET	/api/books	Get all books	Authenticated
GET	/api/books/:id	Get book by ID	Authenticated
POST	/api/books	Add a new book	Authenticated
PUT	/api/books/:id	Update book by ID	Authenticated
DELETE	/api/books/:id	Delete book (admin)	Admin only

🔐 Authorization
Regular users can register, login, and manage books.

Only admin users can delete books.

Use the JWT token in the Authorization header as:
Bearer <your_token_here>

📦 Dependencies
express

bcryptjs

jsonwebtoken

dotenv

cors

🧪 Example User Roles
json
Copy
Edit
{
  "username": "john",
  "password": "secret123",
  "role": "admin"
}
 TODO
Move data to a database (e.g., MongoDB or PostgreSQL)

Add pagination and search for books

Add email verification and password reset

Add Swagger API documentation

 License
MIT License © 2025 Ogunlade Adebayo Peter

npm
Copy
Edit








