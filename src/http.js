import axios from "axios";
console.log("variavel de ambiente:", process.env.REACT_APP_API_URL);
const http = axios.create({
  // variável de ambiente para a url do backend
  baseURL: process.env.REACT_APP_API_URL,
});

http.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('token');
    // if (token) {
    // config.headers['Authorization'] = Bearer ${token};
    // }

    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
