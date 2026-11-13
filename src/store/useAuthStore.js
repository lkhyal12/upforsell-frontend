import { create } from "zustand";
import { generateGuestId, getErrorMsg } from "../lib/utils";
import toast from "react-hot-toast";
import api from "../lib/axios";

const useAuthStore = create((set) => ({
  loading: false,
  error: null,
  user: null,
  isAdmin: false,
  accessToken: null,
  isCheckingAuth: true,
  // sign up function
  signUp: async ({ name, email, password }) => {
    const guestId = generateGuestId();
    set({ loading: true });
    try {
      const response = await api.post(
        "http://localhost:3000/api/auth/register",
        {
          name,
          email,
          password,
          guestId,
        },
      );

      set({
        user: response.data.user,
        error: null,
        loading: false,
        isAdmin: response.data.user.role === "admin",
        accessToken: response.data.accessToken,
      });

      return { success: true };
    } catch (err) {
      const errorMsg = getErrorMsg(err);
      toast.error(errorMsg);
      console.log(errorMsg);
      set({ error: errorMsg, loading: false });

      return { success: false };
    }
  },

  //   login
  login: async ({ email, password }) => {
    set({ loading: true });
    const guestId = generateGuestId();
    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
        guestId,
      });

      set({
        user: data.user,
        isAdmin: data.user.role === "admin",
        error: null,
        loading: false,
      });

      return { success: true, userId: data.user._id };
    } catch (err) {
      const errorMsg = getErrorMsg(err);
      toast.error(errorMsg);
      console.log(errorMsg);
      set({ error: errorMsg, loading: false });

      return { success: false };
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
    set({ isCheckingAuth: true, error: null });
    try {
      const { data } = await api.get("/auth/profile");
      console.log({ data });
      set({ user: data.user, isAdmin: data.user.role === "admin" });
    } catch (err) {
      const errorMsg = getErrorMsg(err);
      toast.error(errorMsg);
      set({ error: errorMsg, user: null, isAdmin: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));

export default useAuthStore;
