import Swal from 'sweetalert2';

export default function TaskItem({ task, toggleTask, deleteTask }) {
  const handleDelete = () => {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá reverter esta ação!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(task.id);
        Swal.fire(
          'Deletada!',
          'Sua tarefa foi removida.',
          'success'
        )
      }
    })
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