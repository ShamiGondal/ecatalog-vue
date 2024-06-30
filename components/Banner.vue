<template>
    <div v-if="title === 'contact'" class="w-full">
        <iframe
            width="100%"
            height="300"
            frameborder="0" style="border:0"
            :src="googleMapEmbedUrl"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
        ></iframe>
    </div>
    <div  v-else style="position: relative;">
        <Carousel
            v-if="props.images && props.images.length > 0"
            :items-to-show="1"
            :snapAlign="center"
            wrap-around="true"

            class="mt-1    carousel "
            style="overflow: hidden;  position: relative;width: 100%;" 
        >
            <Slide v-for="(image, index) in props.images" :key="index">
                <div class="carousel__item   " style="min-width: 100%;" >
                    <img
                        :src="'https://admin.ecatalog.cloud/' + image.slideshow_image"
                        alt="trophy"
                        style="min-width: 100%;height: 220px;"
                        
                       
                    />
                </div>
            </Slide>

            <template #addons>
                <navigation>
                    <template #next>
                        <img  src="~/assets/image/chevron_right.svg" @click="nextSlide" class="c_next" alt="">
                    </template>
                    <template #prev>
                        <img  src="~/assets/image/chevron_left.svg" @click="prevSlide"   class="c_previous" alt="">
                    </template>
                </navigation>
            </template>
        </Carousel>
        <div  class="dots-container" style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);">
            <span
                v-for="(slide, index) in props.images"
                :key="index"
                class="dot"
                :class="{ active: index === currentSlide }"
            ></span>
        </div>
    </div>
</template>

<script setup>
const currentSlide = ref(0);
    const props = defineProps({
        images: Object,
    });
    const nextSlide =()=> { 
      currentSlide.value = (currentSlide.value + 1) % props.images.length ;
    };
    const prevSlide =()=> {
      currentSlide.value = (currentSlide.value - 1 +  props.images.value.length) %  props.images.length;
    };

    watch(() => props.images, (newValue, oldValue) => {
        // Handle the change in props.images here
        console.log('images prop changed:', newValue, oldValue);
    });
</script>

<script>
    export default {
        data() {
            return {
                googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6653662204766!2d101.6868533141574!3d3.1390037976981394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc360e3b68333d%3A0x44fc9748b741a688!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2s!4v1619001326925!5m2!1sen!2s",
                
                
            };
        },
        props: {
            title: {
                type: String,
                required: true
            }
        }
    };
</script>

<style scoped>
    .carousel__icon {
        color: #d6d3d3;
        transform: scale(2);
    }

    .c_next {
        margin-left: -36px;
        height: 40px;
    }

    .c_previous {
        margin-right: -36px;
        height: 40px;
    }
</style>