import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from 'react-query'

type User = {
  createdAT: string;
  email: string;
  id: string;
  name: string;
}
type Data = {

  users: User[];

}

interface UserListProps {

}
export default function UserList(props: UserListProps) {
  const { data, isLoading, error } = useQuery('users', async () => {
    const data: Data = await fetch('https://localhost:3000/api/users')
      .then(resp => resp.json())

    const newData = data.users.map(user => {
      user.createdAT = formatDate(user.createdAT)
      return user
    })
    return { ...data, users: newData }
  }, {
    staleTime: 1000 * 5, //5 segundos
  })

  const { asPath } = useRouter()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  function formatDate(date: string) {
    return new Intl.DateTimeFormat('pt-br', { minute: '2-digit', hour: '2-digit', day: "2-digit", month: "long", year: 'numeric' }).format(new Date(date))
  }



  return (
    <Box>
      <Header />
      <Flex w='100%' py='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg="gray.800" p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>
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
                    {data?.users.map(user => (
                      <Tr key={user.id}>
                        <Td px={['4', '4', '6']}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight='bold'>{user.name}</Text>
                            <Text fontSize='small' color='gray.300'>{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAT}</Td>}
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
                <Pagination />
              </>)
          }


        </Box >
      </Flex >
    </Box >
  )
}