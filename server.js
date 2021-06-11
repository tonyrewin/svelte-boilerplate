import { Server } from '@hocuspocus/server'
import { RocksDB } from '@hocuspocus/extension-rocksdb'

const server = Server.configure({
  port: 1234,
  extensions: [
    new RocksDB({ path: './database' }),
  ],
  /*async onConnect(data) {
    const { requestParameters } = data

    // Example test if a user is authenticated using a
    // request parameter
    if (requestParameters.access_token !== 'super-secret-token') {
      throw new Error('Not authorized!')
    }

    // You can set contextual data to use it in other hooks
    return {
      user: {
        id: 1234,
        name: 'John',
      },
    }
  },*/
})

server.listen()