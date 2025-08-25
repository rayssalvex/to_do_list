import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  // Lógica para carregar as tarefas do localStorage
  const getInitialTasks = () => {
    const storedTasks = localStorage.getItem('tasks');
    // Se houver tarefas salvas, retorna elas. Se não, retorna um array vazio.
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  // Usando a função getInitialTasks para inicializar o estado das tarefas
  const [tasks, setTasks] = useState(getInitialTasks);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  // useEffect para salvar as tarefas no localStorage
  // Este efeito é executado sempre que a variável 'tasks' muda
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tarefa adicionada com sucesso!',
      showConfirmButton: false,
      timer: 1500
    });
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
    <div className={`app-container ${theme}`}>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />

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
};