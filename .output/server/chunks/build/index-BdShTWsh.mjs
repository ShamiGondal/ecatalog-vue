import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, c as useNuxtApp } from './server.mjs';
import { ref, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './metal-trophy-CVa-n-yl.mjs';
import { useRoute, useRouter } from 'vue-router';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { M as Menu, F as Footer } from './Footer-CJzcZJHs.mjs';
import { B as Banner, C as Company, F as Filter } from './Filter-DZnQVLXs.mjs';
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
import './trophy-DnAt3UlU.mjs';
import 'vue3-carousel/dist/carousel.es.js';
import '../_/slider.mjs';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@vueform/multiselect';

const _imports_1 = "" + buildAssetsURL("no-trophy-image.94h_mxn2.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const axios = useNuxtApp().$axios;
    const route = useRoute();
    const router = useRouter();
    const name = route.params.name;
    const dataSlideshows = ref([]);
    const dataMerchant = ref([]);
    const SubCategories = ref([]);
    const categories = ref([]);
    const activeItem = ref(1);
    const AboutUs = ref("About us");
    const filter_opened = ref(false);
    const handleModalOpened = (isOpen) => {
      filter_opened.value = isOpen;
      console.log("Modal opened status:", isOpen);
    };
    const fetchSubcategories = async () => {
      const url = `/ecatalog/productCategory?parentId=${activeItem.value}`;
      try {
        const response = await axios.get(url);
        SubCategories.value = response.data.list;
      } catch (error) {
        console.log(error);
        router.push("/404");
      }
    };
    const setActiveItem = (id) => {
      activeItem.value = id;
      fetchSubcategories();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto flex flex-col" }, _attrs))} data-v-36e4df57><div style="${ssrRenderStyle({ "min-height": "90vh" })}" data-v-36e4df57>`);
      _push(ssrRenderComponent(Menu, { title: "product" }, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "margin-top": "1px" })}" data-v-36e4df57>`);
      if (dataSlideshows.value && dataSlideshows.value.length > 0) {
        _push(ssrRenderComponent(Banner, {
          images: dataSlideshows.value,
          title: "product"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col mt-4" data-v-36e4df57>`);
      _push(ssrRenderComponent(Company, {
        class: "mx-5 pb-2",
        description: AboutUs.value,
        title: "product",
        image: dataMerchant.value.merchant_logo
      }, null, _parent));
      _push(`<div id="sticky_filters" style="${ssrRenderStyle({ "position": "sticky", "top": "0", "background": "white", "transition": "padding-top 0.3s ease", "margin-top": "-5px" })}" data-v-36e4df57>`);
      if (SubCategories.value && SubCategories.value.length > 0) {
        _push(`<div class="filters-container" data-v-36e4df57>`);
        _push(ssrRenderComponent(Filter, {
          class: "mx-5",
          onModalOpened: handleModalOpened,
          subcategory_id: SubCategories.value && SubCategories.value[0].category_id ? SubCategories.value[0].category_id : null,
          category_id: activeItem.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="tab-group-container rounded-lg shadow-md bg-salt p-4 mt-4 mx-5" data-v-36e4df57>`);
      _push(ssrRenderComponent(unref(TabGroup), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabList), { class: "flex p-2 space-x-5 rounded-xl overflow-x-auto" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(categories.value, (data, index2) => {
                    _push3(ssrRenderComponent(unref(Tab), {
                      key: index2,
                      onClick: ($event) => setActiveItem(data.category_id),
                      class: ["w-full p-1 text-sm leading-6 font-medium rounded-lg focus:outline-none transition duration-300", {
                        "bg-gradient-to-r from-yellow-500 to-orange-500 text-white": activeItem.value === data.category_id,
                        "bg-salt text-black font-bold": activeItem.value !== data.category_id
                      }]
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(data.category_name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(data.category_name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (data, index2) => {
                      return openBlock(), createBlock(unref(Tab), {
                        key: index2,
                        onClick: ($event) => setActiveItem(data.category_id),
                        class: ["w-full p-1 text-sm leading-6 font-medium rounded-lg focus:outline-none transition duration-300", {
                          "bg-gradient-to-r from-yellow-500 to-orange-500 text-white": activeItem.value === data.category_id,
                          "bg-salt text-black font-bold": activeItem.value !== data.category_id
                        }]
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(data.category_name), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick", "class"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(TabPanels), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(categories.value, (data, index2) => {
                    _push3(ssrRenderComponent(unref(TabPanel), {
                      key: index2,
                      class: "grid grid-cols-2 gap-6 w-full mt-4 p-4 trophies-container"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (SubCategories.value && SubCategories.value.length > 0) {
                            _push4(`<!--[-->`);
                            ssrRenderList(SubCategories.value, (product, index22) => {
                              _push4(`<div class="flex flex-col items-center trophy-item" data-v-36e4df57${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_router_link, {
                                to: `/${unref(name)}/product-list?category=${activeItem.value}&subcategory=${product.category_id}`,
                                class: "text-center text-sm"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<img${ssrRenderAttr("src", _imports_0)} alt="trophy" class="w-25 mx-auto" data-v-36e4df57${_scopeId4}><p class="menu-3 truncate" data-v-36e4df57${_scopeId4}>${ssrInterpolate(product.category_name)}</p>`);
                                  } else {
                                    return [
                                      createVNode("img", {
                                        src: _imports_0,
                                        alt: "trophy",
                                        class: "w-25 mx-auto"
                                      }),
                                      createVNode("p", { class: "menu-3 truncate" }, toDisplayString(product.category_name), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div>`);
                            });
                            _push4(`<!--]-->`);
                          } else {
                            _push4(`<div class="flex flex-col items-center" data-v-36e4df57${_scopeId3}><img${ssrRenderAttr("src", _imports_1)} alt="No Trophy Found" class="w-20 mx-auto opacity-50 blur-sm" data-v-36e4df57${_scopeId3}><p class="menu-3 text-center mt-2 opacity-50" data-v-36e4df57${_scopeId3}>No Trophy Found</p></div>`);
                          }
                        } else {
                          return [
                            SubCategories.value && SubCategories.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(SubCategories.value, (product, index22) => {
                              return openBlock(), createBlock("div", {
                                key: index22,
                                class: "flex flex-col items-center trophy-item"
                              }, [
                                createVNode(_component_router_link, {
                                  to: `/${unref(name)}/product-list?category=${activeItem.value}&subcategory=${product.category_id}`,
                                  class: "text-center text-sm"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      alt: "trophy",
                                      class: "w-25 mx-auto"
                                    }),
                                    createVNode("p", { class: "menu-3 truncate" }, toDisplayString(product.category_name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]);
                            }), 128)) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "flex flex-col items-center"
                            }, [
                              createVNode("img", {
                                src: _imports_1,
                                alt: "No Trophy Found",
                                class: "w-20 mx-auto opacity-50 blur-sm"
                              }),
                              createVNode("p", { class: "menu-3 text-center mt-2 opacity-50" }, "No Trophy Found")
                            ]))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (data, index2) => {
                      return openBlock(), createBlock(unref(TabPanel), {
                        key: index2,
                        class: "grid grid-cols-2 gap-6 w-full mt-4 p-4 trophies-container"
                      }, {
                        default: withCtx(() => [
                          SubCategories.value && SubCategories.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(SubCategories.value, (product, index22) => {
                            return openBlock(), createBlock("div", {
                              key: index22,
                              class: "flex flex-col items-center trophy-item"
                            }, [
                              createVNode(_component_router_link, {
                                to: `/${unref(name)}/product-list?category=${activeItem.value}&subcategory=${product.category_id}`,
                                class: "text-center text-sm"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    alt: "trophy",
                                    class: "w-25 mx-auto"
                                  }),
                                  createVNode("p", { class: "menu-3 truncate" }, toDisplayString(product.category_name), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]);
                          }), 128)) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "flex flex-col items-center"
                          }, [
                            createVNode("img", {
                              src: _imports_1,
                              alt: "No Trophy Found",
                              class: "w-20 mx-auto opacity-50 blur-sm"
                            }),
                            createVNode("p", { class: "menu-3 text-center mt-2 opacity-50" }, "No Trophy Found")
                          ]))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TabList), { class: "flex p-2 space-x-5 rounded-xl overflow-x-auto" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (data, index2) => {
                    return openBlock(), createBlock(unref(Tab), {
                      key: index2,
                      onClick: ($event) => setActiveItem(data.category_id),
                      class: ["w-full p-1 text-sm leading-6 font-medium rounded-lg focus:outline-none transition duration-300", {
                        "bg-gradient-to-r from-yellow-500 to-orange-500 text-white": activeItem.value === data.category_id,
                        "bg-salt text-black font-bold": activeItem.value !== data.category_id
                      }]
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(data.category_name), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick", "class"]);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(unref(TabPanels), null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (data, index2) => {
                    return openBlock(), createBlock(unref(TabPanel), {
                      key: index2,
                      class: "grid grid-cols-2 gap-6 w-full mt-4 p-4 trophies-container"
                    }, {
                      default: withCtx(() => [
                        SubCategories.value && SubCategories.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(SubCategories.value, (product, index22) => {
                          return openBlock(), createBlock("div", {
                            key: index22,
                            class: "flex flex-col items-center trophy-item"
                          }, [
                            createVNode(_component_router_link, {
                              to: `/${unref(name)}/product-list?category=${activeItem.value}&subcategory=${product.category_id}`,
                              class: "text-center text-sm"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _imports_0,
                                  alt: "trophy",
                                  class: "w-25 mx-auto"
                                }),
                                createVNode("p", { class: "menu-3 truncate" }, toDisplayString(product.category_name), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]);
                        }), 128)) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "flex flex-col items-center"
                        }, [
                          createVNode("img", {
                            src: _imports_1,
                            alt: "No Trophy Found",
                            class: "w-20 mx-auto opacity-50 blur-sm"
                          }),
                          createVNode("p", { class: "menu-3 text-center mt-2 opacity-50" }, "No Trophy Found")
                        ]))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(Footer, { merchant: dataMerchant.value }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[name]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-36e4df57"]]);

export { index as default };
//# sourceMappingURL=index-BdShTWsh.mjs.map
