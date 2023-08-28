import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

//COMPONENTS
import { Box, Button, Divider, Flex, HStack, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { InputForm } from "@/components/Form/InputForm";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";



type InputsData = {
  nome: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const CreateUserFormSchema = yup.object({
  nome: yup.string().required('Nome obrigatorio'),
  email: yup.string().required('Email obrigatorio').email('formato de email invalido'),
  password: yup.string().required('Senha obrigatorio').min(6, 'no minimo 6 caracteres'),
  confirmPassword: yup.string().oneOf(['', yup.ref('password')], 'senha incorreta').required('Confirmação de senha Obrigatoria')
})



export default function CreateUser() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<InputsData>({ resolver: yupResolver(CreateUserFormSchema) })

  const envio: SubmitHandler<InputsData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
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
              <InputForm type="text" error={errors.nome} label="Nome Completo" {...register("nome")} />
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