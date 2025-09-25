import PropTypes from 'prop-types';
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import './Tasks.css';

export default function Tasks( {tasks, handleEdit, handleDelete} ) {
  return (
    <div className='taskDiv'>
      {
        tasks.length > 0
          ? (
            <ul className='tasks'>
              {tasks.map((task) => (
                <li key={task.id} className='listTasks'>
                  <span className={`itemTask ${task.status === 'Concluida' ? 'taskCompleted' : ''}`}>{task.description}</span>
                  <span className={`itemTask ${task.status === 'Concluida' ? 'taskCompleted' : ''}`}>{task.priority}</span>
                  <span className={`itemTask ${task.status === 'Concluida' ? 'taskCompleted' : ''}`}>{task.status}</span>
                  <span className={`itemTask ${task.status === 'Concluida' ? 'taskCompleted' : ''}`}>{
                    new Date(task.dueDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
                  }
                  </span>

                  <div className='taskIcons'>
                    <FaEdit
                      onClick={() => handleEdit(task.id)}
                      className="editIcon"
                    />
                    <FaRegTrashAlt
                      onClick={() => handleDelete(task.id)}
                      className="deleteIcon"
                    />
                  </div>
                </li>
              ))}
            </ul>
          )
          : (<p>Nenhuma tarefa adicionada.</p>)
      }
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
