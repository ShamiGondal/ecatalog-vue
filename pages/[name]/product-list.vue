<template>
  <div class="md:container md:mx-auto flex flex-col sub">
    <div style="min-height: 90vh">
      <Menu title="product"></Menu>

      <div style="margin-top: 1px">
        <Banner
          title="product"
          v-if="dataSlide && dataSlide.length > 0"
          :images="dataSlide"
        ></Banner>
      </div>
      <div class="flex flex-col mt-4">
        <Company
          class="mx-5 pb-2"
          :description="AboutUs"
          :image="dataMerchant.merchant_logo"
          title="product"
        >
        </Company>
        <div
          id="stikcy_filters"
          style="
            position: sticky;
            top: 0;
            background: white;
            transition: padding-top 0.3s ease;
            margin-top: -5px;
          "
        >
          <div class="filters-container">
            <Filter class="mx-5" @modal-opened="handleModalOpened"></Filter>
          </div>
        </div>
        <div class="flex ml-1 mr-2">
          <div
            class="ml-2 flex flex-col items-start w-[20%]"
            id="sidebar"
            :class="{ 'sticky-sidebar': !filter_opened }"
            style="
              top: 0;
              height: calc(100vh - 120px);
              transition: padding-top 0.3s ease;
            "
          >
            <div
              v-for="(data, index) in categories"
              :key="index"
              @click="setActiveItem(data.category_id)"
              :class="{ active: activeItem == data.category_id }"
              class="mt-2 menu-2 curved_menu transition-all duration-300"
              style="border-top-right-radius: 10px"
            >
              <p>{{ data.category_name }}</p>
            </div>
          </div>
          <div v-if="loading" class="w-[80%]" style="margin-left: 8%">
            <div
              v-for="index in 5"
              :key="index"
              style="margin-left: 8%"
              class="grid grid-cols-12 gap-4 items-center p-0 pt-2 pb-1"
            >
              <!-- Skeleton Loader -->
              <div class="col-span-6">
                <div class="w-full h-32 bg-gray-200 animate-pulse"></div>
              </div>
              <div class="col-span-6">
                <div class="h-8 w-full bg-gray-200 animate-pulse mb-2"></div>
                <div class="h-8 w-full bg-gray-200 animate-pulse mb-2"></div>
                <div class="h-8 w-full bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          </div>
          <div class="pt-2 ml-2" style="overflow-y: auto" v-if="!loading">
            <!-- <p v-for="(data, index) in categories" :key="index" class="ml-10">
              <span v-if="activeItem == data.category_id" class="text-[18px]">{{
                data.category_name
              }}</span>
            </p> -->

            <router-link
              v-for="(product, index) in dataProducts"
              :key="index"
              :to="'/' + name + '/product/' + product.product_group_id"
            >
              <div
                class="grid grid-cols-10 gap-4 items-center p-0 pt-2 pb-1"
                style="margin-left: 8%"
                v-if="!loading"
              >
                <div class="col-span-4" style="margin-top: -2%">
                  <img
                    :src="
                      'https://admin.ecatalog.cloud/uploads/ftp/' +
                      product.image[0].image_file
                    "
                    alt="Image"
                    class="w-full"
                  />
                </div>
                <div class="col-span-6" style="margin-top: -4%">
                  <p class="intro_1">{{ product.product_group_name }}</p>
                  <p class="intro_2">
                    H{{ product.product[0].product_height }}mm |
                    {{ product.product.length + " Sizes" }} <br />
                    {{ product.product_group_color }}
                  </p>
                  <p class="intro_3">
                    {{
                      // Calculate the minimum and maximum regular prices
                      calculateMinMaxRegularPrice(product.product)
                    }}
                  </p>
                </div>
              </div>
              <hr class="h-px bg-gray-300 my-3" style="margin-left: 30px" />
            </router-link>
          </div>
          <div
            class="w-[80%] "
            v-if="!loading && dataProducts.length == 0"
            style="margin-top: 50%;"
          >
            <p class="text-[12px] items-center justify-center text-center">No products found.</p>
          </div>
         
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useDataStore } from "~/store/dataStore";

// Get axios plugin
const axios = useNuxtApp().$axios;

const route = useRoute();
const router = useRouter();
const name = route.params.name;
const filter_opened = ref(false);
const dataProducts = ref([]);
const categories = ref([]);
const activeItem = ref(route.query.subcategory);
const dataSlide = ref([]);
const dataMerchant = ref([]);
const AboutUs = ref("About us");
const loading = ref(true);
const handleModalOpened = (isOpen) => {
  filter_opened.value = isOpen;
  console.log("Modal opened status:", isOpen);
};
const dataStore = useDataStore();
const fetchData = async (c_id) => {
  const url = `/ecatalog/productCategory?parentId=${c_id}`;

  // Make a request to the proxy server
  await axios
    .get(url)
    .then((response) => {
      // Handle the response from the proxy server
      categories.value = response.data.list;
    })
    .catch((error) => {
      console.log(error);
      router.push("/404");
    });
};
const fetchProducts = () => {
  loading.value = true;

  setTimeout(() => {
    const url = `/ecatalog/product?categoryId=${activeItem.value}`;

    axios
      .get(url)
      .then((response) => {
        dataProducts.value = response.data.products;
        // dataSlide.value = response.data.products.map(product => ({ slideshow_image: 'uploads/ftp/'+ product.image[0].image_file }));
        // console.log(dataSlide.value)
      })
      .catch((error) => {
        console.log(error);
        router.push("/404");
      })
      .finally(() => {
        loading.value = false;
      });
  }, 2000);
};

