import { useQuery } from "react-query"
import { api } from "../api"

type User = {
  createdAT: string;
  email: string;
  id: string;
  name: string;
}

type Data = {
  data: User[];
  headers: {
    ['x-total-count']: string
  },
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-br', { minute: '2-digit', hour: '2-digit', day: "2-digit", month: "long", year: 'numeric' }).format(new Date(date))
}

export async function getUsers(page: number) {
  const { data, headers }: Data = await api.get('/users', { params: { page } })

  const newData: User[] = data.map(user => {
    user.createdAT = formatDate(user.createdAT)
    return user
  })
  const totalCount = Number(headers['x-total-count'])
  return { users: newData, totalCount }
}



export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, //10 minutes
  })


}