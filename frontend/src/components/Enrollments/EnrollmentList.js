// src/components/Enrollments/EnrollmentList.js

import React, { useState, useEffect } from 'react';
import { getEnrollments, createEnrollment, deleteEnrollment } from '../../services/api';

const EnrollmentList = ({ token }) => {
    const [enrollments, setEnrollments] = useState([]);
    const [courseId, setCourseId] = useState('');

    useEffect(() => {
        const fetchEnrollments = async () => {
            try {
                const response = await getEnrollments(token);
                setEnrollments(response.data);
            } catch (error) {
                console.error('Error fetching enrollments:', error);
            }
        };
        fetchEnrollments();
    }, [token]);

    const handleEnroll = async (e) => {
        e.preventDefault();
        try {
            await createEnrollment({ courseId }, token);
            const response = await getEnrollments(token);
            setEnrollments(response.data);
        } catch (error) {
            console.error('Error enrolling:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteEnrollment(id, token);
            setEnrollments(enrollments.filter(enrollment => enrollment.id !== id));
        } catch (error) {
            console.error('Error deleting enrollment:', error);
        }
    };

    return (
        <div>
            <h2>Enrollments</h2>
            <form onSubmit={handleEnroll}>
                <input type="text" placeholder="Course ID" value={courseId} onChange={(e) => setCourseId(e.target.value)} required />
                <button type="submit">Enroll</button>
            </form>
            <ul>
                {enrollments.map(enrollment => (
                    <li key={enrollment.id}>
                        {enrollment.course.title}
                        <button onClick={() => handleDelete(enrollment.id)}>Unenroll</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EnrollmentList;
