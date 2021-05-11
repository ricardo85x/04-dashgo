import { Flex, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { Input } from "../components/Form/Input"

export default function SignIn() {
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
      >
        <Stack spacing="4">

          <Input name="email" label="E-Mail" type="email" />  

          <Input name="password" label="Password" type="password" />  

        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        > Entrar</Button>

      </Flex>
    </Flex>
  )
}
