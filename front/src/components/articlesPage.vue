<template>
  <section class="py-5" style="background-color: #eee">
    <div class="container bg-light shadow rounded-2 p-5">
      <div class="row mb-5 justify-content-between align-items-center">
        <div class="col-4">
          <input
            type="text"
            class="form-control shadow-sm"
            placeholder="جستجو مقالات..."
          />
        </div>
        <div class="col-4 text-end">
          <div class="dropdown d-inline-block">
            <button class="btn btn-sm dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              مرتب سازی براساس
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">جدیدترین</a></li>
              <li><a class="dropdown-item" href="#">قدیمی‌ترین</a></li>
              <li><a class="dropdown-item" href="#">پربازدیدترین</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row g-3 justify-content-center align-items-stretch">
        <div class="col-auto " v-for="(blog, index) in blogs" :key="index">
          <router-link :to="{name : 'blog-details' , params: {id : blog.id}}" class="text-decoration-none">
            <div class="card h-100 d-flex flex-column" style="width: 15rem">
              <img
                src="@/assets/images/blog.jpg"
                class="card-img-top object-fit-cover"
                alt="..."
                height="200px"
              />
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title text-center">{{ blog.title }}</h5>
                <p class="card-text text-truncate">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import blogs from '../blog-data.js';
console.log(blogs);
</script>