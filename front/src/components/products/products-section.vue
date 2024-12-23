
<template>
  <section>
    <div class="container-fluid py-5" style="background-color: #f0f0f0">
      <div class="row justify-content-center align-items-start">

        <!-- Topbar -->
        <div class="col-11 d-md-none mb-3 px-3 py-2 d-flex align-items-center justify-content-between bg-light rounded-3 shadow">
          <div class="dropdown">
              <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                دسته بندی محصولات
              </button>
              <ul class="dropdown-menu">
                <li><a href="#" class="dropdown-item">قهوه</a></li>
              </ul>
          </div>
          <div>
            <form>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="جستجو محصولات..." />
                <button class="btn btn-success" type="submit">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- Sidebar -->
        <div id="sidebar" class="col-lg-3 col-md-4 col-12 d-none d-md-block p-4 me-4 bg-light rounded-3 shadow">
          <div class="mb-4">
            <h5 class="mb-3">جستجو</h5>
            <form>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="جستجو محصولات..." />
                <button class="btn btn-success" type="submit">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>

          <div>
            <h5 class="mb-3">دسته بندی محصولات</h5>
            <ul class="list-group">
              <li class="list-group-item"><a href="#" class="text-decoration-none text-dark">قهوه</a></li>
            </ul>
          </div>
        </div>

        <!-- Product Container -->
        <div id="product-container" class="col-lg-8 col-md-7 col-12 p-4 bg-light rounded-3 shadow">
          <!-- Product Filter -->
          <div id="product-filter" class="mb-4">
            <div class="dropend">
              <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                ترتیب محصولات
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">گرانترین</a></li>
                <li><a class="dropdown-item" href="#">ارزانترین</a></li>
                <li><a class="dropdown-item" href="#">محبوب ترین</a></li>
                <li><a class="dropdown-item" href="#">پرفروش ترین</a></li>
              </ul>
            </div>
          </div>
          <!-- Products -->
            <div id="products" class="row g-2 align-items-stretch">
              <!-- Product Card -->
                 <div class="col-lg-3 col-sm-6 col-12" v-for="product in products" :key="product.id">
                  <router-link :to="{name: 'product-information', params : {name : product.route}}" class="text-decoration-none d-block h-100">
                    <div class="card p-3 rounded-3 h-100 d-flex flex-column">
                      <img src="../../img/coffee.jpg" class="card-img-top mb-3 object-fit-cover" alt="" />
                      <div class="card-body text-center p-0 mt-auto">
                        <h6 class="card-title mb-2 text-truncate" style="max-width: 100%;">{{ product.name }}</h6>
                        <p class="card-text text-success fw-bold">{{ product.price }} تومان</p>
                      </div>
                    </div>
                  </router-link>
                 </div>
            <!-- Repeat product cards as needed -->

            <!-- Add more product cards as needed -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import products from '@/data';
</script>