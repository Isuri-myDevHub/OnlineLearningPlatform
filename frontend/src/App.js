// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './components/Home';
// import Register from './components/Auth/Register';
// import Login from './components/Auth/Login';
// import CourseList from './components/Courses/CourseList';
// import CourseDetail from './components/Courses/CourseDetail';
// import EnrollmentList from './components/Enrollments/EnrollmentList';
// import UserList from './components/Users/UserList';
// import About from './components/About'; // Import About component
// import Contact from './components/Contact'; // Import Contact component
// import './App.css';

// const App = () => {
//     const [token, setToken] = useState('');

//     return (
//         <Router>
//             <div className="navbar">
//                 <Link to="/">Home</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/contact">Contact</Link>
//                 <Link to="/courses">Courses</Link>
//                 <div className="auth-buttons">
//                     <Link to="/register">Register</Link>
//                     <Link to="/login">Login</Link>
//                 </div>
//             </div>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} /> {/* Route for About page */}
//                 <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/login" element={<Login setToken={setToken} />} />
//                 <Route path="/courses" element={<CourseList token={token} />} />
//                 <Route path="/courses/:id" element={<CourseDetail token={token} />} />
//                 <Route path="/enrollments" element={<EnrollmentList token={token} />} />
//                 <Route path="/users" element={<UserList token={token} />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import CourseList from './components/Courses/CourseList';
import CourseDetail from './components/Courses/CourseDetail';
import EnrollmentList from './components/Enrollments/EnrollmentList';
import UserList from './components/Users/UserList';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const App = () => {
    const [token, setToken] = useState('');

    return (
        <Router>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/courses">Courses</Link>
                <div className="auth-buttons">
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
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
