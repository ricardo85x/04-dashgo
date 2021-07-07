import { useQuery } from "react-query"
import { api } from "../api"

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

type UserApiProps = {
    users: User[]  
}

export const getUsers = async () => {
    const { data } = await api.get<UserApiProps>("users")

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

    return users
}


export const useUsers = () => useQuery('users', getUsers, {
    staleTime: 1000 * 5 // 5 seconds
})