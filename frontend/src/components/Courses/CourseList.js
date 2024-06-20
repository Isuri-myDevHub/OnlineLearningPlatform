import React, { useState, useEffect } from 'react';
import { getCourses, deleteCourse } from '../../services/api';

const CourseList = ({ token }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await getCourses();
            setCourses(response.data);
        };
        fetchCourses();
    }, []);

    const handleDelete = async (id) => {
        await deleteCourse(id, token);
        setCourses(courses.filter(course => course.id !== id));
    };

    return (
        <div>
            <h2>Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        {course.title} - {course.instructor}
                        <button onClick={() => handleDelete(course.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
