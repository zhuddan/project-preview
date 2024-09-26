import{R as i,r as c,j as d,c as $}from"./index-DAVCmsRS.js";var L;(function(e){e[e.UP=-1]="UP",e[e.DOWN=1]="DOWN"})(L||(L={}));function X(e){var t=getComputedStyle(e).overflowY;return e===document.scrollingElement&&t==="visible"?!0:!(t!=="scroll"&&t!=="auto")}function G(e,t){if(!X(e))return!1;if(t===L.DOWN){var s=e.scrollTop+e.clientHeight;return s<e.scrollHeight}if(t===L.UP)return e.scrollTop>0;throw new Error("unsupported direction")}function O(e,t){return G(e,t)?!0:e.parentElement==null?!1:O(e.parentElement,t)}function U(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",s==="top"&&a.firstChild?a.insertBefore(l,a.firstChild):a.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var J=`.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px; }

.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #363636;
  animation-timing-function: cubic-bezier(0, 1, 1, 0); }

.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite; }

.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite; }

.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite; }

.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite; }

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0); }
  100% {
    transform: scale(1); } }

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1); }
  100% {
    transform: scale(0); } }

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0); }
  100% {
    transform: translate(19px, 0); } }
`;U(J);var K=function(){return i.createElement("div",{className:"lds-ellipsis"},i.createElement("div",null),i.createElement("div",null),i.createElement("div",null),i.createElement("div",null))},Q=function(){return i.createElement("div",null,i.createElement("p",null,"↧  pull to refresh  ↧"))},Z=`.ptr,
.ptr__children {
  height: 100%;
  width: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative; }

.ptr.ptr--fetch-more-treshold-breached .ptr__fetch-more {
  display: block; }

.ptr__fetch-more {
  display: none; }

/**
  * Pull down transition 
  */
.ptr__children,
.ptr__pull-down {
  transition: transform 0.2s cubic-bezier(0, 0, 0.31, 1); }

.ptr__pull-down {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0;
  visibility: hidden; }
  .ptr__pull-down > div {
    display: none; }

.ptr--dragging {
  /**
    * Hide PullMore content is treshold breached
    */
  /**
    * Otherwize, display content
    */ }
  .ptr--dragging.ptr--pull-down-treshold-breached .ptr__pull-down--pull-more {
    display: none; }
  .ptr--dragging .ptr__pull-down--pull-more {
    display: block; }

.ptr--pull-down-treshold-breached {
  /**
    * Force opacity to 1 is pull down trashold breached
    */
  /**
    * And display loader
    */ }
  .ptr--pull-down-treshold-breached .ptr__pull-down {
    opacity: 1 !important; }
  .ptr--pull-down-treshold-breached .ptr__pull-down--loading {
    display: block; }

.ptr__loader {
  margin: 0 auto;
  text-align: center; }
