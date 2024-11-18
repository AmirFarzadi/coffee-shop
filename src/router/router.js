import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/home/home-page.vue";
import ProductsPage from "@/pages/products/products-page.vue";
import productInformationPage from "@/pages/product-information/product-information-page.vue";
import productsSection from "@/components/products/products-section.vue";
import BlogPage from "@/pages/blog/blog-component.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/products",
    component: ProductsPage,
    children: [
      {
        path: "",
        name: "products",
        component: productsSection,
      },
      {
        path: ":name",
        name: "product-information",
        component: productInformationPage,
      },
    ],
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
