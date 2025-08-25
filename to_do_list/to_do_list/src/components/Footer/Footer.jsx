import React from "react";
import "./Footer.css";
import "../../assets/assets";
import { assets } from "../../assets/assets";

export default function Footer() {
  return (
    <footer className="footer">
      <p>@2025 To Do List - Projeto 7 - Todos os direitos reservados. Developed by: Grupo 13 - Boticode </p>
      <div class="footer-github">
        <a href="https://github.com/rayssalvex/to_do_list" target="_blank" rel="noopener noreferrer">
          <img src={assets.github_logo} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
}
