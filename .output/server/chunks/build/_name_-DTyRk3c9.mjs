import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { c as useNuxtApp } from './server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { M as Menu, F as Footer } from './Footer-DqgBxSIP.mjs';
import { _ as _imports_0$1 } from './trophy-rCr4yt1u.mjs';
import { useRoute, useRouter } from 'vue-router';
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

const _imports_0 = "" + buildAssetsURL("cup.BeNA2QNW.png");
const _imports_1 = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_272_652)'%3e%3cpath%20d='M30%2015C30%206.71484%2023.2852%200%2015%200C6.71484%200%200%206.71484%200%2015C0%2023.2852%206.71484%2030%2015%2030C15.0879%2030%2015.1758%2030%2015.2637%2029.9941V18.3223H12.041V14.5664H15.2637V11.8008C15.2637%208.5957%2017.2207%206.84961%2020.0801%206.84961C21.4512%206.84961%2022.6289%206.94922%2022.9688%206.99609V10.3477H21C19.4473%2010.3477%2019.1426%2011.0859%2019.1426%2012.1699V14.5605H22.8633L22.377%2018.3164H19.1426V29.4199C25.4121%2027.6211%2030%2021.8496%2030%2015Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_272_652'%3e%3crect%20width='30'%20height='30'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_272_654)'%3e%3cpath%20d='M15%2018.0762C16.6989%2018.0762%2018.0762%2016.6989%2018.0762%2015C18.0762%2013.3011%2016.6989%2011.9238%2015%2011.9238C13.3011%2011.9238%2011.9238%2013.3011%2011.9238%2015C11.9238%2016.6989%2013.3011%2018.0762%2015%2018.0762Z'%20fill='black'/%3e%3cpath%20d='M15%200.351562C6.9099%200.351562%200.351562%206.9099%200.351562%2015C0.351562%2023.0901%206.9099%2029.6484%2015%2029.6484C23.0901%2029.6484%2029.6484%2023.0901%2029.6484%2015C29.6484%206.9099%2023.0901%200.351562%2015%200.351562ZM24.0503%2018.723C23.98%2020.1157%2023.5886%2021.489%2022.5737%2022.4931C21.549%2023.5068%2020.1691%2023.8845%2018.7631%2023.9541H11.237C9.83074%2023.8845%208.45109%2023.5071%207.42635%2022.4931C6.41139%2021.489%206.0201%2020.1157%205.94979%2018.723V11.277C6.0201%209.8843%206.41145%208.51098%207.42635%207.5068C8.45109%206.49312%209.83092%206.11543%2011.237%206.04588H18.763C20.1693%206.11543%2021.5489%206.49295%2022.5737%207.5068C23.5886%208.51098%2023.9799%209.8843%2024.0502%2011.277L24.0503%2018.723Z'%20fill='black'/%3e%3cpath%20d='M18.6679%207.74248C16.8348%207.6922%2013.1656%207.6922%2011.3325%207.74248C10.3785%207.76867%209.29704%208.00615%208.61735%208.73213C7.91106%209.48676%207.64416%2010.3985%207.61709%2011.4184C7.56951%2013.2086%207.61709%2018.5816%207.61709%2018.5816C7.64809%2019.6014%207.91106%2020.5133%208.61735%2021.2679C9.29704%2021.9941%2010.3785%2022.2314%2011.3325%2022.2576C13.1656%2022.3078%2016.8348%2022.3078%2018.6679%2022.2576C19.6219%2022.2314%2020.7034%2021.9939%2021.383%2021.2679C22.0893%2020.5133%2022.3562%2019.6016%2022.3833%2018.5816V11.4184C22.3562%2010.3985%2022.0893%209.48676%2021.383%208.73213C20.7031%208.00592%2019.6217%207.76867%2018.6679%207.74248ZM15%2019.7681C14.0569%2019.7681%2013.1351%2019.4884%2012.351%2018.9645C11.5669%2018.4406%2010.9557%2017.6959%2010.5948%2016.8247C10.234%2015.9534%2010.1395%2014.9947%2010.3235%2014.0698C10.5075%2013.1449%2010.9616%2012.2953%2011.6284%2011.6285C12.2953%2010.9617%2013.1448%2010.5075%2014.0698%2010.3236C14.9947%2010.1396%2015.9534%2010.234%2016.8246%2010.5949C17.6959%2010.9558%2018.4405%2011.5669%2018.9645%2012.351C19.4884%2013.1351%2019.768%2014.057%2019.768%2015C19.768%2016.2646%2019.2657%2017.4774%2018.3715%2018.3715C17.4773%2019.2657%2016.2645%2019.7681%2015%2019.7681ZM19.7883%2011.2161C19.5997%2011.2161%2019.4154%2011.1601%2019.2586%2011.0553C19.1018%2010.9505%2018.9796%2010.8016%2018.9074%2010.6273C18.8353%2010.4531%2018.8165%2010.2613%2018.8533%2010.0764C18.8901%209.89138%2018.9809%209.72149%2019.1143%209.58815C19.2477%209.45481%2019.4176%209.36401%2019.6026%209.32723C19.7876%209.29045%2019.9793%209.30935%2020.1535%209.38153C20.3278%209.45372%2020.4767%209.57595%2020.5815%209.73276C20.6862%209.88958%2020.7422%2010.0739%2020.7422%2010.2625C20.7422%2010.3878%2020.7175%2010.5118%2020.6695%2010.6275C20.6216%2010.7432%2020.5513%2010.8484%2020.4628%2010.9369C20.3742%2011.0255%2020.269%2011.0957%2020.1533%2011.1436C20.0376%2011.1915%2019.9136%2011.2162%2019.7883%2011.2161Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_272_654'%3e%3crect%20width='30'%20height='30'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_272_661)'%3e%3cpath%20d='M15%200C6.71701%200%200%206.71701%200%2015C0%2023.283%206.71701%2030%2015%2030C23.283%2030%2030%2023.283%2030%2015C30%206.71701%2023.283%200%2015%200ZM22.5252%2011.4769V13.508C21.5675%2013.5083%2020.637%2013.3206%2019.7593%2012.9504C19.195%2012.7121%2018.6693%2012.4052%2018.1884%2012.0342L18.2028%2018.2858C18.1968%2019.6935%2017.6398%2021.0161%2016.6318%2022.0124C15.8115%2022.8233%2014.7721%2023.339%2013.6454%2023.5059C13.3807%2023.5451%2013.1113%2023.5652%2012.8388%2023.5652C11.6328%2023.5652%2010.4878%2023.1745%209.55119%2022.4537C9.37494%2022.318%209.20637%2022.1709%209.04588%2022.0124C7.95346%2020.9327%207.39014%2019.4694%207.485%2017.9299C7.55736%2016.7581%208.02652%2015.6405%208.80863%2014.7646C9.8434%2013.6055%2011.291%2012.9622%2012.8388%2012.9622C13.1113%2012.9622%2013.3807%2012.9826%2013.6454%2013.0218V13.7728V15.8617C13.3944%2015.7789%2013.1263%2015.7334%2012.8472%2015.7334C11.4331%2015.7334%2010.2891%2016.8871%2010.3102%2018.3023C10.3236%2019.2077%2010.8182%2019.9992%2011.5477%2020.4355C11.8905%2020.6406%2012.2849%2020.7676%2012.7058%2020.7907C13.0356%2020.8088%2013.3522%2020.7629%2013.6454%2020.6661C14.6558%2020.3323%2015.3846%2019.3833%2015.3846%2018.2641L15.3879%2014.0777V6.43477H18.185C18.1877%206.71191%2018.2158%206.98232%2018.2681%207.24436C18.4792%208.30496%2019.077%209.22512%2019.909%209.85242C20.6346%2010.3996%2021.5379%2010.724%2022.5171%2010.724C22.5178%2010.724%2022.5258%2010.724%2022.5251%2010.7234V11.4769H22.5252Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_272_661'%3e%3crect%20width='30'%20height='30'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _imports_4 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20308%20308'%20xml:space='preserve'%3e%3cg%20id='XMLID_468_'%3e%3cpath%20id='XMLID_469_'%20d='M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156%20c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687%20c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887%20c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153%20c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348%20c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802%20c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922%20c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0%20c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458%20C233.168,179.508,230.845,178.393,227.904,176.981z'/%3e%3cpath%20id='XMLID_470_'%20d='M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716%20c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396%20c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z%20M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188%20l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677%20c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867%20C276.546,215.678,222.799,268.994,156.734,268.994z'/%3e%3c/g%3e%3c/svg%3e";
const _sfc_main$1 = {
  __name: "Profile",
  __ssrInlineRender: true,
  props: {
    logo: {
      type: String
    },
    instagram: {
      type: String
    },
    facebook: {
      type: String
    },
    tiktok: {
      type: String
    },
    whatsapp: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center bg-white shadow-md rounded-bl-3xl rounded-br-3xl pt-3 pb-4" }, _attrs))}>`);
      if (__props.logo != null && __props.logo != "") {
        _push(`<img${ssrRenderAttr("src", __props.logo)} alt="trophy">`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_0$1)} alt="trophy">`);
      }
      _push(`<div class="mt-4 bg-[#FF9212] w-[50px] h-[5px]"></div><p class="paragraph-bold mt-2">About us</p><div class="flex items-center justify-center mt-2 gap-2">`);
      if (__props.facebook != "") {
        _push(`<a${ssrRenderAttr("href", __props.facebook)}><img${ssrRenderAttr("src", _imports_1)} alt="trophy"></a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.instagram != "") {
        _push(`<a${ssrRenderAttr("href", __props.instagram)}><img${ssrRenderAttr("src", _imports_2)} alt="trophy"></a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tiktok != "") {
        _push(`<a${ssrRenderAttr("href", __props.tiktok)}><img${ssrRenderAttr("src", _imports_3)} alt="trophy"></a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.whatsapp != "") {
        _push(`<a${ssrRenderAttr("href", __props.whatsapp)}><img${ssrRenderAttr("src", _imports_4)} alt="trophy" class="w-[30px]"></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Profile = _sfc_main$1;
const _sfc_main = {
  __name: "[name]",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp().$axios;
    const route = useRoute();
    useRouter();
    route.params.name;
    const dataAbout = ref([]);
    const intro = ref([]);
    const about = ref([]);
    const contact = ref([]);
    const instagram = ref("");
    const facebook = ref("");
    const tiktok = ref("");
    const whatsapp = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:container md:mx-auto flex flex-col h-[100vh] sub" }, _attrs))}><div class="flex flex-col px-5 shadow-sm" style="${ssrRenderStyle({ "position": "sticky", "top": "0", "z-index": "100", "background": "white" })}">`);
      _push(ssrRenderComponent(Menu, { title: "" }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle({ "margin-top": "40px" })}">`);
      _push(ssrRenderComponent(Profile, {
        img: unref(dataAbout).merchant_logo,
        instagram: unref(instagram),
        facebook: unref(facebook),
        tiktok: unref(tiktok),
        whatsapp: unref(whatsapp)
      }, null, _parent));
      _push(`</div><div class="mt-4 flex flex-col justify-start mx-5"><p class="paragraph-bold mt-2">${ssrInterpolate(unref(dataAbout).merchant_name)}</p>`);
      if (unref(intro)[0] && unref(intro)[0].content_page == "INTRO") {
        _push(`<div class="paragraph mt-2">${ssrInterpolate(unref(intro)[0].content_text)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(about)[0] && unref(about)[0].content_page == "ABOUT") {
        _push(`<p class="paragraph mt-2">${ssrInterpolate(unref(about)[0].content_text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(contact)[0] && unref(contact)[0].content_page == "CONTACT") {
        _push(`<p class="paragraph mt-2">${ssrInterpolate(unref(contact)[0].content_text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<img${ssrRenderAttr("src", _imports_0)} alt="trophy" class="mt-6"></div>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_name_-DTyRk3c9.mjs.map
