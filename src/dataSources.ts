import SKUAPIDataSource from './modules/product/datasources/SKUAPIDataSource'

const dataSources = () => ({
  skuAPI: new SKUAPIDataSource(),
})

export default dataSources
