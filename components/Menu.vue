<template>
    <div  class=" top-0 bg-white w-full md:w-[100%] flex flex-col my_menu"  style="
      position: sticky;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15),
        0px -1px 3px rgba(0, 0, 0, 0.15);
        z-index: 100;
    ">
        <div class="flex  " >
            <router-link :to="'/' + name" style="width:33%;text-align: center;">
                <p class="menu transition-all duration-300" :class="{ 'active-menu': activeTab === 'product' }" @click="setActiveTab('product')">
                    Product
                </p>
                
            </router-link>
            <router-link :to="'/' + name + '/e-catalog/'" style="width:33%;text-align: center;">
                <p class="menu transition-all duration-300" :class="{ 'active-menu': activeTab === 'ecatalog' }" @click="setActiveTab('ecatalog')">
                    E-Catalog
                </p>
            </router-link>
            <router-link :to="'/' + name + '/contact-us/'" style="width:33%;text-align: center;">
                <p class="menu transition-all duration-300" :class="{ 'active-menu': activeTab === 'contact' }" @click="setActiveTab('contact')" style="margin-right: 0;">
                    Contact
                </p>
            </router-link>
        </div>
        <!-- <hr style=" height: 4px;background-color: #ccc;margin-top: -4px;margin-right: 0px;position: relative;"> -->
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';


const route = useRoute();
const name = route.params.name;

</script>
<script>
export default {
    props: {
        title: String,
    },
    data() {
        return {
            activeTab: "",
        };
    },
    created() {
        this.activeTab = this.title;
    },
    methods: {
        setActiveTab(tab) {
            this.activeTab = tab;
        }
    }
};
</script>

<style scoped>
    .menu {
        color: #242424;
        text-align: center;
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 0.5px;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    
</style>
