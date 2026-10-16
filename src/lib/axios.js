import axios from "axios";
import useAuthStore from "../store/useAuthStore";

const api = axios.create({
  baseURL: import.meta.env.VITE_BAKCKEND_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/refresh")
    ) {
      originalRequest._retry = true;

      try {
        const res = await api.post("/auth/refresh");
        const newAccessToken = res.data.accessToken;
        useAuthStore.setState({ accessToken: newAccessToken });
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (err) {
        useAuthStore.setState({
          user: null,
          accessToken: null,
          isAdmin: false,
        });
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);
export default api;
