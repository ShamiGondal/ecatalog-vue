<template>
    <div class="md:container md:mx-auto flex flex-col  sub "   >
        <div style="height: 90vh;" >
        <Menu title="ecatalog"></Menu>

        <div
            class="flex flex-col justify-center items-center bg-white shadow-xl rounded-bl-3xl rounded-br-3xl pb-4"
        >
            <p class="title uppercase">AWARDS FOR CHAMPIONS</p>
            <iframe 
                v-if="selectedEcatalog && selectedEcatalog.ecatalog_file" 
                :src="'https://admin.ecatalog.cloud/' + selectedEcatalog.ecatalog_file" 
                style="width:360px; height:50vh;" 
                frameborder="0" 
                class="mt-2" 
                scroll="no"
                allowfullscreen>
            </iframe>
            <a 
                v-if="selectedEcatalog && selectedEcatalog.ecatalog_file" 
                :href="'https://admin.ecatalog.cloud/' + selectedEcatalog.ecatalog_file" 
                download="Ecatalog" 
                target="blank"
                class="button-download">
                Download
            </a>
        </div>
       
            <Carousel
        :items-to-show="computedItemsToShow"
            :itemsToScroll="1"
            :wrap-around="shouldWrapAround"
            class="mt-6  mx-auto w-80   my_crousel"
            
        >
            <template v-for="(slide, index) in dataEcatalog" :key="index" >
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
      
        
        <h4 v-if="!loading && dataEcatalog.length == 0" class="title items-center flex  justify-center mt-[50%]">No Catalog Available</h4>
    </div>
        <Footer  ></Footer>
    </div>
</template>

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
  
</style>

<script setup>
    import { ref, onMounted } from 'vue';
    import Menu from "~/components/Menu.vue";
    import Footer from "~/components/Footer.vue";
    import { useRoute, useRouter } from "vue-router";
    import { useNuxtApp } from '#app';

    const axios = useNuxtApp().$axios;
    const route = useRoute();
    const router = useRouter();
    const name = route.params.name;
    const merchantId = ref('');
    const dataEcatalog = ref([]);
    const selectedEcatalog = ref(null);
    const dataMerchant = ref([]);
    const loading = ref(true)
    const fetchData = async () => {
        const url = `/ecatalog/ecatalog?merchantId=${merchantId.value}`;

        try {
            const response = await axios.get(url);
            dataEcatalog.value = response.data.ecatalog;
            if (dataEcatalog.value.length > 0) {
                selectedEcatalog.value = dataEcatalog.value[0];
            }
        } catch (error) {
            console.log(error);
            router.push('/404');
        }finally{
            loading.value = false;
        }
    };

    const selectEcatalog = (ecatalog) => {
        selectedEcatalog.value = ecatalog;
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
    const computedItemsToShow = computed(() => {
  return Math.min(dataEcatalog.value.length, 3); // Show up to 3 items or the number of items you have
});
const shouldWrapAround = computed(() => {
  return dataEcatalog.value.length > computedItemsToShow.value; // Enable wrap-around only if there are more items than visible
});
</script>
