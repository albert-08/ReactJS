export const Todo: React.FC<TodoProps> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo(id, event.target.checked)
  }

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo(id)
        }}
      />
    </div>
  )
}