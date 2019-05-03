import React from 'react'
import UseState from './UseState'
import UseEffect from './UseEffect'
import UseCustom from './UseCustom'
import UseReducer from './UseReducer'
import styled from 'styled-components'
import Theme from './Theme'

const Wrapper = styled.div`
  display:flex;
  flex-flow: nowrap column;
  justify-content: space-between
  padding: 20px;
`

export default function App() {
  return (
    <Theme>
      <Wrapper>
        <h1>React Hooks</h1>
        <UseState />
        <UseEffect />
        <UseCustom />
        <UseReducer />
      </Wrapper>
    </Theme>
  )
}
