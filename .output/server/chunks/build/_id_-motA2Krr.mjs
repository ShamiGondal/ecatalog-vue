import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { Carousel, Slide, Navigation } from 'vue3-carousel/dist/carousel.es.js';
import { _ as _export_sfc, c as useNuxtApp } from './server.mjs';
import { useSSRContext, ref, resolveComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_1, a as _imports_2, m } from '../_/slider.mjs';
import { useRoute, useRouter } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Multiselect from '@vueform/multiselect';
import { M as Menu, F as Footer } from './Footer-CJzcZJHs.mjs';
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

const _imports_0 = "" + buildAssetsURL("Cup.C8fuOTcQ.svg");
const __default__ = {
  components: {
    Slider: m,
    Multiselect
  },
  data() {
    return {
      scrolled: false,
      position: []
    };
  },
  methods: {
    handleScroll() {
      const scrollPosition = (void 0).scrollY;
      const viewportHeight = (void 0).innerHeight;
      const threshold = viewportHeight * 0.4;
      if (scrollPosition > threshold && !this.scrolled && !this.scrollTimeout) {
        this.scrolled = true;
        this.scrollTimeout = setTimeout(() => {
          this.scrollTimeout = null;
        }, 1e3);
      } else if (scrollPosition < 279 && this.scrolled && !this.scrollTimeout) {
        this.scrolled = false;
        this.scrollTimeout = setTimeout(() => {
          this.scrollTimeout = null;
        }, 1e3);
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
    }
  },
  mounted() {
    (void 0).addEventListener("scroll", this.debounce(this.handleScroll, 250));
    const image_div = (void 0).getElementById("sticky_image_div");
    (void 0).addEventListener("scroll", function() {
      const scrollY = (void 0).scrollY;
      if (scrollY >= 50) {
        image_div.style.paddingTop = "40px";
      } else {
        image_div.style.paddingTop = "0";
      }
    });
  },
  destroyed() {
    (void 0).removeEventListener("scroll", this.debounce(this.handleScroll, 250));
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    library.add(faCircleXmark);
    useNuxtApp().$axios;
    const route = useRoute();
    useRouter();
    route.params.id;
    const name = route.params.name;
    const dataProducts = ref([]);
    const dataSlide = ref([]);
    const childproducts = ref([]);
    const currentSlide = ref(0);
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % dataSlide.value.length;
    };
    const prevSlide = () => {
      currentSlide.value = (currentSlide.value - 1 + dataSlide.value.length) % dataSlide.value.length;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_router_link = resolveComponent("router-link");
      const _component_Carousel = Carousel;
      const _component_Slide = Slide;
      const _component_navigation = Navigation;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:container md:mx-auto flex flex-col sub" }, _attrs))} data-v-f1664d8f><div style="${ssrRenderStyle({ "min-height": "90vh" })}" data-v-f1664d8f>`);
      _push(ssrRenderComponent(Menu, {
        title: "product",
        style: { "z-index": "1000" }
      }, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "position": "sticky", "top": "0", "background-color": "white", "z-index": "100" })}" class="transition-all duration-300" id="sticky_image_div" data-v-f1664d8f><div class="flex flex-col items-center justify-center bg-white shadow-md rounded-bl-3xl rounded-br-3xl pt-3 pb-4 my_white_div" style="${ssrRenderStyle({ "margin-bottom": "0px", "width": "100%", "margin-top": "1px" })}" data-v-f1664d8f><div class="flex mt-1" style="${ssrRenderStyle({ "width": "95%" })}" data-v-f1664d8f><div class="relative ml-auto" data-v-f1664d8f>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/" + unref(name)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
              icon: ["fas", "circle-xmark"],
              size: "2x"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FontAwesomeIcon), {
                icon: ["fas", "circle-xmark"],
                size: "2x"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (_ctx.scrolled) {
        _push(`<div class="dynamic_div1" style="${ssrRenderStyle({ "width": "100%", "margin-top": "-20px", "min-height": "180px" })}" data-v-f1664d8f><div class="flex d1_child" data-v-f1664d8f><div style="${ssrRenderStyle({ "width": "40%" })}" data-v-f1664d8f><img${ssrRenderAttr("src", _imports_0)} alt="trophy" style="${ssrRenderStyle({ "height": "270px", "margin-top": "-40px" })}" data-v-f1664d8f></div>`);
        if (unref(dataProducts)) {
          _push(`<div class="mt-5 flex flex-col mx-2" style="${ssrRenderStyle({ "width": "60%" })}" data-v-f1664d8f><div class="flex items-center justify-start gap-2" style="${ssrRenderStyle({ "margin-top": "20px" })}" data-v-f1664d8f>`);
          if (unref(dataProducts).product_group_new == 1) {
            _push(`<div class="flex items-center justify-center" style="${ssrRenderStyle({ "background-color": "black", "color": "white", "border-radius": "50%", "width": "36px", "height": "36px" })}" data-v-f1664d8f><small class="text-white text-xs" style="${ssrRenderStyle({ "font-size": "10px", "line-height": "30px" })}" data-v-f1664d8f>NEW</small></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(dataProducts).product_group_hot == 1) {
            _push(`<div class="flex items-center justify-center" style="${ssrRenderStyle({ "background-color": "red", "color": "white", "border-radius": "50%", "width": "36px", "height": "36px" })}" data-v-f1664d8f><small class="text-white text-xs" style="${ssrRenderStyle({ "font-size": "10px", "line-height": "30px" })}" data-v-f1664d8f>HOT</small></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><p class="paragraph-bold mt-3" data-v-f1664d8f>${ssrInterpolate(((_a = unref(dataProducts)) == null ? void 0 : _a.product_group_name) || "-")}</p><div class="flex" data-v-f1664d8f><div class="paragraph" data-v-f1664d8f><p class="paragraph_child" data-v-f1664d8f> Color: ${ssrInterpolate(((_b = unref(dataProducts)) == null ? void 0 : _b.product_group_color) && unref(dataProducts).product_group_color !== "" ? unref(dataProducts).product_group_color : "-")}</p><p class="paragraph_child" data-v-f1664d8f> Material: ${ssrInterpolate(((_c = unref(dataProducts)) == null ? void 0 : _c.product_group_material) && unref(dataProducts).product_group_material !== "" ? unref(dataProducts).product_group_material : "-")}</p></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!_ctx.scrolled && ((_d = unref(dataSlide)) == null ? void 0 : _d.length) > 0) {
        _push(`<div data-v-f1664d8f>`);
        _push(ssrRenderComponent(_component_Carousel, {
          "items-to-show": 1,
          snapAlign: _ctx.center,
          "wrap-around": "true",
          class: "mt-1 pt-2 w-96 carousel"
        }, {
          addons: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_navigation, null, {
                next: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_1)} class="c_next" height="50px" alt="" data-v-f1664d8f${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_1,
                        onClick: nextSlide,
                        class: "c_next",
                        height: "50px",
                        alt: ""
                      })
                    ];
                  }
                }),
                prev: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", _imports_2)} class="c_previous" alt="" data-v-f1664d8f${_scopeId2}>`);
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
                      src: _imports_1,
                      onClick: nextSlide,
                      class: "c_next",
                      height: "50px",
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
              ssrRenderList(unref(dataSlide), (slide, index) => {
                _push2(ssrRenderComponent(_component_Slide, { key: index }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="carousel__item" data-v-f1664d8f${_scopeId2}><img${ssrRenderAttr("src", "https://admin.ecatalog.cloud/uploads/ftp/" + slide)} alt="trophy" style="${ssrRenderStyle({ "height": "180px" })}" data-v-f1664d8f${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "carousel__item" }, [
                          createVNode("img", {
                            src: "https://admin.ecatalog.cloud/uploads/ftp/" + slide,
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
                          src: "https://admin.ecatalog.cloud/uploads/ftp/" + slide,
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
          _push(`<div class="dots-container" data-v-f1664d8f><!--[-->`);
          ssrRenderList(unref(dataSlide), (slide, index) => {
            _push(`<span class="${ssrRenderClass([{ active: index === unref(currentSlide) }, "dot"])}" data-v-f1664d8f></span>`);
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
      if (!_ctx.scrolled && unref(dataProducts)) {
        _push(`<div class="flex flex-col justify-start dynamic_div2 mx-5 mt-5 mb-20 pb-2" data-v-f1664d8f><div data-v-f1664d8f><p class="paragraph-bold mt-3" data-v-f1664d8f>${ssrInterpolate(((_e = unref(dataProducts)) == null ? void 0 : _e.product_group_name) || "-")}</p><div class="mt-2" data-v-f1664d8f><p class="paragraph_child" data-v-f1664d8f> Color: ${ssrInterpolate(((_f = unref(dataProducts)) == null ? void 0 : _f.product_group_color) && unref(dataProducts).product_group_color !== "" ? unref(dataProducts).product_group_color : "-")}</p><p class="paragraph_child" data-v-f1664d8f> Material: ${ssrInterpolate(((_g = unref(dataProducts)) == null ? void 0 : _g.product_group_material) && unref(dataProducts).product_group_material !== "" ? unref(dataProducts).product_group_material : "-")}</p><p class="paragraph_child pt-1 w-[100%]" data-v-f1664d8f> This medal is made with ${ssrInterpolate(unref(dataProducts).product_group_material)} and comes in ${ssrInterpolate(unref(dataProducts).product_group_color)}. </p></div><div class="flex items-center justify-end gap-2" style="${ssrRenderStyle({ "margin-top": "-80px" })}" data-v-f1664d8f>`);
        if (unref(dataProducts).product_group_new == 1) {
          _push(`<div class="flex items-center justify-center" style="${ssrRenderStyle({ "background-color": "black", "color": "white", "border-radius": "50%", "width": "36px", "height": "36px" })}" data-v-f1664d8f><small class="text-white text-xs" style="${ssrRenderStyle({ "font-size": "10px", "line-height": "30px" })}" data-v-f1664d8f>NEW</small></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(dataProducts).product_group_hot == 1) {
          _push(`<div class="flex items-center justify-center" style="${ssrRenderStyle({ "background-color": "red", "color": "white", "border-radius": "50%", "width": "36px", "height": "36px" })}" data-v-f1664d8f><small class="text-white text-xs" style="${ssrRenderStyle({ "font-size": "10px", "line-height": "30px" })}" data-v-f1664d8f>HOT</small></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(dataProducts)) {
        _push(`<div class="data_table" data-v-f1664d8f><table style="${ssrRenderStyle({ "width": "95%", "margin-left": "10px", "margin-right": "10px", "margin-top": "10px" })}" data-v-f1664d8f><thead data-v-f1664d8f><tr style="${ssrRenderStyle({ "background-color": "#e7e7e7", "height": "29px", "border-radius": "23px", "filter": "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25))" })}" data-v-f1664d8f><th style="${ssrRenderStyle({ "width": "75%", "color": "#000000", "text-align": "left", "padding-left": "8px", "font-size": "14px", "font-family": "'Roboto', sans-serif", "letter-spacing": "1px", "line-height": "auto", "border-style": "hidden", "outline": "none" })}" data-v-f1664d8f> Code: ${ssrInterpolate(((_h = unref(dataProducts)) == null ? void 0 : _h.product_group_sku) || "-")}</th><th style="${ssrRenderStyle({ "width": "25%", "color": "#000000", "text-align": "right", "font-size": "14px", "font-family": "'Roboto', sans-serif", "letter-spacing": "1px", "line-height": "auto", "border-style": "hidden", "outline": "none", "padding-right": "8px" })}" data-v-f1664d8f> Unit Price </th></tr></thead><tbody data-v-f1664d8f><!--[-->`);
        ssrRenderList(unref(childproducts), (product, index) => {
          _push(`<tr class="table_data_row" data-v-f1664d8f><td data-v-f1664d8f><small class="table_data flex" data-v-f1664d8f><span data-v-f1664d8f>${ssrInterpolate(product.product_abc_size)} \xA0</span> \xA0 <span data-v-f1664d8f> H${ssrInterpolate(product.product_height)}mm W${ssrInterpolate(product.product_width)}mm D${ssrInterpolate(product.product_diameter)}mm (${ssrInterpolate(product.product_color)})</span></small></td><td style="${ssrRenderStyle({ "padding-top": "3px", "text-align": "right" })}" data-v-f1664d8f><small class="table_data2" style="${ssrRenderStyle({ "display": "inline-block", "vertical-align": "top" })}" data-v-f1664d8f> RM${ssrInterpolate(product.product_sale_price)} <br data-v-f1664d8f><span class="table_data3" style="${ssrRenderStyle({ "display": "inline-block", "vertical-align": "top" })}" data-v-f1664d8f> RM${ssrInterpolate(product.product_regular_price)}</span></small></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[name]/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f1664d8f"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-motA2Krr.mjs.map
