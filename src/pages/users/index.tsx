import { Box, Heading, Text } from "@chakra-ui/layout";
import { Button, Checkbox, Flex, Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { RiAddLine, RiPencilFill } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
                <Sidebar />

                <Box flex="1" bg="gray.800" borderRadius={8} p="8" >
                    <Flex mb="8" justify="space-between"
                    align="center" 
                    >
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                        >
                            Criar novo usuário
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha" >
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Ricardo F</Text>
                                        <Text fontSize="sm" color="gray.300">ricardo85x@gmail.com F</Text>
                                    </Box>
                                </Td>
                                <Td>17 de Maio, 2021</Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilFill} fontSize="16" />}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>

                            
                        </Tbody>
                    </Table>
                </Box>
            </Flex>


        </Box>
    )
}