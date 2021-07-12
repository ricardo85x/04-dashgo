import { useQuery, UseQueryOptions, UseQueryResult } from "react-query"
import { api } from "../api"

export type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

type UserApiProps = {
    users: User[],
    totalCount: number;
}

type GetUsersProps = {
    totalCount: number;
    users: User[];
}

export const getUsers = async ( page: number, perPage: number) => {
    const { data, headers } = await api.get<UserApiProps>("users", {
        params: {
            page,
            perPage
        }
    })

    const totalCount = Number(headers['x-total-count']) ;

    const users = data.users.map(user => {
        return {
            ...user,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            })
        }
    })

    return {
        totalCount,
        users
    }
}

export const useUsers = (
    currentPage: number, 
    perPage: number,
    options: UseQueryOptions
    ) => useQuery([
        'users', {currentPage, perPage}
    ], () => getUsers(currentPage, perPage), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options
}) as UseQueryResult<GetUsersProps,unknown>