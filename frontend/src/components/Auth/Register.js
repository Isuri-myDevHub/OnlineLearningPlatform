import React, { useState } from 'react';
import { register } from '../../services/api'; // Updated import path
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({ username: '', email: '', password: '', role: '' }); // Initialize role as an empty string
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // useNavigate hook for navigation

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(form);
            setMessage('Registration successful!');
            navigate('/courses'); // Navigate to courses list
        } catch (error) {
            setMessage('Error: ' + (error.response?.data?.message || 'Registration failed'));
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Register</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input type="text" name="username" className="form-control" placeholder="Username" onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Role</label>
                                    <input type="text" name="role" className="form-control" placeholder="Role (e.g., student, admin)" onChange={handleChange} required />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Register</button>
                            </form>
                            <p className="text-center mt-3">{message}</p>
                            <p className="text-center">Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
