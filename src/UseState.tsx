import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Box } from 'rebass'

const Section = styled.section`
  display: block;
  margin-bottom: 25px;

  & > h1 {
    margin-bottom: 10px;
  }
`
interface IItem {
  id: string
  title: string
  url: string
}

const INITIAL_LIST: IItem[] = [
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

export default function UseState() {
  const [list, setList] = useState(INITIAL_LIST)

  const addItem = () => {
    setList([...list, getNewItem()])
  }

  const removeItem = (item: IItem) => {
    setList(list.filter(itm => itm !== item))
  }

  return (
    <Section>
      <h1>useState</h1>
      <Box as="ul">
        {list.map(item => (
          <Box mb={3} as="li" key={item.id}>
            <a href={item.url}>{item.title}</a>
            <Button ml={2} onClick={() => removeItem(item)}>
              Remove
            </Button>
          </Box>
        ))}
      </Box>

      <Button mt={2} ml={2} onClick={addItem}>
        Click
      </Button>
    </Section>
  )
}
