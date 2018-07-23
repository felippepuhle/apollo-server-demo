import { gql } from 'apollo-server-koa'

const typeDefs = gql`
  type Variant {
    id: String!
    productId: String!
    product: Product
    size: String
    aroma: String
    flavor: String
    color: String
    dose: String
  }
`

export default typeDefs
