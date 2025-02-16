import { createServer, Model } from 'miragejs'
import { coffeeData } from '../mock/coffeeData'

export function makeServer() {
  return createServer({
    models: {
      coffee: Model.extend({}),
    },

    seeds(server) {
      coffeeData.forEach((coffee) => {
        server.create('coffee', coffee)
      })
    },

    routes() {
      this.passthrough('https://ipapi.co/**')
      this.namespace = 'api'

      this.get('/coffees', (schema) => {
        return schema.all('coffee')
      })

      this.post('/coffees', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        return schema.create('coffee', attrs)
      })
    },
  })
}
