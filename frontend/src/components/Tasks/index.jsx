import PropTypes from 'prop-types';
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import './Tasks.css';

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <div className="tasks-container">
      {tasks.length > 0 ? (
        <ul className="tasks-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span
                data-label="Descrição:"
                className={`task-data ${task.status === 'Concluida' ? 'task-completed' : ''}`}
              >
                {task.description}
              </span>
              <span
                data-label="Prioridade:"
                className={`task-data ${task.status === 'Concluida' ? 'task-completed' : ''}`}
              >
                {task.priority}
              </span>
              <span
                data-label="Status:"
                className={`task-data ${task.status === 'Concluida' ? 'task-completed' : ''}`}
              >
                {task.status}
              </span>
              <span
                data-label="Entrega:"
                className={`task-data ${task.status === 'Concluida' ? 'task-completed' : ''}`}
              >
                {new Date(task.dueDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
              </span>
              <div className="task-actions">
                <FaEdit
                  onClick={() => handleEdit(task.id)}
                  className="icon-edit"
                />
                <FaRegTrashAlt
                  onClick={() => handleDelete(task.id)}
                  className="icon-delete"
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-tasks-message">Nenhuma tarefa adicionada.</p>
      )}
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
