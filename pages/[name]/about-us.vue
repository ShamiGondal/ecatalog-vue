<template>
    <div class="md:container md:mx-auto flex flex-col sub" >
        <div style="min-height: 90vh;">
        <Menu title=""></Menu>

        <div style="padding-top:16px;">
            <Profile 
                :img="dataAbout.merchant_logo" 
                :instagram="instagram" 
                :facebook="facebook" 
                :tiktok="tiktok" 
                :whatsapp="whatsapp"
            ></Profile>
        </div>
        <div class="mt-4 flex flex-col justify-start mx-4 ">
            <div  v-if="about[0] && about[0].content_page == 'ABOUT'" class="paragraph mt-2">
                {{ about[0].content_text }}
            </div>
            <!-- <p v-if="about[0] && about[0].content_page == 'ABOUT'" class="paragraph mt-2">
                {{ about[0].content_text }}
            </p> -->
           
            <!-- <img :src="'https://admin.ecatalog.cloud/'+ dataAbout.merchant_logo" alt="trophy" class="mt-6 w-[100%]" /> -->
        </div>
    </div>
        <Footer ></Footer>
    </div>
</template>

<script setup>
    import Menu from "~/components/Menu.vue";
    import Profile from "~/components/Profile.vue";
    import Footer from "~/components/Footer.vue";
    import { useRoute, useRouter } from "vue-router";

    // Get axios plugin
    const axios = useNuxtApp().$axios;

    const route = useRoute();
    const router = useRouter();
    const name = route.params.name; // Access the "name" parameter
    const dataMerchant = ref([])
    // Initialize data
    const dataAbout = ref([]);
    const intro = ref([]);
    const about = ref([]);
    const contact = ref([]);
    const instagram = ref('');
    const facebook = ref('');
    const tiktok = ref('');
    const whatsapp = ref('');
    const merchantId= ref('');
    const fetchData = async () => {
        const url = `/ecatalog/about-us?merchantId=${merchantId.value}`;

        // Make a request to the proxy server
        await axios.get(url)
            .then((response) => {
                dataAbout.value = response.data.merchant;
                intro.value = response.data.merchant.content.filter(content => content.content_page == 'INTRO');
                about.value = response.data.merchant.content.filter(content => content.content_page == 'ABOUT');
                contact.value = response.data.merchant.content.filter(content => content.content_page == 'CONTACT');
                instagram.value = response.data.merchant.merchant_instagram;
                facebook.value = response.data.merchant.merchant_facebook;
                whatsapp.value = response.data.merchant.merchant_whatsapp;
                tiktok.value = response.data.merchant.merchant_tiktok;
            })
            .catch((error) => {
                console.log(error);
                router.push('/404');
            });
    };

    const fetchmerchantData = async () => {
        const url = `/ecatalog/merchant/${name}`;

        // Make a request to the proxy server
        await axios.get(url)
            .then((response) => {
               
                console.log(response)
                dataMerchant.value = response.data.merchant;
                merchantId.value = response.data.merchant.merchant_id;

                

               
            })
            .catch((error) => {
                console.log(error);
                router.push('/404');
            });
    };
    onMounted( async() => {
        await fetchmerchantData();
        await fetchData();
    });
</script>

<style>
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

    .paragraph-bold{
        color:#242424;
        font-size:15px;
        font-family:'Roboto',sans-serif;
        letter-spacing:0.5px;
        line-height:auto;
        border-style:hidden;
        outline:none;
    }

    .paragraph{
        color:#555555;
        text-align:justify;
        vertical-align:text-top;
        font-size:14px;
        font-family:'Roboto',sans-serif;
        letter-spacing:0.5px;
        line-height:18px;
        border-style:hidden;
        outline:none;
    }
</style>
