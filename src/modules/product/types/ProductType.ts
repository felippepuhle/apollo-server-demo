import { gql } from 'apollo-server-koa'

const typeDefs = gql`
  type Product {
    id: String!
    strainId: String
    strain: Strain
    brandRef: String!
    brand: Brand!
    name: String!
    description: String!
    derivation: String
    imageUrl: String
    extraImageUrls: [String]
    videoUrls: [String]
    category: String!
    type: String
    psychoactive: String
    cbdThcRatio: String
    highCbd: Boolean
    locations: [String]
    publishedAt: String
    averageRating: Float
    reviewCount: Int
    createdAt: String
    updatedAt: String
    watermark: String
  }
`

export default typeDefs
