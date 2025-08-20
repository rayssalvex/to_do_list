# 📝 To Do List com React + TailwindCSS - PROJETO 7

Este é o clássico **To Do List** desenvolvido em **React** e estilizado com **TailwindCSS**.  
O projeto é ideal para praticar os conceitos fundamentais do React de forma prática e divertida.  

---

## 📌 Conceito da Aplicação
Um gerenciador de tarefas simples e funcional, com as seguintes funcionalidades:

1. **Adicionar tarefas** – Input para criar novas tarefas  
2. **Listar tarefas** – Exibir todas as tarefas cadastradas  
3. **Marcar como concluída** – Toggle do status da tarefa  
4. **Remover tarefas** – Deletar tarefas desnecessárias  
5. **Filtrar tarefas** – Ver todas, pendentes ou concluídas  

---

## ✅ Requisitos Funcionais

### 01 - Adicionar Tarefas
- Input controlado para nova tarefa  
- Botão ou tecla Enter para submeter  
- Validação: não permitir tarefas vazias  
- Limpar input após adicionar  

### 02 - Exibir Lista de Tarefas
- Renderizar array de tarefas  
- Mostrar título da tarefa  
- Indicar status (pendente/concluída)  
- Lista vazia: exibir mensagem amigável  

### 03 - Marcar como Concluída
- Checkbox ou botão para toggle  
- Atualizar estado da tarefa específica  
- Feedback visual (texto riscado, cor diferente)  

### 04 - Remover Tarefas
- Botão de delete para cada tarefa  
- Confirmação antes de remover (opcional)  
- Remover do estado/lista  

### 05 - Contador de Tarefas
- Mostrar total de tarefas  
- Mostrar quantas estão pendentes  
- Mostrar quantas estão concluídas  

### 06 - Interface Responsiva
- Design mobile-first  
- Layout adaptativo  
- Experiência consistente em todos os dispositivos  

---

## 🚀 Tecnologias Utilizadas
- [React](https://reactjs.org/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [Vite](https://vitejs.dev/)  

---

## 📂 Estrutura do Projeto
```bash
todo-list/
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
