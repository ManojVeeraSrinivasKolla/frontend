import axios from "axios";


const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
    ? `${import.meta.env.VITE_BASE_URL}/api`
    : "http://51.20.249.8:8000/api",
});

export default client;
