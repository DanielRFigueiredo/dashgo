import { useQuery } from "react-query"
import { api } from "../api"

type User = {
  createdAT: string;
  email: string;
  id: string;
  name: string;
}

type Data = {
  data: {
    users: User[];
  }
}

export function useUsers() {
  return useQuery('users', async () => {
    const data: Data = await api.get('/users')
    const newData = data.data.users.map(user => {
      user.createdAT = formatDate(user.createdAT)
      return user
    })
    return { ...data, users: newData }
  }, {
    staleTime: 1000 * 5, //5 segundos
  })

  function formatDate(date: string) {
    return new Intl.DateTimeFormat('pt-br', { minute: '2-digit', hour: '2-digit', day: "2-digit", month: "long", year: 'numeric' }).format(new Date(date))
  }
}