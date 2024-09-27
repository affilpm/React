import React from 'react';
import Users from './users';

const One = () => {
  const users = [
    { name: 'Alice', email: 'alice@gmail.com' },
    { name: 'Bob', email: 'bob@gmail.com' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.appWrapper}>
      <h1>User List</h1>
      <Users users={users} />
    </div>
    </div>


  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  appWrapper: {
    borderRadius: "10px",
    padding: "40px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    width: "400px",
  },
}

export default One;