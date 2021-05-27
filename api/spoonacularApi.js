import qs from 'querystring';
import spoonacularApiClient from './clients/spoonacularApiClient'

export default {
  getRecipes() {
    let data = {
      format: 'json',
    },
    data = qs.stringify(data);
    data = decodeURIComponent(data);
    const config = {
      method: 'post',
      headers: {
        // accept: '*/*',
        'content-type': 'application/x-www-form-urlencoded',
      },
      data,
    };
    return spoonacularApiClient(config);
  }
}