`;U(Z);var I=function(e){var t=e.isPullable,s=t===void 0?!0:t,a=e.canFetchMore,l=a===void 0?!1:a,y=e.onRefresh,f=e.onFetchMore,T=e.refreshingContent,b=T===void 0?i.createElement(K,null):T,E=e.pullingContent,_=E===void 0?i.createElement(Q,null):E,P=e.children,k=e.pullDownThreshold,D=k===void 0?67:k,S=e.fetchMoreThreshold,M=S===void 0?100:S,A=e.maxPullDownDistance,j=A===void 0?95:A,Y=e.resistance,z=Y===void 0?1:Y,W=e.backgroundColor,B=e.className,q=B===void 0?"":B,o=c.useRef(null),r=c.useRef(null),p=c.useRef(null),V=c.useRef(null),R=!1,x=!1,v=!1,m=0,g=0;c.useEffect(function(){if(!(!s||!r||!r.current)){var n=r.current;return n.addEventListener("touchstart",C,{passive:!0}),n.addEventListener("mousedown",C),n.addEventListener("touchmove",N,{passive:!1}),n.addEventListener("mousemove",N),window.addEventListener("scroll",H),n.addEventListener("touchend",w),n.addEventListener("mouseup",w),document.body.addEventListener("mouseleave",w),function(){n.removeEventListener("touchstart",C),n.removeEventListener("mousedown",C),n.removeEventListener("touchmove",N),n.removeEventListener("mousemove",N),window.removeEventListener("scroll",H),n.removeEventListener("touchend",w),n.removeEventListener("mouseup",w),document.body.removeEventListener("mouseleave",w)}}},[P,s,y,D,j,l,M]),c.useEffect(function(){var n;if(!((n=o)===null||n===void 0)&&n.current){var u=o.current.classList.contains("ptr--fetch-more-treshold-breached");u||l&&F()<M&&f&&(o.current.classList.add("ptr--fetch-more-treshold-breached"),x=!0,f().then(h).catch(h))}},[l,P]);var F=function(){if(!r||!r.current)return-1;var n=window.scrollY,u=r.current.scrollHeight;return u-n-window.innerHeight},h=function(){requestAnimationFrame(function(){r.current&&(r.current.style.overflowX="hidden",r.current.style.overflowY="auto",r.current.style.transform="unset"),p.current&&(p.current.style.opacity="0"),o.current&&(o.current.classList.remove("ptr--pull-down-treshold-breached"),o.current.classList.remove("ptr--dragging"),o.current.classList.remove("ptr--fetch-more-treshold-breached")),R&&(R=!1),x&&(x=!1)})},C=function(n){v=!1,n instanceof MouseEvent&&(m=n.pageY),window.TouchEvent&&n instanceof TouchEvent&&(m=n.touches[0].pageY),g=m,!(n.type==="touchstart"&&O(n.target,L.UP))&&(r.current.getBoundingClientRect().top<0||(v=!0))},N=function(n){if(v){if(window.TouchEvent&&n instanceof TouchEvent?g=n.touches[0].pageY:g=n.pageY,o.current.classList.add("ptr--dragging"),g<m){v=!1;return}n.cancelable&&n.preventDefault();var u=Math.min((g-m)/z,j);u>=D&&(v=!0,R=!0,o.current.classList.remove("ptr--dragging"),o.current.classList.add("ptr--pull-down-treshold-breached")),!(u>=j)&&(p.current.style.opacity=(u/65).toString(),r.current.style.overflow="visible",r.current.style.transform="translate(0px, "+u+"px)",p.current.style.visibility="visible")}},H=function(n){x||l&&F()<M&&f&&(x=!0,o.current.classList.add("ptr--fetch-more-treshold-breached"),f().then(h).catch(h))},w=function(){if(v=!1,m=0,g=0,!R){p.current&&(p.current.style.visibility="hidden"),h();return}r.current&&(r.current.style.overflow="visible",r.current.style.transform="translate(0px, "+D+"px)"),y().then(h).catch(h)};return i.createElement("div",{className:"ptr "+q,style:{backgroundColor:W},ref:o},i.createElement("div",{className:"ptr__pull-down",ref:p},i.createElement("div",{className:"ptr__loader ptr__pull-down--loading"},b),i.createElement("div",{className:"ptr__pull-down--pull-more"},_)),i.createElement("div",{className:"ptr__children",ref:r},P,i.createElement("div",{className:"ptr__fetch-more",ref:V},i.createElement("div",{className:"ptr__loader ptr__fetch-more--loading"},b))))};const ee=e=>d.jsx("svg",{viewBox:"0 0 256 256",width:"1.2em",height:"1.2em",...e,children:d.jsx("path",{fill:"currentColor",d:"m205.66 149.66l-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32"})});function re(e){const{children:t}=e,s=c.useRef(null);return d.jsx("div",{ref:s,children:d.jsx(I,{...e,maxPullDownDistance:100,pullingContent:d.jsx(ne,{wrapper:s}),children:t})})}function ne({wrapper:e}){const t=c.useRef(null),[s,a]=c.useState(!1);return c.useEffect(()=>{var f;if(!e||typeof e=="function")return;const l=(f=e.current)==null?void 0:f.querySelector(".ptr__pull-down");if(!l)return;const y=new MutationObserver(T=>{T.forEach(b=>{if(b.type==="attributes"&&b.attributeName==="style"){const E=window.getComputedStyle(l),_=E.display==="none"?"0":E.opacity;t.current!==_&&(t.current=_,a(Number(_??0)>=.57))}})});return y.observe(l,{childList:!1,attributes:!0,subtree:!1}),()=>{y.disconnect()}},[e]),d.jsxs("div",{className:"flex items-center pulling-content justify-center py-[20px] ",style:{height:50},children:[d.jsx(ee,{className:$("transition-transform !duration-500 text-sm",{"rotate-180":s})}),d.jsx("span",{className:"text-sm",children:s?"上拉取消":"下拉刷新"})]})}function le(e=100){let t;return new Promise(s=>{t=setTimeout(()=>{clearTimeout(t),s()},e)})}export{re as P,le as s};
