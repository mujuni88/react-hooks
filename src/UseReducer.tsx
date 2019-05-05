import React, { useReducer, createContext } from 'react'
import { Box, Text } from 'rebass'
import Filter from './Filter'
import { ITodo } from './TodoItem'
import Todos from './Todos'
import AddTodo from './AddTodo'
import uuid from 'uuid/v1'

interface IAction {
  type?: string
  dataLoad?: any
}

type Dispatch = (action: IAction) => void

export const TodoContext = createContext<Dispatch | null>(null)

const todoReducer = (state: ITodo[], action: IAction) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: uuid(),
          title: action.dataLoad.title,
          isCompleted: false,
        },
      ]
    case 'UNDO':
      return state.map(todo => {
        if (todo.id === action.dataLoad.id) {
          todo.isCompleted = false
        }
        return todo
      })

    case 'DONE':
      return state.map(todo => {
        if (todo.id === action.dataLoad.id) {
          todo.isCompleted = true
        }
        return todo
      })

    case 'DELETE':
      return state.filter(todo => todo.id !== action.dataLoad.id)

    default:
      return state
  }
}

const filterReducer = (state: string, action: IAction) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'ALL'
    case 'SHOW_COMPLETE':
      return 'COMPLETE'
    case 'SHOW_INCOMPLETE':
      return 'INCOMPLETE'
    default:
      return state
  }
}

export default function UseReducer() {
  const [state, dispatchTodo] = useReducer(todoReducer, [])
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL')
  const dispatch = (action: IAction) => [dispatchTodo, dispatchFilter].forEach(f => f(action))

  const filteredTodos = state.filter(todo => {
    if (filter === 'ALL') return true

    if (filter === 'COMPLETE' && todo.isCompleted) return true

    if (filter === 'INCOMPLETE' && !todo.isCompleted) return true

    return false
  })

  return (
    <Box width={[1 / 4]}>
      <Text as="h1" mb={3}>
        useReducer
      </Text>

      <TodoContext.Provider value={dispatch}>
        <Filter filter={filter} />
        <Todos todos={filteredTodos} />
        <AddTodo />
      </TodoContext.Provider>
    </Box>
  )
}
