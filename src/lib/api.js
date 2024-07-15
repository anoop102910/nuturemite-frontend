import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000"}/api`,
  withCredentials: true,
  responseType: "json",
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api

