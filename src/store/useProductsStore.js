import axios from "axios";
import { create } from "zustand";
import { getErrorMsg } from "../lib/utils";
const dummyJsonBaseUrl = "https://dummyjson.com/products";
const useProducts = create((set) => ({
  loading: false,
  error: null,
  products: [],
  categoryProducts: [],
  product: null,
  fetchDummyJsonProducts: async (category = "") => {
    set({ loading: true });
    let url = category
      ? `https://dummyjson.com/products/category/${category}`
      : `https://dummyjson.com/products`;
    try {
      const response = await axios.get(url);
      const products = response.data.products;
      set({ categoryProducts: products });
    } catch (err) {
      const errorMsg = getErrorMsg(err);
      console.log(errorMsg);
    }
  },

  // fetch single product function
  fetchSingleProduct: async (id) => {
    set({ loading: true });

    try {
      const response = await axios.get(dummyJsonBaseUrl + "/" + id);
      set({ product: response.data });
    } catch (err) {
      const errorMsg = getErrorMsg(err);
      set({ error: errorMsg });
    } finally {
      set({ loading: false });
    }
  },

  // fetech products by category
  fetchProductsByCategory: async (category) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}`,
      );

      set({
        categoryProducts: response.data.products
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5),
      });
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useProducts;
