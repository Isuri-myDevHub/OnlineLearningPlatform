import React, { useState, useEffect } from 'react';
import { getCourseById, updateCourse } from '../../services/api';
import { useParams } from 'react-router-dom';

const CourseDetail = ({ token }) => {
    const { id } = useParams();
    const [course, setCourse] = useState({});
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchCourse = async () => {
            const response = await getCourseById(id);
            setCourse(response.data);
        };
        fetchCourse();
    }, [id]);

    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateCourse(id, course, token);
            setMessage('Course updated successfully!');
        } catch (error) {
            setMessage('Error: ' + error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Course Detail</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={course.title || ''} onChange={handleChange} required />
                <input type="text" name="description" value={course.description || ''} onChange={handleChange} required />
                <input type="text" name="instructor" value={course.instructor || ''} onChange={handleChange} required />
                <button type="submit">Update Course</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default CourseDetail;
