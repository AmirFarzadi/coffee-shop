import { defineStore } from "pinia";
import apiClient from "@/services/apiClient";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    productDetail: {},
    error: null,
    loading: false,
  }),
  actions: {
    async getProducts(category) {
      this.loading = true;
      try {
        const response = await apiClient.get(
          `/products?category=${category}`
        );
        this.products = response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async getProductDetail(productId) {
      try {
        const response = await apiClient.get(
          `/products/${productId}`
        );
        this.productDetail = response.data[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
});
