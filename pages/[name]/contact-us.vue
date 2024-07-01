<template>
    <div class="md:container md:mx-auto flex flex-col sub" >
        <div style="min-height: 90vh;">
        <Menu title="contact"></Menu>
        <div style="margin-top:1px;">
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
        <div class="flex flex-col mx-4 mt-4">
            <div class="flex justify-between">
                <div class="flex items-start justify-center flex-col w-[70%]">
                    <h6
                        class="mt-4 text-sm px-5 py-1 font-semibold  w-min rounded-3xl uppercase main_button_contact"
                        style="background-color: #d9d9d9;"
                    >
                        Main
                    </h6>
                    <div v-if="branchMain[0] && branchMain[0].branch_address" class="flex items-start mt-3 gap-2">
                        <img
                            src="~/assets/image/address.svg"
                            alt="trophy"
                            class="w-7 mt-1"
                        />
                        <p 
                            style="
                            color:#555555;
                            margin-top: 5px;
                            font-size:14px;
                            font-family:'Roboto',sans-serif;
                            letter-spacing:0.5px;
                            line-height:120%;
                            border-style:hidden;
                            outline:none;
                            "
                        >
                            {{ branchMain[0].branch_address }}
                        </p>
                    </div>
                    <div v-if="branchMain[0] && branchMain[0].branch_phone" class="flex items-center mt-3 gap-2">
                        <img
                            src="~/assets/image/phone-contact.svg"
                            alt="trophy"
                            class="w-5"
                        />
                        <p 
                            style="
                            color:#555555;
                            font-size:14px;
                            font-family:'Roboto',sans-serif;
                            letter-spacing:0.5px;
                            line-height:120%;
                            border-style:hidden;
                            outline:none;"
                        >
                            {{ branchMain[0].branch_phone }}
                        </p>
                    </div>
                    <div v-if="branchMain[0] && branchMain[0].branch_email" class="flex items-center mt-3 gap-2">
                        <img
                            src="~/assets/image/emailcontact.svg"
                            alt="trophy"
                            class="w-5"
                        />
                        <p 
                            style="
                            color:#555555;
                            font-size:14px;
                            font-family:'Roboto',sans-serif;
                            letter-spacing:0.5px;
                            line-height:120%;
                            border-style:hidden;
                            outline:none;"
                        >
                            {{ branchMain[0].branch_email }}
                        </p>
                    </div>
                </div>
                <a v-if="branchMain[0] && branchMain[0].branch_waze" class="flex items-center mt-4 w[30%]" :href="branchMain[0].branch_waze">
                    <img src="~/assets/image/direction.svg" alt="trophy" class="w-6" style="margin-top: -20px;" />
                </a>
            </div>
            <Line></Line>
            <template v-if="normalBranch">
                <div v-for="(branch, index) in normalBranch" :key="index">
                    <div class="flex justify-between">
                        <div class="flex items-start justify-center flex-col w-[70%]">
                            <h6
                                class="mt-4 text-sm px-5 py-1 font-semibold  w-min rounded-3xl uppercase branch_button_contact"
                                style="background-color: #d9d9d9;"
                            >
                                BRANCH
                            </h6>
                            <div v-if="branch.branch_address" class="flex items-start mt-3 gap-2">
                                <img
                                    src="~/assets/image/address.svg"
                                    alt="trophy"
                                    class="w-5 mt-1"
                                />
                                <p 
                                    style="
                                    color:#555555;
                                    margin-top: 5px;
                                    font-size:14px;
                                    font-family:'Roboto',sans-serif;
                                    letter-spacing:0.5px;
                                    line-height:120%;
                                    border-style:hidden;
                                    outline:none;
                                    "
                                >
                                    {{ branch.branch_address }}
                                </p>
                            </div>
                            <div v-if="branch.branch_phone" class="flex items-center mt-3 gap-2">
                                <img
                                    src="~/assets/image/phone-contact.svg"
                                    alt="trophy"
                                    class="w-5"
                                />
                                <p 
                                    style="
                                    color:#555555;
                                    font-size:14px;
                                    font-family:'Roboto',sans-serif;
                                    letter-spacing:0.5px;
                                    line-height:120%;
                                    border-style:hidden;
                                    outline:none;"
                                >
                                    {{ branch.branch_phone}}
                                </p>
                            </div>
                            <div v-if="branch.branch_email" class="flex items-center mt-3 gap-2">
                                <img
                                    src="~/assets/image/emailcontact.svg"
                                    alt="trophy"
                                    class="w-5"
                                />
                                <p 
                                    style="
                                    color:#555555;
                                    font-size:14px;
                                    font-family:'Roboto',sans-serif;
                                    letter-spacing:0.5px;
                                    line-height:120%;
                                    border-style:hidden;
                                    outline:none;"
                                >
                                    {{ branch.branch_email}}
                                </p>
                            </div>
                        </div>
                        <div v-if="branch.branch_waze" class="flex items-center mt-4 w[30%]" :href="branch.branch_waze">
                            <img src="~/assets/image/direction.svg" alt="trophy" class="w-6" style="margin-top: -20px;" />
                        </div>
                    </div>
                    <Line v-if="index < normalBranch.length -1"></Line>
                </div>
            </template>
        </div>
    </div>
        <Footer></Footer>
    </div>
