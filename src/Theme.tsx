import React from 'react'
import { ThemeProvider } from 'styled-components'

interface Props {
  children: any
}
const blue = '#07c'
const lightgray = '#f6f6ff'

const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    blue,
    lightgray
  },
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: blue
    },
    outline: {
      color: blue,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 2px'
    }
  }
}

export default function Theme(props: Props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}