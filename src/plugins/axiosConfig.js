import { useUserStore } from "@/components/store/UserStore";
import router from "@/router/router";
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v2',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    validateStatus: function (status) {
        return status >= 200 && status < 300 || status === 302;
    }
});

api.interceptors.request.use(
    (config) => {
        const userStore = useUserStore();
        const token = userStore.getToken;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {

        if (error.response && (error.response.status === 403 || error.response.status === 401)) {
            const userStore = useUserStore()

            userStore.logout();
            router.replace("/login")
        }

        return Promise.reject(error);
    }
)

export default api;


// api.defaults.xsrfCookieName = 'XSRF-TOKEN';
// api.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';