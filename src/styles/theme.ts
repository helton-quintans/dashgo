import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({

  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      }
    }
  }
  // semanticTokens: {
  //   colors: {
  //     error: 'red.500',
  //     success: 'green.500',
  //     primary: {
  //       default: 'red.500',
  //       _dark: 'red.400',
  //     },
  //     secondary: {
  //       default: 'red.800',
  //       _dark: 'red.700',
  //     },
  //   },
  // },
})