import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { Carousel, Slide, Navigation } from 'vue3-carousel/dist/carousel.es.js';
import { c as useNuxtApp } from './server.mjs';
import { ref, resolveComponent, mergeProps, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_1, a as _imports_2, m } from '../_/slider.mjs';
import { useRoute, useRouter } from 'vue-router';
import Multiselect from '@vueform/multiselect';
import { M as Menu, F as Footer } from './Footer-DqgBxSIP.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'axios';

const _imports_0 = "" + buildAssetsURL("Cup.BD99qdmv.svg");
const __default__ = {
  props: {
    colorvalue: {
      type: Array,
      default: () => []
    },
    categoryvalue: {
      type: Array,
      default: () => []
    },
    materialvalue: {
      type: Array,
      default: () => []
    },
    colorplaceholder: {
      type: String,
      default: "Select colors"
    },
    categoryplaceholder: {
      type: String,
      default: "Select categories"
    },
    materialplaceholder: {
      type: String,
      default: "Select materials"
    }
  },
  components: {
    Slider: m,
    Multiselect
  },
  data() {
    return {
      price: [0, 0],
      categories: [],
      height: [0, 1e3],
      showNew: false,
      showHot: false,
      materials: [],
      colors: [],
      isModalOpen: false,
      currentSlide: 0,
      scrolled: false,
      iscolorOpen: false,
      selectedcolors: this.colorvalue,
      iscategoryOpen: false,
      selectedcategories: this.categoryvalue,
      ismaterialOpen: false,
      selectedmaterials: this.materialvalue
    };
  },
  // methods: {
  //   openModal() {
  //     this.isModalOpen = true;
  //     this.$emit('modal-opened');
  //   }
  // }
  methods: {
    handleScroll() {
      const scrollPosition = (void 0).scrollY;
      const viewportHeight = (void 0).innerHeight;
      const threshold = viewportHeight * 0.2;
      const upperThreshold = threshold + 10;
      if (scrollPosition > threshold && !this.scrolled && !this.scrollTimeout) {
        this.scrolled = true;
        this.scrollTimeout = setTimeout(() => {
          this.scrollTimeout = null;
        }, 2e3);
      } else if (scrollPosition < upperThreshold && this.scrolled && !this.scrollTimeout) {
        this.scrolled = false;
        this.scrollTimeout = setTimeout(() => {
          this.scrollTimeout = null;
        }, 2e3);
      }
    },
    debounce(func, wait, immediate) {
      let timeout;
      let lastExecTime = 0;
      return function() {
        const context = this;
        const args = arguments;
        const currentTime = (/* @__PURE__ */ new Date()).getTime();
        const timeSinceLastExecution = currentTime - lastExecTime;
        const later = function() {
          timeout = null;
          lastExecTime = (/* @__PURE__ */ new Date()).getTime();
          if (!immediate)
            func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        if (callNow || timeSinceLastExecution > wait) {
          func.apply(context, args);
          lastExecTime = (/* @__PURE__ */ new Date()).getTime();
        } else {
          timeout = setTimeout(later, wait - timeSinceLastExecution);
        }
      };
    },
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    // Method to set the active item by name
    setActiveItem(name) {
      this.activeItem = name;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % 4;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + 4) % 4;
    },
    togglecolorDropdown() {
      this.iscolorOpen = !this.iscolorOpen;
    },
    togglecategoryDropdown() {
      this.iscategoryOpen = !this.iscategoryOpen;
    },
    togglematerialdropdown() {
      this.ismaterialOpen = !this.ismaterialOpen;
    }
  },
  computed: {
    selectedcolorOptions() {
      return this.selectedcolors.length > 0 ? this.selectedcolors.join(", ") : "";
    },
    selectedcategoryOptions() {
      return this.selectedcategories.length > 0 ? this.selectedcategories.join(", ") : "";
    },
    selectedmaterialOptions() {
      return this.selectedmaterials.length > 0 ? this.selectedmaterials.join(", ") : "";
    },
    categoryOptions() {
      return [
        { label: "Silver", value: "silver" },
        { label: "Gold", value: "gold" },
        { label: "Bronze", value: "bronze" }
      ];
    },
    colorOptions() {
      return [
        { label: "Silver", value: "silver" },
        { label: "Gold", value: "gold" },
        { label: "Bronze", value: "bronze" },
        { label: "Gold red", value: "red" }
      ];
    },
    materialOptions() {
      return [
        { label: "Wood", value: "wood" },
        { label: "Metal", value: "metal" },
        { label: "Plastic", value: "plastic" },
        { label: "Glass", value: "glass" },
        { label: "Ceramic", value: "ceramic" }
      ];
    }
  },
  watch: {
    colorvalue(newVal) {
      this.selectedcolors = newVal;
    },
    categoryvalue(newVal) {
      this.selectedcategories = newVal;
    },
    materialvalue(newVal) {
      this.selectedmaterials = newVal;
    }
  },
  mounted() {
    (void 0).addEventListener("scroll", this.debounce(this.handleScroll, 250));
  },
  destroyed() {
    (void 0).removeEventListener("scroll", this.debounce(this.handleScroll, 250));
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp().$axios;
    const route = useRoute();
    useRouter();
    route.params.id;
    const dataProducts = ref([]);
    const dataSlide = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_Carousel = Carousel;
      const _component_Slide = Slide;
      const _component_navigation = Navigation;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:container md:mx-auto flex flex-col sub" }, _attrs))}><div style="${ssrRenderStyle({ "position": "sticky", "top": "0", "z-index": "1000", "background-color": "white" })}"><div class="flex flex-col px-5 shadow-sm">`);
      _push(ssrRenderComponent(Menu, { title: "product" }, null, _parent));
      _push(`<hr style="${ssrRenderStyle({ "height": "4px", "background-color": "#ccc", "margin-top": "-4px" })}"></div><div class="flex flex-col items-center justify-center bg-white shadow-md rounded-bl-3xl rounded-br-3xl pt-3 pb-4 my_white_div" style="${ssrRenderStyle({ "margin-bottom": "0px", "width": "100%", "margin-top": "40px" })}"><div class="flex mt-1" style="${ssrRenderStyle({ "width": "95%" })}"><div class="relative ml-auto">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/product-list" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-black cursor-pointer flex justify-center items-center" style="${ssrRenderStyle({ "font-size": "30px", "border": "2px solid black", "border-radius": "50%", "color": "white", "background-color": "black", "cursor": "pointer", "width": "28px", "height": "28px", "padding-top": "50%", "padding-bottom": "50%", "padding-left": "50%", "padding-right": "50%" })}"${_scopeId}> \xD7 </div>`);
          } else {
            return [
              createVNode("div", {
                class: "bg-black cursor-pointer flex justify-center items-center",
                style: { "font-size": "30px", "border": "2px solid black", "border-radius": "50%", "color": "white", "background-color": "black", "cursor": "pointer", "width": "28px", "height": "28px", "padding-top": "50%", "padding-bottom": "50%", "padding-left": "50%", "padding-right": "50%" }
              }, " \xD7 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (_ctx.scrolled) {
        _push(`<div class="dynamic_div1" style="${ssrRenderStyle({ "width": "100%", "margin-top": "-20px" })}"><div class="flex d1_child"><div style="${ssrRenderStyle({ "width": "40%" })}"><img${ssrRenderAttr("src", _imports_0)} alt="trophy" style="${ssrRenderStyle({ "height": "270px", "margin-top": "-40px" })}"></div>`);
        if (unref(dataProducts) && unref(dataProducts).product_group) {
          _push(`<div class="mt-5 flex flex-col mx-2" style="${ssrRenderStyle({ "width": "60%" })}"><div class="flex items-center justify-start gap-2" style="${ssrRenderStyle({ "margin-top": "20px" })}"><div class="flex items-center justify-center" style="${ssrRenderStyle({ "background-color": "black", "color": "white", "border-radius": "50%", "width": "36px", "height": "36px" })}"><small class="text-white text-xs" style="${ssrRenderStyle({ "font-size": "10px", "line-height": "30px" })}">NEW</small></div><div class="flex items-center justify-center" style="${ssrRenderStyle({ "background-color": "red", "color": "white", "border-radius": "50%", "width": "36px", "height": "36px" })}"><small class="text-white text-xs" style="${ssrRenderStyle({ "font-size": "10px", "line-height": "30px" })}">HOT</small></div></div><p class="paragraph-bold mt-3">${ssrInterpolate(unref(dataProducts).product_group.product_group_name)}</p><div class="flex"><div class="paragraph"><p class="paragraph_child">Color: ${ssrInterpolate(unref(dataProducts).product_group.product_group_color)}</p><p class="paragraph_child">Material: ${ssrInterpolate(unref(dataProducts).product_group.product_group_material)}</p></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!_ctx.scrolled) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Carousel, {
          "items-to-show": 1,
          snapAlign: _ctx.center,
          class: "mt-1 pt-2 w-96 carousel"
        }, {
          addons: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_navigation, null, {
                next: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_1)} class="c_next" height="50px" alt=""${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_1,
                        onClick: _ctx.nextSlide,
                        class: "c_next",
                        height: "50px",
                        alt: ""
                      }, null, 8, ["onClick"])
                    ];
                  }
                }),
                prev: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_2)} class="c_previous" alt=""${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_2,
                        onClick: _ctx.prevSlide,
                        class: "c_previous",
                        alt: ""
                      }, null, 8, ["onClick"])
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
                      src: _imports_1,
                      onClick: _ctx.nextSlide,
                      class: "c_next",
                      height: "50px",
                      alt: ""
                    }, null, 8, ["onClick"])
                  ]),
                  prev: withCtx(() => [
                    createVNode("img", {
                      src: _imports_2,
                      onClick: _ctx.prevSlide,
                      class: "c_previous",
                      alt: ""
                    }, null, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(dataSlide), (slide, index) => {
                _push2(ssrRenderComponent(_component_Slide, { key: index }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="carousel__item"${_scopeId2}><img${ssrRenderAttr("src", "https://phplaravel-996806-4363314.cloudwaysapps.com/" + slide.image_file)} alt="trophy" style="${ssrRenderStyle({ "height": "180px" })}"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "carousel__item" }, [
                          createVNode("img", {
                            src: "https://phplaravel-996806-4363314.cloudwaysapps.com/" + slide.image_file,
                            alt: "trophy",
                            style: { "height": "180px" }
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(dataSlide), (slide, index) => {
                  return openBlock(), createBlock(_component_Slide, { key: index }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "carousel__item" }, [
                        createVNode("img", {
                          src: "https://phplaravel-996806-4363314.cloudwaysapps.com/" + slide.image_file,
                          alt: "trophy",
                          style: { "height": "180px" }
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
        if (!_ctx.scrolled) {
          _push(`<div class="dots-container"><!--[-->`);
          ssrRenderList(unref(dataSlide), (slide, index) => {
            _push(`<span class="${ssrRenderClass([{ active: index === _ctx.currentSlide }, "dot"])}"></span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (!_ctx.scrolled && unref(dataProducts) && unref(dataProducts).product_group) {
        _push(`<div class="flex flex-col justify-start dynamic_div2 mx-5"><p class="paragraph-bold mt-5">${ssrInterpolate(unref(dataProducts).product_group.product_group_name)}</p><div class="flex"><div class="mt-2"><p class="paragraph_child">Color: ${ssrInterpolate(unref(dataProducts).product_group.product_group_color)}</p><p class="paragraph_child pt-1">Material: ${ssrInterpolate(unref(dataProducts).product_group.product_group_material)}</p><p class="paragraph_child pt-1 w-[125%]"> This trophy is made with metal and ABS chromed in Gold and Silver in 3 sizes. </p></div><div class="flex items-center justify-end gap-2" style="${ssrRenderStyle({ "margin-top": "-60px" })}"><div class="flex items-center justify-center" style="${ssrRenderStyle({ "background-color": "black", "color": "white", "border-radius": "50%", "width": "36px", "height": "36px" })}"><small class="text-white text-xs" style="${ssrRenderStyle({ "font-size": "10px", "line-height": "30px" })}">NEW</small></div><div class="flex items-center justify-center" style="${ssrRenderStyle({ "background-color": "red", "color": "white", "border-radius": "50%", "width": "36px", "height": "36px" })}"><small class="text-white text-xs" style="${ssrRenderStyle({ "font-size": "10px", "line-height": "30px" })}">HOT</small></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(dataProducts) && unref(dataProducts).product_group) {
        _push(`<div><table style="${ssrRenderStyle({ "width": "90%", "margin-left": "20px", "margin-right": "20px", "margin-top": "10px" })}"><thead><tr style="${ssrRenderStyle({ "background-color": "#e7e7e7", "height": "29px", "border-radius": "23px", "filter": "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25))" })}"><th style="${ssrRenderStyle({ "width": "75%", "color": "#000000", "text-align": "left", "padding-left": "8px", "font-size": "14px", "font-family": "'Roboto', sans-serif", "letter-spacing": "1px", "line-height": "auto", "border-style": "hidden", "outline": "none" })}"> Code: ${ssrInterpolate(unref(dataProducts).product_group.product_group_sku)}</th><th style="${ssrRenderStyle({ "width": "25%", "color": "#000000", "text-align": "right", "font-size": "14px", "font-family": "'Roboto', sans-serif", "letter-spacing": "1px", "line-height": "auto", "border-style": "hidden", "outline": "none" })}"> Unit Price </th></tr></thead><tbody><tr><td><small class="table_data flex"><span>${ssrInterpolate(unref(dataProducts).product_abc_size)} \xA0</span> \xA0 <span> H${ssrInterpolate(unref(dataProducts).product_height)}mm W${ssrInterpolate(unref(dataProducts).product_width)}mm D${ssrInterpolate(unref(dataProducts).product_diameter)}mm (${ssrInterpolate(unref(dataProducts).product_color)})</span></small></td><td style="${ssrRenderStyle({ "padding-top": "10px", "text-align": "right" })}"><small class="table_data2" style="${ssrRenderStyle({ "display": "inline-block", "vertical-align": "top" })}"> RM${ssrInterpolate(unref(dataProducts).product_sale_price)} <br><span class="table_data3" style="${ssrRenderStyle({ "display": "inline-block", "vertical-align": "top" })}"> RM${ssrInterpolate(unref(dataProducts).product_regular_price)}</span></small></td></tr></tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CiEbaznv.mjs.map
