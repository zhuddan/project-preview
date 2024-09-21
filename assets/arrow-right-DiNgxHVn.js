import{R as s,g as u,j as r}from"./index-BWTv8E9U.js";import{c as H}from"./smiley-wink-light-r_WrRVzE.js";var x;(function(e){e[e.UP=-1]="UP",e[e.DOWN=1]="DOWN"})(x||(x={}));function X(e){var n=getComputedStyle(e).overflowY;return e===document.scrollingElement&&n==="visible"?!0:!(n!=="scroll"&&n!=="auto")}function G(e,n){if(!X(e))return!1;if(n===x.DOWN){var o=e.scrollTop+e.clientHeight;return o<e.scrollHeight}if(n===x.UP)return e.scrollTop>0;throw new Error("unsupported direction")}function O(e,n){return G(e,n)?!0:e.parentElement==null?!1:O(e.parentElement,n)}function W(e,n){n===void 0&&(n={});var o=n.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",o==="top"&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var J=`.lds-ellipsis {
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
`;W(J);var K=function(){return s.createElement("div",{className:"lds-ellipsis"},s.createElement("div",null),s.createElement("div",null),s.createElement("div",null),s.createElement("div",null))},Q=function(){return s.createElement("div",null,s.createElement("p",null,"↧  pull to refresh  ↧"))},Z=`.ptr,
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
`;W(Z);var I=function(e){var n=e.isPullable,o=n===void 0?!0:n,a=e.canFetchMore,i=a===void 0?!1:a,_=e.onRefresh,f=e.onFetchMore,E=e.refreshingContent,v=E===void 0?s.createElement(K,null):E,F=e.pullingContent,U=F===void 0?s.createElement(Q,null):F,T=e.children,N=e.pullDownThreshold,R=N===void 0?67:N,M=e.fetchMoreThreshold,k=M===void 0?100:M,P=e.maxPullDownDistance,D=P===void 0?95:P,A=e.resistance,z=A===void 0?1:A,q=e.backgroundColor,S=e.className,V=S===void 0?"":S,c=u.useRef(null),l=u.useRef(null),h=u.useRef(null),$=u.useRef(null),L=!1,b=!1,m=!1,g=0,w=0;u.useEffect(function(){if(!(!o||!l||!l.current)){var t=l.current;return t.addEventListener("touchstart",C,{passive:!0}),t.addEventListener("mousedown",C),t.addEventListener("touchmove",j,{passive:!1}),t.addEventListener("mousemove",j),window.addEventListener("scroll",Y),t.addEventListener("touchend",y),t.addEventListener("mouseup",y),document.body.addEventListener("mouseleave",y),function(){t.removeEventListener("touchstart",C),t.removeEventListener("mousedown",C),t.removeEventListener("touchmove",j),t.removeEventListener("mousemove",j),window.removeEventListener("scroll",Y),t.removeEventListener("touchend",y),t.removeEventListener("mouseup",y),document.body.removeEventListener("mouseleave",y)}}},[T,o,_,R,D,i,k]),u.useEffect(function(){var t;if(!((t=c)===null||t===void 0)&&t.current){var d=c.current.classList.contains("ptr--fetch-more-treshold-breached");d||i&&B()<k&&f&&(c.current.classList.add("ptr--fetch-more-treshold-breached"),b=!0,f().then(p).catch(p))}},[i,T]);var B=function(){if(!l||!l.current)return-1;var t=window.scrollY,d=l.current.scrollHeight;return d-t-window.innerHeight},p=function(){requestAnimationFrame(function(){l.current&&(l.current.style.overflowX="hidden",l.current.style.overflowY="auto",l.current.style.transform="unset"),h.current&&(h.current.style.opacity="0"),c.current&&(c.current.classList.remove("ptr--pull-down-treshold-breached"),c.current.classList.remove("ptr--dragging"),c.current.classList.remove("ptr--fetch-more-treshold-breached")),L&&(L=!1),b&&(b=!1)})},C=function(t){m=!1,t instanceof MouseEvent&&(g=t.pageY),window.TouchEvent&&t instanceof TouchEvent&&(g=t.touches[0].pageY),w=g,!(t.type==="touchstart"&&O(t.target,x.UP))&&(l.current.getBoundingClientRect().top<0||(m=!0))},j=function(t){if(m){if(window.TouchEvent&&t instanceof TouchEvent?w=t.touches[0].pageY:w=t.pageY,c.current.classList.add("ptr--dragging"),w<g){m=!1;return}t.cancelable&&t.preventDefault();var d=Math.min((w-g)/z,D);d>=R&&(m=!0,L=!0,c.current.classList.remove("ptr--dragging"),c.current.classList.add("ptr--pull-down-treshold-breached")),!(d>=D)&&(h.current.style.opacity=(d/65).toString(),l.current.style.overflow="visible",l.current.style.transform="translate(0px, "+d+"px)",h.current.style.visibility="visible")}},Y=function(t){b||i&&B()<k&&f&&(b=!0,c.current.classList.add("ptr--fetch-more-treshold-breached"),f().then(p).catch(p))},y=function(){if(m=!1,g=0,w=0,!L){h.current&&(h.current.style.visibility="hidden"),p();return}l.current&&(l.current.style.overflow="visible",l.current.style.transform="translate(0px, "+R+"px)"),_().then(p).catch(p)};return s.createElement("div",{className:"ptr "+V,style:{backgroundColor:q},ref:c},s.createElement("div",{className:"ptr__pull-down",ref:h},s.createElement("div",{className:"ptr__loader ptr__pull-down--loading"},v),s.createElement("div",{className:"ptr__pull-down--pull-more"},U)),s.createElement("div",{className:"ptr__children",ref:l},T,s.createElement("div",{className:"ptr__fetch-more",ref:$},s.createElement("div",{className:"ptr__loader ptr__fetch-more--loading"},v))))};function ee(e=100){let n;return new Promise(o=>{n=setTimeout(()=>{clearTimeout(n),o()},e)})}const te=e=>r.jsx("svg",{viewBox:"0 0 256 256",width:"1.2em",height:"1.2em",...e,children:r.jsx("path",{fill:"currentColor",d:"m205.66 149.66l-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32"})});function ie({className:e,children:n}){async function o(){await ee(100)}return r.jsx(I,{onRefresh:o,maxPullDownDistance:50,pullingContent:r.jsx(ne,{}),children:r.jsx("section",{className:H([e,"min-h-[var(--content-height)]"]),style:{background:"linear-gradient( 180deg, #41D8CF 0%, #F2F2F7 100%)"},children:n})})}function ne(){const e=u.useRef(null),[n,o]=u.useState(!1);return u.useEffect(()=>{const a=document.querySelector(".ptr__pull-down");if(!a)return;const i=new MutationObserver(_=>{_.forEach(f=>{if(f.type==="attributes"&&f.attributeName==="style"){const E=window.getComputedStyle(a),v=E.display==="none"?"0":E.opacity;e.current!==v&&(e.current=v,o(Number(v??0)>=.57))}})});return i.observe(a,{childList:!1,attributes:!0,subtree:!1}),()=>{console.log("clean up"),i.disconnect()}},[]),r.jsxs("div",{className:"flex items-center pulling-content justify-center py-[20px] ",style:{height:50},children:[r.jsx(te,{className:H(["transition-transform !duration-500 text-sm",{"rotate-180":n}])}),r.jsx("span",{className:"text-sm",children:n?"上拉取消":"下拉刷新"})]})}const re=e=>r.jsx("svg",{color:"skyblue",fill:"currentColor",width:"0.18666666666666668rem",height:"0.18666666666666668rem",viewBox:"0 0 14 23",...e,children:r.jsx("g",{id:"\\u8FD0\\u8425\\u5546\\u67E5\\u8BE2",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd",children:r.jsx("g",{id:"\\u5145\\u8BDD\\u8D39",transform:"translate(-370.000000, -577.000000)",children:r.jsx("g",{id:"\\u7F16\\u7EC4-10",transform:"translate(20.000000, 389.000000)",children:r.jsx("g",{id:"\\u7F16\\u7EC4-9",transform:"translate(20.000000, 44.000000)",children:r.jsx("g",{id:"\\u7F16\\u7EC4-19",transform:"translate(175.000000, 134.000000)",children:r.jsx("g",{id:"xiala",transform:"translate(162.000000, 22.000000) rotate(-90.000000) translate(-162.000000, -22.000000) translate(144.000000, 4.000000)",children:r.jsxs("g",{id:"\\u7F16\\u7EC4-4",transform:"translate(18.298491, 18.175063) rotate(-270.000000) translate(-18.298491, -18.175063) translate(12.298491, 7.811427)",fill:"currentColor",strokeLinecap:"round",strokeWidth:2,children:[r.jsx("path",{d:"M0,0 L11.0051595,10.2833708",id:"\\u76F4\\u7EBF-3",stroke:"currentColor"}),r.jsx("path",{d:"M0,9.33882664 L11.0051595,19.6221974",id:"\\u76F4\\u7EBF-3",stroke:"currentColor",transform:"translate(5.707061, 14.942123) scale(1, -1) translate(-5.707061, -14.942123) "})]})})})})})})})}),oe=re;export{oe as A,ie as P};
