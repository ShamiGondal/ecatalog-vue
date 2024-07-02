<template>
  <div class="flex items-center justify-between mt-3 px-3 pb-2">
    <!-- <img src="~/assets/image/Filter.svg" alt="trophy" @click="toggleModal" style="cursor: pointer;" /> -->
    <input
      type="text"
      class="border-2 border-gray-300 rounded-full W-[100%] pl-3 py-2 search"
      placeholder="Search by code or name"
      @click="toggleModal"
      readonly
    />
    <div class="flex gap-2">
      <router-link :to="'/'+ name">
        <img src="~/assets/image/Menu.svg" alt="trophy" />

      </router-link>
      <!-- <router-link :to="'/' + name">
        <font-awesome-icon :icon="['fas', 'border-all']" size="2x" />
      </router-link> -->
      <router-link :to="`/${name}/product-list?category=${category_id}&subcategory=${subcategory_id}`">
        <img src="~/assets/image/List.svg" alt="trophy" />

      </router-link>
      <!-- <router-link
        :to="`/${name}/product-list?category=${category_id}&subcategory=${subcategory_id}`"
      >
        <font-awesome-icon :icon="['fas', 'bars']" size="2x" />
      </router-link> -->
    </div>
  </div>
  <div
    class="fixed inset-0 flex justify-center bg-black bg-opacity-50"
    id="modal"
    v-if="isModalOpen"
  >
    <div class="bg-white rounded-lg p-4 px-5  transition-all duration-300 my_filters_modal">
      <button
        class="top-0 text-gray-600"
        style="
          float: right;
          font-size: 30px;
          margin-top: -5px;
          z-index:  !important;
          overflow: hidden;
        "
        @click="closeModal"
      >
        &times;
      </button>
      <h4 class="text-lg font-semibold mb-2 mt-2 product_search_title">
        Product Search
      </h4>
      <input
        type="text"
        class="border-2 border-gray-300 rounded-full pl-3 py-1 search keyword"
        style="width: 100% !important"
        placeholder="Search"
        v-model="keyword"
      />
      <!-- <p class="mb-4 mt-6 filters_title">Filter by Price</p> -->
      <div class="mb-2 mt-10">
        <Slider
          id="rangeSlider"
          v-model="price"
          :step="50"
          :ticks="true"
          dual
          :min="0"
          :max="1000"
          @change="fetchEventsWithFilters"
          style="margin-left: 5px; margin-right: 5px"
        />
      </div>
      <div class="flex   mb-2" style="max-width: 330px;">
        <div class="text-center">
          <small class="popup_text">Minimum Price</small> <br />
          <input
            type="text"
            class="border-2 border-gray-100 px-2 w-1/2 popup_text"
            readonly
            :value="formatPrice(price[0])"
          />
        </div>
        <div>
          <small class="popup_text">Maximum Price</small> <br />
          <input
            type="text"
            class="border-2 border-gray-100 px-2 w-1/2 popup_text"
            readonly
            :value="formatPrice(price[1])"
          />
        </div>
      </div>
      <!-- <hr />
      <p class="mb-2 mt-3 filters_title" >
        Filter by Height
      </p> -->

      <!-- <div class="mb-2">
        <Slider
          id="heightSlider"
          v-model="height"
          :step="1"
          :ticks="true"
          dual
          :min="0"
          :max="1000"
          style="margin-left: 5px; margin-right: 5px"
        />
      </div>
      <div class="flex justify-center mb-2">
        <div class="text-center">
          <small class="popup_text">Minimum Height</small> <br />
          <input
            type="text"
            class="border-2 border-gray-100 px-2 w-1/2 popup_text"
           
            readonly
            :value="formatheight(height[0])"
          />
        </div>
        <div>
          <small class="popup_text">Maximum Height</small> <br />
          <input
            type="text"
            class="border-2 border-gray-100 px-2 w-1/2 popup_text"
            
            readonly
            :value="formatheight(height[1])"
          />
        </div>
      </div>
      <hr /> -->
      <!-- <div class="flex items-center mb-2 mt-2">
        <label  class="mr-2 popup_checkbox" >Show only:</label>
        <input type="checkbox" v-model="showNew" id="newCheckbox" class="popup_checkbox" />
        <label for="newCheckbox" class="mr-4 ml-1 popup_checkbox" >New</label>
        <input  type="checkbox" v-model="showHot" id="hotCheckbox" class="popup_checkbox" />
        <label for="hotCheckbox" class="ml-1 popup_checkbox" >Hot</label>
      </div> -->

      <hr />
      <div class="mb-4 mt-5" style="max-width: 330px;">
        <div class="custom-select">
          <div class="selected" @click="togglecategoryDropdown">
            {{ selectedcategoryOptions || categoryplaceholder }}
            <div class="dropdown-icon">
              <i class="icon" :class="{ open: iscategoryOpen }"
              >&#9660;</i
            >
            </div>
           
          </div>
          <div v-if="iscategoryOpen" class="dropdown">
            <label
              v-for="option in categoryOptions"
              :key="option.category_id"
              class="checkbox"
            >
              <input
                type="checkbox"
                :value="option"
                v-model="selectedcategories"
                class="popup_checkbox2"
                :disabled="selectedcategories.length >= 3 && !selectedcategories.includes(option)"
              />
              {{ option.category_name }}
            </label>
          </div>
        </div>
      </div>
      <div class="mb-4 mt-5" style="max-width: 330px;">
        <div class="custom-select">
          <div class="selected" @click="togglematerialdropdown">
            {{ selectedmaterialOptions || materialplaceholder }}
            <i class="dropdown-icon" :class="{ open: ismaterialOpen }"
              >&#9660;</i
            >
          </div>
          <div v-if="ismaterialOpen" class="dropdown">
            <label
              v-for="option in materialOptions"
              :key="option"
              class="checkbox"
            >
              <input
                type="checkbox"
                :value="option"
                v-model="selectedmaterials"
                class="popup_checkbox2"
                :disabled="selectedmaterials.length >= 3 && !selectedmaterials.includes(option)"
              />
              {{ option }}
            </label>
          </div>
        </div>
      </div>

      <div class="mb-4 mt-5" style="max-width: 330px;">
        <div class="custom-select">
          <div class="selected" @click="togglecolorDropdown">
            {{ selectedcolorOptions || colorplaceholder }}
            <i class="dropdown-icon" :class="{ open: iscolorOpen }">&#9660;</i>
          </div>
          <div v-if="iscolorOpen" class="dropdown">
            <label
              v-for="option in colorOptions"
              :key="option"
              class="checkbox"
            >
              <input
                type="checkbox"
                :value="option"
                v-model="selectedcolors"
                class="popup_checkbox2"
                :disabled="selectedcolors.length >= 3 && !selectedcolors.includes(option)"
              />
              {{ option }}
            </label>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-10">
        <button
          class="bg-gray-400 text-white py-1 px-4 rounded mr-2"
          @click="reset"
          style="
            width: 45%;
            border-radius: 23px;
            background-color: transparent;
            color: black;
            border: 1px solid black;
            font-size: 14px;
          "
        >
          Reset
        </button>
        <button
          class="bg-blue-500 text-white py-1 px-4 rounded"
          style="
            background-color: black;
            width: 45%;
            border-radius: 23px;
            font-size: 14px;
          "
          @click.prevent="applyFilters"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="js">
