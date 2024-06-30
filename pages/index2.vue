<template>
  <div class="md:container md:mx-auto flex flex-col h-[100vh] sub">
    <div class="flex flex-col px-5">
      <Menu title="product"></Menu>
    </div>
    <div style="margin-top: 30px">
      <Banner title="product"></Banner>
    </div>
    <div class="flex flex-col mt-4">
      <Company
        class="mx-5 pb-2"
        description="We are one of the largest trophy suppliers in Selangor we provide one-stop solutions for all the needs of trophies and awards."
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
        <div class="filters-container" v-if="SubCategories && SubCategories.length > 0">
          <Filter class="mx-5" @modal-opened="toggleModal" :subcategory_id="SubCategories && SubCategories[0].category_id ? SubCategories[0].category_id : null" :category_id="activeItem" ></Filter>
        </div>
      </div>
      <div class="flex ml-1 mr-2">
        <div
          class="ml-2 flex flex-col items-start w-[20%]"
          id="sidebar"
          style="
            position: sticky;
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
            class="mt-2 menu-2 curved_menu"
            style="border-top-right-radius: 10px"
          >
            <p>{{ data.category_name }}</p>
          </div>
        
        </div>
        <div class="flex flex-wrap w-[60%] ml-12 gap-10 ">
  <div
    v-for="(product, index) in SubCategories"
    :key="index"
    class=""> 
            <router-link :to="`/product-list?category=${activeItem}&subcategory=${product.category_id}`">

                <img
      src="~/assets/image/metal-trophy.svg"
      alt="trophy"
      class="w-15"
    />
    <p class="menu-3">{{product.category_name}}</p>
            </router-link>
   

  </div>
</div>

      
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
// Get axios plugin
const axios = useNuxtApp().$axios;

// const dataProducts = ref([]);
const SubCategories = ref([]);
const categories = ref([]);
const activeItem = ref(1);
// Function to fetch data from API, sort it, and limit to 5 items per page
const fetchData = async () => {
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
    });
};

const setActiveItem = (id) => {
  activeItem.value = id;
  fetchsubcategories();
};

onMounted(() => {
  fetchData();
  fetchsubcategories();
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
    const sidebar = document.getElementById("sidebar");
    const filetrsbar = document.getElementById("stikcy_filters");
    window.addEventListener("scroll", function () {
      const scrollY = window.scrollY;
      if (scrollY >= 400) {
        sidebar.style.paddingTop = "80px";
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
  font-size: 8px;
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
