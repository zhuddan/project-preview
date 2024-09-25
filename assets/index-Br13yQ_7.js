const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CNMjldKi.js","assets/tabbar-service-B-Rk7dW2.js","assets/result-D2QziGxt.js","assets/btn-Cur1-5o9.js","assets/home-BrofFb50.js","assets/customer-service-O39QrfiA.js","assets/home-CqACEEbq.css","assets/service-CXc09Cd7.js"])))=>i.map(i=>d[i]);
var uc=e=>{throw TypeError(e)};var wl=(e,t,n)=>t.has(e)||uc("Cannot "+n);var E=(e,t,n)=>(wl(e,t,"read from private field"),n?n.call(e):t.get(e)),re=(e,t,n)=>t.has(e)?uc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),X=(e,t,n,r)=>(wl(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Ue=(e,t,n)=>(wl(e,t,"access private method"),n);var Li=(e,t,n,r)=>({set _(o){X(e,t,o,n)},get _(){return E(e,t,r)}});function lf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function sf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function $1(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var uf={exports:{}},Xa={},cf={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yi=Symbol.for("react.element"),gm=Symbol.for("react.portal"),ym=Symbol.for("react.fragment"),bm=Symbol.for("react.strict_mode"),xm=Symbol.for("react.profiler"),wm=Symbol.for("react.provider"),km=Symbol.for("react.context"),Sm=Symbol.for("react.forward_ref"),Pm=Symbol.for("react.suspense"),Em=Symbol.for("react.memo"),Om=Symbol.for("react.lazy"),cc=Symbol.iterator;function Cm(e){return e===null||typeof e!="object"?null:(e=cc&&e[cc]||e["@@iterator"],typeof e=="function"?e:null)}var df={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ff=Object.assign,hf={};function uo(e,t,n){this.props=e,this.context=t,this.refs=hf,this.updater=n||df}uo.prototype.isReactComponent={};uo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};uo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pf(){}pf.prototype=uo.prototype;function Ys(e,t,n){this.props=e,this.context=t,this.refs=hf,this.updater=n||df}var Gs=Ys.prototype=new pf;Gs.constructor=Ys;ff(Gs,uo.prototype);Gs.isPureReactComponent=!0;var dc=Array.isArray,mf=Object.prototype.hasOwnProperty,Js={current:null},vf={key:!0,ref:!0,__self:!0,__source:!0};function gf(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)mf.call(t,r)&&!vf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:yi,type:e,key:i,ref:a,props:o,_owner:Js.current}}function _m(e,t){return{$$typeof:yi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zs(e){return typeof e=="object"&&e!==null&&e.$$typeof===yi}function zm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fc=/\/+/g;function kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zm(""+e.key):t.toString(36)}function la(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case yi:case gm:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+kl(a,0):r,dc(o)?(n="",e!=null&&(n=e.replace(fc,"$&/")+"/"),la(o,t,n,"",function(u){return u})):o!=null&&(Zs(o)&&(o=_m(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(fc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",dc(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+kl(i,l);a+=la(i,t,n,s,o)}else if(s=Cm(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+kl(i,l++),a+=la(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ni(e,t,n){if(e==null)return e;var r=[],o=0;return la(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Rm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},sa={transition:null},Dm={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:sa,ReactCurrentOwner:Js};function yf(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Ni,forEach:function(e,t,n){Ni(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ni(e,function(){t++}),t},toArray:function(e){return Ni(e,function(t){return t})||[]},only:function(e){if(!Zs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=uo;Z.Fragment=ym;Z.Profiler=xm;Z.PureComponent=Ys;Z.StrictMode=bm;Z.Suspense=Pm;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dm;Z.act=yf;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ff({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Js.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)mf.call(t,s)&&!vf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:yi,type:e.type,key:o,ref:i,props:r,_owner:a}};Z.createContext=function(e){return e={$$typeof:km,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wm,_context:e},e.Consumer=e};Z.createElement=gf;Z.createFactory=function(e){var t=gf.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:Sm,render:e}};Z.isValidElement=Zs;Z.lazy=function(e){return{$$typeof:Om,_payload:{_status:-1,_result:e},_init:Rm}};Z.memo=function(e,t){return{$$typeof:Em,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=sa.transition;sa.transition={};try{e()}finally{sa.transition=t}};Z.unstable_act=yf;Z.useCallback=function(e,t){return Je.current.useCallback(e,t)};Z.useContext=function(e){return Je.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};Z.useEffect=function(e,t){return Je.current.useEffect(e,t)};Z.useId=function(){return Je.current.useId()};Z.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return Je.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};Z.useRef=function(e){return Je.current.useRef(e)};Z.useState=function(e){return Je.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return Je.current.useTransition()};Z.version="18.3.1";cf.exports=Z;var O=cf.exports;const J=sf(O),Tm=lf({__proto__:null,default:J},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm=O,Lm=Symbol.for("react.element"),Nm=Symbol.for("react.fragment"),Fm=Object.prototype.hasOwnProperty,jm=Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Am={key:!0,ref:!0,__self:!0,__source:!0};function bf(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Fm.call(t,r)&&!Am.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Lm,type:e,key:i,ref:a,props:o,_owner:jm.current}}Xa.Fragment=Nm;Xa.jsx=bf;Xa.jsxs=bf;uf.exports=Xa;var Y=uf.exports;(function(t,n){const r=n.documentElement,o=t.devicePixelRatio||1;function i(){n.body?n.body.style.fontSize=`${12*o}px`:n.addEventListener("DOMContentLoaded",i)}i();function a(){const l=r.clientWidth/10;r.style.fontSize=`${l}px`}if(a(),t.addEventListener("resize",a),t.addEventListener("pageshow",l=>{l.persisted&&a()}),o>=2){const l=n.createElement("body"),s=n.createElement("div");s.style.border=".5px solid transparent",l.appendChild(s),r.appendChild(l),s.offsetHeight===1&&r.classList.add("hairlines"),r.removeChild(l)}})(window,document);var Zl={},xf={exports:{}},mt={},wf={exports:{}},kf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,A){var V=L.length;L.push(A);e:for(;0<V;){var se=V-1>>>1,ce=L[se];if(0<o(ce,A))L[se]=A,L[V]=ce,V=se;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var A=L[0],V=L.pop();if(V!==A){L[0]=V;e:for(var se=0,ce=L.length,et=ce>>>1;se<et;){var tt=2*(se+1)-1,Kt=L[tt],Fe=tt+1,gt=L[Fe];if(0>o(Kt,V))Fe<ce&&0>o(gt,Kt)?(L[se]=gt,L[Fe]=V,se=Fe):(L[se]=Kt,L[tt]=V,se=tt);else if(Fe<ce&&0>o(gt,V))L[se]=gt,L[Fe]=V,se=Fe;else break e}}return A}function o(L,A){var V=L.sortIndex-A.sortIndex;return V!==0?V:L.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],d=1,c=null,h=3,x=!1,b=!1,m=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=L)r(u),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(u)}}function k(L){if(m=!1,v(L),!b)if(n(s)!==null)b=!0,Et(C);else{var A=n(u);A!==null&&pn(k,A.startTime-L)}}function C(L,A){b=!1,m&&(m=!1,p(g),g=-1),x=!0;var V=h;try{for(v(A),c=n(s);c!==null&&(!(c.expirationTime>A)||L&&!Q());){var se=c.callback;if(typeof se=="function"){c.callback=null,h=c.priorityLevel;var ce=se(c.expirationTime<=A);A=e.unstable_now(),typeof ce=="function"?c.callback=ce:c===n(s)&&r(s),v(A)}else r(s);c=n(s)}if(c!==null)var et=!0;else{var tt=n(u);tt!==null&&pn(k,tt.startTime-A),et=!1}return et}finally{c=null,h=V,x=!1}}var R=!1,D=null,g=-1,M=5,j=-1;function Q(){return!(e.unstable_now()-j<M)}function le(){if(D!==null){var L=e.unstable_now();j=L;var A=!0;try{A=D(!0,L)}finally{A?Oe():(R=!1,D=null)}}else R=!1}var Oe;if(typeof f=="function")Oe=function(){f(le)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,At=xe.port2;xe.port1.onmessage=le,Oe=function(){At.postMessage(null)}}else Oe=function(){P(le,0)};function Et(L){D=L,R||(R=!0,Oe())}function pn(L,A){g=P(function(){L(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){b||x||(b=!0,Et(C))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var V=h;h=A;try{return L()}finally{h=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,A){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var V=h;h=L;try{return A()}finally{h=V}},e.unstable_scheduleCallback=function(L,A,V){var se=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?se+V:se):V=se,L){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=V+ce,L={id:d++,callback:A,priorityLevel:L,startTime:V,expirationTime:ce,sortIndex:-1},V>se?(L.sortIndex=V,t(u,L),n(s)===null&&L===n(u)&&(m?(p(g),g=-1):m=!0,pn(k,V-se))):(L.sortIndex=ce,t(s,L),b||x||(b=!0,Et(C))),L},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(L){var A=h;return function(){var V=h;h=A;try{return L.apply(this,arguments)}finally{h=V}}}})(kf);wf.exports=kf;var Im=wf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um=O,pt=Im;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sf=new Set,Ko={};function yr(e,t){to(e,t),to(e+"Capture",t)}function to(e,t){for(Ko[e]=t,e=0;e<t.length;e++)Sf.add(t[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),es=Object.prototype.hasOwnProperty,$m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hc={},pc={};function qm(e){return es.call(pc,e)?!0:es.call(hc,e)?!1:$m.test(e)?pc[e]=!0:(hc[e]=!0,!1)}function Hm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bm(e,t,n,r){if(t===null||typeof t>"u"||Hm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new Ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var eu=/[\-:]([a-z])/g;function tu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(eu,tu);Ie[t]=new Ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(eu,tu);Ie[t]=new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(eu,tu);Ie[t]=new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function nu(e,t,n,r){var o=Ie.hasOwnProperty(t)?Ie[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bm(t,n,o,r)&&(n=null),r||o===null?qm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var fn=Um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fi=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),_r=Symbol.for("react.fragment"),ru=Symbol.for("react.strict_mode"),ts=Symbol.for("react.profiler"),Pf=Symbol.for("react.provider"),Ef=Symbol.for("react.context"),ou=Symbol.for("react.forward_ref"),ns=Symbol.for("react.suspense"),rs=Symbol.for("react.suspense_list"),iu=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),Of=Symbol.for("react.offscreen"),mc=Symbol.iterator;function wo(e){return e===null||typeof e!="object"?null:(e=mc&&e[mc]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,Sl;function Mo(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var Pl=!1;function El(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mo(e):""}function Vm(e){switch(e.tag){case 5:return Mo(e.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function os(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _r:return"Fragment";case Cr:return"Portal";case ts:return"Profiler";case ru:return"StrictMode";case ns:return"Suspense";case rs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ef:return(e.displayName||"Context")+".Consumer";case Pf:return(e._context.displayName||"Context")+".Provider";case ou:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case iu:return t=e.displayName||null,t!==null?t:os(e.type)||"Memo";case Sn:t=e._payload,e=e._init;try{return os(e(t))}catch{}}return null}function Qm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return os(t);case 8:return t===ru?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wm(e){var t=Cf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ji(e){e._valueTracker||(e._valueTracker=Wm(e))}function _f(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function is(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zf(e,t){t=t.checked,t!=null&&nu(e,"checked",t,!1)}function as(e,t){zf(e,t);var n=Hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ls(e,t.type,n):t.hasOwnProperty("defaultValue")&&ls(e,t.type,Hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ls(e,t,n){(t!=="number"||xa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lo=Array.isArray;function Ur(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Hn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ss(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Lo(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Hn(n)}}function Rf(e,t){var n=Hn(t.value),r=Hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Df(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function us(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Df(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ai,Tf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ai=Ai||document.createElement("div"),Ai.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Km=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(e){Km.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Io[t]=Io[e]})});function Mf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Io.hasOwnProperty(e)&&Io[e]?(""+t).trim():t+"px"}function Lf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Mf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Xm=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cs(e,t){if(t){if(Xm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function ds(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fs=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hs=null,$r=null,qr=null;function xc(e){if(e=wi(e)){if(typeof hs!="function")throw Error(z(280));var t=e.stateNode;t&&(t=el(t),hs(e.stateNode,e.type,t))}}function Nf(e){$r?qr?qr.push(e):qr=[e]:$r=e}function Ff(){if($r){var e=$r,t=qr;if(qr=$r=null,xc(e),t)for(e=0;e<t.length;e++)xc(t[e])}}function jf(e,t){return e(t)}function Af(){}var Ol=!1;function If(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return jf(e,t,n)}finally{Ol=!1,($r!==null||qr!==null)&&(Af(),Ff())}}function Yo(e,t){var n=e.stateNode;if(n===null)return null;var r=el(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var ps=!1;if(sn)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){ps=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{ps=!1}function Ym(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Uo=!1,wa=null,ka=!1,ms=null,Gm={onError:function(e){Uo=!0,wa=e}};function Jm(e,t,n,r,o,i,a,l,s){Uo=!1,wa=null,Ym.apply(Gm,arguments)}function Zm(e,t,n,r,o,i,a,l,s){if(Jm.apply(this,arguments),Uo){if(Uo){var u=wa;Uo=!1,wa=null}else throw Error(z(198));ka||(ka=!0,ms=u)}}function br(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Uf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wc(e){if(br(e)!==e)throw Error(z(188))}function e0(e){var t=e.alternate;if(!t){if(t=br(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return wc(o),e;if(i===r)return wc(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function $f(e){return e=e0(e),e!==null?qf(e):null}function qf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qf(e);if(t!==null)return t;e=e.sibling}return null}var Hf=pt.unstable_scheduleCallback,kc=pt.unstable_cancelCallback,t0=pt.unstable_shouldYield,n0=pt.unstable_requestPaint,Ee=pt.unstable_now,r0=pt.unstable_getCurrentPriorityLevel,lu=pt.unstable_ImmediatePriority,Bf=pt.unstable_UserBlockingPriority,Sa=pt.unstable_NormalPriority,o0=pt.unstable_LowPriority,Vf=pt.unstable_IdlePriority,Ya=null,Qt=null;function i0(e){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(Ya,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:s0,a0=Math.log,l0=Math.LN2;function s0(e){return e>>>=0,e===0?32:31-(a0(e)/l0|0)|0}var Ii=64,Ui=4194304;function No(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=No(l):(i&=a,i!==0&&(r=No(i)))}else a=n&~o,a!==0?r=No(a):i!==0&&(r=No(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),o=1<<n,r|=e[n],t&=~o;return r}function u0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Nt(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=u0(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qf(){var e=Ii;return Ii<<=1,!(Ii&4194240)&&(Ii=64),e}function Cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function d0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Nt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function su(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ie=0;function Wf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kf,uu,Xf,Yf,Gf,gs=!1,$i=[],Nn=null,Fn=null,jn=null,Go=new Map,Jo=new Map,En=[],f0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(t.pointerId)}}function So(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=wi(t),t!==null&&uu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function h0(e,t,n,r,o){switch(t){case"focusin":return Nn=So(Nn,e,t,n,r,o),!0;case"dragenter":return Fn=So(Fn,e,t,n,r,o),!0;case"mouseover":return jn=So(jn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Go.set(i,So(Go.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Jo.set(i,So(Jo.get(i)||null,e,t,n,r,o)),!0}return!1}function Jf(e){var t=nr(e.target);if(t!==null){var n=br(t);if(n!==null){if(t=n.tag,t===13){if(t=Uf(n),t!==null){e.blockedOn=t,Gf(e.priority,function(){Xf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ua(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ys(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fs=r,n.target.dispatchEvent(r),fs=null}else return t=wi(n),t!==null&&uu(t),e.blockedOn=n,!1;t.shift()}return!0}function Pc(e,t,n){ua(e)&&n.delete(t)}function p0(){gs=!1,Nn!==null&&ua(Nn)&&(Nn=null),Fn!==null&&ua(Fn)&&(Fn=null),jn!==null&&ua(jn)&&(jn=null),Go.forEach(Pc),Jo.forEach(Pc)}function Po(e,t){e.blockedOn===t&&(e.blockedOn=null,gs||(gs=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,p0)))}function Zo(e){function t(o){return Po(o,e)}if(0<$i.length){Po($i[0],e);for(var n=1;n<$i.length;n++){var r=$i[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nn!==null&&Po(Nn,e),Fn!==null&&Po(Fn,e),jn!==null&&Po(jn,e),Go.forEach(t),Jo.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)Jf(n),n.blockedOn===null&&En.shift()}var Hr=fn.ReactCurrentBatchConfig,Ea=!0;function m0(e,t,n,r){var o=ie,i=Hr.transition;Hr.transition=null;try{ie=1,cu(e,t,n,r)}finally{ie=o,Hr.transition=i}}function v0(e,t,n,r){var o=ie,i=Hr.transition;Hr.transition=null;try{ie=4,cu(e,t,n,r)}finally{ie=o,Hr.transition=i}}function cu(e,t,n,r){if(Ea){var o=ys(e,t,n,r);if(o===null)jl(e,t,r,Oa,n),Sc(e,r);else if(h0(o,e,t,n,r))r.stopPropagation();else if(Sc(e,r),t&4&&-1<f0.indexOf(e)){for(;o!==null;){var i=wi(o);if(i!==null&&Kf(i),i=ys(e,t,n,r),i===null&&jl(e,t,r,Oa,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else jl(e,t,r,null,n)}}var Oa=null;function ys(e,t,n,r){if(Oa=null,e=au(r),e=nr(e),e!==null)if(t=br(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Uf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oa=e,null}function Zf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r0()){case lu:return 1;case Bf:return 4;case Sa:case o0:return 16;case Vf:return 536870912;default:return 16}default:return 16}}var Tn=null,du=null,ca=null;function eh(){if(ca)return ca;var e,t=du,n=t.length,r,o="value"in Tn?Tn.value:Tn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return ca=o.slice(e,1<r?1-r:void 0)}function da(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function Ec(){return!1}function vt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qi:Ec,this.isPropagationStopped=Ec,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),t}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fu=vt(co),xi=be({},co,{view:0,detail:0}),g0=vt(xi),_l,zl,Eo,Ga=be({},xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Eo&&(Eo&&e.type==="mousemove"?(_l=e.screenX-Eo.screenX,zl=e.screenY-Eo.screenY):zl=_l=0,Eo=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Oc=vt(Ga),y0=be({},Ga,{dataTransfer:0}),b0=vt(y0),x0=be({},xi,{relatedTarget:0}),Rl=vt(x0),w0=be({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),k0=vt(w0),S0=be({},co,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P0=vt(S0),E0=be({},co,{data:0}),Cc=vt(E0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_0[e])?!!t[e]:!1}function hu(){return z0}var R0=be({},xi,{key:function(e){if(e.key){var t=O0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=da(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?C0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(e){return e.type==="keypress"?da(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?da(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),D0=vt(R0),T0=be({},Ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_c=vt(T0),M0=be({},xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),L0=vt(M0),N0=be({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=vt(N0),j0=be({},Ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A0=vt(j0),I0=[9,13,27,32],pu=sn&&"CompositionEvent"in window,$o=null;sn&&"documentMode"in document&&($o=document.documentMode);var U0=sn&&"TextEvent"in window&&!$o,th=sn&&(!pu||$o&&8<$o&&11>=$o),zc=" ",Rc=!1;function nh(e,t){switch(e){case"keyup":return I0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function $0(e,t){switch(e){case"compositionend":return rh(t);case"keypress":return t.which!==32?null:(Rc=!0,zc);case"textInput":return e=t.data,e===zc&&Rc?null:e;default:return null}}function q0(e,t){if(zr)return e==="compositionend"||!pu&&nh(e,t)?(e=eh(),ca=du=Tn=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return th&&t.locale!=="ko"?null:t.data;default:return null}}var H0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!H0[e.type]:t==="textarea"}function oh(e,t,n,r){Nf(r),t=Ca(t,"onChange"),0<t.length&&(n=new fu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qo=null,ei=null;function B0(e){mh(e,0)}function Ja(e){var t=Tr(e);if(_f(t))return e}function V0(e,t){if(e==="change")return t}var ih=!1;if(sn){var Dl;if(sn){var Tl="oninput"in document;if(!Tl){var Tc=document.createElement("div");Tc.setAttribute("oninput","return;"),Tl=typeof Tc.oninput=="function"}Dl=Tl}else Dl=!1;ih=Dl&&(!document.documentMode||9<document.documentMode)}function Mc(){qo&&(qo.detachEvent("onpropertychange",ah),ei=qo=null)}function ah(e){if(e.propertyName==="value"&&Ja(ei)){var t=[];oh(t,ei,e,au(e)),If(B0,t)}}function Q0(e,t,n){e==="focusin"?(Mc(),qo=t,ei=n,qo.attachEvent("onpropertychange",ah)):e==="focusout"&&Mc()}function W0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ja(ei)}function K0(e,t){if(e==="click")return Ja(t)}function X0(e,t){if(e==="input"||e==="change")return Ja(t)}function Y0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Y0;function ti(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!es.call(t,o)||!jt(e[o],t[o]))return!1}return!0}function Lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nc(e,t){var n=Lc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lc(n)}}function lh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sh(){for(var e=window,t=xa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xa(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function G0(e){var t=sh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lh(n.ownerDocument.documentElement,n)){if(r!==null&&mu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Nc(n,i);var a=Nc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var J0=sn&&"documentMode"in document&&11>=document.documentMode,Rr=null,bs=null,Ho=null,xs=!1;function Fc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xs||Rr==null||Rr!==xa(r)||(r=Rr,"selectionStart"in r&&mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ho&&ti(Ho,r)||(Ho=r,r=Ca(bs,"onSelect"),0<r.length&&(t=new fu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dr={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},Ml={},uh={};sn&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function Za(e){if(Ml[e])return Ml[e];if(!Dr[e])return e;var t=Dr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uh)return Ml[e]=t[n];return e}var ch=Za("animationend"),dh=Za("animationiteration"),fh=Za("animationstart"),hh=Za("transitionend"),ph=new Map,jc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,t){ph.set(e,t),yr(t,[e])}for(var Ll=0;Ll<jc.length;Ll++){var Nl=jc[Ll],Z0=Nl.toLowerCase(),ev=Nl[0].toUpperCase()+Nl.slice(1);Vn(Z0,"on"+ev)}Vn(ch,"onAnimationEnd");Vn(dh,"onAnimationIteration");Vn(fh,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(hh,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function Ac(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zm(r,t,void 0,e),e.currentTarget=null}function mh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Ac(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Ac(o,l,u),i=s}}}if(ka)throw e=ms,ka=!1,ms=null,e}function fe(e,t){var n=t[Es];n===void 0&&(n=t[Es]=new Set);var r=e+"__bubble";n.has(r)||(vh(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),vh(n,e,r,t)}var Bi="_reactListening"+Math.random().toString(36).slice(2);function ni(e){if(!e[Bi]){e[Bi]=!0,Sf.forEach(function(n){n!=="selectionchange"&&(tv.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bi]||(t[Bi]=!0,Fl("selectionchange",!1,t))}}function vh(e,t,n,r){switch(Zf(t)){case 1:var o=m0;break;case 4:o=v0;break;default:o=cu}n=o.bind(null,t,n,e),o=void 0,!ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function jl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=nr(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}If(function(){var u=i,d=au(n),c=[];e:{var h=ph.get(e);if(h!==void 0){var x=fu,b=e;switch(e){case"keypress":if(da(n)===0)break e;case"keydown":case"keyup":x=D0;break;case"focusin":b="focus",x=Rl;break;case"focusout":b="blur",x=Rl;break;case"beforeblur":case"afterblur":x=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=b0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=L0;break;case ch:case dh:case fh:x=k0;break;case hh:x=F0;break;case"scroll":x=g0;break;case"wheel":x=A0;break;case"copy":case"cut":case"paste":x=P0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=_c}var m=(t&4)!==0,P=!m&&e==="scroll",p=m?h!==null?h+"Capture":null:h;m=[];for(var f=u,v;f!==null;){v=f;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,p!==null&&(k=Yo(f,p),k!=null&&m.push(ri(f,k,v)))),P)break;f=f.return}0<m.length&&(h=new x(h,b,null,n,d),c.push({event:h,listeners:m}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==fs&&(b=n.relatedTarget||n.fromElement)&&(nr(b)||b[un]))break e;if((x||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,x?(b=n.relatedTarget||n.toElement,x=u,b=b?nr(b):null,b!==null&&(P=br(b),b!==P||b.tag!==5&&b.tag!==6)&&(b=null)):(x=null,b=u),x!==b)){if(m=Oc,k="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(m=_c,k="onPointerLeave",p="onPointerEnter",f="pointer"),P=x==null?h:Tr(x),v=b==null?h:Tr(b),h=new m(k,f+"leave",x,n,d),h.target=P,h.relatedTarget=v,k=null,nr(d)===u&&(m=new m(p,f+"enter",b,n,d),m.target=v,m.relatedTarget=P,k=m),P=k,x&&b)t:{for(m=x,p=b,f=0,v=m;v;v=Sr(v))f++;for(v=0,k=p;k;k=Sr(k))v++;for(;0<f-v;)m=Sr(m),f--;for(;0<v-f;)p=Sr(p),v--;for(;f--;){if(m===p||p!==null&&m===p.alternate)break t;m=Sr(m),p=Sr(p)}m=null}else m=null;x!==null&&Ic(c,h,x,m,!1),b!==null&&P!==null&&Ic(c,P,b,m,!0)}}e:{if(h=u?Tr(u):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var C=V0;else if(Dc(h))if(ih)C=X0;else{C=W0;var R=Q0}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=K0);if(C&&(C=C(e,u))){oh(c,C,n,d);break e}R&&R(e,h,u),e==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&ls(h,"number",h.value)}switch(R=u?Tr(u):window,e){case"focusin":(Dc(R)||R.contentEditable==="true")&&(Rr=R,bs=u,Ho=null);break;case"focusout":Ho=bs=Rr=null;break;case"mousedown":xs=!0;break;case"contextmenu":case"mouseup":case"dragend":xs=!1,Fc(c,n,d);break;case"selectionchange":if(J0)break;case"keydown":case"keyup":Fc(c,n,d)}var D;if(pu)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else zr?nh(e,n)&&(g="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(th&&n.locale!=="ko"&&(zr||g!=="onCompositionStart"?g==="onCompositionEnd"&&zr&&(D=eh()):(Tn=d,du="value"in Tn?Tn.value:Tn.textContent,zr=!0)),R=Ca(u,g),0<R.length&&(g=new Cc(g,e,null,n,d),c.push({event:g,listeners:R}),D?g.data=D:(D=rh(n),D!==null&&(g.data=D)))),(D=U0?$0(e,n):q0(e,n))&&(u=Ca(u,"onBeforeInput"),0<u.length&&(d=new Cc("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=D))}mh(c,t)})}function ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ca(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Yo(e,n),i!=null&&r.unshift(ri(e,i,o)),i=Yo(e,t),i!=null&&r.push(ri(e,i,o))),e=e.return}return r}function Sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ic(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Yo(n,i),s!=null&&a.unshift(ri(n,s,l))):o||(s=Yo(n,i),s!=null&&a.push(ri(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var nv=/\r\n?/g,rv=/\u0000|\uFFFD/g;function Uc(e){return(typeof e=="string"?e:""+e).replace(nv,`
`).replace(rv,"")}function Vi(e,t,n){if(t=Uc(t),Uc(e)!==t&&n)throw Error(z(425))}function _a(){}var ws=null,ks=null;function Ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ps=typeof setTimeout=="function"?setTimeout:void 0,ov=typeof clearTimeout=="function"?clearTimeout:void 0,$c=typeof Promise=="function"?Promise:void 0,iv=typeof queueMicrotask=="function"?queueMicrotask:typeof $c<"u"?function(e){return $c.resolve(null).then(e).catch(av)}:Ps;function av(e){setTimeout(function(){throw e})}function Al(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Zo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Zo(t)}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fo=Math.random().toString(36).slice(2),Bt="__reactFiber$"+fo,oi="__reactProps$"+fo,un="__reactContainer$"+fo,Es="__reactEvents$"+fo,lv="__reactListeners$"+fo,sv="__reactHandles$"+fo;function nr(e){var t=e[Bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[un]||n[Bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qc(e);e!==null;){if(n=e[Bt])return n;e=qc(e)}return t}e=n,n=e.parentNode}return null}function wi(e){return e=e[Bt]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function el(e){return e[oi]||null}var Os=[],Mr=-1;function Qn(e){return{current:e}}function he(e){0>Mr||(e.current=Os[Mr],Os[Mr]=null,Mr--)}function ue(e,t){Mr++,Os[Mr]=e.current,e.current=t}var Bn={},Ve=Qn(Bn),ot=Qn(!1),fr=Bn;function no(e,t){var n=e.type.contextTypes;if(!n)return Bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function it(e){return e=e.childContextTypes,e!=null}function za(){he(ot),he(Ve)}function Hc(e,t,n){if(Ve.current!==Bn)throw Error(z(168));ue(Ve,t),ue(ot,n)}function gh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,Qm(e)||"Unknown",o));return be({},n,r)}function Ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bn,fr=Ve.current,ue(Ve,e),ue(ot,ot.current),!0}function Bc(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=gh(e,t,fr),r.__reactInternalMemoizedMergedChildContext=e,he(ot),he(Ve),ue(Ve,e)):he(ot),ue(ot,n)}var nn=null,tl=!1,Il=!1;function yh(e){nn===null?nn=[e]:nn.push(e)}function uv(e){tl=!0,yh(e)}function Wn(){if(!Il&&nn!==null){Il=!0;var e=0,t=ie;try{var n=nn;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nn=null,tl=!1}catch(o){throw nn!==null&&(nn=nn.slice(e+1)),Hf(lu,Wn),o}finally{ie=t,Il=!1}}return null}var Lr=[],Nr=0,Da=null,Ta=0,bt=[],xt=0,hr=null,rn=1,on="";function Zn(e,t){Lr[Nr++]=Ta,Lr[Nr++]=Da,Da=e,Ta=t}function bh(e,t,n){bt[xt++]=rn,bt[xt++]=on,bt[xt++]=hr,hr=e;var r=rn;e=on;var o=32-Nt(r)-1;r&=~(1<<o),n+=1;var i=32-Nt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,rn=1<<32-Nt(t)+o|n<<o|r,on=i+e}else rn=1<<i|n<<o|r,on=e}function vu(e){e.return!==null&&(Zn(e,1),bh(e,1,0))}function gu(e){for(;e===Da;)Da=Lr[--Nr],Lr[Nr]=null,Ta=Lr[--Nr],Lr[Nr]=null;for(;e===hr;)hr=bt[--xt],bt[xt]=null,on=bt[--xt],bt[xt]=null,rn=bt[--xt],bt[xt]=null}var ht=null,ft=null,me=!1,Mt=null;function xh(e,t){var n=wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,ft=An(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hr!==null?{id:rn,overflow:on}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,ft=null,!0):!1;default:return!1}}function Cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _s(e){if(me){var t=ft;if(t){var n=t;if(!Vc(e,t)){if(Cs(e))throw Error(z(418));t=An(n.nextSibling);var r=ht;t&&Vc(e,t)?xh(r,n):(e.flags=e.flags&-4097|2,me=!1,ht=e)}}else{if(Cs(e))throw Error(z(418));e.flags=e.flags&-4097|2,me=!1,ht=e}}}function Qc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Qi(e){if(e!==ht)return!1;if(!me)return Qc(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ss(e.type,e.memoizedProps)),t&&(t=ft)){if(Cs(e))throw wh(),Error(z(418));for(;t;)xh(e,t),t=An(t.nextSibling)}if(Qc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=An(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ht?An(e.stateNode.nextSibling):null;return!0}function wh(){for(var e=ft;e;)e=An(e.nextSibling)}function ro(){ft=ht=null,me=!1}function yu(e){Mt===null?Mt=[e]:Mt.push(e)}var cv=fn.ReactCurrentBatchConfig;function Oo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Wi(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wc(e){var t=e._init;return t(e._payload)}function kh(e){function t(p,f){if(e){var v=p.deletions;v===null?(p.deletions=[f],p.flags|=16):v.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function o(p,f){return p=qn(p,f),p.index=0,p.sibling=null,p}function i(p,f,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<f?(p.flags|=2,f):v):(p.flags|=2,f)):(p.flags|=1048576,f)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,f,v,k){return f===null||f.tag!==6?(f=Ql(v,p.mode,k),f.return=p,f):(f=o(f,v),f.return=p,f)}function s(p,f,v,k){var C=v.type;return C===_r?d(p,f,v.props.children,k,v.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Sn&&Wc(C)===f.type)?(k=o(f,v.props),k.ref=Oo(p,f,v),k.return=p,k):(k=ya(v.type,v.key,v.props,null,p.mode,k),k.ref=Oo(p,f,v),k.return=p,k)}function u(p,f,v,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Wl(v,p.mode,k),f.return=p,f):(f=o(f,v.children||[]),f.return=p,f)}function d(p,f,v,k,C){return f===null||f.tag!==7?(f=dr(v,p.mode,k,C),f.return=p,f):(f=o(f,v),f.return=p,f)}function c(p,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ql(""+f,p.mode,v),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Fi:return v=ya(f.type,f.key,f.props,null,p.mode,v),v.ref=Oo(p,null,f),v.return=p,v;case Cr:return f=Wl(f,p.mode,v),f.return=p,f;case Sn:var k=f._init;return c(p,k(f._payload),v)}if(Lo(f)||wo(f))return f=dr(f,p.mode,v,null),f.return=p,f;Wi(p,f)}return null}function h(p,f,v,k){var C=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:l(p,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Fi:return v.key===C?s(p,f,v,k):null;case Cr:return v.key===C?u(p,f,v,k):null;case Sn:return C=v._init,h(p,f,C(v._payload),k)}if(Lo(v)||wo(v))return C!==null?null:d(p,f,v,k,null);Wi(p,v)}return null}function x(p,f,v,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(v)||null,l(f,p,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Fi:return p=p.get(k.key===null?v:k.key)||null,s(f,p,k,C);case Cr:return p=p.get(k.key===null?v:k.key)||null,u(f,p,k,C);case Sn:var R=k._init;return x(p,f,v,R(k._payload),C)}if(Lo(k)||wo(k))return p=p.get(v)||null,d(f,p,k,C,null);Wi(f,k)}return null}function b(p,f,v,k){for(var C=null,R=null,D=f,g=f=0,M=null;D!==null&&g<v.length;g++){D.index>g?(M=D,D=null):M=D.sibling;var j=h(p,D,v[g],k);if(j===null){D===null&&(D=M);break}e&&D&&j.alternate===null&&t(p,D),f=i(j,f,g),R===null?C=j:R.sibling=j,R=j,D=M}if(g===v.length)return n(p,D),me&&Zn(p,g),C;if(D===null){for(;g<v.length;g++)D=c(p,v[g],k),D!==null&&(f=i(D,f,g),R===null?C=D:R.sibling=D,R=D);return me&&Zn(p,g),C}for(D=r(p,D);g<v.length;g++)M=x(D,p,g,v[g],k),M!==null&&(e&&M.alternate!==null&&D.delete(M.key===null?g:M.key),f=i(M,f,g),R===null?C=M:R.sibling=M,R=M);return e&&D.forEach(function(Q){return t(p,Q)}),me&&Zn(p,g),C}function m(p,f,v,k){var C=wo(v);if(typeof C!="function")throw Error(z(150));if(v=C.call(v),v==null)throw Error(z(151));for(var R=C=null,D=f,g=f=0,M=null,j=v.next();D!==null&&!j.done;g++,j=v.next()){D.index>g?(M=D,D=null):M=D.sibling;var Q=h(p,D,j.value,k);if(Q===null){D===null&&(D=M);break}e&&D&&Q.alternate===null&&t(p,D),f=i(Q,f,g),R===null?C=Q:R.sibling=Q,R=Q,D=M}if(j.done)return n(p,D),me&&Zn(p,g),C;if(D===null){for(;!j.done;g++,j=v.next())j=c(p,j.value,k),j!==null&&(f=i(j,f,g),R===null?C=j:R.sibling=j,R=j);return me&&Zn(p,g),C}for(D=r(p,D);!j.done;g++,j=v.next())j=x(D,p,g,j.value,k),j!==null&&(e&&j.alternate!==null&&D.delete(j.key===null?g:j.key),f=i(j,f,g),R===null?C=j:R.sibling=j,R=j);return e&&D.forEach(function(le){return t(p,le)}),me&&Zn(p,g),C}function P(p,f,v,k){if(typeof v=="object"&&v!==null&&v.type===_r&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Fi:e:{for(var C=v.key,R=f;R!==null;){if(R.key===C){if(C=v.type,C===_r){if(R.tag===7){n(p,R.sibling),f=o(R,v.props.children),f.return=p,p=f;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Sn&&Wc(C)===R.type){n(p,R.sibling),f=o(R,v.props),f.ref=Oo(p,R,v),f.return=p,p=f;break e}n(p,R);break}else t(p,R);R=R.sibling}v.type===_r?(f=dr(v.props.children,p.mode,k,v.key),f.return=p,p=f):(k=ya(v.type,v.key,v.props,null,p.mode,k),k.ref=Oo(p,f,v),k.return=p,p=k)}return a(p);case Cr:e:{for(R=v.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(p,f.sibling),f=o(f,v.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=Wl(v,p.mode,k),f.return=p,p=f}return a(p);case Sn:return R=v._init,P(p,f,R(v._payload),k)}if(Lo(v))return b(p,f,v,k);if(wo(v))return m(p,f,v,k);Wi(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(p,f.sibling),f=o(f,v),f.return=p,p=f):(n(p,f),f=Ql(v,p.mode,k),f.return=p,p=f),a(p)):n(p,f)}return P}var oo=kh(!0),Sh=kh(!1),Ma=Qn(null),La=null,Fr=null,bu=null;function xu(){bu=Fr=La=null}function wu(e){var t=Ma.current;he(Ma),e._currentValue=t}function zs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Br(e,t){La=e,bu=Fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(bu!==e)if(e={context:e,memoizedValue:t,next:null},Fr===null){if(La===null)throw Error(z(308));Fr=e,La.dependencies={lanes:0,firstContext:e}}else Fr=Fr.next=e;return t}var rr=null;function ku(e){rr===null?rr=[e]:rr.push(e)}function Ph(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ku(t)):(n.next=o.next,o.next=n),t.interleaved=n,cn(e,r)}function cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pn=!1;function Su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function In(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,cn(e,n)}return o=r.interleaved,o===null?(t.next=t,ku(r)):(t.next=o.next,o.next=t),r.interleaved=t,cn(e,n)}function fa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,su(e,n)}}function Kc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Na(e,t,n,r){var o=e.updateQueue;Pn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(i!==null){var c=o.baseState;a=0,d=u=s=null,l=i;do{var h=l.lane,x=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,m=l;switch(h=t,x=n,m.tag){case 1:if(b=m.payload,typeof b=="function"){c=b.call(x,c,h);break e}c=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=m.payload,h=typeof b=="function"?b.call(x,c,h):b,h==null)break e;c=be({},c,h);break e;case 2:Pn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else x={eventTime:x,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=x,s=c):d=d.next=x,a|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(s=c),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);mr|=a,e.lanes=a,e.memoizedState=c}}function Xc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var ki={},Wt=Qn(ki),ii=Qn(ki),ai=Qn(ki);function or(e){if(e===ki)throw Error(z(174));return e}function Pu(e,t){switch(ue(ai,t),ue(ii,e),ue(Wt,ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:us(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=us(t,e)}he(Wt),ue(Wt,t)}function io(){he(Wt),he(ii),he(ai)}function Oh(e){or(ai.current);var t=or(Wt.current),n=us(t,e.type);t!==n&&(ue(ii,e),ue(Wt,n))}function Eu(e){ii.current===e&&(he(Wt),he(ii))}var ge=Qn(0);function Fa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function Ou(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var ha=fn.ReactCurrentDispatcher,$l=fn.ReactCurrentBatchConfig,pr=0,ye=null,Re=null,Le=null,ja=!1,Bo=!1,li=0,dv=0;function $e(){throw Error(z(321))}function Cu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function _u(e,t,n,r,o,i){if(pr=i,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ha.current=e===null||e.memoizedState===null?mv:vv,e=n(r,o),Bo){i=0;do{if(Bo=!1,li=0,25<=i)throw Error(z(301));i+=1,Le=Re=null,t.updateQueue=null,ha.current=gv,e=n(r,o)}while(Bo)}if(ha.current=Aa,t=Re!==null&&Re.next!==null,pr=0,Le=Re=ye=null,ja=!1,t)throw Error(z(300));return e}function zu(){var e=li!==0;return li=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ye.memoizedState=Le=e:Le=Le.next=e,Le}function Pt(){if(Re===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Le===null?ye.memoizedState:Le.next;if(t!==null)Le=t,Re=e;else{if(e===null)throw Error(z(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Le===null?ye.memoizedState=Le=e:Le=Le.next=e}return Le}function si(e,t){return typeof t=="function"?t(e):t}function ql(e){var t=Pt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=Re,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var d=u.lane;if((pr&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,a=r):s=s.next=c,ye.lanes|=d,mr|=d}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,jt(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ye.lanes|=i,mr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=Pt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);jt(i,t.memoizedState)||(rt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ch(){}function _h(e,t){var n=ye,r=Pt(),o=t(),i=!jt(r.memoizedState,o);if(i&&(r.memoizedState=o,rt=!0),r=r.queue,Ru(Dh.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,ui(9,Rh.bind(null,n,r,o,t),void 0,null),Ne===null)throw Error(z(349));pr&30||zh(n,t,o)}return o}function zh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rh(e,t,n,r){t.value=n,t.getSnapshot=r,Th(t)&&Mh(e)}function Dh(e,t,n){return n(function(){Th(t)&&Mh(e)})}function Th(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function Mh(e){var t=cn(e,1);t!==null&&Ft(t,e,1,-1)}function Yc(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:e},t.queue=e,e=e.dispatch=pv.bind(null,ye,e),[t.memoizedState,e]}function ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Lh(){return Pt().memoizedState}function pa(e,t,n,r){var o=Ut();ye.flags|=e,o.memoizedState=ui(1|t,n,void 0,r===void 0?null:r)}function nl(e,t,n,r){var o=Pt();r=r===void 0?null:r;var i=void 0;if(Re!==null){var a=Re.memoizedState;if(i=a.destroy,r!==null&&Cu(r,a.deps)){o.memoizedState=ui(t,n,i,r);return}}ye.flags|=e,o.memoizedState=ui(1|t,n,i,r)}function Gc(e,t){return pa(8390656,8,e,t)}function Ru(e,t){return nl(2048,8,e,t)}function Nh(e,t){return nl(4,2,e,t)}function Fh(e,t){return nl(4,4,e,t)}function jh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ah(e,t,n){return n=n!=null?n.concat([e]):null,nl(4,4,jh.bind(null,t,e),n)}function Du(){}function Ih(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uh(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $h(e,t,n){return pr&21?(jt(n,t)||(n=Qf(),ye.lanes|=n,mr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n)}function fv(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=$l.transition;$l.transition={};try{e(!1),t()}finally{ie=n,$l.transition=r}}function qh(){return Pt().memoizedState}function hv(e,t,n){var r=$n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hh(e))Bh(t,n);else if(n=Ph(e,t,n,r),n!==null){var o=Ge();Ft(n,e,r,o),Vh(n,t,r)}}function pv(e,t,n){var r=$n(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hh(e))Bh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,jt(l,a)){var s=t.interleaved;s===null?(o.next=o,ku(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Ph(e,t,o,r),n!==null&&(o=Ge(),Ft(n,e,r,o),Vh(n,t,r))}}function Hh(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Bh(e,t){Bo=ja=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,su(e,n)}}var Aa={readContext:St,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},mv={readContext:St,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:Gc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,pa(4194308,4,jh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return pa(4194308,4,e,t)},useInsertionEffect:function(e,t){return pa(4,2,e,t)},useMemo:function(e,t){var n=Ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hv.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:Yc,useDebugValue:Du,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=Yc(!1),t=e[0];return e=fv.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,o=Ut();if(me){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),Ne===null)throw Error(z(349));pr&30||zh(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Gc(Dh.bind(null,r,i,e),[e]),r.flags|=2048,ui(9,Rh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ut(),t=Ne.identifierPrefix;if(me){var n=on,r=rn;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vv={readContext:St,useCallback:Ih,useContext:St,useEffect:Ru,useImperativeHandle:Ah,useInsertionEffect:Nh,useLayoutEffect:Fh,useMemo:Uh,useReducer:ql,useRef:Lh,useState:function(){return ql(si)},useDebugValue:Du,useDeferredValue:function(e){var t=Pt();return $h(t,Re.memoizedState,e)},useTransition:function(){var e=ql(si)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Ch,useSyncExternalStore:_h,useId:qh,unstable_isNewReconciler:!1},gv={readContext:St,useCallback:Ih,useContext:St,useEffect:Ru,useImperativeHandle:Ah,useInsertionEffect:Nh,useLayoutEffect:Fh,useMemo:Uh,useReducer:Hl,useRef:Lh,useState:function(){return Hl(si)},useDebugValue:Du,useDeferredValue:function(e){var t=Pt();return Re===null?t.memoizedState=e:$h(t,Re.memoizedState,e)},useTransition:function(){var e=Hl(si)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Ch,useSyncExternalStore:_h,useId:qh,unstable_isNewReconciler:!1};function _t(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Rs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rl={isMounted:function(e){return(e=e._reactInternals)?br(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),o=$n(e),i=an(r,o);i.payload=t,n!=null&&(i.callback=n),t=In(e,i,o),t!==null&&(Ft(t,e,o,r),fa(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),o=$n(e),i=an(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=In(e,i,o),t!==null&&(Ft(t,e,o,r),fa(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=$n(e),o=an(n,r);o.tag=2,t!=null&&(o.callback=t),t=In(e,o,r),t!==null&&(Ft(t,e,r,n),fa(t,e,r))}};function Jc(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ti(n,r)||!ti(o,i):!0}function Qh(e,t,n){var r=!1,o=Bn,i=t.contextType;return typeof i=="object"&&i!==null?i=St(i):(o=it(t)?fr:Ve.current,r=t.contextTypes,i=(r=r!=null)?no(e,o):Bn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=rl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Zc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&rl.enqueueReplaceState(t,t.state,null)}function Ds(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Su(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=St(i):(i=it(t)?fr:Ve.current,o.context=no(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Rs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&rl.enqueueReplaceState(o,o.state,null),Na(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ao(e,t){try{var n="",r=t;do n+=Vm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ts(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var yv=typeof WeakMap=="function"?WeakMap:Map;function Wh(e,t,n){n=an(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ua||(Ua=!0,qs=r),Ts(e,t)},n}function Kh(e,t,n){n=an(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ts(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ts(e,t),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ed(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new yv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Tv.bind(null,e,t,n),t.then(e,e))}function td(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=an(-1,1),t.tag=2,In(n,t,1))),n.lanes|=1),e)}var bv=fn.ReactCurrentOwner,rt=!1;function Xe(e,t,n,r){t.child=e===null?Sh(t,null,n,r):oo(t,e.child,n,r)}function rd(e,t,n,r,o){n=n.render;var i=t.ref;return Br(t,o),r=_u(e,t,n,r,i,o),n=zu(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dn(e,t,o)):(me&&n&&vu(t),t.flags|=1,Xe(e,t,r,o),t.child)}function od(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Iu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Xh(e,t,i,r,o)):(e=ya(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ti,n(a,r)&&e.ref===t.ref)return dn(e,t,o)}return t.flags|=1,e=qn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Xh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ti(i,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,dn(e,t,o)}return Ms(e,t,n,r,o)}function Yh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Ar,ct),ct|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(Ar,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ue(Ar,ct),ct|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ue(Ar,ct),ct|=r;return Xe(e,t,o,n),t.child}function Gh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ms(e,t,n,r,o){var i=it(n)?fr:Ve.current;return i=no(t,i),Br(t,o),n=_u(e,t,n,r,i,o),r=zu(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dn(e,t,o)):(me&&r&&vu(t),t.flags|=1,Xe(e,t,n,o),t.child)}function id(e,t,n,r,o){if(it(n)){var i=!0;Ra(t)}else i=!1;if(Br(t,o),t.stateNode===null)ma(e,t),Qh(t,n,r),Ds(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=St(u):(u=it(n)?fr:Ve.current,u=no(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Zc(t,a,r,u),Pn=!1;var h=t.memoizedState;a.state=h,Na(t,r,a,o),s=t.memoizedState,l!==r||h!==s||ot.current||Pn?(typeof d=="function"&&(Rs(t,n,d,r),s=t.memoizedState),(l=Pn||Jc(t,n,l,r,h,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Eh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:_t(t.type,l),a.props=u,c=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=St(s):(s=it(n)?fr:Ve.current,s=no(t,s));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==c||h!==s)&&Zc(t,a,r,s),Pn=!1,h=t.memoizedState,a.state=h,Na(t,r,a,o);var b=t.memoizedState;l!==c||h!==b||ot.current||Pn?(typeof x=="function"&&(Rs(t,n,x,r),b=t.memoizedState),(u=Pn||Jc(t,n,u,r,h,b,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ls(e,t,n,r,i,o)}function Ls(e,t,n,r,o,i){Gh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Bc(t,n,!1),dn(e,t,i);r=t.stateNode,bv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=oo(t,e.child,null,i),t.child=oo(t,null,l,i)):Xe(e,t,l,i),t.memoizedState=r.state,o&&Bc(t,n,!0),t.child}function Jh(e){var t=e.stateNode;t.pendingContext?Hc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hc(e,t.context,!1),Pu(e,t.containerInfo)}function ad(e,t,n,r,o){return ro(),yu(o),t.flags|=256,Xe(e,t,n,r),t.child}var Ns={dehydrated:null,treeContext:null,retryLane:0};function Fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zh(e,t,n){var r=t.pendingProps,o=ge.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ue(ge,o&1),e===null)return _s(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=al(a,r,0,null),e=dr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fs(n),t.memoizedState=Ns,e):Tu(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return xv(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=qn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=qn(l,i):(i=dr(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Fs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ns,r}return i=e.child,e=i.sibling,r=qn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Tu(e,t){return t=al({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ki(e,t,n,r){return r!==null&&yu(r),oo(t,e.child,null,n),e=Tu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xv(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Bl(Error(z(422))),Ki(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=al({mode:"visible",children:r.children},o,0,null),i=dr(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&oo(t,e.child,null,a),t.child.memoizedState=Fs(a),t.memoizedState=Ns,i);if(!(t.mode&1))return Ki(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(z(419)),r=Bl(i,r,void 0),Ki(e,t,a,r)}if(l=(a&e.childLanes)!==0,rt||l){if(r=Ne,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,cn(e,o),Ft(r,e,o,-1))}return Au(),r=Bl(Error(z(421))),Ki(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Mv.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ft=An(o.nextSibling),ht=t,me=!0,Mt=null,e!==null&&(bt[xt++]=rn,bt[xt++]=on,bt[xt++]=hr,rn=e.id,on=e.overflow,hr=t),t=Tu(t,r.children),t.flags|=4096,t)}function ld(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zs(e.return,t,n)}function Vl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ep(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Xe(e,t,r.children,n),r=ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ld(e,n,t);else if(e.tag===19)ld(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(ge,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Fa(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Vl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Fa(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Vl(t,!0,n,null,i);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ma(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wv(e,t,n){switch(t.tag){case 3:Jh(t),ro();break;case 5:Oh(t);break;case 1:it(t.type)&&Ra(t);break;case 4:Pu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ue(Ma,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(ge,ge.current&1),t.flags|=128,null):n&t.child.childLanes?Zh(e,t,n):(ue(ge,ge.current&1),e=dn(e,t,n),e!==null?e.sibling:null);ue(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ep(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ue(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,Yh(e,t,n)}return dn(e,t,n)}var tp,js,np,rp;tp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};js=function(){};np=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,or(Wt.current);var i=null;switch(n){case"input":o=is(e,o),r=is(e,r),i=[];break;case"select":o=be({},o,{value:void 0}),r=be({},r,{value:void 0}),i=[];break;case"textarea":o=ss(e,o),r=ss(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_a)}cs(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ko.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&fe("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};rp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Co(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kv(e,t,n){var r=t.pendingProps;switch(gu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return it(t.type)&&za(),qe(t),null;case 3:return r=t.stateNode,io(),he(ot),he(Ve),Ou(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mt!==null&&(Vs(Mt),Mt=null))),js(e,t),qe(t),null;case 5:Eu(t);var o=or(ai.current);if(n=t.type,e!==null&&t.stateNode!=null)np(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return qe(t),null}if(e=or(Wt.current),Qi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Bt]=t,r[oi]=i,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(o=0;o<Fo.length;o++)fe(Fo[o],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":vc(r,i),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},fe("invalid",r);break;case"textarea":yc(r,i),fe("invalid",r)}cs(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Vi(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Vi(r.textContent,l,e),o=["children",""+l]):Ko.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&fe("scroll",r)}switch(n){case"input":ji(r),gc(r,i,!0);break;case"textarea":ji(r),bc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=_a)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Df(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Bt]=t,e[oi]=r,tp(e,t,!1,!1),t.stateNode=e;e:{switch(a=ds(n,r),n){case"dialog":fe("cancel",e),fe("close",e),o=r;break;case"iframe":case"object":case"embed":fe("load",e),o=r;break;case"video":case"audio":for(o=0;o<Fo.length;o++)fe(Fo[o],e);o=r;break;case"source":fe("error",e),o=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),o=r;break;case"details":fe("toggle",e),o=r;break;case"input":vc(e,r),o=is(e,r),fe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=be({},r,{value:void 0}),fe("invalid",e);break;case"textarea":yc(e,r),o=ss(e,r),fe("invalid",e);break;default:o=r}cs(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Lf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Tf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Xo(e,s):typeof s=="number"&&Xo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ko.hasOwnProperty(i)?s!=null&&i==="onScroll"&&fe("scroll",e):s!=null&&nu(e,i,s,a))}switch(n){case"input":ji(e),gc(e,r,!1);break;case"textarea":ji(e),bc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Hn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ur(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ur(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=_a)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)rp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=or(ai.current),or(Wt.current),Qi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Bt]=t,(i=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Vi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=t,t.stateNode=r}return qe(t),null;case 13:if(he(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&ft!==null&&t.mode&1&&!(t.flags&128))wh(),ro(),t.flags|=98560,i=!1;else if(i=Qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[Bt]=t}else ro(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;qe(t),i=!1}else Mt!==null&&(Vs(Mt),Mt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?De===0&&(De=3):Au())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return io(),js(e,t),e===null&&ni(t.stateNode.containerInfo),qe(t),null;case 10:return wu(t.type._context),qe(t),null;case 17:return it(t.type)&&za(),qe(t),null;case 19:if(he(ge),i=t.memoizedState,i===null)return qe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Co(i,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Fa(e),a!==null){for(t.flags|=128,Co(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(ge,ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ee()>lo&&(t.flags|=128,r=!0,Co(i,!1),t.lanes=4194304)}else{if(!r)if(e=Fa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Co(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!me)return qe(t),null}else 2*Ee()-i.renderingStartTime>lo&&n!==1073741824&&(t.flags|=128,r=!0,Co(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ee(),t.sibling=null,n=ge.current,ue(ge,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return ju(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ct&1073741824&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function Sv(e,t){switch(gu(t),t.tag){case 1:return it(t.type)&&za(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return io(),he(ot),he(Ve),Ou(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Eu(t),null;case 13:if(he(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));ro()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ge),null;case 4:return io(),null;case 10:return wu(t.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var Xi=!1,Be=!1,Pv=typeof WeakSet=="function"?WeakSet:Set,F=null;function jr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function As(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var sd=!1;function Ev(e,t){if(ws=Ea,e=sh(),mu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,d=0,c=e,h=null;t:for(;;){for(var x;c!==n||o!==0&&c.nodeType!==3||(l=a+o),c!==i||r!==0&&c.nodeType!==3||(s=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(x=c.firstChild)!==null;)h=c,c=x;for(;;){if(c===e)break t;if(h===n&&++u===o&&(l=a),h===i&&++d===r&&(s=a),(x=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=x}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ks={focusedElem:e,selectionRange:n},Ea=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var m=b.memoizedProps,P=b.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?m:_t(t.type,m),P);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(k){Pe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return b=sd,sd=!1,b}function Vo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&As(t,n,i)}o=o.next}while(o!==r)}}function ol(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Is(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function op(e){var t=e.alternate;t!==null&&(e.alternate=null,op(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[oi],delete t[Es],delete t[lv],delete t[sv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ip(e){return e.tag===5||e.tag===3||e.tag===4}function ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ip(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Us(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_a));else if(r!==4&&(e=e.child,e!==null))for(Us(e,t,n),e=e.sibling;e!==null;)Us(e,t,n),e=e.sibling}function $s(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($s(e,t,n),e=e.sibling;e!==null;)$s(e,t,n),e=e.sibling}var je=null,Dt=!1;function yn(e,t,n){for(n=n.child;n!==null;)ap(e,t,n),n=n.sibling}function ap(e,t,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(Ya,n)}catch{}switch(n.tag){case 5:Be||jr(n,t);case 6:var r=je,o=Dt;je=null,yn(e,t,n),je=r,Dt=o,je!==null&&(Dt?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Dt?(e=je,n=n.stateNode,e.nodeType===8?Al(e.parentNode,n):e.nodeType===1&&Al(e,n),Zo(e)):Al(je,n.stateNode));break;case 4:r=je,o=Dt,je=n.stateNode.containerInfo,Dt=!0,yn(e,t,n),je=r,Dt=o;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&As(n,t,a),o=o.next}while(o!==r)}yn(e,t,n);break;case 1:if(!Be&&(jr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,t,l)}yn(e,t,n);break;case 21:yn(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,yn(e,t,n),Be=r):yn(e,t,n);break;default:yn(e,t,n)}}function cd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pv),t.forEach(function(r){var o=Lv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,Dt=!1;break e;case 3:je=l.stateNode.containerInfo,Dt=!0;break e;case 4:je=l.stateNode.containerInfo,Dt=!0;break e}l=l.return}if(je===null)throw Error(z(160));ap(i,a,o),je=null,Dt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Pe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lp(t,e),t=t.sibling}function lp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),It(e),r&4){try{Vo(3,e,e.return),ol(3,e)}catch(m){Pe(e,e.return,m)}try{Vo(5,e,e.return)}catch(m){Pe(e,e.return,m)}}break;case 1:Ot(t,e),It(e),r&512&&n!==null&&jr(n,n.return);break;case 5:if(Ot(t,e),It(e),r&512&&n!==null&&jr(n,n.return),e.flags&32){var o=e.stateNode;try{Xo(o,"")}catch(m){Pe(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&zf(o,i),ds(l,a);var u=ds(l,i);for(a=0;a<s.length;a+=2){var d=s[a],c=s[a+1];d==="style"?Lf(o,c):d==="dangerouslySetInnerHTML"?Tf(o,c):d==="children"?Xo(o,c):nu(o,d,c,u)}switch(l){case"input":as(o,i);break;case"textarea":Rf(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Ur(o,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?Ur(o,!!i.multiple,i.defaultValue,!0):Ur(o,!!i.multiple,i.multiple?[]:"",!1))}o[oi]=i}catch(m){Pe(e,e.return,m)}}break;case 6:if(Ot(t,e),It(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(m){Pe(e,e.return,m)}}break;case 3:if(Ot(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zo(t.containerInfo)}catch(m){Pe(e,e.return,m)}break;case 4:Ot(t,e),It(e);break;case 13:Ot(t,e),It(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Nu=Ee())),r&4&&cd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||d,Ot(t,e),Be=u):Ot(t,e),It(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(F=e,d=e.child;d!==null;){for(c=F=d;F!==null;){switch(h=F,x=h.child,h.tag){case 0:case 11:case 14:case 15:Vo(4,h,h.return);break;case 1:jr(h,h.return);var b=h.stateNode;if(typeof b.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(m){Pe(r,n,m)}}break;case 5:jr(h,h.return);break;case 22:if(h.memoizedState!==null){fd(c);continue}}x!==null?(x.return=h,F=x):fd(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=c.stateNode,s=c.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Mf("display",a))}catch(m){Pe(e,e.return,m)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(m){Pe(e,e.return,m)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ot(t,e),It(e),r&4&&cd(e);break;case 21:break;default:Ot(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ip(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Xo(o,""),r.flags&=-33);var i=ud(e);$s(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ud(e);Us(e,l,a);break;default:throw Error(z(161))}}catch(s){Pe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ov(e,t,n){F=e,sp(e)}function sp(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var o=F,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Xi;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Be;l=Xi;var u=Be;if(Xi=a,(Be=s)&&!u)for(F=o;F!==null;)a=F,s=a.child,a.tag===22&&a.memoizedState!==null?hd(o):s!==null?(s.return=a,F=s):hd(o);for(;i!==null;)F=i,sp(i),i=i.sibling;F=o,Xi=l,Be=u}dd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,F=i):dd(e)}}function dd(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||ol(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:_t(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Xc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Zo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Be||t.flags&512&&Is(t)}catch(h){Pe(t,t.return,h)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function fd(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function hd(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ol(4,t)}catch(s){Pe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Pe(t,o,s)}}var i=t.return;try{Is(t)}catch(s){Pe(t,i,s)}break;case 5:var a=t.return;try{Is(t)}catch(s){Pe(t,a,s)}}}catch(s){Pe(t,t.return,s)}if(t===e){F=null;break}var l=t.sibling;if(l!==null){l.return=t.return,F=l;break}F=t.return}}var Cv=Math.ceil,Ia=fn.ReactCurrentDispatcher,Mu=fn.ReactCurrentOwner,kt=fn.ReactCurrentBatchConfig,te=0,Ne=null,ze=null,Ae=0,ct=0,Ar=Qn(0),De=0,ci=null,mr=0,il=0,Lu=0,Qo=null,nt=null,Nu=0,lo=1/0,tn=null,Ua=!1,qs=null,Un=null,Yi=!1,Mn=null,$a=0,Wo=0,Hs=null,va=-1,ga=0;function Ge(){return te&6?Ee():va!==-1?va:va=Ee()}function $n(e){return e.mode&1?te&2&&Ae!==0?Ae&-Ae:cv.transition!==null?(ga===0&&(ga=Qf()),ga):(e=ie,e!==0||(e=window.event,e=e===void 0?16:Zf(e.type)),e):1}function Ft(e,t,n,r){if(50<Wo)throw Wo=0,Hs=null,Error(z(185));bi(e,n,r),(!(te&2)||e!==Ne)&&(e===Ne&&(!(te&2)&&(il|=n),De===4&&On(e,Ae)),at(e,r),n===1&&te===0&&!(t.mode&1)&&(lo=Ee()+500,tl&&Wn()))}function at(e,t){var n=e.callbackNode;c0(e,t);var r=Pa(e,e===Ne?Ae:0);if(r===0)n!==null&&kc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&kc(n),t===1)e.tag===0?uv(pd.bind(null,e)):yh(pd.bind(null,e)),iv(function(){!(te&6)&&Wn()}),n=null;else{switch(Wf(r)){case 1:n=lu;break;case 4:n=Bf;break;case 16:n=Sa;break;case 536870912:n=Vf;break;default:n=Sa}n=vp(n,up.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function up(e,t){if(va=-1,ga=0,te&6)throw Error(z(327));var n=e.callbackNode;if(Vr()&&e.callbackNode!==n)return null;var r=Pa(e,e===Ne?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qa(e,r);else{t=r;var o=te;te|=2;var i=dp();(Ne!==e||Ae!==t)&&(tn=null,lo=Ee()+500,cr(e,t));do try{Rv();break}catch(l){cp(e,l)}while(!0);xu(),Ia.current=i,te=o,ze!==null?t=0:(Ne=null,Ae=0,t=De)}if(t!==0){if(t===2&&(o=vs(e),o!==0&&(r=o,t=Bs(e,o))),t===1)throw n=ci,cr(e,0),On(e,r),at(e,Ee()),n;if(t===6)On(e,r);else{if(o=e.current.alternate,!(r&30)&&!_v(o)&&(t=qa(e,r),t===2&&(i=vs(e),i!==0&&(r=i,t=Bs(e,i))),t===1))throw n=ci,cr(e,0),On(e,r),at(e,Ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:er(e,nt,tn);break;case 3:if(On(e,r),(r&130023424)===r&&(t=Nu+500-Ee(),10<t)){if(Pa(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ps(er.bind(null,e,nt,tn),t);break}er(e,nt,tn);break;case 4:if(On(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Nt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cv(r/1960))-r,10<r){e.timeoutHandle=Ps(er.bind(null,e,nt,tn),r);break}er(e,nt,tn);break;case 5:er(e,nt,tn);break;default:throw Error(z(329))}}}return at(e,Ee()),e.callbackNode===n?up.bind(null,e):null}function Bs(e,t){var n=Qo;return e.current.memoizedState.isDehydrated&&(cr(e,t).flags|=256),e=qa(e,t),e!==2&&(t=nt,nt=n,t!==null&&Vs(t)),e}function Vs(e){nt===null?nt=e:nt.push.apply(nt,e)}function _v(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!jt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function On(e,t){for(t&=~Lu,t&=~il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function pd(e){if(te&6)throw Error(z(327));Vr();var t=Pa(e,0);if(!(t&1))return at(e,Ee()),null;var n=qa(e,t);if(e.tag!==0&&n===2){var r=vs(e);r!==0&&(t=r,n=Bs(e,r))}if(n===1)throw n=ci,cr(e,0),On(e,t),at(e,Ee()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,nt,tn),at(e,Ee()),null}function Fu(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(lo=Ee()+500,tl&&Wn())}}function vr(e){Mn!==null&&Mn.tag===0&&!(te&6)&&Vr();var t=te;te|=1;var n=kt.transition,r=ie;try{if(kt.transition=null,ie=1,e)return e()}finally{ie=r,kt.transition=n,te=t,!(te&6)&&Wn()}}function ju(){ct=Ar.current,he(Ar)}function cr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ov(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(gu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&za();break;case 3:io(),he(ot),he(Ve),Ou();break;case 5:Eu(r);break;case 4:io();break;case 13:he(ge);break;case 19:he(ge);break;case 10:wu(r.type._context);break;case 22:case 23:ju()}n=n.return}if(Ne=e,ze=e=qn(e.current,null),Ae=ct=t,De=0,ci=null,Lu=il=mr=0,nt=Qo=null,rr!==null){for(t=0;t<rr.length;t++)if(n=rr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}rr=null}return e}function cp(e,t){do{var n=ze;try{if(xu(),ha.current=Aa,ja){for(var r=ye.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ja=!1}if(pr=0,Le=Re=ye=null,Bo=!1,li=0,Mu.current=null,n===null||n.return===null){De=1,ci=t,ze=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=Ae,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=td(a);if(x!==null){x.flags&=-257,nd(x,a,l,i,t),x.mode&1&&ed(i,u,t),t=x,s=u;var b=t.updateQueue;if(b===null){var m=new Set;m.add(s),t.updateQueue=m}else b.add(s);break e}else{if(!(t&1)){ed(i,u,t),Au();break e}s=Error(z(426))}}else if(me&&l.mode&1){var P=td(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),nd(P,a,l,i,t),yu(ao(s,l));break e}}i=s=ao(s,l),De!==4&&(De=2),Qo===null?Qo=[i]:Qo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Wh(i,s,t);Kc(i,p);break e;case 1:l=s;var f=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Un===null||!Un.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Kh(i,l,t);Kc(i,k);break e}}i=i.return}while(i!==null)}hp(n)}catch(C){t=C,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function dp(){var e=Ia.current;return Ia.current=Aa,e===null?Aa:e}function Au(){(De===0||De===3||De===2)&&(De=4),Ne===null||!(mr&268435455)&&!(il&268435455)||On(Ne,Ae)}function qa(e,t){var n=te;te|=2;var r=dp();(Ne!==e||Ae!==t)&&(tn=null,cr(e,t));do try{zv();break}catch(o){cp(e,o)}while(!0);if(xu(),te=n,Ia.current=r,ze!==null)throw Error(z(261));return Ne=null,Ae=0,De}function zv(){for(;ze!==null;)fp(ze)}function Rv(){for(;ze!==null&&!t0();)fp(ze)}function fp(e){var t=mp(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?hp(e):ze=t,Mu.current=null}function hp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Sv(n,t),n!==null){n.flags&=32767,ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,ze=null;return}}else if(n=kv(n,t,ct),n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);De===0&&(De=5)}function er(e,t,n){var r=ie,o=kt.transition;try{kt.transition=null,ie=1,Dv(e,t,n,r)}finally{kt.transition=o,ie=r}return null}function Dv(e,t,n,r){do Vr();while(Mn!==null);if(te&6)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(d0(e,i),e===Ne&&(ze=Ne=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yi||(Yi=!0,vp(Sa,function(){return Vr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=kt.transition,kt.transition=null;var a=ie;ie=1;var l=te;te|=4,Mu.current=null,Ev(e,n),lp(n,e),G0(ks),Ea=!!ws,ks=ws=null,e.current=n,Ov(n),n0(),te=l,ie=a,kt.transition=i}else e.current=n;if(Yi&&(Yi=!1,Mn=e,$a=o),i=e.pendingLanes,i===0&&(Un=null),i0(n.stateNode),at(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ua)throw Ua=!1,e=qs,qs=null,e;return $a&1&&e.tag!==0&&Vr(),i=e.pendingLanes,i&1?e===Hs?Wo++:(Wo=0,Hs=e):Wo=0,Wn(),null}function Vr(){if(Mn!==null){var e=Wf($a),t=kt.transition,n=ie;try{if(kt.transition=null,ie=16>e?16:e,Mn===null)var r=!1;else{if(e=Mn,Mn=null,$a=0,te&6)throw Error(z(331));var o=te;for(te|=4,F=e.current;F!==null;){var i=F,a=i.child;if(F.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(F=u;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:Vo(8,d,i)}var c=d.child;if(c!==null)c.return=d,F=c;else for(;F!==null;){d=F;var h=d.sibling,x=d.return;if(op(d),d===u){F=null;break}if(h!==null){h.return=x,F=h;break}F=x}}}var b=i.alternate;if(b!==null){var m=b.child;if(m!==null){b.child=null;do{var P=m.sibling;m.sibling=null,m=P}while(m!==null)}}F=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,F=a;else e:for(;F!==null;){if(i=F,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vo(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,F=p;break e}F=i.return}}var f=e.current;for(F=f;F!==null;){a=F;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,F=v;else e:for(a=f;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ol(9,l)}}catch(C){Pe(l,l.return,C)}if(l===a){F=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,F=k;break e}F=l.return}}if(te=o,Wn(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(Ya,e)}catch{}r=!0}return r}finally{ie=n,kt.transition=t}}return!1}function md(e,t,n){t=ao(n,t),t=Wh(e,t,1),e=In(e,t,1),t=Ge(),e!==null&&(bi(e,1,t),at(e,t))}function Pe(e,t,n){if(e.tag===3)md(e,e,n);else for(;t!==null;){if(t.tag===3){md(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){e=ao(n,e),e=Kh(t,e,1),t=In(t,e,1),e=Ge(),t!==null&&(bi(t,1,e),at(t,e));break}}t=t.return}}function Tv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(Ae&n)===n&&(De===4||De===3&&(Ae&130023424)===Ae&&500>Ee()-Nu?cr(e,0):Lu|=n),at(e,t)}function pp(e,t){t===0&&(e.mode&1?(t=Ui,Ui<<=1,!(Ui&130023424)&&(Ui=4194304)):t=1);var n=Ge();e=cn(e,t),e!==null&&(bi(e,t,n),at(e,n))}function Mv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pp(e,n)}function Lv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),pp(e,n)}var mp;mp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return rt=!1,wv(e,t,n);rt=!!(e.flags&131072)}else rt=!1,me&&t.flags&1048576&&bh(t,Ta,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ma(e,t),e=t.pendingProps;var o=no(t,Ve.current);Br(t,n),o=_u(null,t,r,e,o,n);var i=zu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(i=!0,Ra(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Su(t),o.updater=rl,t.stateNode=o,o._reactInternals=t,Ds(t,r,e,n),t=Ls(null,t,r,!0,i,n)):(t.tag=0,me&&i&&vu(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ma(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Fv(r),e=_t(r,e),o){case 0:t=Ms(null,t,r,e,n);break e;case 1:t=id(null,t,r,e,n);break e;case 11:t=rd(null,t,r,e,n);break e;case 14:t=od(null,t,r,_t(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),Ms(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),id(e,t,r,o,n);case 3:e:{if(Jh(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Eh(e,t),Na(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ao(Error(z(423)),t),t=ad(e,t,r,n,o);break e}else if(r!==o){o=ao(Error(z(424)),t),t=ad(e,t,r,n,o);break e}else for(ft=An(t.stateNode.containerInfo.firstChild),ht=t,me=!0,Mt=null,n=Sh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),r===o){t=dn(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Oh(t),e===null&&_s(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Ss(r,o)?a=null:i!==null&&Ss(r,i)&&(t.flags|=32),Gh(e,t),Xe(e,t,a,n),t.child;case 6:return e===null&&_s(t),null;case 13:return Zh(e,t,n);case 4:return Pu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=oo(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),rd(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,ue(Ma,r._currentValue),r._currentValue=a,i!==null)if(jt(i.value,a)){if(i.children===o.children&&!ot.current){t=dn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=an(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),zs(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(z(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),zs(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Br(t,n),o=St(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=_t(r,t.pendingProps),o=_t(r.type,o),od(e,t,r,o,n);case 15:return Xh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),ma(e,t),t.tag=1,it(r)?(e=!0,Ra(t)):e=!1,Br(t,n),Qh(t,r,o),Ds(t,r,o,n),Ls(null,t,r,!0,e,n);case 19:return ep(e,t,n);case 22:return Yh(e,t,n)}throw Error(z(156,t.tag))};function vp(e,t){return Hf(e,t)}function Nv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,r){return new Nv(e,t,n,r)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fv(e){if(typeof e=="function")return Iu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ou)return 11;if(e===iu)return 14}return 2}function qn(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ya(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Iu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _r:return dr(n.children,o,i,t);case ru:a=8,o|=8;break;case ts:return e=wt(12,n,t,o|2),e.elementType=ts,e.lanes=i,e;case ns:return e=wt(13,n,t,o),e.elementType=ns,e.lanes=i,e;case rs:return e=wt(19,n,t,o),e.elementType=rs,e.lanes=i,e;case Of:return al(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pf:a=10;break e;case Ef:a=9;break e;case ou:a=11;break e;case iu:a=14;break e;case Sn:a=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=wt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function dr(e,t,n,r){return e=wt(7,e,r,t),e.lanes=n,e}function al(e,t,n,r){return e=wt(22,e,r,t),e.elementType=Of,e.lanes=n,e.stateNode={isHidden:!1},e}function Ql(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function Wl(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Uu(e,t,n,r,o,i,a,l,s){return e=new jv(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=wt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Su(i),e}function Av(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gp(e){if(!e)return Bn;e=e._reactInternals;e:{if(br(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(it(n))return gh(e,n,t)}return t}function yp(e,t,n,r,o,i,a,l,s){return e=Uu(n,r,!0,e,o,i,a,l,s),e.context=gp(null),n=e.current,r=Ge(),o=$n(n),i=an(r,o),i.callback=t??null,In(n,i,o),e.current.lanes=o,bi(e,o,r),at(e,r),e}function ll(e,t,n,r){var o=t.current,i=Ge(),a=$n(o);return n=gp(n),t.context===null?t.context=n:t.pendingContext=n,t=an(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=In(o,t,a),e!==null&&(Ft(e,o,a,i),fa(e,o,a)),a}function Ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $u(e,t){vd(e,t),(e=e.alternate)&&vd(e,t)}function Iv(){return null}var bp=typeof reportError=="function"?reportError:function(e){console.error(e)};function qu(e){this._internalRoot=e}sl.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));ll(e,t,null,null)};sl.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vr(function(){ll(null,e,null,null)}),t[un]=null}};function sl(e){this._internalRoot=e}sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&Jf(e)}};function Hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gd(){}function Uv(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ha(a);i.call(u)}}var a=yp(t,r,e,0,null,!1,!1,"",gd);return e._reactRootContainer=a,e[un]=a.current,ni(e.nodeType===8?e.parentNode:e),vr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Ha(s);l.call(u)}}var s=Uu(e,0,!1,null,null,!1,!1,"",gd);return e._reactRootContainer=s,e[un]=s.current,ni(e.nodeType===8?e.parentNode:e),vr(function(){ll(t,s,n,r)}),s}function cl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Ha(a);l.call(s)}}ll(t,a,e,o)}else a=Uv(n,t,e,o,r);return Ha(a)}Kf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=No(t.pendingLanes);n!==0&&(su(t,n|1),at(t,Ee()),!(te&6)&&(lo=Ee()+500,Wn()))}break;case 13:vr(function(){var r=cn(e,1);if(r!==null){var o=Ge();Ft(r,e,1,o)}}),$u(e,1)}};uu=function(e){if(e.tag===13){var t=cn(e,134217728);if(t!==null){var n=Ge();Ft(t,e,134217728,n)}$u(e,134217728)}};Xf=function(e){if(e.tag===13){var t=$n(e),n=cn(e,t);if(n!==null){var r=Ge();Ft(n,e,t,r)}$u(e,t)}};Yf=function(){return ie};Gf=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};hs=function(e,t,n){switch(t){case"input":if(as(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=el(r);if(!o)throw Error(z(90));_f(r),as(r,o)}}}break;case"textarea":Rf(e,n);break;case"select":t=n.value,t!=null&&Ur(e,!!n.multiple,t,!1)}};jf=Fu;Af=vr;var $v={usingClientEntryPoint:!1,Events:[wi,Tr,el,Nf,Ff,Fu]},_o={findFiberByHostInstance:nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qv={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$f(e),e===null?null:e.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||Iv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{Ya=Gi.inject(qv),Qt=Gi}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$v;mt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hu(t))throw Error(z(200));return Av(e,t,null,n)};mt.createRoot=function(e,t){if(!Hu(e))throw Error(z(299));var n=!1,r="",o=bp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Uu(e,1,!1,null,null,n,!1,r,o),e[un]=t.current,ni(e.nodeType===8?e.parentNode:e),new qu(t)};mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=$f(t),e=e===null?null:e.stateNode,e};mt.flushSync=function(e){return vr(e)};mt.hydrate=function(e,t,n){if(!ul(t))throw Error(z(200));return cl(null,e,t,!0,n)};mt.hydrateRoot=function(e,t,n){if(!Hu(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=bp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=yp(t,null,e,1,n??null,o,!1,i,a),e[un]=t.current,ni(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new sl(t)};mt.render=function(e,t,n){if(!ul(t))throw Error(z(200));return cl(null,e,t,!1,n)};mt.unmountComponentAtNode=function(e){if(!ul(e))throw Error(z(40));return e._reactRootContainer?(vr(function(){cl(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};mt.unstable_batchedUpdates=Fu;mt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ul(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return cl(e,t,n,!1,r)};mt.version="18.3.1-next-f1338f8080-20240426";function xp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xp)}catch(e){console.error(e)}}xp(),xf.exports=mt;var Bu=xf.exports;const Hv=sf(Bu),Bv=lf({__proto__:null,default:Hv},[Bu]);var yd=Bu;Zl.createRoot=yd.createRoot,Zl.hydrateRoot=yd.hydrateRoot;function wp(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=wp(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function kp(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=wp(e))&&(r&&(r+=" "),r+=t);return r}function Te(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}Te(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var W=function(){return W=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},W.apply(this,arguments)};function Ba(e){return Ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ba(e)}var Vv=/^\s+/,Qv=/\s+$/;function I(e,t){if(t=t||{},(e=e||"")instanceof I)return e;if(!(this instanceof I))return new I(e,t);var n=function(r){var o={r:0,g:0,b:0},i=1,a=null,l=null,s=null,u=!1,d=!1;typeof r=="string"&&(r=function(b){b=b.replace(Vv,"").replace(Qv,"").toLowerCase();var m,P=!1;if(Qs[b])b=Qs[b],P=!0;else if(b=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(m=Ct.rgb.exec(b))?{r:m[1],g:m[2],b:m[3]}:(m=Ct.rgba.exec(b))?{r:m[1],g:m[2],b:m[3],a:m[4]}:(m=Ct.hsl.exec(b))?{h:m[1],s:m[2],l:m[3]}:(m=Ct.hsla.exec(b))?{h:m[1],s:m[2],l:m[3],a:m[4]}:(m=Ct.hsv.exec(b))?{h:m[1],s:m[2],v:m[3]}:(m=Ct.hsva.exec(b))?{h:m[1],s:m[2],v:m[3],a:m[4]}:(m=Ct.hex8.exec(b))?{r:st(m[1]),g:st(m[2]),b:st(m[3]),a:Pd(m[4]),format:P?"name":"hex8"}:(m=Ct.hex6.exec(b))?{r:st(m[1]),g:st(m[2]),b:st(m[3]),format:P?"name":"hex"}:(m=Ct.hex4.exec(b))?{r:st(m[1]+""+m[1]),g:st(m[2]+""+m[2]),b:st(m[3]+""+m[3]),a:Pd(m[4]+""+m[4]),format:P?"name":"hex8"}:(m=Ct.hex3.exec(b))?{r:st(m[1]+""+m[1]),g:st(m[2]+""+m[2]),b:st(m[3]+""+m[3]),format:P?"name":"hex"}:!1}(r)),Ba(r)=="object"&&(Zt(r.r)&&Zt(r.g)&&Zt(r.b)?(c=r.r,h=r.g,x=r.b,o={r:255*pe(c,255),g:255*pe(h,255),b:255*pe(x,255)},u=!0,d=String(r.r).substr(-1)==="%"?"prgb":"rgb"):Zt(r.h)&&Zt(r.s)&&Zt(r.v)?(a=jo(r.s),l=jo(r.v),o=function(b,m,P){b=6*pe(b,360),m=pe(m,100),P=pe(P,100);var p=Math.floor(b),f=b-p,v=P*(1-m),k=P*(1-f*m),C=P*(1-(1-f)*m),R=p%6,D=[P,k,v,v,C,P][R],g=[C,P,P,k,v,v][R],M=[v,v,C,P,P,k][R];return{r:255*D,g:255*g,b:255*M}}(r.h,a,l),u=!0,d="hsv"):Zt(r.h)&&Zt(r.s)&&Zt(r.l)&&(a=jo(r.s),s=jo(r.l),o=function(b,m,P){var p,f,v;function k(D,g,M){return M<0&&(M+=1),M>1&&(M-=1),M<1/6?D+6*(g-D)*M:M<.5?g:M<2/3?D+(g-D)*(2/3-M)*6:D}if(b=pe(b,360),m=pe(m,100),P=pe(P,100),m===0)p=f=v=P;else{var C=P<.5?P*(1+m):P+m-P*m,R=2*P-C;p=k(R,C,b+1/3),f=k(R,C,b),v=k(R,C,b-1/3)}return{r:255*p,g:255*f,b:255*v}}(r.h,a,s),u=!0,d="hsl"),r.hasOwnProperty("a")&&(i=r.a));var c,h,x;return i=Sp(i),{ok:u,format:r.format||d,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:i}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function bd(e,t,n){e=pe(e,255),t=pe(t,255),n=pe(n,255);var r,o,i=Math.max(e,t,n),a=Math.min(e,t,n),l=(i+a)/2;if(i==a)r=o=0;else{var s=i-a;switch(o=l>.5?s/(2-i-a):s/(i+a),i){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,l}}function xd(e,t,n){e=pe(e,255),t=pe(t,255),n=pe(n,255);var r,o,i=Math.max(e,t,n),a=Math.min(e,t,n),l=i,s=i-a;if(o=i===0?0:s/i,i==a)r=0;else{switch(i){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,v:l}}function wd(e,t,n,r){var o=[Lt(Math.round(e).toString(16)),Lt(Math.round(t).toString(16)),Lt(Math.round(n).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function kd(e,t,n,r){return[Lt(Pp(r)),Lt(Math.round(e).toString(16)),Lt(Math.round(t).toString(16)),Lt(Math.round(n).toString(16))].join("")}function Wv(e,t){t=t===0?0:t||10;var n=I(e).toHsl();return n.s-=t/100,n.s=dl(n.s),I(n)}function Kv(e,t){t=t===0?0:t||10;var n=I(e).toHsl();return n.s+=t/100,n.s=dl(n.s),I(n)}function Xv(e){return I(e).desaturate(100)}function Yv(e,t){t=t===0?0:t||10;var n=I(e).toHsl();return n.l+=t/100,n.l=dl(n.l),I(n)}function Gv(e,t){t=t===0?0:t||10;var n=I(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),I(n)}function Jv(e,t){t=t===0?0:t||10;var n=I(e).toHsl();return n.l-=t/100,n.l=dl(n.l),I(n)}function Zv(e,t){var n=I(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,I(n)}function eg(e){var t=I(e).toHsl();return t.h=(t.h+180)%360,I(t)}function Sd(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=I(e).toHsl(),r=[I(e)],o=360/t,i=1;i<t;i++)r.push(I({h:(n.h+i*o)%360,s:n.s,l:n.l}));return r}function tg(e){var t=I(e).toHsl(),n=t.h;return[I(e),I({h:(n+72)%360,s:t.s,l:t.l}),I({h:(n+216)%360,s:t.s,l:t.l})]}function ng(e,t,n){t=t||6,n=n||30;var r=I(e).toHsl(),o=360/n,i=[I(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(I(r));return i}function rg(e,t){t=t||6;for(var n=I(e).toHsv(),r=n.h,o=n.s,i=n.v,a=[],l=1/t;t--;)a.push(I({h:r,s:o,v:i})),i=(i+l)%1;return a}I.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=Sp(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=xd(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=xd(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=bd(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=bd(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return wd(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(t,n,r,o,i){var a=[Lt(Math.round(t).toString(16)),Lt(Math.round(n).toString(16)),Lt(Math.round(r).toString(16)),Lt(Pp(o))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*pe(this._r,255))+"%",g:Math.round(100*pe(this._g,255))+"%",b:Math.round(100*pe(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*pe(this._r,255))+"%, "+Math.round(100*pe(this._g,255))+"%, "+Math.round(100*pe(this._b,255))+"%)":"rgba("+Math.round(100*pe(this._r,255))+"%, "+Math.round(100*pe(this._g,255))+"%, "+Math.round(100*pe(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(og[wd(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+kd(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=I(e);n="#"+kd(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return I(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(Yv,arguments)},brighten:function(){return this._applyModification(Gv,arguments)},darken:function(){return this._applyModification(Jv,arguments)},desaturate:function(){return this._applyModification(Wv,arguments)},saturate:function(){return this._applyModification(Kv,arguments)},greyscale:function(){return this._applyModification(Xv,arguments)},spin:function(){return this._applyModification(Zv,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(ng,arguments)},complement:function(){return this._applyCombination(eg,arguments)},monochromatic:function(){return this._applyCombination(rg,arguments)},splitcomplement:function(){return this._applyCombination(tg,arguments)},triad:function(){return this._applyCombination(Sd,[3])},tetrad:function(){return this._applyCombination(Sd,[4])}},I.fromRatio=function(e,t){if(Ba(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=r==="a"?e[r]:jo(e[r]));e=n}return I(e,t)},I.equals=function(e,t){return!(!e||!t)&&I(e).toRgbString()==I(t).toRgbString()},I.random=function(){return I.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},I.mix=function(e,t,n){n=n===0?0:n||50;var r=I(e).toRgb(),o=I(t).toRgb(),i=n/100;return I({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},I.readability=function(e,t){var n=I(e),r=I(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},I.isReadable=function(e,t,n){var r,o,i=I.readability(e,t);switch(o=!1,(r=function(a){var l,s;return l=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(a.size||"small").toLowerCase(),l!=="AA"&&l!=="AAA"&&(l="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:l,size:s}}(n)).level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7}return o},I.mostReadable=function(e,t,n){var r,o,i,a,l=null,s=0;o=(n=n||{}).includeFallbackColors,i=n.level,a=n.size;for(var u=0;u<t.length;u++)(r=I.readability(e,t[u]))>s&&(s=r,l=I(t[u]));return I.isReadable(e,l,{level:i,size:a})||!o?l:(n.includeFallbackColors=!1,I.mostReadable(e,["#fff","#000"],n))};var Qs=I.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},og=I.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(Qs);function Sp(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function pe(e,t){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function dl(e){return Math.min(1,Math.max(0,e))}function st(e){return parseInt(e,16)}function Lt(e){return e.length==1?"0"+e:""+e}function jo(e){return e<=1&&(e=100*e+"%"),e}function Pp(e){return Math.round(255*parseFloat(e)).toString(16)}function Pd(e){return st(e)/255}var bn,Ji,Zi,Ct=(Ji="[\\s|\\(]+("+(bn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+bn+")[,|\\s]+("+bn+")\\s*\\)?",Zi="[\\s|\\(]+("+bn+")[,|\\s]+("+bn+")[,|\\s]+("+bn+")[,|\\s]+("+bn+")\\s*\\)?",{CSS_UNIT:new RegExp(bn),rgb:new RegExp("rgb"+Ji),rgba:new RegExp("rgba"+Zi),hsl:new RegExp("hsl"+Ji),hsla:new RegExp("hsla"+Zi),hsv:new RegExp("hsv"+Ji),hsva:new RegExp("hsva"+Zi),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Zt(e){return!!Ct.CSS_UNIT.exec(e)}var ho=function(e,t){var n=(typeof e=="string"?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=n,o=parseFloat(t),i=o+r*(o/5)*-1;return(i==0||i<=Number.EPSILON)&&(i=.1),{animationPeriod:i+"s"}}return{animationPeriod:t}},po=function(e,t){var n=e||{},r="";switch(t){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(n.fontSize){var i=n.fontSize;o=function(a,l){var s={};for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&l.indexOf(u)<0&&(s[u]=a[u]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function"){var d=0;for(u=Object.getOwnPropertySymbols(a);d<u.length;d++)l.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(a,u[d])&&(s[u[d]]=a[u[d]])}return s}(n,["fontSize"]),r=i}return{fontSize:r,styles:o}},ig={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},mo=function(e){var t=e.className,n=e.text,r=e.textColor,o=e.staticText,i=e.style;return n?J.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:W(W(W({},o&&ig),r&&{color:r,mixBlendMode:"unset"}),i&&i)},typeof n=="string"&&n.length?n:"loading"):null},Vt="rgb(50, 205, 50)";function vo(e,t){t===void 0&&(t=0);var n=[];return function r(o,i){return i===void 0&&(i=0),n.push.apply(n,o),n.length<i&&r(n,i),n.slice(0,i)}(e,t)}Te(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);I(Vt).toRgb();Array.from({length:4},function(e,t){return"--atom-phase".concat(t+1,"-rgb")});Te(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--commet-phase".concat(t+1,"-color")});Te(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var ea=Array.from({length:4},function(e,t){return"--OP-annulus-phase".concat(t+1,"-color")}),ag=function(e){var t,n=po(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=ho(e==null?void 0:e.speedPlus,"1.5s").animationPeriod,l=function(u){var d={},c=ea.length;if(u instanceof Array){for(var h=vo(u,c),x=0;x<h.length&&!(x>=4);x++)d[ea[x]]=h[x];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var b=0;b<c;b++)d[ea[b]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),b=0;b<c;b++)d[ea[b]]=Vt}return d}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e!=null&&e.dense?4.3:2.9;return J.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:W(W(W(W(W({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},J.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},J.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},J.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:s,strokeMiterlimit:"10"})),J.createElement(mo,{className:"OP-annulus-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};function Kl(e){return e&&e.Math===Math&&e}Te(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var Pr=Kl(typeof window=="object"&&window)||Kl(typeof self=="object"&&self)||Kl(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function Ep(){var e,t;return!((e=Pr==null?void 0:Pr.crypto)===null||e===void 0)&&e.randomUUID?Pr.crypto.randomUUID():!((t=Pr==null?void 0:Pr.btoa)===null||t===void 0)&&t.name?Pr.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var ta=Array.from({length:4},function(e,t){return"--OP-dotted-phase".concat(t+1,"-color")}),lg=function(e){var t,n=po(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=ho(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(u){var d={},c=ta.length;if(u instanceof Array){for(var h=vo(u,c),x=0;x<h.length&&!(x>=4);x++)d[ta[x]]=h[x];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var b=0;b<c;b++)d[ta[b]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),b=0;b<c;b++)d[ta[b]]=Vt}return d}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e!=null&&e.dense?16:12;return J.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:W(W(W(W(W({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},J.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:s}).map(function(u,d){var c=function(b,m,P){if(m===16){var p=360*b/m,f=m-b,v=Number.parseFloat(P)/m*f*-1;return{transform:"rotate(".concat(p,"deg)"),animationDelay:"".concat(v,"s")}}return{transform:"",animationDelay:""}}(d,s,a),h=c.animationDelay,x=c.transform;return J.createElement("span",{key:Ep(),className:"rli-d-i-b dot-shape-holder",style:x?{transform:x}:void 0},J.createElement("span",{className:"dot",style:h?{animationDelay:h}:void 0}))}),J.createElement(mo,{className:"OP-dotted-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};Te(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var na=Array.from({length:4},function(e,t){return"--OP-spokes-phase".concat(t+1,"-color")}),sg=function(e){var t,n=po(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=ho(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(u){var d={},c=na.length;if(u instanceof Array){for(var h=vo(u,c),x=0;x<h.length&&!(x>=4);x++)d[na[x]]=h[x];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var b=0;b<c;b++)d[na[b]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),b=0;b<c;b++)d[na[b]]=Vt}return d}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e!=null&&e.dense?16:12;return J.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:W(W(W(W(W({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},J.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:s},function(u,d){return J.createElement("span",{key:Ep(),className:"rli-d-i-b spoke",style:ug(d,s,a)})})),J.createElement(mo,{text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};function ug(e,t,n){if(t===16){var r=t-e,o=Number.parseFloat(n)/t;return{transform:"rotate(".concat(360*e/t,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((r-1)*o*-1,"s")}}}Te(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var ra=Array.from({length:4},function(e,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")}),cg=function(e){var t,n=po(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=ho(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(u){var d={},c=ra.length;if(u instanceof Array){for(var h=vo(u,c),x=0;x<h.length&&!(x>=4);x++)d[ra[x]]=h[x];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var b=0;b<c;b++)d[ra[b]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),b=0;b<c;b++)d[ra[b]]=Vt}return d}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e.dense?"0.45em":"";return J.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:W(W(W(W(W({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},J.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},J.createElement("span",{className:"rli-d-i-b annulus-sectors",style:W({},s&&{borderWidth:s})}),J.createElement(mo,{className:"OP-annulus-dual-sectors-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};Te(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var zo=Array.from({length:4},function(e,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]}),oa=function(e){return e===void 0&&(e=1),.25*e},dg=function(e){var t,n=po(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=ho(e==null?void 0:e.speedPlus,"1s").animationPeriod,l=function(u){var d={},c=zo.length;if(u instanceof Array){for(var h=vo(u,c),x=0;x<h.length&&!(x>=4);x++){var b=zo[x];try{if(!(p=I(h[x])).isValid())throw new Error("Invalid Color: ".concat(p.getOriginalInput()));var m=p.setAlpha(oa(p.getAlpha())).toRgbString(),P=h[x];d[b[0]]=m,d[b[1]]=P}catch{P=Vt,m=(p=I(Vt)).setAlpha(oa(p.getAlpha())).toRgbString(),d[b[0]]=m,d[b[1]]=P}}return d}try{var p=I(u);if(typeof u!="string")throw new Error("Color String expected");if(!p.isValid())throw new Error("Invalid Color: ".concat(p.getOriginalInput()));P=u,m=p.setAlpha(oa(p.getAlpha())).toRgbString();for(var f=0;f<c;f++)d[(b=zo[f])[0]]=m,d[b[1]]=P}catch(v){for(v instanceof Error?console.warn("[".concat(v.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),P=Vt,m=(p=I(Vt)).setAlpha(oa(p.getAlpha())).toRgbString(),f=0;f<zo.length;f++)d[(b=zo[f])[0]]=m,d[b[1]]=P}return d}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e.dense?"0.45em":"";return J.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:W(W(W(W(W({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},J.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},J.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:W({},s&&{borderWidth:s})}),J.createElement(mo,{className:"OP-annulus-sector-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))},fg=function(e){var t=Object(e).variant,n=t===void 0?"disc":t;return n==="dotted"?J.createElement(lg,W({},e)):n==="spokes"?J.createElement(sg,W({},e)):n==="disc"?J.createElement(ag,W({},e)):n==="split-disc"?J.createElement(cg,W({},e)):n==="track-disc"?J.createElement(dg,W({},e)):null};Te(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--four-square-phase".concat(t+1,"-color")});Te(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--mosaic-phase".concat(t+1,"-color")});Te(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--riple-phase".concat(t+1,"-color")});Te(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-pulsate-phase".concat(t+1,"-color")});Te(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-brick-stack-phase".concat(t+1,"-color")});Te(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-bob-phase".concat(t+1,"-color")});Te(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-bounce-phase".concat(t+1,"-color")});Te(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--shape-phase".concat(t+1,"-color")});Te(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--trophySpin-phase".concat(t+1,"-color")});Te(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);var Er=Array.from({length:4},function(e,t){return"--slab-phase".concat(t+1,"-color")}),hg=function(e){var t,n=po(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=ho(e==null?void 0:e.speedPlus,"3s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var d=vo(s,Er.length),c=0;c<d.length&&!(c>=4);c++)u[Er[c]]=d[c];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var h=0;h<Er.length;h++)u[Er[h]]=s}catch(x){for(x instanceof Error?console.warn("[".concat(x.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s)," received in <Slab /> indicator cannot be processed. Using default instead!")),h=0;h<Er.length;h++)u[Er[h]]=Vt}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return J.createElement("span",{className:"rli-d-i-b slab-rli-bounding-box",style:W(W(W(W(W({},o&&{fontSize:o}),a&&{"--rli-animation-duration-unitless":parseFloat(a)}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},J.createElement("span",{className:"rli-d-i-b slab-indicator"},J.createElement("span",{className:"slabs-wrapper"},J.createElement("span",{className:"slab"}),J.createElement("span",{className:"slab"}),J.createElement("span",{className:"slab"}),J.createElement("span",{className:"slab"}))),J.createElement(mo,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};Te(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--life-line-phase".concat(t+1,"-color")});const pg=O.createContext({});function mg({children:e}){const[t,n]=O.useState(!1),[r,o]=O.useState(!0),i=O.useRef(!1),a=O.useCallback(u=>{if(i.current){console.warn("当前已经存在一个 loading 实例了");return}n(!0),o(u??!0),i.current=!0},[]),l=O.useCallback(()=>{n(!1),i.current=!1},[]),s=O.useMemo(()=>({showLoading:a,hideLoading:l}),[a,l]);return Y.jsxs(pg.Provider,{value:s,children:[e,t&&Y.jsx(vg,{mask:r})]})}function vg({mask:e=!0,text:t="数据玩命加载中..."}){return Y.jsx("div",{className:kp("loading-overlay  inset-0 fixed flex items-center justify-center bg-black bg-opacity-40",{"pointer-events-none":!e}),children:Y.jsxs("div",{className:"loading-content flex items-center justify-center flex-col",children:[Y.jsx(fg,{color:"#41d9ce",size:"medium",text:"",textColor:""}),t&&Y.jsx("p",{className:"font-bold text-md text-white shadow",children:t})]})})}const gg="modulepreload",yg=function(e){return"/project-preview/"+e},Ed={},xr=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(s=>{if(s=yg(s),s in Ed)return;Ed[s]=!0;const u=s.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${d}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":gg,u||(c.as="script"),c.crossOrigin="",c.href=s,l&&c.setAttribute("nonce",l),document.head.appendChild(c),u)return new Promise((h,x)=>{c.addEventListener("load",h),c.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${s}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return o.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ve(){return ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ve.apply(this,arguments)}var _e;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_e||(_e={}));const Od="popstate";function bg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return di("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:gr(o)}return wg(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function so(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xg(){return Math.random().toString(36).substr(2,8)}function Cd(e,t){return{usr:e.state,key:e.key,idx:t}}function di(e,t,n,r){return n===void 0&&(n=null),ve({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kn(t):t,{state:n,key:t&&t.key||r||xg()})}function gr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function wg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=_e.Pop,s=null,u=d();u==null&&(u=0,a.replaceState(ve({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function c(){l=_e.Pop;let P=d(),p=P==null?null:P-u;u=P,s&&s({action:l,location:m.location,delta:p})}function h(P,p){l=_e.Push;let f=di(m.location,P,p);u=d()+1;let v=Cd(f,u),k=m.createHref(f);try{a.pushState(v,"",k)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(k)}i&&s&&s({action:l,location:m.location,delta:1})}function x(P,p){l=_e.Replace;let f=di(m.location,P,p);u=d();let v=Cd(f,u),k=m.createHref(f);a.replaceState(v,"",k),i&&s&&s({action:l,location:m.location,delta:0})}function b(P){let p=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof P=="string"?P:gr(P);return f=f.replace(/ $/,"%20"),G(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let m={get action(){return l},get location(){return e(o,a)},listen(P){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Od,c),s=P,()=>{o.removeEventListener(Od,c),s=null}},createHref(P){return t(o,P)},createURL:b,encodeLocation(P){let p=b(P);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:x,go(P){return a.go(P)}};return m}var ae;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ae||(ae={}));const kg=new Set(["lazy","caseSensitive","path","id","index","children"]);function Sg(e){return e.index===!0}function fi(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let a=[...n,String(i)],l=typeof o.id=="string"?o.id:a.join("-");if(G(o.index!==!0||!o.children,"Cannot specify children on an index route"),G(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),Sg(o)){let s=ve({},o,t(o),{id:l});return r[l]=s,s}else{let s=ve({},o,t(o),{id:l,children:void 0});return r[l]=s,o.children&&(s.children=fi(o.children,t,a,r)),s}})}function tr(e,t,n){return n===void 0&&(n="/"),ba(e,t,n,!1)}function ba(e,t,n,r){let o=typeof t=="string"?Kn(t):t,i=go(o.pathname||"/",n);if(i==null)return null;let a=Op(e);Eg(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let u=Fg(i);l=Lg(a[s],u,r)}return l}function Pg(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function Op(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(G(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=ln([r,s.relativePath]),d=n.concat(s);i.children&&i.children.length>0&&(G(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Op(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Tg(u,i.index),routesMeta:d})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of Cp(i.path))o(i,a,s)}),t}function Cp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Cp(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Eg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Mg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Og=/^:[\w-]+$/,Cg=3,_g=2,zg=1,Rg=10,Dg=-2,_d=e=>e==="*";function Tg(e,t){let n=e.split("/"),r=n.length;return n.some(_d)&&(r+=Dg),t&&(r+=_g),n.filter(o=>!_d(o)).reduce((o,i)=>o+(Og.test(i)?Cg:i===""?zg:Rg),r)}function Mg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Lg(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",c=zd({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},d),h=s.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=zd({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},d)),!c)return null;Object.assign(o,c.params),a.push({params:o,pathname:ln([i,c.pathname]),pathnameBase:Ig(ln([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=ln([i,c.pathnameBase]))}return a}function zd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ng(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:x}=d;if(h==="*"){let m=l[c]||"";a=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const b=l[c];return x&&!b?u[h]=void 0:u[h]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function Ng(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),so(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Fg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return so(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function go(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function jg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Kn(e):e;return{pathname:n?n.startsWith("/")?n:Ag(n,t):t,search:Ug(r),hash:$g(o)}}function Ag(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Xl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _p(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fl(e,t){let n=_p(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hl(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Kn(e):(o=ve({},e),G(!o.pathname||!o.pathname.includes("?"),Xl("?","pathname","search",o)),G(!o.pathname||!o.pathname.includes("#"),Xl("#","pathname","hash",o)),G(!o.search||!o.search.includes("#"),Xl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else{let c=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),c-=1;o.pathname=h.join("/")}l=c>=0?t[c]:"/"}let s=jg(o,l),u=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const ln=e=>e.join("/").replace(/\/\/+/g,"/"),Ig=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ug=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$g=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Va{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function pl(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zp=["post","put","patch","delete"],qg=new Set(zp),Hg=["get",...zp],Bg=new Set(Hg),Vg=new Set([301,302,303,307,308]),Qg=new Set([307,308]),Yl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Wg={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ro={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Vu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kg=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Rp="remix-router-transitions";function Xg(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;G(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;o=w=>({hasErrorBoundary:y(w)})}else o=Kg;let i={},a=fi(e.routes,o,void 0,i),l,s=e.basename||"/",u=e.unstable_dataStrategy||ty,d=e.unstable_patchRoutesOnNavigation,c=ve({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),h=null,x=new Set,b=1e3,m=new Set,P=null,p=null,f=null,v=e.hydrationData!=null,k=tr(a,e.history.location,s),C=null;if(k==null&&!d){let y=Ke(404,{pathname:e.history.location.pathname}),{matches:w,route:S}=Ad(a);k=w,C={[S.id]:y}}k&&!e.hydrationData&&_i(k,a,e.history.location.pathname).active&&(k=null);let R;if(k)if(k.some(y=>y.route.lazy))R=!1;else if(!k.some(y=>y.route.loader))R=!0;else if(c.v7_partialHydration){let y=e.hydrationData?e.hydrationData.loaderData:null,w=e.hydrationData?e.hydrationData.errors:null,S=_=>_.route.loader?typeof _.route.loader=="function"&&_.route.loader.hydrate===!0?!1:y&&y[_.route.id]!==void 0||w&&w[_.route.id]!==void 0:!0;if(w){let _=k.findIndex(N=>w[N.route.id]!==void 0);R=k.slice(0,_+1).every(S)}else R=k.every(S)}else R=e.hydrationData!=null;else if(R=!1,k=[],c.v7_partialHydration){let y=_i(null,a,e.history.location.pathname);y.active&&y.matches&&(k=y.matches)}let D,g={historyAction:e.history.action,location:e.history.location,matches:k,initialized:R,navigation:Yl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||C,fetchers:new Map,blockers:new Map},M=_e.Pop,j=!1,Q,le=!1,Oe=new Map,xe=null,At=!1,Et=!1,pn=[],L=new Set,A=new Map,V=0,se=-1,ce=new Map,et=new Set,tt=new Map,Kt=new Map,Fe=new Set,gt=new Map,Yn=new Map,Zp=new Map,Pi;function em(){if(h=e.history.listen(y=>{let{action:w,location:S,delta:_}=y;if(Pi){Pi(),Pi=void 0;return}so(Yn.size===0||_!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let N=oc({currentLocation:g.location,nextLocation:S,historyAction:w});if(N&&_!=null){let q=new Promise(B=>{Pi=B});e.history.go(_*-1),Oi(N,{state:"blocked",location:S,proceed(){Oi(N,{state:"proceeding",proceed:void 0,reset:void 0,location:S}),q.then(()=>e.history.go(_))},reset(){let B=new Map(g.blockers);B.set(N,Ro),Qe({blockers:B})}});return}return Gn(w,S)}),n){vy(t,Oe);let y=()=>gy(t,Oe);t.addEventListener("pagehide",y),xe=()=>t.removeEventListener("pagehide",y)}return g.initialized||Gn(_e.Pop,g.location,{initialHydration:!0}),D}function tm(){h&&h(),xe&&xe(),x.clear(),Q&&Q.abort(),g.fetchers.forEach((y,w)=>Ei(w)),g.blockers.forEach((y,w)=>rc(w))}function nm(y){return x.add(y),()=>x.delete(y)}function Qe(y,w){w===void 0&&(w={}),g=ve({},g,y);let S=[],_=[];c.v7_fetcherPersist&&g.fetchers.forEach((N,q)=>{N.state==="idle"&&(Fe.has(q)?_.push(q):S.push(q))}),[...x].forEach(N=>N(g,{deletedFetchers:_,unstable_viewTransitionOpts:w.viewTransitionOpts,unstable_flushSync:w.flushSync===!0})),c.v7_fetcherPersist&&(S.forEach(N=>g.fetchers.delete(N)),_.forEach(N=>Ei(N)))}function wr(y,w,S){var _,N;let{flushSync:q}=S===void 0?{}:S,B=g.actionData!=null&&g.navigation.formMethod!=null&&Tt(g.navigation.formMethod)&&g.navigation.state==="loading"&&((_=y.state)==null?void 0:_._isRedirect)!==!0,T;w.actionData?Object.keys(w.actionData).length>0?T=w.actionData:T=null:B?T=g.actionData:T=null;let H=w.loaderData?Fd(g.loaderData,w.loaderData,w.matches||[],w.errors):g.loaderData,U=g.blockers;U.size>0&&(U=new Map(U),U.forEach((oe,de)=>U.set(de,Ro)));let $=j===!0||g.navigation.formMethod!=null&&Tt(g.navigation.formMethod)&&((N=y.state)==null?void 0:N._isRedirect)!==!0;l&&(a=l,l=void 0),At||M===_e.Pop||(M===_e.Push?e.history.push(y,y.state):M===_e.Replace&&e.history.replace(y,y.state));let ne;if(M===_e.Pop){let oe=Oe.get(g.location.pathname);oe&&oe.has(y.pathname)?ne={currentLocation:g.location,nextLocation:y}:Oe.has(y.pathname)&&(ne={currentLocation:y,nextLocation:g.location})}else if(le){let oe=Oe.get(g.location.pathname);oe?oe.add(y.pathname):(oe=new Set([y.pathname]),Oe.set(g.location.pathname,oe)),ne={currentLocation:g.location,nextLocation:y}}Qe(ve({},w,{actionData:T,loaderData:H,historyAction:M,location:y,initialized:!0,navigation:Yl,revalidation:"idle",restoreScrollPosition:ac(y,w.matches||g.matches),preventScrollReset:$,blockers:U}),{viewTransitionOpts:ne,flushSync:q===!0}),M=_e.Pop,j=!1,le=!1,At=!1,Et=!1,pn=[]}async function Yu(y,w){if(typeof y=="number"){e.history.go(y);return}let S=Ws(g.location,g.matches,s,c.v7_prependBasename,y,c.v7_relativeSplatPath,w==null?void 0:w.fromRouteId,w==null?void 0:w.relative),{path:_,submission:N,error:q}=Rd(c.v7_normalizeFormMethod,!1,S,w),B=g.location,T=di(g.location,_,w&&w.state);T=ve({},T,e.history.encodeLocation(T));let H=w&&w.replace!=null?w.replace:void 0,U=_e.Push;H===!0?U=_e.Replace:H===!1||N!=null&&Tt(N.formMethod)&&N.formAction===g.location.pathname+g.location.search&&(U=_e.Replace);let $=w&&"preventScrollReset"in w?w.preventScrollReset===!0:void 0,ne=(w&&w.unstable_flushSync)===!0,oe=oc({currentLocation:B,nextLocation:T,historyAction:U});if(oe){Oi(oe,{state:"blocked",location:T,proceed(){Oi(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:T}),Yu(y,w)},reset(){let de=new Map(g.blockers);de.set(oe,Ro),Qe({blockers:de})}});return}return await Gn(U,T,{submission:N,pendingError:q,preventScrollReset:$,replace:w&&w.replace,enableViewTransition:w&&w.unstable_viewTransition,flushSync:ne})}function rm(){if(yl(),Qe({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Gn(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Gn(M||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation,enableViewTransition:le===!0})}}async function Gn(y,w,S){Q&&Q.abort(),Q=null,M=y,At=(S&&S.startUninterruptedRevalidation)===!0,hm(g.location,g.matches),j=(S&&S.preventScrollReset)===!0,le=(S&&S.enableViewTransition)===!0;let _=l||a,N=S&&S.overrideNavigation,q=tr(_,w,s),B=(S&&S.flushSync)===!0,T=_i(q,_,w.pathname);if(T.active&&T.matches&&(q=T.matches),!q){let{error:ee,notFoundMatches:Me,route:Ce}=bl(w.pathname);wr(w,{matches:Me,loaderData:{},errors:{[Ce.id]:ee}},{flushSync:B});return}if(g.initialized&&!Et&&ly(g.location,w)&&!(S&&S.submission&&Tt(S.submission.formMethod))){wr(w,{matches:q},{flushSync:B});return}Q=new AbortController;let H=Or(e.history,w,Q.signal,S&&S.submission),U;if(S&&S.pendingError)U=[Ir(q).route.id,{type:ae.error,error:S.pendingError}];else if(S&&S.submission&&Tt(S.submission.formMethod)){let ee=await om(H,w,S.submission,q,T.active,{replace:S.replace,flushSync:B});if(ee.shortCircuited)return;if(ee.pendingActionResult){let[Me,Ce]=ee.pendingActionResult;if(dt(Ce)&&pl(Ce.error)&&Ce.error.status===404){Q=null,wr(w,{matches:ee.matches,loaderData:{},errors:{[Me]:Ce.error}});return}}q=ee.matches||q,U=ee.pendingActionResult,N=Gl(w,S.submission),B=!1,T.active=!1,H=Or(e.history,H.url,H.signal)}let{shortCircuited:$,matches:ne,loaderData:oe,errors:de}=await im(H,w,q,T.active,N,S&&S.submission,S&&S.fetcherSubmission,S&&S.replace,S&&S.initialHydration===!0,B,U);$||(Q=null,wr(w,ve({matches:ne||q},jd(U),{loaderData:oe,errors:de})))}async function om(y,w,S,_,N,q){q===void 0&&(q={}),yl();let B=py(w,S);if(Qe({navigation:B},{flushSync:q.flushSync===!0}),N){let U=await zi(_,w.pathname,y.signal);if(U.type==="aborted")return{shortCircuited:!0};if(U.type==="error"){let{boundaryId:$,error:ne}=Ci(w.pathname,U);return{matches:U.partialMatches,pendingActionResult:[$,{type:ae.error,error:ne}]}}else if(U.matches)_=U.matches;else{let{notFoundMatches:$,error:ne,route:oe}=bl(w.pathname);return{matches:$,pendingActionResult:[oe.id,{type:ae.error,error:ne}]}}}let T,H=Ao(_,w);if(!H.route.action&&!H.route.lazy)T={type:ae.error,error:Ke(405,{method:y.method,pathname:w.pathname,routeId:H.route.id})};else if(T=(await bo("action",g,y,[H],_,null))[H.route.id],y.signal.aborted)return{shortCircuited:!0};if(ir(T)){let U;return q&&q.replace!=null?U=q.replace:U=Md(T.response.headers.get("Location"),new URL(y.url),s)===g.location.pathname+g.location.search,await Jn(y,T,!0,{submission:S,replace:U}),{shortCircuited:!0}}if(Ln(T))throw Ke(400,{type:"defer-action"});if(dt(T)){let U=Ir(_,H.route.id);return(q&&q.replace)!==!0&&(M=_e.Push),{matches:_,pendingActionResult:[U.route.id,T]}}return{matches:_,pendingActionResult:[H.route.id,T]}}async function im(y,w,S,_,N,q,B,T,H,U,$){let ne=N||Gl(w,q),oe=q||B||Ud(ne),de=!At&&(!c.v7_partialHydration||!H);if(_){if(de){let we=Gu($);Qe(ve({navigation:ne},we!==void 0?{actionData:we}:{}),{flushSync:U})}let K=await zi(S,w.pathname,y.signal);if(K.type==="aborted")return{shortCircuited:!0};if(K.type==="error"){let{boundaryId:we,error:lt}=Ci(w.pathname,K);return{matches:K.partialMatches,loaderData:{},errors:{[we]:lt}}}else if(K.matches)S=K.matches;else{let{error:we,notFoundMatches:lt,route:ke}=bl(w.pathname);return{matches:lt,loaderData:{},errors:{[ke.id]:we}}}}let ee=l||a,[Me,Ce]=Dd(e.history,g,S,oe,w,c.v7_partialHydration&&H===!0,c.v7_skipActionErrorRevalidation,Et,pn,L,Fe,tt,et,ee,s,$);if(xl(K=>!(S&&S.some(we=>we.route.id===K))||Me&&Me.some(we=>we.route.id===K)),se=++V,Me.length===0&&Ce.length===0){let K=tc();return wr(w,ve({matches:S,loaderData:{},errors:$&&dt($[1])?{[$[0]]:$[1].error}:null},jd($),K?{fetchers:new Map(g.fetchers)}:{}),{flushSync:U}),{shortCircuited:!0}}if(de){let K={};if(!_){K.navigation=ne;let we=Gu($);we!==void 0&&(K.actionData=we)}Ce.length>0&&(K.fetchers=am(Ce)),Qe(K,{flushSync:U})}Ce.forEach(K=>{A.has(K.key)&&vn(K.key),K.controller&&A.set(K.key,K.controller)});let xo=()=>Ce.forEach(K=>vn(K.key));Q&&Q.signal.addEventListener("abort",xo);let{loaderResults:Yt,fetcherResults:kr}=await Ju(g,S,Me,Ce,y);if(y.signal.aborted)return{shortCircuited:!0};Q&&Q.signal.removeEventListener("abort",xo),Ce.forEach(K=>A.delete(K.key));let gn=ia(Yt);if(gn)return await Jn(y,gn.result,!0,{replace:T}),{shortCircuited:!0};if(gn=ia(kr),gn)return et.add(gn.key),await Jn(y,gn.result,!0,{replace:T}),{shortCircuited:!0};let{loaderData:Ri,errors:Gt}=Nd(g,S,Me,Yt,$,Ce,kr,gt);gt.forEach((K,we)=>{K.subscribe(lt=>{(lt||K.done)&&gt.delete(we)})}),c.v7_partialHydration&&H&&g.errors&&Object.entries(g.errors).filter(K=>{let[we]=K;return!Me.some(lt=>lt.route.id===we)}).forEach(K=>{let[we,lt]=K;Gt=Object.assign(Gt||{},{[we]:lt})});let Di=tc(),Ti=nc(se),Mi=Di||Ti||Ce.length>0;return ve({matches:S,loaderData:Ri,errors:Gt},Mi?{fetchers:new Map(g.fetchers)}:{})}function Gu(y){if(y&&!dt(y[1]))return{[y[0]]:y[1].data};if(g.actionData)return Object.keys(g.actionData).length===0?null:g.actionData}function am(y){return y.forEach(w=>{let S=g.fetchers.get(w.key),_=Do(void 0,S?S.data:void 0);g.fetchers.set(w.key,_)}),new Map(g.fetchers)}function lm(y,w,S,_){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");A.has(y)&&vn(y);let N=(_&&_.unstable_flushSync)===!0,q=l||a,B=Ws(g.location,g.matches,s,c.v7_prependBasename,S,c.v7_relativeSplatPath,w,_==null?void 0:_.relative),T=tr(q,B,s),H=_i(T,q,B);if(H.active&&H.matches&&(T=H.matches),!T){Xt(y,w,Ke(404,{pathname:B}),{flushSync:N});return}let{path:U,submission:$,error:ne}=Rd(c.v7_normalizeFormMethod,!0,B,_);if(ne){Xt(y,w,ne,{flushSync:N});return}let oe=Ao(T,U);if(j=(_&&_.preventScrollReset)===!0,$&&Tt($.formMethod)){sm(y,w,U,oe,T,H.active,N,$);return}tt.set(y,{routeId:w,path:U}),um(y,w,U,oe,T,H.active,N,$)}async function sm(y,w,S,_,N,q,B,T){yl(),tt.delete(y);function H(ke){if(!ke.route.action&&!ke.route.lazy){let Jt=Ke(405,{method:T.formMethod,pathname:S,routeId:w});return Xt(y,w,Jt,{flushSync:B}),!0}return!1}if(!q&&H(_))return;let U=g.fetchers.get(y);mn(y,my(T,U),{flushSync:B});let $=new AbortController,ne=Or(e.history,S,$.signal,T);if(q){let ke=await zi(N,S,ne.signal);if(ke.type==="aborted")return;if(ke.type==="error"){let{error:Jt}=Ci(S,ke);Xt(y,w,Jt,{flushSync:B});return}else if(ke.matches){if(N=ke.matches,_=Ao(N,S),H(_))return}else{Xt(y,w,Ke(404,{pathname:S}),{flushSync:B});return}}A.set(y,$);let oe=V,ee=(await bo("action",g,ne,[_],N,y))[_.route.id];if(ne.signal.aborted){A.get(y)===$&&A.delete(y);return}if(c.v7_fetcherPersist&&Fe.has(y)){if(ir(ee)||dt(ee)){mn(y,wn(void 0));return}}else{if(ir(ee))if(A.delete(y),se>oe){mn(y,wn(void 0));return}else return et.add(y),mn(y,Do(T)),Jn(ne,ee,!1,{fetcherSubmission:T});if(dt(ee)){Xt(y,w,ee.error);return}}if(Ln(ee))throw Ke(400,{type:"defer-action"});let Me=g.navigation.location||g.location,Ce=Or(e.history,Me,$.signal),xo=l||a,Yt=g.navigation.state!=="idle"?tr(xo,g.navigation.location,s):g.matches;G(Yt,"Didn't find any matches after fetcher action");let kr=++V;ce.set(y,kr);let gn=Do(T,ee.data);g.fetchers.set(y,gn);let[Ri,Gt]=Dd(e.history,g,Yt,T,Me,!1,c.v7_skipActionErrorRevalidation,Et,pn,L,Fe,tt,et,xo,s,[_.route.id,ee]);Gt.filter(ke=>ke.key!==y).forEach(ke=>{let Jt=ke.key,sc=g.fetchers.get(Jt),vm=Do(void 0,sc?sc.data:void 0);g.fetchers.set(Jt,vm),A.has(Jt)&&vn(Jt),ke.controller&&A.set(Jt,ke.controller)}),Qe({fetchers:new Map(g.fetchers)});let Di=()=>Gt.forEach(ke=>vn(ke.key));$.signal.addEventListener("abort",Di);let{loaderResults:Ti,fetcherResults:Mi}=await Ju(g,Yt,Ri,Gt,Ce);if($.signal.aborted)return;$.signal.removeEventListener("abort",Di),ce.delete(y),A.delete(y),Gt.forEach(ke=>A.delete(ke.key));let K=ia(Ti);if(K)return Jn(Ce,K.result,!1);if(K=ia(Mi),K)return et.add(K.key),Jn(Ce,K.result,!1);let{loaderData:we,errors:lt}=Nd(g,Yt,Ri,Ti,void 0,Gt,Mi,gt);if(g.fetchers.has(y)){let ke=wn(ee.data);g.fetchers.set(y,ke)}nc(kr),g.navigation.state==="loading"&&kr>se?(G(M,"Expected pending action"),Q&&Q.abort(),wr(g.navigation.location,{matches:Yt,loaderData:we,errors:lt,fetchers:new Map(g.fetchers)})):(Qe({errors:lt,loaderData:Fd(g.loaderData,we,Yt,lt),fetchers:new Map(g.fetchers)}),Et=!1)}async function um(y,w,S,_,N,q,B,T){let H=g.fetchers.get(y);mn(y,Do(T,H?H.data:void 0),{flushSync:B});let U=new AbortController,$=Or(e.history,S,U.signal);if(q){let ee=await zi(N,S,$.signal);if(ee.type==="aborted")return;if(ee.type==="error"){let{error:Me}=Ci(S,ee);Xt(y,w,Me,{flushSync:B});return}else if(ee.matches)N=ee.matches,_=Ao(N,S);else{Xt(y,w,Ke(404,{pathname:S}),{flushSync:B});return}}A.set(y,U);let ne=V,de=(await bo("loader",g,$,[_],N,y))[_.route.id];if(Ln(de)&&(de=await Qu(de,$.signal,!0)||de),A.get(y)===U&&A.delete(y),!$.signal.aborted){if(Fe.has(y)){mn(y,wn(void 0));return}if(ir(de))if(se>ne){mn(y,wn(void 0));return}else{et.add(y),await Jn($,de,!1);return}if(dt(de)){Xt(y,w,de.error);return}G(!Ln(de),"Unhandled fetcher deferred data"),mn(y,wn(de.data))}}async function Jn(y,w,S,_){let{submission:N,fetcherSubmission:q,replace:B}=_===void 0?{}:_;w.response.headers.has("X-Remix-Revalidate")&&(Et=!0);let T=w.response.headers.get("Location");G(T,"Expected a Location header on the redirect Response"),T=Md(T,new URL(y.url),s);let H=di(g.location,T,{_isRedirect:!0});if(n){let ee=!1;if(w.response.headers.has("X-Remix-Reload-Document"))ee=!0;else if(Vu.test(T)){const Me=e.history.createURL(T);ee=Me.origin!==t.location.origin||go(Me.pathname,s)==null}if(ee){B?t.location.replace(T):t.location.assign(T);return}}Q=null;let U=B===!0||w.response.headers.has("X-Remix-Replace")?_e.Replace:_e.Push,{formMethod:$,formAction:ne,formEncType:oe}=g.navigation;!N&&!q&&$&&ne&&oe&&(N=Ud(g.navigation));let de=N||q;if(Qg.has(w.response.status)&&de&&Tt(de.formMethod))await Gn(U,H,{submission:ve({},de,{formAction:T}),preventScrollReset:j,enableViewTransition:S?le:void 0});else{let ee=Gl(H,N);await Gn(U,H,{overrideNavigation:ee,fetcherSubmission:q,preventScrollReset:j,enableViewTransition:S?le:void 0})}}async function bo(y,w,S,_,N,q){let B,T={};try{B=await ny(u,y,w,S,_,N,q,i,o)}catch(H){return _.forEach(U=>{T[U.route.id]={type:ae.error,error:H}}),T}for(let[H,U]of Object.entries(B))if(uy(U)){let $=U.result;T[H]={type:ae.redirect,response:iy($,S,H,N,s,c.v7_relativeSplatPath)}}else T[H]=await oy(U);return T}async function Ju(y,w,S,_,N){let q=y.matches,B=bo("loader",y,N,S,w,null),T=Promise.all(_.map(async $=>{if($.matches&&$.match&&$.controller){let oe=(await bo("loader",y,Or(e.history,$.path,$.controller.signal),[$.match],$.matches,$.key))[$.match.route.id];return{[$.key]:oe}}else return Promise.resolve({[$.key]:{type:ae.error,error:Ke(404,{pathname:$.path})}})})),H=await B,U=(await T).reduce(($,ne)=>Object.assign($,ne),{});return await Promise.all([fy(w,H,N.signal,q,y.loaderData),hy(w,U,_)]),{loaderResults:H,fetcherResults:U}}function yl(){Et=!0,pn.push(...xl()),tt.forEach((y,w)=>{A.has(w)&&(L.add(w),vn(w))})}function mn(y,w,S){S===void 0&&(S={}),g.fetchers.set(y,w),Qe({fetchers:new Map(g.fetchers)},{flushSync:(S&&S.flushSync)===!0})}function Xt(y,w,S,_){_===void 0&&(_={});let N=Ir(g.matches,w);Ei(y),Qe({errors:{[N.route.id]:S},fetchers:new Map(g.fetchers)},{flushSync:(_&&_.flushSync)===!0})}function Zu(y){return c.v7_fetcherPersist&&(Kt.set(y,(Kt.get(y)||0)+1),Fe.has(y)&&Fe.delete(y)),g.fetchers.get(y)||Wg}function Ei(y){let w=g.fetchers.get(y);A.has(y)&&!(w&&w.state==="loading"&&ce.has(y))&&vn(y),tt.delete(y),ce.delete(y),et.delete(y),Fe.delete(y),L.delete(y),g.fetchers.delete(y)}function cm(y){if(c.v7_fetcherPersist){let w=(Kt.get(y)||0)-1;w<=0?(Kt.delete(y),Fe.add(y)):Kt.set(y,w)}else Ei(y);Qe({fetchers:new Map(g.fetchers)})}function vn(y){let w=A.get(y);G(w,"Expected fetch controller: "+y),w.abort(),A.delete(y)}function ec(y){for(let w of y){let S=Zu(w),_=wn(S.data);g.fetchers.set(w,_)}}function tc(){let y=[],w=!1;for(let S of et){let _=g.fetchers.get(S);G(_,"Expected fetcher: "+S),_.state==="loading"&&(et.delete(S),y.push(S),w=!0)}return ec(y),w}function nc(y){let w=[];for(let[S,_]of ce)if(_<y){let N=g.fetchers.get(S);G(N,"Expected fetcher: "+S),N.state==="loading"&&(vn(S),ce.delete(S),w.push(S))}return ec(w),w.length>0}function dm(y,w){let S=g.blockers.get(y)||Ro;return Yn.get(y)!==w&&Yn.set(y,w),S}function rc(y){g.blockers.delete(y),Yn.delete(y)}function Oi(y,w){let S=g.blockers.get(y)||Ro;G(S.state==="unblocked"&&w.state==="blocked"||S.state==="blocked"&&w.state==="blocked"||S.state==="blocked"&&w.state==="proceeding"||S.state==="blocked"&&w.state==="unblocked"||S.state==="proceeding"&&w.state==="unblocked","Invalid blocker state transition: "+S.state+" -> "+w.state);let _=new Map(g.blockers);_.set(y,w),Qe({blockers:_})}function oc(y){let{currentLocation:w,nextLocation:S,historyAction:_}=y;if(Yn.size===0)return;Yn.size>1&&so(!1,"A router only supports one blocker at a time");let N=Array.from(Yn.entries()),[q,B]=N[N.length-1],T=g.blockers.get(q);if(!(T&&T.state==="proceeding")&&B({currentLocation:w,nextLocation:S,historyAction:_}))return q}function bl(y){let w=Ke(404,{pathname:y}),S=l||a,{matches:_,route:N}=Ad(S);return xl(),{notFoundMatches:_,route:N,error:w}}function Ci(y,w){return{boundaryId:Ir(w.partialMatches).route.id,error:Ke(400,{type:"route-discovery",pathname:y,message:w.error!=null&&"message"in w.error?w.error:String(w.error)})}}function xl(y){let w=[];return gt.forEach((S,_)=>{(!y||y(_))&&(S.cancel(),w.push(_),gt.delete(_))}),w}function fm(y,w,S){if(P=y,f=w,p=S||null,!v&&g.navigation===Yl){v=!0;let _=ac(g.location,g.matches);_!=null&&Qe({restoreScrollPosition:_})}return()=>{P=null,f=null,p=null}}function ic(y,w){return p&&p(y,w.map(_=>Pg(_,g.loaderData)))||y.key}function hm(y,w){if(P&&f){let S=ic(y,w);P[S]=f()}}function ac(y,w){if(P){let S=ic(y,w),_=P[S];if(typeof _=="number")return _}return null}function _i(y,w,S){if(d){if(m.has(S))return{active:!1,matches:y};if(y){if(Object.keys(y[0].params).length>0)return{active:!0,matches:ba(w,S,s,!0)}}else return{active:!0,matches:ba(w,S,s,!0)||[]}}return{active:!1,matches:null}}async function zi(y,w,S){let _=y;for(;;){let N=l==null,q=l||a;try{await Zg(d,w,_,q,i,o,Zp,S)}catch(H){return{type:"error",error:H,partialMatches:_}}finally{N&&(a=[...a])}if(S.aborted)return{type:"aborted"};let B=tr(q,w,s);if(B)return lc(w,m),{type:"success",matches:B};let T=ba(q,w,s,!0);if(!T||_.length===T.length&&_.every((H,U)=>H.route.id===T[U].route.id))return lc(w,m),{type:"success",matches:null};_=T}}function lc(y,w){if(w.size>=b){let S=w.values().next().value;w.delete(S)}w.add(y)}function pm(y){i={},l=fi(y,o,void 0,i)}function mm(y,w){let S=l==null;Tp(y,w,l||a,i,o),S&&(a=[...a],Qe({}))}return D={get basename(){return s},get future(){return c},get state(){return g},get routes(){return a},get window(){return t},initialize:em,subscribe:nm,enableScrollRestoration:fm,navigate:Yu,fetch:lm,revalidate:rm,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:Zu,deleteFetcher:cm,dispose:tm,getBlocker:dm,deleteBlocker:rc,patchRoutes:mm,_internalFetchControllers:A,_internalActiveDeferreds:gt,_internalSetRoutes:pm},D}function Yg(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ws(e,t,n,r,o,i,a,l){let s,u;if(a){s=[];for(let c of t)if(s.push(c),c.route.id===a){u=c;break}}else s=t,u=t[t.length-1];let d=hl(o||".",fl(s,i),go(e.pathname,n)||e.pathname,l==="path");return o==null&&(d.search=e.search,d.hash=e.hash),(o==null||o===""||o===".")&&u&&u.route.index&&!Wu(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:ln([n,d.pathname])),gr(d)}function Rd(e,t,n,r){if(!r||!Yg(r))return{path:n};if(r.formMethod&&!dy(r.formMethod))return{path:n,error:Ke(405,{method:r.formMethod})};let o=()=>({path:n,error:Ke(400,{type:"invalid-body"})}),i=r.formMethod||"get",a=e?i.toUpperCase():i.toLowerCase(),l=Mp(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Tt(a))return o();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((x,b)=>{let[m,P]=b;return""+x+m+"="+P+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!Tt(a))return o();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return o()}}}G(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=Ks(r.formData),u=r.formData;else if(r.body instanceof FormData)s=Ks(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=Ld(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=Ld(s)}catch{return o()}let d={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Tt(d.formMethod))return{path:n,submission:d};let c=Kn(n);return t&&c.search&&Wu(c.search)&&s.append("index",""),c.search="?"+s,{path:gr(c),submission:d}}function Gg(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Dd(e,t,n,r,o,i,a,l,s,u,d,c,h,x,b,m){let P=m?dt(m[1])?m[1].error:m[1].data:void 0,p=e.createURL(t.location),f=e.createURL(o),v=m&&dt(m[1])?m[0]:void 0,k=v?Gg(n,v):n,C=m?m[1].statusCode:void 0,R=a&&C&&C>=400,D=k.filter((M,j)=>{let{route:Q}=M;if(Q.lazy)return!0;if(Q.loader==null)return!1;if(i)return typeof Q.loader!="function"||Q.loader.hydrate?!0:t.loaderData[Q.id]===void 0&&(!t.errors||t.errors[Q.id]===void 0);if(Jg(t.loaderData,t.matches[j],M)||s.some(xe=>xe===M.route.id))return!0;let le=t.matches[j],Oe=M;return Td(M,ve({currentUrl:p,currentParams:le.params,nextUrl:f,nextParams:Oe.params},r,{actionResult:P,actionStatus:C,defaultShouldRevalidate:R?!1:l||p.pathname+p.search===f.pathname+f.search||p.search!==f.search||Dp(le,Oe)}))}),g=[];return c.forEach((M,j)=>{if(i||!n.some(At=>At.route.id===M.routeId)||d.has(j))return;let Q=tr(x,M.path,b);if(!Q){g.push({key:j,routeId:M.routeId,path:M.path,matches:null,match:null,controller:null});return}let le=t.fetchers.get(j),Oe=Ao(Q,M.path),xe=!1;h.has(j)?xe=!1:u.has(j)?(u.delete(j),xe=!0):le&&le.state!=="idle"&&le.data===void 0?xe=l:xe=Td(Oe,ve({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:P,actionStatus:C,defaultShouldRevalidate:R?!1:l})),xe&&g.push({key:j,routeId:M.routeId,path:M.path,matches:Q,match:Oe,controller:new AbortController})}),[D,g]}function Jg(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function Dp(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Td(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Zg(e,t,n,r,o,i,a,l){let s=[t,...n.map(u=>u.route.id)].join("-");try{let u=a.get(s);u||(u=e({path:t,matches:n,patch:(d,c)=>{l.aborted||Tp(d,c,r,o,i)}}),a.set(s,u)),u&&sy(u)&&await u}finally{a.delete(s)}}function Tp(e,t,n,r,o){if(e){var i;let a=r[e];G(a,"No route found to patch children into: routeId = "+e);let l=fi(t,o,[e,"patch",String(((i=a.children)==null?void 0:i.length)||"0")],r);a.children?a.children.push(...l):a.children=l}else{let a=fi(t,o,["patch",String(n.length||"0")],r);n.push(...a)}}async function ey(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];G(o,"No route found in manifest");let i={};for(let a in r){let s=o[a]!==void 0&&a!=="hasErrorBoundary";so(!s,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!kg.has(a)&&(i[a]=r[a])}Object.assign(o,i),Object.assign(o,ve({},t(o),{lazy:void 0}))}async function ty(e){let{matches:t}=e,n=t.filter(o=>o.shouldLoad);return(await Promise.all(n.map(o=>o.resolve()))).reduce((o,i,a)=>Object.assign(o,{[n[a].route.id]:i}),{})}async function ny(e,t,n,r,o,i,a,l,s,u){let d=i.map(x=>x.route.lazy?ey(x.route,s,l):void 0),c=i.map((x,b)=>{let m=d[b],P=o.some(f=>f.route.id===x.route.id);return ve({},x,{shouldLoad:P,resolve:async f=>(f&&r.method==="GET"&&(x.route.lazy||x.route.loader)&&(P=!0),P?ry(t,r,x,m,f,u):Promise.resolve({type:ae.data,result:void 0}))})}),h=await e({matches:c,request:r,params:i[0].params,fetcherKey:a,context:u});try{await Promise.all(d)}catch{}return h}async function ry(e,t,n,r,o,i){let a,l,s=u=>{let d,c=new Promise((b,m)=>d=m);l=()=>d(),t.signal.addEventListener("abort",l);let h=b=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:i},...b!==void 0?[b]:[]),x=(async()=>{try{return{type:"data",result:await(o?o(m=>h(m)):h())}}catch(b){return{type:"error",result:b}}})();return Promise.race([x,c])};try{let u=n.route[e];if(r)if(u){let d,[c]=await Promise.all([s(u).catch(h=>{d=h}),r]);if(d!==void 0)throw d;a=c}else if(await r,u=n.route[e],u)a=await s(u);else if(e==="action"){let d=new URL(t.url),c=d.pathname+d.search;throw Ke(405,{method:t.method,pathname:c,routeId:n.route.id})}else return{type:ae.data,result:void 0};else if(u)a=await s(u);else{let d=new URL(t.url),c=d.pathname+d.search;throw Ke(404,{pathname:c})}G(a.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:ae.error,result:u}}finally{l&&t.signal.removeEventListener("abort",l)}return a}async function oy(e){let{result:t,type:n}=e;if(Lp(t)){let u;try{let d=t.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?t.body==null?u=null:u=await t.json():u=await t.text()}catch(d){return{type:ae.error,error:d}}return n===ae.error?{type:ae.error,error:new Va(t.status,t.statusText,u),statusCode:t.status,headers:t.headers}:{type:ae.data,data:u,statusCode:t.status,headers:t.headers}}if(n===ae.error){if(Id(t)){var r;if(t.data instanceof Error){var o;return{type:ae.error,error:t.data,statusCode:(o=t.init)==null?void 0:o.status}}t=new Va(((r=t.init)==null?void 0:r.status)||500,void 0,t.data)}return{type:ae.error,error:t,statusCode:pl(t)?t.status:void 0}}if(cy(t)){var i,a;return{type:ae.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((a=t.init)==null?void 0:a.headers)&&new Headers(t.init.headers)}}if(Id(t)){var l,s;return{type:ae.data,data:t.data,statusCode:(l=t.init)==null?void 0:l.status,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}}return{type:ae.data,data:t}}function iy(e,t,n,r,o,i){let a=e.headers.get("Location");if(G(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!Vu.test(a)){let l=r.slice(0,r.findIndex(s=>s.route.id===n)+1);a=Ws(new URL(t.url),l,o,!0,a,i),e.headers.set("Location",a)}return e}function Md(e,t,n){if(Vu.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=go(o.pathname,n)!=null;if(o.origin===t.origin&&i)return o.pathname+o.search+o.hash}return e}function Or(e,t,n,r){let o=e.createURL(Mp(t)).toString(),i={signal:n};if(r&&Tt(r.formMethod)){let{formMethod:a,formEncType:l}=r;i.method=a.toUpperCase(),l==="application/json"?(i.headers=new Headers({"Content-Type":l}),i.body=JSON.stringify(r.json)):l==="text/plain"?i.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?i.body=Ks(r.formData):i.body=r.formData}return new Request(o,i)}function Ks(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Ld(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function ay(e,t,n,r,o){let i={},a=null,l,s=!1,u={},d=n&&dt(n[1])?n[1].error:void 0;return e.forEach(c=>{if(!(c.route.id in t))return;let h=c.route.id,x=t[h];if(G(!ir(x),"Cannot handle redirect results in processLoaderData"),dt(x)){let b=x.error;d!==void 0&&(b=d,d=void 0),a=a||{};{let m=Ir(e,h);a[m.route.id]==null&&(a[m.route.id]=b)}i[h]=void 0,s||(s=!0,l=pl(x.error)?x.error.status:500),x.headers&&(u[h]=x.headers)}else Ln(x)?(r.set(h,x.deferredData),i[h]=x.deferredData.data,x.statusCode!=null&&x.statusCode!==200&&!s&&(l=x.statusCode),x.headers&&(u[h]=x.headers)):(i[h]=x.data,x.statusCode&&x.statusCode!==200&&!s&&(l=x.statusCode),x.headers&&(u[h]=x.headers))}),d!==void 0&&n&&(a={[n[0]]:d},i[n[0]]=void 0),{loaderData:i,errors:a,statusCode:l||200,loaderHeaders:u}}function Nd(e,t,n,r,o,i,a,l){let{loaderData:s,errors:u}=ay(t,r,o,l);return i.forEach(d=>{let{key:c,match:h,controller:x}=d,b=a[c];if(G(b,"Did not find corresponding fetcher result"),!(x&&x.signal.aborted))if(dt(b)){let m=Ir(e.matches,h==null?void 0:h.route.id);u&&u[m.route.id]||(u=ve({},u,{[m.route.id]:b.error})),e.fetchers.delete(c)}else if(ir(b))G(!1,"Unhandled fetcher revalidation redirect");else if(Ln(b))G(!1,"Unhandled fetcher deferred data");else{let m=wn(b.data);e.fetchers.set(c,m)}}),{loaderData:s,errors:u}}function Fd(e,t,n,r){let o=ve({},t);for(let i of n){let a=i.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(o[a]=t[a]):e[a]!==void 0&&i.route.loader&&(o[a]=e[a]),r&&r.hasOwnProperty(a))break}return o}function jd(e){return e?dt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Ir(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Ad(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Ke(e,t){let{pathname:n,routeId:r,method:o,type:i,message:a}=t===void 0?{}:t,l="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(l="Bad Request",i==="route-discovery"?s='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+a):o&&n&&r?s="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?s="defer() is not supported in actions":i==="invalid-body"&&(s="Unable to encode submission body")):e===403?(l="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",s='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",o&&n&&r?s="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new Va(e||500,l,new Error(s),!0)}function ia(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,o]=t[n];if(ir(o))return{key:r,result:o}}}function Mp(e){let t=typeof e=="string"?Kn(e):e;return gr(ve({},t,{hash:""}))}function ly(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function sy(e){return typeof e=="object"&&e!=null&&"then"in e}function uy(e){return Lp(e.result)&&Vg.has(e.result.status)}function Ln(e){return e.type===ae.deferred}function dt(e){return e.type===ae.error}function ir(e){return(e&&e.type)===ae.redirect}function Id(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function cy(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Lp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function dy(e){return Bg.has(e.toLowerCase())}function Tt(e){return qg.has(e.toLowerCase())}async function fy(e,t,n,r,o){let i=Object.entries(t);for(let a=0;a<i.length;a++){let[l,s]=i[a],u=e.find(h=>(h==null?void 0:h.route.id)===l);if(!u)continue;let d=r.find(h=>h.route.id===u.route.id),c=d!=null&&!Dp(d,u)&&(o&&o[u.route.id])!==void 0;Ln(s)&&c&&await Qu(s,n,!1).then(h=>{h&&(t[l]=h)})}}async function hy(e,t,n){for(let r=0;r<n.length;r++){let{key:o,routeId:i,controller:a}=n[r],l=t[o];e.find(u=>(u==null?void 0:u.route.id)===i)&&Ln(l)&&(G(a,"Expected an AbortController for revalidating fetcher deferred result"),await Qu(l,a.signal,!0).then(u=>{u&&(t[o]=u)}))}}async function Qu(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ae.data,data:e.deferredData.unwrappedData}}catch(o){return{type:ae.error,error:o}}return{type:ae.data,data:e.deferredData.data}}}function Wu(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Ao(e,t){let n=typeof t=="string"?Kn(t).search:t.search;if(e[e.length-1].route.index&&Wu(n||""))return e[e.length-1];let r=_p(e);return r[r.length-1]}function Ud(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:a}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function Gl(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function py(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Do(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function my(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function wn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function vy(e,t){try{let n=e.sessionStorage.getItem(Rp);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function gy(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(Rp,JSON.stringify(n))}catch(r){so(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qa(){return Qa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qa.apply(this,arguments)}const ml=O.createContext(null),Np=O.createContext(null),Xn=O.createContext(null),Ku=O.createContext(null),hn=O.createContext({outlet:null,matches:[],isDataRoute:!1}),Fp=O.createContext(null);function yy(e,t){let{relative:n}=t===void 0?{}:t;yo()||G(!1);let{basename:r,navigator:o}=O.useContext(Xn),{hash:i,pathname:a,search:l}=Ip(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:ln([r,a])),o.createHref({pathname:s,search:l,hash:i})}function yo(){return O.useContext(Ku)!=null}function Si(){return yo()||G(!1),O.useContext(Ku).location}function jp(e){O.useContext(Xn).static||O.useLayoutEffect(e)}function Ap(){let{isDataRoute:e}=O.useContext(hn);return e?Ty():by()}function by(){yo()||G(!1);let e=O.useContext(ml),{basename:t,future:n,navigator:r}=O.useContext(Xn),{matches:o}=O.useContext(hn),{pathname:i}=Si(),a=JSON.stringify(fl(o,n.v7_relativeSplatPath)),l=O.useRef(!1);return jp(()=>{l.current=!0}),O.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=hl(u,JSON.parse(a),i,d.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:ln([t,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[t,r,a,i,e])}const xy=O.createContext(null);function wy(e){let t=O.useContext(hn).outlet;return t&&O.createElement(xy.Provider,{value:e},t)}function Ip(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=O.useContext(Xn),{matches:o}=O.useContext(hn),{pathname:i}=Si(),a=JSON.stringify(fl(o,r.v7_relativeSplatPath));return O.useMemo(()=>hl(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function ky(e,t,n,r){yo()||G(!1);let{navigator:o}=O.useContext(Xn),{matches:i}=O.useContext(hn),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=Si(),d;d=u;let c=d.pathname||"/",h=c;if(s!=="/"){let m=s.replace(/^\//,"").split("/");h="/"+c.replace(/^\//,"").split("/").slice(m.length).join("/")}let x=tr(e,{pathname:h});return Cy(x&&x.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:ln([s,o.encodeLocation?o.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?s:ln([s,o.encodeLocation?o.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,n,r)}function Sy(){let e=Dy(),t=pl(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},t),n?O.createElement("pre",{style:o},n):null,null)}const Py=O.createElement(Sy,null);class Ey extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?O.createElement(hn.Provider,{value:this.props.routeContext},O.createElement(Fp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Oy(e){let{routeContext:t,match:n,children:r}=e,o=O.useContext(ml);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(hn.Provider,{value:t},r)}function Cy(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let d=a.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);d>=0||G(!1),a=a.slice(0,Math.min(a.length,d+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let c=a[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:x}=n,b=c.route.loader&&h[c.route.id]===void 0&&(!x||x[c.route.id]===void 0);if(c.route.lazy||b){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,c,h)=>{let x,b=!1,m=null,P=null;n&&(x=l&&c.route.id?l[c.route.id]:void 0,m=c.route.errorElement||Py,s&&(u<0&&h===0?(b=!0,P=null):u===h&&(b=!0,P=c.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,h+1)),f=()=>{let v;return x?v=m:b?v=P:c.route.Component?v=O.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=d,O.createElement(Oy,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?O.createElement(Ey,{location:n.location,revalidation:n.revalidation,component:m,error:x,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Up=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Up||{}),Wa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Wa||{});function _y(e){let t=O.useContext(ml);return t||G(!1),t}function zy(e){let t=O.useContext(Np);return t||G(!1),t}function Ry(e){let t=O.useContext(hn);return t||G(!1),t}function $p(e){let t=Ry(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function Dy(){var e;let t=O.useContext(Fp),n=zy(Wa.UseRouteError),r=$p(Wa.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ty(){let{router:e}=_y(Up.UseNavigateStable),t=$p(Wa.UseNavigateStable),n=O.useRef(!1);return jp(()=>{n.current=!0}),O.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Qa({fromRouteId:t},i)))},[e,t])}function My(e){let{to:t,replace:n,state:r,relative:o}=e;yo()||G(!1);let{future:i,static:a}=O.useContext(Xn),{matches:l}=O.useContext(hn),{pathname:s}=Si(),u=Ap(),d=hl(t,fl(l,i.v7_relativeSplatPath),s,o==="path"),c=JSON.stringify(d);return O.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:o}),[u,c,o,n,r]),null}function Ly(e){return wy(e.context)}function Ny(e){let{basename:t="/",children:n=null,location:r,navigationType:o=_e.Pop,navigator:i,static:a=!1,future:l}=e;yo()&&G(!1);let s=t.replace(/^\/*/,"/"),u=O.useMemo(()=>({basename:s,navigator:i,static:a,future:Qa({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=Kn(r));let{pathname:d="/",search:c="",hash:h="",state:x=null,key:b="default"}=r,m=O.useMemo(()=>{let P=go(d,s);return P==null?null:{location:{pathname:P,search:c,hash:h,state:x,key:b},navigationType:o}},[s,d,c,h,x,b,o]);return m==null?null:O.createElement(Xn.Provider,{value:u},O.createElement(Ku.Provider,{children:n,value:m}))}new Promise(()=>{});function Fy(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:O.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:O.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:O.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hi.apply(this,arguments)}function jy(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ay(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Iy(e,t){return e.button===0&&(!t||t==="_self")&&!Ay(e)}const Uy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],$y="6";try{window.__reactRouterVersion=$y}catch{}function qy(e,t){return Xg({basename:t==null?void 0:t.basename,future:hi({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:bg({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Hy(),routes:e,mapRouteProperties:Fy,unstable_dataStrategy:t==null?void 0:t.unstable_dataStrategy,unstable_patchRoutesOnNavigation:t==null?void 0:t.unstable_patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function Hy(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=hi({},t,{errors:By(t.errors)})),t}function By(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new Va(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let a=new i(o.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const Vy=O.createContext({isTransitioning:!1}),Qy=O.createContext(new Map),Wy="startTransition",$d=Tm[Wy],Ky="flushSync",qd=Bv[Ky];function Xy(e){$d?$d(e):e()}function To(e){qd?qd(e):e()}class Yy{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function Gy(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=O.useState(n.state),[a,l]=O.useState(),[s,u]=O.useState({isTransitioning:!1}),[d,c]=O.useState(),[h,x]=O.useState(),[b,m]=O.useState(),P=O.useRef(new Map),{v7_startTransition:p}=r||{},f=O.useCallback(g=>{p?Xy(g):g()},[p]),v=O.useCallback((g,M)=>{let{deletedFetchers:j,unstable_flushSync:Q,unstable_viewTransitionOpts:le}=M;j.forEach(xe=>P.current.delete(xe)),g.fetchers.forEach((xe,At)=>{xe.data!==void 0&&P.current.set(At,xe.data)});let Oe=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!le||Oe){Q?To(()=>i(g)):f(()=>i(g));return}if(Q){To(()=>{h&&(d&&d.resolve(),h.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:le.currentLocation,nextLocation:le.nextLocation})});let xe=n.window.document.startViewTransition(()=>{To(()=>i(g))});xe.finished.finally(()=>{To(()=>{c(void 0),x(void 0),l(void 0),u({isTransitioning:!1})})}),To(()=>x(xe));return}h?(d&&d.resolve(),h.skipTransition(),m({state:g,currentLocation:le.currentLocation,nextLocation:le.nextLocation})):(l(g),u({isTransitioning:!0,flushSync:!1,currentLocation:le.currentLocation,nextLocation:le.nextLocation}))},[n.window,h,d,P,f]);O.useLayoutEffect(()=>n.subscribe(v),[n,v]),O.useEffect(()=>{s.isTransitioning&&!s.flushSync&&c(new Yy)},[s]),O.useEffect(()=>{if(d&&a&&n.window){let g=a,M=d.promise,j=n.window.document.startViewTransition(async()=>{f(()=>i(g)),await M});j.finished.finally(()=>{c(void 0),x(void 0),l(void 0),u({isTransitioning:!1})}),x(j)}},[f,a,d,n.window]),O.useEffect(()=>{d&&a&&o.location.key===a.location.key&&d.resolve()},[d,h,o.location,a]),O.useEffect(()=>{!s.isTransitioning&&b&&(l(b.state),u({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),m(void 0))},[s.isTransitioning,b]),O.useEffect(()=>{},[]);let k=O.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,M,j)=>n.navigate(g,{state:M,preventScrollReset:j==null?void 0:j.preventScrollReset}),replace:(g,M,j)=>n.navigate(g,{replace:!0,state:M,preventScrollReset:j==null?void 0:j.preventScrollReset})}),[n]),C=n.basename||"/",R=O.useMemo(()=>({router:n,navigator:k,static:!1,basename:C}),[n,k,C]),D=O.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return O.createElement(O.Fragment,null,O.createElement(ml.Provider,{value:R},O.createElement(Np.Provider,{value:o},O.createElement(Qy.Provider,{value:P.current},O.createElement(Vy.Provider,{value:s},O.createElement(Ny,{basename:C,location:o.location,navigationType:o.historyAction,navigator:k,future:D},o.initialized||n.future.v7_partialHydration?O.createElement(Jy,{routes:n.routes,future:n.future,state:o}):t))))),null)}const Jy=O.memo(Zy);function Zy(e){let{routes:t,future:n,state:r}=e;return ky(t,void 0,r,n)}const e1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",t1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,q1=O.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:d,unstable_viewTransition:c}=t,h=jy(t,Uy),{basename:x}=O.useContext(Xn),b,m=!1;if(typeof u=="string"&&t1.test(u)&&(b=u,e1))try{let v=new URL(window.location.href),k=u.startsWith("//")?new URL(v.protocol+u):new URL(u),C=go(k.pathname,x);k.origin===v.origin&&C!=null?u=C+k.search+k.hash:m=!0}catch{}let P=yy(u,{relative:o}),p=n1(u,{replace:a,state:l,target:s,preventScrollReset:d,relative:o,unstable_viewTransition:c});function f(v){r&&r(v),v.defaultPrevented||p(v)}return O.createElement("a",hi({},h,{href:b||P,onClick:m||i?r:f,ref:n,target:s}))});var Hd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hd||(Hd={}));var Bd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bd||(Bd={}));function n1(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=Ap(),u=Si(),d=Ip(e,{relative:a});return O.useCallback(c=>{if(Iy(c,n)){c.preventDefault();let h=r!==void 0?r:gr(u)===gr(d);s(e,{replace:h,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[u,s,d,r,o,n,e,i,a,l])}function r1({className:e}){return Y.jsxs("div",{className:kp("flex items-center flex-col justify-center ",e),children:[Y.jsx(hg,{color:"#41d9ce",size:"medium",text:"",textColor:""}),Y.jsx("p",{className:"text-primary text-lg",children:"加载中..."})]})}function o1(){return Y.jsx("div",{className:"h-[100vh] bg-black flex justify-center items-center",children:Y.jsx("img",{src:"/project-preview/poster-bg.png",className:"w-full block",alt:""})})}const i1=O.lazy(()=>xr(()=>import("./index-CNMjldKi.js"),__vite__mapDeps([0,1]))),a1=O.lazy(()=>xr(()=>import("./index-D5pDrg9L.js"),[])),l1=O.lazy(()=>xr(()=>import("./detail-BB-pcZ-N.js"),[])),s1=O.lazy(()=>xr(()=>import("./result-D2QziGxt.js"),__vite__mapDeps([2,3,1]))),u1=O.lazy(()=>xr(()=>import("./not-find-6Rmvydv3.js"),[])),c1=O.lazy(()=>xr(()=>import("./home-BrofFb50.js"),__vite__mapDeps([4,5,1,3,6]))),d1=O.lazy(()=>xr(()=>import("./service-CXc09Cd7.js"),__vite__mapDeps([7,5,1]))),f1=[{path:"/",element:Y.jsx(xn,{children:Y.jsx(i1,{})}),children:[{path:"/",element:Y.jsx(xn,{children:Y.jsx(c1,{})})},{path:"/service",element:Y.jsx(xn,{children:Y.jsx(d1,{})})}]},{path:"/order",element:Y.jsx(Ly,{}),children:[{index:!0,element:Y.jsx(My,{to:"/order/list",replace:!0})},{path:"list",element:Y.jsx(xn,{children:Y.jsx(a1,{})})},{path:"detail",element:Y.jsx(xn,{children:Y.jsx(l1,{})})},{path:"result",element:Y.jsx(xn,{children:Y.jsx(s1,{})})}]},{path:"/poster",element:Y.jsx(xn,{children:Y.jsx(o1,{})})},{path:"*",element:Y.jsx(xn,{children:Y.jsx(u1,{})})}];function xn({children:e}){return Y.jsx(O.Suspense,{fallback:Y.jsx(r1,{className:"min-h-[var(--content-height)]"}),children:e})}const h1=qy(f1,{basename:"/project-preview"});function p1(){return Y.jsx(Gy,{router:h1})}var vl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},gl=typeof window>"u"||"Deno"in globalThis;function zt(){}function m1(e,t){return typeof e=="function"?e(t):e}function v1(e){return typeof e=="number"&&e>=0&&e!==1/0}function g1(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Vd(e,t){return typeof e=="function"?e(t):e}function y1(e,t){return typeof e=="function"?e(t):e}function Qd(e,t){const{type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:a,stale:l}=e;if(a){if(r){if(t.queryHash!==Xu(a,t.options))return!1}else if(!mi(t.queryKey,a))return!1}if(n!=="all"){const s=t.isActive();if(n==="active"&&!s||n==="inactive"&&s)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||o&&o!==t.state.fetchStatus||i&&!i(t))}function Wd(e,t){const{exact:n,status:r,predicate:o,mutationKey:i}=e;if(i){if(!t.options.mutationKey)return!1;if(n){if(pi(t.options.mutationKey)!==pi(i))return!1}else if(!mi(t.options.mutationKey,i))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function Xu(e,t){return((t==null?void 0:t.queryKeyHashFn)||pi)(e)}function pi(e){return JSON.stringify(e,(t,n)=>Xs(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function mi(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!mi(e[n],t[n])):!1}function qp(e,t){if(e===t)return e;const n=Kd(e)&&Kd(t);if(n||Xs(e)&&Xs(t)){const r=n?e:Object.keys(e),o=r.length,i=n?t:Object.keys(t),a=i.length,l=n?[]:{};let s=0;for(let u=0;u<a;u++){const d=n?u:i[u];(!n&&r.includes(d)||n)&&e[d]===void 0&&t[d]===void 0?(l[d]=void 0,s++):(l[d]=qp(e[d],t[d]),l[d]===e[d]&&e[d]!==void 0&&s++)}return o===a&&s===o?e:l}return t}function H1(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Kd(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Xs(e){if(!Xd(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Xd(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Xd(e){return Object.prototype.toString.call(e)==="[object Object]"}function b1(e){return new Promise(t=>{setTimeout(t,e)})}function x1(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?qp(e,t):t}function w1(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function k1(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Hp=Symbol();function Bp(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Hp?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var ar,Cn,Qr,Jd,S1=(Jd=class extends vl{constructor(){super();re(this,ar);re(this,Cn);re(this,Qr);X(this,Qr,t=>{if(!gl&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){E(this,Cn)||this.setEventListener(E(this,Qr))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,Cn))==null||t.call(this),X(this,Cn,void 0))}setEventListener(t){var n;X(this,Qr,t),(n=E(this,Cn))==null||n.call(this),X(this,Cn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){E(this,ar)!==t&&(X(this,ar,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof E(this,ar)=="boolean"?E(this,ar):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},ar=new WeakMap,Cn=new WeakMap,Qr=new WeakMap,Jd),Vp=new S1,Wr,_n,Kr,Zd,P1=(Zd=class extends vl{constructor(){super();re(this,Wr,!0);re(this,_n);re(this,Kr);X(this,Kr,t=>{if(!gl&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){E(this,_n)||this.setEventListener(E(this,Kr))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,_n))==null||t.call(this),X(this,_n,void 0))}setEventListener(t){var n;X(this,Kr,t),(n=E(this,_n))==null||n.call(this),X(this,_n,t(this.setOnline.bind(this)))}setOnline(t){E(this,Wr)!==t&&(X(this,Wr,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return E(this,Wr)}},Wr=new WeakMap,_n=new WeakMap,Kr=new WeakMap,Zd),Ka=new P1;function E1(e){return Math.min(1e3*2**e,3e4)}function Qp(e){return(e??"online")==="online"?Ka.isOnline():!0}var Wp=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Jl(e){return e instanceof Wp}function Kp(e){let t=!1,n=0,r=!1,o,i,a;const l=new Promise((p,f)=>{i=p,a=f}),s=p=>{var f;r||(b(new Wp(p)),(f=e.abort)==null||f.call(e))},u=()=>{t=!0},d=()=>{t=!1},c=()=>Vp.isFocused()&&(e.networkMode==="always"||Ka.isOnline())&&e.canRun(),h=()=>Qp(e.networkMode)&&e.canRun(),x=p=>{var f;r||(r=!0,(f=e.onSuccess)==null||f.call(e,p),o==null||o(),i(p))},b=p=>{var f;r||(r=!0,(f=e.onError)==null||f.call(e,p),o==null||o(),a(p))},m=()=>new Promise(p=>{var f;o=v=>{(r||c())&&p(v)},(f=e.onPause)==null||f.call(e)}).then(()=>{var p;o=void 0,r||(p=e.onContinue)==null||p.call(e)}),P=()=>{if(r)return;let p;const f=n===0?e.initialPromise:void 0;try{p=f??e.fn()}catch(v){p=Promise.reject(v)}Promise.resolve(p).then(x).catch(v=>{var g;if(r)return;const k=e.retry??(gl?0:3),C=e.retryDelay??E1,R=typeof C=="function"?C(n,v):C,D=k===!0||typeof k=="number"&&n<k||typeof k=="function"&&k(n,v);if(t||!D){b(v);return}n++,(g=e.onFail)==null||g.call(e,n,v),b1(R).then(()=>c()?void 0:m()).then(()=>{t?b(v):P()})})};return{promise:l,cancel:s,continue:()=>(o==null||o(),l),cancelRetry:u,continueRetry:d,canStart:h,start:()=>(h()?P():m().then(P),l)}}function O1(){let e=[],t=0,n=l=>{l()},r=l=>{l()},o=l=>setTimeout(l,0);const i=l=>{t?e.push(l):o(()=>{n(l)})},a=()=>{const l=e;e=[],l.length&&o(()=>{r(()=>{l.forEach(s=>{n(s)})})})};return{batch:l=>{let s;t++;try{s=l()}finally{t--,t||a()}return s},batchCalls:l=>(...s)=>{i(()=>{l(...s)})},schedule:i,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{o=l}}}var Ye=O1(),lr,ef,Xp=(ef=class{constructor(){re(this,lr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),v1(this.gcTime)&&X(this,lr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(gl?1/0:5*60*1e3))}clearGcTimeout(){E(this,lr)&&(clearTimeout(E(this,lr)),X(this,lr,void 0))}},lr=new WeakMap,ef),Xr,Yr,yt,He,vi,sr,Rt,en,tf,C1=(tf=class extends Xp{constructor(t){super();re(this,Rt);re(this,Xr);re(this,Yr);re(this,yt);re(this,He);re(this,vi);re(this,sr);X(this,sr,!1),X(this,vi,t.defaultOptions),this.setOptions(t.options),this.observers=[],X(this,yt,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,X(this,Xr,z1(this.options)),this.state=t.state??E(this,Xr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=E(this,He))==null?void 0:t.promise}setOptions(t){this.options={...E(this,vi),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&E(this,yt).remove(this)}setData(t,n){const r=x1(this.state.data,t,this.options);return Ue(this,Rt,en).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Ue(this,Rt,en).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,o;const n=(r=E(this,He))==null?void 0:r.promise;return(o=E(this,He))==null||o.cancel(t),n?n.then(zt).catch(zt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(E(this,Xr))}isActive(){return this.observers.some(t=>y1(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!g1(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=E(this,He))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=E(this,He))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),E(this,yt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(E(this,He)&&(E(this,sr)?E(this,He).cancel({revert:!0}):E(this,He).cancelRetry()),this.scheduleGc()),E(this,yt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ue(this,Rt,en).call(this,{type:"invalidate"})}fetch(t,n){var s,u,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(E(this,He))return E(this,He).continueRetry(),E(this,He).promise}if(t&&this.setOptions(t),!this.options.queryFn){const c=this.observers.find(h=>h.options.queryFn);c&&this.setOptions(c.options)}const r=new AbortController,o=c=>{Object.defineProperty(c,"signal",{enumerable:!0,get:()=>(X(this,sr,!0),r.signal)})},i=()=>{const c=Bp(this.options,n),h={queryKey:this.queryKey,meta:this.meta};return o(h),X(this,sr,!1),this.options.persister?this.options.persister(c,h,this):c(h)},a={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:i};o(a),(s=this.options.behavior)==null||s.onFetch(a,this),X(this,Yr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=a.fetchOptions)==null?void 0:u.meta))&&Ue(this,Rt,en).call(this,{type:"fetch",meta:(d=a.fetchOptions)==null?void 0:d.meta});const l=c=>{var h,x,b,m;Jl(c)&&c.silent||Ue(this,Rt,en).call(this,{type:"error",error:c}),Jl(c)||((x=(h=E(this,yt).config).onError)==null||x.call(h,c,this),(m=(b=E(this,yt).config).onSettled)==null||m.call(b,this.state.data,c,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return X(this,He,Kp({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:c=>{var h,x,b,m;if(c===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(c)}catch(P){l(P);return}(x=(h=E(this,yt).config).onSuccess)==null||x.call(h,c,this),(m=(b=E(this,yt).config).onSettled)==null||m.call(b,c,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:l,onFail:(c,h)=>{Ue(this,Rt,en).call(this,{type:"failed",failureCount:c,error:h})},onPause:()=>{Ue(this,Rt,en).call(this,{type:"pause"})},onContinue:()=>{Ue(this,Rt,en).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),E(this,He).start()}},Xr=new WeakMap,Yr=new WeakMap,yt=new WeakMap,He=new WeakMap,vi=new WeakMap,sr=new WeakMap,Rt=new WeakSet,en=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,..._1(r.data,this.options),fetchMeta:t.meta??null};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return Jl(o)&&o.revert&&E(this,Yr)?{...E(this,Yr),fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Ye.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),E(this,yt).notify({query:this,type:"updated",action:t})})},tf);function _1(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Qp(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function z1(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var $t,nf,Yp=(nf=class extends vl{constructor(t={}){super();re(this,$t);this.config=t,X(this,$t,new Map)}build(t,n,r){const o=n.queryKey,i=n.queryHash??Xu(o,n);let a=this.get(i);return a||(a=new C1({cache:this,queryKey:o,queryHash:i,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(a)),a}add(t){E(this,$t).has(t.queryHash)||(E(this,$t).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=E(this,$t).get(t.queryHash);n&&(t.destroy(),n===t&&E(this,$t).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Ye.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return E(this,$t).get(t)}getAll(){return[...E(this,$t).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Qd(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Qd(t,r)):n}notify(t){Ye.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Ye.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Ye.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},$t=new WeakMap,nf),qt,We,ur,Ht,kn,rf,R1=(rf=class extends Xp{constructor(t){super();re(this,Ht);re(this,qt);re(this,We);re(this,ur);this.mutationId=t.mutationId,X(this,We,t.mutationCache),X(this,qt,[]),this.state=t.state||D1(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){E(this,qt).includes(t)||(E(this,qt).push(t),this.clearGcTimeout(),E(this,We).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){X(this,qt,E(this,qt).filter(n=>n!==t)),this.scheduleGc(),E(this,We).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){E(this,qt).length||(this.state.status==="pending"?this.scheduleGc():E(this,We).remove(this))}continue(){var t;return((t=E(this,ur))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,i,a,l,s,u,d,c,h,x,b,m,P,p,f,v,k,C,R,D;X(this,ur,Kp({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(g,M)=>{Ue(this,Ht,kn).call(this,{type:"failed",failureCount:g,error:M})},onPause:()=>{Ue(this,Ht,kn).call(this,{type:"pause"})},onContinue:()=>{Ue(this,Ht,kn).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>E(this,We).canRun(this)}));const n=this.state.status==="pending",r=!E(this,ur).canStart();try{if(!n){Ue(this,Ht,kn).call(this,{type:"pending",variables:t,isPaused:r}),await((i=(o=E(this,We).config).onMutate)==null?void 0:i.call(o,t,this));const M=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,t));M!==this.state.context&&Ue(this,Ht,kn).call(this,{type:"pending",context:M,variables:t,isPaused:r})}const g=await E(this,ur).start();return await((u=(s=E(this,We).config).onSuccess)==null?void 0:u.call(s,g,t,this.state.context,this)),await((c=(d=this.options).onSuccess)==null?void 0:c.call(d,g,t,this.state.context)),await((x=(h=E(this,We).config).onSettled)==null?void 0:x.call(h,g,null,this.state.variables,this.state.context,this)),await((m=(b=this.options).onSettled)==null?void 0:m.call(b,g,null,t,this.state.context)),Ue(this,Ht,kn).call(this,{type:"success",data:g}),g}catch(g){try{throw await((p=(P=E(this,We).config).onError)==null?void 0:p.call(P,g,t,this.state.context,this)),await((v=(f=this.options).onError)==null?void 0:v.call(f,g,t,this.state.context)),await((C=(k=E(this,We).config).onSettled)==null?void 0:C.call(k,void 0,g,this.state.variables,this.state.context,this)),await((D=(R=this.options).onSettled)==null?void 0:D.call(R,void 0,g,t,this.state.context)),g}finally{Ue(this,Ht,kn).call(this,{type:"error",error:g})}}finally{E(this,We).runNext(this)}}},qt=new WeakMap,We=new WeakMap,ur=new WeakMap,Ht=new WeakSet,kn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Ye.batch(()=>{E(this,qt).forEach(r=>{r.onMutationUpdate(t)}),E(this,We).notify({mutation:this,type:"updated",action:t})})},rf);function D1(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var ut,gi,of,Gp=(of=class extends vl{constructor(t={}){super();re(this,ut);re(this,gi);this.config=t,X(this,ut,new Map),X(this,gi,Date.now())}build(t,n,r){const o=new R1({mutationCache:this,mutationId:++Li(this,gi)._,options:t.defaultMutationOptions(n),state:r});return this.add(o),o}add(t){const n=aa(t),r=E(this,ut).get(n)??[];r.push(t),E(this,ut).set(n,r),this.notify({type:"added",mutation:t})}remove(t){var r;const n=aa(t);if(E(this,ut).has(n)){const o=(r=E(this,ut).get(n))==null?void 0:r.filter(i=>i!==t);o&&(o.length===0?E(this,ut).delete(n):E(this,ut).set(n,o))}this.notify({type:"removed",mutation:t})}canRun(t){var r;const n=(r=E(this,ut).get(aa(t)))==null?void 0:r.find(o=>o.state.status==="pending");return!n||n===t}runNext(t){var r;const n=(r=E(this,ut).get(aa(t)))==null?void 0:r.find(o=>o!==t&&o.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){Ye.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...E(this,ut).values()].flat()}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Wd(n,r))}findAll(t={}){return this.getAll().filter(n=>Wd(t,n))}notify(t){Ye.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Ye.batch(()=>Promise.all(t.map(n=>n.continue().catch(zt))))}},ut=new WeakMap,gi=new WeakMap,of);function aa(e){var t;return((t=e.options.scope)==null?void 0:t.id)??String(e.mutationId)}function Yd(e){return{onFetch:(t,n)=>{var d,c,h,x,b;const r=t.options,o=(h=(c=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:c.fetchMore)==null?void 0:h.direction,i=((x=t.state.data)==null?void 0:x.pages)||[],a=((b=t.state.data)==null?void 0:b.pageParams)||[];let l={pages:[],pageParams:[]},s=0;const u=async()=>{let m=!1;const P=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(t.signal.aborted?m=!0:t.signal.addEventListener("abort",()=>{m=!0}),t.signal)})},p=Bp(t.options,t.fetchOptions),f=async(v,k,C)=>{if(m)return Promise.reject();if(k==null&&v.pages.length)return Promise.resolve(v);const R={queryKey:t.queryKey,pageParam:k,direction:C?"backward":"forward",meta:t.options.meta};P(R);const D=await p(R),{maxPages:g}=t.options,M=C?k1:w1;return{pages:M(v.pages,D,g),pageParams:M(v.pageParams,k,g)}};if(o&&i.length){const v=o==="backward",k=v?T1:Gd,C={pages:i,pageParams:a},R=k(r,C);l=await f(C,R,v)}else{const v=e??i.length;do{const k=s===0?a[0]??r.initialPageParam:Gd(r,l);if(s>0&&k==null)break;l=await f(l,k),s++}while(s<v)}return l};t.options.persister?t.fetchFn=()=>{var m,P;return(P=(m=t.options).persister)==null?void 0:P.call(m,u,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function Gd(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function T1(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var Se,zn,Rn,Gr,Jr,Dn,Zr,eo,af,M1=(af=class{constructor(e={}){re(this,Se);re(this,zn);re(this,Rn);re(this,Gr);re(this,Jr);re(this,Dn);re(this,Zr);re(this,eo);X(this,Se,e.queryCache||new Yp),X(this,zn,e.mutationCache||new Gp),X(this,Rn,e.defaultOptions||{}),X(this,Gr,new Map),X(this,Jr,new Map),X(this,Dn,0)}mount(){Li(this,Dn)._++,E(this,Dn)===1&&(X(this,Zr,Vp.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,Se).onFocus())})),X(this,eo,Ka.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,Se).onOnline())})))}unmount(){var e,t;Li(this,Dn)._--,E(this,Dn)===0&&((e=E(this,Zr))==null||e.call(this),X(this,Zr,void 0),(t=E(this,eo))==null||t.call(this),X(this,eo,void 0))}isFetching(e){return E(this,Se).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return E(this,zn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=E(this,Se).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{const n=this.defaultQueryOptions(e),r=E(this,Se).build(this,n);return e.revalidateIfStale&&r.isStaleByTime(Vd(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return E(this,Se).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),o=E(this,Se).get(r.queryHash),i=o==null?void 0:o.state.data,a=m1(t,i);if(a!==void 0)return E(this,Se).build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return Ye.batch(()=>E(this,Se).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=E(this,Se).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=E(this,Se);Ye.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=E(this,Se),r={type:"active",...e};return Ye.batch(()=>(n.findAll(e).forEach(o=>{o.reset()}),this.refetchQueries(r,t)))}cancelQueries(e={},t={}){const n={revert:!0,...t},r=Ye.batch(()=>E(this,Se).findAll(e).map(o=>o.cancel(n)));return Promise.all(r).then(zt).catch(zt)}invalidateQueries(e={},t={}){return Ye.batch(()=>{if(E(this,Se).findAll(e).forEach(r=>{r.invalidate()}),e.refetchType==="none")return Promise.resolve();const n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e={},t){const n={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},r=Ye.batch(()=>E(this,Se).findAll(e).filter(o=>!o.isDisabled()).map(o=>{let i=o.fetch(void 0,n);return n.throwOnError||(i=i.catch(zt)),o.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(zt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=E(this,Se).build(this,t);return n.isStaleByTime(Vd(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(zt).catch(zt)}fetchInfiniteQuery(e){return e.behavior=Yd(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(zt).catch(zt)}ensureInfiniteQueryData(e){return e.behavior=Yd(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Ka.isOnline()?E(this,zn).resumePausedMutations():Promise.resolve()}getQueryCache(){return E(this,Se)}getMutationCache(){return E(this,zn)}getDefaultOptions(){return E(this,Rn)}setDefaultOptions(e){X(this,Rn,e)}setQueryDefaults(e,t){E(this,Gr).set(pi(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...E(this,Gr).values()];let n={};return t.forEach(r=>{mi(e,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(e,t){E(this,Jr).set(pi(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...E(this,Jr).values()];let n={};return t.forEach(r=>{mi(e,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...E(this,Rn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Xu(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===Hp&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...E(this,Rn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){E(this,Se).clear(),E(this,zn).clear()}},Se=new WeakMap,zn=new WeakMap,Rn=new WeakMap,Gr=new WeakMap,Jr=new WeakMap,Dn=new WeakMap,Zr=new WeakMap,eo=new WeakMap,af),Jp=O.createContext(void 0),B1=e=>{const t=O.useContext(Jp);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},L1=({client:e,children:t})=>(O.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),Y.jsx(Jp.Provider,{value:e,children:t}));const N1=new Yp({onError(e){console.log(e)}}),F1=new Gp({onError(e){console.log(e)}}),j1=new M1({queryCache:N1,mutationCache:F1,defaultOptions:{queries:{refetchOnMount:!1,refetchOnWindowFocus:!1,retry:0}}});function A1({children:e}){return Y.jsx(L1,{client:j1,children:e})}function I1(){return Y.jsx(A1,{children:Y.jsx(mg,{children:Y.jsx(p1,{})})})}Zl.createRoot(document.getElementById("root")).render(Y.jsx(J.StrictMode,{children:Y.jsx(I1,{})}));export{q1 as L,Ly as O,J as R,vl as S,Ap as a,Vd as b,kp as c,v1 as d,_1 as e,Vp as f,x1 as g,Ye as h,gl as i,Y as j,O as k,B1 as l,fg as m,zt as n,$1 as o,Bu as p,sf as q,y1 as r,H1 as s,g1 as t,Si as u};