import { useRoute } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars  } from '@fortawesome/free-solid-svg-icons';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';
// import { faBorderAll } from '@fortawesome/free-regular-svg-icons';


library.add(faBars);
library.add(faBorderAll);


const route = useRoute();
const name = route.params.name;
</script>
<script lang="js">
  import Slider from '@vueform/slider';
  import "@vueform/slider/themes/default.css";
  import "@vueform/multiselect/themes/default.css";
  import Multiselect from '@vueform/multiselect';
  import { useDataStore } from "~/store/dataStore";
  import { useRouter, useRoute } from 'vue-router';

export default {

  props: {

    subcategory_id:{
      type: String,
    },
    category_id:{
      type: String,
    }
  },
  components: {
    Slider,Multiselect
  },
  data() {
    return {
      price:[300.00,700.00],
      categories:[],
      height:[300,700],
      showNew:false,
      showHot:false,
      materials:[],
      colors:[],
      isModalOpen: false,
      iscolorOpen: false,
      selectedcolors: [],
      iscategoryOpen: false,
      selectedcategories: [],
      ismaterialOpen: false,
      selectedmaterials: [],
      showNew: false,
      showHot: false,
      colorOptions:[],
      categoryOptions:[],
      materialOptions:[],
      keyword:'',
      materialplaceholder:'Select Materials',
      categoryplaceholder:'Select Categories',
      colorplaceholder:'Select Colors'


    };
  },

  methods: {
    reset(){
      this.price=[300,700];
      this.selectedcategories=[];
      this.selectedcolors=[];
      this.selectedmaterials=[];
      this.keyword = ''

    },
    applyFilters(){
      const categories = this.selectedcategories.map(option => option.category_id).join(', ');
      const axios = useNuxtApp().$axios;
      const filters = {
      categoryId: categories || null,
      material: this.selectedmaterials.length > 0 ? this.selectedmaterials : null,
      color: this.selectedcolors.length > 0 ?  this.selectedcolors : null,
      priceFrom: this.price[0] || null,
      priceTo: this.price[1] || null,
      keyword: this.keyword || ''

  };
  this.isModalOpen = false;
  const queryParams = Object.entries(filters)
  .filter(([key, value]) => value !== null && value !== '')  // Exclude null and empty string values
  .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
  .join("&");
  let url='';
  if(queryParams){
    url=`https://admin.ecatalog.cloud/api/productSearch?${queryParams}`;
  }
  else{
    url = `https://admin.ecatalog.cloud/api/productSearch`;

  }

  // Make a request to the proxy server
   axios
    .get(url)
    .then((response) => {

      console.log(response.data.products);
      const dataStore = useDataStore();
      dataStore.setData(response.data.products);
      console.log(dataStore.filteredData)
      const route = useRoute();
      this.$router.push(`/${this.$route.params.name}/product-list`);
    })
    .catch((error) => {
      console.log(error);
      this.$router.push("/404");
    });

    },
    formatPrice(price) {
      return price.toLocaleString('en-US', {minimumFractionDigits: 2});
    },
    formatheight(height){
      return height.toLocaleString('en-US', {minimumFractionDigits: 2});

    },
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
      this.$emit('modal-opened', this.isModalOpen);
    },
    closeModal() {
      this.isModalOpen = false;

      this.$emit('modal-opened', this.isModalOpen);
    },

  // Method to set the active item by name
   setActiveItem (name) {
    this.activeItem = name;
  },
  togglecolorDropdown() {
      this.iscolorOpen = !this.iscolorOpen;
      this.ismaterialOpen=false;
      this.iscategoryOpen=false;
    },
    togglecategoryDropdown() {
      this.iscategoryOpen = !this.iscategoryOpen;
      this.iscolorOpen=false;
      this.ismaterialOpen=false;
    },
    togglematerialdropdown(){
      this.ismaterialOpen = !this.ismaterialOpen;
      this.iscolorOpen=false;
      this.iscategoryOpen=false;
    },
    fetchColors(){
      const axios = useNuxtApp().$axios;
      const url = `https://admin.ecatalog.cloud/api/productColor`;
  axios
    .get(url)
    .then((response) => {
      this.colorOptions = response.data.list;
      console.log(this.colorOptions)

    })
    .catch((error) => {
      console.log(error);
      this.$router.push("/404");
    });
    },
    fetchMaterials(){

      const axios = useNuxtApp().$axios;
      const url = `https://admin.ecatalog.cloud/api/productMaterial`;
  axios
    .get(url)
    .then((response) => {
      this.materialOptions = response.data.list;
      console.log(this.materialOptions)

    })
    .catch((error) => {
      console.log(error);
      this.$router.push("/404");
    });
    },
    fetchcategories(){
      const axios = useNuxtApp().$axios;
  const url = `https://admin.ecatalog.cloud/api/productCategory?parentId=0`;

  // Make a request to the proxy server
   axios
    .get(url)
    .then((response) => {
      // Handle the response from the proxy server
      this.categoryOptions = response.data.list;
      // activeItem.value = this.categoryOptions[0].category_id;
      // console.log(activeItem.value);
    })
    .catch((error) => {
      console.log(error);
      this.$router.push("/404");
    });
},
  },
  computed:{
    selectedcolorOptions() {
      return this.selectedcolors.length > 0 ? this.selectedcolors.join(', ') : '';
    },
    selectedcategoryOptions() {
      return this.selectedcategories.map(option => option.category_name).join(', ');
    },
    selectedmaterialOptions(){
      return this.selectedmaterials.length > 0 ? this.selectedmaterials.join(', ') : '';

    },

  //   categoryOptions() {
  //   return [
  //     { label: 'Silver', value: 'Silver' },
  //     { label: 'Gold', value: 'Gold' },
  //     { label: 'Bronze', value: 'Bronze' },

  //   ];
  // },
  // colorOptions(){
  //   return [
  //     { label: 'Silver', value: 'Silver' },
  //     { label: 'Gold', value: 'Gold' },
  //     { label: 'Bronze', value: 'Bronze' },
  //     { label: 'Gold red', value: 'Red' },


  //   ];
  // },
//   materialOptions() {
//   return [
//     { label: 'Wood', value: 'Wood' },
//     { label: 'Metal', value: 'Metal' },
//     { label: 'Plastic', value: 'Plastic' },
//     { label: 'Glass', value: 'Glass' },
//     { label: 'Ceramic', value: 'Ceramic' }
//   ];
// }
  },

  mounted(){
    this.fetchColors();
    this.fetchMaterials();
    this.fetchcategories();
  }


};
</script>