const setActiveItem = (id) => {
  activeItem.value = id;
  fetchProducts();
};
const calculateMinMaxRegularPrice = (products) => {
  // Extract regular prices from each product
  const regularPrices = products.map((product) =>
    parseFloat(product.product_regular_price)
  );

  // Calculate minimum and maximum regular prices
  const minPrice = Math.min(...regularPrices).toFixed(2);
  const maxPrice = Math.max(...regularPrices).toFixed(2);

  // Display the range of regular prices
  if (minPrice != maxPrice) {
    return `RM ${minPrice} - RM ${maxPrice}`;
  } else {
    return `RM ${minPrice}`;
  }
};

const fetchmerchantData = async () => {
  const url = `/ecatalog/merchant/superstore`;

  try {
    // Make a request to the proxy server
    const response = await axios.get(url);
    console.log(response);

    // Safely access slideshow and merchant data
    dataSlide.value = response.data?.slideshow || [];
    dataMerchant.value = response.data?.merchant || {};

    // Safely access content and find INTRO content
    const contentArray = response.data?.content;
    let aboutContent = null;

    if (Array.isArray(contentArray)) {
      aboutContent = contentArray.find((content) => content.content_page === "INTRO");
    } else {
      console.warn('Content data is missing or not an array.');
      // Optionally, handle missing or invalid content data
      // errorMessage.value = 'Content data not available';
    }

    // Set AboutUs value based on found content
    AboutUs.value = aboutContent ? aboutContent.content_text : "About...";

    // Set SEO meta tags
    const title = dataMerchant.value.merchant_name || "Default Title";
    const ogTitle = title;
    const description = "-";
    const ogDescription = description;

    let ogImageUrl = null;
    if (dataMerchant.value.merchant_logo) {
      ogImageUrl = `https://phplaravel-996806-4363314.cloudwaysapps.com/${dataMerchant.value.merchant_logo}`;
    }

    useSeoMeta({
      title,
      ogTitle,
      description,
      ogDescription,
      ogImage: ogImageUrl,
    });
  } catch (error) {
    console.error("Error fetching merchant data:", error);
    // Optionally, set an error message or state
    // errorMessage.value = 'Failed to fetch merchant data';
    router.push("/404");
  }
};


onMounted(() => {
  fetchmerchantData();
  if (route.query.category) {
    fetchData(route.query.category);
  }

  if (route.query.subcategory) {
    fetchProducts();
  }
});
watch(
  [() => dataStore.filteredData],
  ([newFilteredData]) => {
    fetchData(0);
    loading.value = true;

    setTimeout(() => {
      dataProducts.value = newFilteredData;
      loading.value = false;
    }, 2000);
  },
  {
    immediate: true,
  }
);
</script>

<script>
import Banner from "~/components/Banner.vue";
import Company from "~/components/Company.vue";
import Menu from "~/components/Menu.vue";
import Filter from "~/components/Filter.vue";
import Footer from "~/components/Footer.vue";

export default {
  mounted() {
    const sidebar = document.getElementById("sidebar");
    const filetrsbar = document.getElementById("stikcy_filters");
    window.addEventListener("scroll", function () {
      const scrollY = window.scrollY;
      if (scrollY >= 350) {
        sidebar.style.paddingTop = "100px";
        filetrsbar.style.paddingTop = "40px";
      } else {
        sidebar.style.paddingTop = "0";
        filetrsbar.style.paddingTop = "0";
      }
    });
  },
};
</script>

<style scoped>
.menu-2.active {
  background-color: white; /* Change to your desired active background color */
}
.menu-2 {
  border: 1px solid lightgray;
}

.menu-2:hover {
  background-color: white; /* Change to your desired active background color */
}
@media only screen and (min-width: 768px) {
  .sub {
    max-width: 393px;
  }
}

@media only screen and (max-width: 377px) {
  .sub {
    max-width: 393px;
  }
  .sub_in {
    width: calc(100% - 28px - 90px);
  }
}

@media only screen and (min-width: 1024px) {
  .sub {
    max-width: 393px;
  }
}

.product {
  font-size: 16px;
}

.menu-3 {
  font-size: 12px;
  font-weight: bold;
}

.menu-2 {
  background-color: #eee;
  width: 130%;
  color: #000000;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  line-height: 18px;
  outline: none;
  border-bottom: 1px solid lightgrey;
  height: 60px;
  padding-left: 10px;
  padding-right: 10px;
}

.sub_b {
  color: #242424;
  text-align: left;
  vertical-align: text-top;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
  line-height: auto;
  border-style: hidden;
  outline: none;
  padding-left: 30px;
  padding-top: 10px;
}

.intro_3 {
  color: #242424;
  font-size: 12px;
  font-family: "Inter", sans-serif;
  letter-spacing: 0.5px;
  line-height: 120%;
  border-style: hidden;
  outline: none;
  margin-top: 6px;
  font-weight: 600;
}

.intro_1 {
  color: #242424;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  letter-spacing: 0.5px;
  line-height: 120%;
  border-style: hidden;
  outline: none;
  font-weight: 600;
}

.intro_2 {
  color: #242424;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
  line-height: 120%;
  border-style: hidden;
  outline: none;
  margin-top: 6px;
}
</style>
