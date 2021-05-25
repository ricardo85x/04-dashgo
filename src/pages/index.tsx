import { Flex, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from "../components/Form/Input"

type SingInFormData = {
  email: string;
  password: string
}


export default function SignIn() {

  const {register, handleSubmit, formState} = useForm()


  const  handleSignIn:SubmitHandler<SingInFormData> = async (data) => {


    await new Promise( resolve => setTimeout( resolve, 2000))

    console.log(data)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8" //  8 = 2rem(/4) or 32px(*4) 
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">

          <Input {...register("email")} label="E-Mail" type="email" />  

          <Input {...register("password")} label="Password"  type="password" />  

        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
          loadingText="Loading"
        > Entrar</Button>

      </Flex>
    </Flex>
  )
}
