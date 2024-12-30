<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm px-3">
    <button
      class="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#mynav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link :to="{ name: 'home' }" class="navbar-brand ms-3">
      <img
        src="../img/logo.png"
        alt="Logo"
        class="img-fluid"
        style="width: 50px"
      />
    </router-link>

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
        <router-link
          :to="{ name: 'products' }"
          class="nav-link"
          @click="productsStore.setProducts(null)"
        >
          <li class="nav-item mx-2">محصولات</li>
        </router-link>
        <li class="nav-item mx-2">
          <a href="#blog" class="nav-link" v-if="homePage">مقالات</a>
          <router-link :to="{ name: 'blogs' }" class="nav-link" v-else
            >مقالات</router-link
          >
        </li>
        <li class="nav-item mx-2">
          <a
            href="#contact_Us"
            class="nav-link"
            ref="contactUs"
            @click="contactUsHandeler"
            >ارتباط باما</a
          >
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
        <button @click="toggleModal('login')" class="btn btn-outline-success">
          <i class="fa-solid fa-user-plus"></i>
          ثبت نام / ورود
        </button>
      </div>
    </div>
  </nav>

  <!-- مدال ورود -->
  <div
    v-if="showModal === 'login'"
    class="modal fade show d-block"
    tabindex="-1"
    role="dialog"
    aria-labelledby="loginRegisterModal"
    aria-hidden="true"
    style="background-color: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">ورود</h5>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="toggleModal('login')"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitLoginForm">
            <!-- فیلد ایمیل -->
            <div class="mb-3">
              <label for="email" class="form-label">ایمیل:</label>
              <input
                type="email"
                id="email"
                v-model="loginFormData.email"
                class="form-control"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <!-- فیلد رمزعبور -->
            <div class="mb-3">
              <label for="password" class="form-label">رمز عبور:</label>
              <input
                type="password"
                id="password"
                v-model="loginFormData.password"
                class="form-control"
                placeholder="رمز عبور خود را وارد کنید"
                required
              />
            </div>
            <!-- دکمه ورود و ثبت‌نام -->
            <div class="d-flex justify-content-between">
              <button type="submit" class="btn btn-success w-45">ورود</button>
              <button
                type="button"
                class="btn btn-secondary w-45"
                @click="toggleModal('register')"
              >
                ثبت‌نام
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- مدال ثبت‌نام -->
  <div
    v-if="showModal === 'register'"
    class="modal fade show d-block"
    tabindex="-1"
    role="dialog"
    aria-labelledby="loginRegisterModal"
    aria-hidden="true"
    style="background-color: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">ثبت‌نام</h5>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="toggleModal('register')"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitRegisterForm">
            <!-- فیلد نام -->
            <div class="mb-3">
              <label for="firstName" class="form-label">نام:</label>
              <input
                type="text"
                id="firstName"
                v-model="registerFormData.firstName"
                class="form-control"
                placeholder="نام خود را وارد کنید"
                required
              />
            </div>
            <!-- فیلد نام خانوادگی -->
            <div class="mb-3">
              <label for="lastName" class="form-label">نام خانوادگی:</label>
              <input
                type="text"
                id="lastName"
                v-model="registerFormData.lastName"
                class="form-control"
                placeholder="نام خانوادگی خود را وارد کنید"
                required
              />
            </div>
            <!-- فیلد ایمیل -->
            <div class="mb-3">
              <label for="email" class="form-label">ایمیل:</label>
              <input
                type="email"
                id="email"
                v-model="registerFormData.email"
                class="form-control"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <!-- فیلد رمز عبور -->
            <div class="mb-3">
              <label for="password" class="form-label">رمز عبور:</label>
              <input
                type="password"
                id="password"
                v-model="registerFormData.password"
                class="form-control"
                placeholder="رمز عبور خود را وارد کنید"
                required
              />
            </div>
            <!-- فیلد شماره تماس -->
            <div class="mb-3">
              <label for="phone" class="form-label">شماره تماس:</label>
              <input
                type="tel"
                id="phone"
                v-model="registerFormData.phone"
                class="form-control"
                placeholder="09111111111"
                required
              />
            </div>

            <!-- دکمه ثبت‌نام -->
            <button type="submit" class="btn btn-success w-100">ثبت‌نام</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// const axios = require('axios');
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const homePage = ref(false);
const route = useRoute();
import { useProductsStore } from "@/store/products";
const productsStore = useProductsStore();

onMounted(() => {
  route.path == "/" ? (homePage.value = true) : (homePage.value = false);
});

// متغیرهای حالت برای نمایش یا مخفی کردن مدال‌ها
const showModal = ref(null);

// داده‌های فرم ورود
const loginFormData = ref({
  email: "",
  password: "",
});

// داده‌های فرم ثبت‌نام
const registerFormData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
});

// متد برای تغییر حالت نمایش مدال
const toggleModal = (type) => {
  if (type === "login") {
    showModal.value = showModal.value === "login" ? null : "login";
  } else if (type === "register") {
    showModal.value = showModal.value === "register" ? null : "register";
  }
};

// متد برای ارسال فرم ورود
const submitLoginForm = () => {
  console.log("ورود: ", loginFormData.value);
  // اینجا می‌توانید درخواست API یا عملیات لازم را انجام دهید
};

// متد برای ارسال فرم ثبت‌نام
const submitRegisterForm = () => {
  console.log("ثبت‌نام: ", registerFormData.value);
  // اینجا می‌توانید درخواست API یا عملیات لازم را انجام دهید
};

// function productsBtnHandeler(){
//   axios.get('http://localhost:3000/api/products')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// }
</script>

<style>
.modal {
  backdrop-filter: blur(5px);
}
</style>