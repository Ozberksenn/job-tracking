import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  headers: {"Content-Type": "application/json"},
  timeout: 10000,
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API Error:", err);
    throw err;
  }
);

export const apiGet = async (url:string) => {
  const response = await api.get(url);
  return response.data;
}

export const apiPost = async (url:string,parameters:any) => {
  const response = await api.post(url, parameters);
  return response.data;
}


export const apiPut = async (url:string,parameters:any) => {
  const response = await api.put(url, parameters);
  return response.data;
}