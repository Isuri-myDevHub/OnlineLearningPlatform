// src/components/Auth/Login.js

import React, { useState } from 'react';
import { login } from '../../services/api';
import { Link } from 'react-router-dom';

const Login = ({ setToken }) => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(form);
            setToken(response.data.token);
            setMessage('Login successful!');
        } catch (error) {
            setMessage('Error: ' + error.response.data.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" className="form-control" placeholder="Enter email" value={form.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" className="form-control" placeholder="Password" value={form.password} onChange={handleChange} required />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </form>
                            {message && <p className="mt-3 text-center">{message}</p>}
                            <div className="mt-3 text-center">
                                <Link to="/register">Create an Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
