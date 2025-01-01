<template>
  <section class="p-5" style="background-color: #eeeeee">
    <div class="container">
      <!-- Main Product Section -->
      <div class="row shadow rounded-3 bg-light py-5" style="min-height: 80vh">
        <!-- Product Image Section -->
        <div
          class="col-md-4 col-12 d-flex align-items-center justify-content-center px-4 mb-3 mb-md-0"
        >
          <div id="product-image">
            <img
              src="../../img/coffee.jpg"
              alt="Coffee"
              class="img-fluid border"
            />
          </div>
        </div>

        <!-- Product Details Section -->
        <div class="col-md-8 col-12 border-start border-2">
          <!-- Product Name Section -->
          <div class="row">
            <!-- {{ product.title}} -->
            <div class="col-12 border-bottom">
              <div id="product-title" class="d-flex align-items-center">
                <i class="bi bi-caret-left-fill"></i>
                <h3 class="ms-1">{{ product.title }}</h3>
              </div>
            </div>
          </div>

          <!-- Product Info and Features -->
          <div class="row">
            <!-- Left Side: Price and Details -->
            <div class="col-12 col-md-6 p-3">
              <div id="product-price" class="py-2">
                <h4 class="text-success">{{ Number(product.price).toLocaleString() }} تومان</h4>
              </div>
              <div id="product-info">
                <p>نام: <span>{{ product.title }}</span></p>
                <p>
                  نام انگلیسی: <span>{{ product.latin_name }}</span>
                </p>
                <p>وزن: <span>{{ product.weight }} گرم</span></p>
                <p>نوع رست: <span>{{ product.roast_type }}</span></p>
                <p>میزان کافئین: <span>{{ product.caffeine_content }}</span></p>
                <p :class="product.stock_quantity > 0 ? 'text-success' : 'text-danger'" style="font-size: 13px">
                  {{ product.stock_quantity > 0 ? "موجود در انبار" : "موجود نیست" }}
                </p>
              </div>
              <!-- Social Media Icons -->
              <div id="social-links" class="mt-3">
                <i class="fa-brands fa-twitter me-2 fs-5 text-info"></i>
                <i class="fa-brands fa-facebook me-2 fs-5 text-primary"></i>
                <i class="fa-brands fa-instagram me-2 fs-5 text-danger"></i>
                <i class="fa-brands fa-telegram me-2 fs-5 text-primary"></i>
                <i class="fa-brands fa-youtube me-2 fs-5 text-danger"></i>
              </div>
            </div>

            <!-- Right Side: Benefits and Add to Cart -->
            <div class="col-12 col-md-6 d-flex flex-column p-4">
              <div id="product-benefits">
                <ul class="list-group">
                  <li
                    class="list-group-item disabled d-flex align-items-center"
                    aria-disabled="true"
                    style="background-color: #eeeeee"
                  >
                    <i class="fa-solid fa-shipping-fast me-1"></i>
                    پست پیشتاز ، تیپاکس و پیک موتوری
                  </li>
                  <li
                    class="list-group-item disabled d-flex align-items-center"
                    aria-disabled="true"
                    style="background-color: #eeeeee"
                  >
                    <i class="fa fa-tag me-1"></i>
                    تضمین بهترین قیمت بازار
                  </li>
                  <li
                    class="list-group-item disabled d-flex align-items-center"
                    aria-disabled="true"
                    style="background-color: #eeeeee"
                  >
                    <i class="fa-solid fa-headset me-1"></i>
                    پشتیبانی عالی
                  </li>
                  <li
                    class="list-group-item disabled d-flex align-items-center"
                    aria-disabled="true"
                    style="background-color: #eeeeee"
                  >
                    <i class="fa-solid fa-certificate me-1"></i>
                    اصالت کالاها از برترین برندها
                  </li>
                  <li
                    class="list-group-item disabled d-flex align-items-center"
                    aria-disabled="true"
                    style="background-color: #eeeeee"
                  >
                    <i class="fa-solid fa-bolt me-1"></i>
                    تحویل سریع در کمترین زمان ممکن
                  </li>
                </ul>
              </div>
              <!-- Add to Cart Section -->
              <div
                id="add-to-cart"
                class="row justify-content-between align-items-center mt-4"
              >
                <!-- Add to Cart Button -->
                <div class="col-12">
                  <button class="btn btn-success w-100" type="button" @click="addToCart">
                    افزودن به سبد خرید
                  </button>
                </div>
                <!-- Quantity Control -->
                <div class="col-12">
                  <div
                    id="quantity-control"
                    class="d-flex align-items-center justify-content-between mt-3"
                  >
                    <span>تعداد محصول: </span>
                    <div class="d-flex">
                      <button
                        class="btn border-0 d-flex justify-content-center align-items-center px-2"
                        style="background-color: #eee"
                        @click="product_number--"
                      >
                        <i class="fa-solid fa-minus"></i>
                      </button>
                      <span class="mx-2">{{
                        product_number < 1
                          ? (product_number = 1)
                          : product_number
                      }}</span>
                      <button
                        class="btn border-0 d-flex justify-content-center align-items-center px-2"
                        style="background-color: #eee"
                        @click="product_number++"
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

import { useProductsStore } from "@/store/products";

import { useRoute } from "vue-router";
const productsStore = useProductsStore();
const product = computed(() => productsStore.productDetail);
const route = useRoute();
const productId = route.params.id

onMounted(() => {
  productsStore.setProductDetail(productId)
})

const product_number = ref(1);


function addToCart (){

}

</script>
