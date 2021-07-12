import { Flex, Box, Divider, Heading, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import Router, { useRouter }  from "next/router";
import React from "react";
import { useMutation } from "react-query"
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup'
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('Email obrigatório').email('Formato invalido de email'),
    password: yup.string().required('Senha obrigatória').min(6, 'Senha deve ter no minimo 5 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'Senhas devem ser iguais')
})


export default function CreateUser() {

    const router = useRouter();

    const createUser = useMutation(async (user: CreateUserFormData) => {
        const response = await api.post('/users', {
            user: {
                ...user,
                created_at: new Date()
            }
        })

        return response.data.user;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    })


    const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
        await createUser.mutateAsync(values)

        router.push('/users')
    }

    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(createUserFormSchema)
    })
    return (
        <Box>
            <Header />

            <Flex w="100%" my={["4", "6"]} maxWidth={1480} mx="auto" px={["4", "6"]} >
                <Sidebar />

                <Box 
                    as="form" 
                    flex="1" 
                    bg="gray.800" 
                    borderRadius={8} 
                    p={["6", "8"]} 
                    onSubmit={handleSubmit(handleCreateUser)} 
                >

                    <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

                    <Divider my={["4", "6"]} borderColor="gray.700" />

                    <VStack spacing={["6", "8"]} >
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input {...register("name")} error={formState.errors.name} label="Nome Completo" />
                            <Input type="email"  {...register("email")} error={formState.errors.email}  label="E-mail" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input   {...register("password")} error={formState.errors.password} label="Senha" type="password" />
                            <Input type="password" {...register("password_confirmation")} error={formState.errors.password_confirmation} label="Repetir Senha" />
                        </SimpleGrid>

                    </VStack>
                    <Flex mt={["6", "8"]} justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users"><Button colorScheme="whiteAlpha">Cancelar</Button></Link>
                            <Button type="submit" isLoading={formState.isSubmitting} colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>

                </Box>
            </Flex>

        </Box>
    )
}