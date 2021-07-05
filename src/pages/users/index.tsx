import { Box, Heading, Text } from "@chakra-ui/layout";
import { Button, IconButton, Checkbox, Flex, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue, Spinner } from "@chakra-ui/react";
import React from "react";
import { RiAddLine, RiPencilFill } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import Link from 'next/link'
import { useEffect } from "react";
import { useQuery } from "react-query"

export default function UserList() {

    const { data, isLoading, error } = useQuery('users', async () => {
        const response = await fetch("/api/users")
        const data = response.json();
        return data
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    console.log("LE Query", data)

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

                            <Link href="/users/create" passHref
                            >

                                <Button

                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="pink"

                                    leftIcon={<Icon as={RiAddLine} fontSize="20" />}

                                >Criar novo usuário</Button>
                            </Link>


                        ) : (
                            <Link href="/users/create" passHref>
                                <IconButton
                                    aria-label="Criar novo usuário"
                                    icon={<RiAddLine />}
                                    fontSize="16"
                                    size="sm"
                                    colorScheme="pink"
                                />
                            </Link>
                        )}


                    </Flex>

                    {isLoading ? (
                        <Flex align="center" justify="center"> <Spinner /></Flex>
                    ) : error ?  (
                        <Flex align="center" justify="center"><Text>Error Loading Data</Text></Flex>
                    ) :  (
                    <>
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
                                    <Td px={["2", "4", "6"]} >
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
                                                icon={<RiPencilFill />}
                                                fontSize="16"
                                                size="sm"


                                                colorScheme="pink"

                                            />
                                        )}

                                    </Td>
                                </Tr>


                            </Tbody>
                        </Table>
                        <Pagination />
                    </>

                      )}
                </Box>
            </Flex>


        </Box>
    )
}