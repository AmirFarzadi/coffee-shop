import BlogSection from "@/components/blog/blog-section.vue";
import ProductsSection from "@/components/products/products-section.vue";
import BlogDetails from "@/pages/blog/blog-details.vue";
import BlogPage from "@/pages/blog/blogs-component.vue";
import HomePage from "@/pages/home/home-page.vue";
import ProductInformationPage from "@/pages/products/product-information-page.vue";
import ProductsPage from "@/pages/products/products-page.vue";
import { createRouter, createWebHistory } from "vue-router";

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
        path: "", // مسیر پیش‌فرض فرزند
        name: "products",
        component: ProductsSection,
      },
      {
        path: ":name", // مسیر پویا برای محصول خاص
        name: "product-information",
        component: ProductInformationPage,
      },
    ],
  },
  {
    path: "/blog",
    component: BlogPage,
    children: [
      {
        path: "", // مسیر پیش‌فرض فرزند
        name: "blogs",
        component: BlogSection,
      },
      {
        path: ":id", // مسیر پویا برای جزئیات وبلاگ
        name: "blog-details",
        component: BlogDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