<style>
.dropdown-icon {
  position: absolute;
  top: 50%;
  right: 1px;
  transform: translateY(-50%);
  background-color: white;
}
.dropdown-icon.open {
  transform: translateY(-50%) rotate(180deg);
}

.dropdown-icon.open {
  transform: translateY(-50%) rotate(180deg);
}
.custom-select {
  position: relative;
  max-width: 100%;
}
.selected::-webkit-scrollbar {
  height: 6px; /* Adjust the height for horizontal scrollbar */
}


.selected {
  border: 1px solid #ccc;
  padding: 7px;
  cursor: pointer;
  font-size: 14px;
  color: #242424;

  overflow-x: auto; /* Enable horizontal scrolling */
  max-width: 100%;
  white-space: nowrap; /* Prevent line breaks */
}


.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 160px;
  overflow-y: auto;
  z-index: 1000;
  font-size: 14px;
  color: #242424;
}

.checkbox {
  display: block;
  padding: 4px 8px;
}

.checkbox input[type="checkbox"] {
  margin-right: 7px;
  color: black;
}

.product_search_title {
  color: #242424;
  text-align: left;
  vertical-align: text-top;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  line-height: auto;
  border-style: hidden;
  outline: none;
}
.popup_checkbox {
  color: #242424;
}
@media (min-width: 768px) {
    .my_filters_modal {
        margin-top: 90px;
        margin-bottom: 100px;
        height: 500px;
         z-index: 1001; 
    }
}
@media (max-width: 768px) {
    .my_filters_modal {
        margin-top: 80px;
        margin-bottom: 80px;
        height: 480px;
         z-index: 1001; 
    }
}

