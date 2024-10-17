# Fitness Tracker Backend

This project is the backend for a comprehensive fitness tracker application, developed using **Node.js**, **Express**, and **MongoDB**. The backend provides a robust system for users to log their workouts, set fitness goals, track their progress, and view statistics, while admins can manage users and fitness programs. It follows the **MVC (Model-View-Controller)** architecture, making it modular, scalable, and maintainable.

## Features

- **JWT Authentication**: Secure authentication for users, allowing token-based login/logout.
- **Role-Based Access Control (RBAC)**: Admin and User roles with different privileges.
  - **Admin**: Can manage users, fitness programs, and view detailed statistics.
  - **User**: Can log workouts, set goals, and track personal progress.
- **Workout Log & Goal Management**: Full CRUD operations for workout logs and fitness goals.
- **Statistics Generation**: Users can retrieve personal progress statistics, and admins can view aggregate data.
- **Admin Functions**: Special endpoints for managing users and fitness programs.
- **MongoDB Database**: NoSQL database for storing user data, workouts, and goals.

---

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [User Endpoints](#user-endpoints)
  - [Admin Endpoints](#admin-endpoints)
  - [Workout Endpoints](#workout-endpoints)
  - [Statistics Endpoints](#statistics-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Installation

To install and run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/fitness-tracker-backend.git
    cd fitness-tracker-backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

   Create a `.env` file in the root of your project and add the following variables:

    ```bash
    MONGO_URI=mongodb://localhost:27017/your-database-name
    JWT_SECRET=your_jwt_secret_key
    PORT=5000
    ```

4. **Start the server:**

    During development, you can use `nodemon` to automatically restart the server on file changes:

    ```bash
    npm run dev
    ```

    Or, to start the server in production mode:

    ```bash
    npm start
    ```

---

## Configuration

The application uses environment variables to configure various settings. These should be added to the `.env` file in the root of your project.

- **MONGO_URI**: MongoDB connection string. Replace `your-database-name` with the name of your database.
- **JWT_SECRET**: Secret key for signing JWT tokens.
- **PORT**: Port number on which the server runs (default: 5000).

---

## API Endpoints

### User Endpoints

#### Register a new user

- **POST** `/api/users/register`
- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "yourpassword"
  }
  ```

#### User Login

- **POST** `/api/users/login`
- **Description**: Authenticates a user and returns a JWT token.
- **Request Body**:
  ```json
  {
    "email": "johndoe@example.com",
    "password": "yourpassword"
  }
  ```

#### Get User Profile (Protected)

- **GET** `/api/users/profile`
- **Description**: Returns the profile of the logged-in user.
- **Authorization**: Bearer token (JWT).

---

### Admin Endpoints

#### Get All Users (Admin Only)

- **GET** `/api/admin/users`
- **Description**: Returns a list of all registered users.
- **Authorization**: Bearer token (JWT with Admin role).

#### Manage Users (Admin Only)

- **PUT** `/api/admin/users/:id`
- **Description**: Update user details.
- **DELETE** `/api/admin/users/:id`
- **Description**: Delete a user account.

---

### Workout Endpoints

#### Log a Workout

- **POST** `/api/workouts`
- **Description**: Adds a new workout for the user.
- **Request Body**:
  ```json
  {
    "type": "Running",
    "duration": 30,
    "caloriesBurned": 250,
    "date": "2024-10-16"
  }
  ```
- **Authorization**: Bearer token (JWT).

#### Get All Workouts (Protected)

- **GET** `/api/workouts`
- **Description**: Fetch all workouts of the logged-in user.
- **Authorization**: Bearer token (JWT).

---

### Statistics Endpoints

#### Get User Statistics (Protected)

- **GET** `/api/statistics`
- **Description**: Fetches workout statistics for the logged-in user.
- **Authorization**: Bearer token (JWT).

#### Admin View Statistics (Admin Only)

- **GET** `/api/admin/statistics`
- **Description**: Admin view of aggregated statistics across all users.
- **Authorization**: Bearer token (JWT with Admin role).

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building REST APIs.
- **MongoDB**: NoSQL database for storing user data and workout logs.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JWT (JSON Web Token)**: For secure authentication and authorization.
- **bcrypt.js**: For password hashing.
- **Nodemon**: For automatically restarting the server during development.
- **Cors**: Middleware to enable Cross-Origin Resource Sharing.

---

### Future Improvements

- Add advanced statistics and data visualization for users.
- Implement notifications and reminders for fitness goals.
- Develop a front-end client for a full-stack experience.
- Add social features like sharing progress and fitness challenges.
