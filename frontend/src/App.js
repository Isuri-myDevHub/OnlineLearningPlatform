import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import CourseList from './components/Courses/CourseList';
import CourseDetail from './components/Courses/CourseDetail';
import EnrollmentList from './components/Enrollments/EnrollmentList';
import UserList from './components/Users/UserList';

const App = () => {
    const [token, setToken] = useState('');

    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/enrollments">Enrollments</Link>
                <Link to="/users">Users</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login setToken={setToken} />} />
                <Route path="/courses" element={<CourseList token={token} />} />
                <Route path="/courses/:id" element={<CourseDetail token={token} />} />
                <Route path="/enrollments" element={<EnrollmentList token={token} />} />
                <Route path="/users" element={<UserList token={token} />} />
            </Routes>
        </Router>
    );
};

export default App;
