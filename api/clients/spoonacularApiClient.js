import axios from 'axios';

const spoonacularRootApi = process.env.spoonacularAPIKey; 
const spoonacularApiClient = axios.create({
  baseURL: spoonacularRootApi,
  validateStatus(status) {
    return status != 403 || status != 401 | status != 500;
  },
});
export default spoonacularApiClient;