import React from 'react';
import Users from './users';

const One = () => {
  const users = [
    { name: 'Alice', email: 'alice@gmail.com' },
    { name: 'Bob', email: 'bob@gmail.com' },
  ];

  return (
    <div>
      <h1>User List</h1>
      <Users users={users} />
    </div>

  );
};

export default One;