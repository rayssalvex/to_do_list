import React from "react";
import './TaskItem.css';

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        title="Concluído"
      />
      <span>{task.title}</span>
      <button title="Apagar" onClick={() => deleteTask(task.id)}>
        ❌
      </button>
    </li>
  );
}
