import React from 'react'
import {Text, Button, Flex} from 'rebass'

export interface ITodo {
  id: string
  title: string
  isCompleted: boolean
}

interface ITodoProps {
  todo: ITodo
  dispatch: any
}

export default function TodoItem({todo, dispatch}: ITodoProps) {
  return (
    <Flex
      mb={2}
      key={todo.id}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        mr={4}
        style={{textDecoration: todo.isCompleted ? 'line-through' : 'none'}}
      >
        {todo.title}
      </Text>
      {todo.isCompleted ? (
        <Button
          bg="purple"
          onClick={() => dispatch({type: 'UNDO', dataLoad: {id: todo.id}})}
        >
          X
        </Button>
      ) : (
        <Button
          bg="green"
          onClick={() => dispatch({type: 'DONE', dataLoad: {id: todo.id}})}
        >
          √
        </Button>
      )}
      <Button
        onClick={() => dispatch({type: 'DELETE', dataLoad: {id: todo.id}})}
        ml={2}
        bg="red"
      >
        Delete
      </Button>
    </Flex>
  )
}
