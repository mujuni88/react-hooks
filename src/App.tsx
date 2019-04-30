import React, { useState } from 'react'

const INITIAL_LIST = [
  {
    id: '0',
    title: 'React with RxJS for State Management Tutorial',
    url: 'https://www.robinwieruch.de/react-rxjs-state-management-tutorial/'
  },
  {
    id: '1',
    title: 'A complete React with Apollo and GraphQL Tutorial',
    url: 'https://www.robinwieruch.de/react-graphql-apollo-tutorial'
  }
]

function getNewItem() {
  return {
    id: `${Math.floor(Math.random() * 99 + 1)}`,
    title: `Hello ${Math.floor(Math.random() * 9) + 1}`,
    url: 'https://google.com'
  }
}

export default function App() {
  const [list, setList] = useState(INITIAL_LIST)

  const addItem = () => {
    setList([...list, getNewItem()])
  }

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
      <li>
        <button onClick={addItem}>Click</button>
      </li>
    </ul>
  )
}
