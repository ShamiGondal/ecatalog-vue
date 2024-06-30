import { c as useNuxtApp } from './server.mjs';
import { ref, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
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
      activeItem: ""
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
  __name: "[name]",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp().$axios;
    const route = useRoute();
    useRouter();
    route.params.name;
    const dataProducts = ref([]);
    const dataSlideshows = ref([]);
    const dataMerchant = ref([]);
    let uniqueCategories = [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:container md:mx-auto flex flex-col h-[100vh] sub" }, _attrs))}><div class="flex flex-col px-5">`);
      _push(ssrRenderComponent(Menu, { title: "product" }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle({ "margin-top": "30px" })}">`);
      if (unref(dataSlideshows) && unref(dataSlideshows).length > 0) {
        _push(ssrRenderComponent(Banner, {
          images: unref(dataSlideshows),
          title: "product"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col mt-4">`);
      _push(ssrRenderComponent(Company, {
        class: "mx-5 pb-2",
        description: "We are one of the largest trophy suppliers in Selangor we provide one-stop solutions for all the needs of trophies and awards.",
        title: "product"
      }, null, _parent));
      _push(`<div id="stikcy_filters" style="${ssrRenderStyle({ "position": "sticky", "top": "0", "background": "white", "transition": "padding-top 0.3s ease", "margin-top": "-5px", "z-index": "9999999 !important" })}"><div class="filters-container">`);
      _push(ssrRenderComponent(Filter, {
        class: "mx-5",
        onModalOpened: _ctx.toggleModal
      }, null, _parent));
      _push(`</div></div><div class="flex ml-3">`);
      if (unref(uniqueCategories)) {
        _push(`<div class="flex flex-col items-start w-[20%] h-[101%]" id="sidebar" style="${ssrRenderStyle({ "position": "sticky", "top": "0", "height": "calc(100vh - 120px)", "transition": "padding-top 0.3s ease" })}"><!--[-->`);
        ssrRenderList(unref(uniqueCategories), (data, index) => {
          _push(`<div class="${ssrRenderClass([{ "active": _ctx.activeItem === data }, "menu-2"])}" style="${ssrRenderStyle(index == 0 ? "margin-top: 1rem;" : "")}"><p>${ssrInterpolate(data)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-wrap items-center justify-center w-[60%] ml-12 gap-4 mt-4"><!--[-->`);
      ssrRenderList(unref(dataProducts), (product, index) => {
        _push(`<div class="flex flex-col items-center justify-center">`);
        _push(ssrRenderComponent(_component_router_link, {
          to: "/product/" + product.product_id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", "https://phplaravel-996806-4363314.cloudwaysapps.com/" + product.product_image)} alt="trophy" class="w-15"${_scopeId}><p class="menu-3"${_scopeId}>${ssrInterpolate(product.product_group.product_group_name)}</p>`);
            } else {
              return [
                createVNode("img", {
                  src: "https://phplaravel-996806-4363314.cloudwaysapps.com/" + product.product_image,
                  alt: "trophy",
                  class: "w-15"
                }, null, 8, ["src"]),
                createVNode("p", { class: "menu-3" }, toDisplayString(product.product_group.product_group_name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
      _push(ssrRenderComponent(Footer, { merchant: unref(dataMerchant) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_name_-C9UtnGyy.mjs.map
