import axios from "axios";


const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
    ? `${import.meta.env.VITE_BASE_URL}/api`
    : "http://13.50.4.202:8000/api",
});

export default client;
