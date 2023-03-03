import { Filters } from "./Filters"

export const Footer: React.FC<FooterProps> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes
      </span>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />

      {
        completedCount > 0 && (
          <button
            className="clear-completed"
            onClick={onClearCompleted}
          >
            Borrar completados
          </button>
        )
      }
    </footer>
  )
}