import { create } from "zustand";
import api from "../lib/axios";
import { generateGuestId, getErrorMsg } from "../lib/utils";
import toast from "react-hot-toast";

const useCart = create((set) => ({
  cart: [],
  loading: false,
  error: null,
  total: 0,
  addToCart: async ({ productId, userId, color, size }) => {
    const guestId = userId ? null : generateGuestId();
    set({ loading: true });

    try {
      const response = await api.post("/cart", {
        productId,
        guestId,
        userId,
        color: color ?? "standard",
        size: size ?? "standard",
      });
      const { cart } = response.data;
      const total = cart.cartItems.reduce((ac, item) => {
        return ac + item.dummyProduct.price * item.quantity;
      }, 0);
      set({ cart, total });
      toast.success("Product added to cart");
    } catch (err) {
      const errorMsg = getErrorMsg(err);
      console.log(errorMsg);
      toast.error(errorMsg);
    } finally {
      set({ loading: false });
    }
  },
  //   get cart
  getCart: async ({ userId }) => {
    set({ loading: true });
    const guestId = generateGuestId();
    try {
      const response = await api.get("/cart", { params: { guestId, userId } });
      const { cart } = response.data;
      const total = cart.cartItems.reduce((ac, item) => {
        return ac + item.dummyProduct.price * item.quantity;
      }, 0);
      set({ cart, total });
    } catch (err) {
      const errorMsg = getErrorMsg(err);
      console.log(errorMsg);
      set({ errorMsg });
    } finally {
      set({ loading: false });
    }
  },
  //   dremove from cart
  removeFromCart: async ({ productId, userId }) => {
    const guestId = generateGuestId();
    try {
      const response = await api.delete(`/cart/${productId}`, {
        data: {
          userId,
          guestId,
          color: "standard",
          size: "standard",
          productId,
        },
      });

      const { cart } = response.data;

      const total = cart.cartItems.reduce((ac, item) => {
        return ac + item.dummyProduct.price * item.quantity;
      }, 0);
      set({ cart, total });
      toast.success("Product removed from cart");
    } catch (err) {
      const errorMsg = getErrorMsg(err);
      console.log({ errorMsg });
      set({ error: errorMsg });
    }
  },
  // update quantity
  updateQuantity: async ({ quantity, productId, userId }) => {
    const guestId = generateGuestId();
    try {
      const response = await api.put(`/cart/${productId}`, {
        quantity,
        guestId,
        userId,
      });
      const { cart } = response.data;
      const total = cart.cartItems.reduce((ac, item) => {
        return ac + item.dummyProduct.price * item.quantity;
      }, 0);
      set({ cart, total });
    } catch (err) {
      const errMsg = getErrorMsg(err);
      console.log(errMsg);
    }
  },
  clearCart: async () => {
    const guestId = generateGuestId();
    try {
      await api.delete(`/cart/clear`, { guestId });
      set({ total: 0, cart: [] });
    } catch (err) {
      const errMsg = getErrorMsg(err);
      toast.error(errMsg);
    }
  },
}));

export default useCart;
