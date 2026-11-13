import { create } from "zustand";
import api from "../lib/axios";
import { getErrorMsg } from "../lib/utils";
import toast from "react-hot-toast";

const useOrders = create((set) => ({
  loading: false,
  error: null,
  orders: null,

  getOrders: async () => {
    set({ loading: true });
    try {
      const { data } = await api.get("/orders");
      set({ orders: data.orders });
    } catch (err) {
      const errorMshg = getErrorMsg(err);
      toast.error(errorMshg);
      set({ error: errorMshg, orders: null });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useOrders;
