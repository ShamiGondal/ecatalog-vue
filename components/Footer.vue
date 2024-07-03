<template>
  <div
    class="footer fixed bottom-0 bg-white w-full md:w-[100%] flex flex-col mt-3"
    style="
      position: sticky;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15),
        0px -1px 3px rgba(0, 0, 0, 0.15);
      --skin-color: var(--merchant-skin-color, #FF9212); /* default color */
    "
  >
    <div class="flex items-start justify-around">
      <a :href="phone" class="flex items-center gap-2 mt-3">
        <img src="~/assets/image/phone.svg" alt="trophy" class="w-7" />
        <p class="menu-3">Phone</p>
      </a>
      <a :href="email" class="flex items-center gap-2 mt-3">
        <img src="~/assets/image/mail.svg" alt="trophy" class="w-7" />
        <p class="menu-3">Email</p>
      </a>
      <a :href="whatsapp" class="flex items-center gap-2 mt-3">
        <img src="~/assets/image/whatsapp.svg" alt="trophy" class="w-7" />
        <p class="menu-3">Whatsapp</p>
      </a>
    </div>
    <div class="w-full h-[5px] bg-[#FF9212] mt-[14px]"></div>
  </div>
</template>

<script setup>
const axios = useNuxtApp().$axios;
import { useRoute, useRouter } from "vue-router";

const email = ref('');
const phone = ref('tel:01227626262');
const whatsapp = ref('');
const route = useRoute();
const router = useRouter();
const name = route.params.name; // Access the "name" parameter

const fetchmerchantData = async () => {
  const url = `/ecatalog/merchant/${name}`;

  try {
    // Make a request to the proxy server
    const response = await axios.get(url);
    console.log("data footer", response);

    const merchant = response.data.merchant;

    if (merchant) {
      email.value = merchant.merchant_email ? `mailto:${merchant.merchant_email}` : '';
      phone.value = merchant.merchant_phone ? `tel:${merchant.merchant_phone}` : '';
      whatsapp.value = merchant.merchant_whatsapp || '';
      
      // Set CSS variable
      document.documentElement.style.setProperty('--merchant-skin-color', merchant.merchant_skincolor);
    } else {
      console.warn('Merchant data is missing or undefined.');
      email.value = '';
      phone.value = '';
      whatsapp.value = '';
    }
  } catch (error) {
    console.log(error);
    router.push('/404');
  }
};

onMounted(async () => {
  await fetchmerchantData();
});
</script>

<style scoped>
.menu-3 {
  color: var(--merchant-skin-color, #FF9212); /* default color */
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px;
  line-height: auto;
  border-style: hidden;
  outline: none;
}
</style>
