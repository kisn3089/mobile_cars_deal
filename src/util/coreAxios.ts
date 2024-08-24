import axios, { AxiosInstance } from "axios";

export const coreAxios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
