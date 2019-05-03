import React, { useReducer, useState, SyntheticEvent } from 'react'
import { Box, Text, Button, Link, Flex } from 'rebass'
import styled from 'styled-components'

interface Todo {
  id: number
  title: string
  isCompleted: boolean
}

let id = 3

const todoReducer = (state: Todo[], action: { type: string; dataLoad?: any }) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: ++id,
          title: action.dataLoad.title,
          isCompleted: false
        }
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
      throw new Error('Some shit done poped off')
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(todoReducer, [])
  console.log(state)

  function handleSubmit(value: string) {
    dispatch({ type: 'ADD', dataLoad: { title: value } })
  }

  return (
    <Box width={[1 / 4]}>
      <Text as="h1" mb={3}>
        useReducer
      </Text>

      {state.map(todo => (
        <Flex mb={2} key={todo.id} alignItems="center" justifyContent="space-between">
          <Text mr={4} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
            {todo.title}
          </Text>
          {todo.isCompleted ? (
            <Button bg="purple" onClick={() => dispatch({ type: 'UNDO', dataLoad: { id: todo.id } })}>
              X
            </Button>
          ) : (
            <Button bg="green" onClick={() => dispatch({ type: 'DONE', dataLoad: { id: todo.id } })}>
              √
            </Button>
          )}
          <Button onClick={() => dispatch({ type: 'DELETE', dataLoad: { id: todo.id } })} ml={2} bg="red">
            Delete
          </Button>
        </Flex>
      ))}

      <Input handleSubmit={handleSubmit} />
    </Box>
  )
}

function Input({ handleSubmit }: { handleSubmit: any }) {
  const [value, handleChange] = useState('')

  function onSubmit(e: SyntheticEvent) {
    e.preventDefault()
    handleSubmit(value)
    handleChange('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={value} type="text" placeholder="Enter todo" onChange={e => handleChange(e.target.value)} />
    </form>
  )
}
