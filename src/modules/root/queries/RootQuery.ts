import { gql } from 'apollo-server-koa'

const typeDefs = gql`
  type Query {
    productsByMenu(id: String!, page: Int, perPage: Int): [SKU]
  }
`

export default typeDefs
