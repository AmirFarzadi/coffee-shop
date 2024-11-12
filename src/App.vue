<template>
  <Navbar></Navbar>
  <banner></banner>
  <Features></Features>
  <Products></Products>
  <BlogSection></BlogSection>
  <ContactUs></ContactUs>
  <Footer></Footer>
</template>

<script setup>
import Navbar from "./components/Navbar/index-navbar.vue"
import banner from "./components/banner/index-banner.vue";
import Features from "./components/features/index-features.vue";
import Products from "./components/products/index-products.vue";
import BlogSection from "./components/blog/index-blog.vue"
import ContactUs from "./components/contact/index-contact.vue"
import Footer from "./components/footer/index-footer.vue"
</script>