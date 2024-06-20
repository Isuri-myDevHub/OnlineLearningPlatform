import React, { useState, useEffect } from 'react';
import { getCourses, createCourse, deleteCourse } from '../../services/api';
import './CourseList.css'; // Import CSS file

const CourseList = ({ token }) => {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({ title: '', instructor: '' });
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await getCourses();
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchCourses();
    }, []);

    const handleChange = (e) => {
        setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await createCourse(newCourse, token);
            const response = await getCourses();
            setCourses(response.data);
            setMessage('Course added successfully!');
            setNewCourse({ title: '', instructor: '' }); // Clear input fields after successful addition
        } catch (error) {
            console.error('Error adding course:', error);
            setMessage('Error: ' + (error.response?.data?.message || 'Failed to add course'));
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteCourse(id, token);
            setCourses(courses.filter(course => course.id !== id));
            setMessage('Course deleted successfully!');
        } catch (error) {
            console.error('Error deleting course:', error);
            setMessage('Error: ' + (error.response?.data?.message || 'Failed to delete course'));
        }
    };

    return (
        <div>
            <h2>Courses</h2>
            <form onSubmit={handleAdd} className="course-form">
                <input type="text" name="title" placeholder="Title" onChange={handleChange} value={newCourse.title} required />
                <input type="text" name="instructor" placeholder="Instructor" onChange={handleChange} value={newCourse.instructor} required />
                <button type="submit">Add Course</button>
            </form>
            <p>{message}</p>
            <ul className="course-list">
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
