// src/components/Users/UserList.js

import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../../services/api';

const UserList = ({ token }) => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers(token);
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, [token]);

    const handleDelete = async (id) => {
        try {
            await deleteUser(id, token);
            setUsers(users.filter(user => user.id !== id));
            setMessage('User deleted successfully!');
        } catch (error) {
            console.error('Error deleting user:', error);
            setMessage('Error: ' + error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Users</h2>
            <p>{message}</p>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} - {user.email}
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
