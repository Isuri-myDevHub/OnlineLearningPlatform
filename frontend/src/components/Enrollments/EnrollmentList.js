import React, { useState, useEffect } from 'react';
import { getEnrollments, deleteEnrollment } from '../../services/api';

const EnrollmentList = ({ token }) => {
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
        const fetchEnrollments = async () => {
            const response = await getEnrollments(token);
            setEnrollments(response.data);
        };
        fetchEnrollments();
    }, [token]);

    const handleDelete = async (id) => {
        await deleteEnrollment(id, token);
        setEnrollments(enrollments.filter(enrollment => enrollment.id !== id));
    };

    return (
        <div>
            <h2>Enrollments</h2>
            <ul>
                {enrollments.map(enrollment => (
                    <li key={enrollment.id}>
                        Student ID: {enrollment.studentId}, Course ID: {enrollment.courseId}
                        <button onClick={() => handleDelete(enrollment.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EnrollmentList;
