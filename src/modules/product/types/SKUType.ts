import { gql } from 'apollo-server-koa'

const typeDefs = gql`
  type SKUProviderAttributesInventory {
    uuid: String!
    label: String!
    thcMg: Int
    thcPercent: Int
    cbdMg: Int
    cbdPercent: Int
    price: Float
    stock: Int
  }

  type SKUProviderAttributes {
    productUuid: String!
    inventories: [SKUProviderAttributesInventory]
    price: Float
    stock: Int
  }

  type SKU {
    id: String!
    menuId: String!
    menu: Menu!
    variantId: String!
    variant: Variant!
    attributes: String
    providerAttributes: SKUProviderAttributes!
    createdAt: String
    updatedAt: String
  }
`

export default typeDefs
