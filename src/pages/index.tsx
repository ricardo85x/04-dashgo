import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
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

          <FormControl>
            <FormLabel for="email">E-Mail</FormLabel>
            <Input
              name="email"
              type="email"
              id="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900"
              }}
              size="lg"
            />
          </FormControl>


          <FormControl>
            <FormLabel for="password">Password</FormLabel>
            <Input
              name="password"
              type="password"
              id="password"
              focusBorderColor="pink.500"
              variant="filled"
              _hover={{
                bgColor: "gray.900"
              }}
              bgColor="gray.900"
              size="lg"

            />
          </FormControl>

        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg" >Entrar</Button>

      </Flex>
    </Flex>
  )
}
