
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider';
import { getCourses } from '../../services/api'; // Adjust as per your API methods
import CourseList from '../Courses/CourseList'; // Assuming CourseList component exists

const StudentDashboard = () => {
    const { user } = useContext(AuthContext); // Assuming user data is available in AuthContext
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await getCourses(); // Example API call to fetch courses
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchCourses();
    }, []);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2>Welcome, {user.username}!</h2>
                    <CourseList courses={courses} />
                    {/* Additional content specific to student dashboard */}
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
