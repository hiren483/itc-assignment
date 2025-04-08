import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let todosString = localStorage.getItem("todos");
    let theme = localStorage.getItem("darkMode");
    if (todosString) {
      let savedTodos = JSON.parse(todosString);
      setTodos(savedTodos);
    }
    if (theme === "true") setDarkMode(true);
  }, []);

  const saveToLS = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  const addTask = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex].text = task;
      setTodos(updated);
      setEditIndex(null);
      saveToLS(updated);
    } else {
      const updated = [...todos, { text: task, completed: false }];
      setTodos(updated);
      saveToLS(updated);
    }

    setTask("");
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    saveToLS(newTodos);
  };

  const deleteTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    saveToLS(newTodos);
  };

  const editTask = (index) => {
    setTask(todos[index].text);
    setEditIndex(index);
  };

  const deletecompleted = (length) => {
    const newtodos = [];
    for (let i = 0; i < length; i++) {
      if (todos[i].completed === false) {
        newtodos.push(todos[i]);
      }
    }
    setTodos(newtodos);
    saveToLS(newtodos);
  };

  const clearAll = () => {
    setTodos([]);
    saveToLS([]);
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const pendingCount = todos.length - completedCount;

  return (
    <>
        <div className={darkMode ? "dark-app" : "app"}>
    <div id="main-heading-container">
        <h1 id="main-heading">Daily task manager</h1>
        <button className="toggle-theme" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
      <div className={darkMode ? "dark-todo-box" : "todo-box"}>
        <div className="input-area">
          <input
            type="text"
            placeholder="your task.."
            className="input-box"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
          <button className="add-btn" onClick={addTask}>
            {editIndex !== null ? "Save" : "+"}
          </button>
        </div>

        <p className="pending-text">You have {pendingCount} pending items</p>

        <ul className="task-list">
          {todos.map((todo, i) => (
            <li key={i} className={`task ${todo.completed ? "completed" : ""}`}>
              <div id="task-details">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(i)}
                  />
                <span>{todo.text}</span>
              </div>
              <div id="btns">
                <button id="delete-btn" className="work-btns" onClick={() => deleteTask(i)}>
                  ✕
                </button>
                <button id="edit-btn" className="work-btns" onClick={() => editTask(i)}>
                  edit
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="actions">
          <button className="btn" onClick={() => deletecompleted(todos.length)}>
            delete Completed
          </button>
          <button className="btn" onClick={clearAll}>Clear All</button>
        </div>
      </div>
    </div>
          </>
  );
}

export default App;
