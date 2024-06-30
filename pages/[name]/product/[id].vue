<template>
  <div class="md:container md:mx-auto flex flex-col sub">
    <div style="min-height: 90vh">
      <Menu title="product" style="z-index: 1000"></Menu>

      <div
        style="position: sticky; top: 0; background-color: white; z-index: 100"
        class="transition-all duration-300"
        id="sticky_image_div"
      >
        <div
          class="flex flex-col items-center justify-center bg-white shadow-md rounded-bl-3xl rounded-br-3xl pt-3 pb-4 my_white_div"
          style="margin-bottom: 0px; width: 100%; margin-top: 1px"
        >
          <div class="flex mt-1" style="width: 95%">
            <div class="relative ml-auto">
              <router-link :to="'/' + name">
                <font-awesome-icon :icon="['fas', 'circle-xmark']" size="2x" />
              </router-link>
            </div>
          </div>

          <transition name="fade1">
            <div
              v-if="scrolled"
              class="dynamic_div1"
              style="width: 100%; margin-top: -20px; min-height: 180px"
            >
              <div class="flex d1_child">
                <div style="width: 40%">
                  <img
                    src="~/assets/image/Cup.svg"
                    alt="trophy"
                    style="height: 270px; margin-top: -40px"
                  />
                </div>
                <div
                  v-if="dataProducts"
                  class="mt-5 flex flex-col mx-2"
                  style="width: 60%"
                >
                  <div
                    class="flex items-center justify-start gap-2"
                    style="margin-top: 20px"
                  >
                    <div
                      v-if="dataProducts.product_group_new == 1"
                      class="flex items-center justify-center"
                      style="
                        background-color: black;
                        color: white;
                        border-radius: 50%;
                        width: 36px;
                        height: 36px;
                      "
                    >
                      <small
                        class="text-white text-xs"
                        style="font-size: 10px; line-height: 30px"
                        >NEW</small
                      >
                    </div>

                    <div
                      v-if="dataProducts.product_group_hot == 1"
                      class="flex items-center justify-center"
                      style="
                        background-color: red;
                        color: white;
                        border-radius: 50%;
                        width: 36px;
                        height: 36px;
                      "
                    >
                      <small
                        class="text-white text-xs"
                        style="font-size: 10px; line-height: 30px"
                        >HOT</small
                      >
                    </div>
                  </div>
                  <p class="paragraph-bold mt-3">
                    {{ dataProducts?.product_group_name || "-" }}
                  </p>
                  <div class="flex">
                    <div class="paragraph">
                      <p class="paragraph_child">
                        Color:
                        {{
                          dataProducts?.product_group_color &&
                          dataProducts.product_group_color !== ""
                            ? dataProducts.product_group_color
                            : "-"
                        }}
                      </p>

                      <p class="paragraph_child">
                        Material:
                        {{
                          dataProducts?.product_group_material &&
                          dataProducts.product_group_material !== ""
                            ? dataProducts.product_group_material
                            : "-"
                        }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <transition name="fade2" style="min-height: 200px">
            <div v-if="!scrolled && dataSlide?.length > 0">
              <Carousel
                :items-to-show="1"
                :snapAlign="center"
                wrap-around="true"
                class="mt-1 pt-2 w-96 carousel"
              >
                <Slide v-for="(slide, index) in dataSlide" :key="index">
                  <div class="carousel__item">
                    <img
                      :src="'https://admin.ecatalog.cloud/uploads/ftp/' + slide"
                      alt="trophy"
                      style="height: 180px"
                    />
                  </div>
                </Slide>

                <template #addons>
                  <navigation>
                    <template #next>
                      <img
                        src="~/assets/image/chevron_right.svg"
                        @click="nextSlide"
                        class="c_next"
                        height="50px"
                        alt=""
                      />
                    </template>
                    <template #prev>
                      <img
                        src="~/assets/image/chevron_left.svg"
                        @click="prevSlide"
                        class="c_previous"
                        alt=""
                      />
                    </template>
                  </navigation>
                </template>
              </Carousel>
              <div v-if="!scrolled" class="dots-container">
                <span
                  v-for="(slide, index) in dataSlide"
                  :key="index"
                  class="dot"
                  :class="{ active: index === currentSlide }"
                ></span>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <transition name="fade3">
        <div
          v-if="!scrolled && dataProducts"
          class="flex flex-col justify-start dynamic_div2 mx-5 mt-5 mb-20 pb-2"
        >
          <div>
            <p class="paragraph-bold mt-3">
              {{ dataProducts?.product_group_name || "-" }}
            </p>

            <div class="mt-2">
              <p class="paragraph_child">
                Color:
                {{
                  dataProducts?.product_group_color &&
                  dataProducts.product_group_color !== ""
                    ? dataProducts.product_group_color
                    : "-"
                }}
              </p>

              <p class="paragraph_child">
                Material:
                {{
                  dataProducts?.product_group_material &&
                  dataProducts.product_group_material !== ""
                    ? dataProducts.product_group_material
                    : "-"
                }}
              </p>

              <p class="paragraph_child pt-1 w-[100%]">
                This medal is made with
                {{ dataProducts.product_group_material }} and comes in
                {{ dataProducts.product_group_color }}.
              </p>
            </div>
            <div
              class="flex items-center justify-end gap-2"
              style="margin-top: -80px"
            >
              <div
                v-if="dataProducts.product_group_new == 1"
                class="flex items-center justify-center"
                style="
                  background-color: black;
                  color: white;
                  border-radius: 50%;
                  width: 36px;
                  height: 36px;
                "
              >
                <small
                  class="text-white text-xs"
                  style="font-size: 10px; line-height: 30px"
                  >NEW</small
                >
              </div>
              <div
                v-if="dataProducts.product_group_hot == 1"
                class="flex items-center justify-center"
                style="
                  background-color: red;
                  color: white;
                  border-radius: 50%;
                  width: 36px;
                  height: 36px;
                "
              >
                <small
                  class="text-white text-xs"
                  style="font-size: 10px; line-height: 30px"
                  >HOT</small
                >
              </div>
            </div>
          </div>
        </div>
      </transition>

      <div v-if="dataProducts" class="data_table">
        <table
          style="
            width: 95%;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 10px;
          "
        >
          <thead>
            <tr
              style="
                background-color: #e7e7e7;
                height: 29px;
                border-radius: 23px;
                filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
              "
            >
              <th
                style="
                  width: 75%;
                  color: #000000;
                  text-align: left;
                  padding-left: 8px;
                  font-size: 14px;
                  font-family: 'Roboto', sans-serif;
                  letter-spacing: 1px;
                  line-height: auto;
                  border-style: hidden;
                  outline: none;
                "
              >
                Code: {{ dataProducts?.product_group_sku || "-" }}
              </th>
              <th
                style="
                  width: 25%;
                  color: #000000;
                  text-align: right;
                  font-size: 14px;
                  font-family: 'Roboto', sans-serif;
                  letter-spacing: 1px;
                  line-height: auto;
                  border-style: hidden;
                  outline: none;
                  padding-right: 8px;
                "
              >
                Unit Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(product, index) in childproducts"
              :key="product.product_id"
              class="table_data_row"
            >
              <td>
                <small class="table_data flex">
                  <!-- <span>{{ alphabets[index] }}</span> -->
                  <span>{{ product.product_abc_size }} &nbsp;</span> &nbsp;
                  <span>
                    H{{ product.product_height }}mm W{{
                      product.product_width
                    }}mm D{{ product.product_diameter }}mm ({{
                      product.product_color
                    }})</span
                  >
                </small>
              </td>
              <td style="padding-top: 3px; text-align: right">
                <small
                  class="table_data2"
                  style="display: inline-block; vertical-align: top"
                >
                  RM{{ product.product_sale_price }} <br />
                  <span
                    class="table_data3"
                    style="display: inline-block; vertical-align: top"
                  >
                    RM{{ product.product_regular_price }}</span
                  >
                </small>
              </td>
            </tr>
            

           
          </tbody>
        </table>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

// Add the icon to the library
library.add(faCircleXmark);
// Get axios plugin
const axios = useNuxtApp().$axios;

const route = useRoute();
const router = useRouter();
const id = route.params.id; // Access the "id" parameter
const name = route.params.name; // Access the "id" parameter

// Initialize data
const dataProducts = ref([]);
const dataSlide = ref([]);
const childproducts = ref([]);
const currentSlide = ref(0);
const fetchData = async () => {
  const url = `/ecatalog/product?productGroupId=${id}`;

  try {
    const response = await axios.get(url);
    const productGroups = response.data.products[0];
    dataProducts.value = productGroups;
    console.log(dataProducts.value);
    // Collect product images from all product groups
    const productImages = dataProducts.value.product.map(
      (product) => product.product_image
    );
    dataSlide.value = productImages;
    console.log(dataSlide.value);
    const allProducts = dataProducts.value.product;

    // Save the combined products into childproducts.value
    childproducts.value = allProducts;
    console.log(childproducts.value);
  } catch (error) {
    console.error(error);
    router.push("/404");
  }
};
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % dataSlide.value.length;
};
const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + dataSlide.value.length) % dataSlide.value.length;
};

