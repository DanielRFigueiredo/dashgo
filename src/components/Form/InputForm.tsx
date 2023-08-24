import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

interface InputFormProps extends InputProps {
  name: string;
  label?: string;
}
export function InputForm({ name, label, ...rest }: InputFormProps) {
  return (
    <FormControl>
      {!!label && <FormLabel>{label}</FormLabel>}
      <Input
        type={name}
        name={name}
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        _hover={{ bgColor: 'gray.900' }}
        size='lg'
        {...rest}
      />
    </FormControl>
  )
}