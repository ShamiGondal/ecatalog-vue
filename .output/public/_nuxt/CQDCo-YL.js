import{C as w,S as y,N as v}from"./Dce_dEGD.js";import{m as b,F as k,G as N,r as C,o as S,v as l,x as a,z as c,H as t,J as i,A as n,t as o,K as A,L as F,I as B}from"./CyUyOWhW.js";import{M,F as R}from"./CMmkCbYa.js";const D={class:"md:container md:mx-auto flex flex-col h-[100vh] sub"},E={class:"flex flex-col px-5 mb-2",style:{position:"sticky",top:"0","z-index":"100",background:"white"}},V=a("hr",{style:{height:"4px","background-color":"#ccc","margin-top":"-4px"}},null,-1),z={class:"flex flex-col justify-center items-center bg-white shadow-xl rounded-bl-3xl rounded-br-3xl pb-4"},H=a("p",{class:"title uppercase"},"AWARDS FOR CHAMPIONS",-1),I=["src"],L=["href"],O={class:"carousel__item"},$=["src"],P={__name:"[name]",setup(j){const d=b().$axios,u=k();N();const p=u.params.name,e=C([]),_=async()=>{const r=`/ecatalog/ecatalog/${p}`;await d.get(r).then(s=>{e.value=s.data.ecatalog}).catch(s=>{console.log(s)})};return S(()=>{_()}),(r,s)=>{const m=y,h=v,f=w;return o(),l("div",D,[a("div",E,[c(M,{title:"ecatalog"}),V]),a("div",z,[H,t(e)[0]&&t(e)[0].ecatalog_file?(o(),l("iframe",{key:0,src:"https://phplaravel-996806-4363314.cloudwaysapps.com/"+t(e)[0].ecatalog_file,style:{width:"360px",height:"500px"},frameborder:"0",class:"mt-2",allowfullscreen:""},null,8,I)):i("",!0),t(e)[0]&&t(e)[0].ecatalog_file?(o(),l("a",{key:1,href:"https://phplaravel-996806-4363314.cloudwaysapps.com/"+t(e)[0].ecatalog_file,download:"Ecatalog",class:"button-download"},"Download",8,L)):i("",!0)]),c(f,{"items-to-show":3,itemsToScroll:1,"wrap-around":!0,class:"mt-6 w-80 m-auto my_crousel"},{addons:n(()=>[c(h)]),default:n(()=>[(o(!0),l(A,null,F(t(e),(g,x)=>(o(),B(m,{key:x},{default:n(()=>[a("div",O,[a("img",{src:"https://phplaravel-996806-4363314.cloudwaysapps.com/"+g.ecatalog_thumbnail,alt:"trophy",class:"h-full"},null,8,$)])]),_:2},1024))),128))]),_:1}),c(R)])}}};export{P as default};