onMounted(() => {
  fetchData();
});
</script>

<script>
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";
import "@vueform/multiselect/themes/default.css";
import Multiselect from "@vueform/multiselect";
import Menu from "~/components/Menu.vue";
import Profile from "~/components/Profile.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Slider,
    Multiselect,
  },
  data() {
    return {
      scrolled: false,
      position:[]
    };
  },
 
  methods: {
    handleScroll() {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  const threshold = viewportHeight * 0.4; // 30% of the viewport height
  const upperThreshold = threshold + 10; // Add a buffer of 10px

  if (scrollPosition > threshold && !this.scrolled && !this.scrollTimeout) {
    this.scrolled = true;
    this.scrollTimeout = setTimeout(() => {
      this.scrollTimeout = null;
    }, 1000);
  
  } else if (scrollPosition < 279 && this.scrolled && !this.scrollTimeout) {
    this.scrolled = false;
    this.scrollTimeout = setTimeout(() => {
      this.scrollTimeout = null;
    }, 1000); // 1 second delay

  }
  


  
},
    debounce(func, wait, immediate) {
      let timeout;
      let lastExecTime = 0;

      return function () {
        const context = this;
        const args = arguments;
        const currentTime = new Date().getTime();
        const timeSinceLastExecution = currentTime - lastExecTime;

        const later = function () {
          timeout = null;
          lastExecTime = new Date().getTime();
          if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout);

        if (callNow || timeSinceLastExecution > wait) {
          func.apply(context, args);
          lastExecTime = new Date().getTime();
        } else {
          timeout = setTimeout(later, wait - timeSinceLastExecution);
        }
      };
    },
  },

  mounted() {
    window.addEventListener("scroll", this.debounce(this.handleScroll, 250));
    const image_div = document.getElementById("sticky_image_div");
    // Add a scroll event listener to the window
    window.addEventListener("scroll", function () {
      const scrollY = window.scrollY;
      if (scrollY >= 50) {
        image_div.style.paddingTop = "40px";
      } else {
        image_div.style.paddingTop = "0";
      }
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.debounce(this.handleScroll, 250));
  },
};
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .sub {
    max-width: 393px;
  }
}

