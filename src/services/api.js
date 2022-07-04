import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002",
  timeout: 10000, //10 segundos
});

export default api;
