import React, { useContext } from 'react'
import { Button, Flex } from 'rebass'
import uuid from 'uuid/v1'
import { TodoContext } from './UseReducer'

const FILTERS = ['ALL', 'COMPLETE', 'INCOMPLETE']
const ACTIONS = ['SHOW_ALL', 'SHOW_COMPLETE', 'SHOW_INCOMPLETE']

type Active = (filter: string) => string

interface IFilterProps {
  filter: string
}

export default function Filter({ filter }: IFilterProps) {
  const active: Active = f => (filter === f ? 'blue' : 'black')
  const dispatch = useContext(TodoContext)

  const handleClick = (f: string) => {
    dispatch && dispatch({ type: f })
  }

  return (
    <Flex justifyContent="space-between">
      {FILTERS.map((f, i) => (
        <Button m={1} bg="transparent" color={active(f)} key={uuid()} onClick={() => handleClick(ACTIONS[i])}>
          {f}
        </Button>
      ))}
    </Flex>
  )
}
