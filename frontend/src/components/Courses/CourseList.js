// // src/components/Courses/CourseList.js

// import React, { useState, useEffect } from 'react';
// import { getCourses, createCourse, deleteCourse } from '../../services/api';

// const CourseList = ({ token }) => {
//     const [courses, setCourses] = useState([]);
//     const [newCourse, setNewCourse] = useState({ title: '', instructor: '' });
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         const fetchCourses = async () => {
//             try {
//                 const response = await getCourses();
//                 setCourses(response.data);
//             } catch (error) {
//                 console.error('Error fetching courses:', error);
//             }
//         };
//         fetchCourses();
//     }, []);

//     const handleChange = (e) => {
//         setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
//     };

//     const handleAdd = async (e) => {
//         e.preventDefault();
//         try {
//             await createCourse(newCourse, token);
//             const response = await getCourses();
//             setCourses(response.data);
//             setMessage('Course added successfully!');
//         } catch (error) {
//             console.error('Error adding course:', error);
//             setMessage('Error: ' + error.response.data.message);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await deleteCourse(id, token);
//             setCourses(courses.filter(course => course.id !== id));
//             setMessage('Course deleted successfully!');
//         } catch (error) {
//             console.error('Error deleting course:', error);
//             setMessage('Error: ' + error.response.data.message);
//         }
//     };

//     return (
//         <div>
//             <h2>Courses</h2>
//             <form onSubmit={handleAdd}>
//                 <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
//                 <input type="text" name="instructor" placeholder="Instructor" onChange={handleChange} required />
//                 <button type="submit">Add Course</button>
//             </form>
//             <p>{message}</p>
//             <ul>
//                 {courses.map(course => (
//                     <li key={course.id}>
//                         {course.title} - {course.instructor}
//                         <button onClick={() => handleDelete(course.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CourseList;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseList = ({ token }) => {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({ title: '', description: '', instructor: '' });
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/courses'); // Adjust URL as per your backend setup
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const handleChange = (e) => {
        setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/courses', newCourse, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            await fetchCourses(); // Refetch courses after adding
            setMessage('Course added successfully!');
            setNewCourse({ title: '', description: '', instructor: '' }); // Clear form fields
        } catch (error) {
            console.error('Error adding course:', error);
            setMessage('Error: ' + error.response.data.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/courses/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCourses(courses.filter(course => course.id !== id));
            setMessage('Course deleted successfully!');
        } catch (error) {
            console.error('Error deleting course:', error);
            setMessage('Error: ' + error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Courses</h2>
            <form onSubmit={handleAdd}>
                <input type="text" name="title" placeholder="Title" value={newCourse.title} onChange={handleChange} required />
                <input type="text" name="description" placeholder="Description" value={newCourse.description} onChange={handleChange} required />
                <input type="text" name="instructor" placeholder="Instructor" value={newCourse.instructor} onChange={handleChange} required />
                <button type="submit">Add Course</button>
            </form>
            <p>{message}</p>
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

