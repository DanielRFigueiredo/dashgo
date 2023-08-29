import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { api } from "@/services/api";
import { useUsers } from "@/services/hooks/useUsers";
import { queryClient } from "@/services/queryClient";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";


interface UserListProps {

}
export default function UserList(props: UserListProps) {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, error, isError } = useUsers(page)

  const { asPath } = useRouter()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  async function handlePrefetch(id: number) {
    await queryClient.prefetchQuery(['user', id], async () => {
      const resp = await api.get(`users/${id}`)
      return resp.data
    }, {
      staleTime: 1000 * 60 * 60 //60 minutes
    })
  }

  return (
    <Box>
      <Header />
      <Flex w='100%' py='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg="gray.800" p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>Usuários {isFetching && !isLoading && <span><Spinner size={'sm'} color="gray.500" ml='4' /></span>}</Heading>
            <Link href={`${asPath}/create`}>
              <Button
                size='sm'
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (<Flex justify='center'> <Spinner /></Flex>)
            : error ? (<Flex justify='center'> <Text>Falha nos dados</Text></Flex>)
              : (<>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={['4', '4', '6']} color='gray.300' width='8'>
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuário</Th>
                      {isWideVersion && <Th>Data de cadastro</Th>}
                      <Th w='8'></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {!!data && data?.users.map(user => (
                      <Tr key={user.id}>
                        <Td px={['4', '4', '6']}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Link href='#'>
                              <Text fontWeight='bold' _hover={{ color: 'blue.400' }} onMouseEnter={() => handlePrefetch(Number(user.id))}>{user.name}</Text>
                            </Link>
                            <Text fontSize='small' color='gray.300'>{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
                        {isWideVersion && (
                          <Td>
                            <Button
                              as='a'
                              size='sm'
                              colorScheme="purple"
                              leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                            >
                              edit
                            </Button>
                          </Td>
                        )}

                      </Tr>
                    ))}
                  </Tbody>

                </Table >
                <Pagination totalCountOfRegisters={!!data?.totalCount ? data?.totalCount : 0} currentPage={page} onPageChange={setPage} />
              </>)
          }


        </Box >
      </Flex >
    </Box >
  )
}