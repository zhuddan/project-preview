import{j as e,a as r,c as x}from"./index-Br13yQ_7.js";import{a as m,C as l}from"./customer-service-O39QrfiA.js";import{c as n}from"./tabbar-service-B-Rk7dW2.js";const c=a=>e.jsx("svg",{viewBox:"0 0 256 256",width:"1.2em",height:"1.2em",...a,children:e.jsx("path",{fill:"currentColor",d:"M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90M82 108a10 10 0 1 1 10 10a10 10 0 0 1-10-10m100 0a6 6 0 0 1-6 6h-24a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6m-8.81 47c-9.92 17.16-26.39 27-45.19 27s-35.27-9.84-45.19-27a6 6 0 0 1 10.38-6c7.84 13.54 20.2 21 34.81 21s27-7.46 34.81-21a6 6 0 1 1 10.38 6"})}),p=c,d=[{name:"充话费"},{name:"充流量"},{name:"我的订单"},{name:"拿佣金"},{name:"佣金钱包"},{name:"我的海报"}],o=[{name:"充话费",type:"话费优惠",title:"7月1日至7月15日话费充 值88折"},{name:"充话费",type:"话费优惠",title:"7月1日至7月15日话费充 值88折"}];function g(){const a=r();function i(s){["拿佣金","我的海报"].includes(s)&&a("/poster")}return e.jsxs(m,{className:"service-page pt-[80px] px-sm",children:[e.jsx("div",{className:"px-[63px] gap-y-[40px] bg-white rounded-sm mt-xs pt-[32px] pb-[38px] grid grid-cols-[repeat(3,auto)]",children:d.map((s,t)=>e.jsxs("div",{onClick:()=>i(s.name),className:x("flex w-[128px] flex-col justify-center items-center  ",{"justify-self-start":t%3===0,"justify-self-center":t%3-1===0,"justify-self-end":t%3-2===0}),children:[e.jsx(p,{className:"text-primary text-[88px]"}),e.jsx("span",{className:x("text-lg leading-[45px] mt-[12px]"),children:s.name})]},s.name))}),o.map((s,t)=>e.jsxs("div",{className:"box-border mt-xs px-xs pt-[40px] pb-[34px] bg-white rounded-sm ",children:[e.jsxs("div",{className:"flex items-center border-b border-[#CECECE] pb-[24px]",children:[e.jsx("span",{className:" text-lg text-[#666]",children:s.type}),e.jsx("div",{className:"flex-1"}),e.jsx("span",{className:"text-primary text-md",children:"更多"}),e.jsx(n,{className:" ml-[7px] text-primary text-[23px]"})]}),e.jsxs("div",{className:"flex mt-sm",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-bold",children:s.name}),e.jsx("p",{className:"text-md text-[#666666] max-w-[300px] mt-[14px]",children:s.title})]}),e.jsx("div",{className:"flex items-center justify-center bg-gray-300 flex-1 rounded-xs h-[188px] text-white",children:"图"})]})]},t)),e.jsx(l,{})]})}export{g as default};
