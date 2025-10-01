import PropTypes from 'prop-types';
import './Form.css';

export default function Form({ handleSubmit, handleChange, taskData }) {
  return (
    <div className="main-form-container">
      <form onSubmit={handleSubmit} action='#' className="form-container">
        <div className="form-group description-group">
          <label htmlFor="description" className="form-label">Descrição</label>
          <input
            id="description"
            onChange={handleChange}
            type='text'
            name='description'
            value={taskData.description}
            placeholder='Adicione sua tarefa'
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="priority" className="form-label">Prioridade</label>
          <select id="priority" onChange={handleChange} name='priority' value={taskData.priority} className="form-control">
            <option value='Baixa'>Baixa</option>
            <option value='Média'>Média</option>
            <option value='Alta'>Alta</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="status" className="form-label">Status</label>
          <select id="status" onChange={handleChange} name='status' value={taskData.status} className="form-control">
            <option value='Pendente'>Pendente</option>
            <option value='Concluida'>Concluída</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dueDate" className="form-label">Entrega</label>
          <input id="dueDate" onChange={handleChange} name='dueDate' type='date' value={taskData.dueDate} className="form-control" />
        </div>

        <button type='submit' className="form-button">
          Enviar
        </button>
      </form>
    </div>

  );

}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  taskData: PropTypes.object.isRequired,
}
