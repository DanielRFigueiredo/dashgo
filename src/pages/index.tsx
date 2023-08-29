import { InputForm } from '@/components/Form/InputForm'
import { Stack, Flex, Button } from "@chakra-ui/react"
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type Inputs = {
  email: string,
  senha: string,
};

const singInFormSchema = yup.object({
  email: yup.string().required('email obrigatorio').email('formato de email invalido'),
  senha: yup.string().required('senha obrigatorio')
})

export default function SingIn() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Inputs>({ resolver: yupResolver(singInFormSchema) })

  const handleSignIn: SubmitHandler<Inputs> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
   
  }

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
        onSubmit={handleSubmit(handleSignIn)}

      >
        <Stack spacing='4'>

          <InputForm label='E-mail' type='email' error={errors.email}  {...register('email')} />

          <InputForm label='Senha' type='password' error={errors.senha}  {...register('senha', { required: 'Senha Obrigatorio' })} />

        </Stack>
        <Button
          type='submit'
          mt='6'
          colorScheme='pink'
          size='lg'
          isLoading={isSubmitting}
        >Entrar</Button>
      </Flex>

    </Flex>
  )
}
