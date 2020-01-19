import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rastreiaqui-back.herokuapp.com'
})
export default api;