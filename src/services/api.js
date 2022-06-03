import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000, //10 segundos
});

// console.log(api.defaults);

export default api;
