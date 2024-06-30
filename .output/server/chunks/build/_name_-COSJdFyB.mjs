import { Carousel, Slide, Navigation } from 'vue3-carousel/dist/carousel.es.js';
import { c as useNuxtApp } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { M as Menu, F as Footer } from './Footer-DqgBxSIP.mjs';
import { useRoute, useRouter } from 'vue-router';
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

const _sfc_main = {
  __name: "[name]",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp().$axios;
    const route = useRoute();
    useRouter();
    route.params.name;
    const dataEcatalog = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Carousel = Carousel;
      const _component_Slide = Slide;
      const _component_Navigation = Navigation;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:container md:mx-auto flex flex-col h-[100vh] sub" }, _attrs))}><div class="flex flex-col px-5 mb-2" style="${ssrRenderStyle({ "position": "sticky", "top": "0", "z-index": "100", "background": "white" })}">`);
      _push(ssrRenderComponent(Menu, { title: "ecatalog" }, null, _parent));
      _push(`<hr style="${ssrRenderStyle({ "height": "4px", "background-color": "#ccc", "margin-top": "-4px" })}"></div><div class="flex flex-col justify-center items-center bg-white shadow-xl rounded-bl-3xl rounded-br-3xl pb-4"><p class="title uppercase">AWARDS FOR CHAMPIONS</p>`);
      if (unref(dataEcatalog)[0] && unref(dataEcatalog)[0].ecatalog_file) {
        _push(`<iframe${ssrRenderAttr("src", "https://phplaravel-996806-4363314.cloudwaysapps.com/" + unref(dataEcatalog)[0].ecatalog_file)} style="${ssrRenderStyle({ "width": "360px", "height": "500px" })}" frameborder="0" class="mt-2" allowfullscreen></iframe>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(dataEcatalog)[0] && unref(dataEcatalog)[0].ecatalog_file) {
        _push(`<a${ssrRenderAttr("href", "https://phplaravel-996806-4363314.cloudwaysapps.com/" + unref(dataEcatalog)[0].ecatalog_file)} download="Ecatalog" class="button-download">Download</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Carousel, {
        "items-to-show": 3,
        itemsToScroll: 1,
        "wrap-around": true,
        class: "mt-6 w-80 m-auto my_crousel"
      }, {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Navigation, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Navigation)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(dataEcatalog), (slide, index) => {
              _push2(ssrRenderComponent(_component_Slide, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="carousel__item"${_scopeId2}><img${ssrRenderAttr("src", "https://phplaravel-996806-4363314.cloudwaysapps.com/" + slide.ecatalog_thumbnail)} alt="trophy" class="h-full"${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "carousel__item" }, [
                        createVNode("img", {
                          src: "https://phplaravel-996806-4363314.cloudwaysapps.com/" + slide.ecatalog_thumbnail,
                          alt: "trophy",
                          class: "h-full"
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(dataEcatalog), (slide, index) => {
                return openBlock(), createBlock(_component_Slide, { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "carousel__item" }, [
                      createVNode("img", {
                        src: "https://phplaravel-996806-4363314.cloudwaysapps.com/" + slide.ecatalog_thumbnail,
                        alt: "trophy",
                        class: "h-full"
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
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/e-catalog/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_name_-COSJdFyB.mjs.map
