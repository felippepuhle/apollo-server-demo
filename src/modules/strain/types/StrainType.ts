import { gql } from 'apollo-server-koa'

const typeDefs = gql`
  type Strain {
    id: String!
    name: String!
    description: String!
    type: String!
    isHighCbd: Boolean!
    cannabinoids: String!
    lineage: String!
    imageUrl: String!
    publishedAt: String
    productCount: Int!
    createdAt: String
    updatedAt: String
  }
`

export default typeDefs
