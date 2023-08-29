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

}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-br', { minute: '2-digit', hour: '2-digit', day: "2-digit", month: "long", year: 'numeric' }).format(new Date(date))
}

async function getUsers() {
  const { data }: Data = await api.get('/users')
  console.log(data)
  const newData: User[] = data.map(user => {
    user.createdAT = formatDate(user.createdAT)
    return user
  })

  return newData
}



export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5, //5 segundos
  })


}