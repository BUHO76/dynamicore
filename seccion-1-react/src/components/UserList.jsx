// UserList.js
import React from 'react';

const UserList = ({ users }) => {
    // Ordenar los usuarios alfabéticamente por nombre
    const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <ol>
            {sortedUsers.map((user, index) => (
                <li key={index}>{user.name}</li>
            ))}
        </ol>
    );
};

export default UserList;
