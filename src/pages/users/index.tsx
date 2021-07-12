import { Box, Heading, Text } from "@chakra-ui/layout";
import { Button, IconButton, Checkbox, Flex, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { RiAddLine, RiPencilFill } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import NextLink from 'next/link'
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { GetServerSideProps } from "next";

import {User} from "../../services/hooks/useUsers"

interface UserListProps {
    users: User[];
}

const registerPerPage = 3;
export default function UserList( { users }: UserListProps ) {

    const [currentPage, setCurrentPage] = useState(1)

    const { data, isLoading, isFetching, error } = useUsers(currentPage, registerPerPage, {
        initialData: users,
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const handlePreFetchUser = async (userId: string) => {

        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`users/${userId}`)
            return response.data;
        }, {
            staleTime: 1000 * 60 * 10 // 10 minutes
        })
    }

    return (
        <Box>
            <Header />

            <Flex w="100%" my={["4", "4", "6"]} maxWidth={1480} mx="auto" px={["4", "4", "6"]}  >
                <Sidebar />

                <Box flex="1" bg="gray.800" borderRadius={8} p={["4", "4", "6"]}  >
                    <Flex mb="8" justify="space-between"
                        align="center"
                    >
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            {!isLoading && isFetching && (<Spinner ml="4" color="gray.500" size="sm" />)}
                        </Heading>


                        {isWideVersion ? (

                            <NextLink href="/users/create" passHref
                            >

                                <Button

                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="pink"

                                    leftIcon={<Icon as={RiAddLine} fontSize="20" />}

                                >Criar novo usuário</Button>
                            </NextLink>


                        ) : (
                            <NextLink href="/users/create" passHref>
                                <IconButton
                                    aria-label="Criar novo usuário"
                                    icon={<RiAddLine />}
                                    fontSize="16"
                                    size="sm"
                                    colorScheme="pink"
                                />
                            </NextLink>
                        )}


                    </Flex>

                    {isLoading ? (
                        <Flex align="center" justify="center"> <Spinner /></Flex>
                    ) : error ? (
                        <Flex align="center" justify="center"><Text>Error Loading Data</Text></Flex>
                    ) : (
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
                                    {data?.users?.map(user => (
                                        <Tr key={user.id}>
                                            <Td px={["2", "4", "6"]} >
                                                <Checkbox colorScheme="pink" />
                                            </Td>
                                            <Td px={["2", "4", "6"]} >
                                                <Box>

                                                    <NextLink href="">
                                                        <Link color="purple.400" onMouseEnter={() => handlePreFetchUser(user.id)}>
                                                            <Text fontWeight="bold">{user.name}</Text>

                                                        </Link>
                                                    </NextLink>

                                                    <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                                </Box>
                                            </Td>
                                            {isWideVersion && <Td>{user.createdAt}</Td>}
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


                                    ))}
                                </Tbody>
                            </Table>
                            <Pagination
                                totalCountOfRegisters={data.totalCount}
                                registerPerPage={registerPerPage}
                                currentPage={currentPage}
                                onPageChange={setCurrentPage}
                            />
                        </>

                    )}
                </Box>
            </Flex>


        </Box>
    )
}

export const getServerSideProps : GetServerSideProps = async () => {

    /// @dev the getUsers will fail because it is using Mirage
    /// Mirage runs only on browser, so this server call will fail
    /// When you migrate to a actual server you can remove the comment
    /// from the next line

    // const {users, totalCount } = await getUsers(1, registerPerPage)

    return {
        props: {
            users: []
        }
    }
}