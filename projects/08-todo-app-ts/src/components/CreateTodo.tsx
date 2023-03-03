import { useState } from "react"

export const CreateTodo: React.FC<CreateTodoProps> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={(e) => { setInputValue(e.target.value) }}
        placeholder="¿Qué quieres hacer?"
        autoFocus
      />
    </form>
  )
}