import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Text} from 'rebass'

const Section = styled.section`
  display: block
  margin-bottom: 25px;

  & > h1 {
    margin-bottom: 10px;
  }
`

function useOffline() {
  const [isOffline, setIsOffline] = useState(false)

  function onOffline() {
    setIsOffline(true)
  }

  function onOnline() {
    setIsOffline(false)
  }

  useEffect(() => {
    window.addEventListener('online', onOnline)
    window.addEventListener('offline', onOffline)

    return () => {
      window.removeEventListener('online', onOnline)
      window.removeEventListener('offline', onOffline)
    }
  }, [])

  return isOffline
}

export default function UseCustom() {
  const isOffline = useOffline()
  return (
    <Section>
      <h1>useCustom</h1>
      {isOffline ? (
        <Text color="red">I'm offline</Text>
      ) : (
        <Text color="green">I'm online</Text>
      )}
    </Section>
  )
}
