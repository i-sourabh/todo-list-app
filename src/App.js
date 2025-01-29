import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <>
      <GlobalStyles />
      <div>
        <h2>To-Do List</h2>
        <TodoInput addTask={addTask} />
        <Filters filter={filter} setFilter={setFilter} />
        <TodoList tasks={filteredTasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      </div>
    </>
  );
};

export default App;
