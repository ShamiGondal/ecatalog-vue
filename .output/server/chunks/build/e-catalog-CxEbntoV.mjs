import { Carousel, Slide, Navigation } from 'vue3-carousel/dist/carousel.es.js';
import { ref, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { M as Menu, F as Footer } from './Footer-CJzcZJHs.mjs';
import { useRoute, useRouter } from 'vue-router';
import { c as useNuxtApp } from './server.mjs';
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
  __name: "e-catalog",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp().$axios;
    const route = useRoute();
    useRouter();
    route.params.name;
    ref("");
    const dataEcatalog = ref([]);
    const selectedEcatalog = ref(null);
    ref([]);
    const loading = ref(true);
    const selectEcatalog = (ecatalog) => {
      selectedEcatalog.value = ecatalog;
    };
    const computedItemsToShow = computed(() => {
      return Math.min(dataEcatalog.value.length, 3);
    });
    const shouldWrapAround = computed(() => {
      return dataEcatalog.value.length > computedItemsToShow.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Carousel = Carousel;
      const _component_Slide = Slide;
      const _component_Navigation = Navigation;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:container md:mx-auto flex flex-col sub" }, _attrs))}><div style="${ssrRenderStyle({ "height": "90vh" })}">`);
      _push(ssrRenderComponent(Menu, { title: "ecatalog" }, null, _parent));
      _push(`<div class="flex flex-col justify-center items-center bg-white shadow-xl rounded-bl-3xl rounded-br-3xl pb-4"><p class="title uppercase">AWARDS FOR CHAMPIONS</p>`);
      if (selectedEcatalog.value && selectedEcatalog.value.ecatalog_file) {
        _push(`<iframe${ssrRenderAttr(
          "src",
          "https://admin.ecatalog.cloud/" + selectedEcatalog.value.ecatalog_file
        )} style="${ssrRenderStyle({ "width": "360px", "height": "50vh" })}" frameborder="0" class="mt-2" scroll="no" allowfullscreen></iframe>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedEcatalog.value && selectedEcatalog.value.ecatalog_file) {
        _push(`<a${ssrRenderAttr(
          "href",
          "https://admin.ecatalog.cloud/" + selectedEcatalog.value.ecatalog_file
        )} download="Ecatalog" target="blank" class="button-download"> Download </a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Carousel, {
        "items-to-show": unref(computedItemsToShow),
        itemsToScroll: 1,
        "wrap-around": unref(shouldWrapAround),
        class: "mt-6 mx-auto w-80 my_crousel"
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
            ssrRenderList(dataEcatalog.value, (slide, index) => {
              _push2(ssrRenderComponent(_component_Slide, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="carousel__item mb-6"${_scopeId2}><img${ssrRenderAttr(
                      "src",
                      "https://admin.ecatalog.cloud/" + slide.ecatalog_thumbnail
                    )} alt="trophy" class="h-24"${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "carousel__item mb-6",
                        onClick: ($event) => selectEcatalog(slide)
                      }, [
                        createVNode("img", {
                          src: "https://admin.ecatalog.cloud/" + slide.ecatalog_thumbnail,
                          alt: "trophy",
                          class: "h-24"
                        }, null, 8, ["src"])
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(dataEcatalog.value, (slide, index) => {
                return openBlock(), createBlock(_component_Slide, { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "carousel__item mb-6",
                      onClick: ($event) => selectEcatalog(slide)
                    }, [
                      createVNode("img", {
                        src: "https://admin.ecatalog.cloud/" + slide.ecatalog_thumbnail,
                        alt: "trophy",
                        class: "h-24"
                      }, null, 8, ["src"])
                    ], 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!loading.value && dataEcatalog.value.length == 0) {
        _push(`<h4 class="title items-center flex justify-center mt-[50%]"> No Catalog\xA0Available </h4>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[name]/e-catalog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=e-catalog-CxEbntoV.mjs.map
