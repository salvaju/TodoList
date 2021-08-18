import axios from "axios";

const api = axios.create(
    {
        baseURL: 'https://611d0f157d273a0017e2f5f3.mockapi.io/'
    }
);

export default api;