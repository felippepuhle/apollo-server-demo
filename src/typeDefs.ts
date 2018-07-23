import BrandType from './modules/brand/types/BrandType'
import MenuType from './modules/menu/types/MenuType'
import ProductType from './modules/product/types/ProductType'
import SKUType from './modules/product/types/SKUType'
import StrainType from './modules/strain/types/StrainType'
import VariantType from './modules/variant/types/VariantType'

import RootQuery from './modules/root/queries/RootQuery'

const typeDefs = [
  BrandType,
  MenuType,
  ProductType,
  SKUType,
  StrainType,
  VariantType,

  RootQuery,
]

export default typeDefs
