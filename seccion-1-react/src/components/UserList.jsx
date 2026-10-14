// UserList.js
import React from 'react';

const UserList = ({ users = [] }) => {
    // Ordenar los usuarios alfabéticamente por nombre
    const sortedUsers = users.toSorted((a, b) => a.name.localeCompare(b.name));

    return (
        <ol>
            {sortedUsers.map((user) => (
                <li key={user.id}>ID: {user.id} - Nombre: {user.name} - Edad: {user.age}</li>
            ))}
        </ol>
    );
};

export default UserList;
