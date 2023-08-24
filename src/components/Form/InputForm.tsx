import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

interface InputFormProps extends InputProps {
  label?: string;
}
export function InputForm({ name, label, ...rest }: InputFormProps) {
  return (
    <FormControl>
      {!!label && <FormLabel>{label}</FormLabel>}
      <Input
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