.popup_checkbox[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: 1px solid #242424;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}

.popup_checkbox[type="checkbox"]:checked {
  background-color: #242424;
}

.popup_checkbox[type="checkbox"]:checked::before {
  content: "\2713";
  display: block;
  width: 16px;
  height: 16px;
  text-align: center;
  line-height: 16px;
  color: #fff;
}

.popup_checkbox2[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 13px;
  height: 13px;
  background-color: #fff;
  border: 1px solid #242424;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}

.popup_checkbox2[type="checkbox"]:checked {
  background-color: #242424;
}

.popup_checkbox2[type="checkbox"]:checked::before {
  content: "\2713";
  display: block;
  width: 10px;
  height: 10px;
  text-align: center;
  line-height: 12px;
  color: #fff;
}
.filters_title {
  color: #242424;
  text-align: center;
  vertical-align: text-top;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  line-height: auto;
  border-style: hidden;
  outline: none;
}
.popup_text {
  color: #242424;
  text-align: center;
  vertical-align: text-top;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  line-height: auto;
  outline: none;
}
.sub_b {
  font-size: 16px;
  color: black;
  padding-left: 30px;
}
.intro_3 {
  font-size: 14px;
  color: black;
}
.intro_1 {
  font-size: 14px;
  color: black;
  font-weight: bold;
}
.intro_2 {
  font-size: 14px;
  color: black;
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
.search {
  font-size: 14px;
  color: #242424;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  line-height: auto;
  outline: none;
  width: 80%;
}
.search::placeholder{
  font-size: 14px;
  color: #242424;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  line-height: auto;
  outline: none;
  width: 80%;
}
</style>
