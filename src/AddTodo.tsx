import React, {useState, SyntheticEvent, useContext} from 'react'
import {TodoContext} from './UseReducer'

export default function AddTodo() {
  const [value, handleChange] = useState('')
  const dispatch = useContext(TodoContext)

  function onSubmit(e: SyntheticEvent) {
    e.preventDefault()
    dispatch && dispatch({type: 'ADD', dataLoad: {title: value}})
    handleChange('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        type="text"
        placeholder="Enter todo"
        onChange={e => handleChange(e.target.value)}
      />
    </form>
  )
}
