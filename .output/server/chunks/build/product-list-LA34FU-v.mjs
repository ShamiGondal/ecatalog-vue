import { _ as _export_sfc, c as useNuxtApp } from './server.mjs';
import { useSSRContext, ref, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { B as Banner, C as Company, F as Filter } from './Filter-DGukYnrR.mjs';
import { M as Menu, F as Footer } from './Footer-DqgBxSIP.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'vue3-carousel/dist/carousel.es.js';
import '../_/slider.mjs';
import './trophy-rCr4yt1u.mjs';
import '@vueform/multiselect';

const __default__ = {
  data() {
    return {
      activeItem: "METAL CUP TROPHY"
    };
  },
  methods: {
    setActiveItem(name) {
      this.activeItem = name;
    }
  },
  mounted() {
    const sidebar = (void 0).getElementById("sidebar");
    const filetrsbar = (void 0).getElementById("stikcy_filters");
    (void 0).addEventListener("scroll", function() {
      const scrollY = (void 0).scrollY;
      if (scrollY >= 400) {
        sidebar.style.paddingTop = "80px";
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
    useNuxtApp().$axios;
    const dataProducts = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:container md:mx-auto flex flex-col h-[100vh] sub" }, _attrs))} data-v-eb095b8d><div class="flex flex-col px-5" data-v-eb095b8d>`);
      _push(ssrRenderComponent(Menu, { title: "product" }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle({ "margin-top": "30px" })}" data-v-eb095b8d>`);
      _push(ssrRenderComponent(Banner, { title: "product" }, null, _parent));
      _push(`</div><div class="flex flex-col mt-4" data-v-eb095b8d>`);
      _push(ssrRenderComponent(Company, {
        class: "mx-5 pb-2",
        description: "We are one of the largest trophy suppliers in Selangor we provide one-stop solutions for all the needs of trophies and awards.",
        title: "product"
      }, null, _parent));
      _push(`<div id="stikcy_filters" style="${ssrRenderStyle({ "position": "sticky", "top": "0", "background": "white", "transition": "padding-top 0.3s ease", "margin-top": "-5px" })}" data-v-eb095b8d><div class="filters-container" data-v-eb095b8d>`);
      _push(ssrRenderComponent(Filter, {
        class: "mx-5",
        onModalOpened: _ctx.toggleModal
      }, null, _parent));
      _push(`</div></div><div class="flex ml-1 mr-2" data-v-eb095b8d><div class="ml-2 flex flex-col items-start w-[20%]" id="sidebar" style="${ssrRenderStyle({ "position": "sticky", "top": "0", "height": "calc(100vh - 120px)", "transition": "padding-top 0.3s ease" })}" data-v-eb095b8d><div class="${ssrRenderClass([{ active: _ctx.activeItem === "SCULPTURE TROPHY" }, "mt-4 menu-2 curved_menu"])}" style="${ssrRenderStyle({ "border-top-right-radius": "10px" })}" data-v-eb095b8d><p data-v-eb095b8d>SCULPTURE TROPHY</p></div><div class="${ssrRenderClass([{ active: _ctx.activeItem === "METAL CUP TROPHY" }, "menu-2"])}" data-v-eb095b8d><p data-v-eb095b8d>METAL CUP TROPHY</p></div><div class="${ssrRenderClass([{ active: _ctx.activeItem === "ECONOMY TROPHY" }, "menu-2"])}" data-v-eb095b8d><p data-v-eb095b8d>ECONOMY TROPHY</p></div><div class="${ssrRenderClass([{ active: _ctx.activeItem === "METAL MEDAL" }, "menu-2"])}" data-v-eb095b8d><p data-v-eb095b8d>METAL MEDAL</p></div><div class="${ssrRenderClass([{ active: _ctx.activeItem === "PLASTIC MEDAL" }, "menu-2"])}" data-v-eb095b8d><p data-v-eb095b8d>PLASTIC MEDAL</p></div><div class="${ssrRenderClass([{ active: _ctx.activeItem === "PREMIUM GIFTS" }, "menu-2"])}" data-v-eb095b8d><p data-v-eb095b8d>PREMIUM GIFTS</p></div></div><div class="pt-7" style="${ssrRenderStyle({ "overflow-y": "auto" })}" data-v-eb095b8d><!--[-->`);
      ssrRenderList(unref(dataProducts), (product, index) => {
        _push(ssrRenderComponent(_component_router_link, {
          key: index,
          to: "/product/" + product.product_id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex p-0 pt-2" style="${ssrRenderStyle({ "margin-left": "8%", "align-items": "center" })}" data-v-eb095b8d${_scopeId}><div class="w-30" style="${ssrRenderStyle({ "margin-top": "-2%" })}" data-v-eb095b8d${_scopeId}><img${ssrRenderAttr("src", "https://phplaravel-996806-4363314.cloudwaysapps.com/" + product.product_image)} class="w-15" alt="Image" data-v-eb095b8d${_scopeId}></div><div class="w-70" style="${ssrRenderStyle({ "margin-top": "-4%" })}" data-v-eb095b8d${_scopeId}><p class="intro_1" data-v-eb095b8d${_scopeId}>${ssrInterpolate(product.product_group.product_group_name)}</p><p class="intro_2" data-v-eb095b8d${_scopeId}>H${ssrInterpolate(product.product_height)}mm | ${ssrInterpolate(product.product_group.product_group_color)}</p><p class="intro_3" data-v-eb095b8d${_scopeId}>RM${ssrInterpolate(product.product_sale_price)}</p></div></div><hr class="h-px bg-gray-300 my-3" style="${ssrRenderStyle({ "margin-left": "30px" })}" data-v-eb095b8d${_scopeId}>`);
            } else {
              return [
                createVNode("div", {
                  class: "flex p-0 pt-2",
                  style: { "margin-left": "8%", "align-items": "center" }
                }, [
                  createVNode("div", {
                    class: "w-30",
                    style: { "margin-top": "-2%" }
                  }, [
                    createVNode("img", {
                      src: "https://phplaravel-996806-4363314.cloudwaysapps.com/" + product.product_image,
                      class: "w-15",
                      alt: "Image"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("div", {
                    class: "w-70",
                    style: { "margin-top": "-4%" }
                  }, [
                    createVNode("p", { class: "intro_1" }, toDisplayString(product.product_group.product_group_name), 1),
                    createVNode("p", { class: "intro_2" }, "H" + toDisplayString(product.product_height) + "mm | " + toDisplayString(product.product_group.product_group_color), 1),
                    createVNode("p", { class: "intro_3" }, "RM" + toDisplayString(product.product_sale_price), 1)
                  ])
                ]),
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
      _push(`<!--]--></div></div></div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const productList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eb095b8d"]]);

export { productList as default };
//# sourceMappingURL=product-list-LA34FU-v.mjs.map