@media only screen and (min-width: 1024px) {
  .sub {
    max-width: 393px;
  }
}


.table_data {
  color: #555555;
  text-align: left;
  font-size: 13.5px;
  align-items: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  line-height: 18px;
  border-style: hidden;
  outline: none;
  padding-top: 2px;
}

.table_data_row {
  border-bottom: 0.5px solid lightgray;
  padding-top: 2px !important;
  padding-bottom: 6px !important;
}

.table_data2,
.table_data3 {
  color: #555555;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
}

.table_data2 {
  font-size: 13.5px;
}

.table_data3 {
  font-size: 11px;
  text-decoration: line-through;
}

.paragraph-bold {
  color: #000000;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  line-height: 18px;
  border-style: hidden;
  outline: none;
}

.paragraph_child {
  color: #555555;
  text-align: left;
  vertical-align: text-middle;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  line-height: 18px;
  border-style: hidden;
  outline: none;
  margin-top: 3px;
}

.carousel__icon {
  color: #d6d3d3;
  transform: scale(2);
}

.c_next {
  margin-left: -36px;
  height: 40px;
  margin-top: -30px;
}

.c_previous {
  margin-right: -36px;
  height: 40px;
  margin-top: -30px;
}

.dropdown-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

.fade1-enter-active,
.fade1-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.fade1-enter,
.fade1-leave-to {
  opacity: 0;
  transform: translateX(30px) translateY(20px); /* Adjust the values as needed */
}

