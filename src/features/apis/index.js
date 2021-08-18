import axios from "axios";

const api = axios.create(
    {
        baseURL: 'https://611d24d47d273a0017e2f6b6.mockapi.io/'
    }
);

export default api;