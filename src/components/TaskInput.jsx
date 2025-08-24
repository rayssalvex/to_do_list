import React, { useState } from "react";

export default function TaskInput({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
