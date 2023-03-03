import { Todo } from "./Todo"

export const Todos: React.FC<TodosProps> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''}`}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleteTodo={onToggleCompleteTodo}
          />
        </li>
      ))}
    </ul>
  )
}