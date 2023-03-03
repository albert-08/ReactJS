const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'Todos',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Activos',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completados',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
} as const

type TodoId = string
type TodoTitle = string
type TodoCompleted = boolean
type ListOfTodos = Array<Todo>

type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

type OnRemoveTodo = (id: TodoId) => void
type OnToggleCompleteTodo = (id: TodoId, completed: TodoCompleted) => void
type OnFilterChange = (filter: FilterValue) => void

interface Todo {
  id: TodoId
  title: TodoTitle
  completed: TodoCompleted
}

interface TodoProps extends Todo {
  onRemoveTodo: OnRemoveTodo
  onToggleCompleteTodo: OnToggleCompleteTodo
}

interface TodosProps {
  todos: ListOfTodos
  onRemoveTodo: OnRemoveTodo
  onToggleCompleteTodo: OnToggleCompleteTodo
}

interface HeaderProps {
  onAddTodo: (title: TodoTitle) => void
}

interface FooterProps {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
  onClearCompleted: () => void
}

interface FiltersProps {
  filterSelected: FilterValue
  onFilterChange: OnFilterChange
}

interface CreateTodoProps {
  saveTodo: (title: TodoTitle) => void
}