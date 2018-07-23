import { gql } from 'apollo-server-koa'

const typeDefs = gql`
  type Brand {
    id: String!
    name: String!
    logoUrl: String!
  }
`

export default typeDefs
