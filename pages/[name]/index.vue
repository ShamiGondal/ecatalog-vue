<template>
  <div class="container mx-auto flex flex-col">
    <div style="min-height: 90vh;">
      <!-- Menu and Banner components -->
      <Menu title="product"></Menu>
      <div style="margin-top: 1px">
        <Banner
          v-if="dataSlideshows && dataSlideshows.length > 0"
          :images="dataSlideshows"
          title="product"
        ></Banner>
      </div>

      <!-- Company info and filters -->
      <div class="flex flex-col mt-4">
        <Company
          class="mx-5 pb-2"
          :description="AboutUs"
          title="product"
          :image="dataMerchant.merchant_logo"
        ></Company>
        <div
          id="sticky_filters"
          style="position: sticky; top: 0; background: white; transition: padding-top 0.3s ease; margin-top: -5px; z-index: 2000;"
        >
          <div class="filters-container" v-if="SubCategories && SubCategories.length > 0">
            <Filter
              class="mx-5"
              @modal-opened="handleModalOpened"
              :subcategory_id="SubCategories && SubCategories[0].category_id ? SubCategories[0].category_id : null"
              :category_id="activeItem"
            ></Filter>
          </div>
        </div>

        <!-- Sidebar and trophy list -->
        <div class="flex ml-3">
          <div
            class="flex flex-col items-start w-[20%] h-[101%]"
            id="sidebar"
            :class="{ 'sticky-sidebar': !filter_opened }"
            style="top: 0; height: calc(100vh - 120px); transition: padding-top 0.3s ease;"
          >
            <div
              v-for="(data, index) in categories"
              :key="index"
              @click="setActiveItem(data.category_id)"
              :class="{ active: activeItem === data.category_id }"
              class="mt-2 menu-2 curved_menu transition-all duration-300"
              style="border-top-right-radius: 10px"
            >
              <p>{{ data.category_name }}</p>
            </div>
          </div>

          <!-- Trophy container -->
          <div class="trophy-container w-[80%]  ml-6" style="z-index: 1000;">
            <div class="trophy-list">
              <!-- Conditional rendering for trophies -->
              <template v-if="SubCategories && SubCategories.length > 0">
                <div
                  v-for="(product, index) in SubCategories"
                  :key="index"
                  class="flex flex-col items-center trophy-item "
                >
                  <router-link
                    :to="`/${name}/product-list?category=${activeItem}&subcategory=${product.category_id}`"
                    class="text-center"
                  >
                    <img
                      src="~/assets/image/metal-trophy.svg"
                      alt="trophy"
                      class="w-20  mx-auto"
                    />
                    <p class="menu-3  truncate">{{ product.category_name }}</p>
                  </router-link>
                </div>
              </template>
              <!-- Show this if no trophies found -->
              <template v-else>
                <div class="flex flex-col items-center">
                  <img
                    src="~/assets/image/no-trophy-image.png"
                    alt="No Trophy Found"
                    class="w-20 mx-auto opacity-50 blur-sm"
                  />
                  <p class="menu-3 text-center mt-2 ml-3 opacity-50">No Trophy Found</p>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer component -->
    <Footer :merchant="dataMerchant" style="z-index:3000"></Footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from "vue-router";

const axios = useNuxtApp().$axios;

const route = useRoute();
const router = useRouter();
const name = route.params.name;
const dataSlideshows = ref([]);
const dataMerchant = ref([]);
const SubCategories = ref([]);
const categories = ref([]);
const activeItem = ref(1);
const AboutUs = ref('About us');
const filter_opened = ref(false);

const handleModalOpened = (isOpen) => {
  filter_opened.value = isOpen;
  console.log("Modal opened status:", isOpen);
};

const fetchData = async () => {
  const url = `/ecatalog/merchant/${name}`;
  try {
    const response = await axios.get(url);
    dataSlideshows.value = response.data.slideshow;
    dataMerchant.value = response.data.merchant;
    const aboutContent = response.data.content.find(content => content.content_page === "INTRO");
    AboutUs.value = aboutContent ? aboutContent.content_text : "About...";
    const title = capitalizeFirstLetter(dataMerchant.value.merchant_name);
    const ogTitle = title;
    const description = "-";
    const ogDescription = description;
    let ogImageUrl = null;
    if (dataMerchant.value.merchant_logo != null) {
      ogImageUrl = `https://admin.ecatalog.cloud/${dataMerchant.value.merchant_logo}`;
    }
    if (ogImageUrl) {
      updateFavicon(ogImageUrl);
    }
    useSeoMeta({
      title,
      ogTitle,
      description,
      ogDescription,
      ogImage: ogImageUrl,
    });
  } catch (error) {
    console.log(error);
    router.push("/404");
  }
};

const updateFavicon = (url) => {
  if (typeof window !== "undefined") {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
  }
};

const fetchcategories = async () => {
  const url = `/ecatalog/productCategory?parentId=0`;
  try {
    const response = await axios.get(url);
    categories.value = response.data.list;
    activeItem.value = categories.value[0].category_id;
  } catch (error) {
    console.log(error);
    router.push("/404");
  }
};

const fetchsubcategories = async () => {
  const url = `/ecatalog/productCategory?parentId=${activeItem.value}`;
  try {
    const response = await axios.get(url);
    SubCategories.value = response.data.list;
  } catch (error) {
    console.log(error);
    router.push("/404");
  }
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const setActiveItem = (id) => {
  activeItem.value = id;
  fetchsubcategories();
};

onMounted(async () => {
  await fetchData();
  await fetchcategories();
  await fetchsubcategories();

  if (typeof window !== "undefined") {
    const { default: SmoothScroll } = await import('smooth-scroll');
    new SmoothScroll('.trophy-list', {
      speed: 500,
      speedAsDuration: true,
      easing: 'easeInOutCubic',
    });

    const sidebar = document.getElementById("sidebar");
    const filetrsbar = document.getElementById("sticky_filters");
    window.addEventListener("scroll", function () {
      const scrollY = window.scrollY;
      if (scrollY >= 350) {
        sidebar.style.paddingTop = "60px";
        filetrsbar.style.paddingTop = "40px";
      } else {
        sidebar.style.paddingTop = "0";
        filetrsbar.style.paddingTop = "0";
      }
    });
  }
});
</script>

<style scoped>
/* General styles */
.menu-2.active {
  background-color: white;
}
.menu-2 {
  border: 1px solid lightgray;
}
.menu-2:hover {
  background-color: white;
}

/* Trophy container styles */
.trophy-container {
  height: 400px;
  overflow: hidden;
  position: relative;
  z-index: 1000; 
}

.trophy-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.trophy-list::-webkit-scrollbar {
  display: none;
}

.trophy-item {
  flex: 1 1 calc(50% - 10px);
  max-width: calc(50% - 10px);
  padding: 10px;
  box-sizing: border-box;
}

@media only screen and (max-width: 300px) {
  .trophy-item {
    flex: 1 1 100%;
    max-width: 100%;
  }
}

/* Other styles */
.product {
  font-size: 16px;
}

.menu-3 {
  color: #000000;
  text-align: center;
  vertical-align: text-top;
  font-size: 10px !important; /* Decreased font size */
  font-family: "Roboto", sans-serif;
  line-height: 16px; /* Adjusted line height */
  border-style: hidden;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  display: block;
}

.menu-2 {
  background-color: #eee;
  width: 110%;
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

/* Responsive styles */
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

/* Modal styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3000; /* Higher than other elements */
  background: rgba(0, 0, 0, 0.5); /* Optional background for the modal */
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
