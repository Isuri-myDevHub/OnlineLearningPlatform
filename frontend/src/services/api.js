import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Change to your backend URL

const register = (user) => axios.post(`${API_URL}/users/register`, user);
const login = (user) => axios.post(`${API_URL}/users/login`, user);
const getUsers = (token) => axios.get(`${API_URL}/users`, { headers: { Authorization: `Bearer ${token}` } });
const getUserById = (id, token) => axios.get(`${API_URL}/users/${id}`, { headers: { Authorization: `Bearer ${token}` } });
const updateUser = (id, user, token) => axios.put(`${API_URL}/users/${id}`, user, { headers: { Authorization: `Bearer ${token}` } });
const deleteUser = (id, token) => axios.delete(`${API_URL}/users/${id}`, { headers: { Authorization: `Bearer ${token}` } });

const getCourses = () => axios.get(`${API_URL}/courses`);
const getCourseById = (id) => axios.get(`${API_URL}/courses/${id}`);
const createCourse = (course, token) => axios.post(`${API_URL}/courses`, course, { headers: { Authorization: `Bearer ${token}` } });
const updateCourse = (id, course, token) => axios.put(`${API_URL}/courses/${id}`, course, { headers: { Authorization: `Bearer ${token}` } });
const deleteCourse = (id, token) => axios.delete(`${API_URL}/courses/${id}`, { headers: { Authorization: `Bearer ${token}` } });

const getEnrollments = (token) => axios.get(`${API_URL}/enrollments`, { headers: { Authorization: `Bearer ${token}` } });
const createEnrollment = (enrollment, token) => axios.post(`${API_URL}/enrollments`, enrollment, { headers: { Authorization: `Bearer ${token}` } });
const updateEnrollment = (id, enrollment, token) => axios.put(`${API_URL}/enrollments/${id}`, enrollment, { headers: { Authorization: `Bearer ${token}` } });
const deleteEnrollment = (id, token) => axios.delete(`${API_URL}/enrollments/${id}`, { headers: { Authorization: `Bearer ${token}` } });

export {
    register,
    login,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
    getEnrollments,
    createEnrollment,
    updateEnrollment,
    deleteEnrollment
};
