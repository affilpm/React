import React, { useState, useEffect } from "react";

const ToDo = () => {
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : null);
  const [newTodo, setNewTodo] = useState("");


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
};

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, todoIndex) =>
      todoIndex === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <div style={styles.appWrapper}>
        <h1 style={styles.title}>To-Do List</h1>
        <div style={styles.inputContainer}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter a new task"
            style={styles.input}
          />
          <button onClick={addTodo} style={styles.addButton}>
            Add Task
          </button>
        </div>
        <ul style={styles.list}>
          {todos.length === 0 ? (
            <p style={styles.noTasks}>No tasks yet. Add a task!</p>
          ) : (
            todos.map((todo, index) => (
              <li key={index} style={styles.listItem}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(index)}
                  style={styles.checkbox}
                />
                <span
                  style={{
                    ...styles.todoText,
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#6c757d" : "#212529",
                  }}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(index)}
                  style={styles.deleteButton}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
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
    backgroundColor: "#f8f9fa",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  appWrapper: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "40px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    width: "400px",
  },
  title: {
    fontSize: "2em",
    marginBottom: "20px",
    color: "#343a40",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    flex: 1,
    borderRadius: "5px",
    border: "1px solid #ced4da",
    marginRight: "10px",
  },
  addButton: {
    padding: "12px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  list: {
    listStyleType: "none",
    paddingLeft: 0,
    margin: 0,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#f8f9fa",
    borderRadius: "5px",
    marginBottom: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  checkbox: {
    marginRight: "10px",
  },
  todoText: {
    fontSize: "18px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  noTasks: {
    color: "#6c757d",
    textAlign: "center",
  },
};

export default ToDo;
