import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://backend.profferdeals.com/api', 
  timeout: 1000,
});

export default axiosInstance;