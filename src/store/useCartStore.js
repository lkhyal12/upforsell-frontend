import { create } from "zustand";
import api from "../lib/axios";
import { getErrorMsg } from "../lib/utils";
import toast from "react-hot-toast";

const useCart = create((set) => ({
  cart: [],
  loading: false,
  error: null,

  addToCart: async ({ productId, guestId, userId }) => {
    set({ loading: true });
    try {
      const response = await api.post("/cart", {
        productId,
        guestId,
        userId,
      });
      set({ cart: response.data.cart });
    } catch (err) {
      const errorMsg = getErrorMsg(err);
      console.log(errorMsg);
      toast.error(errorMsg);
    } finally {
      set({ loading: false });
    }
  },
  //   get cart
  getCart: async ({ userId, guestId }) => {
    set({ loading: true });
    try {
      const response = await api.get("/cart", { guestId, userId });
      set({ cart: response.data.cart });
    } catch (err) {
      const errorMsg = getErrorMsg(err);
      console.log(errorMsg);
      set({ errorMsg });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useCart;
