import React from "react";

export default function TaskItem({ task, toggleTask, deleteTask }) {
  const handleDelete = () => {
    if (window.confirm("Tem certeza que deseja apagar esta tarefa?")) {
      deleteTask(task.id);
    }
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        title="Concluído"
      />
      <span>{task.title}</span>
      <button
        title="Apagar"
        onClick={handleDelete}
      >
        ❌
      </button>
    </li>
  );
}