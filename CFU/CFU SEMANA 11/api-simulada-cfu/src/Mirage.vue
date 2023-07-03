import { createServer, Model } from 'miragejs';

export function makeServer ({ environment = 'development' } = {}) {
  const server = createServer({
    environment,
    routes() // our routes go here
  })
}


routes() {
  this.namespace = 'api';
  const url = 'https://api.local'; // this is our fake api url which we will use later
},