</template>

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
    .c_div{
        margin-left: -20px;
    }
    .main_button_contact{
        color:#555555;
        font-size:12px;
        font-family:'Roboto',sans-serif;
        letter-spacing:0.5px;
        line-height:18px;
        border-style:hidden;
        outline:none;
    }
    .branch_button_contact{
        color:#555555;
        font-size:12px;
        font-family:'Roboto',sans-serif;
        letter-spacing:0.5px;
        line-height:18px;
        border-style:hidden;
        outline:none;
    }
</style>

<script setup>
    import Menu from "~/components/Menu.vue";
    import Company from "~/components/Company.vue";
    import Line from "~/components/Line.vue";
    import Footer from "~/components/Footer.vue";
    import { useRoute, useRouter } from "vue-router";

    // Get axios plugin
    const axios = useNuxtApp().$axios;

    const route = useRoute();
    const router = useRouter();
    const name = route.params.name; 

    // Initialize data
    const dataMerchant = ref([]);
    const dataBranch = ref([]);
    const branchMain = ref([]);
    const normalBranch = ref([]);
    const googleMapEmbedUrl = ref('');
    const merchantId = ref('');
    
 const fetchData = async () => {
    const url = `/ecatalog/contact-us?merchantId=${merchantId.value}`;

    try {
        // Make a request to the proxy server
        const response = await axios.get(url);
        console.log(response);

        // Safely access merchant and branch data
        const merchant = response.data?.merchant;
        const branches = response.data?.branch;

        // Assign merchant data if available
        if (merchant) {
            dataMerchant.value = merchant;
        } else {
            console.warn('Merchant data is missing or undefined.');
            dataMerchant.value = {};
            // Optionally, set an error message or state
            // errorMessage.value = 'Merchant data not available';
        }

        // Assign and filter branch data if available and is an array
        if (Array.isArray(branches)) {
            branchMain.value = branches.filter(branch => branch.branch_main === '1');
            normalBranch.value = branches.filter(branch => branch.branch_main !== '1');
        } else {
            console.warn('Branch data is missing or not an array.');
            branchMain.value = [];
            normalBranch.value = [];
            // Optionally, set an error message or state
            // errorMessage.value = 'Branch data not available';
        }

        // Set Google Map Embed URL based on branchMain
        if (branchMain.value.length > 0 && branchMain.value[0].branch_googlemap) {
            googleMapEmbedUrl.value = branchMain.value[0].branch_googlemap;
        } else {
            // Fallback Google Map Embed URL
            googleMapEmbedUrl.value = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6653662204766!2d101.6868533141574!3d3.1390037976981394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc360e3b68333d%3A0x44fc9748b741a688!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2s!4v1619001326925!5m2!1sen!2s';
            // Optionally, set an error message or state
            // errorMessage.value = 'No main branch with a Google map URL found';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        // Optionally, set an error message or state
        // errorMessage.value = 'Failed to fetch contact data';
        router.push('/404');
    }
};


const fetchmerchantData = async () => {
    const url = `/ecatalog/merchant/${name}`;

    try {
        // Make a request to the proxy server
        const response = await axios.get(url);
        console.log(response);

        // Safely access merchant data
        const merchant = response.data?.merchant;

        if (merchant) {
            if (merchant.merchant_id) {
                merchantId.value = merchant.merchant_id;
            } else {
                console.warn('merchant_id is missing.');
                merchantId.value = null;
            }
            // Optionally handle other merchant properties
            dataMerchant.value = merchant;
        } else {
            console.warn('Merchant data is missing or undefined.');
            merchantId.value = null;
            dataMerchant.value = {}; // or handle this according to your application logic
        }
    } catch (error) {
        console.error('Error fetching merchant data:', error);
        // Optionally set error states or messages
        // errorMessage.value = 'Failed to fetch merchant data';
        router.push('/404');
    }
};


    
    onMounted( async() => {
        await fetchmerchantData();
        await fetchData();
    });
</script>
