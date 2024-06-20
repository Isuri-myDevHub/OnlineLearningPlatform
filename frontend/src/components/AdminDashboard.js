import React from 'react';
import CourseList from './Courses/CourseList'; // Adjust path as per your structure
import UserList from './Users/UserList'; // Adjust path as per your structure

const AdminDashboard = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Admin Dashboard</h2>
                            <p className="text-center">Welcome, Administrator!</p>
                            {/* Example usage of imported components */}
                            <CourseList />
                            <UserList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
