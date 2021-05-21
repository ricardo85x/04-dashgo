import { Flex, Box, Divider, Heading, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my={["4", "6"]} maxWidth={1480} mx="auto" px={["4", "6"]} >
                <Sidebar />

                <Box flex="1" bg="gray.800" borderRadius={8} p={["6", "8"]} >

                    <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

                    <Divider my={["4", "6"]} borderColor="gray.700" />

                    <VStack spacing={["6", "8"]} >
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="name" label="Nome Completo" />
                            <Input type="email" name="email" label="E-mail" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="password" label="Senha" type="password" />
                            <Input type="password" name="password_confirmation" label="Repetir Senha" />
                        </SimpleGrid>

                    </VStack>
                    <Flex mt={["6", "8"]} justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users"><Button colorScheme="whiteAlpha">Cancelar</Button></Link>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>

                </Box>
            </Flex>

        </Box>
    )
}