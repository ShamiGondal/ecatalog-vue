import { _ as _export_sfc, c as useNuxtApp } from './server.mjs';
import { useSSRContext, ref, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './metal-trophy-CVa-n-yl.mjs';
import { B as Banner, C as Company, F as Filter } from './Filter-DZnQVLXs.mjs';
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
import 'vue-router';
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
  __name: "index2",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp().$axios;
    const SubCategories = ref([]);
    const categories = ref([]);
    const activeItem = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:container md:mx-auto flex flex-col h-[100vh] sub" }, _attrs))} data-v-e9a5c4c3><div class="flex flex-col px-5" data-v-e9a5c4c3>`);
      _push(ssrRenderComponent(Menu, { title: "product" }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle({ "margin-top": "30px" })}" data-v-e9a5c4c3>`);
      _push(ssrRenderComponent(Banner, { title: "product" }, null, _parent));
      _push(`</div><div class="flex flex-col mt-4" data-v-e9a5c4c3>`);
      _push(ssrRenderComponent(Company, {
        class: "mx-5 pb-2",
        description: "We are one of the largest trophy suppliers in Selangor we provide one-stop solutions for all the needs of trophies and awards.",
        title: "product"
      }, null, _parent));
      _push(`<div id="stikcy_filters" style="${ssrRenderStyle({ "position": "sticky", "top": "0", "background": "white", "transition": "padding-top 0.3s ease", "margin-top": "-5px" })}" data-v-e9a5c4c3>`);
      if (unref(SubCategories) && unref(SubCategories).length > 0) {
        _push(`<div class="filters-container" data-v-e9a5c4c3>`);
        _push(ssrRenderComponent(Filter, {
          class: "mx-5",
          onModalOpened: _ctx.toggleModal,
          subcategory_id: unref(SubCategories) && unref(SubCategories)[0].category_id ? unref(SubCategories)[0].category_id : null,
          category_id: unref(activeItem)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex ml-1 mr-2" data-v-e9a5c4c3><div class="ml-2 flex flex-col items-start w-[20%]" id="sidebar" style="${ssrRenderStyle({ "position": "sticky", "top": "0", "height": "calc(100vh - 120px)", "transition": "padding-top 0.3s ease" })}" data-v-e9a5c4c3><!--[-->`);
      ssrRenderList(unref(categories), (data, index) => {
        _push(`<div class="${ssrRenderClass([{ active: unref(activeItem) === data.category_id }, "mt-2 menu-2 curved_menu"])}" style="${ssrRenderStyle({ "border-top-right-radius": "10px" })}" data-v-e9a5c4c3><p data-v-e9a5c4c3>${ssrInterpolate(data.category_name)}</p></div>`);
      });
      _push(`<!--]--></div><div class="flex flex-wrap w-[60%] ml-12 gap-10" data-v-e9a5c4c3><!--[-->`);
      ssrRenderList(unref(SubCategories), (product, index) => {
        _push(`<div class="" data-v-e9a5c4c3>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: `/product-list?category=${unref(activeItem)}&subcategory=${product.category_id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="trophy" class="w-15" data-v-e9a5c4c3${_scopeId}><p class="menu-3" data-v-e9a5c4c3${_scopeId}>${ssrInterpolate(product.category_name)}</p>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  alt: "trophy",
                  class: "w-15"
                }),
                createVNode("p", { class: "menu-3" }, toDisplayString(product.category_name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e9a5c4c3"]]);

export { index2 as default };
//# sourceMappingURL=index2-svOWp06-.mjs.map
