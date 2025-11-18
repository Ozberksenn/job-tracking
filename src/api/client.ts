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