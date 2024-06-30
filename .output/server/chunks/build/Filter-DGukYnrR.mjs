import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { Carousel, Slide, Navigation } from 'vue3-carousel/dist/carousel.es.js';
import { useSSRContext, watch, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, resolveComponent, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { _ as _imports_1$1, a as _imports_2, m } from '../_/slider.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as _imports_0$1 } from './trophy-rCr4yt1u.mjs';
import Multiselect from '@vueform/multiselect';

const __default__ = {
  data() {
    return {
      googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6653662204766!2d101.6868533141574!3d3.1390037976981394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc360e3b68333d%3A0x44fc9748b741a688!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2s!4v1619001326925!5m2!1sen!2s",
      currentSlide: 0,
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % 4;
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + 4) % 4;
      }
    };
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Banner",
  __ssrInlineRender: true,
  props: {
    images: Object
  },
  setup(__props) {
    const props = __props;
    watch(() => props.images, (newValue, oldValue) => {
      console.log("images prop changed:", newValue, oldValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Carousel = Carousel;
      const _component_Slide = Slide;
      const _component_navigation = Navigation;
      if (__props.title === "contact") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-ed7deeb3><iframe width="100%" height="300" frameborder="0" style="${ssrRenderStyle({ "border": "0" })}"${ssrRenderAttr("src", _ctx.googleMapEmbedUrl)} allowfullscreen aria-hidden="false" tabindex="0" data-v-ed7deeb3></iframe></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ style: { "position": "relative" } }, _attrs))} data-v-ed7deeb3>`);
        if (props.images && props.images.length > 0) {
          _push(ssrRenderComponent(_component_Carousel, {
            "items-to-show": 1,
            snapAlign: _ctx.center,
            class: "mt-1 pt-2 w-96 carousel",
            style: { "overflow": "hidden", "width": "100%", "position": "relative" }
          }, {
            addons: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_navigation, null, {
                  next: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", _imports_1$1)} class="c_next" alt="" data-v-ed7deeb3${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: _imports_1$1,
                          onClick: _ctx.nextSlide,
                          class: "c_next",
                          alt: ""
                        }, null, 8, ["onClick"])
                      ];
                    }
                  }),
                  prev: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", _imports_2)} class="c_previous" alt="" data-v-ed7deeb3${_scopeId2}>`);
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
                        src: _imports_1$1,
                        onClick: _ctx.nextSlide,
                        class: "c_next",
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
                ssrRenderList(props.images, (image, index) => {
                  _push2(ssrRenderComponent(_component_Slide, { key: index }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="carousel__item" data-v-ed7deeb3${_scopeId2}><img${ssrRenderAttr("src", "https://phplaravel-996806-4363314.cloudwaysapps.com/" + image.slideshow_image)} alt="trophy" style="${ssrRenderStyle({ "height": "220px" })}" data-v-ed7deeb3${_scopeId2}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "carousel__item" }, [
                            createVNode("img", {
                              src: "https://phplaravel-996806-4363314.cloudwaysapps.com/" + image.slideshow_image,
                              alt: "trophy",
                              style: { "height": "220px" }
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
                        createVNode("div", { class: "carousel__item" }, [
                          createVNode("img", {
                            src: "https://phplaravel-996806-4363314.cloudwaysapps.com/" + image.slideshow_image,
                            alt: "trophy",
                            style: { "height": "220px" }
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
        _push(`<div class="dots-container" style="${ssrRenderStyle({ "position": "absolute", "bottom": "20px", "left": "50%", "transform": "translateX(-50%)" })}" data-v-ed7deeb3><!--[-->`);
        ssrRenderList(4, (slide, index) => {
          _push(`<span class="${ssrRenderClass([{ active: index === _ctx.currentSlide }, "dot"])}" data-v-ed7deeb3></span>`);
        });
        _push(`<!--]--></div></div>`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ed7deeb3"]]);
const _sfc_main$1 = {
  __name: "Company",
  __ssrInlineRender: true,
  props: {
    description: String,
    title: String,
    customPaddingTop: {
      type: String,
      default: "0"
      // Default padding-top value
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-5" }, _attrs))} data-v-48e71d13><p class="title sub_p mb-2" data-v-48e71d13>ONE AWARD</p><p class="${ssrRenderClass({
        "active-menu": __props.title != "product"
      })}" data-v-48e71d13></p><div class="flex" data-v-48e71d13><p class="paragraph" style="${ssrRenderStyle({ paddingTop: __props.customPaddingTop })}" data-v-48e71d13>${ssrInterpolate(props.description)} <br data-v-48e71d13>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/about-us" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span style="${ssrRenderStyle({ "text-decoration": "underline" })}" data-v-48e71d13${_scopeId}>Read more</span>. `);
          } else {
            return [
              createVNode("span", { style: { "text-decoration": "underline" } }, "Read more"),
              createTextVNode(". ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><img${ssrRenderAttr("src", _imports_0$1)} style="${ssrRenderStyle({ "margin-top": "-30px", "width": "70px" })}" alt="trophy" data-v-48e71d13></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Company.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Company = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-48e71d13"]]);
const _imports_0 = "" + buildAssetsURL("Menu.DAtNP8UH.svg");
const _imports_1 = "" + buildAssetsURL("List.DprmyAEC.svg");
const _sfc_main = {
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
      default: "Select Colors"
    },
    categoryplaceholder: {
      type: String,
      default: "Select Categories"
    },
    materialplaceholder: {
      type: String,
      default: "Select Materials"
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
      selectedcolors: this.colorvalue,
      iscategoryOpen: false,
      selectedcategories: this.categoryvalue,
      ismaterialOpen: false,
      selectedmaterials: this.materialvalue,
      showNew: false,
      showHot: false
    };
  },
  methods: {
    reset() {
      this.price = [300, 700];
      this.height = [300, 700];
      this.selectedcategories = [];
      this.selectedcolors = [];
      this.selectedmaterials = [];
      this.showNew = false;
      this.showHot = false;
    },
    formatPrice(price) {
      return price.toLocaleString("en-US", { minimumFractionDigits: 2 });
    },
    formatheight(height) {
      return height.toLocaleString("en-US", { minimumFractionDigits: 2 });
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
        { label: "Silver", value: "Silver" },
        { label: "Gold", value: "Gold" },
        { label: "Bronze", value: "Bronze" }
      ];
    },
    colorOptions() {
      return [
        { label: "Silver", value: "Silver" },
        { label: "Gold", value: "Gold" },
        { label: "Bronze", value: "Bronze" },
        { label: "Gold red", value: "Red" }
      ];
    },
    materialOptions() {
      return [
        { label: "Wood", value: "Wood" },
        { label: "Metal", value: "Metal" },
        { label: "Plastic", value: "Plastic" },
        { label: "Glass", value: "Glass" },
        { label: "Ceramic", value: "Ceramic" }
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
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_Slider = resolveComponent("Slider");
  _push(`<!--[--><div class="flex items-center justify-between mt-3 px-3 pb-2"><input type="text" class="border-2 border-gray-300 rounded-full W-[100%] pl-3 py-1 search" placeholder="Search by code or name"><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
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
  _push(ssrRenderComponent(_component_router_link, { to: "/product-list" }, {
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
  if ($data.isModalOpen) {
    _push(`<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" id="modal" style="${ssrRenderStyle({ "z-index": "9999999 !important" })}"><div class="bg-white rounded-lg p-4 max-w-sm"><button class="top-0 text-gray-600" style="${ssrRenderStyle({ "float": "right", "font-size": "30px", "margin-top": "-20px" })}"> \xD7 </button><h4 class="text-md font-semibold mb-2 product_search_title">Product Search</h4><input type="text" class="border-2 border-gray-300 rounded-full pl-3 py-1 search" style="${ssrRenderStyle({ "width": "100% !important" })}" placeholder="Search by code or name"><p class="mb-4 mt-1 filters_title"> Filter by Price </p><div class="mb-2">`);
    _push(ssrRenderComponent(_component_Slider, {
      id: "rangeSlider",
      modelValue: $data.price,
      "onUpdate:modelValue": ($event) => $data.price = $event,
      step: 1,
      ticks: true,
      dual: "",
      min: 0,
      max: 1e3,
      onChange: _ctx.fetchEventsWithFilters,
      style: { "margin-left": "5px", "margin-right": "5px" }
    }, null, _parent));
    _push(`</div><div class="flex justify-center mb-2"><div class="text-center"><small class="popup_text">Minimum Price</small> <br><input type="text" class="border-2 border-gray-100 px-2 w-1/2 popup_text" readonly${ssrRenderAttr("value", $options.formatPrice($data.price[0]))}></div><div><small class="popup_text">Maximum Price</small> <br><input type="text" class="border-2 border-gray-100 px-2 w-1/2 popup_text" readonly${ssrRenderAttr("value", $options.formatPrice($data.price[1]))}></div></div><hr><p class="mb-2 mt-3 filters_title"> Filter by Height </p><div class="mb-2">`);
    _push(ssrRenderComponent(_component_Slider, {
      id: "heightSlider",
      modelValue: $data.height,
      "onUpdate:modelValue": ($event) => $data.height = $event,
      step: 1,
      ticks: true,
      dual: "",
      min: 0,
      max: 1e3,
      style: { "margin-left": "5px", "margin-right": "5px" }
    }, null, _parent));
    _push(`</div><div class="flex justify-center mb-2"><div class="text-center"><small class="popup_text">Minimum Height</small> <br><input type="text" class="border-2 border-gray-100 px-2 w-1/2 popup_text" readonly${ssrRenderAttr("value", $options.formatheight($data.height[0]))}></div><div><small class="popup_text">Maximum Height</small> <br><input type="text" class="border-2 border-gray-100 px-2 w-1/2 popup_text" readonly${ssrRenderAttr("value", $options.formatheight($data.height[1]))}></div></div><hr><div class="flex items-center mb-2 mt-2"><label class="mr-2 popup_checkbox">Show only:</label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.showNew) ? ssrLooseContain($data.showNew, null) : $data.showNew) ? " checked" : ""} id="newCheckbox" class="popup_checkbox"><label for="newCheckbox" class="mr-4 ml-1 popup_checkbox">New</label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.showHot) ? ssrLooseContain($data.showHot, null) : $data.showHot) ? " checked" : ""} id="hotCheckbox" class="popup_checkbox"><label for="hotCheckbox" class="ml-1 popup_checkbox">Hot</label></div><hr><div class="mb-4"><div class="custom-select"><div class="selected">${ssrInterpolate($options.selectedcategoryOptions || $props.categoryplaceholder)} <i class="${ssrRenderClass([{ "open": $data.iscategoryOpen }, "dropdown-icon"])}">\u25BC</i></div>`);
    if ($data.iscategoryOpen) {
      _push(`<div class="dropdown"><!--[-->`);
      ssrRenderList($options.categoryOptions, (option) => {
        _push(`<label class="checkbox"><input type="checkbox"${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(Array.isArray($data.selectedcategories) ? ssrLooseContain($data.selectedcategories, option.value) : $data.selectedcategories) ? " checked" : ""} class="popup_checkbox2"> ${ssrInterpolate(option.label)}</label>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div><div class="mb-4"><div class="custom-select"><div class="selected">${ssrInterpolate($options.selectedmaterialOptions || $props.materialplaceholder)} <i class="${ssrRenderClass([{ "open": $data.ismaterialOpen }, "dropdown-icon"])}">\u25BC</i></div>`);
    if ($data.ismaterialOpen) {
      _push(`<div class="dropdown"><!--[-->`);
      ssrRenderList($options.materialOptions, (option) => {
        _push(`<label class="checkbox"><input type="checkbox"${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(Array.isArray($data.selectedmaterials) ? ssrLooseContain($data.selectedmaterials, option.value) : $data.selectedmaterials) ? " checked" : ""} class="popup_checkbox2"> ${ssrInterpolate(option.label)}</label>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div><div class="mb-4"><div class="custom-select"><div class="selected">${ssrInterpolate($options.selectedcolorOptions || $props.colorplaceholder)} <i class="${ssrRenderClass([{ "open": $data.iscolorOpen }, "dropdown-icon"])}">\u25BC</i></div>`);
    if ($data.iscolorOpen) {
      _push(`<div class="dropdown"><!--[-->`);
      ssrRenderList($options.colorOptions, (option) => {
        _push(`<label class="checkbox"><input type="checkbox"${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(Array.isArray($data.selectedcolors) ? ssrLooseContain($data.selectedcolors, option.value) : $data.selectedcolors) ? " checked" : ""} class="popup_checkbox2"> ${ssrInterpolate(option.label)}</label>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div><div class="flex justify-center"><button class="bg-gray-400 text-white py-1 px-4 rounded mr-2" style="${ssrRenderStyle({ "width": "40%", "border-radius": "23px", "background-color": "transparent", "color": "black", "border": "1px solid black", "font-size": "14px" })}"> Reset </button><button class="bg-blue-500 text-white py-1 px-4 rounded" style="${ssrRenderStyle({ "background-color": "black", "width": "40%", "border-radius": "23px", "font-size": "14px" })}"> Search </button></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Filter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Banner as B, Company as C, Filter as F };
//# sourceMappingURL=Filter-DGukYnrR.mjs.map
