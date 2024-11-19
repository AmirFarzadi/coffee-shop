<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm px-3">
    <button
      class="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#mynav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <a href="#" class="navbar-brand ms-3">
      <img
        src="../img/logo.png"
        alt="Logo"
        class="img-fluid"
        style="width: 50px"
      />
    </a>

    <div
      class="collapse navbar-collapse bg-body-tertiary py-3 py-lg-0"
      id="mynav"
    >
      <ul class="navbar-nav list-unstyled">
        <li class="nav-item mx-2">
          <router-link :to="{ name: 'home' }" class="nav-link"
            >صفحه اصلی</router-link
          >
        </li>
        <li class="nav-item mx-2">
          <router-link :to="{ name: 'products' }" class="nav-link"
            >محصولات</router-link
          >
        </li>
        <li class="nav-item mx-2">
          <a href="#blog" class="nav-link" v-if="homePage" >مقالات</a>
          <router-link :to="{name : 'blog'}" class="nav-link" v-else>مقالات</router-link>
        </li>
        <li class="nav-item mx-2">
          <a href="#contact_Us" class="nav-link" v-if="homePage">ارتباط باما</a>
          <router-link to="/#contact_Us" class="nav-link" v-else>ارتباط باما</router-link>
        </li>
      </ul>

      <form action="#" class="form-inline ms-auto">
        <div class="input-group">
          <input
            type="text"
            class="form-control rounded-pill"
            placeholder="جستجو محصول..."
          />
          <button class="btn btn-outline-secondary rounded-circle ms-2">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </form>

      <div class="ms-lg-3 my-2 my-lg-0">
        <button class="btn btn-success mx-2">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
        <button class="btn btn-outline-success">
          <i class="fa-solid fa-user-plus"></i>
          ثبت نام / ورود
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const homePage = ref(false);
const route = useRoute();
onMounted(() => {
  route.path == "/" ? (homePage.value = true) : (homePage.value = false);
});

</script>