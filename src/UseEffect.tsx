import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Button} from 'rebass'

const Section = styled.section`
  display: block;
  margin-bottom: 25px;

  & > h1 {
    margin-bottom: 10px;
  }
`

export default function UseEffect() {
  const [isOn, setIsOn] = useState(false)
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    let interval: number

    if (isOn) {
      interval = setInterval(() => {
        setTimer(timer + 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isOn, timer])

  return (
    <Section>
      <h1>useEffect</h1>
      <h2>{timer}</h2>

      {isOn ? (
        <Button bg="red" onClick={() => setIsOn(!isOn)}>
          Stop
        </Button>
      ) : (
        <Button bg="green" onClick={() => setIsOn(!isOn)}>
          Start
        </Button>
      )}
      <Button
        bg="orange"
        ml={2}
        onClick={() => {
          setTimer(0)
          setIsOn(false)
        }}
      >
        Reset
      </Button>
    </Section>
  )
}
