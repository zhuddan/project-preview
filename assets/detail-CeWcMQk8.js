import{a as l,b as x,r as c,j as s,e as o}from"./index-CzPhVr3Z.js";import{b as p}from"./tabbar-service-CBd5_gH2.js";import{b as h,a as f}from"./wifi-wfDDd5US.js";import{b as u}from"./service-Ukr1P2k2.js";import{P as d}from"./sleep-Ca55cUlz.js";import{a as j}from"./order-CVSa9q4t.js";const v=[{name:"充话费",path:"/?type=1",icon:s.jsx(h,{className:"text-[88px]"})},{name:"充流量",path:"/?type=1",icon:s.jsx(f,{className:"text-[88px]"})},{name:"服务大厅",path:"/service",icon:s.jsx(u,{className:"text-[88px]"})}];function R(){const a=l(),{id:n}=x(),{data:e,isPending:r,refetch:m}=j(n),i=c.useMemo(()=>[{name:"手机号码",value:e==null?void 0:e.phone},{name:"支付金额",value:e==null?void 0:e.price},{name:"充值产品",value:e==null?void 0:e.productName},{name:"下单时间",value:e==null?void 0:e.time},{name:"订单编号",value:e==null?void 0:e.orderNo.slice(-20)}],[e]);return r?s.jsxs("div",{className:"h-[100vh] flex flex-col justify-center items-center ",children:[s.jsx(o,{color:"#41d9ce",size:"medium"}),s.jsx("p",{className:"text-primary text-lg mt-md",children:"正在获取数据..."})]}):s.jsx(d,{onRefresh:m,children:s.jsxs("div",{className:"h-[100vh] flex flex-col box-border px-[20px] items-center py-[24px]",children:[s.jsx(p,{className:"mt-[78px] text-[81px]"}),s.jsx("h1",{className:"leading-none text-lg mt-[26px] mb-[113px]",children:e==null?void 0:e.productName}),i.map(t=>s.jsxs("div",{className:"flex justify-between text-md text-[#666666] items-center  h-[96px] w-full px-[26px]",children:[s.jsx("span",{children:t.name}),s.jsx("span",{children:t.value})]},t.name)),s.jsx("div",{className:"flex w-full justify-between pt-[43px] border-t px-[73px]",children:v.map(t=>s.jsxs("div",{onClick:()=>a(t.path),className:"item flex flex-col items-center ",children:[t.icon,s.jsx("span",{className:"mt-[12px] text-lg",children:t.name})]},t.name))})]})})}export{R as default};
