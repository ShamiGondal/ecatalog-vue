<template>
  <div class="container mx-auto flex flex-col">
    <!-- Main content container -->
    <div style="min-height: 90vh;">
      <Menu title="product"></Menu>
      <div style="margin-top: 1px">
        <Banner v-if="dataSlideshows && dataSlideshows.length > 0" :images="dataSlideshows" title="product"></Banner>
      </div>
      <div class="flex flex-col mt-4">
        <Company class="mx-5 pb-2" :description="AboutUs" title="product" :image="dataMerchant.merchant_logo"></Company>
        <div id="sticky_filters" style="position: sticky; top: 0; background: white; transition: padding-top 0.3s ease; margin-top: -5px;">
          <div class="filters-container" v-if="SubCategories && SubCategories.length > 0">
            <Filter class="mx-5" @modal-opened="handleModalOpened" :subcategory_id="SubCategories && SubCategories[0].category_id ? SubCategories[0].category_id : null" :category_id="activeItem"></Filter>
          </div>
        </div>
        
        <!-- TabGroup container with salt-colored background and shadow -->
        <div class="tab-group-container rounded-lg shadow-md bg-salt p-4 mt-4 mx-5">
          <TabGroup>
            <TabList class="flex p-2 space-x-5 rounded-xl overflow-x-auto">
              <Tab
                v-for="(data, index) in categories"
                :key="index"
                @click="setActiveItem(data.category_id)"
                class="w-full p-1 text-sm leading-6 font-medium rounded-lg focus:outline-none transition duration-300"
                :class="{
                  'bg-gradient-to-r from-yellow-500 to-orange-500 text-white': activeItem === data.category_id,
                  'bg-salt text-black font-bold': activeItem !== data.category_id,
                }"
              >
                {{ data.category_name }}
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel
                v-for="(data, index) in categories"
                :key="index"
                class="grid grid-cols-2 gap-6 w-full mt-4 p-4 trophies-container"
              >
                <div
                  v-if="SubCategories && SubCategories.length > 0"
                  v-for="(product, index) in SubCategories"
                  :key="index"
                  class="flex flex-col items-center trophy-item"
                >
                  <router-link
                    :to="`/${name}/product-list?category=${activeItem}&subcategory=${product.category_id}`"
                    class="text-center text-sm"
                  >
                    <img
                      src="~/assets/image/metal-trophy.svg"
                      alt="trophy"
                      class="w-25 mx-auto"
                    />
                    <p class="menu-3 truncate">{{ product.category_name }}</p>
                  </router-link>
                </div>
                <div v-else class="flex flex-col items-center">
                  <img
                    src="~/assets/image/no-trophy-image.png"
                    alt="No Trophy Found"
                    class="w-20 mx-auto opacity-50 blur-sm"
                  />
                  <p class="menu-3 text-center mt-2 opacity-50">No Trophy Found</p>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
    <Footer :merchant="dataMerchant"></Footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import Menu from '~/components/Menu.vue';
import Banner from '~/components/Banner.vue';
import Company from '~/components/Company.vue';
import Filter from '~/components/Filter.vue';
import Footer from '~/components/Footer.vue';

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
  console.log('Modal opened status:', isOpen);
};

const fetchData = async () => {
  const url = `/ecatalog/merchant/superstore`;

  try {
    const response = await axios.get(url);
    const slideshow = response.data?.slideshow;
    const merchant = response.data?.merchant;
    const content = response.data?.content;
    dataSlideshows.value = slideshow || [];
    dataMerchant.value = merchant || {};
    let aboutContent;
    if (Array.isArray(content)) {
      aboutContent = content.find((content) => content.content_page === 'INTRO');
    }
    AboutUs.value = aboutContent?.content_text || 'About...';

    const title = capitalizeFirstLetter(merchant?.merchant_name || 'Unknown Merchant');
    const ogTitle = title;
    const description = merchant?.merchant_description || '-';
    const ogDescription = description;
    let ogImageUrl = null;
    if (merchant?.merchant_logo) {
      ogImageUrl = `https://admin.ecatalog.cloud/${merchant.merchant_logo}`;
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
    router.push('/404');
  }
};

const updateFavicon = (url) => {
  let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = url;
  document.getElementsByTagName('head')[0].appendChild(link);
};

const fetchCategories = async () => {
  const url = `/ecatalog/productCategory?parentId=0`;
  try {
    const response = await axios.get(url);
    categories.value = response.data.list;
    activeItem.value = categories.value[0].category_id;
  } catch (error) {
    console.log(error);
    router.push('/404');
  }
};

const fetchSubcategories = async () => {
  const url = `/ecatalog/productCategory?parentId=${activeItem.value}`;
  try {
    const response = await axios.get(url);
    SubCategories.value = response.data.list;
  } catch (error) {
    console.log(error);
    router.push('/404');
  }
};

const setActiveItem = (id) => {
  activeItem.value = id;
  fetchSubcategories();
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

onMounted(async () => {
  await fetchData();
  await fetchCategories();
  await fetchSubcategories();
});
</script>


<style scoped>
/* Additional styles for tabs and container */
.tab-group-container {
  background-color: #f5f5f5; /* Salt color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for 3D effect */
  padding: 1rem; /* Adjust padding */
  border-radius: 8px; /* Rounded corners */
}

.tab-group-container .tab {
  transition: background-color 0.3s, color 0.3s; /* Smooth transitions */
}

.tab-group-container .tab.active {
  background-color: #ffc107; /* Active tab background */
  color: white; /* Active tab text color */
}

.tab-group-container .tab:not(.active) {
  background-color: #f5f5f5; /* Inactive tab background (salt color) */
  color: #333; /* Inactive tab text color */
  font-weight: bold; /* Bold text for inactive tabs */
}

.menu-2.active {
  background-color: white; /* Change to your desired active background color */
}

.menu-2 {
  border: 1px solid lightgray;
}

.menu-2:hover {
  background-color: white;
}

/* Styling for trophy items with slate background and transitions */
.trophy-item {
  background-color: #2a2a2a; /* Slate color */
  padding: 1rem;
  color: white;
  border-radius: 8px;
  font-size: 0.7rem;
  transition: background-color 0.3s, transform 0.3s;
  text-align: center; /* Center align text */
}

.trophy-item img {
  filter: invert(1); /* Make the trophy image white */
}

.trophy-item p {
  margin-top: 0.5rem;
  font-size: 0.6rem; /* Smaller font size for trophy name */
  overflow: hidden; /* Ensure text fits inside the box */
  text-overflow: ellipsis;
  white-space: nowrap;
}

.trophy-item:hover {
  background-color: #1e1e1e; /* Darker slate color */
  transform: scale(1.05); /* Slight zoom on hover */
}

@media only screen and (min-width: 768px) {
  .sub {
    max-width: 393px;
  }
}

@media only screen and (max-width: 395px) {
  .trophies-container {
    grid-template-columns: 1fr !important; /* One trophy per row below 395px */
  }
}

@media only screen and (min-width: 700px) and (max-width: 1000px) {
  .trophies-container {
    grid-template-columns: repeat(3, 1fr); /* Three trophies per row between 700px and 1000px */
  }
}
</style>
