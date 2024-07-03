<template>
  <div class="md:container md:mx-auto flex flex-col sub">
    <div style="height: 90vh">
      <Menu title="ecatalog"></Menu>

      <div class="flex flex-col justify-center items-center bg-white shadow-xl rounded-bl-3xl rounded-br-3xl pb-4">
        <p class="title uppercase">AWARDS FOR CHAMPIONS</p>
        <div class="pdf-container" @click="openPdfInNewTab">
          <iframe
            v-if="selectedEcatalog && selectedEcatalog.ecatalog_file"
            :src="'https://admin.ecatalog.cloud/' + selectedEcatalog.ecatalog_file"
            style="width: 360px; height: 54vh; max-width: 100%;"
            frameborder="0"
            class="mt-2 pdf-iframe"
            scroll="no"
            allowfullscreen
          ></iframe>
          <a
            v-if="selectedEcatalog && selectedEcatalog.ecatalog_file"
            :href="'https://admin.ecatalog.cloud/' + selectedEcatalog.ecatalog_file"
            download="Ecatalog"
            target="_blank"
            class="button-download"
          >
            Download
          </a>
         
        </div>
      </div>

      <Carousel
        :items-to-show="computedItemsToShow"
        :items-to-scroll="1"
        :wrap-around="shouldWrapAround"
        class="mt-6 mx-auto w-80 my_crousel"
      >
        <template v-for="(slide, index) in dataEcatalog" :key="index">
          <Slide>
            <div class="carousel__item mb-6" @click="selectEcatalog(slide)">
              <img
                :src="'https://admin.ecatalog.cloud/' + slide.ecatalog_thumbnail"
                alt="trophy"
                class="h-24"
              />
            </div>
          </Slide>
        </template>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>

      <h4 v-if="!loading && dataEcatalog.length === 0" class="title items-center flex justify-center mt-[50%]">
        No Catalog Available
      </h4>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Menu from "~/components/Menu.vue";
import Footer from "~/components/Footer.vue";
import { useRoute, useRouter } from "vue-router";
import { useNuxtApp } from "#app";

const axios = useNuxtApp().$axios;
const route = useRoute();
const router = useRouter();
const name = route.params.name;
const merchantId = ref("");
const dataEcatalog = ref([]);
const selectedEcatalog = ref(null);
const dataMerchant = ref([]);
const loading = ref(true);

const fetchData = async () => {
  const url = `/ecatalog/ecatalog?merchantId=35`;

  // Show loading state
  loading.value = true;

  try {
    const response = await axios.get(url);
    // Check if response.data.ecatalog is defined and is an array
    const ecatalog = response.data?.ecatalog;

    if (Array.isArray(ecatalog)) {
      dataEcatalog.value = ecatalog;
      if (ecatalog.length > 0) {
        selectedEcatalog.value = ecatalog[0];
      }
    } else {
      // Handle the case where ecatalog is not an array
      dataEcatalog.value = [];
      selectedEcatalog.value = null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    router.push("/404");
  } finally {
    // Ensure loading state is set to false in both success and error cases
    loading.value = false;
  }
};

const selectEcatalog = (ecatalog) => {
  selectedEcatalog.value = ecatalog;
};

const fetchmerchantData = async () => {
  const url = `/ecatalog/merchant/superstore`;

  try {
    // Make a request to the proxy server
    const response = await axios.get(url);
    console.log(response);

    // Safely access merchant data
    const merchant = response.data?.merchant;

    if (merchant) {
      dataMerchant.value = merchant;
      merchantId.value = merchant.merchant_id;
    } else {
      // Handle case where merchant data is missing or undefined
      console.warn("Merchant data is missing or undefined.");
      dataMerchant.value = {};
      merchantId.value = null; // Or handle this according to your application logic
    }
  } catch (error) {
    console.error("Error fetching merchant data:", error);
    router.push("/404");
  }
};

const openPdfInNewTab = () => {
  if (selectedEcatalog.value && selectedEcatalog.value.ecatalog_file) {
    window.open('https://admin.ecatalog.cloud/' + selectedEcatalog.value.ecatalog_file, '_blank');
  }
};

onMounted(async () => {
  await fetchmerchantData();
  await fetchData();
});

const computedItemsToShow = computed(() => {
  return Math.min(dataEcatalog.value.length, 3); // Show up to 3 items or the number of items you have
});

const shouldWrapAround = computed(() => {
  return dataEcatalog.value.length > computedItemsToShow.value; // Enable wrap-around only if there are more items than visible
});
</script>

<style>
.my_crousel .carousel__prev {
  margin-left: -50px;
}

.carousel__icon {
  color: #d6d3d3;
  transform: scale(2);
}

.my_crousel {
  max-width: 70%;
}

.my_crousel .carousel__next {
  margin-right: -50px;
}

.title {
  font-size: 18px;
  color: black;
  padding-top: 4px;
}

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

.pdf-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.pdf-iframe {
  position: relative;
  z-index: 1;
  transition: box-shadow 0.3s ease;
}

.pdf-iframe:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.tap-to-open {
  margin-top: 10px;
  font-size: 14px;
  color: #555;
}

.button-download {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #ff9212;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
