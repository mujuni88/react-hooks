import React, {useContext} from 'react'
import TodoItem, {ITodo} from './TodoItem'
import {TodoContext} from './UseReducer'
import uuid from 'uuid/v1'

export interface ITodosProps {
  todos: ITodo[]
}

export default function Todos({todos}: ITodosProps) {
  const dispatch = useContext(TodoContext)

  return (
    <>
      {todos.map(todo => (
        <TodoItem key={uuid()} todo={todo} dispatch={dispatch} />
      ))}
    </>
  )
}
