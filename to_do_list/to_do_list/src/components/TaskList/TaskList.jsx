import React from "react";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ tasks, toggleTask, deleteTask, currentFilter }) {
  if (tasks.length === 0) {
    let message = "Nenhuma tarefa. Adicione novas tarefas para exibir aqui ✏️.";
    if (currentFilter === "completed") message = "Nenhuma tarefa concluída. Continue firme para concluir uma 💪.";
    else if (currentFilter === "pending") message = "Você concluiu todas as suas tarefas. Nenhuma tarefa pendente, parabéns 🥳.";

    return <p className="empty">{message}</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
