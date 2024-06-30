import axios from "axios";

const axiosInstace = axios.create({
  baseURL: import.meta.env.VITE_API,
});

axiosInstace.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `${import.meta.env.VITE_API_KEY}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstace;
