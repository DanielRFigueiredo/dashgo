import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

interface UserListProps {

}
export default function UserList(props: UserListProps) {
  return (
    <Box>
      <Header />
      <Flex w='100%' py='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg="gray.800" p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal' >Usuários</Heading>
            <Button
              as='a'
              size='sm'
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize='20' />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' width='8'>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Daniel Figueiredo</Text>
                    <Text fontSize='small' color='gray.300'>necoraio@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>24 de agosto, 2023</Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}
                  >
                    edit
                  </Button>
                </Td>
              </Tr>
            </Tbody>

          </Table>
          <Pagination />

        </Box>
      </Flex>
    </Box>
  )
}