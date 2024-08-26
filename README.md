# Educart Backend

## Project Overview

This project provides the backend infrastructure for the Educart platform. It handles user authentication, data storage, and API endpoints for various functionalities. 

## Tech Stack

- **Express.js:** Web application framework for Node.js, used for building the backend services.
- **TypeScript:** A superset of JavaScript that adds static typing, enhancing code quality and maintainability.
- **MongoDB:** NoSQL database used for storing user data, course information, and other relevant data.
- **Zod:** TypeScript-first schema declaration and validation library for ensuring data integrity and validation.

## Features

- **User Authentication:** Securely manages user login and registration using JWT (JSON Web Tokens).
- **Data Storage:** Utilizes a database (likely MongoDB based on file names) to store user data, course information, and other relevant data.
- **API Endpoints:** Exposes APIs for accessing and manipulating data, including user management, course management, and other platform-specific features.
- **Admin Management:** Implements functionalities for managing administrative users and roles.
- **Validation:** Implements robust validation logic for user input and data using Zod, ensuring data integrity.
- **Middleware:** Utilizes middleware for handling common tasks such as authentication and authorization, as well as custom validations for different user types.


## Installation

This project uses npm for package management. To set up the project:

1. **Prerequisites:** Ensure you have Node.js and npm installed on your system.
2. **Clone the repository:**
   ```bash
   git clone https://github.com/abhijeet141/EduCart-Backend
   ```
3. **Navigate to the project directory:**
   ```bash
   cd educart-backend
   ```
4. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

1. **Start the server:**
   ```bash
   npm start
   ```
2. **Access API endpoints:** Once the server is running, you can access the API endpoints using tools like Postman or curl.

## Admin Routes

### 1. Create Admin Account

- **Endpoint:** `POST /admin/signup`
- **Description:** Creates a new admin account.
- **Input Body:**
  ```json
  {
    "name": "name",
    "adminEmail": "adminEmail",
    "password": "pass"
  }
- **Output Body:**
  ```json
  {
    "message": "Admin created successfully"
  }
- **Validation:** Zod for Input Validation.

### 2. Logs in an Admin Account

- **Endpoint:** `POST /admin/signin`
- **Description:**  Logs in an admin account.
- **Input Body:**
  ```json
  {
    "adminEmail": "adminEmail",
    "password": "pass"
  }
- **Output Body:**
  ```json
  {
    "token": "your-token"
  }

### 3. Create a new Course

- **Endpoint:** `POST /admin/courses`
- **Description:** Creates a new course.
- **Input Headers:**
  ```json
  {
    "Authorization": "Bearer <token>"
  }  
- **Input Body:**
  ```json
  {
     "title": "course title",
     "description": "course description",
     "price": 100,
     "imageLink": "https://linktoimage.com" 
  }
- **Output Body:**
  ```json
  {
     "message": "Course created successfully"
  }

### 4.  Return all Courses

- **Endpoint:** `GET /admin/courses`
- **Description:** Returns all the courses.
- **Input Headers:**
  ```json
  {
    "Authorization": "Bearer <token>"
  }  
- **Output Body:**
  ```json
  {
      "courses": [
        {
          "id": 1,
          "title": "course title",
          "description": "course description",
          "price": 100,
          "imageLink": "https://linktoimage.com"
        }
     ] 
  }

## User Routes

### 1. Create User Account

- **Endpoint:** `POST /user/signup`
- **Description:** Creates a new user account.
- **Input Body:**
  ```json
  {
    "name": "name",
    "userEmail": "userEmail",
    "password": "pass"
  }
- **Output Body:**
  ```json
  {
    "message": "User created successfully"
  }
- **Validation:** Zod for Input Validation.

### 2. Logs in an User Account

- **Endpoint:** `POST /user/signin`
- **Description:**  Logs in an user account.
- **Input Body:**
  ```json
  {
    "userEmail": "userEmail",
    "password": "pass"
  }
- **Output Body:**
  ```json
  {
    "token": "your-token"
  }

### 3.  Purchase a Course

- **Endpoint:** `POST /user/courses`
- **Description:** Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
- **Input Headers:**
  ```json
  {
    "Authorization": "Bearer <token>"
  }  
- **Output Body:**
  ```json
  {
       "message": "Course purchased successfully" 
  }

### 4. List Purchased Courses

- **Endpoint:** `POST /user/purchasedCourses`
- **Description:** Lists all the courses purchased by the user.
- **Input Headers:**
  ```json
  {
    "Authorization": "Bearer <token>"
  }  
- **Output Body:**
  ```json
  {
      "courses": [
        {
          "id": 1,
          "title": "course title",
          "description": "course description",
          "price": 100,
          "imageLink": "https://linktoimage.com"
        }
     ] 
  }
 
## Contact Information

For any inquiries or issues, please contact the project maintainers:

- **Email:** abhijeetsinha.smith@gmail.com

