import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/theme'
import { SidebarContextProvider } from '@/context/SidebarDrawerContext'
import { makeServer } from '@/services/mirajejs'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from '@/services/queryClient'

if (process.env.NODE_ENV === 'development') {
  makeServer();
}



export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarContextProvider>

          <Component {...pageProps} />

        </SidebarContextProvider>
      </ChakraProvider >

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
