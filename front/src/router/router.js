import BlogPage from "@/pages/blog/blogs-component.vue";
import ShoppingCart from "../pages/cart/Shopping-Cart-page.vue";
import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/components/productList.vue";
import ProductDetailes from "@/components/productDetailes.vue";
import App from "@/App.vue";
import ArticleDetailes from "@/components/articleDetailes.vue";
import ArticlesPage from "@/components/articlesPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: App,
  },
  {
    path: "/products",
    component: ProductList,
  },
  {
    path: "/product/:id",
    name: "productDetails",
    component: ProductDetailes,
  },
  {
    path: "/blog",
    component: BlogPage,
    children: [
      {
        path: "",
        name: "blogs",
        component: ArticlesPage,
      },
      {
        path: ":id",
        name: "blog-details",
        component: ArticleDetailes,
      },
    ],
  },
  {
    path: "/cart",
    name: "cart",
    component: ShoppingCart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
