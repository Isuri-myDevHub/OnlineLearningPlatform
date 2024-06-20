import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../../services/api';

const UserList = ({ token }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await getUsers(token);
            setUsers(response.data);
        };
        fetchUsers();
    }, [token]);

    const handleDelete = async (id) => {
        await deleteUser(id, token);
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <h2>Users</h2>
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
