import spoonacularApiClient from './clients/spoonacularApiClient'

const apiKey = process.env.spoonacularAPIKey;

export default {
  getRecipes(params) {
    params.apiKey = apiKey
    return spoonacularApiClient.request({
      method: 'get',
      url: '/recipes/complexSearch',
      headers: { 'Content-Type': 'application/json' },
      params: params
    })
  }
}