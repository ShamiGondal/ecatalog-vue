<template>
    <div
        class="flex flex-col items-center justify-center bg-white shadow-md rounded-bl-3xl rounded-br-3xl pt-3 pb-4"
    >
        <img class="w-[50px] h-[50px]" style="border-radius: 50%;" v-if="img != null && img != ''" :src="'https://admin.ecatalog.cloud/' +img" alt="trophy" />
        <img v-else src="~/assets/image/trophy.svg" alt="trophy" />
        <div class="mt-4 bg-[#FF9212] w-[50px] h-[5px]"></div>
            <p class="paragraph-bold mt-2">About us</p>
            <div class="flex items-center justify-center mt-2 gap-2">
            <a v-if="facebook != ''" :href="facebook">
                <img src="~/assets/image/facebook.svg" alt="trophy" />
            </a>
            <a v-if="instagram != ''" :href="instagram">
                <img src="~/assets/image/instagram.svg" alt="trophy" />
            </a>
            <a v-if="tiktok != ''" :href="tiktok">
                <img src="~/assets/image/tiktok.svg" alt="trophy" />
            </a>
            <a v-if="whatsapp != ''" :href="whatsapp">
                <img src="~/assets/image/ws.svg" alt="trophy" class="w-[30px]"/>
            </a>
        </div>
    </div>
</template>

<script setup>
    // Define props
    const props = defineProps({
        img: {
            type: String,
        },
        instagram: {
            type: String,
        },
        facebook: {
            type: String,
        },
        tiktok: {
            type: String,
        },
        whatsapp: {
            type: String,
        }
    });
</script>
