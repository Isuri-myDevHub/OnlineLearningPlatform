# CodeMaster Online Learning Platform 

This is an online learning platform where students can enroll in courses and admins can manage courses and users.
All the details are included in the Architecture and Design document.

### Version
0.1.0

### License
Copyright &copy; 2024 Isuri <br>
This project is licensed under this [MIT License](License.txt)

<br>



## Technology Stack

### Frontend

- **React.js:** Frontend framework for building user interfaces.
- **React Router DOM:** Declarative routing for React applications.
- **Axios:** Promise-based HTTP client for making API requests.
- **Bootstrap:** Frontend UI framework
- **Jest and React Testing Library:** For unit and integration testing.

### Backend

- **Node.js:** JavaScript runtime for server-side development.
- **Express.js:** Web application framework for Node.js.
- **PostgreSQL :** database for storing course and user data.
- **JWT (JSON Web Tokens):** For authentication and authorization.

<br>

## Installation

# Clone the repository
git clone https://github.com/Isuri-myDevHub/OnlineLearningPlatform.git
cd OnlineLearningPlatform

# Install backend dependencies
cd backend
npm install

# Start the backend server
npm start

# If you are using nodemon for development, you can run:
npm run dev

# In a new terminal window/tab
# Install frontend dependencies
cd ../frontend
npm install

# Start the frontend server
npm start


## Testing

1. **Unit Testing:**

     ```bash
    npm test 

<br>

## API Documentation (Postman)

1. **Download and install Postman:** [Postman](https://www.postman.com/downloads/)

2. **Import the API collection:**

    Download the Postman API JSON file from [here](/backend/postman/Online%20Platform%20API.postman_collection.json)
    Open Postman, click on "Import" and select the downloaded JSON file.

3. **Explore the API endpoints in Postman for detailed usage instructions.**

<br>

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please submit a pull request or report an issue.