.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.fade2-enter,
.fade2-leave-to {
  opacity: 0;
  transform: translateX(-30px) translateY(-20px); /* Adjust the values as needed */
}

.fade3-enter-active,
.fade3-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.fade3-enter,
.fade3-leave-to {
  opacity: 0;
  transform: translateX(30px) translateY(20px); /* Adjust the values as needed */
}

.dropdown-icon.open {
  transform: translateY(-50%) rotate(180deg);
}

.custom-select {
  position: relative;
  width: 100%;
}

.selected {
  border: 1px solid #ccc;
  padding: 7px;
  cursor: pointer;
  font-size: 14px;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  font-size: 14px;
}

.checkbox {
  display: block;
  padding: 4px 8px;
}

.checkbox input[type="checkbox"] {
  margin-right: 7px;
  color: black;
}
.sub_b {
  font-size: 16px;
  color: black;
  padding-left: 30px;
}

:root {
  --slider-bg: #d1d5db;
  --slider-connect-bg: #f9841e;
  --slider-connect-bg-disabled: #9ca3af;
  --slider-height: 6px;
  --slider-vertical-height: 300px;
  --slider-radius: 9999px;

  --slider-handle-bg: #fff;
  --slider-handle-border: 0;
  --slider-handle-width: 16px;
  --slider-handle-height: 16px;
  --slider-handle-radius: 9999px;
  --slider-handle-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);
  --slider-handle-shadow-active: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.42);
  --slider-handle-ring-width: 3px;
  --slider-handle-ring-color: #10b98130;

  --slider-tooltip-font-size: 8px;
  --slider-tooltip-line-height: 6px;
  --slider-tooltip-font-weight: 600;
  --slider-tooltip-min-width: 20px;
  --slider-tooltip-bg: #f9841e;
  --slider-tooltip-bg-disabled: #9ca3af;
  --slider-tooltip-color: #fff;
  --slider-tooltip-radius: 5px;
  --slider-tooltip-py: 2px;
  --slider-tooltip-px: 6px;
  --slider-tooltip-arrow-size: 5px;
  --slider-tooltip-distance: 3px;
}

/* Apply styles to the slider component */
.vue-slider {
  background-color: var(--slider-bg) !important;
  height: var(--slider-height) !important;
  border-radius: var(--slider-radius) !important;
}

/* Customize the slider handle */
.vue-slider-handle {
  background-color: var(--slider-handle-bg) !important;
  width: var(--slider-handle-width) !important;
  height: var(--slider-handle-height) !important;
  border: var(--slider-handle-border) !important;
  border-radius: var(--slider-handle-radius) !important;
  box-shadow: var(--slider-handle-shadow) !important;
}

/* Customize the slider tooltip */
.vue-slider-tooltip {
  font-size: var(--slider-tooltip-font-size) !important;
  line-height: var(--slider-tooltip-line-height) !important;
  font-weight: var(--slider-tooltip-font-weight) !important;
  min-width: var(--slider-tooltip-min-width) !important;
  background-color: var(--slider-tooltip-bg) !important;
  color: var(--slider-tooltip-color) !important;
  border-radius: var(--slider-tooltip-radius) !important;
  padding: var(--slider-tooltip-py) var(--slider-tooltip-px) !important;
}

.d1_child {
  margin-bottom: -60px;
}
</style>
