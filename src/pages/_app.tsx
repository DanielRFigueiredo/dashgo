import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/theme'
import { SidebarContextProvider } from '@/context/SidebarDrawerContext'
import { makeServer } from '@/services/mirajejs'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient

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
