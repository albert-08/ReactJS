import { CreateTodo } from "./CreateTodo"

export const Header: React.FC<HeaderProps> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>
        todo
        <img
          style={{ width: '60px', height: 'auto' }}
          src=""
          alt=""
        />
      </h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}