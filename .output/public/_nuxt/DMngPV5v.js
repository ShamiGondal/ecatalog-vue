import{C as S,S as F,N as I}from"./DH2dHN1I.js";import{M as B,F as D}from"./DuWI_CRV.js";import{m as R,F as V,G as j,r as n,o as H,c as x,v as r,x as u,z as i,E as h,A as m,H as y,t as c,I as O,J as T,K as W}from"./oHqGifPf.js";const $={class:"md:container md:mx-auto flex flex-col sub"},z={style:{height:"90vh"}},G={class:"flex flex-col justify-center items-center bg-white shadow-xl rounded-bl-3xl rounded-br-3xl pb-4"},J=u("p",{class:"title uppercase"},"AWARDS FOR CHAMPIONS",-1),K=["src"],L=["href"],P=["onClick"],q=["src"],Q={key:0,class:"title items-center flex justify-center mt-[50%]"},te={__name:"e-catalog",setup(U){const _=R().$axios,b=V(),g=j();b.params.name;const f=n(""),o=n([]),t=n(null),p=n([]),d=n(!0),k=async()=>{var l;const s="/ecatalog/ecatalog?merchantId=35";d.value=!0;try{const e=(l=(await _.get(s)).data)==null?void 0:l.ecatalog;Array.isArray(e)?(o.value=e,e.length>0&&(t.value=e[0])):(o.value=[],t.value=null)}catch(a){console.error("Error fetching data:",a),g.push("/404")}finally{d.value=!1}},A=s=>{t.value=s},C=async()=>{var l;const s="/ecatalog/merchant/superstore";try{const a=await _.get(s);console.log(a);const e=(l=a.data)==null?void 0:l.merchant;e?(p.value=e,f.value=e.merchant_id):(console.warn("Merchant data is missing or undefined."),p.value={},f.value=null)}catch(a){console.error("Error fetching merchant data:",a),g.push("/404")}};H(async()=>{await C(),await k()});const v=x(()=>Math.min(o.value.length,3)),N=x(()=>o.value.length>v.value);return(s,l)=>{const a=F,e=I,E=S;return c(),r("div",$,[u("div",z,[i(B,{title:"ecatalog"}),u("div",G,[J,t.value&&t.value.ecatalog_file?(c(),r("iframe",{key:0,src:"https://admin.ecatalog.cloud/"+t.value.ecatalog_file,style:{width:"360px",height:"50vh"},frameborder:"0",class:"mt-2",scroll:"no",allowfullscreen:""},null,8,K)):h("",!0),t.value&&t.value.ecatalog_file?(c(),r("a",{key:1,href:"https://admin.ecatalog.cloud/"+t.value.ecatalog_file,download:"Ecatalog",target:"blank",class:"button-download"}," Download ",8,L)):h("",!0)]),i(E,{"items-to-show":y(v),itemsToScroll:1,"wrap-around":y(N),class:"mt-6 mx-auto w-80 my_crousel"},{addons:m(()=>[i(e)]),default:m(()=>[(c(!0),r(O,null,T(o.value,(w,M)=>(c(),W(a,{key:M},{default:m(()=>[u("div",{class:"carousel__item mb-6",onClick:X=>A(w)},[u("img",{src:"https://admin.ecatalog.cloud/"+w.ecatalog_thumbnail,alt:"trophy",class:"h-24"},null,8,q)],8,P)]),_:2},1024))),128))]),_:1},8,["items-to-show","wrap-around"]),!d.value&&o.value.length==0?(c(),r("h4",Q," No Catalog Available ")):h("",!0)]),i(D)])}}};export{te as default};