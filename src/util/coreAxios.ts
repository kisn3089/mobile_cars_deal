import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

export const coreAxios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const delayRequest = (request: InternalAxiosRequestConfig) => {
  return new Promise<InternalAxiosRequestConfig>((resolve) => {
    setTimeout(() => resolve(request), 3000);
  });
};

const onRequest = async (request: InternalAxiosRequestConfig) => {
  const mode = window.location.pathname;

  if (mode === "/list") return request;
  if (mode === "/fail") request.url = "/wanttogosocar";

  await delayRequest(request);

  return request;
};

coreAxios.interceptors.request.use((request) => onRequest(request));
