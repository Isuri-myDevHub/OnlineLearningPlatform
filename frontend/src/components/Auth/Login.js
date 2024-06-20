import React, { useState } from 'react';
import { login } from '../../services/api'; // Adjust the relative path as per your actual structure
import { Link} from 'react-router-dom';
import AdminDashboard from '../AdminDashboard'; // Import AdminDashboard component

const Login = ({ setToken }) => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const [redirectToDashboard, setRedirectToDashboard] = useState(false); // State to handle redirection

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(form);
            console.log('Response:', response); // Log the response for debugging
            if (response && response.data && response.data.token) {
                setToken(response.data.token);
                setMessage('Login successful!');

                // Check if admin credentials are used
                if (form.email === 'admin@codemaster.com' && form.password === 'admin123') {
                    setRedirectToDashboard(true); // Redirect to admin dashboard
                }
            } else {
                setMessage('Error: Invalid response from server');
            }
        } catch (error) {
            console.error('Error:', error); // Log the error for debugging
            if (error.response && error.response.data && error.response.data.message) {
                setMessage('Error: ' + error.response.data.message);
            } else {
                setMessage('Error: Unable to login. Please try again later.');
            }
        }
    };

    if (redirectToDashboard) {
        // Redirect to AdminDashboard if admin credentials were used
        return <AdminDashboard />;
    }

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
