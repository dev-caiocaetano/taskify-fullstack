
import './TaskFilter.css'

export default function TaskFilter({
  orderValue,
  onOrderChange,
  priorityValue,
  onPriorityChange,
  statusValue,
  onStatusChange
}) {
  return (
    <div className="filter-container">
      <div className="filter-group">
        <label className="filter-label">Ordernar por:</label>
        <select
          className="filter-select"
          value={orderValue}
          onChange={(event) => onOrderChange(event.target.value)}
        >
          <option value='createdAt-desc'>Mais Recentes</option>
          <option value='createdAt-asc'>Mais Antigas</option>
          <option value='dueDate-asc'>Data de Entrega</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Prioridade:</label>
        <select
          className="filter-select"
          value={priorityValue}
          onChange={(event) => onPriorityChange(event.target.value)}
        >
          <option value=''>Todas</option>
          <option value='Baixa'>Baixa</option>
          <option value='Média'>Média</option>
          <option value='Alta'>Alta</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Status:</label>
        <select
          className="filter-select"
          value={statusValue}
          onChange={(event) => onStatusChange(event.target.value)}
        >
          <option value=''>Todos</option>
          <option value='Pendente'>Pendente</option>
          <option value='Concluída'>Concluído</option>
        </select>
      </div>
    </div>
  );
};


