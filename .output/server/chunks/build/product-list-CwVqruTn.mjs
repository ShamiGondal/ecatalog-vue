import { _ as _export_sfc, c as useNuxtApp } from './server.mjs';
import { useSSRContext, ref, watch, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, toDisplayString, createTextVNode, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useDataStore, B as Banner, C as Company, F as Filter } from './Filter-DZnQVLXs.mjs';
import { M as Menu, F as Footer } from './Footer-CJzcZJHs.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './trophy-DnAt3UlU.mjs';
import 'vue3-carousel/dist/carousel.es.js';
import '../_/slider.mjs';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@vueform/multiselect';

const __default__ = {
  mounted() {
    const sidebar = (void 0).getElementById("sidebar");
    const filetrsbar = (void 0).getElementById("stikcy_filters");
    (void 0).addEventListener("scroll", function() {
      const scrollY = (void 0).scrollY;
      if (scrollY >= 350) {
        sidebar.style.paddingTop = "100px";
        filetrsbar.style.paddingTop = "40px";
      } else {
        sidebar.style.paddingTop = "0";
        filetrsbar.style.paddingTop = "0";
      }
    });
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "product-list",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    const route = useRoute();
    const router = useRouter();
    const name = route.params.name;
    const filter_opened = ref(false);
    const dataProducts = ref([]);
    const categories = ref([]);
    const activeItem = ref(route.query.subcategory);
    const dataSlide = ref([]);
    const dataMerchant = ref([]);
    const AboutUs = ref("About us");
    const loading = ref(true);
    const handleModalOpened = (isOpen) => {
      filter_opened.value = isOpen;
      console.log("Modal opened status:", isOpen);
    };
    const dataStore = useDataStore();
    const fetchData = async (c_id) => {
      const url = `/ecatalog/productCategory?parentId=${c_id}`;
      await axios.get(url).then((response) => {
        categories.value = response.data.list;
      }).catch((error) => {
        console.log(error);
        router.push("/404");
      });
    };
    const calculateMinMaxRegularPrice = (products) => {
      const regularPrices = products.map(
        (product) => parseFloat(product.product_regular_price)
      );
      const minPrice = Math.min(...regularPrices).toFixed(2);
      const maxPrice = Math.max(...regularPrices).toFixed(2);
      if (minPrice != maxPrice) {
        return `RM ${minPrice} - RM ${maxPrice}`;
      } else {
        return `RM ${minPrice}`;
      }
    };
    watch(
      [() => dataStore.filteredData],
      ([newFilteredData]) => {
        fetchData(0);
        loading.value = true;
        setTimeout(() => {
          dataProducts.value = newFilteredData;
          loading.value = false;
        }, 2e3);
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:container md:mx-auto flex flex-col sub" }, _attrs))} data-v-eccfd9ab><div style="${ssrRenderStyle({ "min-height": "90vh" })}" data-v-eccfd9ab>`);
      _push(ssrRenderComponent(Menu, { title: "product" }, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "margin-top": "1px" })}" data-v-eccfd9ab>`);
      if (unref(dataSlide) && unref(dataSlide).length > 0) {
        _push(ssrRenderComponent(Banner, {
          title: "product",
          images: unref(dataSlide)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col mt-4" data-v-eccfd9ab>`);
      _push(ssrRenderComponent(Company, {
        class: "mx-5 pb-2",
        description: unref(AboutUs),
        image: unref(dataMerchant).merchant_logo,
        title: "product"
      }, null, _parent));
      _push(`<div id="stikcy_filters" style="${ssrRenderStyle({ "position": "sticky", "top": "0", "background": "white", "transition": "padding-top 0.3s ease", "margin-top": "-5px" })}" data-v-eccfd9ab><div class="filters-container" data-v-eccfd9ab>`);
      _push(ssrRenderComponent(Filter, {
        class: "mx-5",
        onModalOpened: handleModalOpened
      }, null, _parent));
      _push(`</div></div><div class="flex ml-1 mr-2" data-v-eccfd9ab><div id="sidebar" class="${ssrRenderClass([{ "sticky-sidebar": !unref(filter_opened) }, "ml-2 flex flex-col items-start w-[20%]"])}" style="${ssrRenderStyle({ "top": "0", "height": "calc(100vh - 120px)", "transition": "padding-top 0.3s ease" })}" data-v-eccfd9ab><!--[-->`);
      ssrRenderList(unref(categories), (data, index) => {
        _push(`<div class="${ssrRenderClass([{ active: unref(activeItem) == data.category_id }, "mt-2 menu-2 curved_menu transition-all duration-300"])}" style="${ssrRenderStyle({ "border-top-right-radius": "10px" })}" data-v-eccfd9ab><p data-v-eccfd9ab>${ssrInterpolate(data.category_name)}</p></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(loading)) {
        _push(`<div class="w-[80%]" style="${ssrRenderStyle({ "margin-left": "8%" })}" data-v-eccfd9ab><!--[-->`);
        ssrRenderList(5, (index) => {
          _push(`<div style="${ssrRenderStyle({ "margin-left": "8%" })}" class="grid grid-cols-12 gap-4 items-center p-0 pt-2 pb-1" data-v-eccfd9ab><div class="col-span-6" data-v-eccfd9ab><div class="w-full h-32 bg-gray-200 animate-pulse" data-v-eccfd9ab></div></div><div class="col-span-6" data-v-eccfd9ab><div class="h-8 w-full bg-gray-200 animate-pulse mb-2" data-v-eccfd9ab></div><div class="h-8 w-full bg-gray-200 animate-pulse mb-2" data-v-eccfd9ab></div><div class="h-8 w-full bg-gray-200 animate-pulse" data-v-eccfd9ab></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(loading)) {
        _push(`<div class="pt-2 ml-2" style="${ssrRenderStyle({ "overflow-y": "auto" })}" data-v-eccfd9ab><!--[-->`);
        ssrRenderList(unref(dataProducts), (product, index) => {
          _push(ssrRenderComponent(_component_router_link, {
            key: index,
            to: "/" + unref(name) + "/product/" + product.product_group_id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (!unref(loading)) {
                  _push2(`<div class="grid grid-cols-10 gap-4 items-center p-0 pt-2 pb-1" style="${ssrRenderStyle({ "margin-left": "8%" })}" data-v-eccfd9ab${_scopeId}><div class="col-span-4" style="${ssrRenderStyle({ "margin-top": "-2%" })}" data-v-eccfd9ab${_scopeId}><img${ssrRenderAttr(
                    "src",
                    "https://admin.ecatalog.cloud/uploads/ftp/" + product.image[0].image_file
                  )} alt="Image" class="w-full" data-v-eccfd9ab${_scopeId}></div><div class="col-span-6" style="${ssrRenderStyle({ "margin-top": "-4%" })}" data-v-eccfd9ab${_scopeId}><p class="intro_1" data-v-eccfd9ab${_scopeId}>${ssrInterpolate(product.product_group_name)}</p><p class="intro_2" data-v-eccfd9ab${_scopeId}> H${ssrInterpolate(product.product[0].product_height)}mm | ${ssrInterpolate(product.product.length + " Sizes")} <br data-v-eccfd9ab${_scopeId}> ${ssrInterpolate(product.product_group_color)}</p><p class="intro_3" data-v-eccfd9ab${_scopeId}>${ssrInterpolate(
                    // Calculate the minimum and maximum regular prices
                    calculateMinMaxRegularPrice(product.product)
                  )}</p></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<hr class="h-px bg-gray-300 my-3" style="${ssrRenderStyle({ "margin-left": "30px" })}" data-v-eccfd9ab${_scopeId}>`);
              } else {
                return [
                  !unref(loading) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid grid-cols-10 gap-4 items-center p-0 pt-2 pb-1",
                    style: { "margin-left": "8%" }
                  }, [
                    createVNode("div", {
                      class: "col-span-4",
                      style: { "margin-top": "-2%" }
                    }, [
                      createVNode("img", {
                        src: "https://admin.ecatalog.cloud/uploads/ftp/" + product.image[0].image_file,
                        alt: "Image",
                        class: "w-full"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", {
                      class: "col-span-6",
                      style: { "margin-top": "-4%" }
                    }, [
                      createVNode("p", { class: "intro_1" }, toDisplayString(product.product_group_name), 1),
                      createVNode("p", { class: "intro_2" }, [
                        createTextVNode(" H" + toDisplayString(product.product[0].product_height) + "mm | " + toDisplayString(product.product.length + " Sizes") + " ", 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(product.product_group_color), 1)
                      ]),
                      createVNode("p", { class: "intro_3" }, toDisplayString(
                        // Calculate the minimum and maximum regular prices
                        calculateMinMaxRegularPrice(product.product)
                      ), 1)
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("hr", {
                    class: "h-px bg-gray-300 my-3",
                    style: { "margin-left": "30px" }
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(loading) && unref(dataProducts).length == 0) {
        _push(`<div class="w-[80%]" style="${ssrRenderStyle({ "margin-top": "50%" })}" data-v-eccfd9ab><p class="text-[12px] items-center justify-center text-center" data-v-eccfd9ab>No products found.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[name]/product-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const productList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eccfd9ab"]]);

export { productList as default };
//# sourceMappingURL=product-list-CwVqruTn.mjs.map
