import axios from 'axios';

const config = {
  BASE_URL: 'http://localhost:8080',  // URL yang benar
};

export const axiosInstance = axios.create({
  baseURL: config.BASE_URL,  // Gunakan baseURL yang sudah benar
});

axiosInstance.interceptors.response.use(
  (response) => response.data,  // Mengambil response data langsung
  (error) => Promise.reject(error)  // Menangani error
);
