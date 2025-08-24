import React from "react";
import "./Navbar.css";

export default function Navbar({ toggleTheme, currentTheme }) {
  return (
    <nav className="navbar">
      <h2>To Do List 📋 </h2>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {currentTheme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}