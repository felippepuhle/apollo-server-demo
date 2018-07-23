import Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'

import { PORT } from './config'
import dataSources from './dataSources'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

const server = new ApolloServer({
  dataSources,
  resolvers,
  typeDefs,
})

const app = new Koa()
server.applyMiddleware({ app })

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
})
