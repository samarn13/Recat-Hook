import React, { useState } from "react";
import "./App.css";
import { AddTodo, Title, Todos } from "./features";

const initTasks = [
  { id: "todo-0", content: "Do Homework", done: false },
  { id: "todo-1", content: "Write a report", done: true },
  { id: "todo-2", content: "Hangout with friends", done: true },
  { id: "todo-3", content: "New Task", done: false },
];

function App() {
  const [task, setTask] = useState(initTasks);
  const [filter, setFilter] = useState("all");

  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const onDelete = (id) => {
    let updatedTasks = task.filter((e) => {
      return e.id !== id;
    });
    setTask(updatedTasks);
  };

  const addTask = (e) => {
    console.log("Add task", e);
    let updatedTasks = [
      ...task,
      {
        id: parseInt(Math.random() * 100),
        content: e,
        done: false,
      },
    ];
    setTask(updatedTasks);
  };

  const toggleDone = (id) => {
    console.log("toggle", id);
    let updatedTasks = task.map((e) => {
      if (id === e.id) {
        return { ...e, done: !e.done };
      }
      return e;
    });
    setTask(updatedTasks);
  };

  return (
    <>
      <div className="container">
        <Title />
        <AddTodo onAdd={addTask} />
        <span>
          <label htmlFor="filter">Filter</label>
          <select name="filter" onChange={onFilterChange} value={filter}>
            <option value="all">...</option>
            <option value="done">Done</option>
            <option value="active">Not Done Yet</option>
          </select>
        </span>
        <Todos
          tasks={task}
          onDelete={onDelete}
          toggleDone={toggleDone}
          filter={filter}
        />
      </div>
    </>
  );
}

export default App;
