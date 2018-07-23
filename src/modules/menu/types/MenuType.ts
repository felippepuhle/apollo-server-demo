import { gql } from 'apollo-server-koa'

const typeDefs = gql`
  type MenuProviderAttributes {
    uuid: String!
    salesTaxPercent: Float!
  }

  type Menu {
    id: String!
    name: String!
    provider: String!
    providerAttributes: MenuProviderAttributes!
    published: Boolean
    locations: [String]
    createdAt: String
    updatedAt: String
  }
`

export default typeDefs
