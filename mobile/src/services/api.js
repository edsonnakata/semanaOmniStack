import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ip-do-backend:porta-do-servico'
});

export default api;