import React from 'react'
import uuid from 'uuid/v1'

type AnimalProps = {
  name: string
  age: number
}

const animals = [{name: 'dog'}, {name: 'cat', age: 4}]

function AnimalTest({name, age}: Partial<AnimalProps> = {age: 10}) {
  return (
    <h1>
      {name} - {age}
    </h1>
  )
}

export default function Animals() {
  return animals.map(({name, age}) => (
    <AnimalTest key={uuid()} name={name} age={age} />
  ))
}
