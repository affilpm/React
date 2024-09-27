import React from 'react';

const Users = ({ users }) => {
  return (
    <ul>
        {users.map(
            (users) => (
                <li>{`users ${users.name}, email ${users.email}`} </li>

            )
        )}
    </ul>
  );
};

export default Users;