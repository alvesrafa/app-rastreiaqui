import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rastreiaqui-back.herokuapp.com',
  // baseURL: 'http://localhost:3001'baseURL para desenvolvimento (Mais rapido)
})
export default api;