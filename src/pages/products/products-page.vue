<template>
  <Navbar></Navbar>
  <router-view></router-view>
  <!-- <ProductsSection></ProductsSection> -->
  <Footer></Footer>
</template>

<script setup>
import Navbar from '@/components/Navbar-component.vue';
// import ProductsSection from '@/components/products/products-section.vue';
import Footer from '@/components/Footer-component.vue';
</script>

<style>

</style>