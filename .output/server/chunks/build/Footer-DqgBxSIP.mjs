import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext, ref, watch, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {
  props: {
    title: String
  },
  data() {
    return {
      activeTab: ""
    };
  },
  created() {
    this.activeTab = this.title;
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "mx-1",
    style: { "position": "fixed", "z-index": "100", "background": "white", "margin-left": "-15px" }
  }, _attrs))} data-v-427f85c2><div class="flex cus-menu1" data-v-427f85c2>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="${ssrRenderClass([{ "active-menu": $data.activeTab === "product" }, "menu"])}" data-v-427f85c2${_scopeId}> Product </p>`);
      } else {
        return [
          createVNode("p", {
            class: ["menu", { "active-menu": $data.activeTab === "product" }],
            onClick: ($event) => $options.setActiveTab("product")
          }, " Product ", 10, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/e-catalog/" + _ctx.$route.params.name
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="${ssrRenderClass([{ "active-menu": $data.activeTab === "ecatalog" }, "menu"])}" data-v-427f85c2${_scopeId}> E-Catalog </p>`);
      } else {
        return [
          createVNode("p", {
            class: ["menu", { "active-menu": $data.activeTab === "ecatalog" }],
            onClick: ($event) => $options.setActiveTab("ecatalog")
          }, " E-Catalog ", 10, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/contact-us/" + _ctx.$route.params.name
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="${ssrRenderClass([{ "active-menu": $data.activeTab === "contact" }, "menu"])}" style="${ssrRenderStyle({ "margin-right": "0" })}" data-v-427f85c2${_scopeId}> Contact </p>`);
      } else {
        return [
          createVNode("p", {
            class: ["menu", { "active-menu": $data.activeTab === "contact" }],
            onClick: ($event) => $options.setActiveTab("contact"),
            style: { "margin-right": "0" }
          }, " Contact ", 10, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><hr style="${ssrRenderStyle({ "height": "4px", "background-color": "#ccc", "margin-top": "-4px", "margin-right": "10px" })}" data-v-427f85c2></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-427f85c2"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%200C11.2311%200%208.52431%200.821085%206.22202%202.35942C3.91973%203.89776%202.12532%206.08427%201.06569%208.64243C0.0060662%2011.2006%20-0.271181%2014.0155%200.269012%2016.7313C0.809205%2019.447%202.14258%2021.9416%204.10051%2023.8995C6.05845%2025.8574%208.55301%2027.1908%2011.2687%2027.731C13.9845%2028.2712%2016.7994%2027.9939%2019.3576%2026.9343C21.9157%2025.8747%2024.1022%2024.0803%2025.6406%2021.778C27.1789%2019.4757%2028%2016.7689%2028%2014C28%2010.287%2026.525%206.72601%2023.8995%204.1005C21.274%201.475%2017.713%200%2014%200ZM14.6001%208.59973C15.8728%208.60121%2017.0928%209.10742%2017.9927%2010.0073C18.8926%2010.9072%2019.3988%2012.1272%2019.4003%2013.3999H18.2C18.199%2012.4454%2017.8194%2011.5304%2017.1445%2010.8555C16.4696%2010.1806%2015.5546%209.80099%2014.6001%209.8V8.59973ZM18.4875%2022.4C18.4511%2022.4%2014.8475%2022.3384%2010.2135%2017.7865C5.6616%2013.1544%205.60001%209.54893%205.60001%209.51253C5.60001%209.0636%208.4%205.6%209.0188%205.6C9.23347%205.6%209.40054%205.7456%209.58347%205.964C10.024%206.48853%2011.9719%209.56293%2011.8823%2010.0753C11.8393%2010.3161%2011.6349%2010.4991%2011.0488%2010.9909C10.76%2011.218%2010.4897%2011.4677%2010.2405%2011.7376C10.3599%2012.2315%2010.5372%2012.7096%2010.7688%2013.1619C11.6317%2014.9361%2013.0654%2016.3691%2014.84%2017.2312C15.2923%2017.4628%2015.7704%2017.6401%2016.2643%2017.7595C16.5342%2017.5103%2016.7839%2017.24%2017.0109%2016.9512C17.5028%2016.3651%2017.6857%2016.1607%2017.9265%2016.1177C18.4389%2016.0244%2021.5133%2017.976%2022.0379%2018.4165C22.2563%2018.6032%2022.4019%2018.7665%2022.4019%2018.9812C22.4%2019.6%2018.9364%2022.4%2018.4875%2022.4ZM21.1997%2013.3999C21.1978%2011.6501%2020.5018%209.97266%2019.2646%208.73543C18.0273%207.49819%2016.3499%206.80224%2014.6001%206.80027V5.6C16.668%205.60247%2018.6505%206.42503%2020.1127%207.88725C21.575%209.34948%2022.3975%2011.332%2022.4%2013.3999H21.1997Z'%20fill='%23242424'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28%2014C28%206.26801%2021.732%200%2014%200C6.26801%200%200%206.26801%200%2014C0%2021.732%206.26801%2028%2014%2028C21.732%2028%2028%2021.732%2028%2014Z'%20fill='%23242424'/%3e%3cpath%20d='M20.2967%208.36438H7.70329C7.489%208.36447%207.27797%208.4168%207.08846%208.51684C6.89895%208.61688%206.73669%208.7616%206.61572%208.93849L12.9118%2013.4028C13.2299%2013.6276%2013.6098%2013.7483%2013.9993%2013.7483C14.3889%2013.7483%2014.7688%2013.6276%2015.0869%2013.4028L21.3823%208.93849C21.2615%208.76188%2021.0996%208.61732%2020.9104%208.5173C20.7213%208.41728%2020.5107%208.36479%2020.2967%208.36438Z'%20fill='white'/%3e%3cpath%20d='M15.632%2014.17C15.1547%2014.5079%2014.5844%2014.6893%2013.9997%2014.6893C13.4149%2014.6893%2012.8446%2014.5079%2012.3673%2014.17L6.38501%209.92847V18.3166C6.38501%2018.6662%206.5239%2019.0015%206.77112%2019.2488C7.01834%2019.496%207.35365%2019.6349%207.70328%2019.6349H20.2967C20.6463%2019.6349%2020.9816%2019.496%2021.2288%2019.2488C21.4761%2019.0015%2021.615%2018.6662%2021.615%2018.3166V9.92847L15.632%2014.17Z'%20fill='white'/%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_272_225)'%3e%3cpath%20d='M14.0035%200H13.9965C6.27725%200%200%206.279%200%2014C0%2017.0625%200.987%2019.901%202.66525%2022.2057L0.9205%2027.4067L6.30175%2025.6865C8.5155%2027.153%2011.1562%2028%2014.0035%2028C21.7227%2028%2028%2021.7192%2028%2014C28%206.28075%2021.7227%200%2014.0035%200Z'%20fill='%23242424'/%3e%3cpath%20d='M22.1497%2019.7697C21.812%2020.7234%2020.4715%2021.5144%2019.4022%2021.7454C18.6707%2021.9012%2017.7152%2022.0254%2014.4987%2020.6919C10.3845%2018.9874%207.73497%2014.8067%207.52847%2014.5354C7.33072%2014.2642%205.86597%2012.3217%205.86597%2010.3127C5.86597%208.3037%206.88622%207.32545%207.29747%206.90545C7.63522%206.5607%208.19347%206.4032%208.72897%206.4032C8.90222%206.4032%209.05797%206.41195%209.19797%206.41895C9.60922%206.43645%209.81572%206.46095%2010.087%207.1102C10.4247%207.92395%2011.2472%209.93295%2011.3452%2010.1394C11.445%2010.3459%2011.5447%2010.6259%2011.4047%2010.8972C11.2735%2011.1772%2011.158%2011.3014%2010.9515%2011.5394C10.745%2011.7774%2010.549%2011.9594%2010.3425%2012.2149C10.1535%2012.4372%209.93997%2012.6752%2010.178%2013.0864C10.416%2013.4889%2011.2385%2014.8312%2012.4495%2015.9092C14.0122%2017.3004%2015.2792%2017.7449%2015.7325%2017.9339C16.0702%2018.0739%2016.4727%2018.0407%2016.7195%2017.7782C17.0327%2017.4404%2017.4195%2016.8804%2017.8132%2016.3292C18.0932%2015.9337%2018.4467%2015.8847%2018.8177%2016.0247C19.1957%2016.1559%2021.196%2017.1447%2021.6072%2017.3494C22.0185%2017.5559%2022.2897%2017.6539%2022.3895%2017.8272C22.4875%2018.0004%2022.4875%2018.8142%2022.1497%2019.7697Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_272_225'%3e%3crect%20width='28'%20height='28'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: {
    merchant: Object
  },
  setup(__props) {
    const props = __props;
    const email = ref("");
    const phone = ref("");
    const whatsapp = ref("");
    watch(() => props.merchant, (newValue, oldValue) => {
      email.value = "mailto:" + newValue.merchant_email;
      phone.value = "tel:" + newValue.merchant_phone;
      whatsapp.value = "tel:" + newValue.whatsapp_phone;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "footer fixed bottom-0 bg-white w-full md:w-[100%] flex flex-col mt-5",
        style: { "position": "sticky", "box-shadow": "0px 1px 3px rgba(0, 0, 0, 0.15),\n        0px -1px 3px rgba(0, 0, 0, 0.15)" }
      }, _attrs))} data-v-4f4520cb><div class="flex items-start justify-around" data-v-4f4520cb><a${ssrRenderAttr("href", unref(phone))} class="flex items-center gap-2 mt-3" data-v-4f4520cb><img${ssrRenderAttr("src", _imports_0)} alt="trophy" class="w-7" data-v-4f4520cb><p class="menu-3" style="${ssrRenderStyle({ "font-size": "12px !important" })}" data-v-4f4520cb>Phone</p></a><a${ssrRenderAttr("href", unref(email))} class="flex items-center gap-2 mt-3" data-v-4f4520cb><img${ssrRenderAttr("src", _imports_1)} alt="trophy" class="w-7" data-v-4f4520cb><p class="menu-3" style="${ssrRenderStyle({ "font-size": "12px !important" })}" data-v-4f4520cb>Email</p></a><a${ssrRenderAttr("href", unref(whatsapp))} class="flex items-center gap-2 mt-3" data-v-4f4520cb><img${ssrRenderAttr("src", _imports_2)} alt="trophy" class="w-7" data-v-4f4520cb><p class="menu-3" style="${ssrRenderStyle({ "font-size": "12px !important" })}" data-v-4f4520cb>Whatsapp</p></a></div><div class="w-full h-[5px] bg-[#FF9212] mt-[14px]" data-v-4f4520cb></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f4520cb"]]);

export { Footer as F, Menu as M };
//# sourceMappingURL=Footer-DqgBxSIP.mjs.map
