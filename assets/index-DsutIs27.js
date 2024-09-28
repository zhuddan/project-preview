const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-jX9hE48h.js","assets/tabbar-service-Cba5iaUz.js","assets/index-CFdB6BBr.js","assets/skeleton-CVtKrjUz.js","assets/skeleton-CqACEEbq.css","assets/sleep-AcpSZMhY.js","assets/order-COKHhIvr.js","assets/detail-Bj4uO0C2.js","assets/wifi-Dd-PmMqo.js","assets/service-COSR2zsV.js","assets/result-CvcsZtfh.js","assets/home-CIzYWs8i.js","assets/customer-service-DuEwfq-C.js","assets/service-D_YzpZWU.js"])))=>i.map(i=>d[i]);
var Lc=e=>{throw TypeError(e)};var jl=(e,t,n)=>t.has(e)||Lc("Cannot "+n);var _=(e,t,n)=>(jl(e,t,"read from private field"),n?n.call(e):t.get(e)),se=(e,t,n)=>t.has(e)?Lc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Z=(e,t,n,r)=>(jl(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),We=(e,t,n)=>(jl(e,t,"access private method"),n);var Fi=(e,t,n,r)=>({set _(o){Z(e,t,o,n)},get _(){return _(e,t,r)}});function $f(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Hf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Iw(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var qf={exports:{}},il={},Bf={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Si=Symbol.for("react.element"),a0=Symbol.for("react.portal"),l0=Symbol.for("react.fragment"),s0=Symbol.for("react.strict_mode"),u0=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),d0=Symbol.for("react.context"),f0=Symbol.for("react.forward_ref"),h0=Symbol.for("react.suspense"),p0=Symbol.for("react.memo"),m0=Symbol.for("react.lazy"),Nc=Symbol.iterator;function v0(e){return e===null||typeof e!="object"?null:(e=Nc&&e[Nc]||e["@@iterator"],typeof e=="function"?e:null)}var Vf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wf=Object.assign,Qf={};function ho(e,t,n){this.props=e,this.context=t,this.refs=Qf,this.updater=n||Vf}ho.prototype.isReactComponent={};ho.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ho.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kf(){}Kf.prototype=ho.prototype;function yu(e,t,n){this.props=e,this.context=t,this.refs=Qf,this.updater=n||Vf}var bu=yu.prototype=new Kf;bu.constructor=yu;Wf(bu,ho.prototype);bu.isPureReactComponent=!0;var Ac=Array.isArray,Xf=Object.prototype.hasOwnProperty,wu={current:null},Gf={key:!0,ref:!0,__self:!0,__source:!0};function Yf(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Xf.call(t,r)&&!Gf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Si,type:e,key:i,ref:a,props:o,_owner:wu.current}}function g0(e,t){return{$$typeof:Si,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Si}function y0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fc=/\/+/g;function Il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?y0(""+e.key):t.toString(36)}function fa(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Si:case a0:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Il(a,0):r,Ac(o)?(n="",e!=null&&(n=e.replace(Fc,"$&/")+"/"),fa(o,t,n,"",function(u){return u})):o!=null&&(xu(o)&&(o=g0(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Fc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Ac(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Il(i,l);a+=fa(i,t,n,s,o)}else if(s=v0(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Il(i,l++),a+=fa(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ji(e,t,n){if(e==null)return e;var r=[],o=0;return fa(e,r,"","",function(i){return t.call(n,i,o++)}),r}function b0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ot={current:null},ha={transition:null},w0={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:ha,ReactCurrentOwner:wu};function Jf(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:ji,forEach:function(e,t,n){ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ji(e,function(){t++}),t},toArray:function(e){return ji(e,function(t){return t})||[]},only:function(e){if(!xu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=ho;te.Fragment=l0;te.Profiler=u0;te.PureComponent=yu;te.StrictMode=s0;te.Suspense=h0;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w0;te.act=Jf;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wf({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=wu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Xf.call(t,s)&&!Gf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Si,type:e.type,key:o,ref:i,props:r,_owner:a}};te.createContext=function(e){return e={$$typeof:d0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:c0,_context:e},e.Consumer=e};te.createElement=Yf;te.createFactory=function(e){var t=Yf.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:f0,render:e}};te.isValidElement=xu;te.lazy=function(e){return{$$typeof:m0,_payload:{_status:-1,_result:e},_init:b0}};te.memo=function(e,t){return{$$typeof:p0,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=ha.transition;ha.transition={};try{e()}finally{ha.transition=t}};te.unstable_act=Jf;te.useCallback=function(e,t){return ot.current.useCallback(e,t)};te.useContext=function(e){return ot.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return ot.current.useDeferredValue(e)};te.useEffect=function(e,t){return ot.current.useEffect(e,t)};te.useId=function(){return ot.current.useId()};te.useImperativeHandle=function(e,t,n){return ot.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return ot.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return ot.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return ot.current.useMemo(e,t)};te.useReducer=function(e,t,n){return ot.current.useReducer(e,t,n)};te.useRef=function(e){return ot.current.useRef(e)};te.useState=function(e){return ot.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return ot.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return ot.current.useTransition()};te.version="18.3.1";Bf.exports=te;var P=Bf.exports;const A=Hf(P),x0=$f({__proto__:null,default:A},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0=P,S0=Symbol.for("react.element"),P0=Symbol.for("react.fragment"),E0=Object.prototype.hasOwnProperty,O0=k0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_0={key:!0,ref:!0,__self:!0,__source:!0};function Zf(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)E0.call(t,r)&&!_0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:S0,type:e,key:i,ref:a,props:o,_owner:O0.current}}il.Fragment=P0;il.jsx=Zf;il.jsxs=Zf;qf.exports=il;var K=qf.exports;(function(t,n){const r=n.documentElement,o=t.devicePixelRatio||1;function i(){n.body?n.body.style.fontSize=`${12*o}px`:n.addEventListener("DOMContentLoaded",i)}i();function a(){const l=r.clientWidth/10;r.style.fontSize=`${l}px`}if(a(),t.addEventListener("resize",a),t.addEventListener("pageshow",l=>{l.persisted&&a()}),o>=2){const l=n.createElement("body"),s=n.createElement("div");s.style.border=".5px solid transparent",l.appendChild(s),r.appendChild(l),s.offsetHeight===1&&r.classList.add("hairlines"),r.removeChild(l)}})(window,document);var gs={},eh={exports:{}},wt={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,F){var M=N.length;N.push(F);e:for(;0<M;){var Y=M-1>>>1,ae=N[Y];if(0<o(ae,F))N[Y]=F,N[M]=ae,M=Y;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var F=N[0],M=N.pop();if(M!==F){N[0]=M;e:for(var Y=0,ae=N.length,Pe=ae>>>1;Y<Pe;){var Ae=2*(Y+1)-1,kt=N[Ae],ge=Ae+1,at=N[ge];if(0>o(kt,M))ge<ae&&0>o(at,kt)?(N[Y]=at,N[ge]=M,Y=ge):(N[Y]=kt,N[Ae]=M,Y=Ae);else if(ge<ae&&0>o(at,M))N[Y]=at,N[ge]=M,Y=ge;else break e}}return F}function o(N,F){var M=N.sortIndex-F.sortIndex;return M!==0?M:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,h=3,y=!1,g=!1,m=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=N)r(u),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(u)}}function k(N){if(m=!1,v(N),!g)if(n(s)!==null)g=!0,Ue(O);else{var F=n(u);F!==null&&he(k,F.startTime-N)}}function O(N,F){g=!1,m&&(m=!1,p(b),b=-1),y=!0;var M=h;try{for(v(F),d=n(s);d!==null&&(!(d.expirationTime>F)||N&&!q());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,h=d.priorityLevel;var ae=Y(d.expirationTime<=F);F=e.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(s)&&r(s),v(F)}else r(s);d=n(s)}if(d!==null)var Pe=!0;else{var Ae=n(u);Ae!==null&&he(k,Ae.startTime-F),Pe=!1}return Pe}finally{d=null,h=M,y=!1}}var R=!1,z=null,b=-1,T=5,L=-1;function q(){return!(e.unstable_now()-L<T)}function W(){if(z!==null){var N=e.unstable_now();L=N;var F=!0;try{F=z(!0,N)}finally{F?ie():(R=!1,z=null)}}else R=!1}var ie;if(typeof f=="function")ie=function(){f(W)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,Ve=oe.port2;oe.port1.onmessage=W,ie=function(){Ve.postMessage(null)}}else ie=function(){S(W,0)};function Ue(N){z=N,R||(R=!0,ie())}function he(N,F){b=S(function(){N(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,Ue(O))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var M=h;h=F;try{return N()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=h;h=N;try{return F()}finally{h=M}},e.unstable_scheduleCallback=function(N,F,M){var Y=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Y+M:Y):M=Y,N){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=M+ae,N={id:c++,callback:F,priorityLevel:N,startTime:M,expirationTime:ae,sortIndex:-1},M>Y?(N.sortIndex=M,t(u,N),n(s)===null&&N===n(u)&&(m?(p(b),b=-1):m=!0,he(k,M-Y))):(N.sortIndex=ae,t(s,N),g||y||(g=!0,Ue(O))),N},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(N){var F=h;return function(){var M=h;h=F;try{return N.apply(this,arguments)}finally{h=M}}}})(nh);th.exports=nh;var C0=th.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0=P,bt=C0;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rh=new Set,Jo={};function kr(e,t){oo(e,t),oo(e+"Capture",t)}function oo(e,t){for(Jo[e]=t,e=0;e<t.length;e++)rh.add(t[e])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ys=Object.prototype.hasOwnProperty,z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jc={},Ic={};function D0(e){return ys.call(Ic,e)?!0:ys.call(jc,e)?!1:z0.test(e)?Ic[e]=!0:(jc[e]=!0,!1)}function T0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M0(e,t,n,r){if(t===null||typeof t>"u"||T0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var ku=/[\-:]([a-z])/g;function Su(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ku,Su);Be[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ku,Su);Be[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ku,Su);Be[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pu(e,t,n,r){var o=Be.hasOwnProperty(t)?Be[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M0(t,n,o,r)&&(n=null),r||o===null?D0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yn=R0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ii=Symbol.for("react.element"),zr=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),Eu=Symbol.for("react.strict_mode"),bs=Symbol.for("react.profiler"),oh=Symbol.for("react.provider"),ih=Symbol.for("react.context"),Ou=Symbol.for("react.forward_ref"),ws=Symbol.for("react.suspense"),xs=Symbol.for("react.suspense_list"),_u=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),ah=Symbol.for("react.offscreen"),Uc=Symbol.iterator;function Eo(e){return e===null||typeof e!="object"?null:(e=Uc&&e[Uc]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,Ul;function Fo(e){if(Ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ul=t&&t[1]||""}return`
`+Ul+e}var $l=!1;function Hl(e,t){if(!e||$l)return"";$l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{$l=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fo(e):""}function L0(e){switch(e.tag){case 5:return Fo(e.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return e=Hl(e.type,!1),e;case 11:return e=Hl(e.type.render,!1),e;case 1:return e=Hl(e.type,!0),e;default:return""}}function ks(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dr:return"Fragment";case zr:return"Portal";case bs:return"Profiler";case Eu:return"StrictMode";case ws:return"Suspense";case xs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ih:return(e.displayName||"Context")+".Consumer";case oh:return(e._context.displayName||"Context")+".Provider";case Ou:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _u:return t=e.displayName||null,t!==null?t:ks(e.type)||"Memo";case Cn:t=e._payload,e=e._init;try{return ks(e(t))}catch{}}return null}function N0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ks(t);case 8:return t===Eu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function A0(e){var t=lh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ui(e){e._valueTracker||(e._valueTracker=A0(e))}function sh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ss(e,t){var n=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $c(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uh(e,t){t=t.checked,t!=null&&Pu(e,"checked",t,!1)}function Ps(e,t){uh(e,t);var n=Kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Es(e,t.type,n):t.hasOwnProperty("defaultValue")&&Es(e,t.type,Kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Es(e,t,n){(t!=="number"||Oa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jo=Array.isArray;function qr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Os(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(jo(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kn(n)}}function ch(e,t){var n=Kn(t.value),r=Kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _s(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $i,fh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($i=$i||document.createElement("div"),$i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F0=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(e){F0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qo[t]=qo[e]})});function hh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qo.hasOwnProperty(e)&&qo[e]?(""+t).trim():t+"px"}function ph(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=hh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var j0=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cs(e,t){if(t){if(j0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Rs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zs=null;function Cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,Br=null,Vr=null;function Vc(e){if(e=Oi(e)){if(typeof Ds!="function")throw Error(D(280));var t=e.stateNode;t&&(t=cl(t),Ds(e.stateNode,e.type,t))}}function mh(e){Br?Vr?Vr.push(e):Vr=[e]:Br=e}function vh(){if(Br){var e=Br,t=Vr;if(Vr=Br=null,Vc(e),t)for(e=0;e<t.length;e++)Vc(t[e])}}function gh(e,t){return e(t)}function yh(){}var ql=!1;function bh(e,t,n){if(ql)return e(t,n);ql=!0;try{return gh(e,t,n)}finally{ql=!1,(Br!==null||Vr!==null)&&(yh(),vh())}}function ei(e,t){var n=e.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Ts=!1;if(pn)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Ts=!1}function I0(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Bo=!1,_a=null,Ca=!1,Ms=null,U0={onError:function(e){Bo=!0,_a=e}};function $0(e,t,n,r,o,i,a,l,s){Bo=!1,_a=null,I0.apply(U0,arguments)}function H0(e,t,n,r,o,i,a,l,s){if($0.apply(this,arguments),Bo){if(Bo){var u=_a;Bo=!1,_a=null}else throw Error(D(198));Ca||(Ca=!0,Ms=u)}}function Sr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wc(e){if(Sr(e)!==e)throw Error(D(188))}function q0(e){var t=e.alternate;if(!t){if(t=Sr(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Wc(o),e;if(i===r)return Wc(o),t;i=i.sibling}throw Error(D(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function xh(e){return e=q0(e),e!==null?kh(e):null}function kh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kh(e);if(t!==null)return t;e=e.sibling}return null}var Sh=bt.unstable_scheduleCallback,Qc=bt.unstable_cancelCallback,B0=bt.unstable_shouldYield,V0=bt.unstable_requestPaint,Re=bt.unstable_now,W0=bt.unstable_getCurrentPriorityLevel,Ru=bt.unstable_ImmediatePriority,Ph=bt.unstable_UserBlockingPriority,Ra=bt.unstable_NormalPriority,Q0=bt.unstable_LowPriority,Eh=bt.unstable_IdlePriority,al=null,Gt=null;function K0(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(al,e,void 0,(e.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:Y0,X0=Math.log,G0=Math.LN2;function Y0(e){return e>>>=0,e===0?32:31-(X0(e)/G0|0)|0}var Hi=64,qi=4194304;function Io(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function za(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Io(l):(i&=a,i!==0&&(r=Io(i)))}else a=n&~o,a!==0?r=Io(a):i!==0&&(r=Io(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ut(t),o=1<<n,r|=e[n],t&=~o;return r}function J0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ut(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=J0(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function Ls(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Oh(){var e=Hi;return Hi<<=1,!(Hi&4194240)&&(Hi=64),e}function Bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ut(t),e[t]=n}function ev(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ut(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function zu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ut(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ce=0;function _h(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ch,Du,Rh,zh,Dh,Ns=!1,Bi=[],Un=null,$n=null,Hn=null,ti=new Map,ni=new Map,zn=[],tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kc(e,t){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ni.delete(t.pointerId)}}function _o(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Oi(t),t!==null&&Du(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function nv(e,t,n,r,o){switch(t){case"focusin":return Un=_o(Un,e,t,n,r,o),!0;case"dragenter":return $n=_o($n,e,t,n,r,o),!0;case"mouseover":return Hn=_o(Hn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ti.set(i,_o(ti.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ni.set(i,_o(ni.get(i)||null,e,t,n,r,o)),!0}return!1}function Th(e){var t=ir(e.target);if(t!==null){var n=Sr(t);if(n!==null){if(t=n.tag,t===13){if(t=wh(n),t!==null){e.blockedOn=t,Dh(e.priority,function(){Rh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=As(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zs=r,n.target.dispatchEvent(r),zs=null}else return t=Oi(n),t!==null&&Du(t),e.blockedOn=n,!1;t.shift()}return!0}function Xc(e,t,n){pa(e)&&n.delete(t)}function rv(){Ns=!1,Un!==null&&pa(Un)&&(Un=null),$n!==null&&pa($n)&&($n=null),Hn!==null&&pa(Hn)&&(Hn=null),ti.forEach(Xc),ni.forEach(Xc)}function Co(e,t){e.blockedOn===t&&(e.blockedOn=null,Ns||(Ns=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,rv)))}function ri(e){function t(o){return Co(o,e)}if(0<Bi.length){Co(Bi[0],e);for(var n=1;n<Bi.length;n++){var r=Bi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Un!==null&&Co(Un,e),$n!==null&&Co($n,e),Hn!==null&&Co(Hn,e),ti.forEach(t),ni.forEach(t),n=0;n<zn.length;n++)r=zn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)Th(n),n.blockedOn===null&&zn.shift()}var Wr=yn.ReactCurrentBatchConfig,Da=!0;function ov(e,t,n,r){var o=ce,i=Wr.transition;Wr.transition=null;try{ce=1,Tu(e,t,n,r)}finally{ce=o,Wr.transition=i}}function iv(e,t,n,r){var o=ce,i=Wr.transition;Wr.transition=null;try{ce=4,Tu(e,t,n,r)}finally{ce=o,Wr.transition=i}}function Tu(e,t,n,r){if(Da){var o=As(e,t,n,r);if(o===null)es(e,t,r,Ta,n),Kc(e,r);else if(nv(o,e,t,n,r))r.stopPropagation();else if(Kc(e,r),t&4&&-1<tv.indexOf(e)){for(;o!==null;){var i=Oi(o);if(i!==null&&Ch(i),i=As(e,t,n,r),i===null&&es(e,t,r,Ta,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else es(e,t,r,null,n)}}var Ta=null;function As(e,t,n,r){if(Ta=null,e=Cu(r),e=ir(e),e!==null)if(t=Sr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ta=e,null}function Mh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W0()){case Ru:return 1;case Ph:return 4;case Ra:case Q0:return 16;case Eh:return 536870912;default:return 16}default:return 16}}var Fn=null,Mu=null,ma=null;function Lh(){if(ma)return ma;var e,t=Mu,n=t.length,r,o="value"in Fn?Fn.value:Fn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return ma=o.slice(e,1<r?1-r:void 0)}function va(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vi(){return!0}function Gc(){return!1}function xt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vi:Gc,this.isPropagationStopped=Gc,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),t}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lu=xt(po),Ei=Se({},po,{view:0,detail:0}),av=xt(Ei),Vl,Wl,Ro,ll=Se({},Ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ro&&(Ro&&e.type==="mousemove"?(Vl=e.screenX-Ro.screenX,Wl=e.screenY-Ro.screenY):Wl=Vl=0,Ro=e),Vl)},movementY:function(e){return"movementY"in e?e.movementY:Wl}}),Yc=xt(ll),lv=Se({},ll,{dataTransfer:0}),sv=xt(lv),uv=Se({},Ei,{relatedTarget:0}),Ql=xt(uv),cv=Se({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),dv=xt(cv),fv=Se({},po,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hv=xt(fv),pv=Se({},po,{data:0}),Jc=xt(pv),mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gv[e])?!!t[e]:!1}function Nu(){return yv}var bv=Se({},Ei,{key:function(e){if(e.key){var t=mv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=va(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?va(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?va(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wv=xt(bv),xv=Se({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zc=xt(xv),kv=Se({},Ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),Sv=xt(kv),Pv=Se({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=xt(Pv),Ov=Se({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_v=xt(Ov),Cv=[9,13,27,32],Au=pn&&"CompositionEvent"in window,Vo=null;pn&&"documentMode"in document&&(Vo=document.documentMode);var Rv=pn&&"TextEvent"in window&&!Vo,Nh=pn&&(!Au||Vo&&8<Vo&&11>=Vo),ed=" ",td=!1;function Ah(e,t){switch(e){case"keyup":return Cv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function zv(e,t){switch(e){case"compositionend":return Fh(t);case"keypress":return t.which!==32?null:(td=!0,ed);case"textInput":return e=t.data,e===ed&&td?null:e;default:return null}}function Dv(e,t){if(Tr)return e==="compositionend"||!Au&&Ah(e,t)?(e=Lh(),ma=Mu=Fn=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nh&&t.locale!=="ko"?null:t.data;default:return null}}var Tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tv[e.type]:t==="textarea"}function jh(e,t,n,r){mh(r),t=Ma(t,"onChange"),0<t.length&&(n=new Lu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wo=null,oi=null;function Mv(e){Xh(e,0)}function sl(e){var t=Nr(e);if(sh(t))return e}function Lv(e,t){if(e==="change")return t}var Ih=!1;if(pn){var Kl;if(pn){var Xl="oninput"in document;if(!Xl){var rd=document.createElement("div");rd.setAttribute("oninput","return;"),Xl=typeof rd.oninput=="function"}Kl=Xl}else Kl=!1;Ih=Kl&&(!document.documentMode||9<document.documentMode)}function od(){Wo&&(Wo.detachEvent("onpropertychange",Uh),oi=Wo=null)}function Uh(e){if(e.propertyName==="value"&&sl(oi)){var t=[];jh(t,oi,e,Cu(e)),bh(Mv,t)}}function Nv(e,t,n){e==="focusin"?(od(),Wo=t,oi=n,Wo.attachEvent("onpropertychange",Uh)):e==="focusout"&&od()}function Av(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(oi)}function Fv(e,t){if(e==="click")return sl(t)}function jv(e,t){if(e==="input"||e==="change")return sl(t)}function Iv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:Iv;function ii(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ys.call(t,o)||!Ht(e[o],t[o]))return!1}return!0}function id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ad(e,t){var n=id(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=id(n)}}function $h(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$h(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hh(){for(var e=window,t=Oa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oa(e.document)}return t}function Fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uv(e){var t=Hh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$h(n.ownerDocument.documentElement,n)){if(r!==null&&Fu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ad(n,i);var a=ad(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $v=pn&&"documentMode"in document&&11>=document.documentMode,Mr=null,Fs=null,Qo=null,js=!1;function ld(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;js||Mr==null||Mr!==Oa(r)||(r=Mr,"selectionStart"in r&&Fu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qo&&ii(Qo,r)||(Qo=r,r=Ma(Fs,"onSelect"),0<r.length&&(t=new Lu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mr)))}function Wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lr={animationend:Wi("Animation","AnimationEnd"),animationiteration:Wi("Animation","AnimationIteration"),animationstart:Wi("Animation","AnimationStart"),transitionend:Wi("Transition","TransitionEnd")},Gl={},qh={};pn&&(qh=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function ul(e){if(Gl[e])return Gl[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qh)return Gl[e]=t[n];return e}var Bh=ul("animationend"),Vh=ul("animationiteration"),Wh=ul("animationstart"),Qh=ul("transitionend"),Kh=new Map,sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(e,t){Kh.set(e,t),kr(t,[e])}for(var Yl=0;Yl<sd.length;Yl++){var Jl=sd[Yl],Hv=Jl.toLowerCase(),qv=Jl[0].toUpperCase()+Jl.slice(1);Gn(Hv,"on"+qv)}Gn(Bh,"onAnimationEnd");Gn(Vh,"onAnimationIteration");Gn(Wh,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(Qh,"onTransitionEnd");oo("onMouseEnter",["mouseout","mouseover"]);oo("onMouseLeave",["mouseout","mouseover"]);oo("onPointerEnter",["pointerout","pointerover"]);oo("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function ud(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,H0(r,t,void 0,e),e.currentTarget=null}function Xh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;ud(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;ud(o,l,u),i=s}}}if(Ca)throw e=Ms,Ca=!1,Ms=null,e}function me(e,t){var n=t[qs];n===void 0&&(n=t[qs]=new Set);var r=e+"__bubble";n.has(r)||(Gh(t,e,2,!1),n.add(r))}function Zl(e,t,n){var r=0;t&&(r|=4),Gh(n,e,r,t)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function ai(e){if(!e[Qi]){e[Qi]=!0,rh.forEach(function(n){n!=="selectionchange"&&(Bv.has(n)||Zl(n,!1,e),Zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qi]||(t[Qi]=!0,Zl("selectionchange",!1,t))}}function Gh(e,t,n,r){switch(Mh(t)){case 1:var o=ov;break;case 4:o=iv;break;default:o=Tu}n=o.bind(null,t,n,e),o=void 0,!Ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function es(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=ir(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}bh(function(){var u=i,c=Cu(n),d=[];e:{var h=Kh.get(e);if(h!==void 0){var y=Lu,g=e;switch(e){case"keypress":if(va(n)===0)break e;case"keydown":case"keyup":y=wv;break;case"focusin":g="focus",y=Ql;break;case"focusout":g="blur",y=Ql;break;case"beforeblur":case"afterblur":y=Ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Sv;break;case Bh:case Vh:case Wh:y=dv;break;case Qh:y=Ev;break;case"scroll":y=av;break;case"wheel":y=_v;break;case"copy":case"cut":case"paste":y=hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Zc}var m=(t&4)!==0,S=!m&&e==="scroll",p=m?h!==null?h+"Capture":null:h;m=[];for(var f=u,v;f!==null;){v=f;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,p!==null&&(k=ei(f,p),k!=null&&m.push(li(f,k,v)))),S)break;f=f.return}0<m.length&&(h=new y(h,g,null,n,c),d.push({event:h,listeners:m}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==zs&&(g=n.relatedTarget||n.fromElement)&&(ir(g)||g[mn]))break e;if((y||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?ir(g):null,g!==null&&(S=Sr(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(m=Yc,k="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(m=Zc,k="onPointerLeave",p="onPointerEnter",f="pointer"),S=y==null?h:Nr(y),v=g==null?h:Nr(g),h=new m(k,f+"leave",y,n,c),h.target=S,h.relatedTarget=v,k=null,ir(c)===u&&(m=new m(p,f+"enter",g,n,c),m.target=v,m.relatedTarget=S,k=m),S=k,y&&g)t:{for(m=y,p=g,f=0,v=m;v;v=Or(v))f++;for(v=0,k=p;k;k=Or(k))v++;for(;0<f-v;)m=Or(m),f--;for(;0<v-f;)p=Or(p),v--;for(;f--;){if(m===p||p!==null&&m===p.alternate)break t;m=Or(m),p=Or(p)}m=null}else m=null;y!==null&&cd(d,h,y,m,!1),g!==null&&S!==null&&cd(d,S,g,m,!0)}}e:{if(h=u?Nr(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var O=Lv;else if(nd(h))if(Ih)O=jv;else{O=Av;var R=Nv}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(O=Fv);if(O&&(O=O(e,u))){jh(d,O,n,c);break e}R&&R(e,h,u),e==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Es(h,"number",h.value)}switch(R=u?Nr(u):window,e){case"focusin":(nd(R)||R.contentEditable==="true")&&(Mr=R,Fs=u,Qo=null);break;case"focusout":Qo=Fs=Mr=null;break;case"mousedown":js=!0;break;case"contextmenu":case"mouseup":case"dragend":js=!1,ld(d,n,c);break;case"selectionchange":if($v)break;case"keydown":case"keyup":ld(d,n,c)}var z;if(Au)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Tr?Ah(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Nh&&n.locale!=="ko"&&(Tr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Tr&&(z=Lh()):(Fn=c,Mu="value"in Fn?Fn.value:Fn.textContent,Tr=!0)),R=Ma(u,b),0<R.length&&(b=new Jc(b,e,null,n,c),d.push({event:b,listeners:R}),z?b.data=z:(z=Fh(n),z!==null&&(b.data=z)))),(z=Rv?zv(e,n):Dv(e,n))&&(u=Ma(u,"onBeforeInput"),0<u.length&&(c=new Jc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=z))}Xh(d,t)})}function li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ma(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ei(e,n),i!=null&&r.unshift(li(e,i,o)),i=ei(e,t),i!=null&&r.push(li(e,i,o))),e=e.return}return r}function Or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cd(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=ei(n,i),s!=null&&a.unshift(li(n,s,l))):o||(s=ei(n,i),s!=null&&a.push(li(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Vv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function dd(e){return(typeof e=="string"?e:""+e).replace(Vv,`
`).replace(Wv,"")}function Ki(e,t,n){if(t=dd(t),dd(e)!==t&&n)throw Error(D(425))}function La(){}var Is=null,Us=null;function $s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hs=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,fd=typeof Promise=="function"?Promise:void 0,Kv=typeof queueMicrotask=="function"?queueMicrotask:typeof fd<"u"?function(e){return fd.resolve(null).then(e).catch(Xv)}:Hs;function Xv(e){setTimeout(function(){throw e})}function ts(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ri(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ri(t)}function qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mo=Math.random().toString(36).slice(2),Kt="__reactFiber$"+mo,si="__reactProps$"+mo,mn="__reactContainer$"+mo,qs="__reactEvents$"+mo,Gv="__reactListeners$"+mo,Yv="__reactHandles$"+mo;function ir(e){var t=e[Kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mn]||n[Kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hd(e);e!==null;){if(n=e[Kt])return n;e=hd(e)}return t}e=n,n=e.parentNode}return null}function Oi(e){return e=e[Kt]||e[mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function cl(e){return e[si]||null}var Bs=[],Ar=-1;function Yn(e){return{current:e}}function ve(e){0>Ar||(e.current=Bs[Ar],Bs[Ar]=null,Ar--)}function fe(e,t){Ar++,Bs[Ar]=e.current,e.current=t}var Xn={},Je=Yn(Xn),ut=Yn(!1),mr=Xn;function io(e,t){var n=e.type.contextTypes;if(!n)return Xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ct(e){return e=e.childContextTypes,e!=null}function Na(){ve(ut),ve(Je)}function pd(e,t,n){if(Je.current!==Xn)throw Error(D(168));fe(Je,t),fe(ut,n)}function Yh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(D(108,N0(e)||"Unknown",o));return Se({},n,r)}function Aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xn,mr=Je.current,fe(Je,e),fe(ut,ut.current),!0}function md(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=Yh(e,t,mr),r.__reactInternalMemoizedMergedChildContext=e,ve(ut),ve(Je),fe(Je,e)):ve(ut),fe(ut,n)}var un=null,dl=!1,ns=!1;function Jh(e){un===null?un=[e]:un.push(e)}function Jv(e){dl=!0,Jh(e)}function Jn(){if(!ns&&un!==null){ns=!0;var e=0,t=ce;try{var n=un;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}un=null,dl=!1}catch(o){throw un!==null&&(un=un.slice(e+1)),Sh(Ru,Jn),o}finally{ce=t,ns=!1}}return null}var Fr=[],jr=0,Fa=null,ja=0,Et=[],Ot=0,vr=null,cn=1,dn="";function nr(e,t){Fr[jr++]=ja,Fr[jr++]=Fa,Fa=e,ja=t}function Zh(e,t,n){Et[Ot++]=cn,Et[Ot++]=dn,Et[Ot++]=vr,vr=e;var r=cn;e=dn;var o=32-Ut(r)-1;r&=~(1<<o),n+=1;var i=32-Ut(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,cn=1<<32-Ut(t)+o|n<<o|r,dn=i+e}else cn=1<<i|n<<o|r,dn=e}function ju(e){e.return!==null&&(nr(e,1),Zh(e,1,0))}function Iu(e){for(;e===Fa;)Fa=Fr[--jr],Fr[jr]=null,ja=Fr[--jr],Fr[jr]=null;for(;e===vr;)vr=Et[--Ot],Et[Ot]=null,dn=Et[--Ot],Et[Ot]=null,cn=Et[--Ot],Et[Ot]=null}var yt=null,gt=null,be=!1,jt=null;function ep(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,gt=qn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vr!==null?{id:cn,overflow:dn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yt=e,gt=null,!0):!1;default:return!1}}function Vs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ws(e){if(be){var t=gt;if(t){var n=t;if(!vd(e,t)){if(Vs(e))throw Error(D(418));t=qn(n.nextSibling);var r=yt;t&&vd(e,t)?ep(r,n):(e.flags=e.flags&-4097|2,be=!1,yt=e)}}else{if(Vs(e))throw Error(D(418));e.flags=e.flags&-4097|2,be=!1,yt=e}}}function gd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function Xi(e){if(e!==yt)return!1;if(!be)return gd(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$s(e.type,e.memoizedProps)),t&&(t=gt)){if(Vs(e))throw tp(),Error(D(418));for(;t;)ep(e,t),t=qn(t.nextSibling)}if(gd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){gt=qn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=yt?qn(e.stateNode.nextSibling):null;return!0}function tp(){for(var e=gt;e;)e=qn(e.nextSibling)}function ao(){gt=yt=null,be=!1}function Uu(e){jt===null?jt=[e]:jt.push(e)}var Zv=yn.ReactCurrentBatchConfig;function zo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Gi(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yd(e){var t=e._init;return t(e._payload)}function np(e){function t(p,f){if(e){var v=p.deletions;v===null?(p.deletions=[f],p.flags|=16):v.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function o(p,f){return p=Qn(p,f),p.index=0,p.sibling=null,p}function i(p,f,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<f?(p.flags|=2,f):v):(p.flags|=2,f)):(p.flags|=1048576,f)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,f,v,k){return f===null||f.tag!==6?(f=us(v,p.mode,k),f.return=p,f):(f=o(f,v),f.return=p,f)}function s(p,f,v,k){var O=v.type;return O===Dr?c(p,f,v.props.children,k,v.key):f!==null&&(f.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Cn&&yd(O)===f.type)?(k=o(f,v.props),k.ref=zo(p,f,v),k.return=p,k):(k=Sa(v.type,v.key,v.props,null,p.mode,k),k.ref=zo(p,f,v),k.return=p,k)}function u(p,f,v,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=cs(v,p.mode,k),f.return=p,f):(f=o(f,v.children||[]),f.return=p,f)}function c(p,f,v,k,O){return f===null||f.tag!==7?(f=pr(v,p.mode,k,O),f.return=p,f):(f=o(f,v),f.return=p,f)}function d(p,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=us(""+f,p.mode,v),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ii:return v=Sa(f.type,f.key,f.props,null,p.mode,v),v.ref=zo(p,null,f),v.return=p,v;case zr:return f=cs(f,p.mode,v),f.return=p,f;case Cn:var k=f._init;return d(p,k(f._payload),v)}if(jo(f)||Eo(f))return f=pr(f,p.mode,v,null),f.return=p,f;Gi(p,f)}return null}function h(p,f,v,k){var O=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return O!==null?null:l(p,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ii:return v.key===O?s(p,f,v,k):null;case zr:return v.key===O?u(p,f,v,k):null;case Cn:return O=v._init,h(p,f,O(v._payload),k)}if(jo(v)||Eo(v))return O!==null?null:c(p,f,v,k,null);Gi(p,v)}return null}function y(p,f,v,k,O){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(v)||null,l(f,p,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ii:return p=p.get(k.key===null?v:k.key)||null,s(f,p,k,O);case zr:return p=p.get(k.key===null?v:k.key)||null,u(f,p,k,O);case Cn:var R=k._init;return y(p,f,v,R(k._payload),O)}if(jo(k)||Eo(k))return p=p.get(v)||null,c(f,p,k,O,null);Gi(f,k)}return null}function g(p,f,v,k){for(var O=null,R=null,z=f,b=f=0,T=null;z!==null&&b<v.length;b++){z.index>b?(T=z,z=null):T=z.sibling;var L=h(p,z,v[b],k);if(L===null){z===null&&(z=T);break}e&&z&&L.alternate===null&&t(p,z),f=i(L,f,b),R===null?O=L:R.sibling=L,R=L,z=T}if(b===v.length)return n(p,z),be&&nr(p,b),O;if(z===null){for(;b<v.length;b++)z=d(p,v[b],k),z!==null&&(f=i(z,f,b),R===null?O=z:R.sibling=z,R=z);return be&&nr(p,b),O}for(z=r(p,z);b<v.length;b++)T=y(z,p,b,v[b],k),T!==null&&(e&&T.alternate!==null&&z.delete(T.key===null?b:T.key),f=i(T,f,b),R===null?O=T:R.sibling=T,R=T);return e&&z.forEach(function(q){return t(p,q)}),be&&nr(p,b),O}function m(p,f,v,k){var O=Eo(v);if(typeof O!="function")throw Error(D(150));if(v=O.call(v),v==null)throw Error(D(151));for(var R=O=null,z=f,b=f=0,T=null,L=v.next();z!==null&&!L.done;b++,L=v.next()){z.index>b?(T=z,z=null):T=z.sibling;var q=h(p,z,L.value,k);if(q===null){z===null&&(z=T);break}e&&z&&q.alternate===null&&t(p,z),f=i(q,f,b),R===null?O=q:R.sibling=q,R=q,z=T}if(L.done)return n(p,z),be&&nr(p,b),O;if(z===null){for(;!L.done;b++,L=v.next())L=d(p,L.value,k),L!==null&&(f=i(L,f,b),R===null?O=L:R.sibling=L,R=L);return be&&nr(p,b),O}for(z=r(p,z);!L.done;b++,L=v.next())L=y(z,p,b,L.value,k),L!==null&&(e&&L.alternate!==null&&z.delete(L.key===null?b:L.key),f=i(L,f,b),R===null?O=L:R.sibling=L,R=L);return e&&z.forEach(function(W){return t(p,W)}),be&&nr(p,b),O}function S(p,f,v,k){if(typeof v=="object"&&v!==null&&v.type===Dr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ii:e:{for(var O=v.key,R=f;R!==null;){if(R.key===O){if(O=v.type,O===Dr){if(R.tag===7){n(p,R.sibling),f=o(R,v.props.children),f.return=p,p=f;break e}}else if(R.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Cn&&yd(O)===R.type){n(p,R.sibling),f=o(R,v.props),f.ref=zo(p,R,v),f.return=p,p=f;break e}n(p,R);break}else t(p,R);R=R.sibling}v.type===Dr?(f=pr(v.props.children,p.mode,k,v.key),f.return=p,p=f):(k=Sa(v.type,v.key,v.props,null,p.mode,k),k.ref=zo(p,f,v),k.return=p,p=k)}return a(p);case zr:e:{for(R=v.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(p,f.sibling),f=o(f,v.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=cs(v,p.mode,k),f.return=p,p=f}return a(p);case Cn:return R=v._init,S(p,f,R(v._payload),k)}if(jo(v))return g(p,f,v,k);if(Eo(v))return m(p,f,v,k);Gi(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(p,f.sibling),f=o(f,v),f.return=p,p=f):(n(p,f),f=us(v,p.mode,k),f.return=p,p=f),a(p)):n(p,f)}return S}var lo=np(!0),rp=np(!1),Ia=Yn(null),Ua=null,Ir=null,$u=null;function Hu(){$u=Ir=Ua=null}function qu(e){var t=Ia.current;ve(Ia),e._currentValue=t}function Qs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qr(e,t){Ua=e,$u=Ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(st=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if($u!==e)if(e={context:e,memoizedValue:t,next:null},Ir===null){if(Ua===null)throw Error(D(308));Ir=e,Ua.dependencies={lanes:0,firstContext:e}}else Ir=Ir.next=e;return t}var ar=null;function Bu(e){ar===null?ar=[e]:ar.push(e)}function op(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Bu(t)):(n.next=o.next,o.next=n),t.interleaved=n,vn(e,r)}function vn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rn=!1;function Vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ip(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,vn(e,n)}return o=r.interleaved,o===null?(t.next=t,Bu(r)):(t.next=o.next,o.next=t),r.interleaved=t,vn(e,n)}function ga(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zu(e,n)}}function bd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $a(e,t,n,r){var o=e.updateQueue;Rn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;a=0,c=u=s=null,l=i;do{var h=l.lane,y=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,m=l;switch(h=t,y=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){d=g.call(y,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,h=typeof g=="function"?g.call(y,d,h):g,h==null)break e;d=Se({},d,h);break e;case 2:Rn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=y,s=d):c=c.next=y,a|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(c===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);yr|=a,e.lanes=a,e.memoizedState=d}}function wd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(D(191,o));o.call(r)}}}var _i={},Yt=Yn(_i),ui=Yn(_i),ci=Yn(_i);function lr(e){if(e===_i)throw Error(D(174));return e}function Wu(e,t){switch(fe(ci,t),fe(ui,e),fe(Yt,_i),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_s(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_s(t,e)}ve(Yt),fe(Yt,t)}function so(){ve(Yt),ve(ui),ve(ci)}function ap(e){lr(ci.current);var t=lr(Yt.current),n=_s(t,e.type);t!==n&&(fe(ui,e),fe(Yt,n))}function Qu(e){ui.current===e&&(ve(Yt),ve(ui))}var xe=Yn(0);function Ha(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rs=[];function Ku(){for(var e=0;e<rs.length;e++)rs[e]._workInProgressVersionPrimary=null;rs.length=0}var ya=yn.ReactCurrentDispatcher,os=yn.ReactCurrentBatchConfig,gr=0,ke=null,Me=null,je=null,qa=!1,Ko=!1,di=0,eg=0;function Qe(){throw Error(D(321))}function Xu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function Gu(e,t,n,r,o,i){if(gr=i,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ya.current=e===null||e.memoizedState===null?og:ig,e=n(r,o),Ko){i=0;do{if(Ko=!1,di=0,25<=i)throw Error(D(301));i+=1,je=Me=null,t.updateQueue=null,ya.current=ag,e=n(r,o)}while(Ko)}if(ya.current=Ba,t=Me!==null&&Me.next!==null,gr=0,je=Me=ke=null,qa=!1,t)throw Error(D(300));return e}function Yu(){var e=di!==0;return di=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ke.memoizedState=je=e:je=je.next=e,je}function zt(){if(Me===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=je===null?ke.memoizedState:je.next;if(t!==null)je=t,Me=e;else{if(e===null)throw Error(D(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},je===null?ke.memoizedState=je=e:je=je.next=e}return je}function fi(e,t){return typeof t=="function"?t(e):t}function is(e){var t=zt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=Me,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var c=u.lane;if((gr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,ke.lanes|=c,yr|=c}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,Ht(r,t.memoizedState)||(st=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ke.lanes|=i,yr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function as(e){var t=zt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ht(i,t.memoizedState)||(st=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function lp(){}function sp(e,t){var n=ke,r=zt(),o=t(),i=!Ht(r.memoizedState,o);if(i&&(r.memoizedState=o,st=!0),r=r.queue,Ju(dp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,hi(9,cp.bind(null,n,r,o,t),void 0,null),Ie===null)throw Error(D(349));gr&30||up(n,t,o)}return o}function up(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cp(e,t,n,r){t.value=n,t.getSnapshot=r,fp(t)&&hp(e)}function dp(e,t,n){return n(function(){fp(t)&&hp(e)})}function fp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function hp(e){var t=vn(e,1);t!==null&&$t(t,e,1,-1)}function xd(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:e},t.queue=e,e=e.dispatch=rg.bind(null,ke,e),[t.memoizedState,e]}function hi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pp(){return zt().memoizedState}function ba(e,t,n,r){var o=Bt();ke.flags|=e,o.memoizedState=hi(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var o=zt();r=r===void 0?null:r;var i=void 0;if(Me!==null){var a=Me.memoizedState;if(i=a.destroy,r!==null&&Xu(r,a.deps)){o.memoizedState=hi(t,n,i,r);return}}ke.flags|=e,o.memoizedState=hi(1|t,n,i,r)}function kd(e,t){return ba(8390656,8,e,t)}function Ju(e,t){return fl(2048,8,e,t)}function mp(e,t){return fl(4,2,e,t)}function vp(e,t){return fl(4,4,e,t)}function gp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yp(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,gp.bind(null,t,e),n)}function Zu(){}function bp(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wp(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xp(e,t,n){return gr&21?(Ht(n,t)||(n=Oh(),ke.lanes|=n,yr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n)}function tg(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=os.transition;os.transition={};try{e(!1),t()}finally{ce=n,os.transition=r}}function kp(){return zt().memoizedState}function ng(e,t,n){var r=Wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sp(e))Pp(t,n);else if(n=op(e,t,n,r),n!==null){var o=rt();$t(n,e,r,o),Ep(n,t,r)}}function rg(e,t,n){var r=Wn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sp(e))Pp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,Ht(l,a)){var s=t.interleaved;s===null?(o.next=o,Bu(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=op(e,t,o,r),n!==null&&(o=rt(),$t(n,e,r,o),Ep(n,t,r))}}function Sp(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Pp(e,t){Ko=qa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ep(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zu(e,n)}}var Ba={readContext:Rt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},og={readContext:Rt,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:kd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ba(4194308,4,gp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ba(4194308,4,e,t)},useInsertionEffect:function(e,t){return ba(4,2,e,t)},useMemo:function(e,t){var n=Bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ng.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:xd,useDebugValue:Zu,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=xd(!1),t=e[0];return e=tg.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,o=Bt();if(be){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Ie===null)throw Error(D(349));gr&30||up(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,kd(dp.bind(null,r,i,e),[e]),r.flags|=2048,hi(9,cp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Bt(),t=Ie.identifierPrefix;if(be){var n=dn,r=cn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=eg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ig={readContext:Rt,useCallback:bp,useContext:Rt,useEffect:Ju,useImperativeHandle:yp,useInsertionEffect:mp,useLayoutEffect:vp,useMemo:wp,useReducer:is,useRef:pp,useState:function(){return is(fi)},useDebugValue:Zu,useDeferredValue:function(e){var t=zt();return xp(t,Me.memoizedState,e)},useTransition:function(){var e=is(fi)[0],t=zt().memoizedState;return[e,t]},useMutableSource:lp,useSyncExternalStore:sp,useId:kp,unstable_isNewReconciler:!1},ag={readContext:Rt,useCallback:bp,useContext:Rt,useEffect:Ju,useImperativeHandle:yp,useInsertionEffect:mp,useLayoutEffect:vp,useMemo:wp,useReducer:as,useRef:pp,useState:function(){return as(fi)},useDebugValue:Zu,useDeferredValue:function(e){var t=zt();return Me===null?t.memoizedState=e:xp(t,Me.memoizedState,e)},useTransition:function(){var e=as(fi)[0],t=zt().memoizedState;return[e,t]},useMutableSource:lp,useSyncExternalStore:sp,useId:kp,unstable_isNewReconciler:!1};function Mt(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hl={isMounted:function(e){return(e=e._reactInternals)?Sr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=rt(),o=Wn(e),i=fn(r,o);i.payload=t,n!=null&&(i.callback=n),t=Bn(e,i,o),t!==null&&($t(t,e,o,r),ga(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=rt(),o=Wn(e),i=fn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Bn(e,i,o),t!==null&&($t(t,e,o,r),ga(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),r=Wn(e),o=fn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Bn(e,o,r),t!==null&&($t(t,e,r,n),ga(t,e,r))}};function Sd(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ii(n,r)||!ii(o,i):!0}function Op(e,t,n){var r=!1,o=Xn,i=t.contextType;return typeof i=="object"&&i!==null?i=Rt(i):(o=ct(t)?mr:Je.current,r=t.contextTypes,i=(r=r!=null)?io(e,o):Xn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Pd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hl.enqueueReplaceState(t,t.state,null)}function Xs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Vu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Rt(i):(i=ct(t)?mr:Je.current,o.context=io(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ks(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&hl.enqueueReplaceState(o,o.state,null),$a(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function uo(e,t){try{var n="",r=t;do n+=L0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ls(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Gs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lg=typeof WeakMap=="function"?WeakMap:Map;function _p(e,t,n){n=fn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wa||(Wa=!0,au=r),Gs(e,t)},n}function Cp(e,t,n){n=fn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Gs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Gs(e,t),typeof r!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ed(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=xg.bind(null,e,t,n),t.then(e,e))}function Od(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _d(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=fn(-1,1),t.tag=2,Bn(n,t,1))),n.lanes|=1),e)}var sg=yn.ReactCurrentOwner,st=!1;function tt(e,t,n,r){t.child=e===null?rp(t,null,n,r):lo(t,e.child,n,r)}function Cd(e,t,n,r,o){n=n.render;var i=t.ref;return Qr(t,o),r=Gu(e,t,n,r,i,o),n=Yu(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gn(e,t,o)):(be&&n&&ju(t),t.flags|=1,tt(e,t,r,o),t.child)}function Rd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!lc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Rp(e,t,i,r,o)):(e=Sa(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ii,n(a,r)&&e.ref===t.ref)return gn(e,t,o)}return t.flags|=1,e=Qn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Rp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ii(i,r)&&e.ref===t.ref)if(st=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(st=!0);else return t.lanes=e.lanes,gn(e,t,o)}return Ys(e,t,n,r,o)}function zp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe($r,mt),mt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe($r,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,fe($r,mt),mt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,fe($r,mt),mt|=r;return tt(e,t,o,n),t.child}function Dp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ys(e,t,n,r,o){var i=ct(n)?mr:Je.current;return i=io(t,i),Qr(t,o),n=Gu(e,t,n,r,i,o),r=Yu(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gn(e,t,o)):(be&&r&&ju(t),t.flags|=1,tt(e,t,n,o),t.child)}function zd(e,t,n,r,o){if(ct(n)){var i=!0;Aa(t)}else i=!1;if(Qr(t,o),t.stateNode===null)wa(e,t),Op(t,n,r),Xs(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=ct(n)?mr:Je.current,u=io(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Pd(t,a,r,u),Rn=!1;var h=t.memoizedState;a.state=h,$a(t,r,a,o),s=t.memoizedState,l!==r||h!==s||ut.current||Rn?(typeof c=="function"&&(Ks(t,n,c,r),s=t.memoizedState),(l=Rn||Sd(t,n,l,r,h,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ip(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Mt(t.type,l),a.props=u,d=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Rt(s):(s=ct(n)?mr:Je.current,s=io(t,s));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||h!==s)&&Pd(t,a,r,s),Rn=!1,h=t.memoizedState,a.state=h,$a(t,r,a,o);var g=t.memoizedState;l!==d||h!==g||ut.current||Rn?(typeof y=="function"&&(Ks(t,n,y,r),g=t.memoizedState),(u=Rn||Sd(t,n,u,r,h,g,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Js(e,t,n,r,i,o)}function Js(e,t,n,r,o,i){Dp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&md(t,n,!1),gn(e,t,i);r=t.stateNode,sg.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=lo(t,e.child,null,i),t.child=lo(t,null,l,i)):tt(e,t,l,i),t.memoizedState=r.state,o&&md(t,n,!0),t.child}function Tp(e){var t=e.stateNode;t.pendingContext?pd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pd(e,t.context,!1),Wu(e,t.containerInfo)}function Dd(e,t,n,r,o){return ao(),Uu(o),t.flags|=256,tt(e,t,n,r),t.child}var Zs={dehydrated:null,treeContext:null,retryLane:0};function eu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mp(e,t,n){var r=t.pendingProps,o=xe.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),fe(xe,o&1),e===null)return Ws(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=vl(a,r,0,null),e=pr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=eu(n),t.memoizedState=Zs,e):ec(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return ug(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Qn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Qn(l,i):(i=pr(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?eu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Zs,r}return i=e.child,e=i.sibling,r=Qn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ec(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yi(e,t,n,r){return r!==null&&Uu(r),lo(t,e.child,null,n),e=ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ug(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=ls(Error(D(422))),Yi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=vl({mode:"visible",children:r.children},o,0,null),i=pr(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&lo(t,e.child,null,a),t.child.memoizedState=eu(a),t.memoizedState=Zs,i);if(!(t.mode&1))return Yi(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(D(419)),r=ls(i,r,void 0),Yi(e,t,a,r)}if(l=(a&e.childLanes)!==0,st||l){if(r=Ie,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,vn(e,o),$t(r,e,o,-1))}return ac(),r=ls(Error(D(421))),Yi(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=kg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,gt=qn(o.nextSibling),yt=t,be=!0,jt=null,e!==null&&(Et[Ot++]=cn,Et[Ot++]=dn,Et[Ot++]=vr,cn=e.id,dn=e.overflow,vr=t),t=ec(t,r.children),t.flags|=4096,t)}function Td(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qs(e.return,t,n)}function ss(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Lp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(tt(e,t,r.children,n),r=xe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Td(e,n,t);else if(e.tag===19)Td(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(xe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ha(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ss(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ha(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ss(t,!0,n,null,i);break;case"together":ss(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cg(e,t,n){switch(t.tag){case 3:Tp(t),ao();break;case 5:ap(t);break;case 1:ct(t.type)&&Aa(t);break;case 4:Wu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;fe(Ia,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(fe(xe,xe.current&1),t.flags|=128,null):n&t.child.childLanes?Mp(e,t,n):(fe(xe,xe.current&1),e=gn(e,t,n),e!==null?e.sibling:null);fe(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),fe(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,zp(e,t,n)}return gn(e,t,n)}var Np,tu,Ap,Fp;Np=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tu=function(){};Ap=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,lr(Yt.current);var i=null;switch(n){case"input":o=Ss(e,o),r=Ss(e,r),i=[];break;case"select":o=Se({},o,{value:void 0}),r=Se({},r,{value:void 0}),i=[];break;case"textarea":o=Os(e,o),r=Os(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=La)}Cs(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&me("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Fp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Do(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dg(e,t,n){var r=t.pendingProps;switch(Iu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return ct(t.type)&&Na(),Ke(t),null;case 3:return r=t.stateNode,so(),ve(ut),ve(Je),Ku(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jt!==null&&(uu(jt),jt=null))),tu(e,t),Ke(t),null;case 5:Qu(t);var o=lr(ci.current);if(n=t.type,e!==null&&t.stateNode!=null)Ap(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Ke(t),null}if(e=lr(Yt.current),Xi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Kt]=t,r[si]=i,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(o=0;o<Uo.length;o++)me(Uo[o],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":$c(r,i),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},me("invalid",r);break;case"textarea":qc(r,i),me("invalid",r)}Cs(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ki(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ki(r.textContent,l,e),o=["children",""+l]):Jo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&me("scroll",r)}switch(n){case"input":Ui(r),Hc(r,i,!0);break;case"textarea":Ui(r),Bc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=La)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Kt]=t,e[si]=r,Np(e,t,!1,!1),t.stateNode=e;e:{switch(a=Rs(n,r),n){case"dialog":me("cancel",e),me("close",e),o=r;break;case"iframe":case"object":case"embed":me("load",e),o=r;break;case"video":case"audio":for(o=0;o<Uo.length;o++)me(Uo[o],e);o=r;break;case"source":me("error",e),o=r;break;case"img":case"image":case"link":me("error",e),me("load",e),o=r;break;case"details":me("toggle",e),o=r;break;case"input":$c(e,r),o=Ss(e,r),me("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Se({},r,{value:void 0}),me("invalid",e);break;case"textarea":qc(e,r),o=Os(e,r),me("invalid",e);break;default:o=r}Cs(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?ph(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&fh(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Zo(e,s):typeof s=="number"&&Zo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Jo.hasOwnProperty(i)?s!=null&&i==="onScroll"&&me("scroll",e):s!=null&&Pu(e,i,s,a))}switch(n){case"input":Ui(e),Hc(e,r,!1);break;case"textarea":Ui(e),Bc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qr(e,!!r.multiple,i,!1):r.defaultValue!=null&&qr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=La)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)Fp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=lr(ci.current),lr(Yt.current),Xi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Kt]=t,(i=r.nodeValue!==n)&&(e=yt,e!==null))switch(e.tag){case 3:Ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=t,t.stateNode=r}return Ke(t),null;case 13:if(ve(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&gt!==null&&t.mode&1&&!(t.flags&128))tp(),ao(),t.flags|=98560,i=!1;else if(i=Xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(D(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(D(317));i[Kt]=t}else ao(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),i=!1}else jt!==null&&(uu(jt),jt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||xe.current&1?Le===0&&(Le=3):ac())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return so(),tu(e,t),e===null&&ai(t.stateNode.containerInfo),Ke(t),null;case 10:return qu(t.type._context),Ke(t),null;case 17:return ct(t.type)&&Na(),Ke(t),null;case 19:if(ve(xe),i=t.memoizedState,i===null)return Ke(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Do(i,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ha(e),a!==null){for(t.flags|=128,Do(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(xe,xe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Re()>co&&(t.flags|=128,r=!0,Do(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ha(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Do(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!be)return Ke(t),null}else 2*Re()-i.renderingStartTime>co&&n!==1073741824&&(t.flags|=128,r=!0,Do(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Re(),t.sibling=null,n=xe.current,fe(xe,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return ic(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?mt&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function fg(e,t){switch(Iu(t),t.tag){case 1:return ct(t.type)&&Na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return so(),ve(ut),ve(Je),Ku(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qu(t),null;case 13:if(ve(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));ao()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(xe),null;case 4:return so(),null;case 10:return qu(t.type._context),null;case 22:case 23:return ic(),null;case 24:return null;default:return null}}var Ji=!1,Ge=!1,hg=typeof WeakSet=="function"?WeakSet:Set,U=null;function Ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function nu(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var Md=!1;function pg(e,t){if(Is=Da,e=Hh(),Fu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var y;d!==n||o!==0&&d.nodeType!==3||(l=a+o),d!==i||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(y=d.firstChild)!==null;)h=d,d=y;for(;;){if(d===e)break t;if(h===n&&++u===o&&(l=a),h===i&&++c===r&&(s=a),(y=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Us={focusedElem:e,selectionRange:n},Da=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,S=g.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?m:Mt(t.type,m),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(k){Ce(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return g=Md,Md=!1,g}function Xo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&nu(t,n,i)}o=o.next}while(o!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ru(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function jp(e){var t=e.alternate;t!==null&&(e.alternate=null,jp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kt],delete t[si],delete t[qs],delete t[Gv],delete t[Yv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ip(e){return e.tag===5||e.tag===3||e.tag===4}function Ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ip(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=La));else if(r!==4&&(e=e.child,e!==null))for(ou(e,t,n),e=e.sibling;e!==null;)ou(e,t,n),e=e.sibling}function iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(iu(e,t,n),e=e.sibling;e!==null;)iu(e,t,n),e=e.sibling}var He=null,At=!1;function Sn(e,t,n){for(n=n.child;n!==null;)Up(e,t,n),n=n.sibling}function Up(e,t,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:Ge||Ur(n,t);case 6:var r=He,o=At;He=null,Sn(e,t,n),He=r,At=o,He!==null&&(At?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(At?(e=He,n=n.stateNode,e.nodeType===8?ts(e.parentNode,n):e.nodeType===1&&ts(e,n),ri(e)):ts(He,n.stateNode));break;case 4:r=He,o=At,He=n.stateNode.containerInfo,At=!0,Sn(e,t,n),He=r,At=o;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&nu(n,t,a),o=o.next}while(o!==r)}Sn(e,t,n);break;case 1:if(!Ge&&(Ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,t,l)}Sn(e,t,n);break;case 21:Sn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,Sn(e,t,n),Ge=r):Sn(e,t,n);break;default:Sn(e,t,n)}}function Nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hg),t.forEach(function(r){var o=Sg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:He=l.stateNode,At=!1;break e;case 3:He=l.stateNode.containerInfo,At=!0;break e;case 4:He=l.stateNode.containerInfo,At=!0;break e}l=l.return}if(He===null)throw Error(D(160));Up(i,a,o),He=null,At=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Ce(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$p(t,e),t=t.sibling}function $p(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dt(t,e),qt(e),r&4){try{Xo(3,e,e.return),pl(3,e)}catch(m){Ce(e,e.return,m)}try{Xo(5,e,e.return)}catch(m){Ce(e,e.return,m)}}break;case 1:Dt(t,e),qt(e),r&512&&n!==null&&Ur(n,n.return);break;case 5:if(Dt(t,e),qt(e),r&512&&n!==null&&Ur(n,n.return),e.flags&32){var o=e.stateNode;try{Zo(o,"")}catch(m){Ce(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&uh(o,i),Rs(l,a);var u=Rs(l,i);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?ph(o,d):c==="dangerouslySetInnerHTML"?fh(o,d):c==="children"?Zo(o,d):Pu(o,c,d,u)}switch(l){case"input":Ps(o,i);break;case"textarea":ch(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?qr(o,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?qr(o,!!i.multiple,i.defaultValue,!0):qr(o,!!i.multiple,i.multiple?[]:"",!1))}o[si]=i}catch(m){Ce(e,e.return,m)}}break;case 6:if(Dt(t,e),qt(e),r&4){if(e.stateNode===null)throw Error(D(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(m){Ce(e,e.return,m)}}break;case 3:if(Dt(t,e),qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ri(t.containerInfo)}catch(m){Ce(e,e.return,m)}break;case 4:Dt(t,e),qt(e);break;case 13:Dt(t,e),qt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(rc=Re())),r&4&&Nd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(u=Ge)||c,Dt(t,e),Ge=u):Dt(t,e),qt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(U=e,c=e.child;c!==null;){for(d=U=c;U!==null;){switch(h=U,y=h.child,h.tag){case 0:case 11:case 14:case 15:Xo(4,h,h.return);break;case 1:Ur(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){Ce(r,n,m)}}break;case 5:Ur(h,h.return);break;case 22:if(h.memoizedState!==null){Fd(d);continue}}y!==null?(y.return=h,U=y):Fd(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=hh("display",a))}catch(m){Ce(e,e.return,m)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){Ce(e,e.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Dt(t,e),qt(e),r&4&&Nd(e);break;case 21:break;default:Dt(t,e),qt(e)}}function qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ip(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Zo(o,""),r.flags&=-33);var i=Ld(e);iu(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ld(e);ou(e,l,a);break;default:throw Error(D(161))}}catch(s){Ce(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mg(e,t,n){U=e,Hp(e)}function Hp(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var o=U,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ji;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Ge;l=Ji;var u=Ge;if(Ji=a,(Ge=s)&&!u)for(U=o;U!==null;)a=U,s=a.child,a.tag===22&&a.memoizedState!==null?jd(o):s!==null?(s.return=a,U=s):jd(o);for(;i!==null;)U=i,Hp(i),i=i.sibling;U=o,Ji=l,Ge=u}Ad(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,U=i):Ad(e)}}function Ad(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ge||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Mt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&wd(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ri(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ge||t.flags&512&&ru(t)}catch(h){Ce(t,t.return,h)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Fd(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function jd(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(s){Ce(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Ce(t,o,s)}}var i=t.return;try{ru(t)}catch(s){Ce(t,i,s)}break;case 5:var a=t.return;try{ru(t)}catch(s){Ce(t,a,s)}}}catch(s){Ce(t,t.return,s)}if(t===e){U=null;break}var l=t.sibling;if(l!==null){l.return=t.return,U=l;break}U=t.return}}var vg=Math.ceil,Va=yn.ReactCurrentDispatcher,tc=yn.ReactCurrentOwner,Ct=yn.ReactCurrentBatchConfig,re=0,Ie=null,Te=null,qe=0,mt=0,$r=Yn(0),Le=0,pi=null,yr=0,ml=0,nc=0,Go=null,lt=null,rc=0,co=1/0,sn=null,Wa=!1,au=null,Vn=null,Zi=!1,jn=null,Qa=0,Yo=0,lu=null,xa=-1,ka=0;function rt(){return re&6?Re():xa!==-1?xa:xa=Re()}function Wn(e){return e.mode&1?re&2&&qe!==0?qe&-qe:Zv.transition!==null?(ka===0&&(ka=Oh()),ka):(e=ce,e!==0||(e=window.event,e=e===void 0?16:Mh(e.type)),e):1}function $t(e,t,n,r){if(50<Yo)throw Yo=0,lu=null,Error(D(185));Pi(e,n,r),(!(re&2)||e!==Ie)&&(e===Ie&&(!(re&2)&&(ml|=n),Le===4&&Dn(e,qe)),dt(e,r),n===1&&re===0&&!(t.mode&1)&&(co=Re()+500,dl&&Jn()))}function dt(e,t){var n=e.callbackNode;Z0(e,t);var r=za(e,e===Ie?qe:0);if(r===0)n!==null&&Qc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qc(n),t===1)e.tag===0?Jv(Id.bind(null,e)):Jh(Id.bind(null,e)),Kv(function(){!(re&6)&&Jn()}),n=null;else{switch(_h(r)){case 1:n=Ru;break;case 4:n=Ph;break;case 16:n=Ra;break;case 536870912:n=Eh;break;default:n=Ra}n=Gp(n,qp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qp(e,t){if(xa=-1,ka=0,re&6)throw Error(D(327));var n=e.callbackNode;if(Kr()&&e.callbackNode!==n)return null;var r=za(e,e===Ie?qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ka(e,r);else{t=r;var o=re;re|=2;var i=Vp();(Ie!==e||qe!==t)&&(sn=null,co=Re()+500,hr(e,t));do try{bg();break}catch(l){Bp(e,l)}while(!0);Hu(),Va.current=i,re=o,Te!==null?t=0:(Ie=null,qe=0,t=Le)}if(t!==0){if(t===2&&(o=Ls(e),o!==0&&(r=o,t=su(e,o))),t===1)throw n=pi,hr(e,0),Dn(e,r),dt(e,Re()),n;if(t===6)Dn(e,r);else{if(o=e.current.alternate,!(r&30)&&!gg(o)&&(t=Ka(e,r),t===2&&(i=Ls(e),i!==0&&(r=i,t=su(e,i))),t===1))throw n=pi,hr(e,0),Dn(e,r),dt(e,Re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:rr(e,lt,sn);break;case 3:if(Dn(e,r),(r&130023424)===r&&(t=rc+500-Re(),10<t)){if(za(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){rt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Hs(rr.bind(null,e,lt,sn),t);break}rr(e,lt,sn);break;case 4:if(Dn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Ut(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vg(r/1960))-r,10<r){e.timeoutHandle=Hs(rr.bind(null,e,lt,sn),r);break}rr(e,lt,sn);break;case 5:rr(e,lt,sn);break;default:throw Error(D(329))}}}return dt(e,Re()),e.callbackNode===n?qp.bind(null,e):null}function su(e,t){var n=Go;return e.current.memoizedState.isDehydrated&&(hr(e,t).flags|=256),e=Ka(e,t),e!==2&&(t=lt,lt=n,t!==null&&uu(t)),e}function uu(e){lt===null?lt=e:lt.push.apply(lt,e)}function gg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ht(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t){for(t&=~nc,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ut(t),r=1<<n;e[n]=-1,t&=~r}}function Id(e){if(re&6)throw Error(D(327));Kr();var t=za(e,0);if(!(t&1))return dt(e,Re()),null;var n=Ka(e,t);if(e.tag!==0&&n===2){var r=Ls(e);r!==0&&(t=r,n=su(e,r))}if(n===1)throw n=pi,hr(e,0),Dn(e,t),dt(e,Re()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rr(e,lt,sn),dt(e,Re()),null}function oc(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(co=Re()+500,dl&&Jn())}}function br(e){jn!==null&&jn.tag===0&&!(re&6)&&Kr();var t=re;re|=1;var n=Ct.transition,r=ce;try{if(Ct.transition=null,ce=1,e)return e()}finally{ce=r,Ct.transition=n,re=t,!(re&6)&&Jn()}}function ic(){mt=$r.current,ve($r)}function hr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qv(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(Iu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Na();break;case 3:so(),ve(ut),ve(Je),Ku();break;case 5:Qu(r);break;case 4:so();break;case 13:ve(xe);break;case 19:ve(xe);break;case 10:qu(r.type._context);break;case 22:case 23:ic()}n=n.return}if(Ie=e,Te=e=Qn(e.current,null),qe=mt=t,Le=0,pi=null,nc=ml=yr=0,lt=Go=null,ar!==null){for(t=0;t<ar.length;t++)if(n=ar[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}ar=null}return e}function Bp(e,t){do{var n=Te;try{if(Hu(),ya.current=Ba,qa){for(var r=ke.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}qa=!1}if(gr=0,je=Me=ke=null,Ko=!1,di=0,tc.current=null,n===null||n.return===null){Le=1,pi=t,Te=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=qe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Od(a);if(y!==null){y.flags&=-257,_d(y,a,l,i,t),y.mode&1&&Ed(i,u,t),t=y,s=u;var g=t.updateQueue;if(g===null){var m=new Set;m.add(s),t.updateQueue=m}else g.add(s);break e}else{if(!(t&1)){Ed(i,u,t),ac();break e}s=Error(D(426))}}else if(be&&l.mode&1){var S=Od(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),_d(S,a,l,i,t),Uu(uo(s,l));break e}}i=s=uo(s,l),Le!==4&&(Le=2),Go===null?Go=[i]:Go.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=_p(i,s,t);bd(i,p);break e;case 1:l=s;var f=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Vn===null||!Vn.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Cp(i,l,t);bd(i,k);break e}}i=i.return}while(i!==null)}Qp(n)}catch(O){t=O,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function Vp(){var e=Va.current;return Va.current=Ba,e===null?Ba:e}function ac(){(Le===0||Le===3||Le===2)&&(Le=4),Ie===null||!(yr&268435455)&&!(ml&268435455)||Dn(Ie,qe)}function Ka(e,t){var n=re;re|=2;var r=Vp();(Ie!==e||qe!==t)&&(sn=null,hr(e,t));do try{yg();break}catch(o){Bp(e,o)}while(!0);if(Hu(),re=n,Va.current=r,Te!==null)throw Error(D(261));return Ie=null,qe=0,Le}function yg(){for(;Te!==null;)Wp(Te)}function bg(){for(;Te!==null&&!B0();)Wp(Te)}function Wp(e){var t=Xp(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?Qp(e):Te=t,tc.current=null}function Qp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fg(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Te=null;return}}else if(n=dg(n,t,mt),n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Le===0&&(Le=5)}function rr(e,t,n){var r=ce,o=Ct.transition;try{Ct.transition=null,ce=1,wg(e,t,n,r)}finally{Ct.transition=o,ce=r}return null}function wg(e,t,n,r){do Kr();while(jn!==null);if(re&6)throw Error(D(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ev(e,i),e===Ie&&(Te=Ie=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zi||(Zi=!0,Gp(Ra,function(){return Kr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ct.transition,Ct.transition=null;var a=ce;ce=1;var l=re;re|=4,tc.current=null,pg(e,n),$p(n,e),Uv(Us),Da=!!Is,Us=Is=null,e.current=n,mg(n),V0(),re=l,ce=a,Ct.transition=i}else e.current=n;if(Zi&&(Zi=!1,jn=e,Qa=o),i=e.pendingLanes,i===0&&(Vn=null),K0(n.stateNode),dt(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Wa)throw Wa=!1,e=au,au=null,e;return Qa&1&&e.tag!==0&&Kr(),i=e.pendingLanes,i&1?e===lu?Yo++:(Yo=0,lu=e):Yo=0,Jn(),null}function Kr(){if(jn!==null){var e=_h(Qa),t=Ct.transition,n=ce;try{if(Ct.transition=null,ce=16>e?16:e,jn===null)var r=!1;else{if(e=jn,jn=null,Qa=0,re&6)throw Error(D(331));var o=re;for(re|=4,U=e.current;U!==null;){var i=U,a=i.child;if(U.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Xo(8,c,i)}var d=c.child;if(d!==null)d.return=c,U=d;else for(;U!==null;){c=U;var h=c.sibling,y=c.return;if(jp(c),c===u){U=null;break}if(h!==null){h.return=y,U=h;break}U=y}}}var g=i.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var S=m.sibling;m.sibling=null,m=S}while(m!==null)}}U=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,U=a;else e:for(;U!==null;){if(i=U,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xo(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,U=p;break e}U=i.return}}var f=e.current;for(U=f;U!==null;){a=U;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,U=v;else e:for(a=f;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pl(9,l)}}catch(O){Ce(l,l.return,O)}if(l===a){U=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,U=k;break e}U=l.return}}if(re=o,Jn(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(al,e)}catch{}r=!0}return r}finally{ce=n,Ct.transition=t}}return!1}function Ud(e,t,n){t=uo(n,t),t=_p(e,t,1),e=Bn(e,t,1),t=rt(),e!==null&&(Pi(e,1,t),dt(e,t))}function Ce(e,t,n){if(e.tag===3)Ud(e,e,n);else for(;t!==null;){if(t.tag===3){Ud(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vn===null||!Vn.has(r))){e=uo(n,e),e=Cp(t,e,1),t=Bn(t,e,1),e=rt(),t!==null&&(Pi(t,1,e),dt(t,e));break}}t=t.return}}function xg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(qe&n)===n&&(Le===4||Le===3&&(qe&130023424)===qe&&500>Re()-rc?hr(e,0):nc|=n),dt(e,t)}function Kp(e,t){t===0&&(e.mode&1?(t=qi,qi<<=1,!(qi&130023424)&&(qi=4194304)):t=1);var n=rt();e=vn(e,t),e!==null&&(Pi(e,t,n),dt(e,n))}function kg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kp(e,n)}function Sg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),Kp(e,n)}var Xp;Xp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ut.current)st=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return st=!1,cg(e,t,n);st=!!(e.flags&131072)}else st=!1,be&&t.flags&1048576&&Zh(t,ja,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wa(e,t),e=t.pendingProps;var o=io(t,Je.current);Qr(t,n),o=Gu(null,t,r,e,o,n);var i=Yu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(i=!0,Aa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Vu(t),o.updater=hl,t.stateNode=o,o._reactInternals=t,Xs(t,r,e,n),t=Js(null,t,r,!0,i,n)):(t.tag=0,be&&i&&ju(t),tt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wa(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Eg(r),e=Mt(r,e),o){case 0:t=Ys(null,t,r,e,n);break e;case 1:t=zd(null,t,r,e,n);break e;case 11:t=Cd(null,t,r,e,n);break e;case 14:t=Rd(null,t,r,Mt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Mt(r,o),Ys(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Mt(r,o),zd(e,t,r,o,n);case 3:e:{if(Tp(t),e===null)throw Error(D(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ip(e,t),$a(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=uo(Error(D(423)),t),t=Dd(e,t,r,n,o);break e}else if(r!==o){o=uo(Error(D(424)),t),t=Dd(e,t,r,n,o);break e}else for(gt=qn(t.stateNode.containerInfo.firstChild),yt=t,be=!0,jt=null,n=rp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),r===o){t=gn(e,t,n);break e}tt(e,t,r,n)}t=t.child}return t;case 5:return ap(t),e===null&&Ws(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,$s(r,o)?a=null:i!==null&&$s(r,i)&&(t.flags|=32),Dp(e,t),tt(e,t,a,n),t.child;case 6:return e===null&&Ws(t),null;case 13:return Mp(e,t,n);case 4:return Wu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lo(t,null,r,n):tt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Mt(r,o),Cd(e,t,r,o,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,fe(Ia,r._currentValue),r._currentValue=a,i!==null)if(Ht(i.value,a)){if(i.children===o.children&&!ut.current){t=gn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=fn(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Qs(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(D(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Qs(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}tt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Qr(t,n),o=Rt(o),r=r(o),t.flags|=1,tt(e,t,r,n),t.child;case 14:return r=t.type,o=Mt(r,t.pendingProps),o=Mt(r.type,o),Rd(e,t,r,o,n);case 15:return Rp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Mt(r,o),wa(e,t),t.tag=1,ct(r)?(e=!0,Aa(t)):e=!1,Qr(t,n),Op(t,r,o),Xs(t,r,o,n),Js(null,t,r,!0,e,n);case 19:return Lp(e,t,n);case 22:return zp(e,t,n)}throw Error(D(156,t.tag))};function Gp(e,t){return Sh(e,t)}function Pg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,r){return new Pg(e,t,n,r)}function lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Eg(e){if(typeof e=="function")return lc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ou)return 11;if(e===_u)return 14}return 2}function Qn(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sa(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")lc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Dr:return pr(n.children,o,i,t);case Eu:a=8,o|=8;break;case bs:return e=_t(12,n,t,o|2),e.elementType=bs,e.lanes=i,e;case ws:return e=_t(13,n,t,o),e.elementType=ws,e.lanes=i,e;case xs:return e=_t(19,n,t,o),e.elementType=xs,e.lanes=i,e;case ah:return vl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oh:a=10;break e;case ih:a=9;break e;case Ou:a=11;break e;case _u:a=14;break e;case Cn:a=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=_t(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function pr(e,t,n,r){return e=_t(7,e,r,t),e.lanes=n,e}function vl(e,t,n,r){return e=_t(22,e,r,t),e.elementType=ah,e.lanes=n,e.stateNode={isHidden:!1},e}function us(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function cs(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Og(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function sc(e,t,n,r,o,i,a,l,s){return e=new Og(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=_t(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vu(i),e}function _g(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yp(e){if(!e)return Xn;e=e._reactInternals;e:{if(Sr(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(ct(n))return Yh(e,n,t)}return t}function Jp(e,t,n,r,o,i,a,l,s){return e=sc(n,r,!0,e,o,i,a,l,s),e.context=Yp(null),n=e.current,r=rt(),o=Wn(n),i=fn(r,o),i.callback=t??null,Bn(n,i,o),e.current.lanes=o,Pi(e,o,r),dt(e,r),e}function gl(e,t,n,r){var o=t.current,i=rt(),a=Wn(o);return n=Yp(n),t.context===null?t.context=n:t.pendingContext=n,t=fn(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bn(o,t,a),e!==null&&($t(e,o,a,i),ga(e,o,a)),a}function Xa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uc(e,t){$d(e,t),(e=e.alternate)&&$d(e,t)}function Cg(){return null}var Zp=typeof reportError=="function"?reportError:function(e){console.error(e)};function cc(e){this._internalRoot=e}yl.prototype.render=cc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));gl(e,t,null,null)};yl.prototype.unmount=cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;br(function(){gl(null,e,null,null)}),t[mn]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=zh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zn.length&&t!==0&&t<zn[n].priority;n++);zn.splice(n,0,e),n===0&&Th(e)}};function dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hd(){}function Rg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Xa(a);i.call(u)}}var a=Jp(t,r,e,0,null,!1,!1,"",Hd);return e._reactRootContainer=a,e[mn]=a.current,ai(e.nodeType===8?e.parentNode:e),br(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Xa(s);l.call(u)}}var s=sc(e,0,!1,null,null,!1,!1,"",Hd);return e._reactRootContainer=s,e[mn]=s.current,ai(e.nodeType===8?e.parentNode:e),br(function(){gl(t,s,n,r)}),s}function wl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Xa(a);l.call(s)}}gl(t,a,e,o)}else a=Rg(n,t,e,o,r);return Xa(a)}Ch=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Io(t.pendingLanes);n!==0&&(zu(t,n|1),dt(t,Re()),!(re&6)&&(co=Re()+500,Jn()))}break;case 13:br(function(){var r=vn(e,1);if(r!==null){var o=rt();$t(r,e,1,o)}}),uc(e,1)}};Du=function(e){if(e.tag===13){var t=vn(e,134217728);if(t!==null){var n=rt();$t(t,e,134217728,n)}uc(e,134217728)}};Rh=function(e){if(e.tag===13){var t=Wn(e),n=vn(e,t);if(n!==null){var r=rt();$t(n,e,t,r)}uc(e,t)}};zh=function(){return ce};Dh=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};Ds=function(e,t,n){switch(t){case"input":if(Ps(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=cl(r);if(!o)throw Error(D(90));sh(r),Ps(r,o)}}}break;case"textarea":ch(e,n);break;case"select":t=n.value,t!=null&&qr(e,!!n.multiple,t,!1)}};gh=oc;yh=br;var zg={usingClientEntryPoint:!1,Events:[Oi,Nr,cl,mh,vh,oc]},To={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dg={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xh(e),e===null?null:e.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||Cg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{al=ea.inject(Dg),Gt=ea}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zg;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dc(t))throw Error(D(200));return _g(e,t,null,n)};wt.createRoot=function(e,t){if(!dc(e))throw Error(D(299));var n=!1,r="",o=Zp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=sc(e,1,!1,null,null,n,!1,r,o),e[mn]=t.current,ai(e.nodeType===8?e.parentNode:e),new cc(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=xh(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return br(e)};wt.hydrate=function(e,t,n){if(!bl(t))throw Error(D(200));return wl(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!dc(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Zp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Jp(t,null,e,1,n??null,o,!1,i,a),e[mn]=t.current,ai(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new yl(t)};wt.render=function(e,t,n){if(!bl(t))throw Error(D(200));return wl(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!bl(e))throw Error(D(40));return e._reactRootContainer?(br(function(){wl(null,null,e,!1,function(){e._reactRootContainer=null,e[mn]=null})}),!0):!1};wt.unstable_batchedUpdates=oc;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bl(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return wl(e,t,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function em(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(em)}catch(e){console.error(e)}}em(),eh.exports=wt;var fc=eh.exports;const Tg=Hf(fc),Mg=$f({__proto__:null,default:Tg},[fc]);var qd=fc;gs.createRoot=qd.createRoot,gs.hydrateRoot=qd.hydrateRoot;function tm(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=tm(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function hc(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=tm(e))&&(r&&(r+=" "),r+=t);return r}function Ne(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}Ne(`.react-loading-indicator-normalize,
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
}`);var G=function(){return G=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},G.apply(this,arguments)};function Ga(e){return Ga=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ga(e)}var Lg=/^\s+/,Ng=/\s+$/;function $(e,t){if(t=t||{},(e=e||"")instanceof $)return e;if(!(this instanceof $))return new $(e,t);var n=function(r){var o={r:0,g:0,b:0},i=1,a=null,l=null,s=null,u=!1,c=!1;typeof r=="string"&&(r=function(g){g=g.replace(Lg,"").replace(Ng,"").toLowerCase();var m,S=!1;if(cu[g])g=cu[g],S=!0;else if(g=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(m=Tt.rgb.exec(g))?{r:m[1],g:m[2],b:m[3]}:(m=Tt.rgba.exec(g))?{r:m[1],g:m[2],b:m[3],a:m[4]}:(m=Tt.hsl.exec(g))?{h:m[1],s:m[2],l:m[3]}:(m=Tt.hsla.exec(g))?{h:m[1],s:m[2],l:m[3],a:m[4]}:(m=Tt.hsv.exec(g))?{h:m[1],s:m[2],v:m[3]}:(m=Tt.hsva.exec(g))?{h:m[1],s:m[2],v:m[3],a:m[4]}:(m=Tt.hex8.exec(g))?{r:ht(m[1]),g:ht(m[2]),b:ht(m[3]),a:Xd(m[4]),format:S?"name":"hex8"}:(m=Tt.hex6.exec(g))?{r:ht(m[1]),g:ht(m[2]),b:ht(m[3]),format:S?"name":"hex"}:(m=Tt.hex4.exec(g))?{r:ht(m[1]+""+m[1]),g:ht(m[2]+""+m[2]),b:ht(m[3]+""+m[3]),a:Xd(m[4]+""+m[4]),format:S?"name":"hex8"}:(m=Tt.hex3.exec(g))?{r:ht(m[1]+""+m[1]),g:ht(m[2]+""+m[2]),b:ht(m[3]+""+m[3]),format:S?"name":"hex"}:!1}(r)),Ga(r)=="object"&&(an(r.r)&&an(r.g)&&an(r.b)?(d=r.r,h=r.g,y=r.b,o={r:255*ye(d,255),g:255*ye(h,255),b:255*ye(y,255)},u=!0,c=String(r.r).substr(-1)==="%"?"prgb":"rgb"):an(r.h)&&an(r.s)&&an(r.v)?(a=$o(r.s),l=$o(r.v),o=function(g,m,S){g=6*ye(g,360),m=ye(m,100),S=ye(S,100);var p=Math.floor(g),f=g-p,v=S*(1-m),k=S*(1-f*m),O=S*(1-(1-f)*m),R=p%6,z=[S,k,v,v,O,S][R],b=[O,S,S,k,v,v][R],T=[v,v,O,S,S,k][R];return{r:255*z,g:255*b,b:255*T}}(r.h,a,l),u=!0,c="hsv"):an(r.h)&&an(r.s)&&an(r.l)&&(a=$o(r.s),s=$o(r.l),o=function(g,m,S){var p,f,v;function k(z,b,T){return T<0&&(T+=1),T>1&&(T-=1),T<1/6?z+6*(b-z)*T:T<.5?b:T<2/3?z+(b-z)*(2/3-T)*6:z}if(g=ye(g,360),m=ye(m,100),S=ye(S,100),m===0)p=f=v=S;else{var O=S<.5?S*(1+m):S+m-S*m,R=2*S-O;p=k(R,O,g+1/3),f=k(R,O,g),v=k(R,O,g-1/3)}return{r:255*p,g:255*f,b:255*v}}(r.h,a,s),u=!0,c="hsl"),r.hasOwnProperty("a")&&(i=r.a));var d,h,y;return i=nm(i),{ok:u,format:r.format||c,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:i}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function Bd(e,t,n){e=ye(e,255),t=ye(t,255),n=ye(n,255);var r,o,i=Math.max(e,t,n),a=Math.min(e,t,n),l=(i+a)/2;if(i==a)r=o=0;else{var s=i-a;switch(o=l>.5?s/(2-i-a):s/(i+a),i){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,l}}function Vd(e,t,n){e=ye(e,255),t=ye(t,255),n=ye(n,255);var r,o,i=Math.max(e,t,n),a=Math.min(e,t,n),l=i,s=i-a;if(o=i===0?0:s/i,i==a)r=0;else{switch(i){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,v:l}}function Wd(e,t,n,r){var o=[It(Math.round(e).toString(16)),It(Math.round(t).toString(16)),It(Math.round(n).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Qd(e,t,n,r){return[It(rm(r)),It(Math.round(e).toString(16)),It(Math.round(t).toString(16)),It(Math.round(n).toString(16))].join("")}function Ag(e,t){t=t===0?0:t||10;var n=$(e).toHsl();return n.s-=t/100,n.s=xl(n.s),$(n)}function Fg(e,t){t=t===0?0:t||10;var n=$(e).toHsl();return n.s+=t/100,n.s=xl(n.s),$(n)}function jg(e){return $(e).desaturate(100)}function Ig(e,t){t=t===0?0:t||10;var n=$(e).toHsl();return n.l+=t/100,n.l=xl(n.l),$(n)}function Ug(e,t){t=t===0?0:t||10;var n=$(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),$(n)}function $g(e,t){t=t===0?0:t||10;var n=$(e).toHsl();return n.l-=t/100,n.l=xl(n.l),$(n)}function Hg(e,t){var n=$(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,$(n)}function qg(e){var t=$(e).toHsl();return t.h=(t.h+180)%360,$(t)}function Kd(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=$(e).toHsl(),r=[$(e)],o=360/t,i=1;i<t;i++)r.push($({h:(n.h+i*o)%360,s:n.s,l:n.l}));return r}function Bg(e){var t=$(e).toHsl(),n=t.h;return[$(e),$({h:(n+72)%360,s:t.s,l:t.l}),$({h:(n+216)%360,s:t.s,l:t.l})]}function Vg(e,t,n){t=t||6,n=n||30;var r=$(e).toHsl(),o=360/n,i=[$(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push($(r));return i}function Wg(e,t){t=t||6;for(var n=$(e).toHsv(),r=n.h,o=n.s,i=n.v,a=[],l=1/t;t--;)a.push($({h:r,s:o,v:i})),i=(i+l)%1;return a}$.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=nm(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Vd(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Vd(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Bd(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Bd(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Wd(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(t,n,r,o,i){var a=[It(Math.round(t).toString(16)),It(Math.round(n).toString(16)),It(Math.round(r).toString(16)),It(rm(o))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*ye(this._r,255))+"%",g:Math.round(100*ye(this._g,255))+"%",b:Math.round(100*ye(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*ye(this._r,255))+"%, "+Math.round(100*ye(this._g,255))+"%, "+Math.round(100*ye(this._b,255))+"%)":"rgba("+Math.round(100*ye(this._r,255))+"%, "+Math.round(100*ye(this._g,255))+"%, "+Math.round(100*ye(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Qg[Wd(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+Qd(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=$(e);n="#"+Qd(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return $(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(Ig,arguments)},brighten:function(){return this._applyModification(Ug,arguments)},darken:function(){return this._applyModification($g,arguments)},desaturate:function(){return this._applyModification(Ag,arguments)},saturate:function(){return this._applyModification(Fg,arguments)},greyscale:function(){return this._applyModification(jg,arguments)},spin:function(){return this._applyModification(Hg,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(Vg,arguments)},complement:function(){return this._applyCombination(qg,arguments)},monochromatic:function(){return this._applyCombination(Wg,arguments)},splitcomplement:function(){return this._applyCombination(Bg,arguments)},triad:function(){return this._applyCombination(Kd,[3])},tetrad:function(){return this._applyCombination(Kd,[4])}},$.fromRatio=function(e,t){if(Ga(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=r==="a"?e[r]:$o(e[r]));e=n}return $(e,t)},$.equals=function(e,t){return!(!e||!t)&&$(e).toRgbString()==$(t).toRgbString()},$.random=function(){return $.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},$.mix=function(e,t,n){n=n===0?0:n||50;var r=$(e).toRgb(),o=$(t).toRgb(),i=n/100;return $({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},$.readability=function(e,t){var n=$(e),r=$(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},$.isReadable=function(e,t,n){var r,o,i=$.readability(e,t);switch(o=!1,(r=function(a){var l,s;return l=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(a.size||"small").toLowerCase(),l!=="AA"&&l!=="AAA"&&(l="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:l,size:s}}(n)).level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7}return o},$.mostReadable=function(e,t,n){var r,o,i,a,l=null,s=0;o=(n=n||{}).includeFallbackColors,i=n.level,a=n.size;for(var u=0;u<t.length;u++)(r=$.readability(e,t[u]))>s&&(s=r,l=$(t[u]));return $.isReadable(e,l,{level:i,size:a})||!o?l:(n.includeFallbackColors=!1,$.mostReadable(e,["#fff","#000"],n))};var cu=$.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Qg=$.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(cu);function nm(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function ye(e,t){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function xl(e){return Math.min(1,Math.max(0,e))}function ht(e){return parseInt(e,16)}function It(e){return e.length==1?"0"+e:""+e}function $o(e){return e<=1&&(e=100*e+"%"),e}function rm(e){return Math.round(255*parseFloat(e)).toString(16)}function Xd(e){return ht(e)/255}var Pn,ta,na,Tt=(ta="[\\s|\\(]+("+(Pn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Pn+")[,|\\s]+("+Pn+")\\s*\\)?",na="[\\s|\\(]+("+Pn+")[,|\\s]+("+Pn+")[,|\\s]+("+Pn+")[,|\\s]+("+Pn+")\\s*\\)?",{CSS_UNIT:new RegExp(Pn),rgb:new RegExp("rgb"+ta),rgba:new RegExp("rgba"+na),hsl:new RegExp("hsl"+ta),hsla:new RegExp("hsla"+na),hsv:new RegExp("hsv"+ta),hsva:new RegExp("hsva"+na),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function an(e){return!!Tt.CSS_UNIT.exec(e)}var vo=function(e,t){var n=(typeof e=="string"?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=n,o=parseFloat(t),i=o+r*(o/5)*-1;return(i==0||i<=Number.EPSILON)&&(i=.1),{animationPeriod:i+"s"}}return{animationPeriod:t}},go=function(e,t){var n=e||{},r="";switch(t){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(n.fontSize){var i=n.fontSize;o=function(a,l){var s={};for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&l.indexOf(u)<0&&(s[u]=a[u]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function"){var c=0;for(u=Object.getOwnPropertySymbols(a);c<u.length;c++)l.indexOf(u[c])<0&&Object.prototype.propertyIsEnumerable.call(a,u[c])&&(s[u[c]]=a[u[c]])}return s}(n,["fontSize"]),r=i}return{fontSize:r,styles:o}},Kg={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},yo=function(e){var t=e.className,n=e.text,r=e.textColor,o=e.staticText,i=e.style;return n?A.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:G(G(G({},o&&Kg),r&&{color:r,mixBlendMode:"unset"}),i&&i)},typeof n=="string"&&n.length?n:"loading"):null},Xt="rgb(50, 205, 50)";function bo(e,t){t===void 0&&(t=0);var n=[];return function r(o,i){return i===void 0&&(i=0),n.push.apply(n,o),n.length<i&&r(n,i),n.slice(0,i)}(e,t)}Ne(`.atom-rli-bounding-box {
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
}`);$(Xt).toRgb();Array.from({length:4},function(e,t){return"--atom-phase".concat(t+1,"-rgb")});Ne(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--commet-phase".concat(t+1,"-color")});Ne(`.OP-annulus-rli-bounding-box {
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
}`);var ra=Array.from({length:4},function(e,t){return"--OP-annulus-phase".concat(t+1,"-color")}),Xg=function(e){var t,n=go(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=vo(e==null?void 0:e.speedPlus,"1.5s").animationPeriod,l=function(u){var c={},d=ra.length;if(u instanceof Array){for(var h=bo(u,d),y=0;y<h.length&&!(y>=4);y++)c[ra[y]]=h[y];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<d;g++)c[ra[g]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),g=0;g<d;g++)c[ra[g]]=Xt}return c}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e!=null&&e.dense?4.3:2.9;return A.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:G(G(G(G(G({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},A.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},A.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},A.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:s,strokeMiterlimit:"10"})),A.createElement(yo,{className:"OP-annulus-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};function ds(e){return e&&e.Math===Math&&e}Ne(`.OP-dotted-rli-bounding-box {
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
}`);var _r=ds(typeof window=="object"&&window)||ds(typeof self=="object"&&self)||ds(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function om(){var e,t;return!((e=_r==null?void 0:_r.crypto)===null||e===void 0)&&e.randomUUID?_r.crypto.randomUUID():!((t=_r==null?void 0:_r.btoa)===null||t===void 0)&&t.name?_r.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var oa=Array.from({length:4},function(e,t){return"--OP-dotted-phase".concat(t+1,"-color")}),Gg=function(e){var t,n=go(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=vo(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(u){var c={},d=oa.length;if(u instanceof Array){for(var h=bo(u,d),y=0;y<h.length&&!(y>=4);y++)c[oa[y]]=h[y];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<d;g++)c[oa[g]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),g=0;g<d;g++)c[oa[g]]=Xt}return c}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e!=null&&e.dense?16:12;return A.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:G(G(G(G(G({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},A.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:s}).map(function(u,c){var d=function(g,m,S){if(m===16){var p=360*g/m,f=m-g,v=Number.parseFloat(S)/m*f*-1;return{transform:"rotate(".concat(p,"deg)"),animationDelay:"".concat(v,"s")}}return{transform:"",animationDelay:""}}(c,s,a),h=d.animationDelay,y=d.transform;return A.createElement("span",{key:om(),className:"rli-d-i-b dot-shape-holder",style:y?{transform:y}:void 0},A.createElement("span",{className:"dot",style:h?{animationDelay:h}:void 0}))}),A.createElement(yo,{className:"OP-dotted-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};Ne(`.OP-spokes-rli-bounding-box {
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
}`);var ia=Array.from({length:4},function(e,t){return"--OP-spokes-phase".concat(t+1,"-color")}),Yg=function(e){var t,n=go(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=vo(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(u){var c={},d=ia.length;if(u instanceof Array){for(var h=bo(u,d),y=0;y<h.length&&!(y>=4);y++)c[ia[y]]=h[y];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<d;g++)c[ia[g]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),g=0;g<d;g++)c[ia[g]]=Xt}return c}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e!=null&&e.dense?16:12;return A.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:G(G(G(G(G({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},A.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:s},function(u,c){return A.createElement("span",{key:om(),className:"rli-d-i-b spoke",style:Jg(c,s,a)})})),A.createElement(yo,{text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};function Jg(e,t,n){if(t===16){var r=t-e,o=Number.parseFloat(n)/t;return{transform:"rotate(".concat(360*e/t,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((r-1)*o*-1,"s")}}}Ne(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);var aa=Array.from({length:4},function(e,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")}),Zg=function(e){var t,n=go(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=vo(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(u){var c={},d=aa.length;if(u instanceof Array){for(var h=bo(u,d),y=0;y<h.length&&!(y>=4);y++)c[aa[y]]=h[y];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<d;g++)c[aa[g]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),g=0;g<d;g++)c[aa[g]]=Xt}return c}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e.dense?"0.45em":"";return A.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:G(G(G(G(G({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},A.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},A.createElement("span",{className:"rli-d-i-b annulus-sectors",style:G({},s&&{borderWidth:s})}),A.createElement(yo,{className:"OP-annulus-dual-sectors-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};Ne(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);var Mo=Array.from({length:4},function(e,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]}),la=function(e){return e===void 0&&(e=1),.25*e},ey=function(e){var t,n=go(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=vo(e==null?void 0:e.speedPlus,"1s").animationPeriod,l=function(u){var c={},d=Mo.length;if(u instanceof Array){for(var h=bo(u,d),y=0;y<h.length&&!(y>=4);y++){var g=Mo[y];try{if(!(p=$(h[y])).isValid())throw new Error("Invalid Color: ".concat(p.getOriginalInput()));var m=p.setAlpha(la(p.getAlpha())).toRgbString(),S=h[y];c[g[0]]=m,c[g[1]]=S}catch{S=Xt,m=(p=$(Xt)).setAlpha(la(p.getAlpha())).toRgbString(),c[g[0]]=m,c[g[1]]=S}}return c}try{var p=$(u);if(typeof u!="string")throw new Error("Color String expected");if(!p.isValid())throw new Error("Invalid Color: ".concat(p.getOriginalInput()));S=u,m=p.setAlpha(la(p.getAlpha())).toRgbString();for(var f=0;f<d;f++)c[(g=Mo[f])[0]]=m,c[g[1]]=S}catch(v){for(v instanceof Error?console.warn("[".concat(v.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),S=Xt,m=(p=$(Xt)).setAlpha(la(p.getAlpha())).toRgbString(),f=0;f<Mo.length;f++)c[(g=Mo[f])[0]]=m,c[g[1]]=S}return c}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e.dense?"0.45em":"";return A.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:G(G(G(G(G({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},A.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},A.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:G({},s&&{borderWidth:s})}),A.createElement(yo,{className:"OP-annulus-sector-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))},im=function(e){var t=Object(e).variant,n=t===void 0?"disc":t;return n==="dotted"?A.createElement(Gg,G({},e)):n==="spokes"?A.createElement(Yg,G({},e)):n==="disc"?A.createElement(Xg,G({},e)):n==="split-disc"?A.createElement(Zg,G({},e)):n==="track-disc"?A.createElement(ey,G({},e)):null};Ne(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--four-square-phase".concat(t+1,"-color")});Ne(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--mosaic-phase".concat(t+1,"-color")});Ne(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--riple-phase".concat(t+1,"-color")});Ne(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--TD-pulsate-phase".concat(t+1,"-color")});Ne(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--TD-brick-stack-phase".concat(t+1,"-color")});Ne(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--TD-bob-phase".concat(t+1,"-color")});Ne(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--TD-bounce-phase".concat(t+1,"-color")});Ne(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--shape-phase".concat(t+1,"-color")});Ne(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--trophySpin-phase".concat(t+1,"-color")});Ne(`.slab-rli-bounding-box {
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
}`);var Cr=Array.from({length:4},function(e,t){return"--slab-phase".concat(t+1,"-color")}),ty=function(e){var t,n=go(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=vo(e==null?void 0:e.speedPlus,"3s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var c=bo(s,Cr.length),d=0;d<c.length&&!(d>=4);d++)u[Cr[d]]=c[d];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var h=0;h<Cr.length;h++)u[Cr[h]]=s}catch(y){for(y instanceof Error?console.warn("[".concat(y.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s)," received in <Slab /> indicator cannot be processed. Using default instead!")),h=0;h<Cr.length;h++)u[Cr[h]]=Xt}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return A.createElement("span",{className:"rli-d-i-b slab-rli-bounding-box",style:G(G(G(G(G({},o&&{fontSize:o}),a&&{"--rli-animation-duration-unitless":parseFloat(a)}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},A.createElement("span",{className:"rli-d-i-b slab-indicator"},A.createElement("span",{className:"slabs-wrapper"},A.createElement("span",{className:"slab"}),A.createElement("span",{className:"slab"}),A.createElement("span",{className:"slab"}),A.createElement("span",{className:"slab"}))),A.createElement(yo,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};Ne(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--life-line-phase".concat(t+1,"-color")});const ny=P.createContext({});function ry({children:e}){const[t,n]=P.useState(!1),[r,o]=P.useState(!0),i=P.useRef(!1),a=P.useCallback(u=>{if(i.current){console.warn("当前已经存在一个 loading 实例了");return}n(!0),o(u??!0),i.current=!0},[]),l=P.useCallback(()=>{n(!1),i.current=!1},[]),s=P.useMemo(()=>({showLoading:a,hideLoading:l}),[a,l]);return K.jsxs(ny.Provider,{value:s,children:[e,t&&K.jsx(oy,{mask:r})]})}function oy({mask:e=!0,text:t="数据玩命加载中..."}){return K.jsx("div",{className:hc("loading-overlay  inset-0 fixed flex items-center justify-center bg-black bg-opacity-40",{"pointer-events-none":!e}),children:K.jsxs("div",{className:"loading-content flex items-center justify-center flex-col",children:[K.jsx(im,{color:"#41d9ce",size:"medium",text:"",textColor:""}),t&&K.jsx("p",{className:"font-bold text-md text-white shadow",children:t})]})})}const iy="modulepreload",ay=function(e){return"/project-preview/"+e},Gd={},Pr=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(s=>{if(s=ay(s),s in Gd)return;Gd[s]=!0;const u=s.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${c}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":iy,u||(d.as="script"),d.crossOrigin="",d.href=s,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((h,y)=>{d.addEventListener("load",h),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${s}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return o.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(this,arguments)}var De;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(De||(De={}));const Yd="popstate";function ly(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:l="",hash:s=""}=bn(o.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),mi("",{pathname:a,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let a=o.document.querySelector("base"),l="";if(a&&a.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof i=="string"?i:xr(i))}function r(o,i){wr(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return uy(t,n,r,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sy(){return Math.random().toString(36).substr(2,8)}function Jd(e,t){return{usr:e.state,key:e.key,idx:t}}function mi(e,t,n,r){return n===void 0&&(n=null),we({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?bn(t):t,{state:n,key:t&&t.key||r||sy()})}function xr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function bn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function uy(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=De.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(we({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){l=De.Pop;let S=c(),p=S==null?null:S-u;u=S,s&&s({action:l,location:m.location,delta:p})}function h(S,p){l=De.Push;let f=mi(m.location,S,p);n&&n(f,S),u=c()+1;let v=Jd(f,u),k=m.createHref(f);try{a.pushState(v,"",k)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;o.location.assign(k)}i&&s&&s({action:l,location:m.location,delta:1})}function y(S,p){l=De.Replace;let f=mi(m.location,S,p);n&&n(f,S),u=c();let v=Jd(f,u),k=m.createHref(f);a.replaceState(v,"",k),i&&s&&s({action:l,location:m.location,delta:0})}function g(S){let p=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof S=="string"?S:xr(S);return f=f.replace(/ $/,"%20"),ee(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let m={get action(){return l},get location(){return e(o,a)},listen(S){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Yd,d),s=S,()=>{o.removeEventListener(Yd,d),s=null}},createHref(S){return t(o,S)},createURL:g,encodeLocation(S){let p=g(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:y,go(S){return a.go(S)}};return m}var de;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(de||(de={}));const cy=new Set(["lazy","caseSensitive","path","id","index","children"]);function dy(e){return e.index===!0}function vi(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let a=[...n,String(i)],l=typeof o.id=="string"?o.id:a.join("-");if(ee(o.index!==!0||!o.children,"Cannot specify children on an index route"),ee(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),dy(o)){let s=we({},o,t(o),{id:l});return r[l]=s,s}else{let s=we({},o,t(o),{id:l,children:void 0});return r[l]=s,o.children&&(s.children=vi(o.children,t,a,r)),s}})}function or(e,t,n){return n===void 0&&(n="/"),Pa(e,t,n,!1)}function Pa(e,t,n,r){let o=typeof t=="string"?bn(t):t,i=wo(o.pathname||"/",n);if(i==null)return null;let a=am(e);hy(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let u=Py(i);l=ky(a[s],u,r)}return l}function fy(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function am(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(ee(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=hn([r,s.relativePath]),c=n.concat(s);i.children&&i.children.length>0&&(ee(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),am(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:wy(u,i.index),routesMeta:c})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of lm(i.path))o(i,a,s)}),t}function lm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=lm(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function hy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const py=/^:[\w-]+$/,my=3,vy=2,gy=1,yy=10,by=-2,Zd=e=>e==="*";function wy(e,t){let n=e.split("/"),r=n.length;return n.some(Zd)&&(r+=by),t&&(r+=vy),n.filter(o=>!Zd(o)).reduce((o,i)=>o+(py.test(i)?my:i===""?gy:yy),r)}function xy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ky(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=ef({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c),h=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=ef({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},c)),!d)return null;Object.assign(o,d.params),a.push({params:o,pathname:hn([i,d.pathname]),pathnameBase:_y(hn([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=hn([i,d.pathnameBase]))}return a}function ef(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Sy(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:y}=c;if(h==="*"){let m=l[d]||"";a=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const g=l[d];return y&&!g?u[h]=void 0:u[h]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function Sy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Py(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ey(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?bn(e):e;return{pathname:n?n.startsWith("/")?n:Oy(n,t):t,search:Cy(r),hash:Ry(o)}}function Oy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function fs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function kl(e,t){let n=sm(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Sl(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=bn(e):(o=we({},e),ee(!o.pathname||!o.pathname.includes("?"),fs("?","pathname","search",o)),ee(!o.pathname||!o.pathname.includes("#"),fs("#","pathname","hash",o)),ee(!o.search||!o.search.includes("#"),fs("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;o.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=Ey(o,l),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),_y=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Cy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ry=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Ya{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Pl(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const um=["post","put","patch","delete"],zy=new Set(um),Dy=["get",...um],Ty=new Set(Dy),My=new Set([301,302,303,307,308]),Ly=new Set([307,308]),hs={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ny={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Lo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},pc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ay=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),cm="remix-router-transitions";function Fy(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;ee(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let w=e.detectErrorBoundary;o=x=>({hasErrorBoundary:w(x)})}else o=Ay;let i={},a=vi(e.routes,o,void 0,i),l,s=e.basename||"/",u=e.unstable_dataStrategy||qy,c=e.unstable_patchRoutesOnNavigation,d=we({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),h=null,y=new Set,g=1e3,m=new Set,S=null,p=null,f=null,v=e.hydrationData!=null,k=or(a,e.history.location,s),O=null;if(k==null&&!c){let w=et(404,{pathname:e.history.location.pathname}),{matches:x,route:E}=cf(a);k=x,O={[E.id]:w}}k&&!e.hydrationData&&Di(k,a,e.history.location.pathname).active&&(k=null);let R;if(k)if(k.some(w=>w.route.lazy))R=!1;else if(!k.some(w=>w.route.loader))R=!0;else if(d.v7_partialHydration){let w=e.hydrationData?e.hydrationData.loaderData:null,x=e.hydrationData?e.hydrationData.errors:null,E=C=>C.route.loader?typeof C.route.loader=="function"&&C.route.loader.hydrate===!0?!1:w&&w[C.route.id]!==void 0||x&&x[C.route.id]!==void 0:!0;if(x){let C=k.findIndex(I=>x[I.route.id]!==void 0);R=k.slice(0,C+1).every(E)}else R=k.every(E)}else R=e.hydrationData!=null;else if(R=!1,k=[],d.v7_partialHydration){let w=Di(null,a,e.history.location.pathname);w.active&&w.matches&&(k=w.matches)}let z,b={historyAction:e.history.action,location:e.history.location,matches:k,initialized:R,navigation:hs,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||O,fetchers:new Map,blockers:new Map},T=De.Pop,L=!1,q,W=!1,ie=new Map,oe=null,Ve=!1,Ue=!1,he=[],N=new Set,F=new Map,M=0,Y=-1,ae=new Map,Pe=new Set,Ae=new Map,kt=new Map,ge=new Set,at=new Map,Zt=new Map,Dl=new Map,en;function Tl(){if(h=e.history.listen(w=>{let{action:x,location:E,delta:C}=w;if(en){en(),en=void 0;return}wr(Zt.size===0||C!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let I=Rc({currentLocation:b.location,nextLocation:E,historyAction:x});if(I&&C!=null){let V=new Promise(X=>{en=X});e.history.go(C*-1),Ri(I,{state:"blocked",location:E,proceed(){Ri(I,{state:"proceeding",proceed:void 0,reset:void 0,location:E}),V.then(()=>e.history.go(C))},reset(){let X=new Map(b.blockers);X.set(I,Lo),$e({blockers:X})}});return}return er(x,E)}),n){o1(t,ie);let w=()=>i1(t,ie);t.addEventListener("pagehide",w),oe=()=>t.removeEventListener("pagehide",w)}return b.initialized||er(De.Pop,b.location,{initialHydration:!0}),z}function Ml(){h&&h(),oe&&oe(),y.clear(),q&&q.abort(),b.fetchers.forEach((w,x)=>Ci(x)),b.blockers.forEach((w,x)=>Cc(x))}function Ll(w){return y.add(w),()=>y.delete(w)}function $e(w,x){x===void 0&&(x={}),b=we({},b,w);let E=[],C=[];d.v7_fetcherPersist&&b.fetchers.forEach((I,V)=>{I.state==="idle"&&(ge.has(V)?C.push(V):E.push(V))}),[...y].forEach(I=>I(b,{deletedFetchers:C,unstable_viewTransitionOpts:x.viewTransitionOpts,unstable_flushSync:x.flushSync===!0})),d.v7_fetcherPersist&&(E.forEach(I=>b.fetchers.delete(I)),C.forEach(I=>Ci(I)))}function St(w,x,E){var C,I;let{flushSync:V}=E===void 0?{}:E,X=b.actionData!=null&&b.navigation.formMethod!=null&&Ft(b.navigation.formMethod)&&b.navigation.state==="loading"&&((C=w.state)==null?void 0:C._isRedirect)!==!0,j;x.actionData?Object.keys(x.actionData).length>0?j=x.actionData:j=null:X?j=b.actionData:j=null;let Q=x.loaderData?sf(b.loaderData,x.loaderData,x.matches||[],x.errors):b.loaderData,H=b.blockers;H.size>0&&(H=new Map(H),H.forEach((ue,pe)=>H.set(pe,Lo)));let B=L===!0||b.navigation.formMethod!=null&&Ft(b.navigation.formMethod)&&((I=w.state)==null?void 0:I._isRedirect)!==!0;l&&(a=l,l=void 0),Ve||T===De.Pop||(T===De.Push?e.history.push(w,w.state):T===De.Replace&&e.history.replace(w,w.state));let le;if(T===De.Pop){let ue=ie.get(b.location.pathname);ue&&ue.has(w.pathname)?le={currentLocation:b.location,nextLocation:w}:ie.has(w.pathname)&&(le={currentLocation:w,nextLocation:b.location})}else if(W){let ue=ie.get(b.location.pathname);ue?ue.add(w.pathname):(ue=new Set([w.pathname]),ie.set(b.location.pathname,ue)),le={currentLocation:b.location,nextLocation:w}}$e(we({},x,{actionData:j,loaderData:Q,historyAction:T,location:w,initialized:!0,navigation:hs,revalidation:"idle",restoreScrollPosition:Dc(w,x.matches||b.matches),preventScrollReset:B,blockers:H}),{viewTransitionOpts:le,flushSync:V===!0}),T=De.Pop,L=!1,W=!1,Ve=!1,Ue=!1,he=[]}async function xc(w,x){if(typeof w=="number"){e.history.go(w);return}let E=du(b.location,b.matches,s,d.v7_prependBasename,w,d.v7_relativeSplatPath,x==null?void 0:x.fromRouteId,x==null?void 0:x.relative),{path:C,submission:I,error:V}=tf(d.v7_normalizeFormMethod,!1,E,x),X=b.location,j=mi(b.location,C,x&&x.state);j=we({},j,e.history.encodeLocation(j));let Q=x&&x.replace!=null?x.replace:void 0,H=De.Push;Q===!0?H=De.Replace:Q===!1||I!=null&&Ft(I.formMethod)&&I.formAction===b.location.pathname+b.location.search&&(H=De.Replace);let B=x&&"preventScrollReset"in x?x.preventScrollReset===!0:void 0,le=(x&&x.unstable_flushSync)===!0,ue=Rc({currentLocation:X,nextLocation:j,historyAction:H});if(ue){Ri(ue,{state:"blocked",location:j,proceed(){Ri(ue,{state:"proceeding",proceed:void 0,reset:void 0,location:j}),xc(w,x)},reset(){let pe=new Map(b.blockers);pe.set(ue,Lo),$e({blockers:pe})}});return}return await er(H,j,{submission:I,pendingError:V,preventScrollReset:B,replace:x&&x.replace,enableViewTransition:x&&x.unstable_viewTransition,flushSync:le})}function Wm(){if(Nl(),$e({revalidation:"loading"}),b.navigation.state!=="submitting"){if(b.navigation.state==="idle"){er(b.historyAction,b.location,{startUninterruptedRevalidation:!0});return}er(T||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation,enableViewTransition:W===!0})}}async function er(w,x,E){q&&q.abort(),q=null,T=w,Ve=(E&&E.startUninterruptedRevalidation)===!0,n0(b.location,b.matches),L=(E&&E.preventScrollReset)===!0,W=(E&&E.enableViewTransition)===!0;let C=l||a,I=E&&E.overrideNavigation,V=or(C,x,s),X=(E&&E.flushSync)===!0,j=Di(V,C,x.pathname);if(j.active&&j.matches&&(V=j.matches),!V){let{error:ne,notFoundMatches:Fe,route:ze}=Al(x.pathname);St(x,{matches:Fe,loaderData:{},errors:{[ze.id]:ne}},{flushSync:X});return}if(b.initialized&&!Ue&&Xy(b.location,x)&&!(E&&E.submission&&Ft(E.submission.formMethod))){St(x,{matches:V},{flushSync:X});return}q=new AbortController;let Q=Rr(e.history,x,q.signal,E&&E.submission),H;if(E&&E.pendingError)H=[Hr(V).route.id,{type:de.error,error:E.pendingError}];else if(E&&E.submission&&Ft(E.submission.formMethod)){let ne=await Qm(Q,x,E.submission,V,j.active,{replace:E.replace,flushSync:X});if(ne.shortCircuited)return;if(ne.pendingActionResult){let[Fe,ze]=ne.pendingActionResult;if(vt(ze)&&Pl(ze.error)&&ze.error.status===404){q=null,St(x,{matches:ne.matches,loaderData:{},errors:{[Fe]:ze.error}});return}}V=ne.matches||V,H=ne.pendingActionResult,I=ps(x,E.submission),X=!1,j.active=!1,Q=Rr(e.history,Q.url,Q.signal)}let{shortCircuited:B,matches:le,loaderData:ue,errors:pe}=await Km(Q,x,V,j.active,I,E&&E.submission,E&&E.fetcherSubmission,E&&E.replace,E&&E.initialHydration===!0,X,H);B||(q=null,St(x,we({matches:le||V},uf(H),{loaderData:ue,errors:pe})))}async function Qm(w,x,E,C,I,V){V===void 0&&(V={}),Nl();let X=n1(x,E);if($e({navigation:X},{flushSync:V.flushSync===!0}),I){let H=await Ti(C,x.pathname,w.signal);if(H.type==="aborted")return{shortCircuited:!0};if(H.type==="error"){let{boundaryId:B,error:le}=zi(x.pathname,H);return{matches:H.partialMatches,pendingActionResult:[B,{type:de.error,error:le}]}}else if(H.matches)C=H.matches;else{let{notFoundMatches:B,error:le,route:ue}=Al(x.pathname);return{matches:B,pendingActionResult:[ue.id,{type:de.error,error:le}]}}}let j,Q=Ho(C,x);if(!Q.route.action&&!Q.route.lazy)j={type:de.error,error:et(405,{method:w.method,pathname:x.pathname,routeId:Q.route.id})};else if(j=(await So("action",b,w,[Q],C,null))[Q.route.id],w.signal.aborted)return{shortCircuited:!0};if(sr(j)){let H;return V&&V.replace!=null?H=V.replace:H=of(j.response.headers.get("Location"),new URL(w.url),s)===b.location.pathname+b.location.search,await tr(w,j,!0,{submission:E,replace:H}),{shortCircuited:!0}}if(In(j))throw et(400,{type:"defer-action"});if(vt(j)){let H=Hr(C,Q.route.id);return(V&&V.replace)!==!0&&(T=De.Push),{matches:C,pendingActionResult:[H.route.id,j]}}return{matches:C,pendingActionResult:[Q.route.id,j]}}async function Km(w,x,E,C,I,V,X,j,Q,H,B){let le=I||ps(x,V),ue=V||X||ff(le),pe=!Ve&&(!d.v7_partialHydration||!Q);if(C){if(pe){let Ee=kc(B);$e(we({navigation:le},Ee!==void 0?{actionData:Ee}:{}),{flushSync:H})}let J=await Ti(E,x.pathname,w.signal);if(J.type==="aborted")return{shortCircuited:!0};if(J.type==="error"){let{boundaryId:Ee,error:ft}=zi(x.pathname,J);return{matches:J.partialMatches,loaderData:{},errors:{[Ee]:ft}}}else if(J.matches)E=J.matches;else{let{error:Ee,notFoundMatches:ft,route:Oe}=Al(x.pathname);return{matches:ft,loaderData:{},errors:{[Oe.id]:Ee}}}}let ne=l||a,[Fe,ze]=nf(e.history,b,E,ue,x,d.v7_partialHydration&&Q===!0,d.v7_skipActionErrorRevalidation,Ue,he,N,ge,Ae,Pe,ne,s,B);if(Fl(J=>!(E&&E.some(Ee=>Ee.route.id===J))||Fe&&Fe.some(Ee=>Ee.route.id===J)),Y=++M,Fe.length===0&&ze.length===0){let J=Oc();return St(x,we({matches:E,loaderData:{},errors:B&&vt(B[1])?{[B[0]]:B[1].error}:null},uf(B),J?{fetchers:new Map(b.fetchers)}:{}),{flushSync:H}),{shortCircuited:!0}}if(pe){let J={};if(!C){J.navigation=le;let Ee=kc(B);Ee!==void 0&&(J.actionData=Ee)}ze.length>0&&(J.fetchers=Xm(ze)),$e(J,{flushSync:H})}ze.forEach(J=>{F.has(J.key)&&xn(J.key),J.controller&&F.set(J.key,J.controller)});let Po=()=>ze.forEach(J=>xn(J.key));q&&q.signal.addEventListener("abort",Po);let{loaderResults:nn,fetcherResults:Er}=await Sc(b,E,Fe,ze,w);if(w.signal.aborted)return{shortCircuited:!0};q&&q.signal.removeEventListener("abort",Po),ze.forEach(J=>F.delete(J.key));let kn=sa(nn);if(kn)return await tr(w,kn.result,!0,{replace:j}),{shortCircuited:!0};if(kn=sa(Er),kn)return Pe.add(kn.key),await tr(w,kn.result,!0,{replace:j}),{shortCircuited:!0};let{loaderData:Mi,errors:rn}=lf(b,E,Fe,nn,B,ze,Er,at);at.forEach((J,Ee)=>{J.subscribe(ft=>{(ft||J.done)&&at.delete(Ee)})}),d.v7_partialHydration&&Q&&b.errors&&Object.entries(b.errors).filter(J=>{let[Ee]=J;return!Fe.some(ft=>ft.route.id===Ee)}).forEach(J=>{let[Ee,ft]=J;rn=Object.assign(rn||{},{[Ee]:ft})});let Li=Oc(),Ni=_c(Y),Ai=Li||Ni||ze.length>0;return we({matches:E,loaderData:Mi,errors:rn},Ai?{fetchers:new Map(b.fetchers)}:{})}function kc(w){if(w&&!vt(w[1]))return{[w[0]]:w[1].data};if(b.actionData)return Object.keys(b.actionData).length===0?null:b.actionData}function Xm(w){return w.forEach(x=>{let E=b.fetchers.get(x.key),C=No(void 0,E?E.data:void 0);b.fetchers.set(x.key,C)}),new Map(b.fetchers)}function Gm(w,x,E,C){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");F.has(w)&&xn(w);let I=(C&&C.unstable_flushSync)===!0,V=l||a,X=du(b.location,b.matches,s,d.v7_prependBasename,E,d.v7_relativeSplatPath,x,C==null?void 0:C.relative),j=or(V,X,s),Q=Di(j,V,X);if(Q.active&&Q.matches&&(j=Q.matches),!j){tn(w,x,et(404,{pathname:X}),{flushSync:I});return}let{path:H,submission:B,error:le}=tf(d.v7_normalizeFormMethod,!0,X,C);if(le){tn(w,x,le,{flushSync:I});return}let ue=Ho(j,H);if(L=(C&&C.preventScrollReset)===!0,B&&Ft(B.formMethod)){Ym(w,x,H,ue,j,Q.active,I,B);return}Ae.set(w,{routeId:x,path:H}),Jm(w,x,H,ue,j,Q.active,I,B)}async function Ym(w,x,E,C,I,V,X,j){Nl(),Ae.delete(w);function Q(Oe){if(!Oe.route.action&&!Oe.route.lazy){let on=et(405,{method:j.formMethod,pathname:E,routeId:x});return tn(w,x,on,{flushSync:X}),!0}return!1}if(!V&&Q(C))return;let H=b.fetchers.get(w);wn(w,r1(j,H),{flushSync:X});let B=new AbortController,le=Rr(e.history,E,B.signal,j);if(V){let Oe=await Ti(I,E,le.signal);if(Oe.type==="aborted")return;if(Oe.type==="error"){let{error:on}=zi(E,Oe);tn(w,x,on,{flushSync:X});return}else if(Oe.matches){if(I=Oe.matches,C=Ho(I,E),Q(C))return}else{tn(w,x,et(404,{pathname:E}),{flushSync:X});return}}F.set(w,B);let ue=M,ne=(await So("action",b,le,[C],I,w))[C.route.id];if(le.signal.aborted){F.get(w)===B&&F.delete(w);return}if(d.v7_fetcherPersist&&ge.has(w)){if(sr(ne)||vt(ne)){wn(w,On(void 0));return}}else{if(sr(ne))if(F.delete(w),Y>ue){wn(w,On(void 0));return}else return Pe.add(w),wn(w,No(j)),tr(le,ne,!1,{fetcherSubmission:j});if(vt(ne)){tn(w,x,ne.error);return}}if(In(ne))throw et(400,{type:"defer-action"});let Fe=b.navigation.location||b.location,ze=Rr(e.history,Fe,B.signal),Po=l||a,nn=b.navigation.state!=="idle"?or(Po,b.navigation.location,s):b.matches;ee(nn,"Didn't find any matches after fetcher action");let Er=++M;ae.set(w,Er);let kn=No(j,ne.data);b.fetchers.set(w,kn);let[Mi,rn]=nf(e.history,b,nn,j,Fe,!1,d.v7_skipActionErrorRevalidation,Ue,he,N,ge,Ae,Pe,Po,s,[C.route.id,ne]);rn.filter(Oe=>Oe.key!==w).forEach(Oe=>{let on=Oe.key,Mc=b.fetchers.get(on),i0=No(void 0,Mc?Mc.data:void 0);b.fetchers.set(on,i0),F.has(on)&&xn(on),Oe.controller&&F.set(on,Oe.controller)}),$e({fetchers:new Map(b.fetchers)});let Li=()=>rn.forEach(Oe=>xn(Oe.key));B.signal.addEventListener("abort",Li);let{loaderResults:Ni,fetcherResults:Ai}=await Sc(b,nn,Mi,rn,ze);if(B.signal.aborted)return;B.signal.removeEventListener("abort",Li),ae.delete(w),F.delete(w),rn.forEach(Oe=>F.delete(Oe.key));let J=sa(Ni);if(J)return tr(ze,J.result,!1);if(J=sa(Ai),J)return Pe.add(J.key),tr(ze,J.result,!1);let{loaderData:Ee,errors:ft}=lf(b,nn,Mi,Ni,void 0,rn,Ai,at);if(b.fetchers.has(w)){let Oe=On(ne.data);b.fetchers.set(w,Oe)}_c(Er),b.navigation.state==="loading"&&Er>Y?(ee(T,"Expected pending action"),q&&q.abort(),St(b.navigation.location,{matches:nn,loaderData:Ee,errors:ft,fetchers:new Map(b.fetchers)})):($e({errors:ft,loaderData:sf(b.loaderData,Ee,nn,ft),fetchers:new Map(b.fetchers)}),Ue=!1)}async function Jm(w,x,E,C,I,V,X,j){let Q=b.fetchers.get(w);wn(w,No(j,Q?Q.data:void 0),{flushSync:X});let H=new AbortController,B=Rr(e.history,E,H.signal);if(V){let ne=await Ti(I,E,B.signal);if(ne.type==="aborted")return;if(ne.type==="error"){let{error:Fe}=zi(E,ne);tn(w,x,Fe,{flushSync:X});return}else if(ne.matches)I=ne.matches,C=Ho(I,E);else{tn(w,x,et(404,{pathname:E}),{flushSync:X});return}}F.set(w,H);let le=M,pe=(await So("loader",b,B,[C],I,w))[C.route.id];if(In(pe)&&(pe=await mc(pe,B.signal,!0)||pe),F.get(w)===H&&F.delete(w),!B.signal.aborted){if(ge.has(w)){wn(w,On(void 0));return}if(sr(pe))if(Y>le){wn(w,On(void 0));return}else{Pe.add(w),await tr(B,pe,!1);return}if(vt(pe)){tn(w,x,pe.error);return}ee(!In(pe),"Unhandled fetcher deferred data"),wn(w,On(pe.data))}}async function tr(w,x,E,C){let{submission:I,fetcherSubmission:V,replace:X}=C===void 0?{}:C;x.response.headers.has("X-Remix-Revalidate")&&(Ue=!0);let j=x.response.headers.get("Location");ee(j,"Expected a Location header on the redirect Response"),j=of(j,new URL(w.url),s);let Q=mi(b.location,j,{_isRedirect:!0});if(n){let ne=!1;if(x.response.headers.has("X-Remix-Reload-Document"))ne=!0;else if(pc.test(j)){const Fe=e.history.createURL(j);ne=Fe.origin!==t.location.origin||wo(Fe.pathname,s)==null}if(ne){X?t.location.replace(j):t.location.assign(j);return}}q=null;let H=X===!0||x.response.headers.has("X-Remix-Replace")?De.Replace:De.Push,{formMethod:B,formAction:le,formEncType:ue}=b.navigation;!I&&!V&&B&&le&&ue&&(I=ff(b.navigation));let pe=I||V;if(Ly.has(x.response.status)&&pe&&Ft(pe.formMethod))await er(H,Q,{submission:we({},pe,{formAction:j}),preventScrollReset:L,enableViewTransition:E?W:void 0});else{let ne=ps(Q,I);await er(H,Q,{overrideNavigation:ne,fetcherSubmission:V,preventScrollReset:L,enableViewTransition:E?W:void 0})}}async function So(w,x,E,C,I,V){let X,j={};try{X=await By(u,w,x,E,C,I,V,i,o)}catch(Q){return C.forEach(H=>{j[H.route.id]={type:de.error,error:Q}}),j}for(let[Q,H]of Object.entries(X))if(Yy(H)){let B=H.result;j[Q]={type:de.redirect,response:Qy(B,E,Q,I,s,d.v7_relativeSplatPath)}}else j[Q]=await Wy(H);return j}async function Sc(w,x,E,C,I){let V=w.matches,X=So("loader",w,I,E,x,null),j=Promise.all(C.map(async B=>{if(B.matches&&B.match&&B.controller){let ue=(await So("loader",w,Rr(e.history,B.path,B.controller.signal),[B.match],B.matches,B.key))[B.match.route.id];return{[B.key]:ue}}else return Promise.resolve({[B.key]:{type:de.error,error:et(404,{pathname:B.path})}})})),Q=await X,H=(await j).reduce((B,le)=>Object.assign(B,le),{});return await Promise.all([e1(x,Q,I.signal,V,w.loaderData),t1(x,H,C)]),{loaderResults:Q,fetcherResults:H}}function Nl(){Ue=!0,he.push(...Fl()),Ae.forEach((w,x)=>{F.has(x)&&(N.add(x),xn(x))})}function wn(w,x,E){E===void 0&&(E={}),b.fetchers.set(w,x),$e({fetchers:new Map(b.fetchers)},{flushSync:(E&&E.flushSync)===!0})}function tn(w,x,E,C){C===void 0&&(C={});let I=Hr(b.matches,x);Ci(w),$e({errors:{[I.route.id]:E},fetchers:new Map(b.fetchers)},{flushSync:(C&&C.flushSync)===!0})}function Pc(w){return d.v7_fetcherPersist&&(kt.set(w,(kt.get(w)||0)+1),ge.has(w)&&ge.delete(w)),b.fetchers.get(w)||Ny}function Ci(w){let x=b.fetchers.get(w);F.has(w)&&!(x&&x.state==="loading"&&ae.has(w))&&xn(w),Ae.delete(w),ae.delete(w),Pe.delete(w),ge.delete(w),N.delete(w),b.fetchers.delete(w)}function Zm(w){if(d.v7_fetcherPersist){let x=(kt.get(w)||0)-1;x<=0?(kt.delete(w),ge.add(w)):kt.set(w,x)}else Ci(w);$e({fetchers:new Map(b.fetchers)})}function xn(w){let x=F.get(w);ee(x,"Expected fetch controller: "+w),x.abort(),F.delete(w)}function Ec(w){for(let x of w){let E=Pc(x),C=On(E.data);b.fetchers.set(x,C)}}function Oc(){let w=[],x=!1;for(let E of Pe){let C=b.fetchers.get(E);ee(C,"Expected fetcher: "+E),C.state==="loading"&&(Pe.delete(E),w.push(E),x=!0)}return Ec(w),x}function _c(w){let x=[];for(let[E,C]of ae)if(C<w){let I=b.fetchers.get(E);ee(I,"Expected fetcher: "+E),I.state==="loading"&&(xn(E),ae.delete(E),x.push(E))}return Ec(x),x.length>0}function e0(w,x){let E=b.blockers.get(w)||Lo;return Zt.get(w)!==x&&Zt.set(w,x),E}function Cc(w){b.blockers.delete(w),Zt.delete(w)}function Ri(w,x){let E=b.blockers.get(w)||Lo;ee(E.state==="unblocked"&&x.state==="blocked"||E.state==="blocked"&&x.state==="blocked"||E.state==="blocked"&&x.state==="proceeding"||E.state==="blocked"&&x.state==="unblocked"||E.state==="proceeding"&&x.state==="unblocked","Invalid blocker state transition: "+E.state+" -> "+x.state);let C=new Map(b.blockers);C.set(w,x),$e({blockers:C})}function Rc(w){let{currentLocation:x,nextLocation:E,historyAction:C}=w;if(Zt.size===0)return;Zt.size>1&&wr(!1,"A router only supports one blocker at a time");let I=Array.from(Zt.entries()),[V,X]=I[I.length-1],j=b.blockers.get(V);if(!(j&&j.state==="proceeding")&&X({currentLocation:x,nextLocation:E,historyAction:C}))return V}function Al(w){let x=et(404,{pathname:w}),E=l||a,{matches:C,route:I}=cf(E);return Fl(),{notFoundMatches:C,route:I,error:x}}function zi(w,x){return{boundaryId:Hr(x.partialMatches).route.id,error:et(400,{type:"route-discovery",pathname:w,message:x.error!=null&&"message"in x.error?x.error:String(x.error)})}}function Fl(w){let x=[];return at.forEach((E,C)=>{(!w||w(C))&&(E.cancel(),x.push(C),at.delete(C))}),x}function t0(w,x,E){if(S=w,f=x,p=E||null,!v&&b.navigation===hs){v=!0;let C=Dc(b.location,b.matches);C!=null&&$e({restoreScrollPosition:C})}return()=>{S=null,f=null,p=null}}function zc(w,x){return p&&p(w,x.map(C=>fy(C,b.loaderData)))||w.key}function n0(w,x){if(S&&f){let E=zc(w,x);S[E]=f()}}function Dc(w,x){if(S){let E=zc(w,x),C=S[E];if(typeof C=="number")return C}return null}function Di(w,x,E){if(c){if(m.has(E))return{active:!1,matches:w};if(w){if(Object.keys(w[0].params).length>0)return{active:!0,matches:Pa(x,E,s,!0)}}else return{active:!0,matches:Pa(x,E,s,!0)||[]}}return{active:!1,matches:null}}async function Ti(w,x,E){let C=w;for(;;){let I=l==null,V=l||a;try{await $y(c,x,C,V,i,o,Dl,E)}catch(Q){return{type:"error",error:Q,partialMatches:C}}finally{I&&(a=[...a])}if(E.aborted)return{type:"aborted"};let X=or(V,x,s);if(X)return Tc(x,m),{type:"success",matches:X};let j=Pa(V,x,s,!0);if(!j||C.length===j.length&&C.every((Q,H)=>Q.route.id===j[H].route.id))return Tc(x,m),{type:"success",matches:null};C=j}}function Tc(w,x){if(x.size>=g){let E=x.values().next().value;x.delete(E)}x.add(w)}function r0(w){i={},l=vi(w,o,void 0,i)}function o0(w,x){let E=l==null;fm(w,x,l||a,i,o),E&&(a=[...a],$e({}))}return z={get basename(){return s},get future(){return d},get state(){return b},get routes(){return a},get window(){return t},initialize:Tl,subscribe:Ll,enableScrollRestoration:t0,navigate:xc,fetch:Gm,revalidate:Wm,createHref:w=>e.history.createHref(w),encodeLocation:w=>e.history.encodeLocation(w),getFetcher:Pc,deleteFetcher:Zm,dispose:Ml,getBlocker:e0,deleteBlocker:Cc,patchRoutes:o0,_internalFetchControllers:F,_internalActiveDeferreds:at,_internalSetRoutes:r0},z}function jy(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function du(e,t,n,r,o,i,a,l){let s,u;if(a){s=[];for(let d of t)if(s.push(d),d.route.id===a){u=d;break}}else s=t,u=t[t.length-1];let c=Sl(o||".",kl(s,i),wo(e.pathname,n)||e.pathname,l==="path");return o==null&&(c.search=e.search,c.hash=e.hash),(o==null||o===""||o===".")&&u&&u.route.index&&!vc(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:hn([n,c.pathname])),xr(c)}function tf(e,t,n,r){if(!r||!jy(r))return{path:n};if(r.formMethod&&!Zy(r.formMethod))return{path:n,error:et(405,{method:r.formMethod})};let o=()=>({path:n,error:et(400,{type:"invalid-body"})}),i=r.formMethod||"get",a=e?i.toUpperCase():i.toLowerCase(),l=hm(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Ft(a))return o();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,g)=>{let[m,S]=g;return""+y+m+"="+S+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!Ft(a))return o();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return o()}}}ee(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=fu(r.formData),u=r.formData;else if(r.body instanceof FormData)s=fu(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=af(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=af(s)}catch{return o()}let c={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Ft(c.formMethod))return{path:n,submission:c};let d=bn(n);return t&&d.search&&vc(d.search)&&s.append("index",""),d.search="?"+s,{path:xr(d),submission:c}}function Iy(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function nf(e,t,n,r,o,i,a,l,s,u,c,d,h,y,g,m){let S=m?vt(m[1])?m[1].error:m[1].data:void 0,p=e.createURL(t.location),f=e.createURL(o),v=m&&vt(m[1])?m[0]:void 0,k=v?Iy(n,v):n,O=m?m[1].statusCode:void 0,R=a&&O&&O>=400,z=k.filter((T,L)=>{let{route:q}=T;if(q.lazy)return!0;if(q.loader==null)return!1;if(i)return typeof q.loader!="function"||q.loader.hydrate?!0:t.loaderData[q.id]===void 0&&(!t.errors||t.errors[q.id]===void 0);if(Uy(t.loaderData,t.matches[L],T)||s.some(oe=>oe===T.route.id))return!0;let W=t.matches[L],ie=T;return rf(T,we({currentUrl:p,currentParams:W.params,nextUrl:f,nextParams:ie.params},r,{actionResult:S,actionStatus:O,defaultShouldRevalidate:R?!1:l||p.pathname+p.search===f.pathname+f.search||p.search!==f.search||dm(W,ie)}))}),b=[];return d.forEach((T,L)=>{if(i||!n.some(Ve=>Ve.route.id===T.routeId)||c.has(L))return;let q=or(y,T.path,g);if(!q){b.push({key:L,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let W=t.fetchers.get(L),ie=Ho(q,T.path),oe=!1;h.has(L)?oe=!1:u.has(L)?(u.delete(L),oe=!0):W&&W.state!=="idle"&&W.data===void 0?oe=l:oe=rf(ie,we({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:S,actionStatus:O,defaultShouldRevalidate:R?!1:l})),oe&&b.push({key:L,routeId:T.routeId,path:T.path,matches:q,match:ie,controller:new AbortController})}),[z,b]}function Uy(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function dm(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function rf(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function $y(e,t,n,r,o,i,a,l){let s=[t,...n.map(u=>u.route.id)].join("-");try{let u=a.get(s);u||(u=e({path:t,matches:n,patch:(c,d)=>{l.aborted||fm(c,d,r,o,i)}}),a.set(s,u)),u&&Gy(u)&&await u}finally{a.delete(s)}}function fm(e,t,n,r,o){if(e){var i;let a=r[e];ee(a,"No route found to patch children into: routeId = "+e);let l=vi(t,o,[e,"patch",String(((i=a.children)==null?void 0:i.length)||"0")],r);a.children?a.children.push(...l):a.children=l}else{let a=vi(t,o,["patch",String(n.length||"0")],r);n.push(...a)}}async function Hy(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];ee(o,"No route found in manifest");let i={};for(let a in r){let s=o[a]!==void 0&&a!=="hasErrorBoundary";wr(!s,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!cy.has(a)&&(i[a]=r[a])}Object.assign(o,i),Object.assign(o,we({},t(o),{lazy:void 0}))}async function qy(e){let{matches:t}=e,n=t.filter(o=>o.shouldLoad);return(await Promise.all(n.map(o=>o.resolve()))).reduce((o,i,a)=>Object.assign(o,{[n[a].route.id]:i}),{})}async function By(e,t,n,r,o,i,a,l,s,u){let c=i.map(y=>y.route.lazy?Hy(y.route,s,l):void 0),d=i.map((y,g)=>{let m=c[g],S=o.some(f=>f.route.id===y.route.id);return we({},y,{shouldLoad:S,resolve:async f=>(f&&r.method==="GET"&&(y.route.lazy||y.route.loader)&&(S=!0),S?Vy(t,r,y,m,f,u):Promise.resolve({type:de.data,result:void 0}))})}),h=await e({matches:d,request:r,params:i[0].params,fetcherKey:a,context:u});try{await Promise.all(c)}catch{}return h}async function Vy(e,t,n,r,o,i){let a,l,s=u=>{let c,d=new Promise((g,m)=>c=m);l=()=>c(),t.signal.addEventListener("abort",l);let h=g=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:i},...g!==void 0?[g]:[]),y=(async()=>{try{return{type:"data",result:await(o?o(m=>h(m)):h())}}catch(g){return{type:"error",result:g}}})();return Promise.race([y,d])};try{let u=n.route[e];if(r)if(u){let c,[d]=await Promise.all([s(u).catch(h=>{c=h}),r]);if(c!==void 0)throw c;a=d}else if(await r,u=n.route[e],u)a=await s(u);else if(e==="action"){let c=new URL(t.url),d=c.pathname+c.search;throw et(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:de.data,result:void 0};else if(u)a=await s(u);else{let c=new URL(t.url),d=c.pathname+c.search;throw et(404,{pathname:d})}ee(a.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:de.error,result:u}}finally{l&&t.signal.removeEventListener("abort",l)}return a}async function Wy(e){let{result:t,type:n}=e;if(pm(t)){let u;try{let c=t.headers.get("Content-Type");c&&/\bapplication\/json\b/.test(c)?t.body==null?u=null:u=await t.json():u=await t.text()}catch(c){return{type:de.error,error:c}}return n===de.error?{type:de.error,error:new Ya(t.status,t.statusText,u),statusCode:t.status,headers:t.headers}:{type:de.data,data:u,statusCode:t.status,headers:t.headers}}if(n===de.error){if(df(t)){var r;if(t.data instanceof Error){var o;return{type:de.error,error:t.data,statusCode:(o=t.init)==null?void 0:o.status}}t=new Ya(((r=t.init)==null?void 0:r.status)||500,void 0,t.data)}return{type:de.error,error:t,statusCode:Pl(t)?t.status:void 0}}if(Jy(t)){var i,a;return{type:de.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((a=t.init)==null?void 0:a.headers)&&new Headers(t.init.headers)}}if(df(t)){var l,s;return{type:de.data,data:t.data,statusCode:(l=t.init)==null?void 0:l.status,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}}return{type:de.data,data:t}}function Qy(e,t,n,r,o,i){let a=e.headers.get("Location");if(ee(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!pc.test(a)){let l=r.slice(0,r.findIndex(s=>s.route.id===n)+1);a=du(new URL(t.url),l,o,!0,a,i),e.headers.set("Location",a)}return e}function of(e,t,n){if(pc.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=wo(o.pathname,n)!=null;if(o.origin===t.origin&&i)return o.pathname+o.search+o.hash}return e}function Rr(e,t,n,r){let o=e.createURL(hm(t)).toString(),i={signal:n};if(r&&Ft(r.formMethod)){let{formMethod:a,formEncType:l}=r;i.method=a.toUpperCase(),l==="application/json"?(i.headers=new Headers({"Content-Type":l}),i.body=JSON.stringify(r.json)):l==="text/plain"?i.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?i.body=fu(r.formData):i.body=r.formData}return new Request(o,i)}function fu(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function af(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Ky(e,t,n,r,o){let i={},a=null,l,s=!1,u={},c=n&&vt(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let h=d.route.id,y=t[h];if(ee(!sr(y),"Cannot handle redirect results in processLoaderData"),vt(y)){let g=y.error;c!==void 0&&(g=c,c=void 0),a=a||{};{let m=Hr(e,h);a[m.route.id]==null&&(a[m.route.id]=g)}i[h]=void 0,s||(s=!0,l=Pl(y.error)?y.error.status:500),y.headers&&(u[h]=y.headers)}else In(y)?(r.set(h,y.deferredData),i[h]=y.deferredData.data,y.statusCode!=null&&y.statusCode!==200&&!s&&(l=y.statusCode),y.headers&&(u[h]=y.headers)):(i[h]=y.data,y.statusCode&&y.statusCode!==200&&!s&&(l=y.statusCode),y.headers&&(u[h]=y.headers))}),c!==void 0&&n&&(a={[n[0]]:c},i[n[0]]=void 0),{loaderData:i,errors:a,statusCode:l||200,loaderHeaders:u}}function lf(e,t,n,r,o,i,a,l){let{loaderData:s,errors:u}=Ky(t,r,o,l);return i.forEach(c=>{let{key:d,match:h,controller:y}=c,g=a[d];if(ee(g,"Did not find corresponding fetcher result"),!(y&&y.signal.aborted))if(vt(g)){let m=Hr(e.matches,h==null?void 0:h.route.id);u&&u[m.route.id]||(u=we({},u,{[m.route.id]:g.error})),e.fetchers.delete(d)}else if(sr(g))ee(!1,"Unhandled fetcher revalidation redirect");else if(In(g))ee(!1,"Unhandled fetcher deferred data");else{let m=On(g.data);e.fetchers.set(d,m)}}),{loaderData:s,errors:u}}function sf(e,t,n,r){let o=we({},t);for(let i of n){let a=i.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(o[a]=t[a]):e[a]!==void 0&&i.route.loader&&(o[a]=e[a]),r&&r.hasOwnProperty(a))break}return o}function uf(e){return e?vt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Hr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function cf(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function et(e,t){let{pathname:n,routeId:r,method:o,type:i,message:a}=t===void 0?{}:t,l="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(l="Bad Request",i==="route-discovery"?s='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+a):o&&n&&r?s="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?s="defer() is not supported in actions":i==="invalid-body"&&(s="Unable to encode submission body")):e===403?(l="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",s='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",o&&n&&r?s="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new Ya(e||500,l,new Error(s),!0)}function sa(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,o]=t[n];if(sr(o))return{key:r,result:o}}}function hm(e){let t=typeof e=="string"?bn(e):e;return xr(we({},t,{hash:""}))}function Xy(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Gy(e){return typeof e=="object"&&e!=null&&"then"in e}function Yy(e){return pm(e.result)&&My.has(e.result.status)}function In(e){return e.type===de.deferred}function vt(e){return e.type===de.error}function sr(e){return(e&&e.type)===de.redirect}function df(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Jy(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function pm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Zy(e){return Ty.has(e.toLowerCase())}function Ft(e){return zy.has(e.toLowerCase())}async function e1(e,t,n,r,o){let i=Object.entries(t);for(let a=0;a<i.length;a++){let[l,s]=i[a],u=e.find(h=>(h==null?void 0:h.route.id)===l);if(!u)continue;let c=r.find(h=>h.route.id===u.route.id),d=c!=null&&!dm(c,u)&&(o&&o[u.route.id])!==void 0;In(s)&&d&&await mc(s,n,!1).then(h=>{h&&(t[l]=h)})}}async function t1(e,t,n){for(let r=0;r<n.length;r++){let{key:o,routeId:i,controller:a}=n[r],l=t[o];e.find(u=>(u==null?void 0:u.route.id)===i)&&In(l)&&(ee(a,"Expected an AbortController for revalidating fetcher deferred result"),await mc(l,a.signal,!0).then(u=>{u&&(t[o]=u)}))}}async function mc(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:de.data,data:e.deferredData.unwrappedData}}catch(o){return{type:de.error,error:o}}return{type:de.data,data:e.deferredData.data}}}function vc(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Ho(e,t){let n=typeof t=="string"?bn(t).search:t.search;if(e[e.length-1].route.index&&vc(n||""))return e[e.length-1];let r=sm(e);return r[r.length-1]}function ff(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:a}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function ps(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function n1(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function No(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function r1(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function On(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function o1(e,t){try{let n=e.sessionStorage.getItem(cm);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function i1(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(cm,JSON.stringify(n))}catch(r){wr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ja.apply(this,arguments)}const El=P.createContext(null),mm=P.createContext(null),Zn=P.createContext(null),gc=P.createContext(null),Jt=P.createContext({outlet:null,matches:[],isDataRoute:!1}),vm=P.createContext(null);function a1(e,t){let{relative:n}=t===void 0?{}:t;xo()||ee(!1);let{basename:r,navigator:o}=P.useContext(Zn),{hash:i,pathname:a,search:l}=ym(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:hn([r,a])),o.createHref({pathname:s,search:l,hash:i})}function xo(){return P.useContext(gc)!=null}function ko(){return xo()||ee(!1),P.useContext(gc).location}function gm(e){P.useContext(Zn).static||P.useLayoutEffect(e)}function yc(){let{isDataRoute:e}=P.useContext(Jt);return e?b1():l1()}function l1(){xo()||ee(!1);let e=P.useContext(El),{basename:t,future:n,navigator:r}=P.useContext(Zn),{matches:o}=P.useContext(Jt),{pathname:i}=ko(),a=JSON.stringify(kl(o,n.v7_relativeSplatPath)),l=P.useRef(!1);return gm(()=>{l.current=!0}),P.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=Sl(u,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:hn([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,a,i,e])}const s1=P.createContext(null);function u1(e){let t=P.useContext(Jt).outlet;return t&&P.createElement(s1.Provider,{value:e},t)}function Uw(){let{matches:e}=P.useContext(Jt),t=e[e.length-1];return t?t.params:{}}function ym(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=P.useContext(Zn),{matches:o}=P.useContext(Jt),{pathname:i}=ko(),a=JSON.stringify(kl(o,r.v7_relativeSplatPath));return P.useMemo(()=>Sl(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function c1(e,t,n,r){xo()||ee(!1);let{navigator:o}=P.useContext(Zn),{matches:i}=P.useContext(Jt),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=ko(),c;c=u;let d=c.pathname||"/",h=d;if(s!=="/"){let m=s.replace(/^\//,"").split("/");h="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let y=or(e,{pathname:h});return m1(y&&y.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:hn([s,o.encodeLocation?o.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?s:hn([s,o.encodeLocation?o.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,n,r)}function d1(){let e=xm(),t=Pl(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:o},n):null,null)}const f1=P.createElement(d1,null);class h1 extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?P.createElement(Jt.Provider,{value:this.props.routeContext},P.createElement(vm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function p1(e){let{routeContext:t,match:n,children:r}=e,o=P.useContext(El);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Jt.Provider,{value:t},r)}function m1(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let c=a.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);c>=0||ee(!1),a=a.slice(0,Math.min(a.length,c+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let d=a[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:y}=n,g=d.route.loader&&h[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||g){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,d,h)=>{let y,g=!1,m=null,S=null;n&&(y=l&&d.route.id?l[d.route.id]:void 0,m=d.route.errorElement||f1,s&&(u<0&&h===0?(g=!0,S=null):u===h&&(g=!0,S=d.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,h+1)),f=()=>{let v;return y?v=m:g?v=S:d.route.Component?v=P.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,P.createElement(p1,{match:d,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?P.createElement(h1,{location:n.location,revalidation:n.revalidation,component:m,error:y,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var bm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(bm||{}),Za=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Za||{});function v1(e){let t=P.useContext(El);return t||ee(!1),t}function g1(e){let t=P.useContext(mm);return t||ee(!1),t}function y1(e){let t=P.useContext(Jt);return t||ee(!1),t}function wm(e){let t=y1(),n=t.matches[t.matches.length-1];return n.route.id||ee(!1),n.route.id}function xm(){var e;let t=P.useContext(vm),n=g1(Za.UseRouteError),r=wm(Za.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function b1(){let{router:e}=v1(bm.UseNavigateStable),t=wm(Za.UseNavigateStable),n=P.useRef(!1);return gm(()=>{n.current=!0}),P.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Ja({fromRouteId:t},i)))},[e,t])}function w1(e){let{to:t,replace:n,state:r,relative:o}=e;xo()||ee(!1);let{future:i,static:a}=P.useContext(Zn),{matches:l}=P.useContext(Jt),{pathname:s}=ko(),u=yc(),c=Sl(t,kl(l,i.v7_relativeSplatPath),s,o==="path"),d=JSON.stringify(c);return P.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:o}),[u,d,o,n,r]),null}function x1(e){return u1(e.context)}function k1(e){let{basename:t="/",children:n=null,location:r,navigationType:o=De.Pop,navigator:i,static:a=!1,future:l}=e;xo()&&ee(!1);let s=t.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:s,navigator:i,static:a,future:Ja({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=bn(r));let{pathname:c="/",search:d="",hash:h="",state:y=null,key:g="default"}=r,m=P.useMemo(()=>{let S=wo(c,s);return S==null?null:{location:{pathname:S,search:d,hash:h,state:y,key:g},navigationType:o}},[s,c,d,h,y,g,o]);return m==null?null:P.createElement(Zn.Provider,{value:u},P.createElement(gc.Provider,{children:n,value:m}))}new Promise(()=>{});function S1(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:P.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:P.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:P.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gi.apply(this,arguments)}function P1(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function E1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function O1(e,t){return e.button===0&&(!t||t==="_self")&&!E1(e)}function hu(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(o=>[n,o]):[[n,r]])},[]))}function _1(e,t){let n=hu(e);return t&&t.forEach((r,o)=>{n.has(o)||t.getAll(o).forEach(i=>{n.append(o,i)})}),n}const C1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],R1="6";try{window.__reactRouterVersion=R1}catch{}function z1(e,t){return Fy({basename:t==null?void 0:t.basename,future:gi({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:ly({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||D1(),routes:e,mapRouteProperties:S1,unstable_dataStrategy:t==null?void 0:t.unstable_dataStrategy,unstable_patchRoutesOnNavigation:t==null?void 0:t.unstable_patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function D1(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=gi({},t,{errors:T1(t.errors)})),t}function T1(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new Ya(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let a=new i(o.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const M1=P.createContext({isTransitioning:!1}),L1=P.createContext(new Map),N1="startTransition",hf=x0[N1],A1="flushSync",pf=Mg[A1];function F1(e){hf?hf(e):e()}function Ao(e){pf?pf(e):e()}class j1{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function I1(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=P.useState(n.state),[a,l]=P.useState(),[s,u]=P.useState({isTransitioning:!1}),[c,d]=P.useState(),[h,y]=P.useState(),[g,m]=P.useState(),S=P.useRef(new Map),{v7_startTransition:p}=r||{},f=P.useCallback(b=>{p?F1(b):b()},[p]),v=P.useCallback((b,T)=>{let{deletedFetchers:L,unstable_flushSync:q,unstable_viewTransitionOpts:W}=T;L.forEach(oe=>S.current.delete(oe)),b.fetchers.forEach((oe,Ve)=>{oe.data!==void 0&&S.current.set(Ve,oe.data)});let ie=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!W||ie){q?Ao(()=>i(b)):f(()=>i(b));return}if(q){Ao(()=>{h&&(c&&c.resolve(),h.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:W.currentLocation,nextLocation:W.nextLocation})});let oe=n.window.document.startViewTransition(()=>{Ao(()=>i(b))});oe.finished.finally(()=>{Ao(()=>{d(void 0),y(void 0),l(void 0),u({isTransitioning:!1})})}),Ao(()=>y(oe));return}h?(c&&c.resolve(),h.skipTransition(),m({state:b,currentLocation:W.currentLocation,nextLocation:W.nextLocation})):(l(b),u({isTransitioning:!0,flushSync:!1,currentLocation:W.currentLocation,nextLocation:W.nextLocation}))},[n.window,h,c,S,f]);P.useLayoutEffect(()=>n.subscribe(v),[n,v]),P.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new j1)},[s]),P.useEffect(()=>{if(c&&a&&n.window){let b=a,T=c.promise,L=n.window.document.startViewTransition(async()=>{f(()=>i(b)),await T});L.finished.finally(()=>{d(void 0),y(void 0),l(void 0),u({isTransitioning:!1})}),y(L)}},[f,a,c,n.window]),P.useEffect(()=>{c&&a&&o.location.key===a.location.key&&c.resolve()},[c,h,o.location,a]),P.useEffect(()=>{!s.isTransitioning&&g&&(l(g.state),u({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),m(void 0))},[s.isTransitioning,g]),P.useEffect(()=>{},[]);let k=P.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:b=>n.navigate(b),push:(b,T,L)=>n.navigate(b,{state:T,preventScrollReset:L==null?void 0:L.preventScrollReset}),replace:(b,T,L)=>n.navigate(b,{replace:!0,state:T,preventScrollReset:L==null?void 0:L.preventScrollReset})}),[n]),O=n.basename||"/",R=P.useMemo(()=>({router:n,navigator:k,static:!1,basename:O}),[n,k,O]),z=P.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return P.createElement(P.Fragment,null,P.createElement(El.Provider,{value:R},P.createElement(mm.Provider,{value:o},P.createElement(L1.Provider,{value:S.current},P.createElement(M1.Provider,{value:s},P.createElement(k1,{basename:O,location:o.location,navigationType:o.historyAction,navigator:k,future:z},o.initialized||n.future.v7_partialHydration?P.createElement(U1,{routes:n.routes,future:n.future,state:o}):t))))),null)}const U1=P.memo($1);function $1(e){let{routes:t,future:n,state:r}=e;return c1(t,void 0,r,n)}const H1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",q1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$w=P.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:c,unstable_viewTransition:d}=t,h=P1(t,C1),{basename:y}=P.useContext(Zn),g,m=!1;if(typeof u=="string"&&q1.test(u)&&(g=u,H1))try{let v=new URL(window.location.href),k=u.startsWith("//")?new URL(v.protocol+u):new URL(u),O=wo(k.pathname,y);k.origin===v.origin&&O!=null?u=O+k.search+k.hash:m=!0}catch{}let S=a1(u,{relative:o}),p=B1(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:o,unstable_viewTransition:d});function f(v){r&&r(v),v.defaultPrevented||p(v)}return P.createElement("a",gi({},h,{href:g||S,onClick:m||i?r:f,ref:n,target:s}))});var mf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mf||(mf={}));var vf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vf||(vf={}));function B1(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=yc(),u=ko(),c=ym(e,{relative:a});return P.useCallback(d=>{if(O1(d,n)){d.preventDefault();let h=r!==void 0?r:xr(u)===xr(c);s(e,{replace:h,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[u,s,c,r,o,n,e,i,a,l])}function Hw(e){let t=P.useRef(hu(e)),n=P.useRef(!1),r=ko(),o=P.useMemo(()=>_1(r.search,n.current?null:t.current),[r.search]),i=yc(),a=P.useCallback((l,s)=>{const u=hu(typeof l=="function"?l(o):l);n.current=!0,i("?"+u,s)},[i,o]);return[o,a]}function V1({className:e}){return K.jsxs("div",{className:hc("flex items-center flex-col justify-center ",e),children:[K.jsx(ty,{color:"#41d9ce",size:"medium",text:"",textColor:""}),K.jsx("p",{className:"text-primary text-lg",children:"加载中..."})]})}function W1(){const e=P.useRef(null),t=n=>new Promise((r,o)=>{const i=new Image;i.src=n,i.onload=()=>r(i),i.onerror=o});return P.useEffect(()=>{const n=e.current;if(!n)return;const r=n.getContext("2d"),o="/project-preview/poster-bg.png",i="/project-preview/bar-code.gif";return(async()=>{try{const[l,s]=await Promise.all([t(o),t(i)]);r==null||r.drawImage(l,0,0,n.width,n.height),r==null||r.drawImage(s,145,1260,1200,300)}catch(l){console.error("Image loading failed:",l)}})(),()=>{r==null||r.clearRect(0,0,n.width,n.height)}},[]),K.jsx("div",{className:"h-[100vh] bg-[#F2F2F7]  flex-col flex  items-center",children:K.jsx("canvas",{ref:e,className:"aspect-[0.5618904726181545]",style:{width:"100%"},width:1498,height:2666})})}const Q1=P.lazy(()=>Pr(()=>import("./index-jX9hE48h.js"),__vite__mapDeps([0,1]))),K1=P.lazy(()=>Pr(()=>import("./index-CFdB6BBr.js"),__vite__mapDeps([2,1,3,4,5,6]))),X1=P.lazy(()=>Pr(()=>import("./detail-Bj4uO0C2.js"),__vite__mapDeps([7,1,8,9,5,6]))),G1=P.lazy(()=>Pr(()=>import("./result-CvcsZtfh.js"),__vite__mapDeps([10,1]))),Y1=P.lazy(()=>Pr(()=>import("./not-find-tdKm9nBy.js"),[])),J1=P.lazy(()=>Pr(()=>import("./home-CIzYWs8i.js"),__vite__mapDeps([11,12,5,1,3,4,6,8,9]))),Z1=P.lazy(()=>Pr(()=>import("./service-D_YzpZWU.js"),__vite__mapDeps([13,12,5,1,8])));function ua(){const e=xm();return console.error(e),K.jsx("div",{children:"Dang!"})}const eb=[{path:"/",errorElement:K.jsx(ua,{}),element:K.jsx(En,{children:K.jsx(Q1,{})}),children:[{path:"/",element:K.jsx(En,{children:K.jsx(J1,{})})},{path:"/service",element:K.jsx(En,{children:K.jsx(Z1,{})})}]},{path:"/order",errorElement:K.jsx(ua,{}),element:K.jsx(x1,{}),children:[{index:!0,element:K.jsx(w1,{to:"/order/list",replace:!0})},{path:"list",element:K.jsx(En,{children:K.jsx(K1,{})})},{path:":id",element:K.jsx(En,{children:K.jsx(X1,{})})},{path:"result",element:K.jsx(En,{children:K.jsx(G1,{})})}]},{path:"/poster",errorElement:K.jsx(ua,{}),element:K.jsx(En,{children:K.jsx(W1,{})})},{path:"*",errorElement:K.jsx(ua,{}),element:K.jsx(En,{children:K.jsx(Y1,{})})}];function En({children:e}){return K.jsx(P.Suspense,{fallback:K.jsx(V1,{className:"min-h-[var(--content-height)]"}),children:e})}const tb=z1(eb,{});function nb(){return K.jsx(I1,{router:tb})}var Ol=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},_l=typeof window>"u"||"Deno"in globalThis;function Lt(){}function rb(e,t){return typeof e=="function"?e(t):e}function ob(e){return typeof e=="number"&&e>=0&&e!==1/0}function ib(e,t){return Math.max(e+(t||0)-Date.now(),0)}function gf(e,t){return typeof e=="function"?e(t):e}function ab(e,t){return typeof e=="function"?e(t):e}function yf(e,t){const{type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:a,stale:l}=e;if(a){if(r){if(t.queryHash!==bc(a,t.options))return!1}else if(!bi(t.queryKey,a))return!1}if(n!=="all"){const s=t.isActive();if(n==="active"&&!s||n==="inactive"&&s)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||o&&o!==t.state.fetchStatus||i&&!i(t))}function bf(e,t){const{exact:n,status:r,predicate:o,mutationKey:i}=e;if(i){if(!t.options.mutationKey)return!1;if(n){if(yi(t.options.mutationKey)!==yi(i))return!1}else if(!bi(t.options.mutationKey,i))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function bc(e,t){return((t==null?void 0:t.queryKeyHashFn)||yi)(e)}function yi(e){return JSON.stringify(e,(t,n)=>pu(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function bi(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!bi(e[n],t[n])):!1}function km(e,t){if(e===t)return e;const n=wf(e)&&wf(t);if(n||pu(e)&&pu(t)){const r=n?e:Object.keys(e),o=r.length,i=n?t:Object.keys(t),a=i.length,l=n?[]:{};let s=0;for(let u=0;u<a;u++){const c=n?u:i[u];(!n&&r.includes(c)||n)&&e[c]===void 0&&t[c]===void 0?(l[c]=void 0,s++):(l[c]=km(e[c],t[c]),l[c]===e[c]&&e[c]!==void 0&&s++)}return o===a&&s===o?e:l}return t}function qw(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function wf(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function pu(e){if(!xf(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!xf(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function xf(e){return Object.prototype.toString.call(e)==="[object Object]"}function lb(e){return new Promise(t=>{setTimeout(t,e)})}function sb(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?km(e,t):t}function ub(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function cb(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Sm=Symbol();function Pm(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Sm?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var ur,Tn,Xr,Mf,db=(Mf=class extends Ol{constructor(){super();se(this,ur);se(this,Tn);se(this,Xr);Z(this,Xr,t=>{if(!_l&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){_(this,Tn)||this.setEventListener(_(this,Xr))}onUnsubscribe(){var t;this.hasListeners()||((t=_(this,Tn))==null||t.call(this),Z(this,Tn,void 0))}setEventListener(t){var n;Z(this,Xr,t),(n=_(this,Tn))==null||n.call(this),Z(this,Tn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){_(this,ur)!==t&&(Z(this,ur,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof _(this,ur)=="boolean"?_(this,ur):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},ur=new WeakMap,Tn=new WeakMap,Xr=new WeakMap,Mf),Em=new db,Gr,Mn,Yr,Lf,fb=(Lf=class extends Ol{constructor(){super();se(this,Gr,!0);se(this,Mn);se(this,Yr);Z(this,Yr,t=>{if(!_l&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){_(this,Mn)||this.setEventListener(_(this,Yr))}onUnsubscribe(){var t;this.hasListeners()||((t=_(this,Mn))==null||t.call(this),Z(this,Mn,void 0))}setEventListener(t){var n;Z(this,Yr,t),(n=_(this,Mn))==null||n.call(this),Z(this,Mn,t(this.setOnline.bind(this)))}setOnline(t){_(this,Gr)!==t&&(Z(this,Gr,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return _(this,Gr)}},Gr=new WeakMap,Mn=new WeakMap,Yr=new WeakMap,Lf),el=new fb;function hb(e){return Math.min(1e3*2**e,3e4)}function Om(e){return(e??"online")==="online"?el.isOnline():!0}var _m=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function ms(e){return e instanceof _m}function Cm(e){let t=!1,n=0,r=!1,o,i,a;const l=new Promise((p,f)=>{i=p,a=f}),s=p=>{var f;r||(g(new _m(p)),(f=e.abort)==null||f.call(e))},u=()=>{t=!0},c=()=>{t=!1},d=()=>Em.isFocused()&&(e.networkMode==="always"||el.isOnline())&&e.canRun(),h=()=>Om(e.networkMode)&&e.canRun(),y=p=>{var f;r||(r=!0,(f=e.onSuccess)==null||f.call(e,p),o==null||o(),i(p))},g=p=>{var f;r||(r=!0,(f=e.onError)==null||f.call(e,p),o==null||o(),a(p))},m=()=>new Promise(p=>{var f;o=v=>{(r||d())&&p(v)},(f=e.onPause)==null||f.call(e)}).then(()=>{var p;o=void 0,r||(p=e.onContinue)==null||p.call(e)}),S=()=>{if(r)return;let p;const f=n===0?e.initialPromise:void 0;try{p=f??e.fn()}catch(v){p=Promise.reject(v)}Promise.resolve(p).then(y).catch(v=>{var b;if(r)return;const k=e.retry??(_l?0:3),O=e.retryDelay??hb,R=typeof O=="function"?O(n,v):O,z=k===!0||typeof k=="number"&&n<k||typeof k=="function"&&k(n,v);if(t||!z){g(v);return}n++,(b=e.onFail)==null||b.call(e,n,v),lb(R).then(()=>d()?void 0:m()).then(()=>{t?g(v):S()})})};return{promise:l,cancel:s,continue:()=>(o==null||o(),l),cancelRetry:u,continueRetry:c,canStart:h,start:()=>(h()?S():m().then(S),l)}}function pb(){let e=[],t=0,n=l=>{l()},r=l=>{l()},o=l=>setTimeout(l,0);const i=l=>{t?e.push(l):o(()=>{n(l)})},a=()=>{const l=e;e=[],l.length&&o(()=>{r(()=>{l.forEach(s=>{n(s)})})})};return{batch:l=>{let s;t++;try{s=l()}finally{t--,t||a()}return s},batchCalls:l=>(...s)=>{i(()=>{l(...s)})},schedule:i,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{o=l}}}var nt=pb(),cr,Nf,Rm=(Nf=class{constructor(){se(this,cr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),ob(this.gcTime)&&Z(this,cr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(_l?1/0:5*60*1e3))}clearGcTimeout(){_(this,cr)&&(clearTimeout(_(this,cr)),Z(this,cr,void 0))}},cr=new WeakMap,Nf),Jr,Zr,Pt,Xe,xi,dr,Nt,ln,Af,mb=(Af=class extends Rm{constructor(t){super();se(this,Nt);se(this,Jr);se(this,Zr);se(this,Pt);se(this,Xe);se(this,xi);se(this,dr);Z(this,dr,!1),Z(this,xi,t.defaultOptions),this.setOptions(t.options),this.observers=[],Z(this,Pt,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,Z(this,Jr,gb(this.options)),this.state=t.state??_(this,Jr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=_(this,Xe))==null?void 0:t.promise}setOptions(t){this.options={..._(this,xi),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&_(this,Pt).remove(this)}setData(t,n){const r=sb(this.state.data,t,this.options);return We(this,Nt,ln).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){We(this,Nt,ln).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,o;const n=(r=_(this,Xe))==null?void 0:r.promise;return(o=_(this,Xe))==null||o.cancel(t),n?n.then(Lt).catch(Lt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(_(this,Jr))}isActive(){return this.observers.some(t=>ab(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!ib(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=_(this,Xe))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=_(this,Xe))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),_(this,Pt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(_(this,Xe)&&(_(this,dr)?_(this,Xe).cancel({revert:!0}):_(this,Xe).cancelRetry()),this.scheduleGc()),_(this,Pt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||We(this,Nt,ln).call(this,{type:"invalidate"})}fetch(t,n){var s,u,c;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(_(this,Xe))return _(this,Xe).continueRetry(),_(this,Xe).promise}if(t&&this.setOptions(t),!this.options.queryFn){const d=this.observers.find(h=>h.options.queryFn);d&&this.setOptions(d.options)}const r=new AbortController,o=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(Z(this,dr,!0),r.signal)})},i=()=>{const d=Pm(this.options,n),h={queryKey:this.queryKey,meta:this.meta};return o(h),Z(this,dr,!1),this.options.persister?this.options.persister(d,h,this):d(h)},a={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:i};o(a),(s=this.options.behavior)==null||s.onFetch(a,this),Z(this,Zr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=a.fetchOptions)==null?void 0:u.meta))&&We(this,Nt,ln).call(this,{type:"fetch",meta:(c=a.fetchOptions)==null?void 0:c.meta});const l=d=>{var h,y,g,m;ms(d)&&d.silent||We(this,Nt,ln).call(this,{type:"error",error:d}),ms(d)||((y=(h=_(this,Pt).config).onError)==null||y.call(h,d,this),(m=(g=_(this,Pt).config).onSettled)==null||m.call(g,this.state.data,d,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return Z(this,Xe,Cm({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:d=>{var h,y,g,m;if(d===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(S){l(S);return}(y=(h=_(this,Pt).config).onSuccess)==null||y.call(h,d,this),(m=(g=_(this,Pt).config).onSettled)==null||m.call(g,d,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:l,onFail:(d,h)=>{We(this,Nt,ln).call(this,{type:"failed",failureCount:d,error:h})},onPause:()=>{We(this,Nt,ln).call(this,{type:"pause"})},onContinue:()=>{We(this,Nt,ln).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),_(this,Xe).start()}},Jr=new WeakMap,Zr=new WeakMap,Pt=new WeakMap,Xe=new WeakMap,xi=new WeakMap,dr=new WeakMap,Nt=new WeakSet,ln=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...vb(r.data,this.options),fetchMeta:t.meta??null};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return ms(o)&&o.revert&&_(this,Zr)?{..._(this,Zr),fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),nt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),_(this,Pt).notify({query:this,type:"updated",action:t})})},Af);function vb(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Om(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function gb(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Vt,Ff,zm=(Ff=class extends Ol{constructor(t={}){super();se(this,Vt);this.config=t,Z(this,Vt,new Map)}build(t,n,r){const o=n.queryKey,i=n.queryHash??bc(o,n);let a=this.get(i);return a||(a=new mb({cache:this,queryKey:o,queryHash:i,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(a)),a}add(t){_(this,Vt).has(t.queryHash)||(_(this,Vt).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=_(this,Vt).get(t.queryHash);n&&(t.destroy(),n===t&&_(this,Vt).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){nt.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return _(this,Vt).get(t)}getAll(){return[..._(this,Vt).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>yf(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>yf(t,r)):n}notify(t){nt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){nt.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){nt.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Vt=new WeakMap,Ff),Wt,Ze,fr,Qt,_n,jf,yb=(jf=class extends Rm{constructor(t){super();se(this,Qt);se(this,Wt);se(this,Ze);se(this,fr);this.mutationId=t.mutationId,Z(this,Ze,t.mutationCache),Z(this,Wt,[]),this.state=t.state||bb(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){_(this,Wt).includes(t)||(_(this,Wt).push(t),this.clearGcTimeout(),_(this,Ze).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){Z(this,Wt,_(this,Wt).filter(n=>n!==t)),this.scheduleGc(),_(this,Ze).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){_(this,Wt).length||(this.state.status==="pending"?this.scheduleGc():_(this,Ze).remove(this))}continue(){var t;return((t=_(this,fr))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,i,a,l,s,u,c,d,h,y,g,m,S,p,f,v,k,O,R,z;Z(this,fr,Cm({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(b,T)=>{We(this,Qt,_n).call(this,{type:"failed",failureCount:b,error:T})},onPause:()=>{We(this,Qt,_n).call(this,{type:"pause"})},onContinue:()=>{We(this,Qt,_n).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>_(this,Ze).canRun(this)}));const n=this.state.status==="pending",r=!_(this,fr).canStart();try{if(!n){We(this,Qt,_n).call(this,{type:"pending",variables:t,isPaused:r}),await((i=(o=_(this,Ze).config).onMutate)==null?void 0:i.call(o,t,this));const T=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,t));T!==this.state.context&&We(this,Qt,_n).call(this,{type:"pending",context:T,variables:t,isPaused:r})}const b=await _(this,fr).start();return await((u=(s=_(this,Ze).config).onSuccess)==null?void 0:u.call(s,b,t,this.state.context,this)),await((d=(c=this.options).onSuccess)==null?void 0:d.call(c,b,t,this.state.context)),await((y=(h=_(this,Ze).config).onSettled)==null?void 0:y.call(h,b,null,this.state.variables,this.state.context,this)),await((m=(g=this.options).onSettled)==null?void 0:m.call(g,b,null,t,this.state.context)),We(this,Qt,_n).call(this,{type:"success",data:b}),b}catch(b){try{throw await((p=(S=_(this,Ze).config).onError)==null?void 0:p.call(S,b,t,this.state.context,this)),await((v=(f=this.options).onError)==null?void 0:v.call(f,b,t,this.state.context)),await((O=(k=_(this,Ze).config).onSettled)==null?void 0:O.call(k,void 0,b,this.state.variables,this.state.context,this)),await((z=(R=this.options).onSettled)==null?void 0:z.call(R,void 0,b,t,this.state.context)),b}finally{We(this,Qt,_n).call(this,{type:"error",error:b})}}finally{_(this,Ze).runNext(this)}}},Wt=new WeakMap,Ze=new WeakMap,fr=new WeakMap,Qt=new WeakSet,_n=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),nt.batch(()=>{_(this,Wt).forEach(r=>{r.onMutationUpdate(t)}),_(this,Ze).notify({mutation:this,type:"updated",action:t})})},jf);function bb(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var pt,ki,If,Dm=(If=class extends Ol{constructor(t={}){super();se(this,pt);se(this,ki);this.config=t,Z(this,pt,new Map),Z(this,ki,Date.now())}build(t,n,r){const o=new yb({mutationCache:this,mutationId:++Fi(this,ki)._,options:t.defaultMutationOptions(n),state:r});return this.add(o),o}add(t){const n=ca(t),r=_(this,pt).get(n)??[];r.push(t),_(this,pt).set(n,r),this.notify({type:"added",mutation:t})}remove(t){var r;const n=ca(t);if(_(this,pt).has(n)){const o=(r=_(this,pt).get(n))==null?void 0:r.filter(i=>i!==t);o&&(o.length===0?_(this,pt).delete(n):_(this,pt).set(n,o))}this.notify({type:"removed",mutation:t})}canRun(t){var r;const n=(r=_(this,pt).get(ca(t)))==null?void 0:r.find(o=>o.state.status==="pending");return!n||n===t}runNext(t){var r;const n=(r=_(this,pt).get(ca(t)))==null?void 0:r.find(o=>o!==t&&o.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){nt.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[..._(this,pt).values()].flat()}find(t){const n={exact:!0,...t};return this.getAll().find(r=>bf(n,r))}findAll(t={}){return this.getAll().filter(n=>bf(t,n))}notify(t){nt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return nt.batch(()=>Promise.all(t.map(n=>n.continue().catch(Lt))))}},pt=new WeakMap,ki=new WeakMap,If);function ca(e){var t;return((t=e.options.scope)==null?void 0:t.id)??String(e.mutationId)}function kf(e){return{onFetch:(t,n)=>{var c,d,h,y,g;const r=t.options,o=(h=(d=(c=t.fetchOptions)==null?void 0:c.meta)==null?void 0:d.fetchMore)==null?void 0:h.direction,i=((y=t.state.data)==null?void 0:y.pages)||[],a=((g=t.state.data)==null?void 0:g.pageParams)||[];let l={pages:[],pageParams:[]},s=0;const u=async()=>{let m=!1;const S=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(t.signal.aborted?m=!0:t.signal.addEventListener("abort",()=>{m=!0}),t.signal)})},p=Pm(t.options,t.fetchOptions),f=async(v,k,O)=>{if(m)return Promise.reject();if(k==null&&v.pages.length)return Promise.resolve(v);const R={queryKey:t.queryKey,pageParam:k,direction:O?"backward":"forward",meta:t.options.meta};S(R);const z=await p(R),{maxPages:b}=t.options,T=O?cb:ub;return{pages:T(v.pages,z,b),pageParams:T(v.pageParams,k,b)}};if(o&&i.length){const v=o==="backward",k=v?Tm:mu,O={pages:i,pageParams:a},R=k(r,O);l=await f(O,R,v)}else{const v=e??i.length;do{const k=s===0?a[0]??r.initialPageParam:mu(r,l);if(s>0&&k==null)break;l=await f(l,k),s++}while(s<v)}return l};t.options.persister?t.fetchFn=()=>{var m,S;return(S=(m=t.options).persister)==null?void 0:S.call(m,u,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function mu(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function Tm(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}function Bw(e,t){return t?mu(e,t)!=null:!1}function Vw(e,t){return!t||!e.getPreviousPageParam?!1:Tm(e,t)!=null}var _e,Ln,Nn,eo,to,An,no,ro,Uf,wb=(Uf=class{constructor(e={}){se(this,_e);se(this,Ln);se(this,Nn);se(this,eo);se(this,to);se(this,An);se(this,no);se(this,ro);Z(this,_e,e.queryCache||new zm),Z(this,Ln,e.mutationCache||new Dm),Z(this,Nn,e.defaultOptions||{}),Z(this,eo,new Map),Z(this,to,new Map),Z(this,An,0)}mount(){Fi(this,An)._++,_(this,An)===1&&(Z(this,no,Em.subscribe(async e=>{e&&(await this.resumePausedMutations(),_(this,_e).onFocus())})),Z(this,ro,el.subscribe(async e=>{e&&(await this.resumePausedMutations(),_(this,_e).onOnline())})))}unmount(){var e,t;Fi(this,An)._--,_(this,An)===0&&((e=_(this,no))==null||e.call(this),Z(this,no,void 0),(t=_(this,ro))==null||t.call(this),Z(this,ro,void 0))}isFetching(e){return _(this,_e).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return _(this,Ln).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=_(this,_e).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{const n=this.defaultQueryOptions(e),r=_(this,_e).build(this,n);return e.revalidateIfStale&&r.isStaleByTime(gf(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return _(this,_e).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),o=_(this,_e).get(r.queryHash),i=o==null?void 0:o.state.data,a=rb(t,i);if(a!==void 0)return _(this,_e).build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return nt.batch(()=>_(this,_e).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=_(this,_e).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=_(this,_e);nt.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=_(this,_e),r={type:"active",...e};return nt.batch(()=>(n.findAll(e).forEach(o=>{o.reset()}),this.refetchQueries(r,t)))}cancelQueries(e={},t={}){const n={revert:!0,...t},r=nt.batch(()=>_(this,_e).findAll(e).map(o=>o.cancel(n)));return Promise.all(r).then(Lt).catch(Lt)}invalidateQueries(e={},t={}){return nt.batch(()=>{if(_(this,_e).findAll(e).forEach(r=>{r.invalidate()}),e.refetchType==="none")return Promise.resolve();const n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e={},t){const n={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},r=nt.batch(()=>_(this,_e).findAll(e).filter(o=>!o.isDisabled()).map(o=>{let i=o.fetch(void 0,n);return n.throwOnError||(i=i.catch(Lt)),o.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(Lt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=_(this,_e).build(this,t);return n.isStaleByTime(gf(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Lt).catch(Lt)}fetchInfiniteQuery(e){return e.behavior=kf(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Lt).catch(Lt)}ensureInfiniteQueryData(e){return e.behavior=kf(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return el.isOnline()?_(this,Ln).resumePausedMutations():Promise.resolve()}getQueryCache(){return _(this,_e)}getMutationCache(){return _(this,Ln)}getDefaultOptions(){return _(this,Nn)}setDefaultOptions(e){Z(this,Nn,e)}setQueryDefaults(e,t){_(this,eo).set(yi(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[..._(this,eo).values()];let n={};return t.forEach(r=>{bi(e,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(e,t){_(this,to).set(yi(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[..._(this,to).values()];let n={};return t.forEach(r=>{bi(e,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={..._(this,Nn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=bc(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===Sm&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{..._(this,Nn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){_(this,_e).clear(),_(this,Ln).clear()}},_e=new WeakMap,Ln=new WeakMap,Nn=new WeakMap,eo=new WeakMap,to=new WeakMap,An=new WeakMap,no=new WeakMap,ro=new WeakMap,Uf),Mm=P.createContext(void 0),Ww=e=>{const t=P.useContext(Mm);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},xb=({client:e,children:t})=>(P.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),K.jsx(Mm.Provider,{value:e,children:t}));const kb=new zm({onError(e){console.log(e)}}),Sb=new Dm({onError(e){console.log(e)}}),Pb=new wb({queryCache:kb,mutationCache:Sb,defaultOptions:{queries:{refetchOnMount:!1,refetchOnWindowFocus:!1,retry:0,staleTime:0,gcTime:10*1e3}}});function Eb({children:e}){return P.useEffect(()=>{const t=document.querySelector(".tsqd-parent-container");t==null||t.style.setProperty("--tsqd-font-size","28px")},[]),K.jsxs(xb,{client:Pb,children:[e,!1]})}var Ob={attributes:!0,characterData:!0,subtree:!0,childList:!0};function _b(e,t,n=Ob){P.useEffect(()=>{if(e.current){const r=new MutationObserver(t);return r.observe(e.current,n),()=>{r.disconnect()}}},[t,n])}var Lm=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(o,i){return o[0]===n?(r=i,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),o=this.__entries__[r];return o&&o[1]},t.prototype.set=function(n,r){var o=e(this.__entries__,n);~o?this.__entries__[o][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,o=e(r,n);~o&&r.splice(o,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var o=0,i=this.__entries__;o<i.length;o++){var a=i[o];n.call(r,a[1],a[0])}},t}()}(),vu=typeof window<"u"&&typeof document<"u"&&window.document===document,tl=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Cb=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(tl):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Rb=2;function zb(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&l()}function a(){Cb(i)}function l(){var s=Date.now();if(n){if(s-o<Rb)return;r=!0}else n=!0,r=!1,setTimeout(a,t);o=s}return l}var Db=20,Tb=["top","right","bottom","left","width","height","size","weight"],Mb=typeof MutationObserver<"u",Lb=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=zb(this.refresh.bind(this),Db)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!vu||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Mb?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!vu||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,o=Tb.some(function(i){return!!~r.indexOf(i)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Nm=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},fo=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||tl},Am=Cl(0,0,0,0);function nl(e){return parseFloat(e)||0}function Sf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,o){var i=e["border-"+o+"-width"];return r+nl(i)},0)}function Nb(e){for(var t=["top","right","bottom","left"],n={},r=0,o=t;r<o.length;r++){var i=o[r],a=e["padding-"+i];n[i]=nl(a)}return n}function Ab(e){var t=e.getBBox();return Cl(0,0,t.width,t.height)}function Fb(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Am;var r=fo(e).getComputedStyle(e),o=Nb(r),i=o.left+o.right,a=o.top+o.bottom,l=nl(r.width),s=nl(r.height);if(r.boxSizing==="border-box"&&(Math.round(l+i)!==t&&(l-=Sf(r,"left","right")+i),Math.round(s+a)!==n&&(s-=Sf(r,"top","bottom")+a)),!Ib(e)){var u=Math.round(l+i)-t,c=Math.round(s+a)-n;Math.abs(u)!==1&&(l-=u),Math.abs(c)!==1&&(s-=c)}return Cl(o.left,o.top,l,s)}var jb=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof fo(e).SVGGraphicsElement}:function(e){return e instanceof fo(e).SVGElement&&typeof e.getBBox=="function"}}();function Ib(e){return e===fo(e).document.documentElement}function Ub(e){return vu?jb(e)?Ab(e):Fb(e):Am}function $b(e){var t=e.x,n=e.y,r=e.width,o=e.height,i=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(i.prototype);return Nm(a,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),a}function Cl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Hb=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Cl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Ub(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),qb=function(){function e(t,n){var r=$b(n);Nm(this,{target:t,contentRect:r})}return e}(),Bb=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Lm,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof fo(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Hb(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof fo(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new qb(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Fm=typeof WeakMap<"u"?new WeakMap:new Lm,jm=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Lb.getInstance(),r=new Bb(t,n,this);Fm.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){jm.prototype[e]=function(){var t;return(t=Fm.get(this))[e].apply(t,arguments)}});var Vb=function(){return typeof tl.ResizeObserver<"u"?tl.ResizeObserver:jm}(),Wb=({mutationObservables:e,resizeObservables:t,refresh:n})=>{const[r,o]=P.useState(0),i=P.useRef(document.documentElement||document.body);function a(s){const u=Array.from(s);for(const c of u)if(e){if(!c.attributes)continue;e.find(h=>c.matches(h))&&n(!0)}}function l(s){const u=Array.from(s);for(const c of u)if(t){if(!c.attributes)continue;t.find(h=>c.matches(h))&&o(r+1)}}return _b(i,s=>{for(const u of s)u.addedNodes.length!==0&&(a(u.addedNodes),l(u.addedNodes)),u.removedNodes.length!==0&&(a(u.removedNodes),l(u.removedNodes))},{childList:!0,subtree:!0}),P.useEffect(()=>{if(!t)return;const s=new Vb(()=>{n()});for(const u of t){const c=document.querySelector(u);c&&s.observe(c)}return()=>{s.disconnect()}},[t,r]),null},Qb=Wb;function Ea(e){let t=Im;return e&&(t=e.getBoundingClientRect()),t}function Kb(e,t){const[n,r]=P.useState(Im),o=P.useCallback(()=>{e!=null&&e.current&&r(Ea(e==null?void 0:e.current))},[e==null?void 0:e.current]);return P.useEffect(()=>(o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[e==null?void 0:e.current,t]),n}var Im={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0};function Xb(e,t){return new Promise(n=>{if(!(e instanceof Element))throw new TypeError("Argument 1 must be an Element");let r=0,o=null;const i=Object.assign({behavior:"smooth"},t);e.scrollIntoView(i),requestAnimationFrame(a);function a(){const l=e==null?void 0:e.getBoundingClientRect().top;if(l===o){if(r++>2)return n(null)}else r=0,o=l;requestAnimationFrame(a)}})}function da(e){return e<0?0:e}function Gb(e){return typeof e=="object"&&e!==null?{thresholdX:e.x||0,thresholdY:e.y||0}:{thresholdX:e||0,thresholdY:e||0}}function Rl(){const e=Math.max(document.documentElement.clientWidth,window.innerWidth||0),t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return{w:e,h:t}}function Yb({top:e,right:t,bottom:n,left:r,threshold:o}){const{w:i,h:a}=Rl(),{thresholdX:l,thresholdY:s}=Gb(o);return e<0&&n-e>a?!0:e>=0+s&&r>=0+l&&n<=a-s&&t<=i-l}var Pf=(e,t)=>e>t,Ef=(e,t)=>e>t;function Jb(e,t=[]){const n=(r,o)=>t.includes(r)?1:t.includes(o)?-1:0;return Object.keys(e).map(r=>({position:r,value:e[r]})).sort((r,o)=>o.value-r.value).sort((r,o)=>n(r.position,o.position)).filter(r=>r.value>0).map(r=>r.position)}var vs=10;function gu(e=vs){return Array.isArray(e)?e.length===1?[e[0],e[0],e[0],e[0]]:e.length===2?[e[1],e[0],e[1],e[0]]:e.length===3?[e[0],e[1],e[2],e[1]]:e.length>3?[e[0],e[1],e[2],e[3]]:[vs,vs]:[e,e,e,e]}var Zb={maskWrapper:()=>({opacity:.7,left:0,top:0,position:"fixed",zIndex:99999,pointerEvents:"none",color:"#000"}),svgWrapper:({windowWidth:e,windowHeight:t,wpt:n,wpl:r})=>({width:e,height:t,left:Number(r),top:Number(n),position:"fixed"}),maskArea:({x:e,y:t,width:n,height:r})=>({x:e,y:t,width:n,height:r,fill:"black",rx:0}),maskRect:({windowWidth:e,windowHeight:t,maskID:n})=>({x:0,y:0,width:e,height:t,fill:"currentColor",mask:`url(#${n})`}),clickArea:({windowWidth:e,windowHeight:t,clipID:n})=>({x:0,y:0,width:e,height:t,fill:"currentcolor",pointerEvents:"auto",clipPath:`url(#${n})`}),highlightedArea:({x:e,y:t,width:n,height:r})=>({x:e,y:t,width:n,height:r,pointerEvents:"auto",fill:"transparent",display:"none"})};function ew(e){return(t,n)=>{const r=Zb[t](n),o=e[t];return o?o(r,n):r}}var tw=({padding:e=10,wrapperPadding:t=0,onClick:n,onClickHighlighted:r,styles:o={},sizes:i,className:a,highlightedAreaClassName:l,maskId:s,clipId:u})=>{const c=s||Of("mask__"),d=u||Of("clip__"),h=ew(o),[y,g,m,S]=gu(e),[p,f,v,k]=gu(t),{w:O,h:R}=Rl(),z=da((i==null?void 0:i.width)+S+g),b=da((i==null?void 0:i.height)+y+m),T=da((i==null?void 0:i.top)-y-p),L=da((i==null?void 0:i.left)-S-k),q=O-k-f,W=R-p-v,ie=h("maskArea",{x:L,y:T,width:z,height:b}),oe=h("highlightedArea",{x:L,y:T,width:z,height:b});return A.createElement("div",{style:h("maskWrapper",{}),onClick:n,className:a},A.createElement("svg",{width:q,height:W,xmlns:"http://www.w3.org/2000/svg",style:h("svgWrapper",{windowWidth:q,windowHeight:W,wpt:p,wpl:k})},A.createElement("defs",null,A.createElement("mask",{id:c},A.createElement("rect",{x:0,y:0,width:q,height:W,fill:"white"}),A.createElement("rect",{style:ie,rx:ie.rx?1:void 0})),A.createElement("clipPath",{id:d},A.createElement("polygon",{points:`0 0, 0 ${W}, ${L} ${W}, ${L} ${T}, ${L+z} ${T}, ${L+z} ${T+b}, ${L} ${T+b}, ${L} ${W}, ${q} ${W}, ${q} 0`}))),A.createElement("rect",{style:h("maskRect",{windowWidth:q,windowHeight:W,maskID:c})}),A.createElement("rect",{style:h("clickArea",{windowWidth:q,windowHeight:W,top:T,left:L,width:z,height:b,clipID:d})}),A.createElement("rect",{style:oe,className:l,onClick:r,rx:oe.rx?1:void 0})))},nw=tw;function Of(e){return e+Math.random().toString(36).substring(2,16)}var rw=Object.defineProperty,rl=Object.getOwnPropertySymbols,Um=Object.prototype.hasOwnProperty,$m=Object.prototype.propertyIsEnumerable,_f=(e,t,n)=>t in e?rw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Cf=(e,t)=>{for(var n in t||(t={}))Um.call(t,n)&&_f(e,n,t[n]);if(rl)for(var n of rl(t))$m.call(t,n)&&_f(e,n,t[n]);return e},ow=(e,t)=>{var n={};for(var r in e)Um.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&rl)for(var r of rl(e))t.indexOf(r)<0&&$m.call(e,r)&&(n[r]=e[r]);return n},iw={popover:()=>({position:"fixed",maxWidth:353,backgroundColor:"#fff",padding:"24px 30px",boxShadow:"0 0.5em 3em rgba(0, 0, 0, 0.3)",color:"inherit",zIndex:1e5,transition:"transform 0.3s",top:0,left:0})};function aw(e){return(t,n)=>{const r=iw[t](n),o=e[t];return o?o(r,n):r}}var lw=e=>{var t=e,{children:n,position:r="bottom",padding:o=10,styles:i={},sizes:a,refresher:l}=t,s=ow(t,["children","position","padding","styles","sizes","refresher"]);const u=P.useRef(null),c=P.useRef(""),d=P.useRef(""),h=P.useRef(""),{w:y,h:g}=Rl(),m=aw(i),S=Kb(u,l),{width:p,height:f}=S,[v,k,O,R]=gu(o),z=(a==null?void 0:a.left)-R,b=(a==null?void 0:a.top)-v,T=(a==null?void 0:a.right)+k,L=(a==null?void 0:a.bottom)+O,q=r&&typeof r=="function"?r({width:p,height:f,windowWidth:y,windowHeight:g,top:b,left:z,right:T,bottom:L,x:a.x,y:a.y},S):r,W={left:z,right:y-T,top:b,bottom:g-L},ie=(he,N,F)=>{switch(he){case"top":return W.top>f+O;case"right":return N?!1:W.right>p+R;case"bottom":return F?!1:W.bottom>f+v;case"left":return W.left>p+k;default:return!1}},oe=(he,N,F)=>{const M=Jb(W,F?["right","left"]:N?["top","bottom"]:[]);for(let Y=0;Y<M.length;Y++)if(ie(M[Y],N,F))return c.current=M[Y],he[M[Y]];return c.current="center",he.center},Ue=(he=>{if(Array.isArray(he)){const Pe=Pf(he[0],y),Ae=Ef(he[1],g);return c.current="custom",[Pe?y/2-p/2:he[0],Ae?g/2-f/2:he[1]]}const N=Pf(z+p,y),F=Ef(L+f,g),M=N?Math.min(z,y-p):Math.max(z,0),Y=F?f>W.bottom?Math.max(L-f,0):Math.max(b,0):b;F&&f>W.bottom?d.current="bottom":d.current="top",N?h.current="left":h.current="right";const ae={top:[M-R,b-f-O],right:[T+R,Y-v],bottom:[M-R,L+v],left:[z-p-k,Y-v],center:[y/2-p/2,g/2-f/2]};return he==="center"||ie(he,N,F)&&!N&&!F?(c.current=he,ae[he]):oe(ae,N,F)})(q);return A.createElement("div",Cf({className:"reactour__popover",style:Cf({transform:`translate(${Math.round(Ue[0])}px, ${Math.round(Ue[1])}px)`},m("popover",{position:c.current,verticalAlign:d.current,horizontalAlign:h.current,helperRect:S,targetRect:a})),ref:u},s),n)},sw=lw,uw=Object.defineProperty,cw=Object.defineProperties,dw=Object.getOwnPropertyDescriptors,ol=Object.getOwnPropertySymbols,Hm=Object.prototype.hasOwnProperty,qm=Object.prototype.propertyIsEnumerable,Rf=(e,t,n)=>t in e?uw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ye=(e,t)=>{for(var n in t||(t={}))Hm.call(t,n)&&Rf(e,n,t[n]);if(ol)for(var n of ol(t))qm.call(t,n)&&Rf(e,n,t[n]);return e},wc=(e,t)=>cw(e,dw(t)),wi=(e,t)=>{var n={};for(var r in e)Hm.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ol)for(var r of ol(e))t.indexOf(r)<0&&qm.call(e,r)&&(n[r]=e[r]);return n},fw={bottom:0,height:0,left:0,right:0,top:0,width:0,windowWidth:0,windowHeight:0,x:0,y:0};function hw(e,t={block:"center",behavior:"smooth",inViewThreshold:0}){const[n,r]=P.useState(!1),[o,i]=P.useState(!1),[a,l]=P.useState(!1),[s,u]=P.useState(null),[c,d]=P.useState(fw),h=(e==null?void 0:e.selector)instanceof Element?e==null?void 0:e.selector:document.querySelector(e==null?void 0:e.selector),y=P.useCallback(()=>{const m=zf(h,e==null?void 0:e.highlightedSelectors,e==null?void 0:e.bypassElem),S=wi(m,["hasHighligtedElems"]);Object.entries(c).some(([p,f])=>S[p]!==f)&&d(S)},[h,e==null?void 0:e.highlightedSelectors,c]);P.useEffect(()=>(y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)),[h,e==null?void 0:e.highlightedSelectors,s]),P.useEffect(()=>{!Yb(wc(Ye({},c),{threshold:t.inViewThreshold}))&&h&&(r(!0),Xb(h,t).then(()=>{o||u(Date.now())}).finally(()=>{r(!1)}))},[c]);const g=P.useCallback(()=>{i(!0);const m=zf(h,e==null?void 0:e.highlightedSelectors,e==null?void 0:e.bypassElem),{hasHighligtedElems:S}=m,p=wi(m,["hasHighligtedElems"]);l(S),d(p),i(!1)},[h,e==null?void 0:e.highlightedSelectors,c]);return{sizes:c,transition:n,target:h,observableRefresher:g,isHighlightingObserved:a}}function zf(e,t=[],n=!0){let r=!1;const{w:o,h:i}=Rl();if(!t)return wc(Ye({},Ea(e)),{windowWidth:o,windowHeight:i,hasHighligtedElems:!1});let a=Ea(e),l={bottom:0,height:0,left:o,right:0,top:i,width:0};for(const u of t){const c=document.querySelector(u);if(!c||c.style.display==="none"||c.style.visibility==="hidden")continue;const d=Ea(c);r=!0,n||!e?(d.top<l.top&&(l.top=d.top),d.right>l.right&&(l.right=d.right),d.bottom>l.bottom&&(l.bottom=d.bottom),d.left<l.left&&(l.left=d.left),l.width=l.right-l.left,l.height=l.bottom-l.top):(d.top<a.top&&(a.top=d.top),d.right>a.right&&(a.right=d.right),d.bottom>a.bottom&&(a.bottom=d.bottom),d.left<a.left&&(a.left=d.left),a.width=a.right-a.left,a.height=a.bottom-a.top)}const s=n||!e?l.width>0&&l.height>0:!1;return{left:(s?l:a).left,top:(s?l:a).top,right:(s?l:a).right,bottom:(s?l:a).bottom,width:(s?l:a).width,height:(s?l:a).height,windowWidth:o,windowHeight:i,hasHighligtedElems:r,x:a.x,y:a.y}}var pw=({disableKeyboardNavigation:e,setCurrentStep:t,currentStep:n,setIsOpen:r,stepsLength:o,disable:i,rtl:a,clickProps:l,keyboardHandler:s})=>{function u(c){if(c.stopPropagation(),e===!0||i)return;let d,h,y;e&&(d=e.includes("esc"),h=e.includes("right"),y=e.includes("left"));function g(){t(Math.min(n+1,o-1))}function m(){t(Math.max(n-1,0))}s&&typeof s=="function"?s(c,l,{isEscDisabled:d,isRightDisabled:h,isLeftDisabled:y}):(c.keyCode===27&&!d&&(c.preventDefault(),r(!1)),c.keyCode===39&&!h&&(c.preventDefault(),a?m():g()),c.keyCode===37&&!y&&(c.preventDefault(),a?g():m()))}return P.useEffect(()=>(window.addEventListener("keydown",u,!1),()=>{window.removeEventListener("keydown",u)}),[i,t,n]),null},mw=pw,vw={badge:()=>({position:"absolute",fontFamily:"monospace",background:"var(--reactour-accent,#007aff)",height:"1.875em",lineHeight:2,paddingLeft:"0.8125em",paddingRight:"0.8125em",fontSize:"1em",borderRadius:"1.625em",color:"white",textAlign:"center",boxShadow:"0 0.25em 0.5em rgba(0, 0, 0, 0.3)",top:"-0.8125em",left:"-0.8125em"}),controls:()=>({display:"flex",marginTop:24,alignItems:"center",justifyContent:"space-between"}),navigation:()=>({counterReset:"dot",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}),button:({disabled:e})=>({display:"block",padding:0,border:0,background:"none",cursor:e?"not-allowed":"pointer"}),arrow:({disabled:e})=>({color:e?"#caccce":"#646464",width:16,height:12,flex:"0 0 16px"}),dot:({current:e,disabled:t,showNumber:n})=>({counterIncrement:"dot",width:8,height:8,border:e?"0":"1px solid #caccce",borderRadius:"100%",padding:0,display:"block",margin:4,transition:"opacity 0.3s, transform 0.3s",cursor:t?"not-allowed":"pointer",transform:`scale(${e?1.25:1})`,color:e?"var(--reactour-accent, #007aff)":"#caccce",background:e?"var(--reactour-accent, #007aff)":"none"}),close:({disabled:e})=>({position:"absolute",top:22,right:22,width:9,height:9,"--rt-close-btn":e?"#caccce":"#5e5e5e","--rt-close-btn-disabled":e?"#caccce":"#000"}),svg:()=>({display:"block"})};function zl(e){return(t,n)=>{const r=vw[t](n),o=e[t];return o?o(r,n):r}}var gw=({styles:e={},children:t})=>{const n=zl(e);return A.createElement("span",{style:n("badge",{})},t)},yw=gw,bw=e=>{var t=e,{styles:n={},onClick:r,disabled:o}=t,i=wi(t,["styles","onClick","disabled"]);const a=zl(n);return A.createElement("button",Ye({className:"reactour__close-button",style:Ye(Ye({},a("button",{})),a("close",{disabled:o})),onClick:r},i),A.createElement("svg",{viewBox:"0 0 9.1 9.1","aria-hidden":!0,role:"presentation",style:Ye({},a("svg",{}))},A.createElement("path",{fill:"currentColor",d:"M5.9 4.5l2.8-2.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4.5 3.1 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2.8 2.8L.3 7.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L4.5 6l2.8 2.8c.3.2.5.3.8.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.9 4.5z"})))},ww=bw,xw=({content:e,setCurrentStep:t,transition:n,isHighlightingObserved:r,currentStep:o,setIsOpen:i})=>typeof e=="function"?e({setCurrentStep:t,transition:n,isHighlightingObserved:r,currentStep:o,setIsOpen:i}):e,kw=xw,Sw=({styles:e={},steps:t,setCurrentStep:n,currentStep:r,setIsOpen:o,nextButton:i,prevButton:a,disableDots:l,hideDots:s,hideButtons:u,disableAll:c,rtl:d,Arrow:h=Bm})=>{const y=t.length,g=zl(e),m=({onClick:S,kind:p="next",children:f,hideArrow:v})=>{function k(){c||(S&&typeof S=="function"?S():n(p==="next"?Math.min(r+1,y-1):Math.max(r-1,0)))}return A.createElement("button",{style:g("button",{kind:p,disabled:c||(p==="next"?y-1===r:r===0)}),onClick:k,"aria-label":`Go to ${p} step`},v?null:A.createElement(h,{styles:e,inverted:d?p==="prev":p==="next",disabled:c||(p==="next"?y-1===r:r===0)}),f)};return A.createElement("div",{style:g("controls",{}),dir:d?"rtl":"ltr"},u?null:a&&typeof a=="function"?a({Button:m,setCurrentStep:n,currentStep:r,stepsLength:y,setIsOpen:o,steps:t}):A.createElement(m,{kind:"prev"}),s?null:A.createElement("div",{style:g("navigation",{})},Array.from({length:y},(S,p)=>p).map(S=>{var p;return A.createElement("button",{style:g("dot",{current:S===r,disabled:l||c}),onClick:()=>{!l&&!c&&n(S)},key:`navigation_dot_${S}`,"aria-label":((p=t[S])==null?void 0:p.navDotAriaLabel)||`Go to step ${S+1}`})})),u?null:i&&typeof i=="function"?i({Button:m,setCurrentStep:n,currentStep:r,stepsLength:y,setIsOpen:o,steps:t}):A.createElement(m,null))},Pw=Sw,Bm=({styles:e={},inverted:t=!1,disabled:n})=>{const r=zl(e);return A.createElement("svg",{viewBox:"0 0 18.4 14.4",style:r("arrow",{inverted:t,disabled:n})},A.createElement("path",{d:t?"M17 7.2H1M10.8 1L17 7.2l-6.2 6.2":"M1.4 7.2h16M7.6 1L1.4 7.2l6.2 6.2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeMiterlimit:"10"}))},Ew={Badge:yw,Close:ww,Content:kw,Navigation:Pw,Arrow:Bm},Ow=e=>Ye(Ye({},Ew),e),_w=({styles:e,components:t={},badgeContent:n,accessibilityOptions:r,disabledActions:o,onClickClose:i,steps:a,setCurrentStep:l,currentStep:s,transition:u,isHighlightingObserved:c,setIsOpen:d,nextButton:h,prevButton:y,disableDotsNavigation:g,rtl:m,showPrevNextButtons:S=!0,showCloseButton:p=!0,showNavigation:f=!0,showBadge:v=!0,showDots:k=!0,meta:O,setMeta:R,setSteps:z})=>{const b=a[s],{Badge:T,Close:L,Content:q,Navigation:W,Arrow:ie}=Ow(t),oe=n&&typeof n=="function"?n({currentStep:s,totalSteps:a.length,transition:u}):s+1;function Ve(){o||(i&&typeof i=="function"?i({setCurrentStep:l,setIsOpen:d,currentStep:s,steps:a,meta:O,setMeta:R,setSteps:z}):d(!1))}return A.createElement(A.Fragment,null,v?A.createElement(T,{styles:e},oe):null,p?A.createElement(L,{styles:e,"aria-label":r==null?void 0:r.closeButtonAriaLabel,disabled:o,onClick:Ve}):null,A.createElement(q,{content:b==null?void 0:b.content,setCurrentStep:l,currentStep:s,transition:u,isHighlightingObserved:c,setIsOpen:d}),f?A.createElement(W,{setCurrentStep:l,currentStep:s,setIsOpen:d,steps:a,styles:e,"aria-hidden":!(r!=null&&r.showNavigationScreenReaders),nextButton:h,prevButton:y,disableDots:g,hideButtons:!S,hideDots:!k,disableAll:o,rtl:m,Arrow:ie}):null)},Cw=_w,Rw=e=>{var t=e,{currentStep:n,setCurrentStep:r,setIsOpen:o,steps:i=[],setSteps:a,styles:l={},scrollSmooth:s,afterOpen:u,beforeClose:c,padding:d=10,position:h,onClickMask:y,onClickHighlighted:g,keyboardHandler:m,className:S="reactour__popover",maskClassName:p="reactour__mask",highlightedMaskClassName:f,clipId:v,maskId:k,disableInteraction:O,disableKeyboardNavigation:R,inViewThreshold:z,disabledActions:b,setDisabledActions:T,disableWhenSelectorFalsy:L,rtl:q,accessibilityOptions:W={closeButtonAriaLabel:"Close Tour",showNavigationScreenReaders:!0},ContentComponent:ie,Wrapper:oe,meta:Ve,setMeta:Ue,onTransition:he=()=>"center"}=t,N=wi(t,["currentStep","setCurrentStep","setIsOpen","steps","setSteps","styles","scrollSmooth","afterOpen","beforeClose","padding","position","onClickMask","onClickHighlighted","keyboardHandler","className","maskClassName","highlightedMaskClassName","clipId","maskId","disableInteraction","disableKeyboardNavigation","inViewThreshold","disabledActions","setDisabledActions","disableWhenSelectorFalsy","rtl","accessibilityOptions","ContentComponent","Wrapper","meta","setMeta","onTransition"]),F;const M=i[n],Y=Ye(Ye({},l),M==null?void 0:M.styles),{sizes:ae,transition:Pe,observableRefresher:Ae,isHighlightingObserved:kt,target:ge}=hw(M,{block:"center",behavior:s?"smooth":"auto",inViewThreshold:z});P.useEffect(()=>(u&&typeof u=="function"&&u(ge),()=>{c&&typeof c=="function"&&c(ge)}),[]);const{maskPadding:at,popoverPadding:Zt,wrapperPadding:Dl}=Dw((F=M==null?void 0:M.padding)!=null?F:d),en={setCurrentStep:r,setIsOpen:o,currentStep:n,setSteps:a,steps:i,setMeta:Ue,meta:Ve};function Tl(){b||(y&&typeof y=="function"?y(en):o(!1))}const Ml=typeof(M==null?void 0:M.stepInteraction)=="boolean"?!(M!=null&&M.stepInteraction):O?typeof O=="boolean"?O:O(en):!1;P.useEffect(()=>(M!=null&&M.action&&typeof(M==null?void 0:M.action)=="function"&&(M==null||M.action(ge)),(M==null?void 0:M.disableActions)!==void 0&&T(M==null?void 0:M.disableActions),()=>{M!=null&&M.actionAfter&&typeof(M==null?void 0:M.actionAfter)=="function"&&(M==null||M.actionAfter(ge))}),[M]);const Ll=Pe?he:M!=null&&M.position?M==null?void 0:M.position:h,$e=oe||A.Fragment;return M?A.createElement($e,null,A.createElement(Qb,{mutationObservables:M==null?void 0:M.mutationObservables,resizeObservables:M==null?void 0:M.resizeObservables,refresh:Ae}),A.createElement(mw,{setCurrentStep:r,currentStep:n,setIsOpen:o,stepsLength:i.length,disableKeyboardNavigation:R,disable:b,rtl:q,clickProps:en,keyboardHandler:m}),(!L||ge)&&A.createElement(nw,{sizes:Pe?Tw:ae,onClick:Tl,styles:Ye({highlightedArea:St=>wc(Ye({},St),{display:Ml?"block":"none"})},Y),padding:Pe?0:at,highlightedAreaClassName:f,className:p,onClickHighlighted:St=>{St.preventDefault(),St.stopPropagation(),g&&g(St,en)},wrapperPadding:Dl,clipId:v,maskId:k}),(!L||ge)&&A.createElement(sw,{sizes:ae,styles:Y,position:Ll,padding:Zt,"aria-labelledby":W==null?void 0:W.ariaLabelledBy,className:S,refresher:n},ie?A.createElement(ie,Ye({styles:Y,setCurrentStep:r,currentStep:n,setIsOpen:o,steps:i,accessibilityOptions:W,disabledActions:b,transition:Pe,isHighlightingObserved:kt,rtl:q},N)):A.createElement(Cw,Ye({styles:Y,setCurrentStep:r,currentStep:n,setIsOpen:o,steps:i,setSteps:a,accessibilityOptions:W,disabledActions:b,transition:Pe,isHighlightingObserved:kt,rtl:q,meta:Ve,setMeta:Ue},N)))):null},zw=Rw;function Dw(e){return typeof e=="object"&&e!==null?{maskPadding:e.mask,popoverPadding:e.popover,wrapperPadding:e.wrapper}:{maskPadding:e,popoverPadding:e,wrapperPadding:0}}var Tw={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0},Mw={isOpen:!1,setIsOpen:()=>!1,currentStep:0,setCurrentStep:()=>0,steps:[],setSteps:()=>[],setMeta:()=>"",disabledActions:!1,setDisabledActions:()=>!1,components:{}},Vm=A.createContext(Mw),Lw=e=>{var t=e,{children:n,defaultOpen:r=!1,startAt:o=0,steps:i,setCurrentStep:a,currentStep:l}=t,s=wi(t,["children","defaultOpen","startAt","steps","setCurrentStep","currentStep"]);const[u,c]=P.useState(r),[d,h]=P.useState(o),[y,g]=P.useState(i),[m,S]=P.useState(""),[p,f]=P.useState(!1),v=Ye({isOpen:u,setIsOpen:c,currentStep:l||d,setCurrentStep:a&&typeof a=="function"?a:h,steps:y,setSteps:g,disabledActions:p,setDisabledActions:f,meta:m,setMeta:S},s);return A.createElement(Vm.Provider,{value:v},n,u?A.createElement(zw,Ye({},v)):null)};function Qw(){return P.useContext(Vm)}const Df=[{selector:".picker-country",content:"点击此处选择国家"},{selector:".phonenumber-input ",content:"此处输入号码"},{selector:".picker-operator",content:"点击此处选择运营商"},{selector:".goods-container",content:"选择任意产品充值"}],Nw={popover(e){return{...e,padding:`${30/75}rem ${45/75}rem`,borderRadius:"0.1rem"}},close(e){return{...e,top:`${18/75}rem`,right:`${18/75}rem`,background:"none"}},badge(e){return{...e,display:"none"}},dot(e){return{...e,background:e.background==="none"?"none":"#41d9ce"}},arrow(e){return{...e,fontSize:"100px"}},navigation(e){return{...e,margin:"0 10px"}}};function Tf({className:e,type:t="primary",size:n="default",ghost:r=!1,rounded:o=!0,children:i,disabled:a=!1,loading:l,onClick:s}){return K.jsxs("button",{type:"button",onClick:l?void 0:s,disabled:a,className:hc("leading-none flex items-center justify-center box-border",e,a||l?"opacity-60":"",o?"rounded-full":"rounded",n==="large"?"px-8 py-2 h-12 text-lg":n==="default"?"h-[82px] text-md":"px-3 py-1 h-8 text-sm",r?["border ",`text-${t}  border-${t}`,!a&&`hover:bg-${t} hover:bg-opacity-5`]:[`bg-${t}`,!a&&"hover:bg-opacity-70","text-white"]),children:[l?K.jsx(im,{size:"small",color:"#fff",style:{fontSize:"0.2em",lineHeight:"1",marginRight:"2em"}}):null,i]})}function Aw({children:e}){const t=P.useCallback(r=>{const{setCurrentStep:o,currentStep:i}=r;return K.jsx(Tf,{className:"py-[10px] px-[20px] h-auto text-[20px] rounded-[10px] w-[5em] ",disabled:i-1<0,onClick:()=>o(i-1),children:"上一步"})},[]),n=P.useCallback(r=>{const{setCurrentStep:o,currentStep:i}=r;return K.jsx(Tf,{className:"py-[10px] px-[20px] h-auto text-[20px] rounded-[10px] w-[5em] ",onClick:()=>o(i+1),children:i+1>=Df.length?"完成":"下一步"})},[]);return K.jsx(Lw,{steps:Df,styles:Nw,prevButton:t,nextButton:n,children:e})}function Fw(){return K.jsx(Aw,{children:K.jsx(Eb,{children:K.jsx(ry,{children:K.jsx(nb,{})})})})}gs.createRoot(document.getElementById("root")).render(K.jsx(A.StrictMode,{children:K.jsx(Fw,{})}));export{bb as A,Tf as B,Ww as C,Iw as D,fc as E,$w as L,x1 as O,A as R,Ol as S,yc as a,Uw as b,hc as c,im as d,Qw as e,Hw as f,Hf as g,ab as h,gf as i,K as j,_l as k,ob as l,Em as m,Lt as n,vb as o,sb as p,Pb as q,P as r,qw as s,ib as t,ko as u,nt as v,kf as w,Bw as x,Vw as y,yi as z};
