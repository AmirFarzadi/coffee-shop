<template>
  <Navbar></Navbar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup>
import Navbar from './components/Navbar-component.vue';
import Footer from './components/Footer-component.vue';
</script>