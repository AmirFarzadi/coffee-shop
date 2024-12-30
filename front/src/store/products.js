import axios from "axios";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    productDetail : {}
  }),
  actions: {
    async setProducts(category) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products?category=${category}`
        );
        this.products = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async setProductDetail(productId) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/product/${productId}`
        );
        this.productDetail = response.data[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
});
