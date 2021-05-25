import {FormLabel, Input as ChakraInput, FormControl, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError} from 'react-hook-form'

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?:FieldError
}

export const InputBase:ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({ name, label, error = null, ...rest} , ref) => {
    return (
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> } 
            <ChakraInput
              ref={ref}
              name={name}
              id={name}
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900"
              }}
              size="lg"
              {...rest}
            />

            { !!error && <FormErrorMessage>{error.message}</FormErrorMessage>}

          </FormControl>
    );
}


export const Input = forwardRef(InputBase)
