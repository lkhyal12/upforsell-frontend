import { create } from "zustand";
import { getErrorMsg } from "../lib/utils";
import toast from "react-hot-toast";
import api from "../lib/axios";

const useAuthStore = create((set) => ({
  loading: false,
  error: null,
  user: null,
  isAdmin: false,
  accessToken: null,
  // sign up function
  signUp: async ({ name, email, password }) => {
    set({ loading: true });
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      set({
        user: response.data.user,
        error: null,
        loading: false,
        isAdmin: response.data.user.role === "admin",
        accessToken: response.data.accessToken,
      });
    } catch (err) {
      const errorMsg = getErrorMsg(err);
      toast.error(errorMsg);
      console.log(errorMsg);
      set({ error: errorMsg, loading: false });
    }
  },

  //   login
  login: async ({ email, password }) => {
    set({ loading: true });
    try {
      const { data } = await api.post("/auth/login", { email, password });

      set({
        user: data.user,
        isAdmin: data.user.role === "admin",
        error: null,
        loading: false,
      });
    } catch (err) {
      const errorMsg = getErrorMsg(err);
      toast.error(errorMsg);
      console.log(errorMsg);
      set({ error: errorMsg, loading: false });
    }
  },
  //   logout function
  logout: async () => {
    set({ loading: true });

    try {
      api.post("/auth/logout");
      set({ loading: false, isAdmin: false, user: null, accessToken: null });
    } catch (err) {
      const errorMsg = getErrorMsg(err);
      toast.error(errorMsg);
      set({ error: errorMsg, loading: false });
    }
  },

  //   get profile
  getProfile: async () => {
    try {
      const { data } = await api.get("/auth/profile");
      set({ user: data.user, isAdmin: data.user.role === "admin" });
    } catch (err) {
      const errorMsg = getErrorMsg(err);
      toast.error(errorMsg);
      set({ error: errorMsg });
    }
  },
}));

export default useAuthStore;
