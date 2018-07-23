import { ContextType } from '../../../utils'

interface ProductsByMenuArgs {
  id: string,
  page?: number,
  perPage?: number,
}

const productsByMenu = async (_source, _args: ProductsByMenuArgs, { dataSources }: ContextType) =>
  dataSources.skuAPI.getProductsByMenu(
    _args.id,
    _args.page,
    _args.perPage,
  )

const resolvers = {
  productsByMenu,
}

export default resolvers
