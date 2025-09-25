import PropTypes from 'prop-types';
import './Form.css';

export default function Form({ handleSubmit, handleChange, taskData }) {
  return (
  <div className='formDiv'>
    <form onSubmit={handleSubmit} action='#' className='form'>
      <div className='inputDiv'>
        <span className='formLabel'>Descrição</span>
        <input
          onChange={handleChange}
          type='text'
          name='description'
          value={taskData.description}
          placeholder='Adicione sua tarefa'
          className='inputTask'
        />
      </div>

      <div className='priorityDiv'>
        <span className='formLabel'>Prioridade</span>
        <select onChange={handleChange} name='priority' value={taskData.priority} className='prioritySelect'>
          <option value='Baixa'>Baixa</option>
          <option value='Média'>Média</option>
          <option value='Alta'>Alta</option>
        </select>
      </div>

      <div className='statusDiv'>
        <span className='formLabel'>Status</span>
        <select onChange={handleChange} name='status' value={taskData.status} className='statusSelect'>
          <option value='Pendente'>Pendente</option>
          <option value='Concluida'>Concluída</option>
        </select>
      </div>

      <div className='dueDateDiv'>
        <span className='formLabel'>Entrega</span>
        <input onChange={handleChange} name='dueDate' type='date' value={taskData.dueDate} className='dueDateSelect' />
      </div>

      <button type='submit' className='submitButton'>
        Enviar
      </button>

    </form>
  </div>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  taskData: PropTypes.object.isRequired,
}
