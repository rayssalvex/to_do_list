# 📝 To Do List com React - PROJETO 7

Um **To Do List clássico** desenvolvido em **React.js**, com foco em **boas práticas de UI/UX** e funcionalidades essenciais para gerenciamento de tarefas.  
Este projeto foi desenvolvido sem Tailwind (usando apenas CSS puro) para praticar conceitos fundamentais de **React, componentes, estado e responsividade**.

---

## 🚀 Funcionalidades

- **Adicionar tarefas**
  - Input controlado para nova tarefa
  - Botão ou tecla **Enter** para adicionar
  - Validação: não permite tarefas vazias
  - Input é limpo após adicionar

- **Listar tarefas**
  - Exibição de todas as tarefas cadastradas
  - Mostra título da tarefa
  - Indica status (pendente ✅ ou concluída ✔)
  - Lista vazia exibe mensagem amigável

- **Marcar como concluída**
  - Checkbox para alternar entre **pendente** e **concluída**
  - Feedback visual (texto riscado e cor diferente)

- **Remover tarefas**
  - Botão ❌ em cada item para remover
  - (Em breve: confirmação com SweetAlert2)

- **Filtros**
  - Ver **todas, pendentes ou concluídas**
  - Botão ativo fica destacado

- **Contadores**
  - Total de tarefas
  - Quantas estão pendentes
  - Quantas já foram concluídas

- **Interface Responsiva**
  - Design **mobile-first**
  - Layout adaptativo
  - Em telas grandes, interface em **duas colunas**:
    - 📌 **Coluna esquerda** → Filtros e contadores  
    - 📝 **Coluna direita** → Input + lista de tarefas  

- **Navbar e Footer**
  - Navbar fixa no topo com título do app
  - Footer no rodapé com créditos

---

## 🖼️ Layout

### 📱 Mobile
- Navbar no topo
- Filtros e contadores empilhados
- Lista de tarefas abaixo

### 🖥️ Desktop
- Navbar no topo
- **Duas colunas**:
  - Esquerda → Filtros + contadores
  - Direita → Input + lista
- Footer fixado no final da página

---

## 🛠️ Tecnologias Utilizadas

- [React.js](https://react.dev/)
- [JavaScript ES6+](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [CSS Puro](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

---

## 📂 Estrutura do Projeto
```bash
to-do-list/
 ├── src/
 │   ├── components/
 │   │   ├── TaskInput.jsx
 │   │   ├── TaskItem.jsx
 │   │   └── TaskList.jsx
 │   ├── App.jsx
 │   ├── index.css
 │   └── main.jsx
 ├── package.json
 └── tailwind.config.js


---

## ▶️ Como Rodar o Projeto

### 1. Clonar repositório
```bash
git clone https://github.com/rayssalvex/to-do-list.git
cd todo-list
npm install
npm run dev

