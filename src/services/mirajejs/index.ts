import { Factory, Model, createServer, Response, ActiveModelSerializer } from 'miragejs'
import { faker } from '@faker-js/faker'

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({

    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      user: Model.extend<Partial<User>>({})
    },
    factories: {
      user: Factory.extend({
        name(index: number) {
          return `User ${index + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent()
        },
      })
    },
    seeds(server) {
      server.createList('user', 200)
    },
    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams

        const total = schema.all('user').length

        const pageState = (Number(page) - 1) * Number(per_page)
        const pageEnd = pageState + Number(per_page)

        const users = schema.all('user').models.sort((a, b) => a.name.localeCompare(b.name)).slice(pageState, pageEnd)

        return new Response(
          200,
          { 'x-total-count': String(total) },
          users

        )
      })

      this.get('/users/:id')
      this.post('/users')
      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}