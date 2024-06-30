<template>
  <div class="mx-5">
    <p class="title sub_p mb-2">ONE AWARD</p>
    <p
      
      :class="{
        'active-menu': title != 'product',
      }"
    ></p>

    <div class="flex">
      <p class="paragraph w-[80%]" :style="{ paddingTop: customPaddingTop }">
        {{ props.description }}
       
        <router-link :to="'/' + name + '/about-us'">
          <span style="text-decoration: underline;">Read more</span>.

        </router-link>
      </p>
      <img v-if="image" :src="'https://admin.ecatalog.cloud/' + image"  style="margin-top: -30px;width: 70px;border-radius: 50%;height: 70px;" alt="merchant logo">
      <img v-else src="~/assets/image/trophy.svg"  style="margin-top: -30px;width: 70px;" alt="merchant logo" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const name = route.params.name; 
const props = defineProps({
  description: String,
  title: String,
  customPaddingTop: {
    type: String,
    default: '0', 
  },
  image: String
});
</script>
<style scoped>
.active-menu {
  width: 20%;
}
.sub_p{
  color:#242424;

font-size:16px;
font-family:'Roboto',sans-serif;
letter-spacing:0.5px;
line-height:120%;
border-style:hidden;
outline:none;

}
.paragraph{
  
font-size:14px;
font-family:'Roboto',sans-serif;
letter-spacing:0.5px;
line-height:20px;
border-style:hidden;
outline:none;
}
</style>
