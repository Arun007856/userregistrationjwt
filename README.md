# Node.js User Registration and Chat Import System with TypeScript

This project implements a user registration and login system using Node.js, Express, TypeScript, and JWT-based authentication. Additionally, it includes a feature to import chat history from an Excel file and a basic task filtering API. The system is built using TypeScript for better type safety and maintainability.

## Features

- **User Registration**: Users can register by providing their email and password.
- **Login API**: Users can log in with their credentials to receive a JWT token for authentication.
- **JWT Authentication**: Protected routes using JWT tokens for secure API access.
- **Chat Import via Excel**: Import chat history from an Excel file into the system.
- **Task Filtering**: Basic task filtering to view tasks by status (completed or pending).
- **Database**: The project uses PostgreSQL for data storage.

## Technology Stack

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building the API.
- **TypeScript**: Provides type safety and helps in writing robust code.
- **PostgreSQL**: Relational database system used to store users, chat history, and tasks.
- **bcrypt.js**: Used to hash passwords securely.
- **JWT (jsonwebtoken)**: Used to generate tokens for authentication.
- **xlsx**: Library for parsing Excel files for chat import.
- **Sequelize**: ORM used for interacting with the PostgreSQL database.

## Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **PostgreSQL**: [Download PostgreSQL](https://www.postgresql.org/download/)

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Arun007856/UserRegistrationjwt
cd UserRegistrationwt