import axios from 'axios';

// O "api" agora aponta para o seu servidor no Render,
// e não mais para o 'localhost:3000'
const api = axios.create({
  baseURL: 'https://lex-api.onrender.com' 
});

// O interceptor de token continua igual
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('lex-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default api;