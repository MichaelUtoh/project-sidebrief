import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../components/5utils/themeUtil'

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
