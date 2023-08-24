import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/theme'
import { SidebarContextProvider } from '@/context/SidebarDrawerContext'

export default function App({ Component, pageProps }: AppProps) {
  return (

    <ChakraProvider theme={theme}>
      <SidebarContextProvider>
        <Component {...pageProps} />

      </SidebarContextProvider>
    </ChakraProvider >
  )
}
