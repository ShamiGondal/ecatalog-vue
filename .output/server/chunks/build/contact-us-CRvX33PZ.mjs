import { c as useNuxtApp, _ as _export_sfc } from './server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { M as Menu, F as Footer } from './Footer-CJzcZJHs.mjs';
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

const _imports_0 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%200C6.00607%200%202.75677%203.2493%202.75677%207.2432C2.75677%2012.1998%209.23877%2019.4763%209.51474%2019.7836C9.77396%2020.0723%2010.2265%2020.0718%2010.4853%2019.7836C10.7613%2019.4763%2017.2433%2012.1998%2017.2433%207.2432C17.2432%203.2493%2013.9939%200%2010%200ZM10%2010.8875C7.99056%2010.8875%206.3558%209.25266%206.3558%207.2432C6.3558%205.23375%207.9906%203.59898%2010%203.59898C12.0094%203.59898%2013.6442%205.23379%2013.6442%207.24324C13.6442%209.25269%2012.0094%2010.8875%2010%2010.8875Z'%20fill='black'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.2838%2013.3665C15.946%2014.3203%2014.6055%2015.1112%2013.5363%2015.3423C12.8048%2015.498%2011.8492%2015.6223%208.63275%2014.2888C4.5185%2012.5843%201.869%208.4035%201.6625%208.13225C1.46475%207.861%200%205.9185%200%203.9095C0%201.9005%201.02025%200.92225%201.4315%200.50225C1.76925%200.1575%202.3275%200%202.863%200C3.03625%200%203.192%200.00875011%203.332%200.0157501C3.74325%200.0332501%203.94975%200.0577505%204.221%200.707C4.55875%201.52075%205.38125%203.52975%205.47925%203.73625C5.579%203.94275%205.67875%204.22275%205.53875%204.494C5.4075%204.774%205.292%204.89825%205.0855%205.13625C4.879%205.37425%204.683%205.55625%204.4765%205.81175C4.2875%206.034%204.074%206.272%204.312%206.68325C4.55%207.08575%205.3725%208.428%206.5835%209.506C8.14625%2010.8972%209.41325%2011.3418%209.8665%2011.5308C10.2043%2011.6708%2010.6068%2011.6375%2010.8535%2011.375C11.1667%2011.0373%2011.5535%2010.4773%2011.9473%209.926C12.2273%209.5305%2012.5808%209.4815%2012.9518%209.6215C13.3298%209.75275%2015.33%2010.7415%2015.7413%2010.9462C16.1525%2011.1527%2016.4237%2011.2508%2016.5235%2011.424C16.6215%2011.5973%2016.6215%2012.411%2016.2838%2013.3665Z'%20fill='%23242424'/%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='16'%20height='12'%20viewBox='0%200%2016%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.9117%200H1.31828C1.10399%209.28159e-05%200.892956%200.0524232%200.703449%200.15246C0.513943%200.252497%200.35168%200.397224%200.230713%200.574106L6.52676%205.03842C6.84486%205.26322%207.22481%205.38392%207.61433%205.38392C8.00385%205.38392%208.3838%205.26322%208.7019%205.03842L14.9973%200.574106C14.8765%200.3975%2014.7146%200.252943%2014.5254%200.152921C14.3363%200.0528977%2014.1256%200.000413865%2013.9117%200Z'%20fill='%23242424'/%3e%3cpath%20d='M9.24699%205.80567C8.76973%206.14355%208.19939%206.325%207.61464%206.325C7.02989%206.325%206.45955%206.14355%205.9823%205.80567L0%201.56415V9.95228C0%2010.3019%200.138888%2010.6372%200.386112%2010.8844C0.633335%2011.1317%200.968641%2011.2705%201.31827%2011.2705H13.9117C14.2613%2011.2705%2014.5966%2011.1317%2014.8438%2010.8844C15.0911%2010.6372%2015.2299%2010.3019%2015.2299%209.95228V1.56415L9.24699%205.80567Z'%20fill='%23242424'/%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_272_468)'%3e%3cpath%20d='M23.794%200.206014C23.6111%200.023108%2023.3425%20-0.0445795%2023.0948%200.0297173L1.58475%206.48276C0.636844%206.76711%200%207.62304%200%208.613C0%209.58922%200.655547%2010.4583%201.59427%2010.7265L10.6781%2013.3219L13.2735%2022.4058C13.5417%2023.3445%2014.4108%2024%2015.3874%2024C16.377%2024%2017.2329%2023.3632%2017.5173%2022.4153L23.9703%200.905202C24.0447%200.657467%2023.977%200.38892%2023.794%200.206014ZM1.40625%208.61267C1.40625%208.24887%201.64034%207.93425%201.98881%207.82972L20.8277%202.17805L11.0422%2011.9635L1.98056%209.37444C1.64245%209.27778%201.40625%208.9647%201.40625%208.61267ZM16.1704%2022.0112C16.0658%2022.3597%2015.7512%2022.5938%2015.387%2022.5938C15.0353%2022.5938%2014.7223%2022.3576%2014.6257%2022.0195L12.0366%2012.9578L21.822%203.17236L16.1704%2022.0112Z'%20fill='%23555555'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_272_468'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4 w-full h-[1px] bg-gray-400" }, _attrs))}></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Line.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Line = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp().$axios;
    const route = useRoute();
    useRouter();
    route.params.name;
    ref([]);
    ref([]);
    const branchMain = ref([]);
    const normalBranch = ref([]);
    const googleMapEmbedUrl = ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:container md:mx-auto flex flex-col sub" }, _attrs))}><div style="${ssrRenderStyle({ "min-height": "90vh" })}">`);
      _push(ssrRenderComponent(Menu, { title: "contact" }, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "margin-top": "1px" })}"><iframe width="100%" height="300" frameborder="0" style="${ssrRenderStyle({ "border": "0" })}"${ssrRenderAttr("src", unref(googleMapEmbedUrl))} allowfullscreen aria-hidden="false" tabindex="0"></iframe></div><div class="flex flex-col mx-4 mt-4"><div class="flex justify-between"><div class="flex items-start justify-center flex-col w-[70%]"><h6 class="mt-4 text-sm px-5 py-1 font-semibold w-min rounded-3xl uppercase main_button_contact" style="${ssrRenderStyle({ "background-color": "#d9d9d9" })}"> Main </h6>`);
      if (unref(branchMain)[0] && unref(branchMain)[0].branch_address) {
        _push(`<div class="flex items-start mt-3 gap-2"><img${ssrRenderAttr("src", _imports_0)} alt="trophy" class="w-7 mt-1"><p style="${ssrRenderStyle({ "color": "#555555", "margin-top": "5px", "font-size": "14px", "font-family": "'Roboto',sans-serif", "letter-spacing": "0.5px", "line-height": "120%", "border-style": "hidden", "outline": "none" })}">${ssrInterpolate(unref(branchMain)[0].branch_address)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(branchMain)[0] && unref(branchMain)[0].branch_phone) {
        _push(`<div class="flex items-center mt-3 gap-2"><img${ssrRenderAttr("src", _imports_1)} alt="trophy" class="w-5"><p style="${ssrRenderStyle({ "color": "#555555", "font-size": "14px", "font-family": "'Roboto',sans-serif", "letter-spacing": "0.5px", "line-height": "120%", "border-style": "hidden", "outline": "none" })}">${ssrInterpolate(unref(branchMain)[0].branch_phone)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(branchMain)[0] && unref(branchMain)[0].branch_email) {
        _push(`<div class="flex items-center mt-3 gap-2"><img${ssrRenderAttr("src", _imports_2)} alt="trophy" class="w-5"><p style="${ssrRenderStyle({ "color": "#555555", "font-size": "14px", "font-family": "'Roboto',sans-serif", "letter-spacing": "0.5px", "line-height": "120%", "border-style": "hidden", "outline": "none" })}">${ssrInterpolate(unref(branchMain)[0].branch_email)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(branchMain)[0] && unref(branchMain)[0].branch_waze) {
        _push(`<a class="flex items-center mt-4 w[30%]"${ssrRenderAttr("href", unref(branchMain)[0].branch_waze)}><img${ssrRenderAttr("src", _imports_3)} alt="trophy" class="w-6" style="${ssrRenderStyle({ "margin-top": "-20px" })}"></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(Line, null, null, _parent));
      if (unref(normalBranch)) {
        _push(`<!--[-->`);
        ssrRenderList(unref(normalBranch), (branch, index) => {
          _push(`<div><div class="flex justify-between"><div class="flex items-start justify-center flex-col w-[70%]"><h6 class="mt-4 text-sm px-5 py-1 font-semibold w-min rounded-3xl uppercase branch_button_contact" style="${ssrRenderStyle({ "background-color": "#d9d9d9" })}"> BRANCH </h6>`);
          if (branch.branch_address) {
            _push(`<div class="flex items-start mt-3 gap-2"><img${ssrRenderAttr("src", _imports_0)} alt="trophy" class="w-5 mt-1"><p style="${ssrRenderStyle({ "color": "#555555", "margin-top": "5px", "font-size": "14px", "font-family": "'Roboto',sans-serif", "letter-spacing": "0.5px", "line-height": "120%", "border-style": "hidden", "outline": "none" })}">${ssrInterpolate(branch.branch_address)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (branch.branch_phone) {
            _push(`<div class="flex items-center mt-3 gap-2"><img${ssrRenderAttr("src", _imports_1)} alt="trophy" class="w-5"><p style="${ssrRenderStyle({ "color": "#555555", "font-size": "14px", "font-family": "'Roboto',sans-serif", "letter-spacing": "0.5px", "line-height": "120%", "border-style": "hidden", "outline": "none" })}">${ssrInterpolate(branch.branch_phone)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (branch.branch_email) {
            _push(`<div class="flex items-center mt-3 gap-2"><img${ssrRenderAttr("src", _imports_2)} alt="trophy" class="w-5"><p style="${ssrRenderStyle({ "color": "#555555", "font-size": "14px", "font-family": "'Roboto',sans-serif", "letter-spacing": "0.5px", "line-height": "120%", "border-style": "hidden", "outline": "none" })}">${ssrInterpolate(branch.branch_email)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (branch.branch_waze) {
            _push(`<div class="flex items-center mt-4 w[30%]"${ssrRenderAttr("href", branch.branch_waze)}><img${ssrRenderAttr("src", _imports_3)} alt="trophy" class="w-6" style="${ssrRenderStyle({ "margin-top": "-20px" })}"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (index < unref(normalBranch).length - 1) {
            _push(ssrRenderComponent(Line, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[name]/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-us-CRvX33PZ.mjs.map
