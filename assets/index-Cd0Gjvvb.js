const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-B4jXNQhj.js","assets/tabbar-service-D9sZvk0o.js","assets/index-Ch2YwJ8x.js","assets/useBaseQuery-DmXp8Akp.js","assets/btn-Cbg26ais.js","assets/skeleton-CoVAVxVK.js","assets/skeleton-CqACEEbq.css","assets/sleep-BJ_UJ65L.js","assets/detail-Cngm9nGo.js","assets/service-CltQLR5d.js","assets/wifi-DjT3Gd8m.js","assets/result-GKkbXsx0.js","assets/home-D6IKuFhP.js","assets/customer-service-BhKcLHyH.js","assets/service-RdBXVULk.js"])))=>i.map(i=>d[i]);
var hc=e=>{throw TypeError(e)};var kl=(e,t,n)=>t.has(e)||hc("Cannot "+n);var O=(e,t,n)=>(kl(e,t,"read from private field"),n?n.call(e):t.get(e)),re=(e,t,n)=>t.has(e)?hc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Y=(e,t,n,r)=>(kl(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Ue=(e,t,n)=>(kl(e,t,"access private method"),n);var Li=(e,t,n,r)=>({set _(o){Y(e,t,o,n)},get _(){return O(e,t,r)}});function cf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function df(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function B1(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var ff={exports:{}},Ya={},hf={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=Symbol.for("react.element"),wm=Symbol.for("react.portal"),xm=Symbol.for("react.fragment"),km=Symbol.for("react.strict_mode"),Sm=Symbol.for("react.profiler"),Pm=Symbol.for("react.provider"),Em=Symbol.for("react.context"),Om=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),_m=Symbol.for("react.memo"),Rm=Symbol.for("react.lazy"),pc=Symbol.iterator;function zm(e){return e===null||typeof e!="object"?null:(e=pc&&e[pc]||e["@@iterator"],typeof e=="function"?e:null)}var pf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mf=Object.assign,vf={};function po(e,t,n){this.props=e,this.context=t,this.refs=vf,this.updater=n||pf}po.prototype.isReactComponent={};po.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};po.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gf(){}gf.prototype=po.prototype;function Zs(e,t,n){this.props=e,this.context=t,this.refs=vf,this.updater=n||pf}var eu=Zs.prototype=new gf;eu.constructor=Zs;mf(eu,po.prototype);eu.isPureReactComponent=!0;var mc=Array.isArray,yf=Object.prototype.hasOwnProperty,tu={current:null},bf={key:!0,ref:!0,__self:!0,__source:!0};function wf(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)yf.call(t,r)&&!bf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:bi,type:e,key:i,ref:a,props:o,_owner:tu.current}}function Tm(e,t){return{$$typeof:bi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nu(e){return typeof e=="object"&&e!==null&&e.$$typeof===bi}function Dm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vc=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dm(""+e.key):t.toString(36)}function sa(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case bi:case wm:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Sl(a,0):r,mc(o)?(n="",e!=null&&(n=e.replace(vc,"$&/")+"/"),sa(o,t,n,"",function(u){return u})):o!=null&&(nu(o)&&(o=Tm(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(vc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",mc(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Sl(i,l);a+=sa(i,t,n,s,o)}else if(s=zm(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Sl(i,l++),a+=sa(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ni(e,t,n){if(e==null)return e;var r=[],o=0;return sa(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Mm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},ua={transition:null},Lm={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:ua,ReactCurrentOwner:tu};function xf(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Ni,forEach:function(e,t,n){Ni(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ni(e,function(){t++}),t},toArray:function(e){return Ni(e,function(t){return t})||[]},only:function(e){if(!nu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=po;Z.Fragment=xm;Z.Profiler=Sm;Z.PureComponent=Zs;Z.StrictMode=km;Z.Suspense=Cm;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lm;Z.act=xf;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mf({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=tu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)yf.call(t,s)&&!bf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:bi,type:e.type,key:o,ref:i,props:r,_owner:a}};Z.createContext=function(e){return e={$$typeof:Em,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pm,_context:e},e.Consumer=e};Z.createElement=wf;Z.createFactory=function(e){var t=wf.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:Om,render:e}};Z.isValidElement=nu;Z.lazy=function(e){return{$$typeof:Rm,_payload:{_status:-1,_result:e},_init:Mm}};Z.memo=function(e,t){return{$$typeof:_m,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=ua.transition;ua.transition={};try{e()}finally{ua.transition=t}};Z.unstable_act=xf;Z.useCallback=function(e,t){return Je.current.useCallback(e,t)};Z.useContext=function(e){return Je.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};Z.useEffect=function(e,t){return Je.current.useEffect(e,t)};Z.useId=function(){return Je.current.useId()};Z.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return Je.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};Z.useRef=function(e){return Je.current.useRef(e)};Z.useState=function(e){return Je.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return Je.current.useTransition()};Z.version="18.3.1";hf.exports=Z;var E=hf.exports;const V=df(E),Nm=cf({__proto__:null,default:V},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm=E,jm=Symbol.for("react.element"),Am=Symbol.for("react.fragment"),Im=Object.prototype.hasOwnProperty,Um=Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$m={key:!0,ref:!0,__self:!0,__source:!0};function kf(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Im.call(t,r)&&!$m.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:jm,type:e,key:i,ref:a,props:o,_owner:Um.current}}Ya.Fragment=Am;Ya.jsx=kf;Ya.jsxs=kf;ff.exports=Ya;var G=ff.exports;(function(t,n){const r=n.documentElement,o=t.devicePixelRatio||1;function i(){n.body?n.body.style.fontSize=`${12*o}px`:n.addEventListener("DOMContentLoaded",i)}i();function a(){const l=r.clientWidth/10;r.style.fontSize=`${l}px`}if(a(),t.addEventListener("resize",a),t.addEventListener("pageshow",l=>{l.persisted&&a()}),o>=2){const l=n.createElement("body"),s=n.createElement("div");s.style.border=".5px solid transparent",l.appendChild(s),r.appendChild(l),s.offsetHeight===1&&r.classList.add("hairlines"),r.removeChild(l)}})(window,document);var es={},Sf={exports:{}},mt={},Pf={exports:{}},Ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,A){var W=L.length;L.push(A);e:for(;0<W;){var se=W-1>>>1,ce=L[se];if(0<o(ce,A))L[se]=A,L[W]=ce,W=se;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var A=L[0],W=L.pop();if(W!==A){L[0]=W;e:for(var se=0,ce=L.length,et=ce>>>1;se<et;){var tt=2*(se+1)-1,Xt=L[tt],Fe=tt+1,gt=L[Fe];if(0>o(Xt,W))Fe<ce&&0>o(gt,Xt)?(L[se]=gt,L[Fe]=W,se=Fe):(L[se]=Xt,L[tt]=W,se=tt);else if(Fe<ce&&0>o(gt,W))L[se]=gt,L[Fe]=W,se=Fe;else break e}}return A}function o(L,A){var W=L.sortIndex-A.sortIndex;return W!==0?W:L.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],d=1,c=null,h=3,w=!1,y=!1,m=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=L)r(u),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(u)}}function k(L){if(m=!1,v(L),!y)if(n(s)!==null)y=!0,Et(C);else{var A=n(u);A!==null&&pn(k,A.startTime-L)}}function C(L,A){y=!1,m&&(m=!1,p(g),g=-1),w=!0;var W=h;try{for(v(A),c=n(s);c!==null&&(!(c.expirationTime>A)||L&&!K());){var se=c.callback;if(typeof se=="function"){c.callback=null,h=c.priorityLevel;var ce=se(c.expirationTime<=A);A=e.unstable_now(),typeof ce=="function"?c.callback=ce:c===n(s)&&r(s),v(A)}else r(s);c=n(s)}if(c!==null)var et=!0;else{var tt=n(u);tt!==null&&pn(k,tt.startTime-A),et=!1}return et}finally{c=null,h=W,w=!1}}var z=!1,T=null,g=-1,M=5,j=-1;function K(){return!(e.unstable_now()-j<M)}function le(){if(T!==null){var L=e.unstable_now();j=L;var A=!0;try{A=T(!0,L)}finally{A?Oe():(z=!1,T=null)}}else z=!1}var Oe;if(typeof f=="function")Oe=function(){f(le)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,It=we.port2;we.port1.onmessage=le,Oe=function(){It.postMessage(null)}}else Oe=function(){P(le,0)};function Et(L){T=L,z||(z=!0,Oe())}function pn(L,A){g=P(function(){L(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,Et(C))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var W=h;h=A;try{return L()}finally{h=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,A){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var W=h;h=L;try{return A()}finally{h=W}},e.unstable_scheduleCallback=function(L,A,W){var se=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?se+W:se):W=se,L){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=W+ce,L={id:d++,callback:A,priorityLevel:L,startTime:W,expirationTime:ce,sortIndex:-1},W>se?(L.sortIndex=W,t(u,L),n(s)===null&&L===n(u)&&(m?(p(g),g=-1):m=!0,pn(k,W-se))):(L.sortIndex=ce,t(s,L),y||w||(y=!0,Et(C))),L},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(L){var A=h;return function(){var W=h;h=A;try{return L.apply(this,arguments)}finally{h=W}}}})(Ef);Pf.exports=Ef;var qm=Pf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm=E,pt=qm;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Of=new Set,Xo={};function yr(e,t){io(e,t),io(e+"Capture",t)}function io(e,t){for(Xo[e]=t,e=0;e<t.length;e++)Of.add(t[e])}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ts=Object.prototype.hasOwnProperty,Bm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gc={},yc={};function Vm(e){return ts.call(yc,e)?!0:ts.call(gc,e)?!1:Bm.test(e)?yc[e]=!0:(gc[e]=!0,!1)}function Qm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wm(e,t,n,r){if(t===null||typeof t>"u"||Qm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new Ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var ru=/[\-:]([a-z])/g;function ou(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ru,ou);Ie[t]=new Ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ru,ou);Ie[t]=new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ru,ou);Ie[t]=new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function iu(e,t,n,r){var o=Ie.hasOwnProperty(t)?Ie[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wm(t,n,o,r)&&(n=null),r||o===null?Vm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hn=Hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fi=Symbol.for("react.element"),Tr=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),au=Symbol.for("react.strict_mode"),ns=Symbol.for("react.profiler"),Cf=Symbol.for("react.provider"),_f=Symbol.for("react.context"),lu=Symbol.for("react.forward_ref"),rs=Symbol.for("react.suspense"),os=Symbol.for("react.suspense_list"),su=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),Rf=Symbol.for("react.offscreen"),bc=Symbol.iterator;function ko(e){return e===null||typeof e!="object"?null:(e=bc&&e[bc]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,Pl;function Lo(e){if(Pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pl=t&&t[1]||""}return`
`+Pl+e}var El=!1;function Ol(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Lo(e):""}function Km(e){switch(e.tag){case 5:return Lo(e.type);case 16:return Lo("Lazy");case 13:return Lo("Suspense");case 19:return Lo("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function is(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dr:return"Fragment";case Tr:return"Portal";case ns:return"Profiler";case au:return"StrictMode";case rs:return"Suspense";case os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _f:return(e.displayName||"Context")+".Consumer";case Cf:return(e._context.displayName||"Context")+".Provider";case lu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case su:return t=e.displayName||null,t!==null?t:is(e.type)||"Memo";case Sn:t=e._payload,e=e._init;try{return is(e(t))}catch{}}return null}function Xm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return is(t);case 8:return t===au?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ym(e){var t=zf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ji(e){e._valueTracker||(e._valueTracker=Ym(e))}function Tf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function as(e,t){var n=t.checked;return be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Df(e,t){t=t.checked,t!=null&&iu(e,"checked",t,!1)}function ls(e,t){Df(e,t);var n=Hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ss(e,t.type,n):t.hasOwnProperty("defaultValue")&&ss(e,t.type,Hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ss(e,t,n){(t!=="number"||xa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var No=Array.isArray;function Br(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Hn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function us(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(No(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Hn(n)}}function Mf(e,t){var n=Hn(t.value),r=Hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Lf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ai,Nf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ai=Ai||document.createElement("div"),Ai.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gm=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(e){Gm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Uo[t]=Uo[e]})});function Ff(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Uo.hasOwnProperty(e)&&Uo[e]?(""+t).trim():t+"px"}function jf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ff(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Jm=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ds(e,t){if(t){if(Jm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function fs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hs=null;function uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ps=null,Vr=null,Qr=null;function Pc(e){if(e=ki(e)){if(typeof ps!="function")throw Error(R(280));var t=e.stateNode;t&&(t=tl(t),ps(e.stateNode,e.type,t))}}function Af(e){Vr?Qr?Qr.push(e):Qr=[e]:Vr=e}function If(){if(Vr){var e=Vr,t=Qr;if(Qr=Vr=null,Pc(e),t)for(e=0;e<t.length;e++)Pc(t[e])}}function Uf(e,t){return e(t)}function $f(){}var Cl=!1;function qf(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return Uf(e,t,n)}finally{Cl=!1,(Vr!==null||Qr!==null)&&($f(),If())}}function Go(e,t){var n=e.stateNode;if(n===null)return null;var r=tl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var ms=!1;if(un)try{var So={};Object.defineProperty(So,"passive",{get:function(){ms=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{ms=!1}function Zm(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var $o=!1,ka=null,Sa=!1,vs=null,e0={onError:function(e){$o=!0,ka=e}};function t0(e,t,n,r,o,i,a,l,s){$o=!1,ka=null,Zm.apply(e0,arguments)}function n0(e,t,n,r,o,i,a,l,s){if(t0.apply(this,arguments),$o){if($o){var u=ka;$o=!1,ka=null}else throw Error(R(198));Sa||(Sa=!0,vs=u)}}function br(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ec(e){if(br(e)!==e)throw Error(R(188))}function r0(e){var t=e.alternate;if(!t){if(t=br(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ec(o),e;if(i===r)return Ec(o),t;i=i.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Bf(e){return e=r0(e),e!==null?Vf(e):null}function Vf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vf(e);if(t!==null)return t;e=e.sibling}return null}var Qf=pt.unstable_scheduleCallback,Oc=pt.unstable_cancelCallback,o0=pt.unstable_shouldYield,i0=pt.unstable_requestPaint,Ee=pt.unstable_now,a0=pt.unstable_getCurrentPriorityLevel,cu=pt.unstable_ImmediatePriority,Wf=pt.unstable_UserBlockingPriority,Pa=pt.unstable_NormalPriority,l0=pt.unstable_LowPriority,Kf=pt.unstable_IdlePriority,Ga=null,Qt=null;function s0(e){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(Ga,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:d0,u0=Math.log,c0=Math.LN2;function d0(e){return e>>>=0,e===0?32:31-(u0(e)/c0|0)|0}var Ii=64,Ui=4194304;function Fo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ea(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Fo(l):(i&=a,i!==0&&(r=Fo(i)))}else a=n&~o,a!==0?r=Fo(a):i!==0&&(r=Fo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ft(t),o=1<<n,r|=e[n],t&=~o;return r}function f0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ft(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=f0(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function gs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xf(){var e=Ii;return Ii<<=1,!(Ii&4194240)&&(Ii=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function p0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ft(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function du(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ft(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ie=0;function Yf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gf,fu,Jf,Zf,eh,ys=!1,$i=[],Nn=null,Fn=null,jn=null,Jo=new Map,Zo=new Map,En=[],m0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cc(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(t.pointerId)}}function Po(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ki(t),t!==null&&fu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function v0(e,t,n,r,o){switch(t){case"focusin":return Nn=Po(Nn,e,t,n,r,o),!0;case"dragenter":return Fn=Po(Fn,e,t,n,r,o),!0;case"mouseover":return jn=Po(jn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Jo.set(i,Po(Jo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Zo.set(i,Po(Zo.get(i)||null,e,t,n,r,o)),!0}return!1}function th(e){var t=nr(e.target);if(t!==null){var n=br(t);if(n!==null){if(t=n.tag,t===13){if(t=Hf(n),t!==null){e.blockedOn=t,eh(e.priority,function(){Jf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ca(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hs=r,n.target.dispatchEvent(r),hs=null}else return t=ki(n),t!==null&&fu(t),e.blockedOn=n,!1;t.shift()}return!0}function _c(e,t,n){ca(e)&&n.delete(t)}function g0(){ys=!1,Nn!==null&&ca(Nn)&&(Nn=null),Fn!==null&&ca(Fn)&&(Fn=null),jn!==null&&ca(jn)&&(jn=null),Jo.forEach(_c),Zo.forEach(_c)}function Eo(e,t){e.blockedOn===t&&(e.blockedOn=null,ys||(ys=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,g0)))}function ei(e){function t(o){return Eo(o,e)}if(0<$i.length){Eo($i[0],e);for(var n=1;n<$i.length;n++){var r=$i[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nn!==null&&Eo(Nn,e),Fn!==null&&Eo(Fn,e),jn!==null&&Eo(jn,e),Jo.forEach(t),Zo.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)th(n),n.blockedOn===null&&En.shift()}var Wr=hn.ReactCurrentBatchConfig,Oa=!0;function y0(e,t,n,r){var o=ie,i=Wr.transition;Wr.transition=null;try{ie=1,hu(e,t,n,r)}finally{ie=o,Wr.transition=i}}function b0(e,t,n,r){var o=ie,i=Wr.transition;Wr.transition=null;try{ie=4,hu(e,t,n,r)}finally{ie=o,Wr.transition=i}}function hu(e,t,n,r){if(Oa){var o=bs(e,t,n,r);if(o===null)Al(e,t,r,Ca,n),Cc(e,r);else if(v0(o,e,t,n,r))r.stopPropagation();else if(Cc(e,r),t&4&&-1<m0.indexOf(e)){for(;o!==null;){var i=ki(o);if(i!==null&&Gf(i),i=bs(e,t,n,r),i===null&&Al(e,t,r,Ca,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Al(e,t,r,null,n)}}var Ca=null;function bs(e,t,n,r){if(Ca=null,e=uu(r),e=nr(e),e!==null)if(t=br(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ca=e,null}function nh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a0()){case cu:return 1;case Wf:return 4;case Pa:case l0:return 16;case Kf:return 536870912;default:return 16}default:return 16}}var Dn=null,pu=null,da=null;function rh(){if(da)return da;var e,t=pu,n=t.length,r,o="value"in Dn?Dn.value:Dn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return da=o.slice(e,1<r?1-r:void 0)}function fa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function Rc(){return!1}function vt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qi:Rc,this.isPropagationStopped=Rc,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),t}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mu=vt(mo),xi=be({},mo,{view:0,detail:0}),w0=vt(xi),Rl,zl,Oo,Ja=be({},xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oo&&(Oo&&e.type==="mousemove"?(Rl=e.screenX-Oo.screenX,zl=e.screenY-Oo.screenY):zl=Rl=0,Oo=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),zc=vt(Ja),x0=be({},Ja,{dataTransfer:0}),k0=vt(x0),S0=be({},xi,{relatedTarget:0}),Tl=vt(S0),P0=be({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),E0=vt(P0),O0=be({},mo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),C0=vt(O0),_0=be({},mo,{data:0}),Tc=vt(_0),R0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=T0[e])?!!t[e]:!1}function vu(){return D0}var M0=be({},xi,{key:function(e){if(e.key){var t=R0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(e){return e.type==="keypress"?fa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L0=vt(M0),N0=be({},Ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dc=vt(N0),F0=be({},xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),j0=vt(F0),A0=be({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),I0=vt(A0),U0=be({},Ja,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$0=vt(U0),q0=[9,13,27,32],gu=un&&"CompositionEvent"in window,qo=null;un&&"documentMode"in document&&(qo=document.documentMode);var H0=un&&"TextEvent"in window&&!qo,oh=un&&(!gu||qo&&8<qo&&11>=qo),Mc=" ",Lc=!1;function ih(e,t){switch(e){case"keyup":return q0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ah(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mr=!1;function B0(e,t){switch(e){case"compositionend":return ah(t);case"keypress":return t.which!==32?null:(Lc=!0,Mc);case"textInput":return e=t.data,e===Mc&&Lc?null:e;default:return null}}function V0(e,t){if(Mr)return e==="compositionend"||!gu&&ih(e,t)?(e=rh(),da=pu=Dn=null,Mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oh&&t.locale!=="ko"?null:t.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Q0[e.type]:t==="textarea"}function lh(e,t,n,r){Af(r),t=_a(t,"onChange"),0<t.length&&(n=new mu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ho=null,ti=null;function W0(e){yh(e,0)}function Za(e){var t=Fr(e);if(Tf(t))return e}function K0(e,t){if(e==="change")return t}var sh=!1;if(un){var Dl;if(un){var Ml="oninput"in document;if(!Ml){var Fc=document.createElement("div");Fc.setAttribute("oninput","return;"),Ml=typeof Fc.oninput=="function"}Dl=Ml}else Dl=!1;sh=Dl&&(!document.documentMode||9<document.documentMode)}function jc(){Ho&&(Ho.detachEvent("onpropertychange",uh),ti=Ho=null)}function uh(e){if(e.propertyName==="value"&&Za(ti)){var t=[];lh(t,ti,e,uu(e)),qf(W0,t)}}function X0(e,t,n){e==="focusin"?(jc(),Ho=t,ti=n,Ho.attachEvent("onpropertychange",uh)):e==="focusout"&&jc()}function Y0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Za(ti)}function G0(e,t){if(e==="click")return Za(t)}function J0(e,t){if(e==="input"||e==="change")return Za(t)}function Z0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:Z0;function ni(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ts.call(t,o)||!At(e[o],t[o]))return!1}return!0}function Ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ic(e,t){var n=Ac(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ac(n)}}function ch(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ch(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dh(){for(var e=window,t=xa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xa(e.document)}return t}function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ev(e){var t=dh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ch(n.ownerDocument.documentElement,n)){if(r!==null&&yu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ic(n,i);var a=Ic(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tv=un&&"documentMode"in document&&11>=document.documentMode,Lr=null,ws=null,Bo=null,xs=!1;function Uc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xs||Lr==null||Lr!==xa(r)||(r=Lr,"selectionStart"in r&&yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bo&&ni(Bo,r)||(Bo=r,r=_a(ws,"onSelect"),0<r.length&&(t=new mu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nr={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},Ll={},fh={};un&&(fh=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function el(e){if(Ll[e])return Ll[e];if(!Nr[e])return e;var t=Nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fh)return Ll[e]=t[n];return e}var hh=el("animationend"),ph=el("animationiteration"),mh=el("animationstart"),vh=el("transitionend"),gh=new Map,$c="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,t){gh.set(e,t),yr(t,[e])}for(var Nl=0;Nl<$c.length;Nl++){var Fl=$c[Nl],nv=Fl.toLowerCase(),rv=Fl[0].toUpperCase()+Fl.slice(1);Vn(nv,"on"+rv)}Vn(hh,"onAnimationEnd");Vn(ph,"onAnimationIteration");Vn(mh,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(vh,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ov=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function qc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,n0(r,t,void 0,e),e.currentTarget=null}function yh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;qc(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;qc(o,l,u),i=s}}}if(Sa)throw e=vs,Sa=!1,vs=null,e}function fe(e,t){var n=t[Os];n===void 0&&(n=t[Os]=new Set);var r=e+"__bubble";n.has(r)||(bh(t,e,2,!1),n.add(r))}function jl(e,t,n){var r=0;t&&(r|=4),bh(n,e,r,t)}var Bi="_reactListening"+Math.random().toString(36).slice(2);function ri(e){if(!e[Bi]){e[Bi]=!0,Of.forEach(function(n){n!=="selectionchange"&&(ov.has(n)||jl(n,!1,e),jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bi]||(t[Bi]=!0,jl("selectionchange",!1,t))}}function bh(e,t,n,r){switch(nh(t)){case 1:var o=y0;break;case 4:o=b0;break;default:o=hu}n=o.bind(null,t,n,e),o=void 0,!ms||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Al(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=nr(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}qf(function(){var u=i,d=uu(n),c=[];e:{var h=gh.get(e);if(h!==void 0){var w=mu,y=e;switch(e){case"keypress":if(fa(n)===0)break e;case"keydown":case"keyup":w=L0;break;case"focusin":y="focus",w=Tl;break;case"focusout":y="blur",w=Tl;break;case"beforeblur":case"afterblur":w=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=k0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=j0;break;case hh:case ph:case mh:w=E0;break;case vh:w=I0;break;case"scroll":w=w0;break;case"wheel":w=$0;break;case"copy":case"cut":case"paste":w=C0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Dc}var m=(t&4)!==0,P=!m&&e==="scroll",p=m?h!==null?h+"Capture":null:h;m=[];for(var f=u,v;f!==null;){v=f;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,p!==null&&(k=Go(f,p),k!=null&&m.push(oi(f,k,v)))),P)break;f=f.return}0<m.length&&(h=new w(h,y,null,n,d),c.push({event:h,listeners:m}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==hs&&(y=n.relatedTarget||n.fromElement)&&(nr(y)||y[cn]))break e;if((w||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?nr(y):null,y!==null&&(P=br(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(m=zc,k="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(m=Dc,k="onPointerLeave",p="onPointerEnter",f="pointer"),P=w==null?h:Fr(w),v=y==null?h:Fr(y),h=new m(k,f+"leave",w,n,d),h.target=P,h.relatedTarget=v,k=null,nr(d)===u&&(m=new m(p,f+"enter",y,n,d),m.target=v,m.relatedTarget=P,k=m),P=k,w&&y)t:{for(m=w,p=y,f=0,v=m;v;v=Cr(v))f++;for(v=0,k=p;k;k=Cr(k))v++;for(;0<f-v;)m=Cr(m),f--;for(;0<v-f;)p=Cr(p),v--;for(;f--;){if(m===p||p!==null&&m===p.alternate)break t;m=Cr(m),p=Cr(p)}m=null}else m=null;w!==null&&Hc(c,h,w,m,!1),y!==null&&P!==null&&Hc(c,P,y,m,!0)}}e:{if(h=u?Fr(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var C=K0;else if(Nc(h))if(sh)C=J0;else{C=Y0;var z=X0}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=G0);if(C&&(C=C(e,u))){lh(c,C,n,d);break e}z&&z(e,h,u),e==="focusout"&&(z=h._wrapperState)&&z.controlled&&h.type==="number"&&ss(h,"number",h.value)}switch(z=u?Fr(u):window,e){case"focusin":(Nc(z)||z.contentEditable==="true")&&(Lr=z,ws=u,Bo=null);break;case"focusout":Bo=ws=Lr=null;break;case"mousedown":xs=!0;break;case"contextmenu":case"mouseup":case"dragend":xs=!1,Uc(c,n,d);break;case"selectionchange":if(tv)break;case"keydown":case"keyup":Uc(c,n,d)}var T;if(gu)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Mr?ih(e,n)&&(g="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(oh&&n.locale!=="ko"&&(Mr||g!=="onCompositionStart"?g==="onCompositionEnd"&&Mr&&(T=rh()):(Dn=d,pu="value"in Dn?Dn.value:Dn.textContent,Mr=!0)),z=_a(u,g),0<z.length&&(g=new Tc(g,e,null,n,d),c.push({event:g,listeners:z}),T?g.data=T:(T=ah(n),T!==null&&(g.data=T)))),(T=H0?B0(e,n):V0(e,n))&&(u=_a(u,"onBeforeInput"),0<u.length&&(d=new Tc("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=T))}yh(c,t)})}function oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _a(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Go(e,n),i!=null&&r.unshift(oi(e,i,o)),i=Go(e,t),i!=null&&r.push(oi(e,i,o))),e=e.return}return r}function Cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hc(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Go(n,i),s!=null&&a.unshift(oi(n,s,l))):o||(s=Go(n,i),s!=null&&a.push(oi(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var iv=/\r\n?/g,av=/\u0000|\uFFFD/g;function Bc(e){return(typeof e=="string"?e:""+e).replace(iv,`
`).replace(av,"")}function Vi(e,t,n){if(t=Bc(t),Bc(e)!==t&&n)throw Error(R(425))}function Ra(){}var ks=null,Ss=null;function Ps(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Es=typeof setTimeout=="function"?setTimeout:void 0,lv=typeof clearTimeout=="function"?clearTimeout:void 0,Vc=typeof Promise=="function"?Promise:void 0,sv=typeof queueMicrotask=="function"?queueMicrotask:typeof Vc<"u"?function(e){return Vc.resolve(null).then(e).catch(uv)}:Es;function uv(e){setTimeout(function(){throw e})}function Il(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ei(t)}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vo=Math.random().toString(36).slice(2),Vt="__reactFiber$"+vo,ii="__reactProps$"+vo,cn="__reactContainer$"+vo,Os="__reactEvents$"+vo,cv="__reactListeners$"+vo,dv="__reactHandles$"+vo;function nr(e){var t=e[Vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cn]||n[Vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qc(e);e!==null;){if(n=e[Vt])return n;e=Qc(e)}return t}e=n,n=e.parentNode}return null}function ki(e){return e=e[Vt]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function tl(e){return e[ii]||null}var Cs=[],jr=-1;function Qn(e){return{current:e}}function he(e){0>jr||(e.current=Cs[jr],Cs[jr]=null,jr--)}function ue(e,t){jr++,Cs[jr]=e.current,e.current=t}var Bn={},Ve=Qn(Bn),ot=Qn(!1),fr=Bn;function ao(e,t){var n=e.type.contextTypes;if(!n)return Bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function it(e){return e=e.childContextTypes,e!=null}function za(){he(ot),he(Ve)}function Wc(e,t,n){if(Ve.current!==Bn)throw Error(R(168));ue(Ve,t),ue(ot,n)}function wh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,Xm(e)||"Unknown",o));return be({},n,r)}function Ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bn,fr=Ve.current,ue(Ve,e),ue(ot,ot.current),!0}function Kc(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=wh(e,t,fr),r.__reactInternalMemoizedMergedChildContext=e,he(ot),he(Ve),ue(Ve,e)):he(ot),ue(ot,n)}var rn=null,nl=!1,Ul=!1;function xh(e){rn===null?rn=[e]:rn.push(e)}function fv(e){nl=!0,xh(e)}function Wn(){if(!Ul&&rn!==null){Ul=!0;var e=0,t=ie;try{var n=rn;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rn=null,nl=!1}catch(o){throw rn!==null&&(rn=rn.slice(e+1)),Qf(cu,Wn),o}finally{ie=t,Ul=!1}}return null}var Ar=[],Ir=0,Da=null,Ma=0,bt=[],wt=0,hr=null,on=1,an="";function Zn(e,t){Ar[Ir++]=Ma,Ar[Ir++]=Da,Da=e,Ma=t}function kh(e,t,n){bt[wt++]=on,bt[wt++]=an,bt[wt++]=hr,hr=e;var r=on;e=an;var o=32-Ft(r)-1;r&=~(1<<o),n+=1;var i=32-Ft(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,on=1<<32-Ft(t)+o|n<<o|r,an=i+e}else on=1<<i|n<<o|r,an=e}function bu(e){e.return!==null&&(Zn(e,1),kh(e,1,0))}function wu(e){for(;e===Da;)Da=Ar[--Ir],Ar[Ir]=null,Ma=Ar[--Ir],Ar[Ir]=null;for(;e===hr;)hr=bt[--wt],bt[wt]=null,an=bt[--wt],bt[wt]=null,on=bt[--wt],bt[wt]=null}var ht=null,ft=null,me=!1,Mt=null;function Sh(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,ft=An(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hr!==null?{id:on,overflow:an}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,ft=null,!0):!1;default:return!1}}function _s(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rs(e){if(me){var t=ft;if(t){var n=t;if(!Xc(e,t)){if(_s(e))throw Error(R(418));t=An(n.nextSibling);var r=ht;t&&Xc(e,t)?Sh(r,n):(e.flags=e.flags&-4097|2,me=!1,ht=e)}}else{if(_s(e))throw Error(R(418));e.flags=e.flags&-4097|2,me=!1,ht=e}}}function Yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Qi(e){if(e!==ht)return!1;if(!me)return Yc(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ps(e.type,e.memoizedProps)),t&&(t=ft)){if(_s(e))throw Ph(),Error(R(418));for(;t;)Sh(e,t),t=An(t.nextSibling)}if(Yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=An(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ht?An(e.stateNode.nextSibling):null;return!0}function Ph(){for(var e=ft;e;)e=An(e.nextSibling)}function lo(){ft=ht=null,me=!1}function xu(e){Mt===null?Mt=[e]:Mt.push(e)}var hv=hn.ReactCurrentBatchConfig;function Co(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Wi(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gc(e){var t=e._init;return t(e._payload)}function Eh(e){function t(p,f){if(e){var v=p.deletions;v===null?(p.deletions=[f],p.flags|=16):v.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function o(p,f){return p=qn(p,f),p.index=0,p.sibling=null,p}function i(p,f,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<f?(p.flags|=2,f):v):(p.flags|=2,f)):(p.flags|=1048576,f)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,f,v,k){return f===null||f.tag!==6?(f=Wl(v,p.mode,k),f.return=p,f):(f=o(f,v),f.return=p,f)}function s(p,f,v,k){var C=v.type;return C===Dr?d(p,f,v.props.children,k,v.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Sn&&Gc(C)===f.type)?(k=o(f,v.props),k.ref=Co(p,f,v),k.return=p,k):(k=ba(v.type,v.key,v.props,null,p.mode,k),k.ref=Co(p,f,v),k.return=p,k)}function u(p,f,v,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Kl(v,p.mode,k),f.return=p,f):(f=o(f,v.children||[]),f.return=p,f)}function d(p,f,v,k,C){return f===null||f.tag!==7?(f=dr(v,p.mode,k,C),f.return=p,f):(f=o(f,v),f.return=p,f)}function c(p,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Wl(""+f,p.mode,v),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Fi:return v=ba(f.type,f.key,f.props,null,p.mode,v),v.ref=Co(p,null,f),v.return=p,v;case Tr:return f=Kl(f,p.mode,v),f.return=p,f;case Sn:var k=f._init;return c(p,k(f._payload),v)}if(No(f)||ko(f))return f=dr(f,p.mode,v,null),f.return=p,f;Wi(p,f)}return null}function h(p,f,v,k){var C=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:l(p,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Fi:return v.key===C?s(p,f,v,k):null;case Tr:return v.key===C?u(p,f,v,k):null;case Sn:return C=v._init,h(p,f,C(v._payload),k)}if(No(v)||ko(v))return C!==null?null:d(p,f,v,k,null);Wi(p,v)}return null}function w(p,f,v,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(v)||null,l(f,p,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Fi:return p=p.get(k.key===null?v:k.key)||null,s(f,p,k,C);case Tr:return p=p.get(k.key===null?v:k.key)||null,u(f,p,k,C);case Sn:var z=k._init;return w(p,f,v,z(k._payload),C)}if(No(k)||ko(k))return p=p.get(v)||null,d(f,p,k,C,null);Wi(f,k)}return null}function y(p,f,v,k){for(var C=null,z=null,T=f,g=f=0,M=null;T!==null&&g<v.length;g++){T.index>g?(M=T,T=null):M=T.sibling;var j=h(p,T,v[g],k);if(j===null){T===null&&(T=M);break}e&&T&&j.alternate===null&&t(p,T),f=i(j,f,g),z===null?C=j:z.sibling=j,z=j,T=M}if(g===v.length)return n(p,T),me&&Zn(p,g),C;if(T===null){for(;g<v.length;g++)T=c(p,v[g],k),T!==null&&(f=i(T,f,g),z===null?C=T:z.sibling=T,z=T);return me&&Zn(p,g),C}for(T=r(p,T);g<v.length;g++)M=w(T,p,g,v[g],k),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?g:M.key),f=i(M,f,g),z===null?C=M:z.sibling=M,z=M);return e&&T.forEach(function(K){return t(p,K)}),me&&Zn(p,g),C}function m(p,f,v,k){var C=ko(v);if(typeof C!="function")throw Error(R(150));if(v=C.call(v),v==null)throw Error(R(151));for(var z=C=null,T=f,g=f=0,M=null,j=v.next();T!==null&&!j.done;g++,j=v.next()){T.index>g?(M=T,T=null):M=T.sibling;var K=h(p,T,j.value,k);if(K===null){T===null&&(T=M);break}e&&T&&K.alternate===null&&t(p,T),f=i(K,f,g),z===null?C=K:z.sibling=K,z=K,T=M}if(j.done)return n(p,T),me&&Zn(p,g),C;if(T===null){for(;!j.done;g++,j=v.next())j=c(p,j.value,k),j!==null&&(f=i(j,f,g),z===null?C=j:z.sibling=j,z=j);return me&&Zn(p,g),C}for(T=r(p,T);!j.done;g++,j=v.next())j=w(T,p,g,j.value,k),j!==null&&(e&&j.alternate!==null&&T.delete(j.key===null?g:j.key),f=i(j,f,g),z===null?C=j:z.sibling=j,z=j);return e&&T.forEach(function(le){return t(p,le)}),me&&Zn(p,g),C}function P(p,f,v,k){if(typeof v=="object"&&v!==null&&v.type===Dr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Fi:e:{for(var C=v.key,z=f;z!==null;){if(z.key===C){if(C=v.type,C===Dr){if(z.tag===7){n(p,z.sibling),f=o(z,v.props.children),f.return=p,p=f;break e}}else if(z.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Sn&&Gc(C)===z.type){n(p,z.sibling),f=o(z,v.props),f.ref=Co(p,z,v),f.return=p,p=f;break e}n(p,z);break}else t(p,z);z=z.sibling}v.type===Dr?(f=dr(v.props.children,p.mode,k,v.key),f.return=p,p=f):(k=ba(v.type,v.key,v.props,null,p.mode,k),k.ref=Co(p,f,v),k.return=p,p=k)}return a(p);case Tr:e:{for(z=v.key;f!==null;){if(f.key===z)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(p,f.sibling),f=o(f,v.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=Kl(v,p.mode,k),f.return=p,p=f}return a(p);case Sn:return z=v._init,P(p,f,z(v._payload),k)}if(No(v))return y(p,f,v,k);if(ko(v))return m(p,f,v,k);Wi(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(p,f.sibling),f=o(f,v),f.return=p,p=f):(n(p,f),f=Wl(v,p.mode,k),f.return=p,p=f),a(p)):n(p,f)}return P}var so=Eh(!0),Oh=Eh(!1),La=Qn(null),Na=null,Ur=null,ku=null;function Su(){ku=Ur=Na=null}function Pu(e){var t=La.current;he(La),e._currentValue=t}function zs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kr(e,t){Na=e,ku=Ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(ku!==e)if(e={context:e,memoizedValue:t,next:null},Ur===null){if(Na===null)throw Error(R(308));Ur=e,Na.dependencies={lanes:0,firstContext:e}}else Ur=Ur.next=e;return t}var rr=null;function Eu(e){rr===null?rr=[e]:rr.push(e)}function Ch(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Eu(t)):(n.next=o.next,o.next=n),t.interleaved=n,dn(e,r)}function dn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pn=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _h(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function In(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,dn(e,n)}return o=r.interleaved,o===null?(t.next=t,Eu(r)):(t.next=o.next,o.next=t),r.interleaved=t,dn(e,n)}function ha(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,du(e,n)}}function Jc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fa(e,t,n,r){var o=e.updateQueue;Pn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(i!==null){var c=o.baseState;a=0,d=u=s=null,l=i;do{var h=l.lane,w=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,m=l;switch(h=t,w=n,m.tag){case 1:if(y=m.payload,typeof y=="function"){c=y.call(w,c,h);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=m.payload,h=typeof y=="function"?y.call(w,c,h):y,h==null)break e;c=be({},c,h);break e;case 2:Pn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=w,s=c):d=d.next=w,a|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(s=c),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);mr|=a,e.lanes=a,e.memoizedState=c}}function Zc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var Si={},Wt=Qn(Si),ai=Qn(Si),li=Qn(Si);function or(e){if(e===Si)throw Error(R(174));return e}function Cu(e,t){switch(ue(li,t),ue(ai,e),ue(Wt,Si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cs(t,e)}he(Wt),ue(Wt,t)}function uo(){he(Wt),he(ai),he(li)}function Rh(e){or(li.current);var t=or(Wt.current),n=cs(t,e.type);t!==n&&(ue(ai,e),ue(Wt,n))}function _u(e){ai.current===e&&(he(Wt),he(ai))}var ge=Qn(0);function ja(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function Ru(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var pa=hn.ReactCurrentDispatcher,ql=hn.ReactCurrentBatchConfig,pr=0,ye=null,ze=null,Le=null,Aa=!1,Vo=!1,si=0,pv=0;function $e(){throw Error(R(321))}function zu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function Tu(e,t,n,r,o,i){if(pr=i,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,pa.current=e===null||e.memoizedState===null?yv:bv,e=n(r,o),Vo){i=0;do{if(Vo=!1,si=0,25<=i)throw Error(R(301));i+=1,Le=ze=null,t.updateQueue=null,pa.current=wv,e=n(r,o)}while(Vo)}if(pa.current=Ia,t=ze!==null&&ze.next!==null,pr=0,Le=ze=ye=null,Aa=!1,t)throw Error(R(300));return e}function Du(){var e=si!==0;return si=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ye.memoizedState=Le=e:Le=Le.next=e,Le}function Pt(){if(ze===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Le===null?ye.memoizedState:Le.next;if(t!==null)Le=t,ze=e;else{if(e===null)throw Error(R(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Le===null?ye.memoizedState=Le=e:Le=Le.next=e}return Le}function ui(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=Pt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=ze,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var d=u.lane;if((pr&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,a=r):s=s.next=c,ye.lanes|=d,mr|=d}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,At(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ye.lanes|=i,mr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=Pt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);At(i,t.memoizedState)||(rt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function zh(){}function Th(e,t){var n=ye,r=Pt(),o=t(),i=!At(r.memoizedState,o);if(i&&(r.memoizedState=o,rt=!0),r=r.queue,Mu(Lh.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,ci(9,Mh.bind(null,n,r,o,t),void 0,null),Ne===null)throw Error(R(349));pr&30||Dh(n,t,o)}return o}function Dh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mh(e,t,n,r){t.value=n,t.getSnapshot=r,Nh(t)&&Fh(e)}function Lh(e,t,n){return n(function(){Nh(t)&&Fh(e)})}function Nh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function Fh(e){var t=dn(e,1);t!==null&&jt(t,e,1,-1)}function ed(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:e},t.queue=e,e=e.dispatch=gv.bind(null,ye,e),[t.memoizedState,e]}function ci(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jh(){return Pt().memoizedState}function ma(e,t,n,r){var o=$t();ye.flags|=e,o.memoizedState=ci(1|t,n,void 0,r===void 0?null:r)}function rl(e,t,n,r){var o=Pt();r=r===void 0?null:r;var i=void 0;if(ze!==null){var a=ze.memoizedState;if(i=a.destroy,r!==null&&zu(r,a.deps)){o.memoizedState=ci(t,n,i,r);return}}ye.flags|=e,o.memoizedState=ci(1|t,n,i,r)}function td(e,t){return ma(8390656,8,e,t)}function Mu(e,t){return rl(2048,8,e,t)}function Ah(e,t){return rl(4,2,e,t)}function Ih(e,t){return rl(4,4,e,t)}function Uh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $h(e,t,n){return n=n!=null?n.concat([e]):null,rl(4,4,Uh.bind(null,t,e),n)}function Lu(){}function qh(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hh(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bh(e,t,n){return pr&21?(At(n,t)||(n=Xf(),ye.lanes|=n,mr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n)}function mv(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),t()}finally{ie=n,ql.transition=r}}function Vh(){return Pt().memoizedState}function vv(e,t,n){var r=$n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qh(e))Wh(t,n);else if(n=Ch(e,t,n,r),n!==null){var o=Ge();jt(n,e,r,o),Kh(n,t,r)}}function gv(e,t,n){var r=$n(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qh(e))Wh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,At(l,a)){var s=t.interleaved;s===null?(o.next=o,Eu(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Ch(e,t,o,r),n!==null&&(o=Ge(),jt(n,e,r,o),Kh(n,t,r))}}function Qh(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Wh(e,t){Vo=Aa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,du(e,n)}}var Ia={readContext:St,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},yv={readContext:St,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:td,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ma(4194308,4,Uh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ma(4194308,4,e,t)},useInsertionEffect:function(e,t){return ma(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vv.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:ed,useDebugValue:Lu,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=ed(!1),t=e[0];return e=mv.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,o=$t();if(me){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Ne===null)throw Error(R(349));pr&30||Dh(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,td(Lh.bind(null,r,i,e),[e]),r.flags|=2048,ci(9,Mh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=$t(),t=Ne.identifierPrefix;if(me){var n=an,r=on;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=si++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bv={readContext:St,useCallback:qh,useContext:St,useEffect:Mu,useImperativeHandle:$h,useInsertionEffect:Ah,useLayoutEffect:Ih,useMemo:Hh,useReducer:Hl,useRef:jh,useState:function(){return Hl(ui)},useDebugValue:Lu,useDeferredValue:function(e){var t=Pt();return Bh(t,ze.memoizedState,e)},useTransition:function(){var e=Hl(ui)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:zh,useSyncExternalStore:Th,useId:Vh,unstable_isNewReconciler:!1},wv={readContext:St,useCallback:qh,useContext:St,useEffect:Mu,useImperativeHandle:$h,useInsertionEffect:Ah,useLayoutEffect:Ih,useMemo:Hh,useReducer:Bl,useRef:jh,useState:function(){return Bl(ui)},useDebugValue:Lu,useDeferredValue:function(e){var t=Pt();return ze===null?t.memoizedState=e:Bh(t,ze.memoizedState,e)},useTransition:function(){var e=Bl(ui)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:zh,useSyncExternalStore:Th,useId:Vh,unstable_isNewReconciler:!1};function _t(e,t){if(e&&e.defaultProps){t=be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ts(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return(e=e._reactInternals)?br(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),o=$n(e),i=ln(r,o);i.payload=t,n!=null&&(i.callback=n),t=In(e,i,o),t!==null&&(jt(t,e,o,r),ha(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),o=$n(e),i=ln(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=In(e,i,o),t!==null&&(jt(t,e,o,r),ha(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=$n(e),o=ln(n,r);o.tag=2,t!=null&&(o.callback=t),t=In(e,o,r),t!==null&&(jt(t,e,r,n),ha(t,e,r))}};function nd(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ni(n,r)||!ni(o,i):!0}function Xh(e,t,n){var r=!1,o=Bn,i=t.contextType;return typeof i=="object"&&i!==null?i=St(i):(o=it(t)?fr:Ve.current,r=t.contextTypes,i=(r=r!=null)?ao(e,o):Bn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function rd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function Ds(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ou(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=St(i):(i=it(t)?fr:Ve.current,o.context=ao(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ts(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Fa(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function co(e,t){try{var n="",r=t;do n+=Km(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ms(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xv=typeof WeakMap=="function"?WeakMap:Map;function Yh(e,t,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$a||($a=!0,Hs=r),Ms(e,t)},n}function Gh(e,t,n){n=ln(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ms(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ms(e,t),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function od(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Nv.bind(null,e,t,n),t.then(e,e))}function id(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ad(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ln(-1,1),t.tag=2,In(n,t,1))),n.lanes|=1),e)}var kv=hn.ReactCurrentOwner,rt=!1;function Xe(e,t,n,r){t.child=e===null?Oh(t,null,n,r):so(t,e.child,n,r)}function ld(e,t,n,r,o){n=n.render;var i=t.ref;return Kr(t,o),r=Tu(e,t,n,r,i,o),n=Du(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,fn(e,t,o)):(me&&n&&bu(t),t.flags|=1,Xe(e,t,r,o),t.child)}function sd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!qu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Jh(e,t,i,r,o)):(e=ba(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ni,n(a,r)&&e.ref===t.ref)return fn(e,t,o)}return t.flags|=1,e=qn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Jh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ni(i,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,fn(e,t,o)}return Ls(e,t,n,r,o)}function Zh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(qr,ct),ct|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(qr,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ue(qr,ct),ct|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ue(qr,ct),ct|=r;return Xe(e,t,o,n),t.child}function ep(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ls(e,t,n,r,o){var i=it(n)?fr:Ve.current;return i=ao(t,i),Kr(t,o),n=Tu(e,t,n,r,i,o),r=Du(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,fn(e,t,o)):(me&&r&&bu(t),t.flags|=1,Xe(e,t,n,o),t.child)}function ud(e,t,n,r,o){if(it(n)){var i=!0;Ta(t)}else i=!1;if(Kr(t,o),t.stateNode===null)va(e,t),Xh(t,n,r),Ds(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=St(u):(u=it(n)?fr:Ve.current,u=ao(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&rd(t,a,r,u),Pn=!1;var h=t.memoizedState;a.state=h,Fa(t,r,a,o),s=t.memoizedState,l!==r||h!==s||ot.current||Pn?(typeof d=="function"&&(Ts(t,n,d,r),s=t.memoizedState),(l=Pn||nd(t,n,l,r,h,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,_h(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:_t(t.type,l),a.props=u,c=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=St(s):(s=it(n)?fr:Ve.current,s=ao(t,s));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==c||h!==s)&&rd(t,a,r,s),Pn=!1,h=t.memoizedState,a.state=h,Fa(t,r,a,o);var y=t.memoizedState;l!==c||h!==y||ot.current||Pn?(typeof w=="function"&&(Ts(t,n,w,r),y=t.memoizedState),(u=Pn||nd(t,n,u,r,h,y,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ns(e,t,n,r,i,o)}function Ns(e,t,n,r,o,i){ep(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Kc(t,n,!1),fn(e,t,i);r=t.stateNode,kv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=so(t,e.child,null,i),t.child=so(t,null,l,i)):Xe(e,t,l,i),t.memoizedState=r.state,o&&Kc(t,n,!0),t.child}function tp(e){var t=e.stateNode;t.pendingContext?Wc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wc(e,t.context,!1),Cu(e,t.containerInfo)}function cd(e,t,n,r,o){return lo(),xu(o),t.flags|=256,Xe(e,t,n,r),t.child}var Fs={dehydrated:null,treeContext:null,retryLane:0};function js(e){return{baseLanes:e,cachePool:null,transitions:null}}function np(e,t,n){var r=t.pendingProps,o=ge.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ue(ge,o&1),e===null)return Rs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ll(a,r,0,null),e=dr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=js(n),t.memoizedState=Fs,e):Nu(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Sv(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=qn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=qn(l,i):(i=dr(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?js(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Fs,r}return i=e.child,e=i.sibling,r=qn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nu(e,t){return t=ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ki(e,t,n,r){return r!==null&&xu(r),so(t,e.child,null,n),e=Nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sv(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Vl(Error(R(422))),Ki(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ll({mode:"visible",children:r.children},o,0,null),i=dr(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&so(t,e.child,null,a),t.child.memoizedState=js(a),t.memoizedState=Fs,i);if(!(t.mode&1))return Ki(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(R(419)),r=Vl(i,r,void 0),Ki(e,t,a,r)}if(l=(a&e.childLanes)!==0,rt||l){if(r=Ne,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,dn(e,o),jt(r,e,o,-1))}return $u(),r=Vl(Error(R(421))),Ki(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Fv.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ft=An(o.nextSibling),ht=t,me=!0,Mt=null,e!==null&&(bt[wt++]=on,bt[wt++]=an,bt[wt++]=hr,on=e.id,an=e.overflow,hr=t),t=Nu(t,r.children),t.flags|=4096,t)}function dd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zs(e.return,t,n)}function Ql(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function rp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Xe(e,t,r.children,n),r=ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dd(e,n,t);else if(e.tag===19)dd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(ge,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ja(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ql(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ja(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ql(t,!0,n,null,i);break;case"together":Ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function va(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pv(e,t,n){switch(t.tag){case 3:tp(t),lo();break;case 5:Rh(t);break;case 1:it(t.type)&&Ta(t);break;case 4:Cu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ue(La,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(ge,ge.current&1),t.flags|=128,null):n&t.child.childLanes?np(e,t,n):(ue(ge,ge.current&1),e=fn(e,t,n),e!==null?e.sibling:null);ue(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return rp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ue(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,Zh(e,t,n)}return fn(e,t,n)}var op,As,ip,ap;op=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};As=function(){};ip=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,or(Wt.current);var i=null;switch(n){case"input":o=as(e,o),r=as(e,r),i=[];break;case"select":o=be({},o,{value:void 0}),r=be({},r,{value:void 0}),i=[];break;case"textarea":o=us(e,o),r=us(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ra)}ds(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&fe("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};ap=function(e,t,n,r){n!==r&&(t.flags|=4)};function _o(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ev(e,t,n){var r=t.pendingProps;switch(wu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return it(t.type)&&za(),qe(t),null;case 3:return r=t.stateNode,uo(),he(ot),he(Ve),Ru(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mt!==null&&(Qs(Mt),Mt=null))),As(e,t),qe(t),null;case 5:_u(t);var o=or(li.current);if(n=t.type,e!==null&&t.stateNode!=null)ip(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return qe(t),null}if(e=or(Wt.current),Qi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Vt]=t,r[ii]=i,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(o=0;o<jo.length;o++)fe(jo[o],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":wc(r,i),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},fe("invalid",r);break;case"textarea":kc(r,i),fe("invalid",r)}ds(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Vi(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Vi(r.textContent,l,e),o=["children",""+l]):Xo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&fe("scroll",r)}switch(n){case"input":ji(r),xc(r,i,!0);break;case"textarea":ji(r),Sc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ra)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Vt]=t,e[ii]=r,op(e,t,!1,!1),t.stateNode=e;e:{switch(a=fs(n,r),n){case"dialog":fe("cancel",e),fe("close",e),o=r;break;case"iframe":case"object":case"embed":fe("load",e),o=r;break;case"video":case"audio":for(o=0;o<jo.length;o++)fe(jo[o],e);o=r;break;case"source":fe("error",e),o=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),o=r;break;case"details":fe("toggle",e),o=r;break;case"input":wc(e,r),o=as(e,r),fe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=be({},r,{value:void 0}),fe("invalid",e);break;case"textarea":kc(e,r),o=us(e,r),fe("invalid",e);break;default:o=r}ds(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?jf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Nf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Yo(e,s):typeof s=="number"&&Yo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xo.hasOwnProperty(i)?s!=null&&i==="onScroll"&&fe("scroll",e):s!=null&&iu(e,i,s,a))}switch(n){case"input":ji(e),xc(e,r,!1);break;case"textarea":ji(e),Sc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Hn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Br(e,!!r.multiple,i,!1):r.defaultValue!=null&&Br(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ra)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)ap(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=or(li.current),or(Wt.current),Qi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Vt]=t,(i=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Vi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=t,t.stateNode=r}return qe(t),null;case 13:if(he(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&ft!==null&&t.mode&1&&!(t.flags&128))Ph(),lo(),t.flags|=98560,i=!1;else if(i=Qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(R(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[Vt]=t}else lo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;qe(t),i=!1}else Mt!==null&&(Qs(Mt),Mt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?Te===0&&(Te=3):$u())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return uo(),As(e,t),e===null&&ri(t.stateNode.containerInfo),qe(t),null;case 10:return Pu(t.type._context),qe(t),null;case 17:return it(t.type)&&za(),qe(t),null;case 19:if(he(ge),i=t.memoizedState,i===null)return qe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)_o(i,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ja(e),a!==null){for(t.flags|=128,_o(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(ge,ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ee()>fo&&(t.flags|=128,r=!0,_o(i,!1),t.lanes=4194304)}else{if(!r)if(e=ja(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_o(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!me)return qe(t),null}else 2*Ee()-i.renderingStartTime>fo&&n!==1073741824&&(t.flags|=128,r=!0,_o(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ee(),t.sibling=null,n=ge.current,ue(ge,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return Uu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ct&1073741824&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function Ov(e,t){switch(wu(t),t.tag){case 1:return it(t.type)&&za(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return uo(),he(ot),he(Ve),Ru(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _u(t),null;case 13:if(he(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));lo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ge),null;case 4:return uo(),null;case 10:return Pu(t.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var Xi=!1,Be=!1,Cv=typeof WeakSet=="function"?WeakSet:Set,F=null;function $r(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function Is(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var fd=!1;function _v(e,t){if(ks=Oa,e=dh(),yu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,d=0,c=e,h=null;t:for(;;){for(var w;c!==n||o!==0&&c.nodeType!==3||(l=a+o),c!==i||r!==0&&c.nodeType!==3||(s=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(w=c.firstChild)!==null;)h=c,c=w;for(;;){if(c===e)break t;if(h===n&&++u===o&&(l=a),h===i&&++d===r&&(s=a),(w=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=w}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ss={focusedElem:e,selectionRange:n},Oa=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var m=y.memoizedProps,P=y.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?m:_t(t.type,m),P);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(k){Pe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return y=fd,fd=!1,y}function Qo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Is(t,n,i)}o=o.next}while(o!==r)}}function il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Us(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lp(e){var t=e.alternate;t!==null&&(e.alternate=null,lp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vt],delete t[ii],delete t[Os],delete t[cv],delete t[dv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sp(e){return e.tag===5||e.tag===3||e.tag===4}function hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $s(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ra));else if(r!==4&&(e=e.child,e!==null))for($s(e,t,n),e=e.sibling;e!==null;)$s(e,t,n),e=e.sibling}function qs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qs(e,t,n),e=e.sibling;e!==null;)qs(e,t,n),e=e.sibling}var je=null,Tt=!1;function yn(e,t,n){for(n=n.child;n!==null;)up(e,t,n),n=n.sibling}function up(e,t,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(Ga,n)}catch{}switch(n.tag){case 5:Be||$r(n,t);case 6:var r=je,o=Tt;je=null,yn(e,t,n),je=r,Tt=o,je!==null&&(Tt?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Tt?(e=je,n=n.stateNode,e.nodeType===8?Il(e.parentNode,n):e.nodeType===1&&Il(e,n),ei(e)):Il(je,n.stateNode));break;case 4:r=je,o=Tt,je=n.stateNode.containerInfo,Tt=!0,yn(e,t,n),je=r,Tt=o;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Is(n,t,a),o=o.next}while(o!==r)}yn(e,t,n);break;case 1:if(!Be&&($r(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,t,l)}yn(e,t,n);break;case 21:yn(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,yn(e,t,n),Be=r):yn(e,t,n);break;default:yn(e,t,n)}}function pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cv),t.forEach(function(r){var o=jv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,Tt=!1;break e;case 3:je=l.stateNode.containerInfo,Tt=!0;break e;case 4:je=l.stateNode.containerInfo,Tt=!0;break e}l=l.return}if(je===null)throw Error(R(160));up(i,a,o),je=null,Tt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Pe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cp(t,e),t=t.sibling}function cp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),Ut(e),r&4){try{Qo(3,e,e.return),il(3,e)}catch(m){Pe(e,e.return,m)}try{Qo(5,e,e.return)}catch(m){Pe(e,e.return,m)}}break;case 1:Ot(t,e),Ut(e),r&512&&n!==null&&$r(n,n.return);break;case 5:if(Ot(t,e),Ut(e),r&512&&n!==null&&$r(n,n.return),e.flags&32){var o=e.stateNode;try{Yo(o,"")}catch(m){Pe(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Df(o,i),fs(l,a);var u=fs(l,i);for(a=0;a<s.length;a+=2){var d=s[a],c=s[a+1];d==="style"?jf(o,c):d==="dangerouslySetInnerHTML"?Nf(o,c):d==="children"?Yo(o,c):iu(o,d,c,u)}switch(l){case"input":ls(o,i);break;case"textarea":Mf(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Br(o,!!i.multiple,w,!1):h!==!!i.multiple&&(i.defaultValue!=null?Br(o,!!i.multiple,i.defaultValue,!0):Br(o,!!i.multiple,i.multiple?[]:"",!1))}o[ii]=i}catch(m){Pe(e,e.return,m)}}break;case 6:if(Ot(t,e),Ut(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(m){Pe(e,e.return,m)}}break;case 3:if(Ot(t,e),Ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ei(t.containerInfo)}catch(m){Pe(e,e.return,m)}break;case 4:Ot(t,e),Ut(e);break;case 13:Ot(t,e),Ut(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Au=Ee())),r&4&&pd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||d,Ot(t,e),Be=u):Ot(t,e),Ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(F=e,d=e.child;d!==null;){for(c=F=d;F!==null;){switch(h=F,w=h.child,h.tag){case 0:case 11:case 14:case 15:Qo(4,h,h.return);break;case 1:$r(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(m){Pe(r,n,m)}}break;case 5:$r(h,h.return);break;case 22:if(h.memoizedState!==null){vd(c);continue}}w!==null?(w.return=h,F=w):vd(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=c.stateNode,s=c.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Ff("display",a))}catch(m){Pe(e,e.return,m)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(m){Pe(e,e.return,m)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ot(t,e),Ut(e),r&4&&pd(e);break;case 21:break;default:Ot(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sp(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Yo(o,""),r.flags&=-33);var i=hd(e);qs(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=hd(e);$s(e,l,a);break;default:throw Error(R(161))}}catch(s){Pe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rv(e,t,n){F=e,dp(e)}function dp(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var o=F,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Xi;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Be;l=Xi;var u=Be;if(Xi=a,(Be=s)&&!u)for(F=o;F!==null;)a=F,s=a.child,a.tag===22&&a.memoizedState!==null?gd(o):s!==null?(s.return=a,F=s):gd(o);for(;i!==null;)F=i,dp(i),i=i.sibling;F=o,Xi=l,Be=u}md(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,F=i):md(e)}}function md(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||il(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:_t(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ei(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Be||t.flags&512&&Us(t)}catch(h){Pe(t,t.return,h)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function vd(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function gd(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{il(4,t)}catch(s){Pe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Pe(t,o,s)}}var i=t.return;try{Us(t)}catch(s){Pe(t,i,s)}break;case 5:var a=t.return;try{Us(t)}catch(s){Pe(t,a,s)}}}catch(s){Pe(t,t.return,s)}if(t===e){F=null;break}var l=t.sibling;if(l!==null){l.return=t.return,F=l;break}F=t.return}}var zv=Math.ceil,Ua=hn.ReactCurrentDispatcher,Fu=hn.ReactCurrentOwner,kt=hn.ReactCurrentBatchConfig,te=0,Ne=null,Re=null,Ae=0,ct=0,qr=Qn(0),Te=0,di=null,mr=0,al=0,ju=0,Wo=null,nt=null,Au=0,fo=1/0,nn=null,$a=!1,Hs=null,Un=null,Yi=!1,Mn=null,qa=0,Ko=0,Bs=null,ga=-1,ya=0;function Ge(){return te&6?Ee():ga!==-1?ga:ga=Ee()}function $n(e){return e.mode&1?te&2&&Ae!==0?Ae&-Ae:hv.transition!==null?(ya===0&&(ya=Xf()),ya):(e=ie,e!==0||(e=window.event,e=e===void 0?16:nh(e.type)),e):1}function jt(e,t,n,r){if(50<Ko)throw Ko=0,Bs=null,Error(R(185));wi(e,n,r),(!(te&2)||e!==Ne)&&(e===Ne&&(!(te&2)&&(al|=n),Te===4&&On(e,Ae)),at(e,r),n===1&&te===0&&!(t.mode&1)&&(fo=Ee()+500,nl&&Wn()))}function at(e,t){var n=e.callbackNode;h0(e,t);var r=Ea(e,e===Ne?Ae:0);if(r===0)n!==null&&Oc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Oc(n),t===1)e.tag===0?fv(yd.bind(null,e)):xh(yd.bind(null,e)),sv(function(){!(te&6)&&Wn()}),n=null;else{switch(Yf(r)){case 1:n=cu;break;case 4:n=Wf;break;case 16:n=Pa;break;case 536870912:n=Kf;break;default:n=Pa}n=bp(n,fp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fp(e,t){if(ga=-1,ya=0,te&6)throw Error(R(327));var n=e.callbackNode;if(Xr()&&e.callbackNode!==n)return null;var r=Ea(e,e===Ne?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ha(e,r);else{t=r;var o=te;te|=2;var i=pp();(Ne!==e||Ae!==t)&&(nn=null,fo=Ee()+500,cr(e,t));do try{Mv();break}catch(l){hp(e,l)}while(!0);Su(),Ua.current=i,te=o,Re!==null?t=0:(Ne=null,Ae=0,t=Te)}if(t!==0){if(t===2&&(o=gs(e),o!==0&&(r=o,t=Vs(e,o))),t===1)throw n=di,cr(e,0),On(e,r),at(e,Ee()),n;if(t===6)On(e,r);else{if(o=e.current.alternate,!(r&30)&&!Tv(o)&&(t=Ha(e,r),t===2&&(i=gs(e),i!==0&&(r=i,t=Vs(e,i))),t===1))throw n=di,cr(e,0),On(e,r),at(e,Ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:er(e,nt,nn);break;case 3:if(On(e,r),(r&130023424)===r&&(t=Au+500-Ee(),10<t)){if(Ea(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Es(er.bind(null,e,nt,nn),t);break}er(e,nt,nn);break;case 4:if(On(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Ft(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zv(r/1960))-r,10<r){e.timeoutHandle=Es(er.bind(null,e,nt,nn),r);break}er(e,nt,nn);break;case 5:er(e,nt,nn);break;default:throw Error(R(329))}}}return at(e,Ee()),e.callbackNode===n?fp.bind(null,e):null}function Vs(e,t){var n=Wo;return e.current.memoizedState.isDehydrated&&(cr(e,t).flags|=256),e=Ha(e,t),e!==2&&(t=nt,nt=n,t!==null&&Qs(t)),e}function Qs(e){nt===null?nt=e:nt.push.apply(nt,e)}function Tv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!At(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function On(e,t){for(t&=~ju,t&=~al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),r=1<<n;e[n]=-1,t&=~r}}function yd(e){if(te&6)throw Error(R(327));Xr();var t=Ea(e,0);if(!(t&1))return at(e,Ee()),null;var n=Ha(e,t);if(e.tag!==0&&n===2){var r=gs(e);r!==0&&(t=r,n=Vs(e,r))}if(n===1)throw n=di,cr(e,0),On(e,t),at(e,Ee()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,nt,nn),at(e,Ee()),null}function Iu(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(fo=Ee()+500,nl&&Wn())}}function vr(e){Mn!==null&&Mn.tag===0&&!(te&6)&&Xr();var t=te;te|=1;var n=kt.transition,r=ie;try{if(kt.transition=null,ie=1,e)return e()}finally{ie=r,kt.transition=n,te=t,!(te&6)&&Wn()}}function Uu(){ct=qr.current,he(qr)}function cr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lv(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&za();break;case 3:uo(),he(ot),he(Ve),Ru();break;case 5:_u(r);break;case 4:uo();break;case 13:he(ge);break;case 19:he(ge);break;case 10:Pu(r.type._context);break;case 22:case 23:Uu()}n=n.return}if(Ne=e,Re=e=qn(e.current,null),Ae=ct=t,Te=0,di=null,ju=al=mr=0,nt=Wo=null,rr!==null){for(t=0;t<rr.length;t++)if(n=rr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}rr=null}return e}function hp(e,t){do{var n=Re;try{if(Su(),pa.current=Ia,Aa){for(var r=ye.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Aa=!1}if(pr=0,Le=ze=ye=null,Vo=!1,si=0,Fu.current=null,n===null||n.return===null){Te=1,di=t,Re=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=Ae,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=id(a);if(w!==null){w.flags&=-257,ad(w,a,l,i,t),w.mode&1&&od(i,u,t),t=w,s=u;var y=t.updateQueue;if(y===null){var m=new Set;m.add(s),t.updateQueue=m}else y.add(s);break e}else{if(!(t&1)){od(i,u,t),$u();break e}s=Error(R(426))}}else if(me&&l.mode&1){var P=id(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),ad(P,a,l,i,t),xu(co(s,l));break e}}i=s=co(s,l),Te!==4&&(Te=2),Wo===null?Wo=[i]:Wo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Yh(i,s,t);Jc(i,p);break e;case 1:l=s;var f=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Un===null||!Un.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Gh(i,l,t);Jc(i,k);break e}}i=i.return}while(i!==null)}vp(n)}catch(C){t=C,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function pp(){var e=Ua.current;return Ua.current=Ia,e===null?Ia:e}function $u(){(Te===0||Te===3||Te===2)&&(Te=4),Ne===null||!(mr&268435455)&&!(al&268435455)||On(Ne,Ae)}function Ha(e,t){var n=te;te|=2;var r=pp();(Ne!==e||Ae!==t)&&(nn=null,cr(e,t));do try{Dv();break}catch(o){hp(e,o)}while(!0);if(Su(),te=n,Ua.current=r,Re!==null)throw Error(R(261));return Ne=null,Ae=0,Te}function Dv(){for(;Re!==null;)mp(Re)}function Mv(){for(;Re!==null&&!o0();)mp(Re)}function mp(e){var t=yp(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?vp(e):Re=t,Fu.current=null}function vp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ov(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,Re=null;return}}else if(n=Ev(n,t,ct),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Te===0&&(Te=5)}function er(e,t,n){var r=ie,o=kt.transition;try{kt.transition=null,ie=1,Lv(e,t,n,r)}finally{kt.transition=o,ie=r}return null}function Lv(e,t,n,r){do Xr();while(Mn!==null);if(te&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(p0(e,i),e===Ne&&(Re=Ne=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yi||(Yi=!0,bp(Pa,function(){return Xr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=kt.transition,kt.transition=null;var a=ie;ie=1;var l=te;te|=4,Fu.current=null,_v(e,n),cp(n,e),ev(Ss),Oa=!!ks,Ss=ks=null,e.current=n,Rv(n),i0(),te=l,ie=a,kt.transition=i}else e.current=n;if(Yi&&(Yi=!1,Mn=e,qa=o),i=e.pendingLanes,i===0&&(Un=null),s0(n.stateNode),at(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if($a)throw $a=!1,e=Hs,Hs=null,e;return qa&1&&e.tag!==0&&Xr(),i=e.pendingLanes,i&1?e===Bs?Ko++:(Ko=0,Bs=e):Ko=0,Wn(),null}function Xr(){if(Mn!==null){var e=Yf(qa),t=kt.transition,n=ie;try{if(kt.transition=null,ie=16>e?16:e,Mn===null)var r=!1;else{if(e=Mn,Mn=null,qa=0,te&6)throw Error(R(331));var o=te;for(te|=4,F=e.current;F!==null;){var i=F,a=i.child;if(F.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(F=u;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:Qo(8,d,i)}var c=d.child;if(c!==null)c.return=d,F=c;else for(;F!==null;){d=F;var h=d.sibling,w=d.return;if(lp(d),d===u){F=null;break}if(h!==null){h.return=w,F=h;break}F=w}}}var y=i.alternate;if(y!==null){var m=y.child;if(m!==null){y.child=null;do{var P=m.sibling;m.sibling=null,m=P}while(m!==null)}}F=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,F=a;else e:for(;F!==null;){if(i=F,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Qo(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,F=p;break e}F=i.return}}var f=e.current;for(F=f;F!==null;){a=F;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,F=v;else e:for(a=f;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:il(9,l)}}catch(C){Pe(l,l.return,C)}if(l===a){F=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,F=k;break e}F=l.return}}if(te=o,Wn(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(Ga,e)}catch{}r=!0}return r}finally{ie=n,kt.transition=t}}return!1}function bd(e,t,n){t=co(n,t),t=Yh(e,t,1),e=In(e,t,1),t=Ge(),e!==null&&(wi(e,1,t),at(e,t))}function Pe(e,t,n){if(e.tag===3)bd(e,e,n);else for(;t!==null;){if(t.tag===3){bd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){e=co(n,e),e=Gh(t,e,1),t=In(t,e,1),e=Ge(),t!==null&&(wi(t,1,e),at(t,e));break}}t=t.return}}function Nv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(Ae&n)===n&&(Te===4||Te===3&&(Ae&130023424)===Ae&&500>Ee()-Au?cr(e,0):ju|=n),at(e,t)}function gp(e,t){t===0&&(e.mode&1?(t=Ui,Ui<<=1,!(Ui&130023424)&&(Ui=4194304)):t=1);var n=Ge();e=dn(e,t),e!==null&&(wi(e,t,n),at(e,n))}function Fv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gp(e,n)}function jv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),gp(e,n)}var yp;yp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return rt=!1,Pv(e,t,n);rt=!!(e.flags&131072)}else rt=!1,me&&t.flags&1048576&&kh(t,Ma,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;va(e,t),e=t.pendingProps;var o=ao(t,Ve.current);Kr(t,n),o=Tu(null,t,r,e,o,n);var i=Du();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(i=!0,Ta(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ou(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,Ds(t,r,e,n),t=Ns(null,t,r,!0,i,n)):(t.tag=0,me&&i&&bu(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(va(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Iv(r),e=_t(r,e),o){case 0:t=Ls(null,t,r,e,n);break e;case 1:t=ud(null,t,r,e,n);break e;case 11:t=ld(null,t,r,e,n);break e;case 14:t=sd(null,t,r,_t(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),Ls(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),ud(e,t,r,o,n);case 3:e:{if(tp(t),e===null)throw Error(R(387));r=t.pendingProps,i=t.memoizedState,o=i.element,_h(e,t),Fa(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=co(Error(R(423)),t),t=cd(e,t,r,n,o);break e}else if(r!==o){o=co(Error(R(424)),t),t=cd(e,t,r,n,o);break e}else for(ft=An(t.stateNode.containerInfo.firstChild),ht=t,me=!0,Mt=null,n=Oh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lo(),r===o){t=fn(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Rh(t),e===null&&Rs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Ps(r,o)?a=null:i!==null&&Ps(r,i)&&(t.flags|=32),ep(e,t),Xe(e,t,a,n),t.child;case 6:return e===null&&Rs(t),null;case 13:return np(e,t,n);case 4:return Cu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=so(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),ld(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,ue(La,r._currentValue),r._currentValue=a,i!==null)if(At(i.value,a)){if(i.children===o.children&&!ot.current){t=fn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=ln(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),zs(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(R(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),zs(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Kr(t,n),o=St(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=_t(r,t.pendingProps),o=_t(r.type,o),sd(e,t,r,o,n);case 15:return Jh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),va(e,t),t.tag=1,it(r)?(e=!0,Ta(t)):e=!1,Kr(t,n),Xh(t,r,o),Ds(t,r,o,n),Ns(null,t,r,!0,e,n);case 19:return rp(e,t,n);case 22:return Zh(e,t,n)}throw Error(R(156,t.tag))};function bp(e,t){return Qf(e,t)}function Av(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,r){return new Av(e,t,n,r)}function qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Iv(e){if(typeof e=="function")return qu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===lu)return 11;if(e===su)return 14}return 2}function qn(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ba(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")qu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Dr:return dr(n.children,o,i,t);case au:a=8,o|=8;break;case ns:return e=xt(12,n,t,o|2),e.elementType=ns,e.lanes=i,e;case rs:return e=xt(13,n,t,o),e.elementType=rs,e.lanes=i,e;case os:return e=xt(19,n,t,o),e.elementType=os,e.lanes=i,e;case Rf:return ll(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cf:a=10;break e;case _f:a=9;break e;case lu:a=11;break e;case su:a=14;break e;case Sn:a=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=xt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function dr(e,t,n,r){return e=xt(7,e,r,t),e.lanes=n,e}function ll(e,t,n,r){return e=xt(22,e,r,t),e.elementType=Rf,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function Kl(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Hu(e,t,n,r,o,i,a,l,s){return e=new Uv(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=xt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ou(i),e}function $v(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wp(e){if(!e)return Bn;e=e._reactInternals;e:{if(br(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(it(n))return wh(e,n,t)}return t}function xp(e,t,n,r,o,i,a,l,s){return e=Hu(n,r,!0,e,o,i,a,l,s),e.context=wp(null),n=e.current,r=Ge(),o=$n(n),i=ln(r,o),i.callback=t??null,In(n,i,o),e.current.lanes=o,wi(e,o,r),at(e,r),e}function sl(e,t,n,r){var o=t.current,i=Ge(),a=$n(o);return n=wp(n),t.context===null?t.context=n:t.pendingContext=n,t=ln(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=In(o,t,a),e!==null&&(jt(e,o,a,i),ha(e,o,a)),a}function Ba(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bu(e,t){wd(e,t),(e=e.alternate)&&wd(e,t)}function qv(){return null}var kp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vu(e){this._internalRoot=e}ul.prototype.render=Vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));sl(e,t,null,null)};ul.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vr(function(){sl(null,e,null,null)}),t[cn]=null}};function ul(e){this._internalRoot=e}ul.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&th(e)}};function Qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xd(){}function Hv(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ba(a);i.call(u)}}var a=xp(t,r,e,0,null,!1,!1,"",xd);return e._reactRootContainer=a,e[cn]=a.current,ri(e.nodeType===8?e.parentNode:e),vr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Ba(s);l.call(u)}}var s=Hu(e,0,!1,null,null,!1,!1,"",xd);return e._reactRootContainer=s,e[cn]=s.current,ri(e.nodeType===8?e.parentNode:e),vr(function(){sl(t,s,n,r)}),s}function dl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Ba(a);l.call(s)}}sl(t,a,e,o)}else a=Hv(n,t,e,o,r);return Ba(a)}Gf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fo(t.pendingLanes);n!==0&&(du(t,n|1),at(t,Ee()),!(te&6)&&(fo=Ee()+500,Wn()))}break;case 13:vr(function(){var r=dn(e,1);if(r!==null){var o=Ge();jt(r,e,1,o)}}),Bu(e,1)}};fu=function(e){if(e.tag===13){var t=dn(e,134217728);if(t!==null){var n=Ge();jt(t,e,134217728,n)}Bu(e,134217728)}};Jf=function(e){if(e.tag===13){var t=$n(e),n=dn(e,t);if(n!==null){var r=Ge();jt(n,e,t,r)}Bu(e,t)}};Zf=function(){return ie};eh=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};ps=function(e,t,n){switch(t){case"input":if(ls(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=tl(r);if(!o)throw Error(R(90));Tf(r),ls(r,o)}}}break;case"textarea":Mf(e,n);break;case"select":t=n.value,t!=null&&Br(e,!!n.multiple,t,!1)}};Uf=Iu;$f=vr;var Bv={usingClientEntryPoint:!1,Events:[ki,Fr,tl,Af,If,Iu]},Ro={findFiberByHostInstance:nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vv={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bf(e),e===null?null:e.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||qv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{Ga=Gi.inject(Vv),Qt=Gi}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bv;mt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(t))throw Error(R(200));return $v(e,t,null,n)};mt.createRoot=function(e,t){if(!Qu(e))throw Error(R(299));var n=!1,r="",o=kp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Hu(e,1,!1,null,null,n,!1,r,o),e[cn]=t.current,ri(e.nodeType===8?e.parentNode:e),new Vu(t)};mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Bf(t),e=e===null?null:e.stateNode,e};mt.flushSync=function(e){return vr(e)};mt.hydrate=function(e,t,n){if(!cl(t))throw Error(R(200));return dl(null,e,t,!0,n)};mt.hydrateRoot=function(e,t,n){if(!Qu(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=kp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=xp(t,null,e,1,n??null,o,!1,i,a),e[cn]=t.current,ri(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ul(t)};mt.render=function(e,t,n){if(!cl(t))throw Error(R(200));return dl(null,e,t,!1,n)};mt.unmountComponentAtNode=function(e){if(!cl(e))throw Error(R(40));return e._reactRootContainer?(vr(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};mt.unstable_batchedUpdates=Iu;mt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!cl(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return dl(e,t,n,!1,r)};mt.version="18.3.1-next-f1338f8080-20240426";function Sp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sp)}catch(e){console.error(e)}}Sp(),Sf.exports=mt;var Wu=Sf.exports;const Qv=df(Wu),Wv=cf({__proto__:null,default:Qv},[Wu]);var kd=Wu;es.createRoot=kd.createRoot,es.hydrateRoot=kd.hydrateRoot;function Pp(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Pp(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ep(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Pp(e))&&(r&&(r+=" "),r+=t);return r}function De(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}De(`.react-loading-indicator-normalize,
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
}`);var B=function(){return B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},B.apply(this,arguments)};function Va(e){return Va=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Va(e)}var Kv=/^\s+/,Xv=/\s+$/;function I(e,t){if(t=t||{},(e=e||"")instanceof I)return e;if(!(this instanceof I))return new I(e,t);var n=function(r){var o={r:0,g:0,b:0},i=1,a=null,l=null,s=null,u=!1,d=!1;typeof r=="string"&&(r=function(y){y=y.replace(Kv,"").replace(Xv,"").toLowerCase();var m,P=!1;if(Ws[y])y=Ws[y],P=!0;else if(y=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(m=Ct.rgb.exec(y))?{r:m[1],g:m[2],b:m[3]}:(m=Ct.rgba.exec(y))?{r:m[1],g:m[2],b:m[3],a:m[4]}:(m=Ct.hsl.exec(y))?{h:m[1],s:m[2],l:m[3]}:(m=Ct.hsla.exec(y))?{h:m[1],s:m[2],l:m[3],a:m[4]}:(m=Ct.hsv.exec(y))?{h:m[1],s:m[2],v:m[3]}:(m=Ct.hsva.exec(y))?{h:m[1],s:m[2],v:m[3],a:m[4]}:(m=Ct.hex8.exec(y))?{r:st(m[1]),g:st(m[2]),b:st(m[3]),a:_d(m[4]),format:P?"name":"hex8"}:(m=Ct.hex6.exec(y))?{r:st(m[1]),g:st(m[2]),b:st(m[3]),format:P?"name":"hex"}:(m=Ct.hex4.exec(y))?{r:st(m[1]+""+m[1]),g:st(m[2]+""+m[2]),b:st(m[3]+""+m[3]),a:_d(m[4]+""+m[4]),format:P?"name":"hex8"}:(m=Ct.hex3.exec(y))?{r:st(m[1]+""+m[1]),g:st(m[2]+""+m[2]),b:st(m[3]+""+m[3]),format:P?"name":"hex"}:!1}(r)),Va(r)=="object"&&(en(r.r)&&en(r.g)&&en(r.b)?(c=r.r,h=r.g,w=r.b,o={r:255*pe(c,255),g:255*pe(h,255),b:255*pe(w,255)},u=!0,d=String(r.r).substr(-1)==="%"?"prgb":"rgb"):en(r.h)&&en(r.s)&&en(r.v)?(a=Ao(r.s),l=Ao(r.v),o=function(y,m,P){y=6*pe(y,360),m=pe(m,100),P=pe(P,100);var p=Math.floor(y),f=y-p,v=P*(1-m),k=P*(1-f*m),C=P*(1-(1-f)*m),z=p%6,T=[P,k,v,v,C,P][z],g=[C,P,P,k,v,v][z],M=[v,v,C,P,P,k][z];return{r:255*T,g:255*g,b:255*M}}(r.h,a,l),u=!0,d="hsv"):en(r.h)&&en(r.s)&&en(r.l)&&(a=Ao(r.s),s=Ao(r.l),o=function(y,m,P){var p,f,v;function k(T,g,M){return M<0&&(M+=1),M>1&&(M-=1),M<1/6?T+6*(g-T)*M:M<.5?g:M<2/3?T+(g-T)*(2/3-M)*6:T}if(y=pe(y,360),m=pe(m,100),P=pe(P,100),m===0)p=f=v=P;else{var C=P<.5?P*(1+m):P+m-P*m,z=2*P-C;p=k(z,C,y+1/3),f=k(z,C,y),v=k(z,C,y-1/3)}return{r:255*p,g:255*f,b:255*v}}(r.h,a,s),u=!0,d="hsl"),r.hasOwnProperty("a")&&(i=r.a));var c,h,w;return i=Op(i),{ok:u,format:r.format||d,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:i}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function Sd(e,t,n){e=pe(e,255),t=pe(t,255),n=pe(n,255);var r,o,i=Math.max(e,t,n),a=Math.min(e,t,n),l=(i+a)/2;if(i==a)r=o=0;else{var s=i-a;switch(o=l>.5?s/(2-i-a):s/(i+a),i){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,l}}function Pd(e,t,n){e=pe(e,255),t=pe(t,255),n=pe(n,255);var r,o,i=Math.max(e,t,n),a=Math.min(e,t,n),l=i,s=i-a;if(o=i===0?0:s/i,i==a)r=0;else{switch(i){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,v:l}}function Ed(e,t,n,r){var o=[Lt(Math.round(e).toString(16)),Lt(Math.round(t).toString(16)),Lt(Math.round(n).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Od(e,t,n,r){return[Lt(Cp(r)),Lt(Math.round(e).toString(16)),Lt(Math.round(t).toString(16)),Lt(Math.round(n).toString(16))].join("")}function Yv(e,t){t=t===0?0:t||10;var n=I(e).toHsl();return n.s-=t/100,n.s=fl(n.s),I(n)}function Gv(e,t){t=t===0?0:t||10;var n=I(e).toHsl();return n.s+=t/100,n.s=fl(n.s),I(n)}function Jv(e){return I(e).desaturate(100)}function Zv(e,t){t=t===0?0:t||10;var n=I(e).toHsl();return n.l+=t/100,n.l=fl(n.l),I(n)}function eg(e,t){t=t===0?0:t||10;var n=I(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),I(n)}function tg(e,t){t=t===0?0:t||10;var n=I(e).toHsl();return n.l-=t/100,n.l=fl(n.l),I(n)}function ng(e,t){var n=I(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,I(n)}function rg(e){var t=I(e).toHsl();return t.h=(t.h+180)%360,I(t)}function Cd(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=I(e).toHsl(),r=[I(e)],o=360/t,i=1;i<t;i++)r.push(I({h:(n.h+i*o)%360,s:n.s,l:n.l}));return r}function og(e){var t=I(e).toHsl(),n=t.h;return[I(e),I({h:(n+72)%360,s:t.s,l:t.l}),I({h:(n+216)%360,s:t.s,l:t.l})]}function ig(e,t,n){t=t||6,n=n||30;var r=I(e).toHsl(),o=360/n,i=[I(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(I(r));return i}function ag(e,t){t=t||6;for(var n=I(e).toHsv(),r=n.h,o=n.s,i=n.v,a=[],l=1/t;t--;)a.push(I({h:r,s:o,v:i})),i=(i+l)%1;return a}I.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=Op(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Pd(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Pd(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Sd(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Sd(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Ed(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(t,n,r,o,i){var a=[Lt(Math.round(t).toString(16)),Lt(Math.round(n).toString(16)),Lt(Math.round(r).toString(16)),Lt(Cp(o))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*pe(this._r,255))+"%",g:Math.round(100*pe(this._g,255))+"%",b:Math.round(100*pe(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*pe(this._r,255))+"%, "+Math.round(100*pe(this._g,255))+"%, "+Math.round(100*pe(this._b,255))+"%)":"rgba("+Math.round(100*pe(this._r,255))+"%, "+Math.round(100*pe(this._g,255))+"%, "+Math.round(100*pe(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(lg[Ed(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+Od(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=I(e);n="#"+Od(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return I(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(Zv,arguments)},brighten:function(){return this._applyModification(eg,arguments)},darken:function(){return this._applyModification(tg,arguments)},desaturate:function(){return this._applyModification(Yv,arguments)},saturate:function(){return this._applyModification(Gv,arguments)},greyscale:function(){return this._applyModification(Jv,arguments)},spin:function(){return this._applyModification(ng,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(ig,arguments)},complement:function(){return this._applyCombination(rg,arguments)},monochromatic:function(){return this._applyCombination(ag,arguments)},splitcomplement:function(){return this._applyCombination(og,arguments)},triad:function(){return this._applyCombination(Cd,[3])},tetrad:function(){return this._applyCombination(Cd,[4])}},I.fromRatio=function(e,t){if(Va(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=r==="a"?e[r]:Ao(e[r]));e=n}return I(e,t)},I.equals=function(e,t){return!(!e||!t)&&I(e).toRgbString()==I(t).toRgbString()},I.random=function(){return I.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},I.mix=function(e,t,n){n=n===0?0:n||50;var r=I(e).toRgb(),o=I(t).toRgb(),i=n/100;return I({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},I.readability=function(e,t){var n=I(e),r=I(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},I.isReadable=function(e,t,n){var r,o,i=I.readability(e,t);switch(o=!1,(r=function(a){var l,s;return l=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(a.size||"small").toLowerCase(),l!=="AA"&&l!=="AAA"&&(l="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:l,size:s}}(n)).level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7}return o},I.mostReadable=function(e,t,n){var r,o,i,a,l=null,s=0;o=(n=n||{}).includeFallbackColors,i=n.level,a=n.size;for(var u=0;u<t.length;u++)(r=I.readability(e,t[u]))>s&&(s=r,l=I(t[u]));return I.isReadable(e,l,{level:i,size:a})||!o?l:(n.includeFallbackColors=!1,I.mostReadable(e,["#fff","#000"],n))};var Ws=I.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},lg=I.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(Ws);function Op(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function pe(e,t){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function fl(e){return Math.min(1,Math.max(0,e))}function st(e){return parseInt(e,16)}function Lt(e){return e.length==1?"0"+e:""+e}function Ao(e){return e<=1&&(e=100*e+"%"),e}function Cp(e){return Math.round(255*parseFloat(e)).toString(16)}function _d(e){return st(e)/255}var bn,Ji,Zi,Ct=(Ji="[\\s|\\(]+("+(bn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+bn+")[,|\\s]+("+bn+")\\s*\\)?",Zi="[\\s|\\(]+("+bn+")[,|\\s]+("+bn+")[,|\\s]+("+bn+")[,|\\s]+("+bn+")\\s*\\)?",{CSS_UNIT:new RegExp(bn),rgb:new RegExp("rgb"+Ji),rgba:new RegExp("rgba"+Zi),hsl:new RegExp("hsl"+Ji),hsla:new RegExp("hsla"+Zi),hsv:new RegExp("hsv"+Ji),hsva:new RegExp("hsva"+Zi),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function en(e){return!!Ct.CSS_UNIT.exec(e)}var wr=function(e,t){var n=(typeof e=="string"?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=n,o=parseFloat(t),i=o+r*(o/5)*-1;return(i==0||i<=Number.EPSILON)&&(i=.1),{animationPeriod:i+"s"}}return{animationPeriod:t}},xr=function(e,t){var n=e||{},r="";switch(t){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(n.fontSize){var i=n.fontSize;o=function(a,l){var s={};for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&l.indexOf(u)<0&&(s[u]=a[u]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function"){var d=0;for(u=Object.getOwnPropertySymbols(a);d<u.length;d++)l.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(a,u[d])&&(s[u[d]]=a[u[d]])}return s}(n,["fontSize"]),r=i}return{fontSize:r,styles:o}},sg={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},kr=function(e){var t=e.className,n=e.text,r=e.textColor,o=e.staticText,i=e.style;return n?V.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:B(B(B({},o&&sg),r&&{color:r,mixBlendMode:"unset"}),i&&i)},typeof n=="string"&&n.length?n:"loading"):null},Nt="rgb(50, 205, 50)";function Sr(e,t){t===void 0&&(t=0);var n=[];return function r(o,i){return i===void 0&&(i=0),n.push.apply(n,o),n.length<i&&r(n,i),n.slice(0,i)}(e,t)}De(`.atom-rli-bounding-box {
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
}`);I(Nt).toRgb();Array.from({length:4},function(e,t){return"--atom-phase".concat(t+1,"-rgb")});De(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--commet-phase".concat(t+1,"-color")});De(`.OP-annulus-rli-bounding-box {
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
}`);var ea=Array.from({length:4},function(e,t){return"--OP-annulus-phase".concat(t+1,"-color")}),ug=function(e){var t,n=xr(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=wr(e==null?void 0:e.speedPlus,"1.5s").animationPeriod,l=function(u){var d={},c=ea.length;if(u instanceof Array){for(var h=Sr(u,c),w=0;w<h.length&&!(w>=4);w++)d[ea[w]]=h[w];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var y=0;y<c;y++)d[ea[y]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),y=0;y<c;y++)d[ea[y]]=Nt}return d}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e!=null&&e.dense?4.3:2.9;return V.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:B(B(B(B(B({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},V.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},V.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},V.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:s,strokeMiterlimit:"10"})),V.createElement(kr,{className:"OP-annulus-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};function Xl(e){return e&&e.Math===Math&&e}De(`.OP-dotted-rli-bounding-box {
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
}`);var _r=Xl(typeof window=="object"&&window)||Xl(typeof self=="object"&&self)||Xl(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function _p(){var e,t;return!((e=_r==null?void 0:_r.crypto)===null||e===void 0)&&e.randomUUID?_r.crypto.randomUUID():!((t=_r==null?void 0:_r.btoa)===null||t===void 0)&&t.name?_r.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var ta=Array.from({length:4},function(e,t){return"--OP-dotted-phase".concat(t+1,"-color")}),cg=function(e){var t,n=xr(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=wr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(u){var d={},c=ta.length;if(u instanceof Array){for(var h=Sr(u,c),w=0;w<h.length&&!(w>=4);w++)d[ta[w]]=h[w];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var y=0;y<c;y++)d[ta[y]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),y=0;y<c;y++)d[ta[y]]=Nt}return d}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e!=null&&e.dense?16:12;return V.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:B(B(B(B(B({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},V.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:s}).map(function(u,d){var c=function(y,m,P){if(m===16){var p=360*y/m,f=m-y,v=Number.parseFloat(P)/m*f*-1;return{transform:"rotate(".concat(p,"deg)"),animationDelay:"".concat(v,"s")}}return{transform:"",animationDelay:""}}(d,s,a),h=c.animationDelay,w=c.transform;return V.createElement("span",{key:_p(),className:"rli-d-i-b dot-shape-holder",style:w?{transform:w}:void 0},V.createElement("span",{className:"dot",style:h?{animationDelay:h}:void 0}))}),V.createElement(kr,{className:"OP-dotted-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};De(`.OP-spokes-rli-bounding-box {
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
}`);var na=Array.from({length:4},function(e,t){return"--OP-spokes-phase".concat(t+1,"-color")}),dg=function(e){var t,n=xr(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=wr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(u){var d={},c=na.length;if(u instanceof Array){for(var h=Sr(u,c),w=0;w<h.length&&!(w>=4);w++)d[na[w]]=h[w];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var y=0;y<c;y++)d[na[y]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),y=0;y<c;y++)d[na[y]]=Nt}return d}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e!=null&&e.dense?16:12;return V.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:B(B(B(B(B({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},V.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:s},function(u,d){return V.createElement("span",{key:_p(),className:"rli-d-i-b spoke",style:fg(d,s,a)})})),V.createElement(kr,{text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};function fg(e,t,n){if(t===16){var r=t-e,o=Number.parseFloat(n)/t;return{transform:"rotate(".concat(360*e/t,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((r-1)*o*-1,"s")}}}De(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);var ra=Array.from({length:4},function(e,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")}),hg=function(e){var t,n=xr(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=wr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(u){var d={},c=ra.length;if(u instanceof Array){for(var h=Sr(u,c),w=0;w<h.length&&!(w>=4);w++)d[ra[w]]=h[w];return d}try{if(typeof u!="string")throw new Error("Color String expected");for(var y=0;y<c;y++)d[ra[y]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),y=0;y<c;y++)d[ra[y]]=Nt}return d}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e.dense?"0.45em":"";return V.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:B(B(B(B(B({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},V.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},V.createElement("span",{className:"rli-d-i-b annulus-sectors",style:B({},s&&{borderWidth:s})}),V.createElement(kr,{className:"OP-annulus-dual-sectors-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};De(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);var zo=Array.from({length:4},function(e,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]}),oa=function(e){return e===void 0&&(e=1),.25*e},pg=function(e){var t,n=xr(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=wr(e==null?void 0:e.speedPlus,"1s").animationPeriod,l=function(u){var d={},c=zo.length;if(u instanceof Array){for(var h=Sr(u,c),w=0;w<h.length&&!(w>=4);w++){var y=zo[w];try{if(!(p=I(h[w])).isValid())throw new Error("Invalid Color: ".concat(p.getOriginalInput()));var m=p.setAlpha(oa(p.getAlpha())).toRgbString(),P=h[w];d[y[0]]=m,d[y[1]]=P}catch{P=Nt,m=(p=I(Nt)).setAlpha(oa(p.getAlpha())).toRgbString(),d[y[0]]=m,d[y[1]]=P}}return d}try{var p=I(u);if(typeof u!="string")throw new Error("Color String expected");if(!p.isValid())throw new Error("Invalid Color: ".concat(p.getOriginalInput()));P=u,m=p.setAlpha(oa(p.getAlpha())).toRgbString();for(var f=0;f<c;f++)d[(y=zo[f])[0]]=m,d[y[1]]=P}catch(v){for(v instanceof Error?console.warn("[".concat(v.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),P=Nt,m=(p=I(Nt)).setAlpha(oa(p.getAlpha())).toRgbString(),f=0;f<zo.length;f++)d[(y=zo[f])[0]]=m,d[y[1]]=P}return d}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e.dense?"0.45em":"";return V.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:B(B(B(B(B({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},V.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},V.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:B({},s&&{borderWidth:s})}),V.createElement(kr,{className:"OP-annulus-sector-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))},mg=function(e){var t=Object(e).variant,n=t===void 0?"disc":t;return n==="dotted"?V.createElement(cg,B({},e)):n==="spokes"?V.createElement(dg,B({},e)):n==="disc"?V.createElement(ug,B({},e)):n==="split-disc"?V.createElement(hg,B({},e)):n==="track-disc"?V.createElement(pg,B({},e)):null};De(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--four-square-phase".concat(t+1,"-color")});De(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--mosaic-phase".concat(t+1,"-color")});De(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--riple-phase".concat(t+1,"-color")});De(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--TD-pulsate-phase".concat(t+1,"-color")});De(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--TD-brick-stack-phase".concat(t+1,"-color")});De(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--TD-bob-phase".concat(t+1,"-color")});De(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--TD-bounce-phase".concat(t+1,"-color")});De(`.blink-blur-rli-bounding-box {
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
}`);var ia=Array.from({length:4},function(e,t){return"--shape-phase".concat(t+1,"-color")}),V1=function(e){var t,n=xr(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=wr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(s){var u={},d=ia.length;if(Array.isArray(s)&&s.length>0){for(var c=Sr(s,d),h=0;h<c.length&&!(h>d-1);h++){var w=c[h];u[ia[h]]=w}return u}try{if(typeof s!="string")throw new Error("Color String expected");for(h=0;h<d;h++)u[ia[h]]=s}catch(y){for(y instanceof Error?console.warn("[".concat(y.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s)," received in <BlinkBlur /> indicator cannot be processed. Using default instead!")),h=0;h<d;h++)u[ia[h]]=Nt}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return V.createElement("span",{className:"rli-d-i-b blink-blur-rli-bounding-box",style:B(B(B(B(B({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},V.createElement("span",{className:"rli-d-i-b blink-blur-indicator"},V.createElement("span",{className:"blink-blur-shape blink-blur-shape1"}),V.createElement("span",{className:"blink-blur-shape blink-blur-shape2"}),V.createElement("span",{className:"blink-blur-shape blink-blur-shape3"}),V.createElement("span",{className:"blink-blur-shape blink-blur-shape4"}),V.createElement("span",{className:"blink-blur-shape blink-blur-shape5"})),V.createElement(kr,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor,style:{marginTop:"0.8em"}}))};De(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--trophySpin-phase".concat(t+1,"-color")});De(`.slab-rli-bounding-box {
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
}`);var Rr=Array.from({length:4},function(e,t){return"--slab-phase".concat(t+1,"-color")}),vg=function(e){var t,n=xr(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=wr(e==null?void 0:e.speedPlus,"3s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var d=Sr(s,Rr.length),c=0;c<d.length&&!(c>=4);c++)u[Rr[c]]=d[c];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var h=0;h<Rr.length;h++)u[Rr[h]]=s}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s)," received in <Slab /> indicator cannot be processed. Using default instead!")),h=0;h<Rr.length;h++)u[Rr[h]]=Nt}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return V.createElement("span",{className:"rli-d-i-b slab-rli-bounding-box",style:B(B(B(B(B({},o&&{fontSize:o}),a&&{"--rli-animation-duration-unitless":parseFloat(a)}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},V.createElement("span",{className:"rli-d-i-b slab-indicator"},V.createElement("span",{className:"slabs-wrapper"},V.createElement("span",{className:"slab"}),V.createElement("span",{className:"slab"}),V.createElement("span",{className:"slab"}),V.createElement("span",{className:"slab"}))),V.createElement(kr,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};De(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--life-line-phase".concat(t+1,"-color")});const gg=E.createContext({});function yg({children:e}){const[t,n]=E.useState(!1),[r,o]=E.useState(!0),i=E.useRef(!1),a=E.useCallback(u=>{if(i.current){console.warn("当前已经存在一个 loading 实例了");return}n(!0),o(u??!0),i.current=!0},[]),l=E.useCallback(()=>{n(!1),i.current=!1},[]),s=E.useMemo(()=>({showLoading:a,hideLoading:l}),[a,l]);return G.jsxs(gg.Provider,{value:s,children:[e,t&&G.jsx(bg,{mask:r})]})}function bg({mask:e=!0,text:t="数据玩命加载中..."}){return G.jsx("div",{className:Ep("loading-overlay  inset-0 fixed flex items-center justify-center bg-black bg-opacity-40",{"pointer-events-none":!e}),children:G.jsxs("div",{className:"loading-content flex items-center justify-center flex-col",children:[G.jsx(mg,{color:"#41d9ce",size:"medium",text:"",textColor:""}),t&&G.jsx("p",{className:"font-bold text-md text-white shadow",children:t})]})})}const wg="modulepreload",xg=function(e){return"/project-preview/"+e},Rd={},Pr=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(s=>{if(s=xg(s),s in Rd)return;Rd[s]=!0;const u=s.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${d}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":wg,u||(c.as="script"),c.crossOrigin="",c.href=s,l&&c.setAttribute("nonce",l),document.head.appendChild(c),u)return new Promise((h,w)=>{c.addEventListener("load",h),c.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${s}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return o.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ve(){return ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ve.apply(this,arguments)}var _e;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_e||(_e={}));const zd="popstate";function kg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return fi("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:gr(o)}return Pg(t,n,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ho(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Sg(){return Math.random().toString(36).substr(2,8)}function Td(e,t){return{usr:e.state,key:e.key,idx:t}}function fi(e,t,n,r){return n===void 0&&(n=null),ve({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kn(t):t,{state:n,key:t&&t.key||r||Sg()})}function gr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Pg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=_e.Pop,s=null,u=d();u==null&&(u=0,a.replaceState(ve({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function c(){l=_e.Pop;let P=d(),p=P==null?null:P-u;u=P,s&&s({action:l,location:m.location,delta:p})}function h(P,p){l=_e.Push;let f=fi(m.location,P,p);u=d()+1;let v=Td(f,u),k=m.createHref(f);try{a.pushState(v,"",k)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(k)}i&&s&&s({action:l,location:m.location,delta:1})}function w(P,p){l=_e.Replace;let f=fi(m.location,P,p);u=d();let v=Td(f,u),k=m.createHref(f);a.replaceState(v,"",k),i&&s&&s({action:l,location:m.location,delta:0})}function y(P){let p=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof P=="string"?P:gr(P);return f=f.replace(/ $/,"%20"),J(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let m={get action(){return l},get location(){return e(o,a)},listen(P){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(zd,c),s=P,()=>{o.removeEventListener(zd,c),s=null}},createHref(P){return t(o,P)},createURL:y,encodeLocation(P){let p=y(P);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:w,go(P){return a.go(P)}};return m}var ae;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ae||(ae={}));const Eg=new Set(["lazy","caseSensitive","path","id","index","children"]);function Og(e){return e.index===!0}function hi(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let a=[...n,String(i)],l=typeof o.id=="string"?o.id:a.join("-");if(J(o.index!==!0||!o.children,"Cannot specify children on an index route"),J(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),Og(o)){let s=ve({},o,t(o),{id:l});return r[l]=s,s}else{let s=ve({},o,t(o),{id:l,children:void 0});return r[l]=s,o.children&&(s.children=hi(o.children,t,a,r)),s}})}function tr(e,t,n){return n===void 0&&(n="/"),wa(e,t,n,!1)}function wa(e,t,n,r){let o=typeof t=="string"?Kn(t):t,i=go(o.pathname||"/",n);if(i==null)return null;let a=Rp(e);_g(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let u=Ig(i);l=jg(a[s],u,r)}return l}function Cg(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function Rp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(J(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=sn([r,s.relativePath]),d=n.concat(s);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Rp(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Ng(u,i.index),routesMeta:d})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of zp(i.path))o(i,a,s)}),t}function zp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=zp(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function _g(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Fg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Rg=/^:[\w-]+$/,zg=3,Tg=2,Dg=1,Mg=10,Lg=-2,Dd=e=>e==="*";function Ng(e,t){let n=e.split("/"),r=n.length;return n.some(Dd)&&(r+=Lg),t&&(r+=Tg),n.filter(o=>!Dd(o)).reduce((o,i)=>o+(Rg.test(i)?zg:i===""?Dg:Mg),r)}function Fg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function jg(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",c=Md({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},d),h=s.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Md({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},d)),!c)return null;Object.assign(o,c.params),a.push({params:o,pathname:sn([i,c.pathname]),pathnameBase:qg(sn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=sn([i,c.pathnameBase]))}return a}function Md(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ag(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:w}=d;if(h==="*"){let m=l[c]||"";a=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const y=l[c];return w&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function Ag(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ho(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Ig(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ho(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function go(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ug(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Kn(e):e;return{pathname:n?n.startsWith("/")?n:$g(n,t):t,search:Hg(r),hash:Bg(o)}}function $g(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Yl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function hl(e,t){let n=Tp(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pl(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Kn(e):(o=ve({},e),J(!o.pathname||!o.pathname.includes("?"),Yl("?","pathname","search",o)),J(!o.pathname||!o.pathname.includes("#"),Yl("#","pathname","hash",o)),J(!o.search||!o.search.includes("#"),Yl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else{let c=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),c-=1;o.pathname=h.join("/")}l=c>=0?t[c]:"/"}let s=Ug(o,l),u=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const sn=e=>e.join("/").replace(/\/\/+/g,"/"),qg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Hg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Qa{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ml(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dp=["post","put","patch","delete"],Vg=new Set(Dp),Qg=["get",...Dp],Wg=new Set(Qg),Kg=new Set([301,302,303,307,308]),Xg=new Set([307,308]),Gl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Yg={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},To={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ku=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gg=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Mp="remix-router-transitions";function Jg(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;J(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let b=e.detectErrorBoundary;o=x=>({hasErrorBoundary:b(x)})}else o=Gg;let i={},a=hi(e.routes,o,void 0,i),l,s=e.basename||"/",u=e.unstable_dataStrategy||oy,d=e.unstable_patchRoutesOnNavigation,c=ve({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),h=null,w=new Set,y=1e3,m=new Set,P=null,p=null,f=null,v=e.hydrationData!=null,k=tr(a,e.history.location,s),C=null;if(k==null&&!d){let b=Ke(404,{pathname:e.history.location.pathname}),{matches:x,route:S}=qd(a);k=x,C={[S.id]:b}}k&&!e.hydrationData&&_i(k,a,e.history.location.pathname).active&&(k=null);let z;if(k)if(k.some(b=>b.route.lazy))z=!1;else if(!k.some(b=>b.route.loader))z=!0;else if(c.v7_partialHydration){let b=e.hydrationData?e.hydrationData.loaderData:null,x=e.hydrationData?e.hydrationData.errors:null,S=_=>_.route.loader?typeof _.route.loader=="function"&&_.route.loader.hydrate===!0?!1:b&&b[_.route.id]!==void 0||x&&x[_.route.id]!==void 0:!0;if(x){let _=k.findIndex(N=>x[N.route.id]!==void 0);z=k.slice(0,_+1).every(S)}else z=k.every(S)}else z=e.hydrationData!=null;else if(z=!1,k=[],c.v7_partialHydration){let b=_i(null,a,e.history.location.pathname);b.active&&b.matches&&(k=b.matches)}let T,g={historyAction:e.history.action,location:e.history.location,matches:k,initialized:z,navigation:Gl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||C,fetchers:new Map,blockers:new Map},M=_e.Pop,j=!1,K,le=!1,Oe=new Map,we=null,It=!1,Et=!1,pn=[],L=new Set,A=new Map,W=0,se=-1,ce=new Map,et=new Set,tt=new Map,Xt=new Map,Fe=new Set,gt=new Map,Yn=new Map,nm=new Map,Pi;function rm(){if(h=e.history.listen(b=>{let{action:x,location:S,delta:_}=b;if(Pi){Pi(),Pi=void 0;return}ho(Yn.size===0||_!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let N=sc({currentLocation:g.location,nextLocation:S,historyAction:x});if(N&&_!=null){let q=new Promise(Q=>{Pi=Q});e.history.go(_*-1),Oi(N,{state:"blocked",location:S,proceed(){Oi(N,{state:"proceeding",proceed:void 0,reset:void 0,location:S}),q.then(()=>e.history.go(_))},reset(){let Q=new Map(g.blockers);Q.set(N,To),Qe({blockers:Q})}});return}return Gn(x,S)}),n){by(t,Oe);let b=()=>wy(t,Oe);t.addEventListener("pagehide",b),we=()=>t.removeEventListener("pagehide",b)}return g.initialized||Gn(_e.Pop,g.location,{initialHydration:!0}),T}function om(){h&&h(),we&&we(),w.clear(),K&&K.abort(),g.fetchers.forEach((b,x)=>Ei(x)),g.blockers.forEach((b,x)=>lc(x))}function im(b){return w.add(b),()=>w.delete(b)}function Qe(b,x){x===void 0&&(x={}),g=ve({},g,b);let S=[],_=[];c.v7_fetcherPersist&&g.fetchers.forEach((N,q)=>{N.state==="idle"&&(Fe.has(q)?_.push(q):S.push(q))}),[...w].forEach(N=>N(g,{deletedFetchers:_,unstable_viewTransitionOpts:x.viewTransitionOpts,unstable_flushSync:x.flushSync===!0})),c.v7_fetcherPersist&&(S.forEach(N=>g.fetchers.delete(N)),_.forEach(N=>Ei(N)))}function Er(b,x,S){var _,N;let{flushSync:q}=S===void 0?{}:S,Q=g.actionData!=null&&g.navigation.formMethod!=null&&Dt(g.navigation.formMethod)&&g.navigation.state==="loading"&&((_=b.state)==null?void 0:_._isRedirect)!==!0,D;x.actionData?Object.keys(x.actionData).length>0?D=x.actionData:D=null:Q?D=g.actionData:D=null;let H=x.loaderData?Ud(g.loaderData,x.loaderData,x.matches||[],x.errors):g.loaderData,U=g.blockers;U.size>0&&(U=new Map(U),U.forEach((oe,de)=>U.set(de,To)));let $=j===!0||g.navigation.formMethod!=null&&Dt(g.navigation.formMethod)&&((N=b.state)==null?void 0:N._isRedirect)!==!0;l&&(a=l,l=void 0),It||M===_e.Pop||(M===_e.Push?e.history.push(b,b.state):M===_e.Replace&&e.history.replace(b,b.state));let ne;if(M===_e.Pop){let oe=Oe.get(g.location.pathname);oe&&oe.has(b.pathname)?ne={currentLocation:g.location,nextLocation:b}:Oe.has(b.pathname)&&(ne={currentLocation:b,nextLocation:g.location})}else if(le){let oe=Oe.get(g.location.pathname);oe?oe.add(b.pathname):(oe=new Set([b.pathname]),Oe.set(g.location.pathname,oe)),ne={currentLocation:g.location,nextLocation:b}}Qe(ve({},x,{actionData:D,loaderData:H,historyAction:M,location:b,initialized:!0,navigation:Gl,revalidation:"idle",restoreScrollPosition:cc(b,x.matches||g.matches),preventScrollReset:$,blockers:U}),{viewTransitionOpts:ne,flushSync:q===!0}),M=_e.Pop,j=!1,le=!1,It=!1,Et=!1,pn=[]}async function ec(b,x){if(typeof b=="number"){e.history.go(b);return}let S=Ks(g.location,g.matches,s,c.v7_prependBasename,b,c.v7_relativeSplatPath,x==null?void 0:x.fromRouteId,x==null?void 0:x.relative),{path:_,submission:N,error:q}=Ld(c.v7_normalizeFormMethod,!1,S,x),Q=g.location,D=fi(g.location,_,x&&x.state);D=ve({},D,e.history.encodeLocation(D));let H=x&&x.replace!=null?x.replace:void 0,U=_e.Push;H===!0?U=_e.Replace:H===!1||N!=null&&Dt(N.formMethod)&&N.formAction===g.location.pathname+g.location.search&&(U=_e.Replace);let $=x&&"preventScrollReset"in x?x.preventScrollReset===!0:void 0,ne=(x&&x.unstable_flushSync)===!0,oe=sc({currentLocation:Q,nextLocation:D,historyAction:U});if(oe){Oi(oe,{state:"blocked",location:D,proceed(){Oi(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:D}),ec(b,x)},reset(){let de=new Map(g.blockers);de.set(oe,To),Qe({blockers:de})}});return}return await Gn(U,D,{submission:N,pendingError:q,preventScrollReset:$,replace:x&&x.replace,enableViewTransition:x&&x.unstable_viewTransition,flushSync:ne})}function am(){if(bl(),Qe({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Gn(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Gn(M||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation,enableViewTransition:le===!0})}}async function Gn(b,x,S){K&&K.abort(),K=null,M=b,It=(S&&S.startUninterruptedRevalidation)===!0,vm(g.location,g.matches),j=(S&&S.preventScrollReset)===!0,le=(S&&S.enableViewTransition)===!0;let _=l||a,N=S&&S.overrideNavigation,q=tr(_,x,s),Q=(S&&S.flushSync)===!0,D=_i(q,_,x.pathname);if(D.active&&D.matches&&(q=D.matches),!q){let{error:ee,notFoundMatches:Me,route:Ce}=wl(x.pathname);Er(x,{matches:Me,loaderData:{},errors:{[Ce.id]:ee}},{flushSync:Q});return}if(g.initialized&&!Et&&cy(g.location,x)&&!(S&&S.submission&&Dt(S.submission.formMethod))){Er(x,{matches:q},{flushSync:Q});return}K=new AbortController;let H=zr(e.history,x,K.signal,S&&S.submission),U;if(S&&S.pendingError)U=[Hr(q).route.id,{type:ae.error,error:S.pendingError}];else if(S&&S.submission&&Dt(S.submission.formMethod)){let ee=await lm(H,x,S.submission,q,D.active,{replace:S.replace,flushSync:Q});if(ee.shortCircuited)return;if(ee.pendingActionResult){let[Me,Ce]=ee.pendingActionResult;if(dt(Ce)&&ml(Ce.error)&&Ce.error.status===404){K=null,Er(x,{matches:ee.matches,loaderData:{},errors:{[Me]:Ce.error}});return}}q=ee.matches||q,U=ee.pendingActionResult,N=Jl(x,S.submission),Q=!1,D.active=!1,H=zr(e.history,H.url,H.signal)}let{shortCircuited:$,matches:ne,loaderData:oe,errors:de}=await sm(H,x,q,D.active,N,S&&S.submission,S&&S.fetcherSubmission,S&&S.replace,S&&S.initialHydration===!0,Q,U);$||(K=null,Er(x,ve({matches:ne||q},$d(U),{loaderData:oe,errors:de})))}async function lm(b,x,S,_,N,q){q===void 0&&(q={}),bl();let Q=gy(x,S);if(Qe({navigation:Q},{flushSync:q.flushSync===!0}),N){let U=await Ri(_,x.pathname,b.signal);if(U.type==="aborted")return{shortCircuited:!0};if(U.type==="error"){let{boundaryId:$,error:ne}=Ci(x.pathname,U);return{matches:U.partialMatches,pendingActionResult:[$,{type:ae.error,error:ne}]}}else if(U.matches)_=U.matches;else{let{notFoundMatches:$,error:ne,route:oe}=wl(x.pathname);return{matches:$,pendingActionResult:[oe.id,{type:ae.error,error:ne}]}}}let D,H=Io(_,x);if(!H.route.action&&!H.route.lazy)D={type:ae.error,error:Ke(405,{method:b.method,pathname:x.pathname,routeId:H.route.id})};else if(D=(await wo("action",g,b,[H],_,null))[H.route.id],b.signal.aborted)return{shortCircuited:!0};if(ir(D)){let U;return q&&q.replace!=null?U=q.replace:U=jd(D.response.headers.get("Location"),new URL(b.url),s)===g.location.pathname+g.location.search,await Jn(b,D,!0,{submission:S,replace:U}),{shortCircuited:!0}}if(Ln(D))throw Ke(400,{type:"defer-action"});if(dt(D)){let U=Hr(_,H.route.id);return(q&&q.replace)!==!0&&(M=_e.Push),{matches:_,pendingActionResult:[U.route.id,D]}}return{matches:_,pendingActionResult:[H.route.id,D]}}async function sm(b,x,S,_,N,q,Q,D,H,U,$){let ne=N||Jl(x,q),oe=q||Q||Bd(ne),de=!It&&(!c.v7_partialHydration||!H);if(_){if(de){let xe=tc($);Qe(ve({navigation:ne},xe!==void 0?{actionData:xe}:{}),{flushSync:U})}let X=await Ri(S,x.pathname,b.signal);if(X.type==="aborted")return{shortCircuited:!0};if(X.type==="error"){let{boundaryId:xe,error:lt}=Ci(x.pathname,X);return{matches:X.partialMatches,loaderData:{},errors:{[xe]:lt}}}else if(X.matches)S=X.matches;else{let{error:xe,notFoundMatches:lt,route:ke}=wl(x.pathname);return{matches:lt,loaderData:{},errors:{[ke.id]:xe}}}}let ee=l||a,[Me,Ce]=Nd(e.history,g,S,oe,x,c.v7_partialHydration&&H===!0,c.v7_skipActionErrorRevalidation,Et,pn,L,Fe,tt,et,ee,s,$);if(xl(X=>!(S&&S.some(xe=>xe.route.id===X))||Me&&Me.some(xe=>xe.route.id===X)),se=++W,Me.length===0&&Ce.length===0){let X=ic();return Er(x,ve({matches:S,loaderData:{},errors:$&&dt($[1])?{[$[0]]:$[1].error}:null},$d($),X?{fetchers:new Map(g.fetchers)}:{}),{flushSync:U}),{shortCircuited:!0}}if(de){let X={};if(!_){X.navigation=ne;let xe=tc($);xe!==void 0&&(X.actionData=xe)}Ce.length>0&&(X.fetchers=um(Ce)),Qe(X,{flushSync:U})}Ce.forEach(X=>{A.has(X.key)&&vn(X.key),X.controller&&A.set(X.key,X.controller)});let xo=()=>Ce.forEach(X=>vn(X.key));K&&K.signal.addEventListener("abort",xo);let{loaderResults:Gt,fetcherResults:Or}=await nc(g,S,Me,Ce,b);if(b.signal.aborted)return{shortCircuited:!0};K&&K.signal.removeEventListener("abort",xo),Ce.forEach(X=>A.delete(X.key));let gn=aa(Gt);if(gn)return await Jn(b,gn.result,!0,{replace:D}),{shortCircuited:!0};if(gn=aa(Or),gn)return et.add(gn.key),await Jn(b,gn.result,!0,{replace:D}),{shortCircuited:!0};let{loaderData:zi,errors:Jt}=Id(g,S,Me,Gt,$,Ce,Or,gt);gt.forEach((X,xe)=>{X.subscribe(lt=>{(lt||X.done)&&gt.delete(xe)})}),c.v7_partialHydration&&H&&g.errors&&Object.entries(g.errors).filter(X=>{let[xe]=X;return!Me.some(lt=>lt.route.id===xe)}).forEach(X=>{let[xe,lt]=X;Jt=Object.assign(Jt||{},{[xe]:lt})});let Ti=ic(),Di=ac(se),Mi=Ti||Di||Ce.length>0;return ve({matches:S,loaderData:zi,errors:Jt},Mi?{fetchers:new Map(g.fetchers)}:{})}function tc(b){if(b&&!dt(b[1]))return{[b[0]]:b[1].data};if(g.actionData)return Object.keys(g.actionData).length===0?null:g.actionData}function um(b){return b.forEach(x=>{let S=g.fetchers.get(x.key),_=Do(void 0,S?S.data:void 0);g.fetchers.set(x.key,_)}),new Map(g.fetchers)}function cm(b,x,S,_){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");A.has(b)&&vn(b);let N=(_&&_.unstable_flushSync)===!0,q=l||a,Q=Ks(g.location,g.matches,s,c.v7_prependBasename,S,c.v7_relativeSplatPath,x,_==null?void 0:_.relative),D=tr(q,Q,s),H=_i(D,q,Q);if(H.active&&H.matches&&(D=H.matches),!D){Yt(b,x,Ke(404,{pathname:Q}),{flushSync:N});return}let{path:U,submission:$,error:ne}=Ld(c.v7_normalizeFormMethod,!0,Q,_);if(ne){Yt(b,x,ne,{flushSync:N});return}let oe=Io(D,U);if(j=(_&&_.preventScrollReset)===!0,$&&Dt($.formMethod)){dm(b,x,U,oe,D,H.active,N,$);return}tt.set(b,{routeId:x,path:U}),fm(b,x,U,oe,D,H.active,N,$)}async function dm(b,x,S,_,N,q,Q,D){bl(),tt.delete(b);function H(ke){if(!ke.route.action&&!ke.route.lazy){let Zt=Ke(405,{method:D.formMethod,pathname:S,routeId:x});return Yt(b,x,Zt,{flushSync:Q}),!0}return!1}if(!q&&H(_))return;let U=g.fetchers.get(b);mn(b,yy(D,U),{flushSync:Q});let $=new AbortController,ne=zr(e.history,S,$.signal,D);if(q){let ke=await Ri(N,S,ne.signal);if(ke.type==="aborted")return;if(ke.type==="error"){let{error:Zt}=Ci(S,ke);Yt(b,x,Zt,{flushSync:Q});return}else if(ke.matches){if(N=ke.matches,_=Io(N,S),H(_))return}else{Yt(b,x,Ke(404,{pathname:S}),{flushSync:Q});return}}A.set(b,$);let oe=W,ee=(await wo("action",g,ne,[_],N,b))[_.route.id];if(ne.signal.aborted){A.get(b)===$&&A.delete(b);return}if(c.v7_fetcherPersist&&Fe.has(b)){if(ir(ee)||dt(ee)){mn(b,xn(void 0));return}}else{if(ir(ee))if(A.delete(b),se>oe){mn(b,xn(void 0));return}else return et.add(b),mn(b,Do(D)),Jn(ne,ee,!1,{fetcherSubmission:D});if(dt(ee)){Yt(b,x,ee.error);return}}if(Ln(ee))throw Ke(400,{type:"defer-action"});let Me=g.navigation.location||g.location,Ce=zr(e.history,Me,$.signal),xo=l||a,Gt=g.navigation.state!=="idle"?tr(xo,g.navigation.location,s):g.matches;J(Gt,"Didn't find any matches after fetcher action");let Or=++W;ce.set(b,Or);let gn=Do(D,ee.data);g.fetchers.set(b,gn);let[zi,Jt]=Nd(e.history,g,Gt,D,Me,!1,c.v7_skipActionErrorRevalidation,Et,pn,L,Fe,tt,et,xo,s,[_.route.id,ee]);Jt.filter(ke=>ke.key!==b).forEach(ke=>{let Zt=ke.key,fc=g.fetchers.get(Zt),bm=Do(void 0,fc?fc.data:void 0);g.fetchers.set(Zt,bm),A.has(Zt)&&vn(Zt),ke.controller&&A.set(Zt,ke.controller)}),Qe({fetchers:new Map(g.fetchers)});let Ti=()=>Jt.forEach(ke=>vn(ke.key));$.signal.addEventListener("abort",Ti);let{loaderResults:Di,fetcherResults:Mi}=await nc(g,Gt,zi,Jt,Ce);if($.signal.aborted)return;$.signal.removeEventListener("abort",Ti),ce.delete(b),A.delete(b),Jt.forEach(ke=>A.delete(ke.key));let X=aa(Di);if(X)return Jn(Ce,X.result,!1);if(X=aa(Mi),X)return et.add(X.key),Jn(Ce,X.result,!1);let{loaderData:xe,errors:lt}=Id(g,Gt,zi,Di,void 0,Jt,Mi,gt);if(g.fetchers.has(b)){let ke=xn(ee.data);g.fetchers.set(b,ke)}ac(Or),g.navigation.state==="loading"&&Or>se?(J(M,"Expected pending action"),K&&K.abort(),Er(g.navigation.location,{matches:Gt,loaderData:xe,errors:lt,fetchers:new Map(g.fetchers)})):(Qe({errors:lt,loaderData:Ud(g.loaderData,xe,Gt,lt),fetchers:new Map(g.fetchers)}),Et=!1)}async function fm(b,x,S,_,N,q,Q,D){let H=g.fetchers.get(b);mn(b,Do(D,H?H.data:void 0),{flushSync:Q});let U=new AbortController,$=zr(e.history,S,U.signal);if(q){let ee=await Ri(N,S,$.signal);if(ee.type==="aborted")return;if(ee.type==="error"){let{error:Me}=Ci(S,ee);Yt(b,x,Me,{flushSync:Q});return}else if(ee.matches)N=ee.matches,_=Io(N,S);else{Yt(b,x,Ke(404,{pathname:S}),{flushSync:Q});return}}A.set(b,U);let ne=W,de=(await wo("loader",g,$,[_],N,b))[_.route.id];if(Ln(de)&&(de=await Xu(de,$.signal,!0)||de),A.get(b)===U&&A.delete(b),!$.signal.aborted){if(Fe.has(b)){mn(b,xn(void 0));return}if(ir(de))if(se>ne){mn(b,xn(void 0));return}else{et.add(b),await Jn($,de,!1);return}if(dt(de)){Yt(b,x,de.error);return}J(!Ln(de),"Unhandled fetcher deferred data"),mn(b,xn(de.data))}}async function Jn(b,x,S,_){let{submission:N,fetcherSubmission:q,replace:Q}=_===void 0?{}:_;x.response.headers.has("X-Remix-Revalidate")&&(Et=!0);let D=x.response.headers.get("Location");J(D,"Expected a Location header on the redirect Response"),D=jd(D,new URL(b.url),s);let H=fi(g.location,D,{_isRedirect:!0});if(n){let ee=!1;if(x.response.headers.has("X-Remix-Reload-Document"))ee=!0;else if(Ku.test(D)){const Me=e.history.createURL(D);ee=Me.origin!==t.location.origin||go(Me.pathname,s)==null}if(ee){Q?t.location.replace(D):t.location.assign(D);return}}K=null;let U=Q===!0||x.response.headers.has("X-Remix-Replace")?_e.Replace:_e.Push,{formMethod:$,formAction:ne,formEncType:oe}=g.navigation;!N&&!q&&$&&ne&&oe&&(N=Bd(g.navigation));let de=N||q;if(Xg.has(x.response.status)&&de&&Dt(de.formMethod))await Gn(U,H,{submission:ve({},de,{formAction:D}),preventScrollReset:j,enableViewTransition:S?le:void 0});else{let ee=Jl(H,N);await Gn(U,H,{overrideNavigation:ee,fetcherSubmission:q,preventScrollReset:j,enableViewTransition:S?le:void 0})}}async function wo(b,x,S,_,N,q){let Q,D={};try{Q=await iy(u,b,x,S,_,N,q,i,o)}catch(H){return _.forEach(U=>{D[U.route.id]={type:ae.error,error:H}}),D}for(let[H,U]of Object.entries(Q))if(fy(U)){let $=U.result;D[H]={type:ae.redirect,response:sy($,S,H,N,s,c.v7_relativeSplatPath)}}else D[H]=await ly(U);return D}async function nc(b,x,S,_,N){let q=b.matches,Q=wo("loader",b,N,S,x,null),D=Promise.all(_.map(async $=>{if($.matches&&$.match&&$.controller){let oe=(await wo("loader",b,zr(e.history,$.path,$.controller.signal),[$.match],$.matches,$.key))[$.match.route.id];return{[$.key]:oe}}else return Promise.resolve({[$.key]:{type:ae.error,error:Ke(404,{pathname:$.path})}})})),H=await Q,U=(await D).reduce(($,ne)=>Object.assign($,ne),{});return await Promise.all([my(x,H,N.signal,q,b.loaderData),vy(x,U,_)]),{loaderResults:H,fetcherResults:U}}function bl(){Et=!0,pn.push(...xl()),tt.forEach((b,x)=>{A.has(x)&&(L.add(x),vn(x))})}function mn(b,x,S){S===void 0&&(S={}),g.fetchers.set(b,x),Qe({fetchers:new Map(g.fetchers)},{flushSync:(S&&S.flushSync)===!0})}function Yt(b,x,S,_){_===void 0&&(_={});let N=Hr(g.matches,x);Ei(b),Qe({errors:{[N.route.id]:S},fetchers:new Map(g.fetchers)},{flushSync:(_&&_.flushSync)===!0})}function rc(b){return c.v7_fetcherPersist&&(Xt.set(b,(Xt.get(b)||0)+1),Fe.has(b)&&Fe.delete(b)),g.fetchers.get(b)||Yg}function Ei(b){let x=g.fetchers.get(b);A.has(b)&&!(x&&x.state==="loading"&&ce.has(b))&&vn(b),tt.delete(b),ce.delete(b),et.delete(b),Fe.delete(b),L.delete(b),g.fetchers.delete(b)}function hm(b){if(c.v7_fetcherPersist){let x=(Xt.get(b)||0)-1;x<=0?(Xt.delete(b),Fe.add(b)):Xt.set(b,x)}else Ei(b);Qe({fetchers:new Map(g.fetchers)})}function vn(b){let x=A.get(b);J(x,"Expected fetch controller: "+b),x.abort(),A.delete(b)}function oc(b){for(let x of b){let S=rc(x),_=xn(S.data);g.fetchers.set(x,_)}}function ic(){let b=[],x=!1;for(let S of et){let _=g.fetchers.get(S);J(_,"Expected fetcher: "+S),_.state==="loading"&&(et.delete(S),b.push(S),x=!0)}return oc(b),x}function ac(b){let x=[];for(let[S,_]of ce)if(_<b){let N=g.fetchers.get(S);J(N,"Expected fetcher: "+S),N.state==="loading"&&(vn(S),ce.delete(S),x.push(S))}return oc(x),x.length>0}function pm(b,x){let S=g.blockers.get(b)||To;return Yn.get(b)!==x&&Yn.set(b,x),S}function lc(b){g.blockers.delete(b),Yn.delete(b)}function Oi(b,x){let S=g.blockers.get(b)||To;J(S.state==="unblocked"&&x.state==="blocked"||S.state==="blocked"&&x.state==="blocked"||S.state==="blocked"&&x.state==="proceeding"||S.state==="blocked"&&x.state==="unblocked"||S.state==="proceeding"&&x.state==="unblocked","Invalid blocker state transition: "+S.state+" -> "+x.state);let _=new Map(g.blockers);_.set(b,x),Qe({blockers:_})}function sc(b){let{currentLocation:x,nextLocation:S,historyAction:_}=b;if(Yn.size===0)return;Yn.size>1&&ho(!1,"A router only supports one blocker at a time");let N=Array.from(Yn.entries()),[q,Q]=N[N.length-1],D=g.blockers.get(q);if(!(D&&D.state==="proceeding")&&Q({currentLocation:x,nextLocation:S,historyAction:_}))return q}function wl(b){let x=Ke(404,{pathname:b}),S=l||a,{matches:_,route:N}=qd(S);return xl(),{notFoundMatches:_,route:N,error:x}}function Ci(b,x){return{boundaryId:Hr(x.partialMatches).route.id,error:Ke(400,{type:"route-discovery",pathname:b,message:x.error!=null&&"message"in x.error?x.error:String(x.error)})}}function xl(b){let x=[];return gt.forEach((S,_)=>{(!b||b(_))&&(S.cancel(),x.push(_),gt.delete(_))}),x}function mm(b,x,S){if(P=b,f=x,p=S||null,!v&&g.navigation===Gl){v=!0;let _=cc(g.location,g.matches);_!=null&&Qe({restoreScrollPosition:_})}return()=>{P=null,f=null,p=null}}function uc(b,x){return p&&p(b,x.map(_=>Cg(_,g.loaderData)))||b.key}function vm(b,x){if(P&&f){let S=uc(b,x);P[S]=f()}}function cc(b,x){if(P){let S=uc(b,x),_=P[S];if(typeof _=="number")return _}return null}function _i(b,x,S){if(d){if(m.has(S))return{active:!1,matches:b};if(b){if(Object.keys(b[0].params).length>0)return{active:!0,matches:wa(x,S,s,!0)}}else return{active:!0,matches:wa(x,S,s,!0)||[]}}return{active:!1,matches:null}}async function Ri(b,x,S){let _=b;for(;;){let N=l==null,q=l||a;try{await ny(d,x,_,q,i,o,nm,S)}catch(H){return{type:"error",error:H,partialMatches:_}}finally{N&&(a=[...a])}if(S.aborted)return{type:"aborted"};let Q=tr(q,x,s);if(Q)return dc(x,m),{type:"success",matches:Q};let D=wa(q,x,s,!0);if(!D||_.length===D.length&&_.every((H,U)=>H.route.id===D[U].route.id))return dc(x,m),{type:"success",matches:null};_=D}}function dc(b,x){if(x.size>=y){let S=x.values().next().value;x.delete(S)}x.add(b)}function gm(b){i={},l=hi(b,o,void 0,i)}function ym(b,x){let S=l==null;Np(b,x,l||a,i,o),S&&(a=[...a],Qe({}))}return T={get basename(){return s},get future(){return c},get state(){return g},get routes(){return a},get window(){return t},initialize:rm,subscribe:im,enableScrollRestoration:mm,navigate:ec,fetch:cm,revalidate:am,createHref:b=>e.history.createHref(b),encodeLocation:b=>e.history.encodeLocation(b),getFetcher:rc,deleteFetcher:hm,dispose:om,getBlocker:pm,deleteBlocker:lc,patchRoutes:ym,_internalFetchControllers:A,_internalActiveDeferreds:gt,_internalSetRoutes:gm},T}function Zg(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ks(e,t,n,r,o,i,a,l){let s,u;if(a){s=[];for(let c of t)if(s.push(c),c.route.id===a){u=c;break}}else s=t,u=t[t.length-1];let d=pl(o||".",hl(s,i),go(e.pathname,n)||e.pathname,l==="path");return o==null&&(d.search=e.search,d.hash=e.hash),(o==null||o===""||o===".")&&u&&u.route.index&&!Yu(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:sn([n,d.pathname])),gr(d)}function Ld(e,t,n,r){if(!r||!Zg(r))return{path:n};if(r.formMethod&&!py(r.formMethod))return{path:n,error:Ke(405,{method:r.formMethod})};let o=()=>({path:n,error:Ke(400,{type:"invalid-body"})}),i=r.formMethod||"get",a=e?i.toUpperCase():i.toLowerCase(),l=Fp(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Dt(a))return o();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((w,y)=>{let[m,P]=y;return""+w+m+"="+P+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!Dt(a))return o();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return o()}}}J(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=Xs(r.formData),u=r.formData;else if(r.body instanceof FormData)s=Xs(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=Ad(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=Ad(s)}catch{return o()}let d={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Dt(d.formMethod))return{path:n,submission:d};let c=Kn(n);return t&&c.search&&Yu(c.search)&&s.append("index",""),c.search="?"+s,{path:gr(c),submission:d}}function ey(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Nd(e,t,n,r,o,i,a,l,s,u,d,c,h,w,y,m){let P=m?dt(m[1])?m[1].error:m[1].data:void 0,p=e.createURL(t.location),f=e.createURL(o),v=m&&dt(m[1])?m[0]:void 0,k=v?ey(n,v):n,C=m?m[1].statusCode:void 0,z=a&&C&&C>=400,T=k.filter((M,j)=>{let{route:K}=M;if(K.lazy)return!0;if(K.loader==null)return!1;if(i)return typeof K.loader!="function"||K.loader.hydrate?!0:t.loaderData[K.id]===void 0&&(!t.errors||t.errors[K.id]===void 0);if(ty(t.loaderData,t.matches[j],M)||s.some(we=>we===M.route.id))return!0;let le=t.matches[j],Oe=M;return Fd(M,ve({currentUrl:p,currentParams:le.params,nextUrl:f,nextParams:Oe.params},r,{actionResult:P,actionStatus:C,defaultShouldRevalidate:z?!1:l||p.pathname+p.search===f.pathname+f.search||p.search!==f.search||Lp(le,Oe)}))}),g=[];return c.forEach((M,j)=>{if(i||!n.some(It=>It.route.id===M.routeId)||d.has(j))return;let K=tr(w,M.path,y);if(!K){g.push({key:j,routeId:M.routeId,path:M.path,matches:null,match:null,controller:null});return}let le=t.fetchers.get(j),Oe=Io(K,M.path),we=!1;h.has(j)?we=!1:u.has(j)?(u.delete(j),we=!0):le&&le.state!=="idle"&&le.data===void 0?we=l:we=Fd(Oe,ve({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:P,actionStatus:C,defaultShouldRevalidate:z?!1:l})),we&&g.push({key:j,routeId:M.routeId,path:M.path,matches:K,match:Oe,controller:new AbortController})}),[T,g]}function ty(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function Lp(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Fd(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function ny(e,t,n,r,o,i,a,l){let s=[t,...n.map(u=>u.route.id)].join("-");try{let u=a.get(s);u||(u=e({path:t,matches:n,patch:(d,c)=>{l.aborted||Np(d,c,r,o,i)}}),a.set(s,u)),u&&dy(u)&&await u}finally{a.delete(s)}}function Np(e,t,n,r,o){if(e){var i;let a=r[e];J(a,"No route found to patch children into: routeId = "+e);let l=hi(t,o,[e,"patch",String(((i=a.children)==null?void 0:i.length)||"0")],r);a.children?a.children.push(...l):a.children=l}else{let a=hi(t,o,["patch",String(n.length||"0")],r);n.push(...a)}}async function ry(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];J(o,"No route found in manifest");let i={};for(let a in r){let s=o[a]!==void 0&&a!=="hasErrorBoundary";ho(!s,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!Eg.has(a)&&(i[a]=r[a])}Object.assign(o,i),Object.assign(o,ve({},t(o),{lazy:void 0}))}async function oy(e){let{matches:t}=e,n=t.filter(o=>o.shouldLoad);return(await Promise.all(n.map(o=>o.resolve()))).reduce((o,i,a)=>Object.assign(o,{[n[a].route.id]:i}),{})}async function iy(e,t,n,r,o,i,a,l,s,u){let d=i.map(w=>w.route.lazy?ry(w.route,s,l):void 0),c=i.map((w,y)=>{let m=d[y],P=o.some(f=>f.route.id===w.route.id);return ve({},w,{shouldLoad:P,resolve:async f=>(f&&r.method==="GET"&&(w.route.lazy||w.route.loader)&&(P=!0),P?ay(t,r,w,m,f,u):Promise.resolve({type:ae.data,result:void 0}))})}),h=await e({matches:c,request:r,params:i[0].params,fetcherKey:a,context:u});try{await Promise.all(d)}catch{}return h}async function ay(e,t,n,r,o,i){let a,l,s=u=>{let d,c=new Promise((y,m)=>d=m);l=()=>d(),t.signal.addEventListener("abort",l);let h=y=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:i},...y!==void 0?[y]:[]),w=(async()=>{try{return{type:"data",result:await(o?o(m=>h(m)):h())}}catch(y){return{type:"error",result:y}}})();return Promise.race([w,c])};try{let u=n.route[e];if(r)if(u){let d,[c]=await Promise.all([s(u).catch(h=>{d=h}),r]);if(d!==void 0)throw d;a=c}else if(await r,u=n.route[e],u)a=await s(u);else if(e==="action"){let d=new URL(t.url),c=d.pathname+d.search;throw Ke(405,{method:t.method,pathname:c,routeId:n.route.id})}else return{type:ae.data,result:void 0};else if(u)a=await s(u);else{let d=new URL(t.url),c=d.pathname+d.search;throw Ke(404,{pathname:c})}J(a.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:ae.error,result:u}}finally{l&&t.signal.removeEventListener("abort",l)}return a}async function ly(e){let{result:t,type:n}=e;if(jp(t)){let u;try{let d=t.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?t.body==null?u=null:u=await t.json():u=await t.text()}catch(d){return{type:ae.error,error:d}}return n===ae.error?{type:ae.error,error:new Qa(t.status,t.statusText,u),statusCode:t.status,headers:t.headers}:{type:ae.data,data:u,statusCode:t.status,headers:t.headers}}if(n===ae.error){if(Hd(t)){var r;if(t.data instanceof Error){var o;return{type:ae.error,error:t.data,statusCode:(o=t.init)==null?void 0:o.status}}t=new Qa(((r=t.init)==null?void 0:r.status)||500,void 0,t.data)}return{type:ae.error,error:t,statusCode:ml(t)?t.status:void 0}}if(hy(t)){var i,a;return{type:ae.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((a=t.init)==null?void 0:a.headers)&&new Headers(t.init.headers)}}if(Hd(t)){var l,s;return{type:ae.data,data:t.data,statusCode:(l=t.init)==null?void 0:l.status,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}}return{type:ae.data,data:t}}function sy(e,t,n,r,o,i){let a=e.headers.get("Location");if(J(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ku.test(a)){let l=r.slice(0,r.findIndex(s=>s.route.id===n)+1);a=Ks(new URL(t.url),l,o,!0,a,i),e.headers.set("Location",a)}return e}function jd(e,t,n){if(Ku.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=go(o.pathname,n)!=null;if(o.origin===t.origin&&i)return o.pathname+o.search+o.hash}return e}function zr(e,t,n,r){let o=e.createURL(Fp(t)).toString(),i={signal:n};if(r&&Dt(r.formMethod)){let{formMethod:a,formEncType:l}=r;i.method=a.toUpperCase(),l==="application/json"?(i.headers=new Headers({"Content-Type":l}),i.body=JSON.stringify(r.json)):l==="text/plain"?i.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?i.body=Xs(r.formData):i.body=r.formData}return new Request(o,i)}function Xs(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Ad(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function uy(e,t,n,r,o){let i={},a=null,l,s=!1,u={},d=n&&dt(n[1])?n[1].error:void 0;return e.forEach(c=>{if(!(c.route.id in t))return;let h=c.route.id,w=t[h];if(J(!ir(w),"Cannot handle redirect results in processLoaderData"),dt(w)){let y=w.error;d!==void 0&&(y=d,d=void 0),a=a||{};{let m=Hr(e,h);a[m.route.id]==null&&(a[m.route.id]=y)}i[h]=void 0,s||(s=!0,l=ml(w.error)?w.error.status:500),w.headers&&(u[h]=w.headers)}else Ln(w)?(r.set(h,w.deferredData),i[h]=w.deferredData.data,w.statusCode!=null&&w.statusCode!==200&&!s&&(l=w.statusCode),w.headers&&(u[h]=w.headers)):(i[h]=w.data,w.statusCode&&w.statusCode!==200&&!s&&(l=w.statusCode),w.headers&&(u[h]=w.headers))}),d!==void 0&&n&&(a={[n[0]]:d},i[n[0]]=void 0),{loaderData:i,errors:a,statusCode:l||200,loaderHeaders:u}}function Id(e,t,n,r,o,i,a,l){let{loaderData:s,errors:u}=uy(t,r,o,l);return i.forEach(d=>{let{key:c,match:h,controller:w}=d,y=a[c];if(J(y,"Did not find corresponding fetcher result"),!(w&&w.signal.aborted))if(dt(y)){let m=Hr(e.matches,h==null?void 0:h.route.id);u&&u[m.route.id]||(u=ve({},u,{[m.route.id]:y.error})),e.fetchers.delete(c)}else if(ir(y))J(!1,"Unhandled fetcher revalidation redirect");else if(Ln(y))J(!1,"Unhandled fetcher deferred data");else{let m=xn(y.data);e.fetchers.set(c,m)}}),{loaderData:s,errors:u}}function Ud(e,t,n,r){let o=ve({},t);for(let i of n){let a=i.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(o[a]=t[a]):e[a]!==void 0&&i.route.loader&&(o[a]=e[a]),r&&r.hasOwnProperty(a))break}return o}function $d(e){return e?dt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Hr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function qd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Ke(e,t){let{pathname:n,routeId:r,method:o,type:i,message:a}=t===void 0?{}:t,l="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(l="Bad Request",i==="route-discovery"?s='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+a):o&&n&&r?s="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?s="defer() is not supported in actions":i==="invalid-body"&&(s="Unable to encode submission body")):e===403?(l="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",s='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",o&&n&&r?s="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new Qa(e||500,l,new Error(s),!0)}function aa(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,o]=t[n];if(ir(o))return{key:r,result:o}}}function Fp(e){let t=typeof e=="string"?Kn(e):e;return gr(ve({},t,{hash:""}))}function cy(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function dy(e){return typeof e=="object"&&e!=null&&"then"in e}function fy(e){return jp(e.result)&&Kg.has(e.result.status)}function Ln(e){return e.type===ae.deferred}function dt(e){return e.type===ae.error}function ir(e){return(e&&e.type)===ae.redirect}function Hd(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function hy(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function jp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function py(e){return Wg.has(e.toLowerCase())}function Dt(e){return Vg.has(e.toLowerCase())}async function my(e,t,n,r,o){let i=Object.entries(t);for(let a=0;a<i.length;a++){let[l,s]=i[a],u=e.find(h=>(h==null?void 0:h.route.id)===l);if(!u)continue;let d=r.find(h=>h.route.id===u.route.id),c=d!=null&&!Lp(d,u)&&(o&&o[u.route.id])!==void 0;Ln(s)&&c&&await Xu(s,n,!1).then(h=>{h&&(t[l]=h)})}}async function vy(e,t,n){for(let r=0;r<n.length;r++){let{key:o,routeId:i,controller:a}=n[r],l=t[o];e.find(u=>(u==null?void 0:u.route.id)===i)&&Ln(l)&&(J(a,"Expected an AbortController for revalidating fetcher deferred result"),await Xu(l,a.signal,!0).then(u=>{u&&(t[o]=u)}))}}async function Xu(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ae.data,data:e.deferredData.unwrappedData}}catch(o){return{type:ae.error,error:o}}return{type:ae.data,data:e.deferredData.data}}}function Yu(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Io(e,t){let n=typeof t=="string"?Kn(t).search:t.search;if(e[e.length-1].route.index&&Yu(n||""))return e[e.length-1];let r=Tp(e);return r[r.length-1]}function Bd(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:a}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function Jl(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function gy(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Do(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function yy(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function xn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function by(e,t){try{let n=e.sessionStorage.getItem(Mp);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function wy(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(Mp,JSON.stringify(n))}catch(r){ho(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wa(){return Wa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wa.apply(this,arguments)}const vl=E.createContext(null),Ap=E.createContext(null),Xn=E.createContext(null),Gu=E.createContext(null),Kt=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Ip=E.createContext(null);function xy(e,t){let{relative:n}=t===void 0?{}:t;yo()||J(!1);let{basename:r,navigator:o}=E.useContext(Xn),{hash:i,pathname:a,search:l}=$p(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:sn([r,a])),o.createHref({pathname:s,search:l,hash:i})}function yo(){return E.useContext(Gu)!=null}function bo(){return yo()||J(!1),E.useContext(Gu).location}function Up(e){E.useContext(Xn).static||E.useLayoutEffect(e)}function Ju(){let{isDataRoute:e}=E.useContext(Kt);return e?Ny():ky()}function ky(){yo()||J(!1);let e=E.useContext(vl),{basename:t,future:n,navigator:r}=E.useContext(Xn),{matches:o}=E.useContext(Kt),{pathname:i}=bo(),a=JSON.stringify(hl(o,n.v7_relativeSplatPath)),l=E.useRef(!1);return Up(()=>{l.current=!0}),E.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=pl(u,JSON.parse(a),i,d.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:sn([t,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[t,r,a,i,e])}const Sy=E.createContext(null);function Py(e){let t=E.useContext(Kt).outlet;return t&&E.createElement(Sy.Provider,{value:e},t)}function Q1(){let{matches:e}=E.useContext(Kt),t=e[e.length-1];return t?t.params:{}}function $p(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(Xn),{matches:o}=E.useContext(Kt),{pathname:i}=bo(),a=JSON.stringify(hl(o,r.v7_relativeSplatPath));return E.useMemo(()=>pl(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function Ey(e,t,n,r){yo()||J(!1);let{navigator:o}=E.useContext(Xn),{matches:i}=E.useContext(Kt),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=bo(),d;d=u;let c=d.pathname||"/",h=c;if(s!=="/"){let m=s.replace(/^\//,"").split("/");h="/"+c.replace(/^\//,"").split("/").slice(m.length).join("/")}let w=tr(e,{pathname:h});return zy(w&&w.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:sn([s,o.encodeLocation?o.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?s:sn([s,o.encodeLocation?o.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,n,r)}function Oy(){let e=Ly(),t=ml(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,null)}const Cy=E.createElement(Oy,null);class _y extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(Kt.Provider,{value:this.props.routeContext},E.createElement(Ip.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ry(e){let{routeContext:t,match:n,children:r}=e,o=E.useContext(vl);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Kt.Provider,{value:t},r)}function zy(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let d=a.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);d>=0||J(!1),a=a.slice(0,Math.min(a.length,d+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let c=a[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:w}=n,y=c.route.loader&&h[c.route.id]===void 0&&(!w||w[c.route.id]===void 0);if(c.route.lazy||y){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,c,h)=>{let w,y=!1,m=null,P=null;n&&(w=l&&c.route.id?l[c.route.id]:void 0,m=c.route.errorElement||Cy,s&&(u<0&&h===0?(y=!0,P=null):u===h&&(y=!0,P=c.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,h+1)),f=()=>{let v;return w?v=m:y?v=P:c.route.Component?v=E.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=d,E.createElement(Ry,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?E.createElement(_y,{location:n.location,revalidation:n.revalidation,component:m,error:w,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var qp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qp||{}),Ka=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ka||{});function Ty(e){let t=E.useContext(vl);return t||J(!1),t}function Dy(e){let t=E.useContext(Ap);return t||J(!1),t}function My(e){let t=E.useContext(Kt);return t||J(!1),t}function Hp(e){let t=My(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function Ly(){var e;let t=E.useContext(Ip),n=Dy(Ka.UseRouteError),r=Hp(Ka.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ny(){let{router:e}=Ty(qp.UseNavigateStable),t=Hp(Ka.UseNavigateStable),n=E.useRef(!1);return Up(()=>{n.current=!0}),E.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Wa({fromRouteId:t},i)))},[e,t])}function Fy(e){let{to:t,replace:n,state:r,relative:o}=e;yo()||J(!1);let{future:i,static:a}=E.useContext(Xn),{matches:l}=E.useContext(Kt),{pathname:s}=bo(),u=Ju(),d=pl(t,hl(l,i.v7_relativeSplatPath),s,o==="path"),c=JSON.stringify(d);return E.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:o}),[u,c,o,n,r]),null}function jy(e){return Py(e.context)}function Ay(e){let{basename:t="/",children:n=null,location:r,navigationType:o=_e.Pop,navigator:i,static:a=!1,future:l}=e;yo()&&J(!1);let s=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:s,navigator:i,static:a,future:Wa({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=Kn(r));let{pathname:d="/",search:c="",hash:h="",state:w=null,key:y="default"}=r,m=E.useMemo(()=>{let P=go(d,s);return P==null?null:{location:{pathname:P,search:c,hash:h,state:w,key:y},navigationType:o}},[s,d,c,h,w,y,o]);return m==null?null:E.createElement(Xn.Provider,{value:u},E.createElement(Gu.Provider,{children:n,value:m}))}new Promise(()=>{});function Iy(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:E.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:E.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pi.apply(this,arguments)}function Uy(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function $y(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qy(e,t){return e.button===0&&(!t||t==="_self")&&!$y(e)}function Ys(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(o=>[n,o]):[[n,r]])},[]))}function Hy(e,t){let n=Ys(e);return t&&t.forEach((r,o)=>{n.has(o)||t.getAll(o).forEach(i=>{n.append(o,i)})}),n}const By=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Vy="6";try{window.__reactRouterVersion=Vy}catch{}function Qy(e,t){return Jg({basename:t==null?void 0:t.basename,future:pi({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:kg({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Wy(),routes:e,mapRouteProperties:Iy,unstable_dataStrategy:t==null?void 0:t.unstable_dataStrategy,unstable_patchRoutesOnNavigation:t==null?void 0:t.unstable_patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function Wy(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=pi({},t,{errors:Ky(t.errors)})),t}function Ky(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new Qa(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let a=new i(o.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const Xy=E.createContext({isTransitioning:!1}),Yy=E.createContext(new Map),Gy="startTransition",Vd=Nm[Gy],Jy="flushSync",Qd=Wv[Jy];function Zy(e){Vd?Vd(e):e()}function Mo(e){Qd?Qd(e):e()}class e1{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function t1(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=E.useState(n.state),[a,l]=E.useState(),[s,u]=E.useState({isTransitioning:!1}),[d,c]=E.useState(),[h,w]=E.useState(),[y,m]=E.useState(),P=E.useRef(new Map),{v7_startTransition:p}=r||{},f=E.useCallback(g=>{p?Zy(g):g()},[p]),v=E.useCallback((g,M)=>{let{deletedFetchers:j,unstable_flushSync:K,unstable_viewTransitionOpts:le}=M;j.forEach(we=>P.current.delete(we)),g.fetchers.forEach((we,It)=>{we.data!==void 0&&P.current.set(It,we.data)});let Oe=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!le||Oe){K?Mo(()=>i(g)):f(()=>i(g));return}if(K){Mo(()=>{h&&(d&&d.resolve(),h.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:le.currentLocation,nextLocation:le.nextLocation})});let we=n.window.document.startViewTransition(()=>{Mo(()=>i(g))});we.finished.finally(()=>{Mo(()=>{c(void 0),w(void 0),l(void 0),u({isTransitioning:!1})})}),Mo(()=>w(we));return}h?(d&&d.resolve(),h.skipTransition(),m({state:g,currentLocation:le.currentLocation,nextLocation:le.nextLocation})):(l(g),u({isTransitioning:!0,flushSync:!1,currentLocation:le.currentLocation,nextLocation:le.nextLocation}))},[n.window,h,d,P,f]);E.useLayoutEffect(()=>n.subscribe(v),[n,v]),E.useEffect(()=>{s.isTransitioning&&!s.flushSync&&c(new e1)},[s]),E.useEffect(()=>{if(d&&a&&n.window){let g=a,M=d.promise,j=n.window.document.startViewTransition(async()=>{f(()=>i(g)),await M});j.finished.finally(()=>{c(void 0),w(void 0),l(void 0),u({isTransitioning:!1})}),w(j)}},[f,a,d,n.window]),E.useEffect(()=>{d&&a&&o.location.key===a.location.key&&d.resolve()},[d,h,o.location,a]),E.useEffect(()=>{!s.isTransitioning&&y&&(l(y.state),u({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),m(void 0))},[s.isTransitioning,y]),E.useEffect(()=>{},[]);let k=E.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,M,j)=>n.navigate(g,{state:M,preventScrollReset:j==null?void 0:j.preventScrollReset}),replace:(g,M,j)=>n.navigate(g,{replace:!0,state:M,preventScrollReset:j==null?void 0:j.preventScrollReset})}),[n]),C=n.basename||"/",z=E.useMemo(()=>({router:n,navigator:k,static:!1,basename:C}),[n,k,C]),T=E.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return E.createElement(E.Fragment,null,E.createElement(vl.Provider,{value:z},E.createElement(Ap.Provider,{value:o},E.createElement(Yy.Provider,{value:P.current},E.createElement(Xy.Provider,{value:s},E.createElement(Ay,{basename:C,location:o.location,navigationType:o.historyAction,navigator:k,future:T},o.initialized||n.future.v7_partialHydration?E.createElement(n1,{routes:n.routes,future:n.future,state:o}):t))))),null)}const n1=E.memo(r1);function r1(e){let{routes:t,future:n,state:r}=e;return Ey(t,void 0,r,n)}const o1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",i1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,W1=E.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:d,unstable_viewTransition:c}=t,h=Uy(t,By),{basename:w}=E.useContext(Xn),y,m=!1;if(typeof u=="string"&&i1.test(u)&&(y=u,o1))try{let v=new URL(window.location.href),k=u.startsWith("//")?new URL(v.protocol+u):new URL(u),C=go(k.pathname,w);k.origin===v.origin&&C!=null?u=C+k.search+k.hash:m=!0}catch{}let P=xy(u,{relative:o}),p=a1(u,{replace:a,state:l,target:s,preventScrollReset:d,relative:o,unstable_viewTransition:c});function f(v){r&&r(v),v.defaultPrevented||p(v)}return E.createElement("a",pi({},h,{href:y||P,onClick:m||i?r:f,ref:n,target:s}))});var Wd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wd||(Wd={}));var Kd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Kd||(Kd={}));function a1(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=Ju(),u=bo(),d=$p(e,{relative:a});return E.useCallback(c=>{if(qy(c,n)){c.preventDefault();let h=r!==void 0?r:gr(u)===gr(d);s(e,{replace:h,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[u,s,d,r,o,n,e,i,a,l])}function K1(e){let t=E.useRef(Ys(e)),n=E.useRef(!1),r=bo(),o=E.useMemo(()=>Hy(r.search,n.current?null:t.current),[r.search]),i=Ju(),a=E.useCallback((l,s)=>{const u=Ys(typeof l=="function"?l(o):l);n.current=!0,i("?"+u,s)},[i,o]);return[o,a]}function l1({className:e}){return G.jsxs("div",{className:Ep("flex items-center flex-col justify-center ",e),children:[G.jsx(vg,{color:"#41d9ce",size:"medium",text:"",textColor:""}),G.jsx("p",{className:"text-primary text-lg",children:"加载中..."})]})}function s1(){const e=E.useRef(null),t=n=>new Promise((r,o)=>{const i=new Image;i.src=n,i.onload=()=>r(i),i.onerror=o});return E.useEffect(()=>{const n=e.current;if(!n)return;const r=n.getContext("2d"),o="/project-preview/poster-bg.png",i="/project-preview/bar-code.gif";return(async()=>{try{const[l,s]=await Promise.all([t(o),t(i)]);r==null||r.drawImage(l,0,0,n.width,n.height),r==null||r.drawImage(s,145,1260,1200,300)}catch(l){console.error("Image loading failed:",l)}})(),()=>{r==null||r.clearRect(0,0,n.width,n.height)}},[]),G.jsx("div",{className:"h-[100vh] bg-[#F2F2F7]  flex-col flex  items-center",children:G.jsx("canvas",{ref:e,className:"aspect-[0.5618904726181545]",style:{width:"100%"},width:1498,height:2666})})}const u1=E.lazy(()=>Pr(()=>import("./index-B4jXNQhj.js"),__vite__mapDeps([0,1]))),c1=E.lazy(()=>Pr(()=>import("./index-Ch2YwJ8x.js"),__vite__mapDeps([2,3,4,1,5,6,7]))),d1=E.lazy(()=>Pr(()=>import("./detail-Cngm9nGo.js"),__vite__mapDeps([8,9,3,7,1,10]))),f1=E.lazy(()=>Pr(()=>import("./result-GKkbXsx0.js"),__vite__mapDeps([11,4,1]))),h1=E.lazy(()=>Pr(()=>import("./not-find-CeDTEiBJ.js"),[])),p1=E.lazy(()=>Pr(()=>import("./home-D6IKuFhP.js"),__vite__mapDeps([12,13,7,1,9,3,4,5,6,10]))),m1=E.lazy(()=>Pr(()=>import("./service-RdBXVULk.js"),__vite__mapDeps([14,13,7,1,10]))),v1=[{path:"/",element:G.jsx(wn,{children:G.jsx(u1,{})}),children:[{path:"/",element:G.jsx(wn,{children:G.jsx(p1,{})})},{path:"/service",element:G.jsx(wn,{children:G.jsx(m1,{})})}]},{path:"/order",element:G.jsx(jy,{}),children:[{index:!0,element:G.jsx(Fy,{to:"/order/list",replace:!0})},{path:"list",element:G.jsx(wn,{children:G.jsx(c1,{})})},{path:":id",element:G.jsx(wn,{children:G.jsx(d1,{})})},{path:"result",element:G.jsx(wn,{children:G.jsx(f1,{})})}]},{path:"/poster",element:G.jsx(wn,{children:G.jsx(s1,{})})},{path:"*",element:G.jsx(wn,{children:G.jsx(h1,{})})}];function wn({children:e}){return G.jsx(E.Suspense,{fallback:G.jsx(l1,{className:"min-h-[var(--content-height)]"}),children:e})}const g1=Qy(v1,{basename:"/project-preview"});function y1(){return G.jsx(t1,{router:g1})}var gl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},yl=typeof window>"u"||"Deno"in globalThis;function Rt(){}function b1(e,t){return typeof e=="function"?e(t):e}function w1(e){return typeof e=="number"&&e>=0&&e!==1/0}function x1(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Xd(e,t){return typeof e=="function"?e(t):e}function k1(e,t){return typeof e=="function"?e(t):e}function Yd(e,t){const{type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:a,stale:l}=e;if(a){if(r){if(t.queryHash!==Zu(a,t.options))return!1}else if(!vi(t.queryKey,a))return!1}if(n!=="all"){const s=t.isActive();if(n==="active"&&!s||n==="inactive"&&s)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||o&&o!==t.state.fetchStatus||i&&!i(t))}function Gd(e,t){const{exact:n,status:r,predicate:o,mutationKey:i}=e;if(i){if(!t.options.mutationKey)return!1;if(n){if(mi(t.options.mutationKey)!==mi(i))return!1}else if(!vi(t.options.mutationKey,i))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function Zu(e,t){return((t==null?void 0:t.queryKeyHashFn)||mi)(e)}function mi(e){return JSON.stringify(e,(t,n)=>Gs(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function vi(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!vi(e[n],t[n])):!1}function Bp(e,t){if(e===t)return e;const n=Jd(e)&&Jd(t);if(n||Gs(e)&&Gs(t)){const r=n?e:Object.keys(e),o=r.length,i=n?t:Object.keys(t),a=i.length,l=n?[]:{};let s=0;for(let u=0;u<a;u++){const d=n?u:i[u];(!n&&r.includes(d)||n)&&e[d]===void 0&&t[d]===void 0?(l[d]=void 0,s++):(l[d]=Bp(e[d],t[d]),l[d]===e[d]&&e[d]!==void 0&&s++)}return o===a&&s===o?e:l}return t}function X1(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Jd(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Gs(e){if(!Zd(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Zd(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Zd(e){return Object.prototype.toString.call(e)==="[object Object]"}function S1(e){return new Promise(t=>{setTimeout(t,e)})}function P1(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Bp(e,t):t}function E1(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function O1(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Vp=Symbol();function Qp(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Vp?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var ar,Cn,Yr,tf,C1=(tf=class extends gl{constructor(){super();re(this,ar);re(this,Cn);re(this,Yr);Y(this,Yr,t=>{if(!yl&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){O(this,Cn)||this.setEventListener(O(this,Yr))}onUnsubscribe(){var t;this.hasListeners()||((t=O(this,Cn))==null||t.call(this),Y(this,Cn,void 0))}setEventListener(t){var n;Y(this,Yr,t),(n=O(this,Cn))==null||n.call(this),Y(this,Cn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){O(this,ar)!==t&&(Y(this,ar,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof O(this,ar)=="boolean"?O(this,ar):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},ar=new WeakMap,Cn=new WeakMap,Yr=new WeakMap,tf),Wp=new C1,Gr,_n,Jr,nf,_1=(nf=class extends gl{constructor(){super();re(this,Gr,!0);re(this,_n);re(this,Jr);Y(this,Jr,t=>{if(!yl&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){O(this,_n)||this.setEventListener(O(this,Jr))}onUnsubscribe(){var t;this.hasListeners()||((t=O(this,_n))==null||t.call(this),Y(this,_n,void 0))}setEventListener(t){var n;Y(this,Jr,t),(n=O(this,_n))==null||n.call(this),Y(this,_n,t(this.setOnline.bind(this)))}setOnline(t){O(this,Gr)!==t&&(Y(this,Gr,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return O(this,Gr)}},Gr=new WeakMap,_n=new WeakMap,Jr=new WeakMap,nf),Xa=new _1;function R1(e){return Math.min(1e3*2**e,3e4)}function Kp(e){return(e??"online")==="online"?Xa.isOnline():!0}var Xp=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Zl(e){return e instanceof Xp}function Yp(e){let t=!1,n=0,r=!1,o,i,a;const l=new Promise((p,f)=>{i=p,a=f}),s=p=>{var f;r||(y(new Xp(p)),(f=e.abort)==null||f.call(e))},u=()=>{t=!0},d=()=>{t=!1},c=()=>Wp.isFocused()&&(e.networkMode==="always"||Xa.isOnline())&&e.canRun(),h=()=>Kp(e.networkMode)&&e.canRun(),w=p=>{var f;r||(r=!0,(f=e.onSuccess)==null||f.call(e,p),o==null||o(),i(p))},y=p=>{var f;r||(r=!0,(f=e.onError)==null||f.call(e,p),o==null||o(),a(p))},m=()=>new Promise(p=>{var f;o=v=>{(r||c())&&p(v)},(f=e.onPause)==null||f.call(e)}).then(()=>{var p;o=void 0,r||(p=e.onContinue)==null||p.call(e)}),P=()=>{if(r)return;let p;const f=n===0?e.initialPromise:void 0;try{p=f??e.fn()}catch(v){p=Promise.reject(v)}Promise.resolve(p).then(w).catch(v=>{var g;if(r)return;const k=e.retry??(yl?0:3),C=e.retryDelay??R1,z=typeof C=="function"?C(n,v):C,T=k===!0||typeof k=="number"&&n<k||typeof k=="function"&&k(n,v);if(t||!T){y(v);return}n++,(g=e.onFail)==null||g.call(e,n,v),S1(z).then(()=>c()?void 0:m()).then(()=>{t?y(v):P()})})};return{promise:l,cancel:s,continue:()=>(o==null||o(),l),cancelRetry:u,continueRetry:d,canStart:h,start:()=>(h()?P():m().then(P),l)}}function z1(){let e=[],t=0,n=l=>{l()},r=l=>{l()},o=l=>setTimeout(l,0);const i=l=>{t?e.push(l):o(()=>{n(l)})},a=()=>{const l=e;e=[],l.length&&o(()=>{r(()=>{l.forEach(s=>{n(s)})})})};return{batch:l=>{let s;t++;try{s=l()}finally{t--,t||a()}return s},batchCalls:l=>(...s)=>{i(()=>{l(...s)})},schedule:i,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{o=l}}}var Ye=z1(),lr,rf,Gp=(rf=class{constructor(){re(this,lr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),w1(this.gcTime)&&Y(this,lr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(yl?1/0:5*60*1e3))}clearGcTimeout(){O(this,lr)&&(clearTimeout(O(this,lr)),Y(this,lr,void 0))}},lr=new WeakMap,rf),Zr,eo,yt,He,gi,sr,zt,tn,of,T1=(of=class extends Gp{constructor(t){super();re(this,zt);re(this,Zr);re(this,eo);re(this,yt);re(this,He);re(this,gi);re(this,sr);Y(this,sr,!1),Y(this,gi,t.defaultOptions),this.setOptions(t.options),this.observers=[],Y(this,yt,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,Y(this,Zr,M1(this.options)),this.state=t.state??O(this,Zr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=O(this,He))==null?void 0:t.promise}setOptions(t){this.options={...O(this,gi),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&O(this,yt).remove(this)}setData(t,n){const r=P1(this.state.data,t,this.options);return Ue(this,zt,tn).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Ue(this,zt,tn).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,o;const n=(r=O(this,He))==null?void 0:r.promise;return(o=O(this,He))==null||o.cancel(t),n?n.then(Rt).catch(Rt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(O(this,Zr))}isActive(){return this.observers.some(t=>k1(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!x1(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=O(this,He))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=O(this,He))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),O(this,yt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(O(this,He)&&(O(this,sr)?O(this,He).cancel({revert:!0}):O(this,He).cancelRetry()),this.scheduleGc()),O(this,yt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ue(this,zt,tn).call(this,{type:"invalidate"})}fetch(t,n){var s,u,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(O(this,He))return O(this,He).continueRetry(),O(this,He).promise}if(t&&this.setOptions(t),!this.options.queryFn){const c=this.observers.find(h=>h.options.queryFn);c&&this.setOptions(c.options)}const r=new AbortController,o=c=>{Object.defineProperty(c,"signal",{enumerable:!0,get:()=>(Y(this,sr,!0),r.signal)})},i=()=>{const c=Qp(this.options,n),h={queryKey:this.queryKey,meta:this.meta};return o(h),Y(this,sr,!1),this.options.persister?this.options.persister(c,h,this):c(h)},a={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:i};o(a),(s=this.options.behavior)==null||s.onFetch(a,this),Y(this,eo,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=a.fetchOptions)==null?void 0:u.meta))&&Ue(this,zt,tn).call(this,{type:"fetch",meta:(d=a.fetchOptions)==null?void 0:d.meta});const l=c=>{var h,w,y,m;Zl(c)&&c.silent||Ue(this,zt,tn).call(this,{type:"error",error:c}),Zl(c)||((w=(h=O(this,yt).config).onError)==null||w.call(h,c,this),(m=(y=O(this,yt).config).onSettled)==null||m.call(y,this.state.data,c,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return Y(this,He,Yp({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:c=>{var h,w,y,m;if(c===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(c)}catch(P){l(P);return}(w=(h=O(this,yt).config).onSuccess)==null||w.call(h,c,this),(m=(y=O(this,yt).config).onSettled)==null||m.call(y,c,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:l,onFail:(c,h)=>{Ue(this,zt,tn).call(this,{type:"failed",failureCount:c,error:h})},onPause:()=>{Ue(this,zt,tn).call(this,{type:"pause"})},onContinue:()=>{Ue(this,zt,tn).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),O(this,He).start()}},Zr=new WeakMap,eo=new WeakMap,yt=new WeakMap,He=new WeakMap,gi=new WeakMap,sr=new WeakMap,zt=new WeakSet,tn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...D1(r.data,this.options),fetchMeta:t.meta??null};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return Zl(o)&&o.revert&&O(this,eo)?{...O(this,eo),fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Ye.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),O(this,yt).notify({query:this,type:"updated",action:t})})},of);function D1(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Kp(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function M1(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var qt,af,Jp=(af=class extends gl{constructor(t={}){super();re(this,qt);this.config=t,Y(this,qt,new Map)}build(t,n,r){const o=n.queryKey,i=n.queryHash??Zu(o,n);let a=this.get(i);return a||(a=new T1({cache:this,queryKey:o,queryHash:i,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(a)),a}add(t){O(this,qt).has(t.queryHash)||(O(this,qt).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=O(this,qt).get(t.queryHash);n&&(t.destroy(),n===t&&O(this,qt).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Ye.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return O(this,qt).get(t)}getAll(){return[...O(this,qt).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Yd(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Yd(t,r)):n}notify(t){Ye.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Ye.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Ye.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},qt=new WeakMap,af),Ht,We,ur,Bt,kn,lf,L1=(lf=class extends Gp{constructor(t){super();re(this,Bt);re(this,Ht);re(this,We);re(this,ur);this.mutationId=t.mutationId,Y(this,We,t.mutationCache),Y(this,Ht,[]),this.state=t.state||N1(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){O(this,Ht).includes(t)||(O(this,Ht).push(t),this.clearGcTimeout(),O(this,We).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){Y(this,Ht,O(this,Ht).filter(n=>n!==t)),this.scheduleGc(),O(this,We).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){O(this,Ht).length||(this.state.status==="pending"?this.scheduleGc():O(this,We).remove(this))}continue(){var t;return((t=O(this,ur))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,i,a,l,s,u,d,c,h,w,y,m,P,p,f,v,k,C,z,T;Y(this,ur,Yp({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(g,M)=>{Ue(this,Bt,kn).call(this,{type:"failed",failureCount:g,error:M})},onPause:()=>{Ue(this,Bt,kn).call(this,{type:"pause"})},onContinue:()=>{Ue(this,Bt,kn).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>O(this,We).canRun(this)}));const n=this.state.status==="pending",r=!O(this,ur).canStart();try{if(!n){Ue(this,Bt,kn).call(this,{type:"pending",variables:t,isPaused:r}),await((i=(o=O(this,We).config).onMutate)==null?void 0:i.call(o,t,this));const M=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,t));M!==this.state.context&&Ue(this,Bt,kn).call(this,{type:"pending",context:M,variables:t,isPaused:r})}const g=await O(this,ur).start();return await((u=(s=O(this,We).config).onSuccess)==null?void 0:u.call(s,g,t,this.state.context,this)),await((c=(d=this.options).onSuccess)==null?void 0:c.call(d,g,t,this.state.context)),await((w=(h=O(this,We).config).onSettled)==null?void 0:w.call(h,g,null,this.state.variables,this.state.context,this)),await((m=(y=this.options).onSettled)==null?void 0:m.call(y,g,null,t,this.state.context)),Ue(this,Bt,kn).call(this,{type:"success",data:g}),g}catch(g){try{throw await((p=(P=O(this,We).config).onError)==null?void 0:p.call(P,g,t,this.state.context,this)),await((v=(f=this.options).onError)==null?void 0:v.call(f,g,t,this.state.context)),await((C=(k=O(this,We).config).onSettled)==null?void 0:C.call(k,void 0,g,this.state.variables,this.state.context,this)),await((T=(z=this.options).onSettled)==null?void 0:T.call(z,void 0,g,t,this.state.context)),g}finally{Ue(this,Bt,kn).call(this,{type:"error",error:g})}}finally{O(this,We).runNext(this)}}},Ht=new WeakMap,We=new WeakMap,ur=new WeakMap,Bt=new WeakSet,kn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Ye.batch(()=>{O(this,Ht).forEach(r=>{r.onMutationUpdate(t)}),O(this,We).notify({mutation:this,type:"updated",action:t})})},lf);function N1(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var ut,yi,sf,Zp=(sf=class extends gl{constructor(t={}){super();re(this,ut);re(this,yi);this.config=t,Y(this,ut,new Map),Y(this,yi,Date.now())}build(t,n,r){const o=new L1({mutationCache:this,mutationId:++Li(this,yi)._,options:t.defaultMutationOptions(n),state:r});return this.add(o),o}add(t){const n=la(t),r=O(this,ut).get(n)??[];r.push(t),O(this,ut).set(n,r),this.notify({type:"added",mutation:t})}remove(t){var r;const n=la(t);if(O(this,ut).has(n)){const o=(r=O(this,ut).get(n))==null?void 0:r.filter(i=>i!==t);o&&(o.length===0?O(this,ut).delete(n):O(this,ut).set(n,o))}this.notify({type:"removed",mutation:t})}canRun(t){var r;const n=(r=O(this,ut).get(la(t)))==null?void 0:r.find(o=>o.state.status==="pending");return!n||n===t}runNext(t){var r;const n=(r=O(this,ut).get(la(t)))==null?void 0:r.find(o=>o!==t&&o.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){Ye.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...O(this,ut).values()].flat()}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Gd(n,r))}findAll(t={}){return this.getAll().filter(n=>Gd(t,n))}notify(t){Ye.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Ye.batch(()=>Promise.all(t.map(n=>n.continue().catch(Rt))))}},ut=new WeakMap,yi=new WeakMap,sf);function la(e){var t;return((t=e.options.scope)==null?void 0:t.id)??String(e.mutationId)}function ef(e){return{onFetch:(t,n)=>{var d,c,h,w,y;const r=t.options,o=(h=(c=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:c.fetchMore)==null?void 0:h.direction,i=((w=t.state.data)==null?void 0:w.pages)||[],a=((y=t.state.data)==null?void 0:y.pageParams)||[];let l={pages:[],pageParams:[]},s=0;const u=async()=>{let m=!1;const P=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(t.signal.aborted?m=!0:t.signal.addEventListener("abort",()=>{m=!0}),t.signal)})},p=Qp(t.options,t.fetchOptions),f=async(v,k,C)=>{if(m)return Promise.reject();if(k==null&&v.pages.length)return Promise.resolve(v);const z={queryKey:t.queryKey,pageParam:k,direction:C?"backward":"forward",meta:t.options.meta};P(z);const T=await p(z),{maxPages:g}=t.options,M=C?O1:E1;return{pages:M(v.pages,T,g),pageParams:M(v.pageParams,k,g)}};if(o&&i.length){const v=o==="backward",k=v?em:Js,C={pages:i,pageParams:a},z=k(r,C);l=await f(C,z,v)}else{const v=e??i.length;do{const k=s===0?a[0]??r.initialPageParam:Js(r,l);if(s>0&&k==null)break;l=await f(l,k),s++}while(s<v)}return l};t.options.persister?t.fetchFn=()=>{var m,P;return(P=(m=t.options).persister)==null?void 0:P.call(m,u,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function Js(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function em(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}function Y1(e,t){return t?Js(e,t)!=null:!1}function G1(e,t){return!t||!e.getPreviousPageParam?!1:em(e,t)!=null}var Se,Rn,zn,to,no,Tn,ro,oo,uf,F1=(uf=class{constructor(e={}){re(this,Se);re(this,Rn);re(this,zn);re(this,to);re(this,no);re(this,Tn);re(this,ro);re(this,oo);Y(this,Se,e.queryCache||new Jp),Y(this,Rn,e.mutationCache||new Zp),Y(this,zn,e.defaultOptions||{}),Y(this,to,new Map),Y(this,no,new Map),Y(this,Tn,0)}mount(){Li(this,Tn)._++,O(this,Tn)===1&&(Y(this,ro,Wp.subscribe(async e=>{e&&(await this.resumePausedMutations(),O(this,Se).onFocus())})),Y(this,oo,Xa.subscribe(async e=>{e&&(await this.resumePausedMutations(),O(this,Se).onOnline())})))}unmount(){var e,t;Li(this,Tn)._--,O(this,Tn)===0&&((e=O(this,ro))==null||e.call(this),Y(this,ro,void 0),(t=O(this,oo))==null||t.call(this),Y(this,oo,void 0))}isFetching(e){return O(this,Se).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return O(this,Rn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=O(this,Se).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{const n=this.defaultQueryOptions(e),r=O(this,Se).build(this,n);return e.revalidateIfStale&&r.isStaleByTime(Xd(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return O(this,Se).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),o=O(this,Se).get(r.queryHash),i=o==null?void 0:o.state.data,a=b1(t,i);if(a!==void 0)return O(this,Se).build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return Ye.batch(()=>O(this,Se).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=O(this,Se).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=O(this,Se);Ye.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=O(this,Se),r={type:"active",...e};return Ye.batch(()=>(n.findAll(e).forEach(o=>{o.reset()}),this.refetchQueries(r,t)))}cancelQueries(e={},t={}){const n={revert:!0,...t},r=Ye.batch(()=>O(this,Se).findAll(e).map(o=>o.cancel(n)));return Promise.all(r).then(Rt).catch(Rt)}invalidateQueries(e={},t={}){return Ye.batch(()=>{if(O(this,Se).findAll(e).forEach(r=>{r.invalidate()}),e.refetchType==="none")return Promise.resolve();const n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e={},t){const n={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},r=Ye.batch(()=>O(this,Se).findAll(e).filter(o=>!o.isDisabled()).map(o=>{let i=o.fetch(void 0,n);return n.throwOnError||(i=i.catch(Rt)),o.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(Rt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=O(this,Se).build(this,t);return n.isStaleByTime(Xd(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Rt).catch(Rt)}fetchInfiniteQuery(e){return e.behavior=ef(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Rt).catch(Rt)}ensureInfiniteQueryData(e){return e.behavior=ef(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Xa.isOnline()?O(this,Rn).resumePausedMutations():Promise.resolve()}getQueryCache(){return O(this,Se)}getMutationCache(){return O(this,Rn)}getDefaultOptions(){return O(this,zn)}setDefaultOptions(e){Y(this,zn,e)}setQueryDefaults(e,t){O(this,to).set(mi(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...O(this,to).values()];let n={};return t.forEach(r=>{vi(e,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(e,t){O(this,no).set(mi(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...O(this,no).values()];let n={};return t.forEach(r=>{vi(e,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...O(this,zn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Zu(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===Vp&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...O(this,zn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){O(this,Se).clear(),O(this,Rn).clear()}},Se=new WeakMap,Rn=new WeakMap,zn=new WeakMap,to=new WeakMap,no=new WeakMap,Tn=new WeakMap,ro=new WeakMap,oo=new WeakMap,uf),tm=E.createContext(void 0),J1=e=>{const t=E.useContext(tm);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},j1=({client:e,children:t})=>(E.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),G.jsx(tm.Provider,{value:e,children:t}));const A1=new Jp({onError(e){console.log(e)}}),I1=new Zp({onError(e){console.log(e)}}),U1=new F1({queryCache:A1,mutationCache:I1,defaultOptions:{queries:{refetchOnMount:!1,refetchOnWindowFocus:!1,retry:0}}});function $1({children:e}){return G.jsxs(j1,{client:U1,children:[e,!1]})}function q1(){return G.jsx($1,{children:G.jsx(yg,{children:G.jsx(y1,{})})})}es.createRoot(document.getElementById("root")).render(G.jsx(V.StrictMode,{children:G.jsx(q1,{})}));export{Wu as A,df as B,W1 as L,jy as O,V as R,gl as S,G1 as a,Ju as b,Ep as c,mg as d,Q1 as e,V1 as f,J1 as g,Y1 as h,ef as i,G as j,K1 as k,k1 as l,Xd as m,Rt as n,yl as o,w1 as p,U1 as q,E as r,X1 as s,x1 as t,bo as u,Wp as v,D1 as w,P1 as x,Ye as y,B1 as z};
