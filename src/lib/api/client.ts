import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: { "Content-Type": "application/json" },
    timeout: 10000,
});

// REQUEST INTERCEPTOR: Her isteğe token ekle
api.interceptors.request.use(
    (config) => {
        // Token'ı localStorage'dan veya başka bir kaynaktan al
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// RESPONSE INTERCEPTOR: Hataları yakala
api.interceptors.response.use(
    (res) => res,
    (err) => {
        console.error("API Error:", err);
        throw err;
    }
);

export const apiGet = async (url: string) => {
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }

}

export const apiPost = async (url: string, parameters: any) => {
    try {
        const response = await api.post(url, parameters);
        return response.data;
    } catch (error) {
        throw error;
    }

}

export const apiPut = async (url: string, parameters: any) => {
    try {
        const response = await api.put(url, parameters);
        return response.data;
    } catch (error) {
        throw error;
    }

}