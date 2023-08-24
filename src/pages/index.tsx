import { InputForm } from '@/components/Form/InputForm'
import { Flex, Button, Stack } from '@chakra-ui/react'

export default function SingIn() {

  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Flex
        as='form'
        width='100%'
        maxW={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        direction={'column'}
      >
        <Stack spacing='4'>
          <InputForm name='email' label='E-mail' type='email' />
          <InputForm name='password' label='Senha' type='password' />

        </Stack>
        <Button
          type='submit'
          mt='6'
          colorScheme='pink'
          size='lg'
        >Entrar</Button>
      </Flex>

    </Flex>
  )
}
