import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'

//COMPONENTS
import { Box, Button, Divider, Flex, HStack, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { InputForm } from "@/components/Form/InputForm";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { api } from "@/services/api";
import { queryClient } from "@/services/queryClient";
import { useRouter } from "next/router";



type InputsData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const CreateUserFormSchema = yup.object({
  name: yup.string().required('Nome obrigatorio'),
  email: yup.string().required('Email obrigatorio').email('formato de email invalido'),
  password: yup.string().required('Senha obrigatorio').min(6, 'no minimo 6 caracteres'),
  confirmPassword: yup.string().oneOf(['', yup.ref('password')], 'senha incorreta').required('Confirmação de senha Obrigatoria')
})



export default function CreateUser() {
  const {push} = useRouter()
  const createUser = useMutation(async (user: InputsData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        createdAt: new Date(),
      }

    })
    return response.data.user
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<InputsData>({ resolver: yupResolver(CreateUserFormSchema) })

  const envio: SubmitHandler<InputsData> = async (data) => {
    await createUser.mutateAsync(data)
    push('/users')

  }

  return (
    <Box>
      <Header />
      <Flex w='100%' py='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />
        <Box onSubmit={handleSubmit(envio)} flex='1' as='form' borderRadius={8} bg="gray.800" p={['6', '8']}>
          <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>
          <Divider my='6' borderColor='gray.700' />
          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <InputForm type="text" error={errors.name} label="Nome Completo" {...register("name")} />
              <InputForm type="email" error={errors.email} label="E-mail" {...register("email")} />
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <InputForm type="password" error={errors.password} label="Senha" {...register("password")} />
              <InputForm type="password" error={errors.confirmPassword} label="Confirmação da senha" {...register("confirmPassword")} />
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users'>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" isLoading={isSubmitting} colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
} 