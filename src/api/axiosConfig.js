import axios from 'axios';

// 1. Cria uma "instância" do Axios com a URL base da sua API
const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});

// 2. O "Interceptor" (O SUPERPODER)
// Isso intercepta CADA requisição antes de ela ser enviada
api.interceptors.request.use(
  (config) => {
    // 3. Pega o token do "porta-luvas" (localStorage)
    const token = localStorage.getItem('lex-token');
    
    // 4. Se o token existir, anexa ele no cabeçalho
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