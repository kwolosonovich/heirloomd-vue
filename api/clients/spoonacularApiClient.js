import axios from 'axios';
const spoonacularRootUrl = process.env.spoonacularRootUrl;

const spoonacularApiClient = axios.create({
  baseURL: spoonacularRootUrl,
  validateStatus(status) {
    return status != 403 || status != 401 | status != 500;
  },
});
export default spoonacularApiClient;