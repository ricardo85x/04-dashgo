import { Box, Heading, Text } from "@chakra-ui/layout";
import { Button, IconButton, Checkbox, Flex, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { RiAddLine, RiPencilFill } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box>
            <Header />

            <Flex w="100%" my={["4", "4", "6"]} maxWidth={1480} mx="auto" px={["4", "4", "6"]}  >
                <Sidebar />

                <Box flex="1" bg="gray.800" borderRadius={8} p={["4", "4", "6"]}  >
                    <Flex mb="8" justify="space-between"
                        align="center"
                    >
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>


                        {isWideVersion ? (

                            <Button

                                as="a"
                                href="/users/create"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"

                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}


                            >Criar novo usuário</Button>

                        ) : (
                            <IconButton
                                aria-label="Criar novo usuário"
                                icon={<RiAddLine />}
                                fontSize="16"
                                size="sm"
                                colorScheme="pink"
                                href="/users/create"
                            />
                        )}


                    </Flex>

                    <Table colorScheme="whiteAlpha" >
                        <Thead>
                            <Tr>
                                <Th px={["2", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th px={["2", "4", "6"]} >Usuário</Th>
                                {isWideVersion && <Th>Data de cadastro</Th>}
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["2", "4", "6"]} >
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td  px={["2", "4", "6"]} > 
                                    <Box>
                                        <Text fontWeight="bold">Ricardo F</Text>
                                        <Text fontSize="sm" color="gray.300">ricardo85x@gmail.com F</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>17 de Maio, 2021</Td>}
                                <Td>

                                    {isWideVersion ? (

                                        <Button

                                            as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="purple"
                                            leftIcon={<Icon as={RiPencilFill} fontSize="16" />}
                                        >Editar</Button>

                                    ) : (
                                        <IconButton
                                            aria-label="Editar"
                                            icon={<RiPencilFill/>}
                                            fontSize="16"
                                            size="sm"
                                         

                                            colorScheme="pink"
                                            href="/users/create"
                                        />
                                    )}

                                </Td>
                            </Tr>


                        </Tbody>
                    </Table>
                    <Pagination />

                </Box>
            </Flex>


        </Box>
    )
}