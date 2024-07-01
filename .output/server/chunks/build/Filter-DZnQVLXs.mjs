import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, resolveComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, ref, watch, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './trophy-DnAt3UlU.mjs';
import { useRoute } from 'vue-router';
import { _ as _export_sfc, d as defineStore, c as useNuxtApp } from './server.mjs';
import { Carousel, Slide, Navigation } from 'vue3-carousel/dist/carousel.es.js';
import { _ as _imports_1$1, a as _imports_2, m } from '../_/slider.mjs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faBorderAll } from '@fortawesome/free-solid-svg-icons';
import Multiselect from '@vueform/multiselect';

const _sfc_main$2 = {
  __name: "Company",
  __ssrInlineRender: true,
  props: {
    description: String,
    title: String,
    customPaddingTop: {
      type: String,
      default: "0"
    },
    image: String
  },
  setup(__props) {
    const route = useRoute();
    const name = route.params.name;
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-5" }, _attrs))} data-v-c00dfd97><p class="title sub_p mb-2" data-v-c00dfd97>ONE AWARD</p><p class="${ssrRenderClass({
        "active-menu": __props.title != "product"
      })}" data-v-c00dfd97></p><div class="flex" data-v-c00dfd97><p class="paragraph w-[80%]" style="${ssrRenderStyle({ paddingTop: __props.customPaddingTop })}" data-v-c00dfd97>${ssrInterpolate(props.description)} `);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/" + unref(name) + "/about-us"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span style="${ssrRenderStyle({ "text-decoration": "underline" })}" data-v-c00dfd97${_scopeId}>Read more</span>. `);
          } else {
            return [
              createVNode("span", { style: { "text-decoration": "underline" } }, "Read more"),
              createTextVNode(". ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p>`);
      if (__props.image) {
        _push(`<img${ssrRenderAttr("src", "https://admin.ecatalog.cloud/" + __props.image)} style="${ssrRenderStyle({ "margin-top": "-30px", "width": "70px", "border-radius": "50%", "height": "70px" })}" alt="merchant logo" data-v-c00dfd97>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_0$1)} style="${ssrRenderStyle({ "margin-top": "-30px", "width": "70px" })}" alt="merchant logo" data-v-c00dfd97>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Company = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c00dfd97"]]);
const __default__$1 = {
  data() {
    return {
      googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6653662204766!2d101.6868533141574!3d3.1390037976981394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc360e3b68333d%3A0x44fc9748b741a688!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2s!4v1619001326925!5m2!1sen!2s"
    };
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "Banner",
  __ssrInlineRender: true,
  props: {
    images: Object
  },
  setup(__props) {
    const currentSlide = ref(0);
    const props = __props;
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % props.images.length;
    };
    const prevSlide = () => {
      currentSlide.value = (currentSlide.value - 1 + props.images.value.length) % props.images.length;
    };
    watch(() => props.images, (newValue, oldValue) => {
      console.log("images prop changed:", newValue, oldValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Carousel = Carousel;
      const _component_Slide = Slide;
      const _component_navigation = Navigation;
      if (__props.title === "contact") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-d581e741><iframe width="100%" height="300" frameborder="0" style="${ssrRenderStyle({ "border": "0" })}"${ssrRenderAttr("src", _ctx.googleMapEmbedUrl)} allowfullscreen aria-hidden="false" tabindex="0" data-v-d581e741></iframe></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ style: { "position": "relative" } }, _attrs))} data-v-d581e741>`);
        if (props.images && props.images.length > 0) {
          _push(ssrRenderComponent(_component_Carousel, {
            "items-to-show": 1,
            snapAlign: _ctx.center,
            "wrap-around": "true",
            class: "mt-1 carousel",
            style: { "overflow": "hidden", "position": "relative", "width": "100%" }
          }, {
            addons: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_navigation, null, {
                  next: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", _imports_1$1)} class="c_next" alt="" data-v-d581e741${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: _imports_1$1,
                          onClick: nextSlide,
                          class: "c_next",
                          alt: ""
                        })
                      ];
                    }
                  }),
                  prev: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", _imports_2)} class="c_previous" alt="" data-v-d581e741${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: _imports_2,
                          onClick: prevSlide,
                          class: "c_previous",
                          alt: ""
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_navigation, null, {
                    next: withCtx(() => [
                      createVNode("img", {
                        src: _imports_1$1,
                        onClick: nextSlide,
                        class: "c_next",
                        alt: ""
                      })
                    ]),
                    prev: withCtx(() => [
                      createVNode("img", {
                        src: _imports_2,
                        onClick: prevSlide,
                        class: "c_previous",
                        alt: ""
                      })
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(props.images, (image, index) => {
                  _push2(ssrRenderComponent(_component_Slide, { key: index }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="carousel__item" style="${ssrRenderStyle({ "min-width": "100%" })}" data-v-d581e741${_scopeId2}><img${ssrRenderAttr("src", "https://admin.ecatalog.cloud/" + image.slideshow_image)} alt="trophy" style="${ssrRenderStyle({ "min-width": "100%", "height": "220px" })}" data-v-d581e741${_scopeId2}></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: "carousel__item",
                            style: { "min-width": "100%" }
                          }, [
                            createVNode("img", {
                              src: "https://admin.ecatalog.cloud/" + image.slideshow_image,
                              alt: "trophy",
                              style: { "min-width": "100%", "height": "220px" }
                            }, null, 8, ["src"])
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(props.images, (image, index) => {
                    return openBlock(), createBlock(_component_Slide, { key: index }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "carousel__item",
                          style: { "min-width": "100%" }
                        }, [
                          createVNode("img", {
                            src: "https://admin.ecatalog.cloud/" + image.slideshow_image,
                            alt: "trophy",
                            style: { "min-width": "100%", "height": "220px" }
                          }, null, 8, ["src"])
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="dots-container" style="${ssrRenderStyle({ "position": "absolute", "bottom": "20px", "left": "50%", "transform": "translateX(-50%)" })}" data-v-d581e741><!--[-->`);
        ssrRenderList(props.images, (slide, index) => {
          _push(`<span class="${ssrRenderClass([{ active: index === unref(currentSlide) }, "dot"])}" data-v-d581e741></span>`);
        });
        _push(`<!--]--></div></div>`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d581e741"]]);
const _imports_0 = "" + buildAssetsURL("Menu.IFobayQe.svg");
const _imports_1 = "" + buildAssetsURL("List.fS4u79lt.svg");
const useDataStore = defineStore("data", {
  state: () => ({
    filteredData: []
    // Data source
  }),
  actions: {
    async setData(data) {
      try {
        this.filteredData = data;
        console.log("in store");
      } catch {
        console.log("Error setting popup type", error);
      }
    }
  }
});
const __default__ = {
  props: {
    subcategory_id: {
      type: String
    },
    category_id: {
      type: String
    }
  },
  components: {
    Slider: m,
    Multiselect
  },
  data() {
    return {
      price: [300, 700],
      categories: [],
      height: [300, 700],
      showNew: false,
      showHot: false,
      materials: [],
      colors: [],
      isModalOpen: false,
      iscolorOpen: false,
      selectedcolors: [],
      iscategoryOpen: false,
      selectedcategories: [],
      ismaterialOpen: false,
      selectedmaterials: [],
      showNew: false,
      showHot: false,
      colorOptions: [],
      categoryOptions: [],
      materialOptions: [],
      keyword: "",
      materialplaceholder: "Select Materials",
      categoryplaceholder: "Select Categories",
      colorplaceholder: "Select Colors"
    };
  },
  methods: {
    reset() {
      this.price = [300, 700];
      this.selectedcategories = [];
      this.selectedcolors = [];
      this.selectedmaterials = [];
      this.keyword = "";
    },
    applyFilters() {
      const categories = this.selectedcategories.map((option) => option.category_id).join(", ");
      const axios = useNuxtApp().$axios;
      const filters = {
        categoryId: categories || null,
        material: this.selectedmaterials.length > 0 ? this.selectedmaterials : null,
        color: this.selectedcolors.length > 0 ? this.selectedcolors : null,
        priceFrom: this.price[0] || null,
        priceTo: this.price[1] || null,
        keyword: this.keyword || ""
      };
      this.isModalOpen = false;
      const queryParams = Object.entries(filters).filter(([key, value]) => value !== null && value !== "").map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join("&");
      let url = "";
      if (queryParams) {
        url = `https://admin.ecatalog.cloud/api/productSearch?${queryParams}`;
      } else {
        url = `https://admin.ecatalog.cloud/api/productSearch`;
      }
      axios.get(url).then((response) => {
        console.log(response.data.products);
        const dataStore = useDataStore();
        dataStore.setData(response.data.products);
        console.log(dataStore.filteredData);
        useRoute();
        this.$router.push(`/${this.$route.params.name}/product-list`);
      }).catch((error2) => {
        console.log(error2);
        this.$router.push("/404");
      });
    },
    formatPrice(price) {
      return price.toLocaleString("en-US", { minimumFractionDigits: 2 });
    },
    formatheight(height) {
      return height.toLocaleString("en-US", { minimumFractionDigits: 2 });
    },
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
      this.$emit("modal-opened", this.isModalOpen);
    },
    closeModal() {
      this.isModalOpen = false;
      this.$emit("modal-opened", this.isModalOpen);
    },
    // Method to set the active item by name
    setActiveItem(name) {
      this.activeItem = name;
    },
    togglecolorDropdown() {
      this.iscolorOpen = !this.iscolorOpen;
      this.ismaterialOpen = false;
      this.iscategoryOpen = false;
    },
    togglecategoryDropdown() {
      this.iscategoryOpen = !this.iscategoryOpen;
      this.iscolorOpen = false;
      this.ismaterialOpen = false;
    },
    togglematerialdropdown() {
      this.ismaterialOpen = !this.ismaterialOpen;
      this.iscolorOpen = false;
      this.iscategoryOpen = false;
    },
    fetchColors() {
      const axios = useNuxtApp().$axios;
      const url = `https://admin.ecatalog.cloud/api/productColor`;
      axios.get(url).then((response) => {
        this.colorOptions = response.data.list;
        console.log(this.colorOptions);
      }).catch((error2) => {
        console.log(error2);
        this.$router.push("/404");
      });
    },
    fetchMaterials() {
      const axios = useNuxtApp().$axios;
      const url = `https://admin.ecatalog.cloud/api/productMaterial`;
      axios.get(url).then((response) => {
        this.materialOptions = response.data.list;
        console.log(this.materialOptions);
      }).catch((error2) => {
        console.log(error2);
        this.$router.push("/404");
      });
    },
    fetchcategories() {
      const axios = useNuxtApp().$axios;
      const url = `https://admin.ecatalog.cloud/api/productCategory?parentId=0`;
      axios.get(url).then((response) => {
        this.categoryOptions = response.data.list;
      }).catch((error2) => {
        console.log(error2);
        this.$router.push("/404");
      });
    }
  },
  computed: {
    selectedcolorOptions() {
      return this.selectedcolors.length > 0 ? this.selectedcolors.join(", ") : "";
    },
    selectedcategoryOptions() {
      return this.selectedcategories.map((option) => option.category_name).join(", ");
    },
    selectedmaterialOptions() {
      return this.selectedmaterials.length > 0 ? this.selectedmaterials.join(", ") : "";
    }
    //   categoryOptions() {
    //   return [
    //     { label: 'Silver', value: 'Silver' },
    //     { label: 'Gold', value: 'Gold' },
    //     { label: 'Bronze', value: 'Bronze' },
    //   ];
    // },
    // colorOptions(){
    //   return [
    //     { label: 'Silver', value: 'Silver' },
    //     { label: 'Gold', value: 'Gold' },
    //     { label: 'Bronze', value: 'Bronze' },
    //     { label: 'Gold red', value: 'Red' },
    //   ];
    // },
    //   materialOptions() {
    //   return [
    //     { label: 'Wood', value: 'Wood' },
    //     { label: 'Metal', value: 'Metal' },
    //     { label: 'Plastic', value: 'Plastic' },
    //     { label: 'Glass', value: 'Glass' },
    //     { label: 'Ceramic', value: 'Ceramic' }
    //   ];
    // }
  },
  mounted() {
    this.fetchColors();
    this.fetchMaterials();
    this.fetchcategories();
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Filter",
  __ssrInlineRender: true,
  setup(__props) {
    library.add(faBars);
    library.add(faBorderAll);
    const route = useRoute();
    const name = route.params.name;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[--><div class="flex items-center justify-between mt-3 px-3 pb-2"><input type="text" class="border-2 border-gray-300 rounded-full W-[100%] pl-3 py-2 search" placeholder="Search by code or name" readonly><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/" + unref(name)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="trophy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "trophy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: `/${unref(name)}/product-list?category=${__props.category_id}&subcategory=${__props.subcategory_id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="trophy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "trophy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (_ctx.isModalOpen) {
        _push(`<div class="fixed inset-0 flex justify-center bg-black bg-opacity-50" id="modal"><div class="bg-white rounded-lg p-4 px-7 transition-all duration-300 my_filters_modal"><button class="top-0 text-gray-600" style="${ssrRenderStyle({ "float": "right", "font-size": "30px", "margin-top": "-5px", "z-index": "999 !important", "overflow": "hidden" })}"> \xD7 </button><h4 class="text-lg font-semibold mb-2 mt-2 product_search_title"> Product Search </h4><input type="text" class="border-2 border-gray-300 rounded-full pl-3 py-1 search keyword" style="${ssrRenderStyle({ "width": "100% !important" })}" placeholder="Search"${ssrRenderAttr("value", _ctx.keyword)}><div class="mb-2 mt-10">`);
        _push(ssrRenderComponent(unref(m), {
          id: "rangeSlider",
          modelValue: _ctx.price,
          "onUpdate:modelValue": ($event) => _ctx.price = $event,
          step: 50,
          ticks: true,
          dual: "",
          min: 0,
          max: 1e3,
          onChange: _ctx.fetchEventsWithFilters,
          style: { "margin-left": "5px", "margin-right": "5px" }
        }, null, _parent));
        _push(`</div><div class="flex mb-2" style="${ssrRenderStyle({ "max-width": "330px" })}"><div class="text-center"><small class="popup_text">Minimum Price</small> <br><input type="text" class="border-2 border-gray-100 px-2 w-1/2 popup_text" readonly${ssrRenderAttr("value", _ctx.formatPrice(_ctx.price[0]))}></div><div><small class="popup_text">Maximum Price</small> <br><input type="text" class="border-2 border-gray-100 px-2 w-1/2 popup_text" readonly${ssrRenderAttr("value", _ctx.formatPrice(_ctx.price[1]))}></div></div><hr><div class="mb-4 mt-5" style="${ssrRenderStyle({ "max-width": "330px" })}"><div class="custom-select"><div class="selected">${ssrInterpolate(_ctx.selectedcategoryOptions || _ctx.categoryplaceholder)} <div class="dropdown-icon"><i class="${ssrRenderClass([{ open: _ctx.iscategoryOpen }, "icon"])}">\u25BC</i></div></div>`);
        if (_ctx.iscategoryOpen) {
          _push(`<div class="dropdown"><!--[-->`);
          ssrRenderList(_ctx.categoryOptions, (option) => {
            _push(`<label class="checkbox"><input type="checkbox"${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(Array.isArray(_ctx.selectedcategories) ? ssrLooseContain(_ctx.selectedcategories, option) : _ctx.selectedcategories) ? " checked" : ""} class="popup_checkbox2"${ssrIncludeBooleanAttr(_ctx.selectedcategories.length >= 3 && !_ctx.selectedcategories.includes(option)) ? " disabled" : ""}> ${ssrInterpolate(option.category_name)}</label>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="mb-4 mt-5" style="${ssrRenderStyle({ "max-width": "330px" })}"><div class="custom-select"><div class="selected">${ssrInterpolate(_ctx.selectedmaterialOptions || _ctx.materialplaceholder)} <i class="${ssrRenderClass([{ open: _ctx.ismaterialOpen }, "dropdown-icon"])}">\u25BC</i></div>`);
        if (_ctx.ismaterialOpen) {
          _push(`<div class="dropdown"><!--[-->`);
          ssrRenderList(_ctx.materialOptions, (option) => {
            _push(`<label class="checkbox"><input type="checkbox"${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(Array.isArray(_ctx.selectedmaterials) ? ssrLooseContain(_ctx.selectedmaterials, option) : _ctx.selectedmaterials) ? " checked" : ""} class="popup_checkbox2"${ssrIncludeBooleanAttr(_ctx.selectedmaterials.length >= 3 && !_ctx.selectedmaterials.includes(option)) ? " disabled" : ""}> ${ssrInterpolate(option)}</label>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="mb-4 mt-5" style="${ssrRenderStyle({ "max-width": "330px" })}"><div class="custom-select"><div class="selected">${ssrInterpolate(_ctx.selectedcolorOptions || _ctx.colorplaceholder)} <i class="${ssrRenderClass([{ open: _ctx.iscolorOpen }, "dropdown-icon"])}">\u25BC</i></div>`);
        if (_ctx.iscolorOpen) {
          _push(`<div class="dropdown"><!--[-->`);
          ssrRenderList(_ctx.colorOptions, (option) => {
            _push(`<label class="checkbox"><input type="checkbox"${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(Array.isArray(_ctx.selectedcolors) ? ssrLooseContain(_ctx.selectedcolors, option) : _ctx.selectedcolors) ? " checked" : ""} class="popup_checkbox2"${ssrIncludeBooleanAttr(_ctx.selectedcolors.length >= 3 && !_ctx.selectedcolors.includes(option)) ? " disabled" : ""}> ${ssrInterpolate(option)}</label>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="flex justify-center mt-10"><button class="bg-gray-400 text-white py-1 px-4 rounded mr-2" style="${ssrRenderStyle({ "width": "45%", "border-radius": "23px", "background-color": "transparent", "color": "black", "border": "1px solid black", "font-size": "14px" })}"> Reset </button><button class="bg-blue-500 text-white py-1 px-4 rounded" style="${ssrRenderStyle({ "background-color": "black", "width": "45%", "border-radius": "23px", "font-size": "14px" })}"> Search </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Filter = _sfc_main;

export { Banner as B, Company as C, Filter as F, useDataStore as u };
//# sourceMappingURL=Filter-DZnQVLXs.mjs.map
