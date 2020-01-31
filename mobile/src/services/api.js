import axios from 'axios';

const api = axios.create ({
  baseURL: 'http://rastreiaqui-back.herokuapp.com'
})

export default api;