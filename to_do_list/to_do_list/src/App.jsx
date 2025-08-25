import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  const getInitialTasks = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  const [tasks, setTasks] = useState(getInitialTasks);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([newTask, ...tasks]);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tarefa adicionada com sucesso!",
      showConfirmButton: false,
      timer: 1300,
    });
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id) => {
    Swal.fire({
      title: "Tem certeza?",
      text: "Você não poderá reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTasks(tasks.filter((task) => task.id !== id));
        Swal.fire("Deletado!", "Sua tarefa foi removida.", "success");
      }
    });
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
    <div className={`app-container ${theme}`}>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />

      <main className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>Filtros</h2>
          <div className="filters">
            <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
              Todas
            </button>
            <button className={filter === "pending" ? "active" : ""} onClick={() => setFilter("pending")}>
              Pendentes
            </button>
            <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>
              Concluídas
            </button>
          </div>
          <h3>Suas tarefas estão assim:</h3>
          <div className="counters">
            <p>📝 Total: <strong>{total}</strong></p>
            <p>🗒️ Pendentes: <strong>{pending}</strong></p>
            <p>✅ Concluídas: <strong>{completed}</strong></p>
          </div>
        </aside>

        {/* Tasks */}
        <section className="tasks-section">
          <h2>Minhas Tarefas</h2>
          <TaskInput addTask={addTask} />
          <TaskList
            tasks={filteredTasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            currentFilter={filter}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
