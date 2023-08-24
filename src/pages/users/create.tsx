import { InputForm } from "@/components/Form/InputForm";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Box, Button, Divider, Flex, HStack, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

interface UserListProps {

}
export default function CreateUser(props: UserListProps) {
  return (
    <Box>
      <Header />
      <Flex w='100%' py='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg="gray.800" p='8'>
          <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>
          <Divider my='6' borderColor='gray.700' />
          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <InputForm name='name' type="text" label="Nome Completo" />
              <InputForm name='email' type="email" label="E-mail" />

            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <InputForm name='password' type="password" label="Senha" />
              <InputForm name='password_confirmation' type="password" label="Confirmação da senha" />

            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>

            </HStack>

          </Flex>
        </Box>
      </Flex>
    </Box>
  )
} 