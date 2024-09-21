import{R as l,g as c,j as d}from"./index-B2NfJAoK.js";import{c as H}from"./smiley-wink-light-4m6x8rUD.js";var _;(function(e){e[e.UP=-1]="UP",e[e.DOWN=1]="DOWN"})(_||(_={}));function X(e){var t=getComputedStyle(e).overflowY;return e===document.scrollingElement&&t==="visible"?!0:!(t!=="scroll"&&t!=="auto")}function G(e,t){if(!X(e))return!1;if(t===_.DOWN){var s=e.scrollTop+e.clientHeight;return s<e.scrollHeight}if(t===_.UP)return e.scrollTop>0;throw new Error("unsupported direction")}function O(e,t){return G(e,t)?!0:e.parentElement==null?!1:O(e.parentElement,t)}function U(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",s==="top"&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var J=`.lds-ellipsis {
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
`;U(J);var K=function(){return l.createElement("div",{className:"lds-ellipsis"},l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null))},Q=function(){return l.createElement("div",null,l.createElement("p",null,"↧  pull to refresh  ↧"))},Z=`.ptr,
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
`;U(Z);var I=function(e){var t=e.isPullable,s=t===void 0?!0:t,o=e.canFetchMore,i=o===void 0?!1:o,x=e.onRefresh,f=e.onFetchMore,b=e.refreshingContent,v=b===void 0?l.createElement(K,null):b,M=e.pullingContent,z=M===void 0?l.createElement(Q,null):M,N=e.children,k=e.pullDownThreshold,R=k===void 0?67:k,j=e.fetchMoreThreshold,D=j===void 0?100:j,S=e.maxPullDownDistance,P=S===void 0?95:S,A=e.resistance,W=A===void 0?1:A,q=e.backgroundColor,F=e.className,V=F===void 0?"":F,a=c.useRef(null),r=c.useRef(null),p=c.useRef(null),$=c.useRef(null),L=!1,E=!1,m=!1,g=0,w=0;c.useEffect(function(){if(!(!s||!r||!r.current)){var n=r.current;return n.addEventListener("touchstart",T,{passive:!0}),n.addEventListener("mousedown",T),n.addEventListener("touchmove",C,{passive:!1}),n.addEventListener("mousemove",C),window.addEventListener("scroll",B),n.addEventListener("touchend",y),n.addEventListener("mouseup",y),document.body.addEventListener("mouseleave",y),function(){n.removeEventListener("touchstart",T),n.removeEventListener("mousedown",T),n.removeEventListener("touchmove",C),n.removeEventListener("mousemove",C),window.removeEventListener("scroll",B),n.removeEventListener("touchend",y),n.removeEventListener("mouseup",y),document.body.removeEventListener("mouseleave",y)}}},[N,s,x,R,P,i,D]),c.useEffect(function(){var n;if(!((n=a)===null||n===void 0)&&n.current){var u=a.current.classList.contains("ptr--fetch-more-treshold-breached");u||i&&Y()<D&&f&&(a.current.classList.add("ptr--fetch-more-treshold-breached"),E=!0,f().then(h).catch(h))}},[i,N]);var Y=function(){if(!r||!r.current)return-1;var n=window.scrollY,u=r.current.scrollHeight;return u-n-window.innerHeight},h=function(){requestAnimationFrame(function(){r.current&&(r.current.style.overflowX="hidden",r.current.style.overflowY="auto",r.current.style.transform="unset"),p.current&&(p.current.style.opacity="0"),a.current&&(a.current.classList.remove("ptr--pull-down-treshold-breached"),a.current.classList.remove("ptr--dragging"),a.current.classList.remove("ptr--fetch-more-treshold-breached")),L&&(L=!1),E&&(E=!1)})},T=function(n){m=!1,n instanceof MouseEvent&&(g=n.pageY),window.TouchEvent&&n instanceof TouchEvent&&(g=n.touches[0].pageY),w=g,!(n.type==="touchstart"&&O(n.target,_.UP))&&(r.current.getBoundingClientRect().top<0||(m=!0))},C=function(n){if(m){if(window.TouchEvent&&n instanceof TouchEvent?w=n.touches[0].pageY:w=n.pageY,a.current.classList.add("ptr--dragging"),w<g){m=!1;return}n.cancelable&&n.preventDefault();var u=Math.min((w-g)/W,P);u>=R&&(m=!0,L=!0,a.current.classList.remove("ptr--dragging"),a.current.classList.add("ptr--pull-down-treshold-breached")),!(u>=P)&&(p.current.style.opacity=(u/65).toString(),r.current.style.overflow="visible",r.current.style.transform="translate(0px, "+u+"px)",p.current.style.visibility="visible")}},B=function(n){E||i&&Y()<D&&f&&(E=!0,a.current.classList.add("ptr--fetch-more-treshold-breached"),f().then(h).catch(h))},y=function(){if(m=!1,g=0,w=0,!L){p.current&&(p.current.style.visibility="hidden"),h();return}r.current&&(r.current.style.overflow="visible",r.current.style.transform="translate(0px, "+R+"px)"),x().then(h).catch(h)};return l.createElement("div",{className:"ptr "+V,style:{backgroundColor:q},ref:a},l.createElement("div",{className:"ptr__pull-down",ref:p},l.createElement("div",{className:"ptr__loader ptr__pull-down--loading"},v),l.createElement("div",{className:"ptr__pull-down--pull-more"},z)),l.createElement("div",{className:"ptr__children",ref:r},N,l.createElement("div",{className:"ptr__fetch-more",ref:$},l.createElement("div",{className:"ptr__loader ptr__fetch-more--loading"},v))))};function ee(e=100){let t;return new Promise(s=>{t=setTimeout(()=>{clearTimeout(t),s()},e)})}const ne=e=>d.jsx("svg",{viewBox:"0 0 256 256",width:"1.2em",height:"1.2em",...e,children:d.jsx("path",{fill:"currentColor",d:"m205.66 149.66l-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32"})});function ie({className:e,children:t}){async function s(){await ee(100)}return d.jsx(I,{onRefresh:s,maxPullDownDistance:50,pullingContent:d.jsx(te,{}),children:d.jsx("section",{className:H([e,"min-h-[var(--content-height)]"]),style:{background:"linear-gradient( 180deg, #41D8CF 0%, #F2F2F7 100%)"},children:t})})}function te(){const e=c.useRef(null),[t,s]=c.useState(!1);return c.useEffect(()=>{const o=document.querySelector(".ptr__pull-down");if(!o)return;const i=new MutationObserver(x=>{x.forEach(f=>{if(f.type==="attributes"&&f.attributeName==="style"){const b=window.getComputedStyle(o),v=b.display==="none"?"0":b.opacity;e.current!==v&&(e.current=v,s(Number(v??0)>=.57))}})});return i.observe(o,{childList:!1,attributes:!0,subtree:!1}),()=>{console.log("clean up"),i.disconnect()}},[]),d.jsxs("div",{className:"flex items-center pulling-content justify-center py-[20px] ",style:{height:50},children:[d.jsx(ne,{className:H(["transition-transform !duration-500 text-sm",{"rotate-180":t}])}),d.jsx("span",{className:"text-sm",children:t?"上拉取消":"下拉刷新"})]})}export{ie as P};
