import { RESTDataSource } from 'apollo-datasource-rest'

import { API_URL } from '../../../config'

class SKURestDataSource extends RESTDataSource {
  constructor() {
    super()

    this.baseURL = API_URL
  }

  async getProductsByMenu(id, page = 0, perPage = 10) {
    return this.get(`marketplace/menus/${id}/products?page=${page}&perPage=${perPage}`)
  }
}

export default SKURestDataSource
