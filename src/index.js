import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// theme.js
import { extendTheme,ChakraProvider } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.400',
        color: 'white',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
})

// Version 2: Using functions
const overrides = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
        lineHeight: 'base',
      },
    }),
  },
})
class Main extends React.Component {
  render() {
    return <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>;
    
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);