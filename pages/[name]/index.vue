<template>
  <div class="container mx-auto flex flex-col" >
    <div style="min-height: 90vh;">
    <Menu title="product"></Menu>

    <div style="margin-top: 1px">
      <Banner
        v-if="dataSlideshows && dataSlideshows.length > 0"
        :images="dataSlideshows"
        title="product"
      ></Banner>
    </div>
    <div class="flex flex-col mt-4">
      <Company
        class="mx-5 pb-2"
        :description="AboutUs"
        title="product"
        :image="dataMerchant.merchant_logo"
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
        <div
          class="filters-container"
          v-if="SubCategories && SubCategories.length > 0"
        >
          <Filter
            class="mx-5"
            @modal-opened="handleModalOpened"
            :subcategory_id="
              SubCategories && SubCategories[0].category_id
                ? SubCategories[0].category_id
                : null
            "
            :category_id="activeItem"
          ></Filter>
        </div>
      </div>
      <div class="flex ml-3">
        <div
          class="flex flex-col items-start w-[20%] h-[101%]"
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
            :class="{ active: activeItem === data.category_id }"
            class="mt-2 menu-2 curved_menu transition-all duration-300"
            style="border-top-right-radius: 10px"
          >
            <p>{{ data.category_name }}</p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 w-[80%] mt-4 ml-6">
          <div
            v-for="(product, index) in SubCategories"
            :key="index"
            class="flex flex-col items-center"
          >
            <router-link
              :to="`/${name}/product-list?category=${activeItem}&subcategory=${product.category_id}`"
              class="text-center"
            >
              <img
                src="~/assets/image/metal-trophy.svg"
                alt="trophy"
                class="w-20 mx-auto"
              />
              <p class="menu-3 truncate">{{ product.category_name }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer :merchant="dataMerchant"></Footer>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

// Get axios plugin
const axios = useNuxtApp().$axios;


const route = useRoute();
const router = useRouter();
const name = route.params.name;
// const dataProducts = ref([]);
const dataSlideshows = ref([]);
const dataMerchant = ref([]);
const SubCategories = ref([]);
const categories = ref([]);
const activeItem = ref(1);
const AboutUs = ref('About us')
const filter_opened = ref(false);
const handleModalOpened = (isOpen) => {
  filter_opened.value = isOpen;
  console.log("Modal opened status:", isOpen);
};
const fetchData = async () => {
  const url = `/ecatalog/merchant/${name}`;

  // Make a request to the proxy server
  await axios
    .get(url)
    .then((response) => {
      console.log(response);
      dataSlideshows.value = response.data.slideshow;
      dataMerchant.value = response.data.merchant;
      const aboutContent = response.data.content.find(content => content.content_page === "INTRO");

if (aboutContent) {
  AboutUs.value = aboutContent.content_text;
  
} else {
  AboutUs.value = "About..."
}      // Join the modified values with spaces and append the additional text
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
    })
    .catch((error) => {
      console.log(error);
      router.push("/404");
    });
};
const updateFavicon = (url) => {
  let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = url;
  document.getElementsByTagName('head')[0].appendChild(link);
};

const fetchcategories = async () => {
  const url = `/ecatalog/productCategory?parentId=0`;

  // Make a request to the proxy server
  await axios
    .get(url)
    .then((response) => {
      // Handle the response from the proxy server
      categories.value = response.data.list;
      activeItem.value = categories.value[0].category_id;
      console.log(activeItem.value);
    })
    .catch((error) => {
      console.log(error);
      router.push("/404");
    });
};
const fetchsubcategories = async () => {
  const url = `/ecatalog/productCategory?parentId=${activeItem.value}`;
  await axios
    .get(url)
    .then((response) => {
      SubCategories.value = response.data.list;
    })
    .catch((error) => {
      console.log(error);
      router.push("/404");
    });
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const setActiveItem = (id) => {
  activeItem.value = id;
  fetchsubcategories();
};

onMounted( async() => {
  await fetchData();
  await fetchcategories();
  await fetchsubcategories();
});
</script>

<script>
import Banner from "~/components/Banner.vue";
import Company from "~/components/Company.vue";
import Menu from "~/components/Menu.vue";
import Filter from "~/components/Filter.vue";
import Footer from "~/components/Footer.vue";

export default {
  
  mounted() {
    // Get a reference to the sidebar element
    const sidebar = document.getElementById("sidebar");
    const filetrsbar = document.getElementById("stikcy_filters");
    // Add a scroll event listener to the window
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
  background-color: white;
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
  color: #000000;
  text-align: center;
  vertical-align: text-top;
  font-size: 12px !important;
  font-family: "Roboto", sans-serif;
  line-height: 18px;
  border-style: hidden;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%; /* Ensure it takes the full width of the column */
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
</style>
