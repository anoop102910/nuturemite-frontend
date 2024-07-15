import axios from "axios";
import { NEXT_PUBLIC_SERVER_URL } from "@/config/environment";

const api = axios.create({
  baseURL: NEXT_PUBLIC_SERVER_URL,
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

