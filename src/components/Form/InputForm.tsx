import { FormControl, FormErrorMessage, FormLabel, Input as InputChakra, InputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface InputFormProps extends InputProps {

  label?: string;
  error?: FieldError
}

const InputFormBase: ForwardRefRenderFunction<HTMLInputElement, InputFormProps> = ({ label, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel>{label}</FormLabel>}
      <InputChakra
        name={rest.name}
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        _hover={{ bgColor: 'gray.900' }}
        size='lg'
        ref={ref}
        {...rest}
      />
      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}


export const InputForm = forwardRef(InputFormBase)