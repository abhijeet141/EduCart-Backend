# Educart Backend

## Project Overview

This project provides the backend infrastructure for the Educart platform. It handles user authentication, data storage, and API endpoints for various functionalities. 

## Tech Stack

- **Express.js:** Web application framework for Node.js, used for building the backend services.
- **TypeScript:** A superset of JavaScript that adds static typing, enhancing code quality and maintainability.
- **MongoDB:** NoSQL database used for storing user data, course information, and other relevant data.

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
2. **Access API endpoints:** Once the server is running, you can access the API endpoints using tools like Postman or curl. Refer to the documentation for specific endpoint details and usage examples. 

## Contact Information

For any inquiries or issues, please contact the project maintainers:

- **Email:** abhijeetsinha.smith@gmail.com

