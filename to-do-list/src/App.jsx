import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
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
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        {/* Coluna Esquerda */}
        <aside className="sidebar">
          <h2>Filtros</h2>
          <div className="filters">
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              Todas
            </button>
            <button
              className={filter === "pending" ? "active" : ""}
              onClick={() => setFilter("pending")}
            >
              Pendentes
            </button>
            <button
              className={filter === "completed" ? "active" : ""}
              onClick={() => setFilter("completed")}
            >
              Concluídas
            </button>
          </div>
          <h1>Suas tarefas estão assim:</h1>
          <div className="counters">
            <p>Total: <strong>{total}</strong></p>
            <p>Pendentes: <strong>{pending}</strong></p>
            <p>Concluídas: <strong>{completed}</strong></p>
          </div>
        </aside>

        {/* Coluna Direita */}
        <section className="tasks-section">
          <h2>Minhas Tarefas</h2>
          <TaskInput addTask={addTask} />
          <TaskList
            tasks={filteredTasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
