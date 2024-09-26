const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CMPv4-X_.js","assets/tabbar-service-CWfIt1kq.js","assets/index-Bn923e1s.js","assets/useBaseQuery-BiqM6kST.js","assets/btn-C4DmeqXX.js","assets/skeleton-ljux3ciK.js","assets/skeleton-CqACEEbq.css","assets/sleep-BiBF8z-F.js","assets/detail-BjOMAZ1k.js","assets/service-BJmkFpat.js","assets/wifi-BwrWm6Dy.js","assets/result-DoTyUsFe.js","assets/home-BfPHRRKm.js","assets/customer-service-B5toXdIP.js","assets/service-3uXpx1RD.js"])))=>i.map(i=>d[i]);
var Lc=e=>{throw TypeError(e)};var Il=(e,t,n)=>t.has(e)||Lc("Cannot "+n);var _=(e,t,n)=>(Il(e,t,"read from private field"),n?n.call(e):t.get(e)),se=(e,t,n)=>t.has(e)?Lc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Z=(e,t,n,r)=>(Il(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),We=(e,t,n)=>(Il(e,t,"access private method"),n);var Fi=(e,t,n,r)=>({set _(o){Z(e,t,o,n)},get _(){return _(e,t,r)}});function If(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Uf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function jw(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var $f={exports:{}},al={},Hf={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Si=Symbol.for("react.element"),o0=Symbol.for("react.portal"),i0=Symbol.for("react.fragment"),a0=Symbol.for("react.strict_mode"),l0=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),c0=Symbol.for("react.forward_ref"),d0=Symbol.for("react.suspense"),f0=Symbol.for("react.memo"),h0=Symbol.for("react.lazy"),Nc=Symbol.iterator;function p0(e){return e===null||typeof e!="object"?null:(e=Nc&&e[Nc]||e["@@iterator"],typeof e=="function"?e:null)}var qf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bf=Object.assign,Vf={};function go(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||qf}go.prototype.isReactComponent={};go.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};go.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wf(){}Wf.prototype=go.prototype;function bu(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||qf}var wu=bu.prototype=new Wf;wu.constructor=bu;Bf(wu,go.prototype);wu.isPureReactComponent=!0;var Ac=Array.isArray,Qf=Object.prototype.hasOwnProperty,xu={current:null},Kf={key:!0,ref:!0,__self:!0,__source:!0};function Xf(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Qf.call(t,r)&&!Kf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Si,type:e,key:i,ref:a,props:o,_owner:xu.current}}function m0(e,t){return{$$typeof:Si,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ku(e){return typeof e=="object"&&e!==null&&e.$$typeof===Si}function v0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fc=/\/+/g;function Ul(e,t){return typeof e=="object"&&e!==null&&e.key!=null?v0(""+e.key):t.toString(36)}function ha(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Si:case o0:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Ul(a,0):r,Ac(o)?(n="",e!=null&&(n=e.replace(Fc,"$&/")+"/"),ha(o,t,n,"",function(u){return u})):o!=null&&(ku(o)&&(o=m0(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Fc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Ac(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Ul(i,l);a+=ha(i,t,n,s,o)}else if(s=p0(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Ul(i,l++),a+=ha(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ji(e,t,n){if(e==null)return e;var r=[],o=0;return ha(e,r,"","",function(i){return t.call(n,i,o++)}),r}function g0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ot={current:null},pa={transition:null},y0={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:pa,ReactCurrentOwner:xu};function Gf(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:ji,forEach:function(e,t,n){ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ji(e,function(){t++}),t},toArray:function(e){return ji(e,function(t){return t})||[]},only:function(e){if(!ku(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=go;te.Fragment=i0;te.Profiler=l0;te.PureComponent=bu;te.StrictMode=a0;te.Suspense=d0;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y0;te.act=Gf;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bf({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=xu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Qf.call(t,s)&&!Kf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Si,type:e.type,key:o,ref:i,props:r,_owner:a}};te.createContext=function(e){return e={$$typeof:u0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:s0,_context:e},e.Consumer=e};te.createElement=Xf;te.createFactory=function(e){var t=Xf.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:c0,render:e}};te.isValidElement=ku;te.lazy=function(e){return{$$typeof:h0,_payload:{_status:-1,_result:e},_init:g0}};te.memo=function(e,t){return{$$typeof:f0,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=pa.transition;pa.transition={};try{e()}finally{pa.transition=t}};te.unstable_act=Gf;te.useCallback=function(e,t){return ot.current.useCallback(e,t)};te.useContext=function(e){return ot.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return ot.current.useDeferredValue(e)};te.useEffect=function(e,t){return ot.current.useEffect(e,t)};te.useId=function(){return ot.current.useId()};te.useImperativeHandle=function(e,t,n){return ot.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return ot.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return ot.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return ot.current.useMemo(e,t)};te.useReducer=function(e,t,n){return ot.current.useReducer(e,t,n)};te.useRef=function(e){return ot.current.useRef(e)};te.useState=function(e){return ot.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return ot.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return ot.current.useTransition()};te.version="18.3.1";Hf.exports=te;var P=Hf.exports;const M=Uf(P),b0=If({__proto__:null,default:M},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0=P,x0=Symbol.for("react.element"),k0=Symbol.for("react.fragment"),S0=Object.prototype.hasOwnProperty,P0=w0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E0={key:!0,ref:!0,__self:!0,__source:!0};function Yf(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)S0.call(t,r)&&!E0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:x0,type:e,key:i,ref:a,props:o,_owner:P0.current}}al.Fragment=k0;al.jsx=Yf;al.jsxs=Yf;$f.exports=al;var G=$f.exports;(function(t,n){const r=n.documentElement,o=t.devicePixelRatio||1;function i(){n.body?n.body.style.fontSize=`${12*o}px`:n.addEventListener("DOMContentLoaded",i)}i();function a(){const l=r.clientWidth/10;r.style.fontSize=`${l}px`}if(a(),t.addEventListener("resize",a),t.addEventListener("pageshow",l=>{l.persisted&&a()}),o>=2){const l=n.createElement("body"),s=n.createElement("div");s.style.border=".5px solid transparent",l.appendChild(s),r.appendChild(l),s.offsetHeight===1&&r.classList.add("hairlines"),r.removeChild(l)}})(window,document);var ys={},Jf={exports:{}},wt={},Zf={exports:{}},eh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,F){var L=A.length;A.push(F);e:for(;0<L;){var Y=L-1>>>1,ae=A[Y];if(0<o(ae,F))A[Y]=F,A[L]=ae,L=Y;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var F=A[0],L=A.pop();if(L!==F){A[0]=L;e:for(var Y=0,ae=A.length,Pe=ae>>>1;Y<Pe;){var Ae=2*(Y+1)-1,kt=A[Ae],ge=Ae+1,at=A[ge];if(0>o(kt,L))ge<ae&&0>o(at,kt)?(A[Y]=at,A[ge]=L,Y=ge):(A[Y]=kt,A[Ae]=L,Y=Ae);else if(ge<ae&&0>o(at,L))A[Y]=at,A[ge]=L,Y=ge;else break e}}return F}function o(A,F){var L=A.sortIndex-F.sortIndex;return L!==0?L:A.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,f=3,y=!1,g=!1,m=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=A)r(u),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(u)}}function k(A){if(m=!1,v(A),!g)if(n(s)!==null)g=!0,Ue(O);else{var F=n(u);F!==null&&he(k,F.startTime-A)}}function O(A,F){g=!1,m&&(m=!1,p(b),b=-1),y=!0;var L=f;try{for(v(F),d=n(s);d!==null&&(!(d.expirationTime>F)||A&&!q());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,f=d.priorityLevel;var ae=Y(d.expirationTime<=F);F=e.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(s)&&r(s),v(F)}else r(s);d=n(s)}if(d!==null)var Pe=!0;else{var Ae=n(u);Ae!==null&&he(k,Ae.startTime-F),Pe=!1}return Pe}finally{d=null,f=L,y=!1}}var R=!1,z=null,b=-1,D=5,N=-1;function q(){return!(e.unstable_now()-N<D)}function W(){if(z!==null){var A=e.unstable_now();N=A;var F=!0;try{F=z(!0,A)}finally{F?ie():(R=!1,z=null)}}else R=!1}var ie;if(typeof h=="function")ie=function(){h(W)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,Ve=oe.port2;oe.port1.onmessage=W,ie=function(){Ve.postMessage(null)}}else ie=function(){S(W,0)};function Ue(A){z=A,R||(R=!0,ie())}function he(A,F){b=S(function(){A(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,Ue(O))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(A){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var L=f;f=F;try{return A()}finally{f=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,F){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var L=f;f=A;try{return F()}finally{f=L}},e.unstable_scheduleCallback=function(A,F,L){var Y=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Y+L:Y):L=Y,A){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=L+ae,A={id:c++,callback:F,priorityLevel:A,startTime:L,expirationTime:ae,sortIndex:-1},L>Y?(A.sortIndex=L,t(u,A),n(s)===null&&A===n(u)&&(m?(p(b),b=-1):m=!0,he(k,L-Y))):(A.sortIndex=ae,t(s,A),g||y||(g=!0,Ue(O))),A},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(A){var F=f;return function(){var L=f;f=F;try{return A.apply(this,arguments)}finally{f=L}}}})(eh);Zf.exports=eh;var O0=Zf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0=P,bt=O0;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var th=new Set,Jo={};function xr(e,t){lo(e,t),lo(e+"Capture",t)}function lo(e,t){for(Jo[e]=t,e=0;e<t.length;e++)th.add(t[e])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bs=Object.prototype.hasOwnProperty,C0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jc={},Ic={};function R0(e){return bs.call(Ic,e)?!0:bs.call(jc,e)?!1:C0.test(e)?Ic[e]=!0:(jc[e]=!0,!1)}function z0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T0(e,t,n,r){if(t===null||typeof t>"u"||z0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var Su=/[\-:]([a-z])/g;function Pu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Su,Pu);Be[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Su,Pu);Be[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Su,Pu);Be[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function Eu(e,t,n,r){var o=Be.hasOwnProperty(t)?Be[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T0(t,n,o,r)&&(n=null),r||o===null?R0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yn=_0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ii=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),Lr=Symbol.for("react.fragment"),Ou=Symbol.for("react.strict_mode"),ws=Symbol.for("react.profiler"),nh=Symbol.for("react.provider"),rh=Symbol.for("react.context"),_u=Symbol.for("react.forward_ref"),xs=Symbol.for("react.suspense"),ks=Symbol.for("react.suspense_list"),Cu=Symbol.for("react.memo"),_n=Symbol.for("react.lazy"),oh=Symbol.for("react.offscreen"),Uc=Symbol.iterator;function Eo(e){return e===null||typeof e!="object"?null:(e=Uc&&e[Uc]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,$l;function Fo(e){if($l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$l=t&&t[1]||""}return`
`+$l+e}var Hl=!1;function ql(e,t){if(!e||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fo(e):""}function D0(e){switch(e.tag){case 5:return Fo(e.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return e=ql(e.type,!1),e;case 11:return e=ql(e.type.render,!1),e;case 1:return e=ql(e.type,!0),e;default:return""}}function Ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lr:return"Fragment";case Mr:return"Portal";case ws:return"Profiler";case Ou:return"StrictMode";case xs:return"Suspense";case ks:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rh:return(e.displayName||"Context")+".Consumer";case nh:return(e._context.displayName||"Context")+".Provider";case _u:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cu:return t=e.displayName||null,t!==null?t:Ss(e.type)||"Memo";case _n:t=e._payload,e=e._init;try{return Ss(e(t))}catch{}}return null}function M0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ss(t);case 8:return t===Ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ih(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function L0(e){var t=ih(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ui(e){e._valueTracker||(e._valueTracker=L0(e))}function ah(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ih(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _a(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ps(e,t){var n=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $c(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Qn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lh(e,t){t=t.checked,t!=null&&Eu(e,"checked",t,!1)}function Es(e,t){lh(e,t);var n=Qn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Os(e,t.type,n):t.hasOwnProperty("defaultValue")&&Os(e,t.type,Qn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Os(e,t,n){(t!=="number"||_a(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jo=Array.isArray;function Wr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Qn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function _s(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(jo(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qn(n)}}function sh(e,t){var n=Qn(t.value),r=Qn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $i,ch=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($i=$i||document.createElement("div"),$i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N0=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(e){N0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qo[t]=qo[e]})});function dh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qo.hasOwnProperty(e)&&qo[e]?(""+t).trim():t+"px"}function fh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=dh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var A0=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rs(e,t){if(t){if(A0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function zs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ts=null;function Ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,Qr=null,Kr=null;function Vc(e){if(e=Oi(e)){if(typeof Ds!="function")throw Error(T(280));var t=e.stateNode;t&&(t=dl(t),Ds(e.stateNode,e.type,t))}}function hh(e){Qr?Kr?Kr.push(e):Kr=[e]:Qr=e}function ph(){if(Qr){var e=Qr,t=Kr;if(Kr=Qr=null,Vc(e),t)for(e=0;e<t.length;e++)Vc(t[e])}}function mh(e,t){return e(t)}function vh(){}var Bl=!1;function gh(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return mh(e,t,n)}finally{Bl=!1,(Qr!==null||Kr!==null)&&(vh(),ph())}}function ei(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Ms=!1;if(pn)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Ms=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Ms=!1}function F0(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Bo=!1,Ca=null,Ra=!1,Ls=null,j0={onError:function(e){Bo=!0,Ca=e}};function I0(e,t,n,r,o,i,a,l,s){Bo=!1,Ca=null,F0.apply(j0,arguments)}function U0(e,t,n,r,o,i,a,l,s){if(I0.apply(this,arguments),Bo){if(Bo){var u=Ca;Bo=!1,Ca=null}else throw Error(T(198));Ra||(Ra=!0,Ls=u)}}function kr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wc(e){if(kr(e)!==e)throw Error(T(188))}function $0(e){var t=e.alternate;if(!t){if(t=kr(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Wc(o),e;if(i===r)return Wc(o),t;i=i.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function bh(e){return e=$0(e),e!==null?wh(e):null}function wh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wh(e);if(t!==null)return t;e=e.sibling}return null}var xh=bt.unstable_scheduleCallback,Qc=bt.unstable_cancelCallback,H0=bt.unstable_shouldYield,q0=bt.unstable_requestPaint,Re=bt.unstable_now,B0=bt.unstable_getCurrentPriorityLevel,zu=bt.unstable_ImmediatePriority,kh=bt.unstable_UserBlockingPriority,za=bt.unstable_NormalPriority,V0=bt.unstable_LowPriority,Sh=bt.unstable_IdlePriority,ll=null,Gt=null;function W0(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(ll,e,void 0,(e.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:X0,Q0=Math.log,K0=Math.LN2;function X0(e){return e>>>=0,e===0?32:31-(Q0(e)/K0|0)|0}var Hi=64,qi=4194304;function Io(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ta(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Io(l):(i&=a,i!==0&&(r=Io(i)))}else a=n&~o,a!==0?r=Io(a):i!==0&&(r=Io(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$t(t),o=1<<n,r|=e[n],t&=~o;return r}function G0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-$t(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=G0(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function Ns(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ph(){var e=Hi;return Hi<<=1,!(Hi&4194240)&&(Hi=64),e}function Vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$t(t),e[t]=n}function J0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-$t(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Tu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$t(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ce=0;function Eh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Oh,Du,_h,Ch,Rh,As=!1,Bi=[],In=null,Un=null,$n=null,ti=new Map,ni=new Map,Rn=[],Z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kc(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ni.delete(t.pointerId)}}function _o(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Oi(t),t!==null&&Du(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ev(e,t,n,r,o){switch(t){case"focusin":return In=_o(In,e,t,n,r,o),!0;case"dragenter":return Un=_o(Un,e,t,n,r,o),!0;case"mouseover":return $n=_o($n,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ti.set(i,_o(ti.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ni.set(i,_o(ni.get(i)||null,e,t,n,r,o)),!0}return!1}function zh(e){var t=ir(e.target);if(t!==null){var n=kr(t);if(n!==null){if(t=n.tag,t===13){if(t=yh(n),t!==null){e.blockedOn=t,Rh(e.priority,function(){_h(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ma(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ts=r,n.target.dispatchEvent(r),Ts=null}else return t=Oi(n),t!==null&&Du(t),e.blockedOn=n,!1;t.shift()}return!0}function Xc(e,t,n){ma(e)&&n.delete(t)}function tv(){As=!1,In!==null&&ma(In)&&(In=null),Un!==null&&ma(Un)&&(Un=null),$n!==null&&ma($n)&&($n=null),ti.forEach(Xc),ni.forEach(Xc)}function Co(e,t){e.blockedOn===t&&(e.blockedOn=null,As||(As=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,tv)))}function ri(e){function t(o){return Co(o,e)}if(0<Bi.length){Co(Bi[0],e);for(var n=1;n<Bi.length;n++){var r=Bi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(In!==null&&Co(In,e),Un!==null&&Co(Un,e),$n!==null&&Co($n,e),ti.forEach(t),ni.forEach(t),n=0;n<Rn.length;n++)r=Rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rn.length&&(n=Rn[0],n.blockedOn===null);)zh(n),n.blockedOn===null&&Rn.shift()}var Xr=yn.ReactCurrentBatchConfig,Da=!0;function nv(e,t,n,r){var o=ce,i=Xr.transition;Xr.transition=null;try{ce=1,Mu(e,t,n,r)}finally{ce=o,Xr.transition=i}}function rv(e,t,n,r){var o=ce,i=Xr.transition;Xr.transition=null;try{ce=4,Mu(e,t,n,r)}finally{ce=o,Xr.transition=i}}function Mu(e,t,n,r){if(Da){var o=Fs(e,t,n,r);if(o===null)ts(e,t,r,Ma,n),Kc(e,r);else if(ev(o,e,t,n,r))r.stopPropagation();else if(Kc(e,r),t&4&&-1<Z0.indexOf(e)){for(;o!==null;){var i=Oi(o);if(i!==null&&Oh(i),i=Fs(e,t,n,r),i===null&&ts(e,t,r,Ma,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ts(e,t,r,null,n)}}var Ma=null;function Fs(e,t,n,r){if(Ma=null,e=Ru(r),e=ir(e),e!==null)if(t=kr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ma=e,null}function Th(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B0()){case zu:return 1;case kh:return 4;case za:case V0:return 16;case Sh:return 536870912;default:return 16}default:return 16}}var An=null,Lu=null,va=null;function Dh(){if(va)return va;var e,t=Lu,n=t.length,r,o="value"in An?An.value:An.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return va=o.slice(e,1<r?1-r:void 0)}function ga(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vi(){return!0}function Gc(){return!1}function xt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vi:Gc,this.isPropagationStopped=Gc,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),t}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nu=xt(yo),Ei=Se({},yo,{view:0,detail:0}),ov=xt(Ei),Wl,Ql,Ro,sl=Se({},Ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ro&&(Ro&&e.type==="mousemove"?(Wl=e.screenX-Ro.screenX,Ql=e.screenY-Ro.screenY):Ql=Wl=0,Ro=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:Ql}}),Yc=xt(sl),iv=Se({},sl,{dataTransfer:0}),av=xt(iv),lv=Se({},Ei,{relatedTarget:0}),Kl=xt(lv),sv=Se({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),uv=xt(sv),cv=Se({},yo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dv=xt(cv),fv=Se({},yo,{data:0}),Jc=xt(fv),hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mv[e])?!!t[e]:!1}function Au(){return vv}var gv=Se({},Ei,{key:function(e){if(e.key){var t=hv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yv=xt(gv),bv=Se({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zc=xt(bv),wv=Se({},Ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),xv=xt(wv),kv=Se({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sv=xt(kv),Pv=Se({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ev=xt(Pv),Ov=[9,13,27,32],Fu=pn&&"CompositionEvent"in window,Vo=null;pn&&"documentMode"in document&&(Vo=document.documentMode);var _v=pn&&"TextEvent"in window&&!Vo,Mh=pn&&(!Fu||Vo&&8<Vo&&11>=Vo),ed=" ",td=!1;function Lh(e,t){switch(e){case"keyup":return Ov.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function Cv(e,t){switch(e){case"compositionend":return Nh(t);case"keypress":return t.which!==32?null:(td=!0,ed);case"textInput":return e=t.data,e===ed&&td?null:e;default:return null}}function Rv(e,t){if(Nr)return e==="compositionend"||!Fu&&Lh(e,t)?(e=Dh(),va=Lu=An=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mh&&t.locale!=="ko"?null:t.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zv[e.type]:t==="textarea"}function Ah(e,t,n,r){hh(r),t=La(t,"onChange"),0<t.length&&(n=new Nu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wo=null,oi=null;function Tv(e){Qh(e,0)}function ul(e){var t=jr(e);if(ah(t))return e}function Dv(e,t){if(e==="change")return t}var Fh=!1;if(pn){var Xl;if(pn){var Gl="oninput"in document;if(!Gl){var rd=document.createElement("div");rd.setAttribute("oninput","return;"),Gl=typeof rd.oninput=="function"}Xl=Gl}else Xl=!1;Fh=Xl&&(!document.documentMode||9<document.documentMode)}function od(){Wo&&(Wo.detachEvent("onpropertychange",jh),oi=Wo=null)}function jh(e){if(e.propertyName==="value"&&ul(oi)){var t=[];Ah(t,oi,e,Ru(e)),gh(Tv,t)}}function Mv(e,t,n){e==="focusin"?(od(),Wo=t,oi=n,Wo.attachEvent("onpropertychange",jh)):e==="focusout"&&od()}function Lv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(oi)}function Nv(e,t){if(e==="click")return ul(t)}function Av(e,t){if(e==="input"||e==="change")return ul(t)}function Fv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:Fv;function ii(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!bs.call(t,o)||!qt(e[o],t[o]))return!1}return!0}function id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ad(e,t){var n=id(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=id(n)}}function Ih(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ih(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uh(){for(var e=window,t=_a();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_a(e.document)}return t}function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jv(e){var t=Uh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ih(n.ownerDocument.documentElement,n)){if(r!==null&&ju(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ad(n,i);var a=ad(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Iv=pn&&"documentMode"in document&&11>=document.documentMode,Ar=null,js=null,Qo=null,Is=!1;function ld(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Is||Ar==null||Ar!==_a(r)||(r=Ar,"selectionStart"in r&&ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qo&&ii(Qo,r)||(Qo=r,r=La(js,"onSelect"),0<r.length&&(t=new Nu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function Wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fr={animationend:Wi("Animation","AnimationEnd"),animationiteration:Wi("Animation","AnimationIteration"),animationstart:Wi("Animation","AnimationStart"),transitionend:Wi("Transition","TransitionEnd")},Yl={},$h={};pn&&($h=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function cl(e){if(Yl[e])return Yl[e];if(!Fr[e])return e;var t=Fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $h)return Yl[e]=t[n];return e}var Hh=cl("animationend"),qh=cl("animationiteration"),Bh=cl("animationstart"),Vh=cl("transitionend"),Wh=new Map,sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(e,t){Wh.set(e,t),xr(t,[e])}for(var Jl=0;Jl<sd.length;Jl++){var Zl=sd[Jl],Uv=Zl.toLowerCase(),$v=Zl[0].toUpperCase()+Zl.slice(1);Xn(Uv,"on"+$v)}Xn(Hh,"onAnimationEnd");Xn(qh,"onAnimationIteration");Xn(Bh,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(Vh,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function ud(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,U0(r,t,void 0,e),e.currentTarget=null}function Qh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;ud(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;ud(o,l,u),i=s}}}if(Ra)throw e=Ls,Ra=!1,Ls=null,e}function me(e,t){var n=t[Bs];n===void 0&&(n=t[Bs]=new Set);var r=e+"__bubble";n.has(r)||(Kh(t,e,2,!1),n.add(r))}function es(e,t,n){var r=0;t&&(r|=4),Kh(n,e,r,t)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function ai(e){if(!e[Qi]){e[Qi]=!0,th.forEach(function(n){n!=="selectionchange"&&(Hv.has(n)||es(n,!1,e),es(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qi]||(t[Qi]=!0,es("selectionchange",!1,t))}}function Kh(e,t,n,r){switch(Th(t)){case 1:var o=nv;break;case 4:o=rv;break;default:o=Mu}n=o.bind(null,t,n,e),o=void 0,!Ms||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ts(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=ir(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}gh(function(){var u=i,c=Ru(n),d=[];e:{var f=Wh.get(e);if(f!==void 0){var y=Nu,g=e;switch(e){case"keypress":if(ga(n)===0)break e;case"keydown":case"keyup":y=yv;break;case"focusin":g="focus",y=Kl;break;case"focusout":g="blur",y=Kl;break;case"beforeblur":case"afterblur":y=Kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=xv;break;case Hh:case qh:case Bh:y=uv;break;case Vh:y=Sv;break;case"scroll":y=ov;break;case"wheel":y=Ev;break;case"copy":case"cut":case"paste":y=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Zc}var m=(t&4)!==0,S=!m&&e==="scroll",p=m?f!==null?f+"Capture":null:f;m=[];for(var h=u,v;h!==null;){v=h;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,p!==null&&(k=ei(h,p),k!=null&&m.push(li(h,k,v)))),S)break;h=h.return}0<m.length&&(f=new y(f,g,null,n,c),d.push({event:f,listeners:m}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==Ts&&(g=n.relatedTarget||n.fromElement)&&(ir(g)||g[mn]))break e;if((y||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?ir(g):null,g!==null&&(S=kr(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(m=Yc,k="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(m=Zc,k="onPointerLeave",p="onPointerEnter",h="pointer"),S=y==null?f:jr(y),v=g==null?f:jr(g),f=new m(k,h+"leave",y,n,c),f.target=S,f.relatedTarget=v,k=null,ir(c)===u&&(m=new m(p,h+"enter",g,n,c),m.target=v,m.relatedTarget=S,k=m),S=k,y&&g)t:{for(m=y,p=g,h=0,v=m;v;v=Rr(v))h++;for(v=0,k=p;k;k=Rr(k))v++;for(;0<h-v;)m=Rr(m),h--;for(;0<v-h;)p=Rr(p),v--;for(;h--;){if(m===p||p!==null&&m===p.alternate)break t;m=Rr(m),p=Rr(p)}m=null}else m=null;y!==null&&cd(d,f,y,m,!1),g!==null&&S!==null&&cd(d,S,g,m,!0)}}e:{if(f=u?jr(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var O=Dv;else if(nd(f))if(Fh)O=Av;else{O=Lv;var R=Mv}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(O=Nv);if(O&&(O=O(e,u))){Ah(d,O,n,c);break e}R&&R(e,f,u),e==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&Os(f,"number",f.value)}switch(R=u?jr(u):window,e){case"focusin":(nd(R)||R.contentEditable==="true")&&(Ar=R,js=u,Qo=null);break;case"focusout":Qo=js=Ar=null;break;case"mousedown":Is=!0;break;case"contextmenu":case"mouseup":case"dragend":Is=!1,ld(d,n,c);break;case"selectionchange":if(Iv)break;case"keydown":case"keyup":ld(d,n,c)}var z;if(Fu)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Nr?Lh(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Mh&&n.locale!=="ko"&&(Nr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Nr&&(z=Dh()):(An=c,Lu="value"in An?An.value:An.textContent,Nr=!0)),R=La(u,b),0<R.length&&(b=new Jc(b,e,null,n,c),d.push({event:b,listeners:R}),z?b.data=z:(z=Nh(n),z!==null&&(b.data=z)))),(z=_v?Cv(e,n):Rv(e,n))&&(u=La(u,"onBeforeInput"),0<u.length&&(c=new Jc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=z))}Qh(d,t)})}function li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function La(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ei(e,n),i!=null&&r.unshift(li(e,i,o)),i=ei(e,t),i!=null&&r.push(li(e,i,o))),e=e.return}return r}function Rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cd(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=ei(n,i),s!=null&&a.unshift(li(n,s,l))):o||(s=ei(n,i),s!=null&&a.push(li(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var qv=/\r\n?/g,Bv=/\u0000|\uFFFD/g;function dd(e){return(typeof e=="string"?e:""+e).replace(qv,`
`).replace(Bv,"")}function Ki(e,t,n){if(t=dd(t),dd(e)!==t&&n)throw Error(T(425))}function Na(){}var Us=null,$s=null;function Hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qs=typeof setTimeout=="function"?setTimeout:void 0,Vv=typeof clearTimeout=="function"?clearTimeout:void 0,fd=typeof Promise=="function"?Promise:void 0,Wv=typeof queueMicrotask=="function"?queueMicrotask:typeof fd<"u"?function(e){return fd.resolve(null).then(e).catch(Qv)}:qs;function Qv(e){setTimeout(function(){throw e})}function ns(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ri(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ri(t)}function Hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bo=Math.random().toString(36).slice(2),Xt="__reactFiber$"+bo,si="__reactProps$"+bo,mn="__reactContainer$"+bo,Bs="__reactEvents$"+bo,Kv="__reactListeners$"+bo,Xv="__reactHandles$"+bo;function ir(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mn]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hd(e);e!==null;){if(n=e[Xt])return n;e=hd(e)}return t}e=n,n=e.parentNode}return null}function Oi(e){return e=e[Xt]||e[mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function dl(e){return e[si]||null}var Vs=[],Ir=-1;function Gn(e){return{current:e}}function ve(e){0>Ir||(e.current=Vs[Ir],Vs[Ir]=null,Ir--)}function fe(e,t){Ir++,Vs[Ir]=e.current,e.current=t}var Kn={},Je=Gn(Kn),ut=Gn(!1),mr=Kn;function so(e,t){var n=e.type.contextTypes;if(!n)return Kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ct(e){return e=e.childContextTypes,e!=null}function Aa(){ve(ut),ve(Je)}function pd(e,t,n){if(Je.current!==Kn)throw Error(T(168));fe(Je,t),fe(ut,n)}function Xh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,M0(e)||"Unknown",o));return Se({},n,r)}function Fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kn,mr=Je.current,fe(Je,e),fe(ut,ut.current),!0}function md(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Xh(e,t,mr),r.__reactInternalMemoizedMergedChildContext=e,ve(ut),ve(Je),fe(Je,e)):ve(ut),fe(ut,n)}var un=null,fl=!1,rs=!1;function Gh(e){un===null?un=[e]:un.push(e)}function Gv(e){fl=!0,Gh(e)}function Yn(){if(!rs&&un!==null){rs=!0;var e=0,t=ce;try{var n=un;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}un=null,fl=!1}catch(o){throw un!==null&&(un=un.slice(e+1)),xh(zu,Yn),o}finally{ce=t,rs=!1}}return null}var Ur=[],$r=0,ja=null,Ia=0,Et=[],Ot=0,vr=null,cn=1,dn="";function nr(e,t){Ur[$r++]=Ia,Ur[$r++]=ja,ja=e,Ia=t}function Yh(e,t,n){Et[Ot++]=cn,Et[Ot++]=dn,Et[Ot++]=vr,vr=e;var r=cn;e=dn;var o=32-$t(r)-1;r&=~(1<<o),n+=1;var i=32-$t(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,cn=1<<32-$t(t)+o|n<<o|r,dn=i+e}else cn=1<<i|n<<o|r,dn=e}function Iu(e){e.return!==null&&(nr(e,1),Yh(e,1,0))}function Uu(e){for(;e===ja;)ja=Ur[--$r],Ur[$r]=null,Ia=Ur[--$r],Ur[$r]=null;for(;e===vr;)vr=Et[--Ot],Et[Ot]=null,dn=Et[--Ot],Et[Ot]=null,cn=Et[--Ot],Et[Ot]=null}var yt=null,gt=null,be=!1,jt=null;function Jh(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,gt=Hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vr!==null?{id:cn,overflow:dn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yt=e,gt=null,!0):!1;default:return!1}}function Ws(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qs(e){if(be){var t=gt;if(t){var n=t;if(!vd(e,t)){if(Ws(e))throw Error(T(418));t=Hn(n.nextSibling);var r=yt;t&&vd(e,t)?Jh(r,n):(e.flags=e.flags&-4097|2,be=!1,yt=e)}}else{if(Ws(e))throw Error(T(418));e.flags=e.flags&-4097|2,be=!1,yt=e}}}function gd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function Xi(e){if(e!==yt)return!1;if(!be)return gd(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hs(e.type,e.memoizedProps)),t&&(t=gt)){if(Ws(e))throw Zh(),Error(T(418));for(;t;)Jh(e,t),t=Hn(t.nextSibling)}if(gd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){gt=Hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=yt?Hn(e.stateNode.nextSibling):null;return!0}function Zh(){for(var e=gt;e;)e=Hn(e.nextSibling)}function uo(){gt=yt=null,be=!1}function $u(e){jt===null?jt=[e]:jt.push(e)}var Yv=yn.ReactCurrentBatchConfig;function zo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Gi(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yd(e){var t=e._init;return t(e._payload)}function ep(e){function t(p,h){if(e){var v=p.deletions;v===null?(p.deletions=[h],p.flags|=16):v.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function o(p,h){return p=Wn(p,h),p.index=0,p.sibling=null,p}function i(p,h,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<h?(p.flags|=2,h):v):(p.flags|=2,h)):(p.flags|=1048576,h)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,h,v,k){return h===null||h.tag!==6?(h=cs(v,p.mode,k),h.return=p,h):(h=o(h,v),h.return=p,h)}function s(p,h,v,k){var O=v.type;return O===Lr?c(p,h,v.props.children,k,v.key):h!==null&&(h.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===_n&&yd(O)===h.type)?(k=o(h,v.props),k.ref=zo(p,h,v),k.return=p,k):(k=Pa(v.type,v.key,v.props,null,p.mode,k),k.ref=zo(p,h,v),k.return=p,k)}function u(p,h,v,k){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=ds(v,p.mode,k),h.return=p,h):(h=o(h,v.children||[]),h.return=p,h)}function c(p,h,v,k,O){return h===null||h.tag!==7?(h=pr(v,p.mode,k,O),h.return=p,h):(h=o(h,v),h.return=p,h)}function d(p,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=cs(""+h,p.mode,v),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ii:return v=Pa(h.type,h.key,h.props,null,p.mode,v),v.ref=zo(p,null,h),v.return=p,v;case Mr:return h=ds(h,p.mode,v),h.return=p,h;case _n:var k=h._init;return d(p,k(h._payload),v)}if(jo(h)||Eo(h))return h=pr(h,p.mode,v,null),h.return=p,h;Gi(p,h)}return null}function f(p,h,v,k){var O=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return O!==null?null:l(p,h,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ii:return v.key===O?s(p,h,v,k):null;case Mr:return v.key===O?u(p,h,v,k):null;case _n:return O=v._init,f(p,h,O(v._payload),k)}if(jo(v)||Eo(v))return O!==null?null:c(p,h,v,k,null);Gi(p,v)}return null}function y(p,h,v,k,O){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(v)||null,l(h,p,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ii:return p=p.get(k.key===null?v:k.key)||null,s(h,p,k,O);case Mr:return p=p.get(k.key===null?v:k.key)||null,u(h,p,k,O);case _n:var R=k._init;return y(p,h,v,R(k._payload),O)}if(jo(k)||Eo(k))return p=p.get(v)||null,c(h,p,k,O,null);Gi(h,k)}return null}function g(p,h,v,k){for(var O=null,R=null,z=h,b=h=0,D=null;z!==null&&b<v.length;b++){z.index>b?(D=z,z=null):D=z.sibling;var N=f(p,z,v[b],k);if(N===null){z===null&&(z=D);break}e&&z&&N.alternate===null&&t(p,z),h=i(N,h,b),R===null?O=N:R.sibling=N,R=N,z=D}if(b===v.length)return n(p,z),be&&nr(p,b),O;if(z===null){for(;b<v.length;b++)z=d(p,v[b],k),z!==null&&(h=i(z,h,b),R===null?O=z:R.sibling=z,R=z);return be&&nr(p,b),O}for(z=r(p,z);b<v.length;b++)D=y(z,p,b,v[b],k),D!==null&&(e&&D.alternate!==null&&z.delete(D.key===null?b:D.key),h=i(D,h,b),R===null?O=D:R.sibling=D,R=D);return e&&z.forEach(function(q){return t(p,q)}),be&&nr(p,b),O}function m(p,h,v,k){var O=Eo(v);if(typeof O!="function")throw Error(T(150));if(v=O.call(v),v==null)throw Error(T(151));for(var R=O=null,z=h,b=h=0,D=null,N=v.next();z!==null&&!N.done;b++,N=v.next()){z.index>b?(D=z,z=null):D=z.sibling;var q=f(p,z,N.value,k);if(q===null){z===null&&(z=D);break}e&&z&&q.alternate===null&&t(p,z),h=i(q,h,b),R===null?O=q:R.sibling=q,R=q,z=D}if(N.done)return n(p,z),be&&nr(p,b),O;if(z===null){for(;!N.done;b++,N=v.next())N=d(p,N.value,k),N!==null&&(h=i(N,h,b),R===null?O=N:R.sibling=N,R=N);return be&&nr(p,b),O}for(z=r(p,z);!N.done;b++,N=v.next())N=y(z,p,b,N.value,k),N!==null&&(e&&N.alternate!==null&&z.delete(N.key===null?b:N.key),h=i(N,h,b),R===null?O=N:R.sibling=N,R=N);return e&&z.forEach(function(W){return t(p,W)}),be&&nr(p,b),O}function S(p,h,v,k){if(typeof v=="object"&&v!==null&&v.type===Lr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ii:e:{for(var O=v.key,R=h;R!==null;){if(R.key===O){if(O=v.type,O===Lr){if(R.tag===7){n(p,R.sibling),h=o(R,v.props.children),h.return=p,p=h;break e}}else if(R.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===_n&&yd(O)===R.type){n(p,R.sibling),h=o(R,v.props),h.ref=zo(p,R,v),h.return=p,p=h;break e}n(p,R);break}else t(p,R);R=R.sibling}v.type===Lr?(h=pr(v.props.children,p.mode,k,v.key),h.return=p,p=h):(k=Pa(v.type,v.key,v.props,null,p.mode,k),k.ref=zo(p,h,v),k.return=p,p=k)}return a(p);case Mr:e:{for(R=v.key;h!==null;){if(h.key===R)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(p,h.sibling),h=o(h,v.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=ds(v,p.mode,k),h.return=p,p=h}return a(p);case _n:return R=v._init,S(p,h,R(v._payload),k)}if(jo(v))return g(p,h,v,k);if(Eo(v))return m(p,h,v,k);Gi(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(p,h.sibling),h=o(h,v),h.return=p,p=h):(n(p,h),h=cs(v,p.mode,k),h.return=p,p=h),a(p)):n(p,h)}return S}var co=ep(!0),tp=ep(!1),Ua=Gn(null),$a=null,Hr=null,Hu=null;function qu(){Hu=Hr=$a=null}function Bu(e){var t=Ua.current;ve(Ua),e._currentValue=t}function Ks(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gr(e,t){$a=e,Hu=Hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(st=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(Hu!==e)if(e={context:e,memoizedValue:t,next:null},Hr===null){if($a===null)throw Error(T(308));Hr=e,$a.dependencies={lanes:0,firstContext:e}}else Hr=Hr.next=e;return t}var ar=null;function Vu(e){ar===null?ar=[e]:ar.push(e)}function np(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Vu(t)):(n.next=o.next,o.next=n),t.interleaved=n,vn(e,r)}function vn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Cn=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,vn(e,n)}return o=r.interleaved,o===null?(t.next=t,Vu(r)):(t.next=o.next,o.next=t),r.interleaved=t,vn(e,n)}function ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tu(e,n)}}function bd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ha(e,t,n,r){var o=e.updateQueue;Cn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;a=0,c=u=s=null,l=i;do{var f=l.lane,y=l.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,m=l;switch(f=t,y=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){d=g.call(y,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,f=typeof g=="function"?g.call(y,d,f):g,f==null)break e;d=Se({},d,f);break e;case 2:Cn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[l]:f.push(l))}else y={eventTime:y,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=y,s=d):c=c.next=y,a|=f;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;f=l,l=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(c===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);yr|=a,e.lanes=a,e.memoizedState=d}}function wd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var _i={},Yt=Gn(_i),ui=Gn(_i),ci=Gn(_i);function lr(e){if(e===_i)throw Error(T(174));return e}function Qu(e,t){switch(fe(ci,t),fe(ui,e),fe(Yt,_i),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cs(t,e)}ve(Yt),fe(Yt,t)}function fo(){ve(Yt),ve(ui),ve(ci)}function op(e){lr(ci.current);var t=lr(Yt.current),n=Cs(t,e.type);t!==n&&(fe(ui,e),fe(Yt,n))}function Ku(e){ui.current===e&&(ve(Yt),ve(ui))}var xe=Gn(0);function qa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var os=[];function Xu(){for(var e=0;e<os.length;e++)os[e]._workInProgressVersionPrimary=null;os.length=0}var ba=yn.ReactCurrentDispatcher,is=yn.ReactCurrentBatchConfig,gr=0,ke=null,Me=null,je=null,Ba=!1,Ko=!1,di=0,Jv=0;function Qe(){throw Error(T(321))}function Gu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qt(e[n],t[n]))return!1;return!0}function Yu(e,t,n,r,o,i){if(gr=i,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ba.current=e===null||e.memoizedState===null?ng:rg,e=n(r,o),Ko){i=0;do{if(Ko=!1,di=0,25<=i)throw Error(T(301));i+=1,je=Me=null,t.updateQueue=null,ba.current=og,e=n(r,o)}while(Ko)}if(ba.current=Va,t=Me!==null&&Me.next!==null,gr=0,je=Me=ke=null,Ba=!1,t)throw Error(T(300));return e}function Ju(){var e=di!==0;return di=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ke.memoizedState=je=e:je=je.next=e,je}function zt(){if(Me===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=je===null?ke.memoizedState:je.next;if(t!==null)je=t,Me=e;else{if(e===null)throw Error(T(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},je===null?ke.memoizedState=je=e:je=je.next=e}return je}function fi(e,t){return typeof t=="function"?t(e):t}function as(e){var t=zt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=Me,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var c=u.lane;if((gr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,ke.lanes|=c,yr|=c}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,qt(r,t.memoizedState)||(st=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ke.lanes|=i,yr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ls(e){var t=zt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);qt(i,t.memoizedState)||(st=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ip(){}function ap(e,t){var n=ke,r=zt(),o=t(),i=!qt(r.memoizedState,o);if(i&&(r.memoizedState=o,st=!0),r=r.queue,Zu(up.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,hi(9,sp.bind(null,n,r,o,t),void 0,null),Ie===null)throw Error(T(349));gr&30||lp(n,t,o)}return o}function lp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sp(e,t,n,r){t.value=n,t.getSnapshot=r,cp(t)&&dp(e)}function up(e,t,n){return n(function(){cp(t)&&dp(e)})}function cp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qt(e,n)}catch{return!0}}function dp(e){var t=vn(e,1);t!==null&&Ht(t,e,1,-1)}function xd(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:e},t.queue=e,e=e.dispatch=tg.bind(null,ke,e),[t.memoizedState,e]}function hi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fp(){return zt().memoizedState}function wa(e,t,n,r){var o=Vt();ke.flags|=e,o.memoizedState=hi(1|t,n,void 0,r===void 0?null:r)}function hl(e,t,n,r){var o=zt();r=r===void 0?null:r;var i=void 0;if(Me!==null){var a=Me.memoizedState;if(i=a.destroy,r!==null&&Gu(r,a.deps)){o.memoizedState=hi(t,n,i,r);return}}ke.flags|=e,o.memoizedState=hi(1|t,n,i,r)}function kd(e,t){return wa(8390656,8,e,t)}function Zu(e,t){return hl(2048,8,e,t)}function hp(e,t){return hl(4,2,e,t)}function pp(e,t){return hl(4,4,e,t)}function mp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vp(e,t,n){return n=n!=null?n.concat([e]):null,hl(4,4,mp.bind(null,t,e),n)}function ec(){}function gp(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yp(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bp(e,t,n){return gr&21?(qt(n,t)||(n=Ph(),ke.lanes|=n,yr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n)}function Zv(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=is.transition;is.transition={};try{e(!1),t()}finally{ce=n,is.transition=r}}function wp(){return zt().memoizedState}function eg(e,t,n){var r=Vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xp(e))kp(t,n);else if(n=np(e,t,n,r),n!==null){var o=rt();Ht(n,e,r,o),Sp(n,t,r)}}function tg(e,t,n){var r=Vn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xp(e))kp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,qt(l,a)){var s=t.interleaved;s===null?(o.next=o,Vu(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=np(e,t,o,r),n!==null&&(o=rt(),Ht(n,e,r,o),Sp(n,t,r))}}function xp(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function kp(e,t){Ko=Ba=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tu(e,n)}}var Va={readContext:Rt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},ng={readContext:Rt,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:kd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wa(4194308,4,mp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wa(4194308,4,e,t)},useInsertionEffect:function(e,t){return wa(4,2,e,t)},useMemo:function(e,t){var n=Vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=eg.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:xd,useDebugValue:ec,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=xd(!1),t=e[0];return e=Zv.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,o=Vt();if(be){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Ie===null)throw Error(T(349));gr&30||lp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,kd(up.bind(null,r,i,e),[e]),r.flags|=2048,hi(9,sp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Vt(),t=Ie.identifierPrefix;if(be){var n=dn,r=cn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rg={readContext:Rt,useCallback:gp,useContext:Rt,useEffect:Zu,useImperativeHandle:vp,useInsertionEffect:hp,useLayoutEffect:pp,useMemo:yp,useReducer:as,useRef:fp,useState:function(){return as(fi)},useDebugValue:ec,useDeferredValue:function(e){var t=zt();return bp(t,Me.memoizedState,e)},useTransition:function(){var e=as(fi)[0],t=zt().memoizedState;return[e,t]},useMutableSource:ip,useSyncExternalStore:ap,useId:wp,unstable_isNewReconciler:!1},og={readContext:Rt,useCallback:gp,useContext:Rt,useEffect:Zu,useImperativeHandle:vp,useInsertionEffect:hp,useLayoutEffect:pp,useMemo:yp,useReducer:ls,useRef:fp,useState:function(){return ls(fi)},useDebugValue:ec,useDeferredValue:function(e){var t=zt();return Me===null?t.memoizedState=e:bp(t,Me.memoizedState,e)},useTransition:function(){var e=ls(fi)[0],t=zt().memoizedState;return[e,t]},useMutableSource:ip,useSyncExternalStore:ap,useId:wp,unstable_isNewReconciler:!1};function Mt(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pl={isMounted:function(e){return(e=e._reactInternals)?kr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=rt(),o=Vn(e),i=fn(r,o);i.payload=t,n!=null&&(i.callback=n),t=qn(e,i,o),t!==null&&(Ht(t,e,o,r),ya(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=rt(),o=Vn(e),i=fn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qn(e,i,o),t!==null&&(Ht(t,e,o,r),ya(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),r=Vn(e),o=fn(n,r);o.tag=2,t!=null&&(o.callback=t),t=qn(e,o,r),t!==null&&(Ht(t,e,r,n),ya(t,e,r))}};function Sd(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ii(n,r)||!ii(o,i):!0}function Pp(e,t,n){var r=!1,o=Kn,i=t.contextType;return typeof i=="object"&&i!==null?i=Rt(i):(o=ct(t)?mr:Je.current,r=t.contextTypes,i=(r=r!=null)?so(e,o):Kn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Pd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function Gs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Wu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Rt(i):(i=ct(t)?mr:Je.current,o.context=so(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Xs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&pl.enqueueReplaceState(o,o.state,null),Ha(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ho(e,t){try{var n="",r=t;do n+=D0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ss(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ys(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ig=typeof WeakMap=="function"?WeakMap:Map;function Ep(e,t,n){n=fn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qa||(Qa=!0,lu=r),Ys(e,t)},n}function Op(e,t,n){n=fn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ys(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ys(e,t),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ed(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ig;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=bg.bind(null,e,t,n),t.then(e,e))}function Od(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _d(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=fn(-1,1),t.tag=2,qn(n,t,1))),n.lanes|=1),e)}var ag=yn.ReactCurrentOwner,st=!1;function tt(e,t,n,r){t.child=e===null?tp(t,null,n,r):co(t,e.child,n,r)}function Cd(e,t,n,r,o){n=n.render;var i=t.ref;return Gr(t,o),r=Yu(e,t,n,r,i,o),n=Ju(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gn(e,t,o)):(be&&n&&Iu(t),t.flags|=1,tt(e,t,r,o),t.child)}function Rd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!sc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,_p(e,t,i,r,o)):(e=Pa(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ii,n(a,r)&&e.ref===t.ref)return gn(e,t,o)}return t.flags|=1,e=Wn(i,r),e.ref=t.ref,e.return=t,t.child=e}function _p(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ii(i,r)&&e.ref===t.ref)if(st=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(st=!0);else return t.lanes=e.lanes,gn(e,t,o)}return Js(e,t,n,r,o)}function Cp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Br,mt),mt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(Br,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,fe(Br,mt),mt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,fe(Br,mt),mt|=r;return tt(e,t,o,n),t.child}function Rp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Js(e,t,n,r,o){var i=ct(n)?mr:Je.current;return i=so(t,i),Gr(t,o),n=Yu(e,t,n,r,i,o),r=Ju(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gn(e,t,o)):(be&&r&&Iu(t),t.flags|=1,tt(e,t,n,o),t.child)}function zd(e,t,n,r,o){if(ct(n)){var i=!0;Fa(t)}else i=!1;if(Gr(t,o),t.stateNode===null)xa(e,t),Pp(t,n,r),Gs(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=ct(n)?mr:Je.current,u=so(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Pd(t,a,r,u),Cn=!1;var f=t.memoizedState;a.state=f,Ha(t,r,a,o),s=t.memoizedState,l!==r||f!==s||ut.current||Cn?(typeof c=="function"&&(Xs(t,n,c,r),s=t.memoizedState),(l=Cn||Sd(t,n,l,r,f,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,rp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Mt(t.type,l),a.props=u,d=t.pendingProps,f=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Rt(s):(s=ct(n)?mr:Je.current,s=so(t,s));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||f!==s)&&Pd(t,a,r,s),Cn=!1,f=t.memoizedState,a.state=f,Ha(t,r,a,o);var g=t.memoizedState;l!==d||f!==g||ut.current||Cn?(typeof y=="function"&&(Xs(t,n,y,r),g=t.memoizedState),(u=Cn||Sd(t,n,u,r,f,g,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Zs(e,t,n,r,i,o)}function Zs(e,t,n,r,o,i){Rp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&md(t,n,!1),gn(e,t,i);r=t.stateNode,ag.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=co(t,e.child,null,i),t.child=co(t,null,l,i)):tt(e,t,l,i),t.memoizedState=r.state,o&&md(t,n,!0),t.child}function zp(e){var t=e.stateNode;t.pendingContext?pd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pd(e,t.context,!1),Qu(e,t.containerInfo)}function Td(e,t,n,r,o){return uo(),$u(o),t.flags|=256,tt(e,t,n,r),t.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function tu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tp(e,t,n){var r=t.pendingProps,o=xe.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),fe(xe,o&1),e===null)return Qs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=gl(a,r,0,null),e=pr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=tu(n),t.memoizedState=eu,e):tc(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return lg(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Wn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Wn(l,i):(i=pr(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?tu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=eu,r}return i=e.child,e=i.sibling,r=Wn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tc(e,t){return t=gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yi(e,t,n,r){return r!==null&&$u(r),co(t,e.child,null,n),e=tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lg(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=ss(Error(T(422))),Yi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=gl({mode:"visible",children:r.children},o,0,null),i=pr(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&co(t,e.child,null,a),t.child.memoizedState=tu(a),t.memoizedState=eu,i);if(!(t.mode&1))return Yi(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(T(419)),r=ss(i,r,void 0),Yi(e,t,a,r)}if(l=(a&e.childLanes)!==0,st||l){if(r=Ie,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,vn(e,o),Ht(r,e,o,-1))}return lc(),r=ss(Error(T(421))),Yi(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=wg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,gt=Hn(o.nextSibling),yt=t,be=!0,jt=null,e!==null&&(Et[Ot++]=cn,Et[Ot++]=dn,Et[Ot++]=vr,cn=e.id,dn=e.overflow,vr=t),t=tc(t,r.children),t.flags|=4096,t)}function Dd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ks(e.return,t,n)}function us(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Dp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(tt(e,t,r.children,n),r=xe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dd(e,n,t);else if(e.tag===19)Dd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(xe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&qa(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),us(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&qa(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}us(t,!0,n,null,i);break;case"together":us(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sg(e,t,n){switch(t.tag){case 3:zp(t),uo();break;case 5:op(t);break;case 1:ct(t.type)&&Fa(t);break;case 4:Qu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;fe(Ua,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(fe(xe,xe.current&1),t.flags|=128,null):n&t.child.childLanes?Tp(e,t,n):(fe(xe,xe.current&1),e=gn(e,t,n),e!==null?e.sibling:null);fe(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Dp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),fe(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,Cp(e,t,n)}return gn(e,t,n)}var Mp,nu,Lp,Np;Mp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nu=function(){};Lp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,lr(Yt.current);var i=null;switch(n){case"input":o=Ps(e,o),r=Ps(e,r),i=[];break;case"select":o=Se({},o,{value:void 0}),r=Se({},r,{value:void 0}),i=[];break;case"textarea":o=_s(e,o),r=_s(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Na)}Rs(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&me("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Np=function(e,t,n,r){n!==r&&(t.flags|=4)};function To(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ug(e,t,n){var r=t.pendingProps;switch(Uu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return ct(t.type)&&Aa(),Ke(t),null;case 3:return r=t.stateNode,fo(),ve(ut),ve(Je),Xu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jt!==null&&(cu(jt),jt=null))),nu(e,t),Ke(t),null;case 5:Ku(t);var o=lr(ci.current);if(n=t.type,e!==null&&t.stateNode!=null)Lp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Ke(t),null}if(e=lr(Yt.current),Xi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Xt]=t,r[si]=i,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(o=0;o<Uo.length;o++)me(Uo[o],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":$c(r,i),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},me("invalid",r);break;case"textarea":qc(r,i),me("invalid",r)}Rs(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ki(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ki(r.textContent,l,e),o=["children",""+l]):Jo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&me("scroll",r)}switch(n){case"input":Ui(r),Hc(r,i,!0);break;case"textarea":Ui(r),Bc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Na)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Xt]=t,e[si]=r,Mp(e,t,!1,!1),t.stateNode=e;e:{switch(a=zs(n,r),n){case"dialog":me("cancel",e),me("close",e),o=r;break;case"iframe":case"object":case"embed":me("load",e),o=r;break;case"video":case"audio":for(o=0;o<Uo.length;o++)me(Uo[o],e);o=r;break;case"source":me("error",e),o=r;break;case"img":case"image":case"link":me("error",e),me("load",e),o=r;break;case"details":me("toggle",e),o=r;break;case"input":$c(e,r),o=Ps(e,r),me("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Se({},r,{value:void 0}),me("invalid",e);break;case"textarea":qc(e,r),o=_s(e,r),me("invalid",e);break;default:o=r}Rs(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?fh(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ch(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Zo(e,s):typeof s=="number"&&Zo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Jo.hasOwnProperty(i)?s!=null&&i==="onScroll"&&me("scroll",e):s!=null&&Eu(e,i,s,a))}switch(n){case"input":Ui(e),Hc(e,r,!1);break;case"textarea":Ui(e),Bc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Wr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Wr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Na)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)Np(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=lr(ci.current),lr(Yt.current),Xi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xt]=t,(i=r.nodeValue!==n)&&(e=yt,e!==null))switch(e.tag){case 3:Ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=t,t.stateNode=r}return Ke(t),null;case 13:if(ve(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&gt!==null&&t.mode&1&&!(t.flags&128))Zh(),uo(),t.flags|=98560,i=!1;else if(i=Xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[Xt]=t}else uo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),i=!1}else jt!==null&&(cu(jt),jt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||xe.current&1?Le===0&&(Le=3):lc())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return fo(),nu(e,t),e===null&&ai(t.stateNode.containerInfo),Ke(t),null;case 10:return Bu(t.type._context),Ke(t),null;case 17:return ct(t.type)&&Aa(),Ke(t),null;case 19:if(ve(xe),i=t.memoizedState,i===null)return Ke(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)To(i,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=qa(e),a!==null){for(t.flags|=128,To(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(xe,xe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Re()>po&&(t.flags|=128,r=!0,To(i,!1),t.lanes=4194304)}else{if(!r)if(e=qa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),To(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!be)return Ke(t),null}else 2*Re()-i.renderingStartTime>po&&n!==1073741824&&(t.flags|=128,r=!0,To(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Re(),t.sibling=null,n=xe.current,fe(xe,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return ac(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?mt&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function cg(e,t){switch(Uu(t),t.tag){case 1:return ct(t.type)&&Aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fo(),ve(ut),ve(Je),Xu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ku(t),null;case 13:if(ve(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));uo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(xe),null;case 4:return fo(),null;case 10:return Bu(t.type._context),null;case 22:case 23:return ac(),null;case 24:return null;default:return null}}var Ji=!1,Ge=!1,dg=typeof WeakSet=="function"?WeakSet:Set,U=null;function qr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function ru(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var Md=!1;function fg(e,t){if(Us=Da,e=Uh(),ju(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var y;d!==n||o!==0&&d.nodeType!==3||(l=a+o),d!==i||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===e)break t;if(f===n&&++u===o&&(l=a),f===i&&++c===r&&(s=a),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for($s={focusedElem:e,selectionRange:n},Da=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,S=g.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?m:Mt(t.type,m),S);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(k){Ce(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return g=Md,Md=!1,g}function Xo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ru(t,n,i)}o=o.next}while(o!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ou(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ap(e){var t=e.alternate;t!==null&&(e.alternate=null,Ap(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xt],delete t[si],delete t[Bs],delete t[Kv],delete t[Xv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fp(e){return e.tag===5||e.tag===3||e.tag===4}function Ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Na));else if(r!==4&&(e=e.child,e!==null))for(iu(e,t,n),e=e.sibling;e!==null;)iu(e,t,n),e=e.sibling}function au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(au(e,t,n),e=e.sibling;e!==null;)au(e,t,n),e=e.sibling}var He=null,At=!1;function kn(e,t,n){for(n=n.child;n!==null;)jp(e,t,n),n=n.sibling}function jp(e,t,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(ll,n)}catch{}switch(n.tag){case 5:Ge||qr(n,t);case 6:var r=He,o=At;He=null,kn(e,t,n),He=r,At=o,He!==null&&(At?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(At?(e=He,n=n.stateNode,e.nodeType===8?ns(e.parentNode,n):e.nodeType===1&&ns(e,n),ri(e)):ns(He,n.stateNode));break;case 4:r=He,o=At,He=n.stateNode.containerInfo,At=!0,kn(e,t,n),He=r,At=o;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&ru(n,t,a),o=o.next}while(o!==r)}kn(e,t,n);break;case 1:if(!Ge&&(qr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,t,l)}kn(e,t,n);break;case 21:kn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,kn(e,t,n),Ge=r):kn(e,t,n);break;default:kn(e,t,n)}}function Nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dg),t.forEach(function(r){var o=xg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:He=l.stateNode,At=!1;break e;case 3:He=l.stateNode.containerInfo,At=!0;break e;case 4:He=l.stateNode.containerInfo,At=!0;break e}l=l.return}if(He===null)throw Error(T(160));jp(i,a,o),He=null,At=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Ce(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ip(t,e),t=t.sibling}function Ip(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Bt(e),r&4){try{Xo(3,e,e.return),ml(3,e)}catch(m){Ce(e,e.return,m)}try{Xo(5,e,e.return)}catch(m){Ce(e,e.return,m)}}break;case 1:Tt(t,e),Bt(e),r&512&&n!==null&&qr(n,n.return);break;case 5:if(Tt(t,e),Bt(e),r&512&&n!==null&&qr(n,n.return),e.flags&32){var o=e.stateNode;try{Zo(o,"")}catch(m){Ce(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&lh(o,i),zs(l,a);var u=zs(l,i);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?fh(o,d):c==="dangerouslySetInnerHTML"?ch(o,d):c==="children"?Zo(o,d):Eu(o,c,d,u)}switch(l){case"input":Es(o,i);break;case"textarea":sh(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Wr(o,!!i.multiple,y,!1):f!==!!i.multiple&&(i.defaultValue!=null?Wr(o,!!i.multiple,i.defaultValue,!0):Wr(o,!!i.multiple,i.multiple?[]:"",!1))}o[si]=i}catch(m){Ce(e,e.return,m)}}break;case 6:if(Tt(t,e),Bt(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(m){Ce(e,e.return,m)}}break;case 3:if(Tt(t,e),Bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ri(t.containerInfo)}catch(m){Ce(e,e.return,m)}break;case 4:Tt(t,e),Bt(e);break;case 13:Tt(t,e),Bt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(oc=Re())),r&4&&Nd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(u=Ge)||c,Tt(t,e),Ge=u):Tt(t,e),Bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(U=e,c=e.child;c!==null;){for(d=U=c;U!==null;){switch(f=U,y=f.child,f.tag){case 0:case 11:case 14:case 15:Xo(4,f,f.return);break;case 1:qr(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){Ce(r,n,m)}}break;case 5:qr(f,f.return);break;case 22:if(f.memoizedState!==null){Fd(d);continue}}y!==null?(y.return=f,U=y):Fd(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=dh("display",a))}catch(m){Ce(e,e.return,m)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){Ce(e,e.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Tt(t,e),Bt(e),r&4&&Nd(e);break;case 21:break;default:Tt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fp(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Zo(o,""),r.flags&=-33);var i=Ld(e);au(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ld(e);iu(e,l,a);break;default:throw Error(T(161))}}catch(s){Ce(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hg(e,t,n){U=e,Up(e)}function Up(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var o=U,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ji;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Ge;l=Ji;var u=Ge;if(Ji=a,(Ge=s)&&!u)for(U=o;U!==null;)a=U,s=a.child,a.tag===22&&a.memoizedState!==null?jd(o):s!==null?(s.return=a,U=s):jd(o);for(;i!==null;)U=i,Up(i),i=i.sibling;U=o,Ji=l,Ge=u}Ad(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,U=i):Ad(e)}}function Ad(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ge||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Mt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&wd(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ri(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ge||t.flags&512&&ou(t)}catch(f){Ce(t,t.return,f)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Fd(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function jd(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(s){Ce(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Ce(t,o,s)}}var i=t.return;try{ou(t)}catch(s){Ce(t,i,s)}break;case 5:var a=t.return;try{ou(t)}catch(s){Ce(t,a,s)}}}catch(s){Ce(t,t.return,s)}if(t===e){U=null;break}var l=t.sibling;if(l!==null){l.return=t.return,U=l;break}U=t.return}}var pg=Math.ceil,Wa=yn.ReactCurrentDispatcher,nc=yn.ReactCurrentOwner,Ct=yn.ReactCurrentBatchConfig,re=0,Ie=null,De=null,qe=0,mt=0,Br=Gn(0),Le=0,pi=null,yr=0,vl=0,rc=0,Go=null,lt=null,oc=0,po=1/0,sn=null,Qa=!1,lu=null,Bn=null,Zi=!1,Fn=null,Ka=0,Yo=0,su=null,ka=-1,Sa=0;function rt(){return re&6?Re():ka!==-1?ka:ka=Re()}function Vn(e){return e.mode&1?re&2&&qe!==0?qe&-qe:Yv.transition!==null?(Sa===0&&(Sa=Ph()),Sa):(e=ce,e!==0||(e=window.event,e=e===void 0?16:Th(e.type)),e):1}function Ht(e,t,n,r){if(50<Yo)throw Yo=0,su=null,Error(T(185));Pi(e,n,r),(!(re&2)||e!==Ie)&&(e===Ie&&(!(re&2)&&(vl|=n),Le===4&&zn(e,qe)),dt(e,r),n===1&&re===0&&!(t.mode&1)&&(po=Re()+500,fl&&Yn()))}function dt(e,t){var n=e.callbackNode;Y0(e,t);var r=Ta(e,e===Ie?qe:0);if(r===0)n!==null&&Qc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qc(n),t===1)e.tag===0?Gv(Id.bind(null,e)):Gh(Id.bind(null,e)),Wv(function(){!(re&6)&&Yn()}),n=null;else{switch(Eh(r)){case 1:n=zu;break;case 4:n=kh;break;case 16:n=za;break;case 536870912:n=Sh;break;default:n=za}n=Kp(n,$p.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $p(e,t){if(ka=-1,Sa=0,re&6)throw Error(T(327));var n=e.callbackNode;if(Yr()&&e.callbackNode!==n)return null;var r=Ta(e,e===Ie?qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xa(e,r);else{t=r;var o=re;re|=2;var i=qp();(Ie!==e||qe!==t)&&(sn=null,po=Re()+500,hr(e,t));do try{gg();break}catch(l){Hp(e,l)}while(!0);qu(),Wa.current=i,re=o,De!==null?t=0:(Ie=null,qe=0,t=Le)}if(t!==0){if(t===2&&(o=Ns(e),o!==0&&(r=o,t=uu(e,o))),t===1)throw n=pi,hr(e,0),zn(e,r),dt(e,Re()),n;if(t===6)zn(e,r);else{if(o=e.current.alternate,!(r&30)&&!mg(o)&&(t=Xa(e,r),t===2&&(i=Ns(e),i!==0&&(r=i,t=uu(e,i))),t===1))throw n=pi,hr(e,0),zn(e,r),dt(e,Re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:rr(e,lt,sn);break;case 3:if(zn(e,r),(r&130023424)===r&&(t=oc+500-Re(),10<t)){if(Ta(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){rt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=qs(rr.bind(null,e,lt,sn),t);break}rr(e,lt,sn);break;case 4:if(zn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-$t(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pg(r/1960))-r,10<r){e.timeoutHandle=qs(rr.bind(null,e,lt,sn),r);break}rr(e,lt,sn);break;case 5:rr(e,lt,sn);break;default:throw Error(T(329))}}}return dt(e,Re()),e.callbackNode===n?$p.bind(null,e):null}function uu(e,t){var n=Go;return e.current.memoizedState.isDehydrated&&(hr(e,t).flags|=256),e=Xa(e,t),e!==2&&(t=lt,lt=n,t!==null&&cu(t)),e}function cu(e){lt===null?lt=e:lt.push.apply(lt,e)}function mg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!qt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zn(e,t){for(t&=~rc,t&=~vl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$t(t),r=1<<n;e[n]=-1,t&=~r}}function Id(e){if(re&6)throw Error(T(327));Yr();var t=Ta(e,0);if(!(t&1))return dt(e,Re()),null;var n=Xa(e,t);if(e.tag!==0&&n===2){var r=Ns(e);r!==0&&(t=r,n=uu(e,r))}if(n===1)throw n=pi,hr(e,0),zn(e,t),dt(e,Re()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rr(e,lt,sn),dt(e,Re()),null}function ic(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(po=Re()+500,fl&&Yn())}}function br(e){Fn!==null&&Fn.tag===0&&!(re&6)&&Yr();var t=re;re|=1;var n=Ct.transition,r=ce;try{if(Ct.transition=null,ce=1,e)return e()}finally{ce=r,Ct.transition=n,re=t,!(re&6)&&Yn()}}function ac(){mt=Br.current,ve(Br)}function hr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vv(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Uu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Aa();break;case 3:fo(),ve(ut),ve(Je),Xu();break;case 5:Ku(r);break;case 4:fo();break;case 13:ve(xe);break;case 19:ve(xe);break;case 10:Bu(r.type._context);break;case 22:case 23:ac()}n=n.return}if(Ie=e,De=e=Wn(e.current,null),qe=mt=t,Le=0,pi=null,rc=vl=yr=0,lt=Go=null,ar!==null){for(t=0;t<ar.length;t++)if(n=ar[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}ar=null}return e}function Hp(e,t){do{var n=De;try{if(qu(),ba.current=Va,Ba){for(var r=ke.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ba=!1}if(gr=0,je=Me=ke=null,Ko=!1,di=0,nc.current=null,n===null||n.return===null){Le=1,pi=t,De=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=qe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Od(a);if(y!==null){y.flags&=-257,_d(y,a,l,i,t),y.mode&1&&Ed(i,u,t),t=y,s=u;var g=t.updateQueue;if(g===null){var m=new Set;m.add(s),t.updateQueue=m}else g.add(s);break e}else{if(!(t&1)){Ed(i,u,t),lc();break e}s=Error(T(426))}}else if(be&&l.mode&1){var S=Od(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),_d(S,a,l,i,t),$u(ho(s,l));break e}}i=s=ho(s,l),Le!==4&&(Le=2),Go===null?Go=[i]:Go.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Ep(i,s,t);bd(i,p);break e;case 1:l=s;var h=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Bn===null||!Bn.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Op(i,l,t);bd(i,k);break e}}i=i.return}while(i!==null)}Vp(n)}catch(O){t=O,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function qp(){var e=Wa.current;return Wa.current=Va,e===null?Va:e}function lc(){(Le===0||Le===3||Le===2)&&(Le=4),Ie===null||!(yr&268435455)&&!(vl&268435455)||zn(Ie,qe)}function Xa(e,t){var n=re;re|=2;var r=qp();(Ie!==e||qe!==t)&&(sn=null,hr(e,t));do try{vg();break}catch(o){Hp(e,o)}while(!0);if(qu(),re=n,Wa.current=r,De!==null)throw Error(T(261));return Ie=null,qe=0,Le}function vg(){for(;De!==null;)Bp(De)}function gg(){for(;De!==null&&!H0();)Bp(De)}function Bp(e){var t=Qp(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?Vp(e):De=t,nc.current=null}function Vp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cg(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,De=null;return}}else if(n=ug(n,t,mt),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Le===0&&(Le=5)}function rr(e,t,n){var r=ce,o=Ct.transition;try{Ct.transition=null,ce=1,yg(e,t,n,r)}finally{Ct.transition=o,ce=r}return null}function yg(e,t,n,r){do Yr();while(Fn!==null);if(re&6)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(J0(e,i),e===Ie&&(De=Ie=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zi||(Zi=!0,Kp(za,function(){return Yr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ct.transition,Ct.transition=null;var a=ce;ce=1;var l=re;re|=4,nc.current=null,fg(e,n),Ip(n,e),jv($s),Da=!!Us,$s=Us=null,e.current=n,hg(n),q0(),re=l,ce=a,Ct.transition=i}else e.current=n;if(Zi&&(Zi=!1,Fn=e,Ka=o),i=e.pendingLanes,i===0&&(Bn=null),W0(n.stateNode),dt(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Qa)throw Qa=!1,e=lu,lu=null,e;return Ka&1&&e.tag!==0&&Yr(),i=e.pendingLanes,i&1?e===su?Yo++:(Yo=0,su=e):Yo=0,Yn(),null}function Yr(){if(Fn!==null){var e=Eh(Ka),t=Ct.transition,n=ce;try{if(Ct.transition=null,ce=16>e?16:e,Fn===null)var r=!1;else{if(e=Fn,Fn=null,Ka=0,re&6)throw Error(T(331));var o=re;for(re|=4,U=e.current;U!==null;){var i=U,a=i.child;if(U.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Xo(8,c,i)}var d=c.child;if(d!==null)d.return=c,U=d;else for(;U!==null;){c=U;var f=c.sibling,y=c.return;if(Ap(c),c===u){U=null;break}if(f!==null){f.return=y,U=f;break}U=y}}}var g=i.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var S=m.sibling;m.sibling=null,m=S}while(m!==null)}}U=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,U=a;else e:for(;U!==null;){if(i=U,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xo(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,U=p;break e}U=i.return}}var h=e.current;for(U=h;U!==null;){a=U;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,U=v;else e:for(a=h;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ml(9,l)}}catch(O){Ce(l,l.return,O)}if(l===a){U=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,U=k;break e}U=l.return}}if(re=o,Yn(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(ll,e)}catch{}r=!0}return r}finally{ce=n,Ct.transition=t}}return!1}function Ud(e,t,n){t=ho(n,t),t=Ep(e,t,1),e=qn(e,t,1),t=rt(),e!==null&&(Pi(e,1,t),dt(e,t))}function Ce(e,t,n){if(e.tag===3)Ud(e,e,n);else for(;t!==null;){if(t.tag===3){Ud(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=ho(n,e),e=Op(t,e,1),t=qn(t,e,1),e=rt(),t!==null&&(Pi(t,1,e),dt(t,e));break}}t=t.return}}function bg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(qe&n)===n&&(Le===4||Le===3&&(qe&130023424)===qe&&500>Re()-oc?hr(e,0):rc|=n),dt(e,t)}function Wp(e,t){t===0&&(e.mode&1?(t=qi,qi<<=1,!(qi&130023424)&&(qi=4194304)):t=1);var n=rt();e=vn(e,t),e!==null&&(Pi(e,t,n),dt(e,n))}function wg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wp(e,n)}function xg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Wp(e,n)}var Qp;Qp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ut.current)st=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return st=!1,sg(e,t,n);st=!!(e.flags&131072)}else st=!1,be&&t.flags&1048576&&Yh(t,Ia,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xa(e,t),e=t.pendingProps;var o=so(t,Je.current);Gr(t,n),o=Yu(null,t,r,e,o,n);var i=Ju();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(i=!0,Fa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Wu(t),o.updater=pl,t.stateNode=o,o._reactInternals=t,Gs(t,r,e,n),t=Zs(null,t,r,!0,i,n)):(t.tag=0,be&&i&&Iu(t),tt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xa(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Sg(r),e=Mt(r,e),o){case 0:t=Js(null,t,r,e,n);break e;case 1:t=zd(null,t,r,e,n);break e;case 11:t=Cd(null,t,r,e,n);break e;case 14:t=Rd(null,t,r,Mt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Mt(r,o),Js(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Mt(r,o),zd(e,t,r,o,n);case 3:e:{if(zp(t),e===null)throw Error(T(387));r=t.pendingProps,i=t.memoizedState,o=i.element,rp(e,t),Ha(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ho(Error(T(423)),t),t=Td(e,t,r,n,o);break e}else if(r!==o){o=ho(Error(T(424)),t),t=Td(e,t,r,n,o);break e}else for(gt=Hn(t.stateNode.containerInfo.firstChild),yt=t,be=!0,jt=null,n=tp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(uo(),r===o){t=gn(e,t,n);break e}tt(e,t,r,n)}t=t.child}return t;case 5:return op(t),e===null&&Qs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Hs(r,o)?a=null:i!==null&&Hs(r,i)&&(t.flags|=32),Rp(e,t),tt(e,t,a,n),t.child;case 6:return e===null&&Qs(t),null;case 13:return Tp(e,t,n);case 4:return Qu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=co(t,null,r,n):tt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Mt(r,o),Cd(e,t,r,o,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,fe(Ua,r._currentValue),r._currentValue=a,i!==null)if(qt(i.value,a)){if(i.children===o.children&&!ut.current){t=gn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=fn(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ks(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(T(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ks(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}tt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Gr(t,n),o=Rt(o),r=r(o),t.flags|=1,tt(e,t,r,n),t.child;case 14:return r=t.type,o=Mt(r,t.pendingProps),o=Mt(r.type,o),Rd(e,t,r,o,n);case 15:return _p(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Mt(r,o),xa(e,t),t.tag=1,ct(r)?(e=!0,Fa(t)):e=!1,Gr(t,n),Pp(t,r,o),Gs(t,r,o,n),Zs(null,t,r,!0,e,n);case 19:return Dp(e,t,n);case 22:return Cp(e,t,n)}throw Error(T(156,t.tag))};function Kp(e,t){return xh(e,t)}function kg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,r){return new kg(e,t,n,r)}function sc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sg(e){if(typeof e=="function")return sc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_u)return 11;if(e===Cu)return 14}return 2}function Wn(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pa(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")sc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Lr:return pr(n.children,o,i,t);case Ou:a=8,o|=8;break;case ws:return e=_t(12,n,t,o|2),e.elementType=ws,e.lanes=i,e;case xs:return e=_t(13,n,t,o),e.elementType=xs,e.lanes=i,e;case ks:return e=_t(19,n,t,o),e.elementType=ks,e.lanes=i,e;case oh:return gl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nh:a=10;break e;case rh:a=9;break e;case _u:a=11;break e;case Cu:a=14;break e;case _n:a=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=_t(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function pr(e,t,n,r){return e=_t(7,e,r,t),e.lanes=n,e}function gl(e,t,n,r){return e=_t(22,e,r,t),e.elementType=oh,e.lanes=n,e.stateNode={isHidden:!1},e}function cs(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function ds(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function uc(e,t,n,r,o,i,a,l,s){return e=new Pg(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=_t(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wu(i),e}function Eg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xp(e){if(!e)return Kn;e=e._reactInternals;e:{if(kr(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(ct(n))return Xh(e,n,t)}return t}function Gp(e,t,n,r,o,i,a,l,s){return e=uc(n,r,!0,e,o,i,a,l,s),e.context=Xp(null),n=e.current,r=rt(),o=Vn(n),i=fn(r,o),i.callback=t??null,qn(n,i,o),e.current.lanes=o,Pi(e,o,r),dt(e,r),e}function yl(e,t,n,r){var o=t.current,i=rt(),a=Vn(o);return n=Xp(n),t.context===null?t.context=n:t.pendingContext=n,t=fn(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=qn(o,t,a),e!==null&&(Ht(e,o,a,i),ya(e,o,a)),a}function Ga(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cc(e,t){$d(e,t),(e=e.alternate)&&$d(e,t)}function Og(){return null}var Yp=typeof reportError=="function"?reportError:function(e){console.error(e)};function dc(e){this._internalRoot=e}bl.prototype.render=dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));yl(e,t,null,null)};bl.prototype.unmount=dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;br(function(){yl(null,e,null,null)}),t[mn]=null}};function bl(e){this._internalRoot=e}bl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ch();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rn.length&&t!==0&&t<Rn[n].priority;n++);Rn.splice(n,0,e),n===0&&zh(e)}};function fc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hd(){}function _g(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ga(a);i.call(u)}}var a=Gp(t,r,e,0,null,!1,!1,"",Hd);return e._reactRootContainer=a,e[mn]=a.current,ai(e.nodeType===8?e.parentNode:e),br(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Ga(s);l.call(u)}}var s=uc(e,0,!1,null,null,!1,!1,"",Hd);return e._reactRootContainer=s,e[mn]=s.current,ai(e.nodeType===8?e.parentNode:e),br(function(){yl(t,s,n,r)}),s}function xl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Ga(a);l.call(s)}}yl(t,a,e,o)}else a=_g(n,t,e,o,r);return Ga(a)}Oh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Io(t.pendingLanes);n!==0&&(Tu(t,n|1),dt(t,Re()),!(re&6)&&(po=Re()+500,Yn()))}break;case 13:br(function(){var r=vn(e,1);if(r!==null){var o=rt();Ht(r,e,1,o)}}),cc(e,1)}};Du=function(e){if(e.tag===13){var t=vn(e,134217728);if(t!==null){var n=rt();Ht(t,e,134217728,n)}cc(e,134217728)}};_h=function(e){if(e.tag===13){var t=Vn(e),n=vn(e,t);if(n!==null){var r=rt();Ht(n,e,t,r)}cc(e,t)}};Ch=function(){return ce};Rh=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};Ds=function(e,t,n){switch(t){case"input":if(Es(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=dl(r);if(!o)throw Error(T(90));ah(r),Es(r,o)}}}break;case"textarea":sh(e,n);break;case"select":t=n.value,t!=null&&Wr(e,!!n.multiple,t,!1)}};mh=ic;vh=br;var Cg={usingClientEntryPoint:!1,Events:[Oi,jr,dl,hh,ph,ic]},Do={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rg={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bh(e),e===null?null:e.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||Og,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{ll=ea.inject(Rg),Gt=ea}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cg;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fc(t))throw Error(T(200));return Eg(e,t,null,n)};wt.createRoot=function(e,t){if(!fc(e))throw Error(T(299));var n=!1,r="",o=Yp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=uc(e,1,!1,null,null,n,!1,r,o),e[mn]=t.current,ai(e.nodeType===8?e.parentNode:e),new dc(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=bh(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return br(e)};wt.hydrate=function(e,t,n){if(!wl(t))throw Error(T(200));return xl(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!fc(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Yp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Gp(t,null,e,1,n??null,o,!1,i,a),e[mn]=t.current,ai(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new bl(t)};wt.render=function(e,t,n){if(!wl(t))throw Error(T(200));return xl(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!wl(e))throw Error(T(40));return e._reactRootContainer?(br(function(){xl(null,null,e,!1,function(){e._reactRootContainer=null,e[mn]=null})}),!0):!1};wt.unstable_batchedUpdates=ic;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wl(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return xl(e,t,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function Jp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jp)}catch(e){console.error(e)}}Jp(),Jf.exports=wt;var hc=Jf.exports;const zg=Uf(hc),Tg=If({__proto__:null,default:zg},[hc]);var qd=hc;ys.createRoot=qd.createRoot,ys.hydrateRoot=qd.hydrateRoot;var Dg={attributes:!0,characterData:!0,subtree:!0,childList:!0};function Mg(e,t,n=Dg){P.useEffect(()=>{if(e.current){const r=new MutationObserver(t);return r.observe(e.current,n),()=>{r.disconnect()}}},[t,n])}var Zp=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(o,i){return o[0]===n?(r=i,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),o=this.__entries__[r];return o&&o[1]},t.prototype.set=function(n,r){var o=e(this.__entries__,n);~o?this.__entries__[o][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,o=e(r,n);~o&&r.splice(o,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var o=0,i=this.__entries__;o<i.length;o++){var a=i[o];n.call(r,a[1],a[0])}},t}()}(),du=typeof window<"u"&&typeof document<"u"&&window.document===document,Ya=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Lg=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ya):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Ng=2;function Ag(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&l()}function a(){Lg(i)}function l(){var s=Date.now();if(n){if(s-o<Ng)return;r=!0}else n=!0,r=!1,setTimeout(a,t);o=s}return l}var Fg=20,jg=["top","right","bottom","left","width","height","size","weight"],Ig=typeof MutationObserver<"u",Ug=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Ag(this.refresh.bind(this),Fg)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!du||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Ig?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!du||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,o=jg.some(function(i){return!!~r.indexOf(i)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),em=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},mo=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Ya},tm=kl(0,0,0,0);function Ja(e){return parseFloat(e)||0}function Bd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,o){var i=e["border-"+o+"-width"];return r+Ja(i)},0)}function $g(e){for(var t=["top","right","bottom","left"],n={},r=0,o=t;r<o.length;r++){var i=o[r],a=e["padding-"+i];n[i]=Ja(a)}return n}function Hg(e){var t=e.getBBox();return kl(0,0,t.width,t.height)}function qg(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return tm;var r=mo(e).getComputedStyle(e),o=$g(r),i=o.left+o.right,a=o.top+o.bottom,l=Ja(r.width),s=Ja(r.height);if(r.boxSizing==="border-box"&&(Math.round(l+i)!==t&&(l-=Bd(r,"left","right")+i),Math.round(s+a)!==n&&(s-=Bd(r,"top","bottom")+a)),!Vg(e)){var u=Math.round(l+i)-t,c=Math.round(s+a)-n;Math.abs(u)!==1&&(l-=u),Math.abs(c)!==1&&(s-=c)}return kl(o.left,o.top,l,s)}var Bg=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof mo(e).SVGGraphicsElement}:function(e){return e instanceof mo(e).SVGElement&&typeof e.getBBox=="function"}}();function Vg(e){return e===mo(e).document.documentElement}function Wg(e){return du?Bg(e)?Hg(e):qg(e):tm}function Qg(e){var t=e.x,n=e.y,r=e.width,o=e.height,i=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(i.prototype);return em(a,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),a}function kl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Kg=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=kl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Wg(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Xg=function(){function e(t,n){var r=Qg(n);em(this,{target:t,contentRect:r})}return e}(),Gg=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Zp,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof mo(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Kg(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof mo(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new Xg(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),nm=typeof WeakMap<"u"?new WeakMap:new Zp,rm=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Ug.getInstance(),r=new Gg(t,n,this);nm.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){rm.prototype[e]=function(){var t;return(t=nm.get(this))[e].apply(t,arguments)}});var Yg=function(){return typeof Ya.ResizeObserver<"u"?Ya.ResizeObserver:rm}(),Jg=({mutationObservables:e,resizeObservables:t,refresh:n})=>{const[r,o]=P.useState(0),i=P.useRef(document.documentElement||document.body);function a(s){const u=Array.from(s);for(const c of u)if(e){if(!c.attributes)continue;e.find(f=>c.matches(f))&&n(!0)}}function l(s){const u=Array.from(s);for(const c of u)if(t){if(!c.attributes)continue;t.find(f=>c.matches(f))&&o(r+1)}}return Mg(i,s=>{for(const u of s)u.addedNodes.length!==0&&(a(u.addedNodes),l(u.addedNodes)),u.removedNodes.length!==0&&(a(u.removedNodes),l(u.removedNodes))},{childList:!0,subtree:!0}),P.useEffect(()=>{if(!t)return;const s=new Yg(()=>{n()});for(const u of t){const c=document.querySelector(u);c&&s.observe(c)}return()=>{s.disconnect()}},[t,r]),null},Zg=Jg;function Ea(e){let t=om;return e&&(t=e.getBoundingClientRect()),t}function ey(e,t){const[n,r]=P.useState(om),o=P.useCallback(()=>{e!=null&&e.current&&r(Ea(e==null?void 0:e.current))},[e==null?void 0:e.current]);return P.useEffect(()=>(o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[e==null?void 0:e.current,t]),n}var om={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0};function ty(e,t){return new Promise(n=>{if(!(e instanceof Element))throw new TypeError("Argument 1 must be an Element");let r=0,o=null;const i=Object.assign({behavior:"smooth"},t);e.scrollIntoView(i),requestAnimationFrame(a);function a(){const l=e==null?void 0:e.getBoundingClientRect().top;if(l===o){if(r++>2)return n(null)}else r=0,o=l;requestAnimationFrame(a)}})}function ta(e){return e<0?0:e}function ny(e){return typeof e=="object"&&e!==null?{thresholdX:e.x||0,thresholdY:e.y||0}:{thresholdX:e||0,thresholdY:e||0}}function Sl(){const e=Math.max(document.documentElement.clientWidth,window.innerWidth||0),t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return{w:e,h:t}}function ry({top:e,right:t,bottom:n,left:r,threshold:o}){const{w:i,h:a}=Sl(),{thresholdX:l,thresholdY:s}=ny(o);return e<0&&n-e>a?!0:e>=0+s&&r>=0+l&&n<=a-s&&t<=i-l}var Vd=(e,t)=>e>t,Wd=(e,t)=>e>t;function oy(e,t=[]){const n=(r,o)=>t.includes(r)?1:t.includes(o)?-1:0;return Object.keys(e).map(r=>({position:r,value:e[r]})).sort((r,o)=>o.value-r.value).sort((r,o)=>n(r.position,o.position)).filter(r=>r.value>0).map(r=>r.position)}var fs=10;function fu(e=fs){return Array.isArray(e)?e.length===1?[e[0],e[0],e[0],e[0]]:e.length===2?[e[1],e[0],e[1],e[0]]:e.length===3?[e[0],e[1],e[2],e[1]]:e.length>3?[e[0],e[1],e[2],e[3]]:[fs,fs]:[e,e,e,e]}var iy={maskWrapper:()=>({opacity:.7,left:0,top:0,position:"fixed",zIndex:99999,pointerEvents:"none",color:"#000"}),svgWrapper:({windowWidth:e,windowHeight:t,wpt:n,wpl:r})=>({width:e,height:t,left:Number(r),top:Number(n),position:"fixed"}),maskArea:({x:e,y:t,width:n,height:r})=>({x:e,y:t,width:n,height:r,fill:"black",rx:0}),maskRect:({windowWidth:e,windowHeight:t,maskID:n})=>({x:0,y:0,width:e,height:t,fill:"currentColor",mask:`url(#${n})`}),clickArea:({windowWidth:e,windowHeight:t,clipID:n})=>({x:0,y:0,width:e,height:t,fill:"currentcolor",pointerEvents:"auto",clipPath:`url(#${n})`}),highlightedArea:({x:e,y:t,width:n,height:r})=>({x:e,y:t,width:n,height:r,pointerEvents:"auto",fill:"transparent",display:"none"})};function ay(e){return(t,n)=>{const r=iy[t](n),o=e[t];return o?o(r,n):r}}var ly=({padding:e=10,wrapperPadding:t=0,onClick:n,onClickHighlighted:r,styles:o={},sizes:i,className:a,highlightedAreaClassName:l,maskId:s,clipId:u})=>{const c=s||Qd("mask__"),d=u||Qd("clip__"),f=ay(o),[y,g,m,S]=fu(e),[p,h,v,k]=fu(t),{w:O,h:R}=Sl(),z=ta((i==null?void 0:i.width)+S+g),b=ta((i==null?void 0:i.height)+y+m),D=ta((i==null?void 0:i.top)-y-p),N=ta((i==null?void 0:i.left)-S-k),q=O-k-h,W=R-p-v,ie=f("maskArea",{x:N,y:D,width:z,height:b}),oe=f("highlightedArea",{x:N,y:D,width:z,height:b});return M.createElement("div",{style:f("maskWrapper",{}),onClick:n,className:a},M.createElement("svg",{width:q,height:W,xmlns:"http://www.w3.org/2000/svg",style:f("svgWrapper",{windowWidth:q,windowHeight:W,wpt:p,wpl:k})},M.createElement("defs",null,M.createElement("mask",{id:c},M.createElement("rect",{x:0,y:0,width:q,height:W,fill:"white"}),M.createElement("rect",{style:ie,rx:ie.rx?1:void 0})),M.createElement("clipPath",{id:d},M.createElement("polygon",{points:`0 0, 0 ${W}, ${N} ${W}, ${N} ${D}, ${N+z} ${D}, ${N+z} ${D+b}, ${N} ${D+b}, ${N} ${W}, ${q} ${W}, ${q} 0`}))),M.createElement("rect",{style:f("maskRect",{windowWidth:q,windowHeight:W,maskID:c})}),M.createElement("rect",{style:f("clickArea",{windowWidth:q,windowHeight:W,top:D,left:N,width:z,height:b,clipID:d})}),M.createElement("rect",{style:oe,className:l,onClick:r,rx:oe.rx?1:void 0})))},sy=ly;function Qd(e){return e+Math.random().toString(36).substring(2,16)}var uy=Object.defineProperty,Za=Object.getOwnPropertySymbols,im=Object.prototype.hasOwnProperty,am=Object.prototype.propertyIsEnumerable,Kd=(e,t,n)=>t in e?uy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xd=(e,t)=>{for(var n in t||(t={}))im.call(t,n)&&Kd(e,n,t[n]);if(Za)for(var n of Za(t))am.call(t,n)&&Kd(e,n,t[n]);return e},cy=(e,t)=>{var n={};for(var r in e)im.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Za)for(var r of Za(e))t.indexOf(r)<0&&am.call(e,r)&&(n[r]=e[r]);return n},dy={popover:()=>({position:"fixed",maxWidth:353,backgroundColor:"#fff",padding:"24px 30px",boxShadow:"0 0.5em 3em rgba(0, 0, 0, 0.3)",color:"inherit",zIndex:1e5,transition:"transform 0.3s",top:0,left:0})};function fy(e){return(t,n)=>{const r=dy[t](n),o=e[t];return o?o(r,n):r}}var hy=e=>{var t=e,{children:n,position:r="bottom",padding:o=10,styles:i={},sizes:a,refresher:l}=t,s=cy(t,["children","position","padding","styles","sizes","refresher"]);const u=P.useRef(null),c=P.useRef(""),d=P.useRef(""),f=P.useRef(""),{w:y,h:g}=Sl(),m=fy(i),S=ey(u,l),{width:p,height:h}=S,[v,k,O,R]=fu(o),z=(a==null?void 0:a.left)-R,b=(a==null?void 0:a.top)-v,D=(a==null?void 0:a.right)+k,N=(a==null?void 0:a.bottom)+O,q=r&&typeof r=="function"?r({width:p,height:h,windowWidth:y,windowHeight:g,top:b,left:z,right:D,bottom:N,x:a.x,y:a.y},S):r,W={left:z,right:y-D,top:b,bottom:g-N},ie=(he,A,F)=>{switch(he){case"top":return W.top>h+O;case"right":return A?!1:W.right>p+R;case"bottom":return F?!1:W.bottom>h+v;case"left":return W.left>p+k;default:return!1}},oe=(he,A,F)=>{const L=oy(W,F?["right","left"]:A?["top","bottom"]:[]);for(let Y=0;Y<L.length;Y++)if(ie(L[Y],A,F))return c.current=L[Y],he[L[Y]];return c.current="center",he.center},Ue=(he=>{if(Array.isArray(he)){const Pe=Vd(he[0],y),Ae=Wd(he[1],g);return c.current="custom",[Pe?y/2-p/2:he[0],Ae?g/2-h/2:he[1]]}const A=Vd(z+p,y),F=Wd(N+h,g),L=A?Math.min(z,y-p):Math.max(z,0),Y=F?h>W.bottom?Math.max(N-h,0):Math.max(b,0):b;F&&h>W.bottom?d.current="bottom":d.current="top",A?f.current="left":f.current="right";const ae={top:[L-R,b-h-O],right:[D+R,Y-v],bottom:[L-R,N+v],left:[z-p-k,Y-v],center:[y/2-p/2,g/2-h/2]};return he==="center"||ie(he,A,F)&&!A&&!F?(c.current=he,ae[he]):oe(ae,A,F)})(q);return M.createElement("div",Xd({className:"reactour__popover",style:Xd({transform:`translate(${Math.round(Ue[0])}px, ${Math.round(Ue[1])}px)`},m("popover",{position:c.current,verticalAlign:d.current,horizontalAlign:f.current,helperRect:S,targetRect:a})),ref:u},s),n)},py=hy,my=Object.defineProperty,vy=Object.defineProperties,gy=Object.getOwnPropertyDescriptors,el=Object.getOwnPropertySymbols,lm=Object.prototype.hasOwnProperty,sm=Object.prototype.propertyIsEnumerable,Gd=(e,t,n)=>t in e?my(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ye=(e,t)=>{for(var n in t||(t={}))lm.call(t,n)&&Gd(e,n,t[n]);if(el)for(var n of el(t))sm.call(t,n)&&Gd(e,n,t[n]);return e},pc=(e,t)=>vy(e,gy(t)),mi=(e,t)=>{var n={};for(var r in e)lm.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&el)for(var r of el(e))t.indexOf(r)<0&&sm.call(e,r)&&(n[r]=e[r]);return n},yy={bottom:0,height:0,left:0,right:0,top:0,width:0,windowWidth:0,windowHeight:0,x:0,y:0};function by(e,t={block:"center",behavior:"smooth",inViewThreshold:0}){const[n,r]=P.useState(!1),[o,i]=P.useState(!1),[a,l]=P.useState(!1),[s,u]=P.useState(null),[c,d]=P.useState(yy),f=(e==null?void 0:e.selector)instanceof Element?e==null?void 0:e.selector:document.querySelector(e==null?void 0:e.selector),y=P.useCallback(()=>{const m=Yd(f,e==null?void 0:e.highlightedSelectors,e==null?void 0:e.bypassElem),S=mi(m,["hasHighligtedElems"]);Object.entries(c).some(([p,h])=>S[p]!==h)&&d(S)},[f,e==null?void 0:e.highlightedSelectors,c]);P.useEffect(()=>(y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)),[f,e==null?void 0:e.highlightedSelectors,s]),P.useEffect(()=>{!ry(pc(Ye({},c),{threshold:t.inViewThreshold}))&&f&&(r(!0),ty(f,t).then(()=>{o||u(Date.now())}).finally(()=>{r(!1)}))},[c]);const g=P.useCallback(()=>{i(!0);const m=Yd(f,e==null?void 0:e.highlightedSelectors,e==null?void 0:e.bypassElem),{hasHighligtedElems:S}=m,p=mi(m,["hasHighligtedElems"]);l(S),d(p),i(!1)},[f,e==null?void 0:e.highlightedSelectors,c]);return{sizes:c,transition:n,target:f,observableRefresher:g,isHighlightingObserved:a}}function Yd(e,t=[],n=!0){let r=!1;const{w:o,h:i}=Sl();if(!t)return pc(Ye({},Ea(e)),{windowWidth:o,windowHeight:i,hasHighligtedElems:!1});let a=Ea(e),l={bottom:0,height:0,left:o,right:0,top:i,width:0};for(const u of t){const c=document.querySelector(u);if(!c||c.style.display==="none"||c.style.visibility==="hidden")continue;const d=Ea(c);r=!0,n||!e?(d.top<l.top&&(l.top=d.top),d.right>l.right&&(l.right=d.right),d.bottom>l.bottom&&(l.bottom=d.bottom),d.left<l.left&&(l.left=d.left),l.width=l.right-l.left,l.height=l.bottom-l.top):(d.top<a.top&&(a.top=d.top),d.right>a.right&&(a.right=d.right),d.bottom>a.bottom&&(a.bottom=d.bottom),d.left<a.left&&(a.left=d.left),a.width=a.right-a.left,a.height=a.bottom-a.top)}const s=n||!e?l.width>0&&l.height>0:!1;return{left:(s?l:a).left,top:(s?l:a).top,right:(s?l:a).right,bottom:(s?l:a).bottom,width:(s?l:a).width,height:(s?l:a).height,windowWidth:o,windowHeight:i,hasHighligtedElems:r,x:a.x,y:a.y}}var wy=({disableKeyboardNavigation:e,setCurrentStep:t,currentStep:n,setIsOpen:r,stepsLength:o,disable:i,rtl:a,clickProps:l,keyboardHandler:s})=>{function u(c){if(c.stopPropagation(),e===!0||i)return;let d,f,y;e&&(d=e.includes("esc"),f=e.includes("right"),y=e.includes("left"));function g(){t(Math.min(n+1,o-1))}function m(){t(Math.max(n-1,0))}s&&typeof s=="function"?s(c,l,{isEscDisabled:d,isRightDisabled:f,isLeftDisabled:y}):(c.keyCode===27&&!d&&(c.preventDefault(),r(!1)),c.keyCode===39&&!f&&(c.preventDefault(),a?m():g()),c.keyCode===37&&!y&&(c.preventDefault(),a?g():m()))}return P.useEffect(()=>(window.addEventListener("keydown",u,!1),()=>{window.removeEventListener("keydown",u)}),[i,t,n]),null},xy=wy,ky={badge:()=>({position:"absolute",fontFamily:"monospace",background:"var(--reactour-accent,#007aff)",height:"1.875em",lineHeight:2,paddingLeft:"0.8125em",paddingRight:"0.8125em",fontSize:"1em",borderRadius:"1.625em",color:"white",textAlign:"center",boxShadow:"0 0.25em 0.5em rgba(0, 0, 0, 0.3)",top:"-0.8125em",left:"-0.8125em"}),controls:()=>({display:"flex",marginTop:24,alignItems:"center",justifyContent:"space-between"}),navigation:()=>({counterReset:"dot",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}),button:({disabled:e})=>({display:"block",padding:0,border:0,background:"none",cursor:e?"not-allowed":"pointer"}),arrow:({disabled:e})=>({color:e?"#caccce":"#646464",width:16,height:12,flex:"0 0 16px"}),dot:({current:e,disabled:t,showNumber:n})=>({counterIncrement:"dot",width:8,height:8,border:e?"0":"1px solid #caccce",borderRadius:"100%",padding:0,display:"block",margin:4,transition:"opacity 0.3s, transform 0.3s",cursor:t?"not-allowed":"pointer",transform:`scale(${e?1.25:1})`,color:e?"var(--reactour-accent, #007aff)":"#caccce",background:e?"var(--reactour-accent, #007aff)":"none"}),close:({disabled:e})=>({position:"absolute",top:22,right:22,width:9,height:9,"--rt-close-btn":e?"#caccce":"#5e5e5e","--rt-close-btn-disabled":e?"#caccce":"#000"}),svg:()=>({display:"block"})};function Pl(e){return(t,n)=>{const r=ky[t](n),o=e[t];return o?o(r,n):r}}var Sy=({styles:e={},children:t})=>{const n=Pl(e);return M.createElement("span",{style:n("badge",{})},t)},Py=Sy,Ey=e=>{var t=e,{styles:n={},onClick:r,disabled:o}=t,i=mi(t,["styles","onClick","disabled"]);const a=Pl(n);return M.createElement("button",Ye({className:"reactour__close-button",style:Ye(Ye({},a("button",{})),a("close",{disabled:o})),onClick:r},i),M.createElement("svg",{viewBox:"0 0 9.1 9.1","aria-hidden":!0,role:"presentation",style:Ye({},a("svg",{}))},M.createElement("path",{fill:"currentColor",d:"M5.9 4.5l2.8-2.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4.5 3.1 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2.8 2.8L.3 7.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L4.5 6l2.8 2.8c.3.2.5.3.8.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.9 4.5z"})))},Oy=Ey,_y=({content:e,setCurrentStep:t,transition:n,isHighlightingObserved:r,currentStep:o,setIsOpen:i})=>typeof e=="function"?e({setCurrentStep:t,transition:n,isHighlightingObserved:r,currentStep:o,setIsOpen:i}):e,Cy=_y,Ry=({styles:e={},steps:t,setCurrentStep:n,currentStep:r,setIsOpen:o,nextButton:i,prevButton:a,disableDots:l,hideDots:s,hideButtons:u,disableAll:c,rtl:d,Arrow:f=um})=>{const y=t.length,g=Pl(e),m=({onClick:S,kind:p="next",children:h,hideArrow:v})=>{function k(){c||(S&&typeof S=="function"?S():n(p==="next"?Math.min(r+1,y-1):Math.max(r-1,0)))}return M.createElement("button",{style:g("button",{kind:p,disabled:c||(p==="next"?y-1===r:r===0)}),onClick:k,"aria-label":`Go to ${p} step`},v?null:M.createElement(f,{styles:e,inverted:d?p==="prev":p==="next",disabled:c||(p==="next"?y-1===r:r===0)}),h)};return M.createElement("div",{style:g("controls",{}),dir:d?"rtl":"ltr"},u?null:a&&typeof a=="function"?a({Button:m,setCurrentStep:n,currentStep:r,stepsLength:y,setIsOpen:o,steps:t}):M.createElement(m,{kind:"prev"}),s?null:M.createElement("div",{style:g("navigation",{})},Array.from({length:y},(S,p)=>p).map(S=>{var p;return M.createElement("button",{style:g("dot",{current:S===r,disabled:l||c}),onClick:()=>{!l&&!c&&n(S)},key:`navigation_dot_${S}`,"aria-label":((p=t[S])==null?void 0:p.navDotAriaLabel)||`Go to step ${S+1}`})})),u?null:i&&typeof i=="function"?i({Button:m,setCurrentStep:n,currentStep:r,stepsLength:y,setIsOpen:o,steps:t}):M.createElement(m,null))},zy=Ry,um=({styles:e={},inverted:t=!1,disabled:n})=>{const r=Pl(e);return M.createElement("svg",{viewBox:"0 0 18.4 14.4",style:r("arrow",{inverted:t,disabled:n})},M.createElement("path",{d:t?"M17 7.2H1M10.8 1L17 7.2l-6.2 6.2":"M1.4 7.2h16M7.6 1L1.4 7.2l6.2 6.2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeMiterlimit:"10"}))},Ty={Badge:Py,Close:Oy,Content:Cy,Navigation:zy,Arrow:um},Dy=e=>Ye(Ye({},Ty),e),My=({styles:e,components:t={},badgeContent:n,accessibilityOptions:r,disabledActions:o,onClickClose:i,steps:a,setCurrentStep:l,currentStep:s,transition:u,isHighlightingObserved:c,setIsOpen:d,nextButton:f,prevButton:y,disableDotsNavigation:g,rtl:m,showPrevNextButtons:S=!0,showCloseButton:p=!0,showNavigation:h=!0,showBadge:v=!0,showDots:k=!0,meta:O,setMeta:R,setSteps:z})=>{const b=a[s],{Badge:D,Close:N,Content:q,Navigation:W,Arrow:ie}=Dy(t),oe=n&&typeof n=="function"?n({currentStep:s,totalSteps:a.length,transition:u}):s+1;function Ve(){o||(i&&typeof i=="function"?i({setCurrentStep:l,setIsOpen:d,currentStep:s,steps:a,meta:O,setMeta:R,setSteps:z}):d(!1))}return M.createElement(M.Fragment,null,v?M.createElement(D,{styles:e},oe):null,p?M.createElement(N,{styles:e,"aria-label":r==null?void 0:r.closeButtonAriaLabel,disabled:o,onClick:Ve}):null,M.createElement(q,{content:b==null?void 0:b.content,setCurrentStep:l,currentStep:s,transition:u,isHighlightingObserved:c,setIsOpen:d}),h?M.createElement(W,{setCurrentStep:l,currentStep:s,setIsOpen:d,steps:a,styles:e,"aria-hidden":!(r!=null&&r.showNavigationScreenReaders),nextButton:f,prevButton:y,disableDots:g,hideButtons:!S,hideDots:!k,disableAll:o,rtl:m,Arrow:ie}):null)},Ly=My,Ny=e=>{var t=e,{currentStep:n,setCurrentStep:r,setIsOpen:o,steps:i=[],setSteps:a,styles:l={},scrollSmooth:s,afterOpen:u,beforeClose:c,padding:d=10,position:f,onClickMask:y,onClickHighlighted:g,keyboardHandler:m,className:S="reactour__popover",maskClassName:p="reactour__mask",highlightedMaskClassName:h,clipId:v,maskId:k,disableInteraction:O,disableKeyboardNavigation:R,inViewThreshold:z,disabledActions:b,setDisabledActions:D,disableWhenSelectorFalsy:N,rtl:q,accessibilityOptions:W={closeButtonAriaLabel:"Close Tour",showNavigationScreenReaders:!0},ContentComponent:ie,Wrapper:oe,meta:Ve,setMeta:Ue,onTransition:he=()=>"center"}=t,A=mi(t,["currentStep","setCurrentStep","setIsOpen","steps","setSteps","styles","scrollSmooth","afterOpen","beforeClose","padding","position","onClickMask","onClickHighlighted","keyboardHandler","className","maskClassName","highlightedMaskClassName","clipId","maskId","disableInteraction","disableKeyboardNavigation","inViewThreshold","disabledActions","setDisabledActions","disableWhenSelectorFalsy","rtl","accessibilityOptions","ContentComponent","Wrapper","meta","setMeta","onTransition"]),F;const L=i[n],Y=Ye(Ye({},l),L==null?void 0:L.styles),{sizes:ae,transition:Pe,observableRefresher:Ae,isHighlightingObserved:kt,target:ge}=by(L,{block:"center",behavior:s?"smooth":"auto",inViewThreshold:z});P.useEffect(()=>(u&&typeof u=="function"&&u(ge),()=>{c&&typeof c=="function"&&c(ge)}),[]);const{maskPadding:at,popoverPadding:Zt,wrapperPadding:Dl}=Fy((F=L==null?void 0:L.padding)!=null?F:d),en={setCurrentStep:r,setIsOpen:o,currentStep:n,setSteps:a,steps:i,setMeta:Ue,meta:Ve};function Ml(){b||(y&&typeof y=="function"?y(en):o(!1))}const Ll=typeof(L==null?void 0:L.stepInteraction)=="boolean"?!(L!=null&&L.stepInteraction):O?typeof O=="boolean"?O:O(en):!1;P.useEffect(()=>(L!=null&&L.action&&typeof(L==null?void 0:L.action)=="function"&&(L==null||L.action(ge)),(L==null?void 0:L.disableActions)!==void 0&&D(L==null?void 0:L.disableActions),()=>{L!=null&&L.actionAfter&&typeof(L==null?void 0:L.actionAfter)=="function"&&(L==null||L.actionAfter(ge))}),[L]);const Nl=Pe?he:L!=null&&L.position?L==null?void 0:L.position:f,$e=oe||M.Fragment;return L?M.createElement($e,null,M.createElement(Zg,{mutationObservables:L==null?void 0:L.mutationObservables,resizeObservables:L==null?void 0:L.resizeObservables,refresh:Ae}),M.createElement(xy,{setCurrentStep:r,currentStep:n,setIsOpen:o,stepsLength:i.length,disableKeyboardNavigation:R,disable:b,rtl:q,clickProps:en,keyboardHandler:m}),(!N||ge)&&M.createElement(sy,{sizes:Pe?jy:ae,onClick:Ml,styles:Ye({highlightedArea:St=>pc(Ye({},St),{display:Ll?"block":"none"})},Y),padding:Pe?0:at,highlightedAreaClassName:h,className:p,onClickHighlighted:St=>{St.preventDefault(),St.stopPropagation(),g&&g(St,en)},wrapperPadding:Dl,clipId:v,maskId:k}),(!N||ge)&&M.createElement(py,{sizes:ae,styles:Y,position:Nl,padding:Zt,"aria-labelledby":W==null?void 0:W.ariaLabelledBy,className:S,refresher:n},ie?M.createElement(ie,Ye({styles:Y,setCurrentStep:r,currentStep:n,setIsOpen:o,steps:i,accessibilityOptions:W,disabledActions:b,transition:Pe,isHighlightingObserved:kt,rtl:q},A)):M.createElement(Ly,Ye({styles:Y,setCurrentStep:r,currentStep:n,setIsOpen:o,steps:i,setSteps:a,accessibilityOptions:W,disabledActions:b,transition:Pe,isHighlightingObserved:kt,rtl:q,meta:Ve,setMeta:Ue},A)))):null},Ay=Ny;function Fy(e){return typeof e=="object"&&e!==null?{maskPadding:e.mask,popoverPadding:e.popover,wrapperPadding:e.wrapper}:{maskPadding:e,popoverPadding:e,wrapperPadding:0}}var jy={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0},Iy={isOpen:!1,setIsOpen:()=>!1,currentStep:0,setCurrentStep:()=>0,steps:[],setSteps:()=>[],setMeta:()=>"",disabledActions:!1,setDisabledActions:()=>!1,components:{}},cm=M.createContext(Iy),Uy=e=>{var t=e,{children:n,defaultOpen:r=!1,startAt:o=0,steps:i,setCurrentStep:a,currentStep:l}=t,s=mi(t,["children","defaultOpen","startAt","steps","setCurrentStep","currentStep"]);const[u,c]=P.useState(r),[d,f]=P.useState(o),[y,g]=P.useState(i),[m,S]=P.useState(""),[p,h]=P.useState(!1),v=Ye({isOpen:u,setIsOpen:c,currentStep:l||d,setCurrentStep:a&&typeof a=="function"?a:f,steps:y,setSteps:g,disabledActions:p,setDisabledActions:h,meta:m,setMeta:S},s);return M.createElement(cm.Provider,{value:v},n,u?M.createElement(Ay,Ye({},v)):null)};function Iw(){return P.useContext(cm)}function dm(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=dm(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function fm(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=dm(e))&&(r&&(r+=" "),r+=t);return r}function Ne(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}Ne(`.react-loading-indicator-normalize,
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
}`);var K=function(){return K=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},K.apply(this,arguments)};function tl(e){return tl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tl(e)}var $y=/^\s+/,Hy=/\s+$/;function $(e,t){if(t=t||{},(e=e||"")instanceof $)return e;if(!(this instanceof $))return new $(e,t);var n=function(r){var o={r:0,g:0,b:0},i=1,a=null,l=null,s=null,u=!1,c=!1;typeof r=="string"&&(r=function(g){g=g.replace($y,"").replace(Hy,"").toLowerCase();var m,S=!1;if(hu[g])g=hu[g],S=!0;else if(g=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(m=Dt.rgb.exec(g))?{r:m[1],g:m[2],b:m[3]}:(m=Dt.rgba.exec(g))?{r:m[1],g:m[2],b:m[3],a:m[4]}:(m=Dt.hsl.exec(g))?{h:m[1],s:m[2],l:m[3]}:(m=Dt.hsla.exec(g))?{h:m[1],s:m[2],l:m[3],a:m[4]}:(m=Dt.hsv.exec(g))?{h:m[1],s:m[2],v:m[3]}:(m=Dt.hsva.exec(g))?{h:m[1],s:m[2],v:m[3],a:m[4]}:(m=Dt.hex8.exec(g))?{r:ht(m[1]),g:ht(m[2]),b:ht(m[3]),a:rf(m[4]),format:S?"name":"hex8"}:(m=Dt.hex6.exec(g))?{r:ht(m[1]),g:ht(m[2]),b:ht(m[3]),format:S?"name":"hex"}:(m=Dt.hex4.exec(g))?{r:ht(m[1]+""+m[1]),g:ht(m[2]+""+m[2]),b:ht(m[3]+""+m[3]),a:rf(m[4]+""+m[4]),format:S?"name":"hex8"}:(m=Dt.hex3.exec(g))?{r:ht(m[1]+""+m[1]),g:ht(m[2]+""+m[2]),b:ht(m[3]+""+m[3]),format:S?"name":"hex"}:!1}(r)),tl(r)=="object"&&(an(r.r)&&an(r.g)&&an(r.b)?(d=r.r,f=r.g,y=r.b,o={r:255*ye(d,255),g:255*ye(f,255),b:255*ye(y,255)},u=!0,c=String(r.r).substr(-1)==="%"?"prgb":"rgb"):an(r.h)&&an(r.s)&&an(r.v)?(a=$o(r.s),l=$o(r.v),o=function(g,m,S){g=6*ye(g,360),m=ye(m,100),S=ye(S,100);var p=Math.floor(g),h=g-p,v=S*(1-m),k=S*(1-h*m),O=S*(1-(1-h)*m),R=p%6,z=[S,k,v,v,O,S][R],b=[O,S,S,k,v,v][R],D=[v,v,O,S,S,k][R];return{r:255*z,g:255*b,b:255*D}}(r.h,a,l),u=!0,c="hsv"):an(r.h)&&an(r.s)&&an(r.l)&&(a=$o(r.s),s=$o(r.l),o=function(g,m,S){var p,h,v;function k(z,b,D){return D<0&&(D+=1),D>1&&(D-=1),D<1/6?z+6*(b-z)*D:D<.5?b:D<2/3?z+(b-z)*(2/3-D)*6:z}if(g=ye(g,360),m=ye(m,100),S=ye(S,100),m===0)p=h=v=S;else{var O=S<.5?S*(1+m):S+m-S*m,R=2*S-O;p=k(R,O,g+1/3),h=k(R,O,g),v=k(R,O,g-1/3)}return{r:255*p,g:255*h,b:255*v}}(r.h,a,s),u=!0,c="hsl"),r.hasOwnProperty("a")&&(i=r.a));var d,f,y;return i=hm(i),{ok:u,format:r.format||c,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:i}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function Jd(e,t,n){e=ye(e,255),t=ye(t,255),n=ye(n,255);var r,o,i=Math.max(e,t,n),a=Math.min(e,t,n),l=(i+a)/2;if(i==a)r=o=0;else{var s=i-a;switch(o=l>.5?s/(2-i-a):s/(i+a),i){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,l}}function Zd(e,t,n){e=ye(e,255),t=ye(t,255),n=ye(n,255);var r,o,i=Math.max(e,t,n),a=Math.min(e,t,n),l=i,s=i-a;if(o=i===0?0:s/i,i==a)r=0;else{switch(i){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,v:l}}function ef(e,t,n,r){var o=[It(Math.round(e).toString(16)),It(Math.round(t).toString(16)),It(Math.round(n).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function tf(e,t,n,r){return[It(pm(r)),It(Math.round(e).toString(16)),It(Math.round(t).toString(16)),It(Math.round(n).toString(16))].join("")}function qy(e,t){t=t===0?0:t||10;var n=$(e).toHsl();return n.s-=t/100,n.s=El(n.s),$(n)}function By(e,t){t=t===0?0:t||10;var n=$(e).toHsl();return n.s+=t/100,n.s=El(n.s),$(n)}function Vy(e){return $(e).desaturate(100)}function Wy(e,t){t=t===0?0:t||10;var n=$(e).toHsl();return n.l+=t/100,n.l=El(n.l),$(n)}function Qy(e,t){t=t===0?0:t||10;var n=$(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),$(n)}function Ky(e,t){t=t===0?0:t||10;var n=$(e).toHsl();return n.l-=t/100,n.l=El(n.l),$(n)}function Xy(e,t){var n=$(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,$(n)}function Gy(e){var t=$(e).toHsl();return t.h=(t.h+180)%360,$(t)}function nf(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=$(e).toHsl(),r=[$(e)],o=360/t,i=1;i<t;i++)r.push($({h:(n.h+i*o)%360,s:n.s,l:n.l}));return r}function Yy(e){var t=$(e).toHsl(),n=t.h;return[$(e),$({h:(n+72)%360,s:t.s,l:t.l}),$({h:(n+216)%360,s:t.s,l:t.l})]}function Jy(e,t,n){t=t||6,n=n||30;var r=$(e).toHsl(),o=360/n,i=[$(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push($(r));return i}function Zy(e,t){t=t||6;for(var n=$(e).toHsv(),r=n.h,o=n.s,i=n.v,a=[],l=1/t;t--;)a.push($({h:r,s:o,v:i})),i=(i+l)%1;return a}$.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=hm(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Zd(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Zd(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Jd(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Jd(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return ef(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(t,n,r,o,i){var a=[It(Math.round(t).toString(16)),It(Math.round(n).toString(16)),It(Math.round(r).toString(16)),It(pm(o))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*ye(this._r,255))+"%",g:Math.round(100*ye(this._g,255))+"%",b:Math.round(100*ye(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*ye(this._r,255))+"%, "+Math.round(100*ye(this._g,255))+"%, "+Math.round(100*ye(this._b,255))+"%)":"rgba("+Math.round(100*ye(this._r,255))+"%, "+Math.round(100*ye(this._g,255))+"%, "+Math.round(100*ye(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(e1[ef(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+tf(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=$(e);n="#"+tf(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return $(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(Wy,arguments)},brighten:function(){return this._applyModification(Qy,arguments)},darken:function(){return this._applyModification(Ky,arguments)},desaturate:function(){return this._applyModification(qy,arguments)},saturate:function(){return this._applyModification(By,arguments)},greyscale:function(){return this._applyModification(Vy,arguments)},spin:function(){return this._applyModification(Xy,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(Jy,arguments)},complement:function(){return this._applyCombination(Gy,arguments)},monochromatic:function(){return this._applyCombination(Zy,arguments)},splitcomplement:function(){return this._applyCombination(Yy,arguments)},triad:function(){return this._applyCombination(nf,[3])},tetrad:function(){return this._applyCombination(nf,[4])}},$.fromRatio=function(e,t){if(tl(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=r==="a"?e[r]:$o(e[r]));e=n}return $(e,t)},$.equals=function(e,t){return!(!e||!t)&&$(e).toRgbString()==$(t).toRgbString()},$.random=function(){return $.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},$.mix=function(e,t,n){n=n===0?0:n||50;var r=$(e).toRgb(),o=$(t).toRgb(),i=n/100;return $({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},$.readability=function(e,t){var n=$(e),r=$(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},$.isReadable=function(e,t,n){var r,o,i=$.readability(e,t);switch(o=!1,(r=function(a){var l,s;return l=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(a.size||"small").toLowerCase(),l!=="AA"&&l!=="AAA"&&(l="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:l,size:s}}(n)).level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7}return o},$.mostReadable=function(e,t,n){var r,o,i,a,l=null,s=0;o=(n=n||{}).includeFallbackColors,i=n.level,a=n.size;for(var u=0;u<t.length;u++)(r=$.readability(e,t[u]))>s&&(s=r,l=$(t[u]));return $.isReadable(e,l,{level:i,size:a})||!o?l:(n.includeFallbackColors=!1,$.mostReadable(e,["#fff","#000"],n))};var hu=$.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},e1=$.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(hu);function hm(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function ye(e,t){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function El(e){return Math.min(1,Math.max(0,e))}function ht(e){return parseInt(e,16)}function It(e){return e.length==1?"0"+e:""+e}function $o(e){return e<=1&&(e=100*e+"%"),e}function pm(e){return Math.round(255*parseFloat(e)).toString(16)}function rf(e){return ht(e)/255}var Sn,na,ra,Dt=(na="[\\s|\\(]+("+(Sn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Sn+")[,|\\s]+("+Sn+")\\s*\\)?",ra="[\\s|\\(]+("+Sn+")[,|\\s]+("+Sn+")[,|\\s]+("+Sn+")[,|\\s]+("+Sn+")\\s*\\)?",{CSS_UNIT:new RegExp(Sn),rgb:new RegExp("rgb"+na),rgba:new RegExp("rgba"+ra),hsl:new RegExp("hsl"+na),hsla:new RegExp("hsla"+ra),hsv:new RegExp("hsv"+na),hsva:new RegExp("hsva"+ra),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function an(e){return!!Dt.CSS_UNIT.exec(e)}var Sr=function(e,t){var n=(typeof e=="string"?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=n,o=parseFloat(t),i=o+r*(o/5)*-1;return(i==0||i<=Number.EPSILON)&&(i=.1),{animationPeriod:i+"s"}}return{animationPeriod:t}},Pr=function(e,t){var n=e||{},r="";switch(t){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(n.fontSize){var i=n.fontSize;o=function(a,l){var s={};for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&l.indexOf(u)<0&&(s[u]=a[u]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function"){var c=0;for(u=Object.getOwnPropertySymbols(a);c<u.length;c++)l.indexOf(u[c])<0&&Object.prototype.propertyIsEnumerable.call(a,u[c])&&(s[u[c]]=a[u[c]])}return s}(n,["fontSize"]),r=i}return{fontSize:r,styles:o}},t1={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Er=function(e){var t=e.className,n=e.text,r=e.textColor,o=e.staticText,i=e.style;return n?M.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:K(K(K({},o&&t1),r&&{color:r,mixBlendMode:"unset"}),i&&i)},typeof n=="string"&&n.length?n:"loading"):null},Ut="rgb(50, 205, 50)";function Or(e,t){t===void 0&&(t=0);var n=[];return function r(o,i){return i===void 0&&(i=0),n.push.apply(n,o),n.length<i&&r(n,i),n.slice(0,i)}(e,t)}Ne(`.atom-rli-bounding-box {
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
}`);$(Ut).toRgb();Array.from({length:4},function(e,t){return"--atom-phase".concat(t+1,"-rgb")});Ne(`.commet-rli-bounding-box {
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
}`);var oa=Array.from({length:4},function(e,t){return"--OP-annulus-phase".concat(t+1,"-color")}),n1=function(e){var t,n=Pr(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Sr(e==null?void 0:e.speedPlus,"1.5s").animationPeriod,l=function(u){var c={},d=oa.length;if(u instanceof Array){for(var f=Or(u,d),y=0;y<f.length&&!(y>=4);y++)c[oa[y]]=f[y];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<d;g++)c[oa[g]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),g=0;g<d;g++)c[oa[g]]=Ut}return c}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e!=null&&e.dense?4.3:2.9;return M.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:K(K(K(K(K({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},M.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},M.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},M.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:s,strokeMiterlimit:"10"})),M.createElement(Er,{className:"OP-annulus-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};function hs(e){return e&&e.Math===Math&&e}Ne(`.OP-dotted-rli-bounding-box {
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
}`);var zr=hs(typeof window=="object"&&window)||hs(typeof self=="object"&&self)||hs(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function mm(){var e,t;return!((e=zr==null?void 0:zr.crypto)===null||e===void 0)&&e.randomUUID?zr.crypto.randomUUID():!((t=zr==null?void 0:zr.btoa)===null||t===void 0)&&t.name?zr.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var ia=Array.from({length:4},function(e,t){return"--OP-dotted-phase".concat(t+1,"-color")}),r1=function(e){var t,n=Pr(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Sr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(u){var c={},d=ia.length;if(u instanceof Array){for(var f=Or(u,d),y=0;y<f.length&&!(y>=4);y++)c[ia[y]]=f[y];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<d;g++)c[ia[g]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),g=0;g<d;g++)c[ia[g]]=Ut}return c}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e!=null&&e.dense?16:12;return M.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:K(K(K(K(K({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},M.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:s}).map(function(u,c){var d=function(g,m,S){if(m===16){var p=360*g/m,h=m-g,v=Number.parseFloat(S)/m*h*-1;return{transform:"rotate(".concat(p,"deg)"),animationDelay:"".concat(v,"s")}}return{transform:"",animationDelay:""}}(c,s,a),f=d.animationDelay,y=d.transform;return M.createElement("span",{key:mm(),className:"rli-d-i-b dot-shape-holder",style:y?{transform:y}:void 0},M.createElement("span",{className:"dot",style:f?{animationDelay:f}:void 0}))}),M.createElement(Er,{className:"OP-dotted-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};Ne(`.OP-spokes-rli-bounding-box {
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
}`);var aa=Array.from({length:4},function(e,t){return"--OP-spokes-phase".concat(t+1,"-color")}),o1=function(e){var t,n=Pr(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Sr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(u){var c={},d=aa.length;if(u instanceof Array){for(var f=Or(u,d),y=0;y<f.length&&!(y>=4);y++)c[aa[y]]=f[y];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<d;g++)c[aa[g]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),g=0;g<d;g++)c[aa[g]]=Ut}return c}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e!=null&&e.dense?16:12;return M.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:K(K(K(K(K({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},M.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:s},function(u,c){return M.createElement("span",{key:mm(),className:"rli-d-i-b spoke",style:i1(c,s,a)})})),M.createElement(Er,{text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};function i1(e,t,n){if(t===16){var r=t-e,o=Number.parseFloat(n)/t;return{transform:"rotate(".concat(360*e/t,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((r-1)*o*-1,"s")}}}Ne(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);var la=Array.from({length:4},function(e,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")}),a1=function(e){var t,n=Pr(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Sr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(u){var c={},d=la.length;if(u instanceof Array){for(var f=Or(u,d),y=0;y<f.length&&!(y>=4);y++)c[la[y]]=f[y];return c}try{if(typeof u!="string")throw new Error("Color String expected");for(var g=0;g<d;g++)c[la[g]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),g=0;g<d;g++)c[la[g]]=Ut}return c}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e.dense?"0.45em":"";return M.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:K(K(K(K(K({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},M.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},M.createElement("span",{className:"rli-d-i-b annulus-sectors",style:K({},s&&{borderWidth:s})}),M.createElement(Er,{className:"OP-annulus-dual-sectors-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};Ne(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);var Mo=Array.from({length:4},function(e,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]}),sa=function(e){return e===void 0&&(e=1),.25*e},l1=function(e){var t,n=Pr(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Sr(e==null?void 0:e.speedPlus,"1s").animationPeriod,l=function(u){var c={},d=Mo.length;if(u instanceof Array){for(var f=Or(u,d),y=0;y<f.length&&!(y>=4);y++){var g=Mo[y];try{if(!(p=$(f[y])).isValid())throw new Error("Invalid Color: ".concat(p.getOriginalInput()));var m=p.setAlpha(sa(p.getAlpha())).toRgbString(),S=f[y];c[g[0]]=m,c[g[1]]=S}catch{S=Ut,m=(p=$(Ut)).setAlpha(sa(p.getAlpha())).toRgbString(),c[g[0]]=m,c[g[1]]=S}}return c}try{var p=$(u);if(typeof u!="string")throw new Error("Color String expected");if(!p.isValid())throw new Error("Invalid Color: ".concat(p.getOriginalInput()));S=u,m=p.setAlpha(sa(p.getAlpha())).toRgbString();for(var h=0;h<d;h++)c[(g=Mo[h])[0]]=m,c[g[1]]=S}catch(v){for(v instanceof Error?console.warn("[".concat(v.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),S=Ut,m=(p=$(Ut)).setAlpha(sa(p.getAlpha())).toRgbString(),h=0;h<Mo.length;h++)c[(g=Mo[h])[0]]=m,c[g[1]]=S}return c}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),s=e.dense?"0.45em":"";return M.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:K(K(K(K(K({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},M.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},M.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:K({},s&&{borderWidth:s})}),M.createElement(Er,{className:"OP-annulus-sector-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))},s1=function(e){var t=Object(e).variant,n=t===void 0?"disc":t;return n==="dotted"?M.createElement(r1,K({},e)):n==="spokes"?M.createElement(o1,K({},e)):n==="disc"?M.createElement(n1,K({},e)):n==="split-disc"?M.createElement(a1,K({},e)):n==="track-disc"?M.createElement(l1,K({},e)):null};Ne(`.foursquare-rli-bounding-box {
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
}`);var ua=Array.from({length:4},function(e,t){return"--shape-phase".concat(t+1,"-color")}),Uw=function(e){var t,n=Pr(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Sr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(s){var u={},c=ua.length;if(Array.isArray(s)&&s.length>0){for(var d=Or(s,c),f=0;f<d.length&&!(f>c-1);f++){var y=d[f];u[ua[f]]=y}return u}try{if(typeof s!="string")throw new Error("Color String expected");for(f=0;f<c;f++)u[ua[f]]=s}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s)," received in <BlinkBlur /> indicator cannot be processed. Using default instead!")),f=0;f<c;f++)u[ua[f]]=Ut}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return M.createElement("span",{className:"rli-d-i-b blink-blur-rli-bounding-box",style:K(K(K(K(K({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},M.createElement("span",{className:"rli-d-i-b blink-blur-indicator"},M.createElement("span",{className:"blink-blur-shape blink-blur-shape1"}),M.createElement("span",{className:"blink-blur-shape blink-blur-shape2"}),M.createElement("span",{className:"blink-blur-shape blink-blur-shape3"}),M.createElement("span",{className:"blink-blur-shape blink-blur-shape4"}),M.createElement("span",{className:"blink-blur-shape blink-blur-shape5"})),M.createElement(Er,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor,style:{marginTop:"0.8em"}}))};Ne(`.trophy-spin-rli-bounding-box {
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
}`);var Tr=Array.from({length:4},function(e,t){return"--slab-phase".concat(t+1,"-color")}),u1=function(e){var t,n=Pr(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Sr(e==null?void 0:e.speedPlus,"3s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var c=Or(s,Tr.length),d=0;d<c.length&&!(d>=4);d++)u[Tr[d]]=c[d];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var f=0;f<Tr.length;f++)u[Tr[f]]=s}catch(y){for(y instanceof Error?console.warn("[".concat(y.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s)," received in <Slab /> indicator cannot be processed. Using default instead!")),f=0;f<Tr.length;f++)u[Tr[f]]=Ut}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return M.createElement("span",{className:"rli-d-i-b slab-rli-bounding-box",style:K(K(K(K(K({},o&&{fontSize:o}),a&&{"--rli-animation-duration-unitless":parseFloat(a)}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},M.createElement("span",{className:"rli-d-i-b slab-indicator"},M.createElement("span",{className:"slabs-wrapper"},M.createElement("span",{className:"slab"}),M.createElement("span",{className:"slab"}),M.createElement("span",{className:"slab"}),M.createElement("span",{className:"slab"}))),M.createElement(Er,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};Ne(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(e,t){return"--life-line-phase".concat(t+1,"-color")});const c1=P.createContext({});function d1({children:e}){const[t,n]=P.useState(!1),[r,o]=P.useState(!0),i=P.useRef(!1),a=P.useCallback(u=>{if(i.current){console.warn("当前已经存在一个 loading 实例了");return}n(!0),o(u??!0),i.current=!0},[]),l=P.useCallback(()=>{n(!1),i.current=!1},[]),s=P.useMemo(()=>({showLoading:a,hideLoading:l}),[a,l]);return G.jsxs(c1.Provider,{value:s,children:[e,t&&G.jsx(f1,{mask:r})]})}function f1({mask:e=!0,text:t="数据玩命加载中..."}){return G.jsx("div",{className:fm("loading-overlay  inset-0 fixed flex items-center justify-center bg-black bg-opacity-40",{"pointer-events-none":!e}),children:G.jsxs("div",{className:"loading-content flex items-center justify-center flex-col",children:[G.jsx(s1,{color:"#41d9ce",size:"medium",text:"",textColor:""}),t&&G.jsx("p",{className:"font-bold text-md text-white shadow",children:t})]})})}const h1="modulepreload",p1=function(e){return"/project-preview/"+e},of={},_r=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(s=>{if(s=p1(s),s in of)return;of[s]=!0;const u=s.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${c}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":h1,u||(d.as="script"),d.crossOrigin="",d.href=s,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((f,y)=>{d.addEventListener("load",f),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${s}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return o.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},we.apply(this,arguments)}var Te;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Te||(Te={}));const af="popstate";function m1(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return vi("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:wr(o)}return g1(t,n,null,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function v1(){return Math.random().toString(36).substr(2,8)}function lf(e,t){return{usr:e.state,key:e.key,idx:t}}function vi(e,t,n,r){return n===void 0&&(n=null),we({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jn(t):t,{state:n,key:t&&t.key||r||v1()})}function wr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Te.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(we({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){l=Te.Pop;let S=c(),p=S==null?null:S-u;u=S,s&&s({action:l,location:m.location,delta:p})}function f(S,p){l=Te.Push;let h=vi(m.location,S,p);u=c()+1;let v=lf(h,u),k=m.createHref(h);try{a.pushState(v,"",k)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;o.location.assign(k)}i&&s&&s({action:l,location:m.location,delta:1})}function y(S,p){l=Te.Replace;let h=vi(m.location,S,p);u=c();let v=lf(h,u),k=m.createHref(h);a.replaceState(v,"",k),i&&s&&s({action:l,location:m.location,delta:0})}function g(S){let p=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof S=="string"?S:wr(S);return h=h.replace(/ $/,"%20"),ee(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let m={get action(){return l},get location(){return e(o,a)},listen(S){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(af,d),s=S,()=>{o.removeEventListener(af,d),s=null}},createHref(S){return t(o,S)},createURL:g,encodeLocation(S){let p=g(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:y,go(S){return a.go(S)}};return m}var de;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(de||(de={}));const y1=new Set(["lazy","caseSensitive","path","id","index","children"]);function b1(e){return e.index===!0}function gi(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let a=[...n,String(i)],l=typeof o.id=="string"?o.id:a.join("-");if(ee(o.index!==!0||!o.children,"Cannot specify children on an index route"),ee(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),b1(o)){let s=we({},o,t(o),{id:l});return r[l]=s,s}else{let s=we({},o,t(o),{id:l,children:void 0});return r[l]=s,o.children&&(s.children=gi(o.children,t,a,r)),s}})}function or(e,t,n){return n===void 0&&(n="/"),Oa(e,t,n,!1)}function Oa(e,t,n,r){let o=typeof t=="string"?Jn(t):t,i=wo(o.pathname||"/",n);if(i==null)return null;let a=vm(e);x1(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let u=D1(i);l=z1(a[s],u,r)}return l}function w1(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function vm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(ee(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=hn([r,s.relativePath]),c=n.concat(s);i.children&&i.children.length>0&&(ee(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vm(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:C1(u,i.index),routesMeta:c})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of gm(i.path))o(i,a,s)}),t}function gm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=gm(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function x1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:R1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const k1=/^:[\w-]+$/,S1=3,P1=2,E1=1,O1=10,_1=-2,sf=e=>e==="*";function C1(e,t){let n=e.split("/"),r=n.length;return n.some(sf)&&(r+=_1),t&&(r+=P1),n.filter(o=>!sf(o)).reduce((o,i)=>o+(k1.test(i)?S1:i===""?E1:O1),r)}function R1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function z1(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=uf({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c),f=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=uf({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},c)),!d)return null;Object.assign(o,d.params),a.push({params:o,pathname:hn([i,d.pathname]),pathnameBase:N1(hn([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=hn([i,d.pathnameBase]))}return a}function uf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=T1(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:y}=c;if(f==="*"){let m=l[d]||"";a=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const g=l[d];return y&&!g?u[f]=void 0:u[f]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function T1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),vo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function D1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return vo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function M1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Jn(e):e;return{pathname:n?n.startsWith("/")?n:L1(n,t):t,search:A1(r),hash:F1(o)}}function L1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ps(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ym(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ol(e,t){let n=ym(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function _l(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Jn(e):(o=we({},e),ee(!o.pathname||!o.pathname.includes("?"),ps("?","pathname","search",o)),ee(!o.pathname||!o.pathname.includes("#"),ps("#","pathname","hash",o)),ee(!o.search||!o.search.includes("#"),ps("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;o.pathname=f.join("/")}l=d>=0?t[d]:"/"}let s=M1(o,l),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),N1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,F1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class nl{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Cl(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const bm=["post","put","patch","delete"],j1=new Set(bm),I1=["get",...bm],U1=new Set(I1),$1=new Set([301,302,303,307,308]),H1=new Set([307,308]),ms={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},q1={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Lo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},mc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,B1=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),wm="remix-router-transitions";function V1(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;ee(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let w=e.detectErrorBoundary;o=x=>({hasErrorBoundary:w(x)})}else o=B1;let i={},a=gi(e.routes,o,void 0,i),l,s=e.basename||"/",u=e.unstable_dataStrategy||Y1,c=e.unstable_patchRoutesOnNavigation,d=we({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),f=null,y=new Set,g=1e3,m=new Set,S=null,p=null,h=null,v=e.hydrationData!=null,k=or(a,e.history.location,s),O=null;if(k==null&&!c){let w=et(404,{pathname:e.history.location.pathname}),{matches:x,route:E}=yf(a);k=x,O={[E.id]:w}}k&&!e.hydrationData&&Ti(k,a,e.history.location.pathname).active&&(k=null);let R;if(k)if(k.some(w=>w.route.lazy))R=!1;else if(!k.some(w=>w.route.loader))R=!0;else if(d.v7_partialHydration){let w=e.hydrationData?e.hydrationData.loaderData:null,x=e.hydrationData?e.hydrationData.errors:null,E=C=>C.route.loader?typeof C.route.loader=="function"&&C.route.loader.hydrate===!0?!1:w&&w[C.route.id]!==void 0||x&&x[C.route.id]!==void 0:!0;if(x){let C=k.findIndex(I=>x[I.route.id]!==void 0);R=k.slice(0,C+1).every(E)}else R=k.every(E)}else R=e.hydrationData!=null;else if(R=!1,k=[],d.v7_partialHydration){let w=Ti(null,a,e.history.location.pathname);w.active&&w.matches&&(k=w.matches)}let z,b={historyAction:e.history.action,location:e.history.location,matches:k,initialized:R,navigation:ms,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||O,fetchers:new Map,blockers:new Map},D=Te.Pop,N=!1,q,W=!1,ie=new Map,oe=null,Ve=!1,Ue=!1,he=[],A=new Set,F=new Map,L=0,Y=-1,ae=new Map,Pe=new Set,Ae=new Map,kt=new Map,ge=new Set,at=new Map,Zt=new Map,Dl=new Map,en;function Ml(){if(f=e.history.listen(w=>{let{action:x,location:E,delta:C}=w;if(en){en(),en=void 0;return}vo(Zt.size===0||C!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let I=Rc({currentLocation:b.location,nextLocation:E,historyAction:x});if(I&&C!=null){let V=new Promise(X=>{en=X});e.history.go(C*-1),Ri(I,{state:"blocked",location:E,proceed(){Ri(I,{state:"proceeding",proceed:void 0,reset:void 0,location:E}),V.then(()=>e.history.go(C))},reset(){let X=new Map(b.blockers);X.set(I,Lo),$e({blockers:X})}});return}return er(x,E)}),n){fb(t,ie);let w=()=>hb(t,ie);t.addEventListener("pagehide",w),oe=()=>t.removeEventListener("pagehide",w)}return b.initialized||er(Te.Pop,b.location,{initialHydration:!0}),z}function Ll(){f&&f(),oe&&oe(),y.clear(),q&&q.abort(),b.fetchers.forEach((w,x)=>Ci(x)),b.blockers.forEach((w,x)=>Cc(x))}function Nl(w){return y.add(w),()=>y.delete(w)}function $e(w,x){x===void 0&&(x={}),b=we({},b,w);let E=[],C=[];d.v7_fetcherPersist&&b.fetchers.forEach((I,V)=>{I.state==="idle"&&(ge.has(V)?C.push(V):E.push(V))}),[...y].forEach(I=>I(b,{deletedFetchers:C,unstable_viewTransitionOpts:x.viewTransitionOpts,unstable_flushSync:x.flushSync===!0})),d.v7_fetcherPersist&&(E.forEach(I=>b.fetchers.delete(I)),C.forEach(I=>Ci(I)))}function St(w,x,E){var C,I;let{flushSync:V}=E===void 0?{}:E,X=b.actionData!=null&&b.navigation.formMethod!=null&&Ft(b.navigation.formMethod)&&b.navigation.state==="loading"&&((C=w.state)==null?void 0:C._isRedirect)!==!0,j;x.actionData?Object.keys(x.actionData).length>0?j=x.actionData:j=null:X?j=b.actionData:j=null;let Q=x.loaderData?vf(b.loaderData,x.loaderData,x.matches||[],x.errors):b.loaderData,H=b.blockers;H.size>0&&(H=new Map(H),H.forEach((ue,pe)=>H.set(pe,Lo)));let B=N===!0||b.navigation.formMethod!=null&&Ft(b.navigation.formMethod)&&((I=w.state)==null?void 0:I._isRedirect)!==!0;l&&(a=l,l=void 0),Ve||D===Te.Pop||(D===Te.Push?e.history.push(w,w.state):D===Te.Replace&&e.history.replace(w,w.state));let le;if(D===Te.Pop){let ue=ie.get(b.location.pathname);ue&&ue.has(w.pathname)?le={currentLocation:b.location,nextLocation:w}:ie.has(w.pathname)&&(le={currentLocation:w,nextLocation:b.location})}else if(W){let ue=ie.get(b.location.pathname);ue?ue.add(w.pathname):(ue=new Set([w.pathname]),ie.set(b.location.pathname,ue)),le={currentLocation:b.location,nextLocation:w}}$e(we({},x,{actionData:j,loaderData:Q,historyAction:D,location:w,initialized:!0,navigation:ms,revalidation:"idle",restoreScrollPosition:Tc(w,x.matches||b.matches),preventScrollReset:B,blockers:H}),{viewTransitionOpts:le,flushSync:V===!0}),D=Te.Pop,N=!1,W=!1,Ve=!1,Ue=!1,he=[]}async function xc(w,x){if(typeof w=="number"){e.history.go(w);return}let E=pu(b.location,b.matches,s,d.v7_prependBasename,w,d.v7_relativeSplatPath,x==null?void 0:x.fromRouteId,x==null?void 0:x.relative),{path:C,submission:I,error:V}=cf(d.v7_normalizeFormMethod,!1,E,x),X=b.location,j=vi(b.location,C,x&&x.state);j=we({},j,e.history.encodeLocation(j));let Q=x&&x.replace!=null?x.replace:void 0,H=Te.Push;Q===!0?H=Te.Replace:Q===!1||I!=null&&Ft(I.formMethod)&&I.formAction===b.location.pathname+b.location.search&&(H=Te.Replace);let B=x&&"preventScrollReset"in x?x.preventScrollReset===!0:void 0,le=(x&&x.unstable_flushSync)===!0,ue=Rc({currentLocation:X,nextLocation:j,historyAction:H});if(ue){Ri(ue,{state:"blocked",location:j,proceed(){Ri(ue,{state:"proceeding",proceed:void 0,reset:void 0,location:j}),xc(w,x)},reset(){let pe=new Map(b.blockers);pe.set(ue,Lo),$e({blockers:pe})}});return}return await er(H,j,{submission:I,pendingError:V,preventScrollReset:B,replace:x&&x.replace,enableViewTransition:x&&x.unstable_viewTransition,flushSync:le})}function Bm(){if(Al(),$e({revalidation:"loading"}),b.navigation.state!=="submitting"){if(b.navigation.state==="idle"){er(b.historyAction,b.location,{startUninterruptedRevalidation:!0});return}er(D||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation,enableViewTransition:W===!0})}}async function er(w,x,E){q&&q.abort(),q=null,D=w,Ve=(E&&E.startUninterruptedRevalidation)===!0,e0(b.location,b.matches),N=(E&&E.preventScrollReset)===!0,W=(E&&E.enableViewTransition)===!0;let C=l||a,I=E&&E.overrideNavigation,V=or(C,x,s),X=(E&&E.flushSync)===!0,j=Ti(V,C,x.pathname);if(j.active&&j.matches&&(V=j.matches),!V){let{error:ne,notFoundMatches:Fe,route:ze}=Fl(x.pathname);St(x,{matches:Fe,loaderData:{},errors:{[ze.id]:ne}},{flushSync:X});return}if(b.initialized&&!Ue&&rb(b.location,x)&&!(E&&E.submission&&Ft(E.submission.formMethod))){St(x,{matches:V},{flushSync:X});return}q=new AbortController;let Q=Dr(e.history,x,q.signal,E&&E.submission),H;if(E&&E.pendingError)H=[Vr(V).route.id,{type:de.error,error:E.pendingError}];else if(E&&E.submission&&Ft(E.submission.formMethod)){let ne=await Vm(Q,x,E.submission,V,j.active,{replace:E.replace,flushSync:X});if(ne.shortCircuited)return;if(ne.pendingActionResult){let[Fe,ze]=ne.pendingActionResult;if(vt(ze)&&Cl(ze.error)&&ze.error.status===404){q=null,St(x,{matches:ne.matches,loaderData:{},errors:{[Fe]:ze.error}});return}}V=ne.matches||V,H=ne.pendingActionResult,I=vs(x,E.submission),X=!1,j.active=!1,Q=Dr(e.history,Q.url,Q.signal)}let{shortCircuited:B,matches:le,loaderData:ue,errors:pe}=await Wm(Q,x,V,j.active,I,E&&E.submission,E&&E.fetcherSubmission,E&&E.replace,E&&E.initialHydration===!0,X,H);B||(q=null,St(x,we({matches:le||V},gf(H),{loaderData:ue,errors:pe})))}async function Vm(w,x,E,C,I,V){V===void 0&&(V={}),Al();let X=cb(x,E);if($e({navigation:X},{flushSync:V.flushSync===!0}),I){let H=await Di(C,x.pathname,w.signal);if(H.type==="aborted")return{shortCircuited:!0};if(H.type==="error"){let{boundaryId:B,error:le}=zi(x.pathname,H);return{matches:H.partialMatches,pendingActionResult:[B,{type:de.error,error:le}]}}else if(H.matches)C=H.matches;else{let{notFoundMatches:B,error:le,route:ue}=Fl(x.pathname);return{matches:B,pendingActionResult:[ue.id,{type:de.error,error:le}]}}}let j,Q=Ho(C,x);if(!Q.route.action&&!Q.route.lazy)j={type:de.error,error:et(405,{method:w.method,pathname:x.pathname,routeId:Q.route.id})};else if(j=(await So("action",b,w,[Q],C,null))[Q.route.id],w.signal.aborted)return{shortCircuited:!0};if(sr(j)){let H;return V&&V.replace!=null?H=V.replace:H=hf(j.response.headers.get("Location"),new URL(w.url),s)===b.location.pathname+b.location.search,await tr(w,j,!0,{submission:E,replace:H}),{shortCircuited:!0}}if(jn(j))throw et(400,{type:"defer-action"});if(vt(j)){let H=Vr(C,Q.route.id);return(V&&V.replace)!==!0&&(D=Te.Push),{matches:C,pendingActionResult:[H.route.id,j]}}return{matches:C,pendingActionResult:[Q.route.id,j]}}async function Wm(w,x,E,C,I,V,X,j,Q,H,B){let le=I||vs(x,V),ue=V||X||wf(le),pe=!Ve&&(!d.v7_partialHydration||!Q);if(C){if(pe){let Ee=kc(B);$e(we({navigation:le},Ee!==void 0?{actionData:Ee}:{}),{flushSync:H})}let J=await Di(E,x.pathname,w.signal);if(J.type==="aborted")return{shortCircuited:!0};if(J.type==="error"){let{boundaryId:Ee,error:ft}=zi(x.pathname,J);return{matches:J.partialMatches,loaderData:{},errors:{[Ee]:ft}}}else if(J.matches)E=J.matches;else{let{error:Ee,notFoundMatches:ft,route:Oe}=Fl(x.pathname);return{matches:ft,loaderData:{},errors:{[Oe.id]:Ee}}}}let ne=l||a,[Fe,ze]=df(e.history,b,E,ue,x,d.v7_partialHydration&&Q===!0,d.v7_skipActionErrorRevalidation,Ue,he,A,ge,Ae,Pe,ne,s,B);if(jl(J=>!(E&&E.some(Ee=>Ee.route.id===J))||Fe&&Fe.some(Ee=>Ee.route.id===J)),Y=++L,Fe.length===0&&ze.length===0){let J=Oc();return St(x,we({matches:E,loaderData:{},errors:B&&vt(B[1])?{[B[0]]:B[1].error}:null},gf(B),J?{fetchers:new Map(b.fetchers)}:{}),{flushSync:H}),{shortCircuited:!0}}if(pe){let J={};if(!C){J.navigation=le;let Ee=kc(B);Ee!==void 0&&(J.actionData=Ee)}ze.length>0&&(J.fetchers=Qm(ze)),$e(J,{flushSync:H})}ze.forEach(J=>{F.has(J.key)&&wn(J.key),J.controller&&F.set(J.key,J.controller)});let Po=()=>ze.forEach(J=>wn(J.key));q&&q.signal.addEventListener("abort",Po);let{loaderResults:nn,fetcherResults:Cr}=await Sc(b,E,Fe,ze,w);if(w.signal.aborted)return{shortCircuited:!0};q&&q.signal.removeEventListener("abort",Po),ze.forEach(J=>F.delete(J.key));let xn=ca(nn);if(xn)return await tr(w,xn.result,!0,{replace:j}),{shortCircuited:!0};if(xn=ca(Cr),xn)return Pe.add(xn.key),await tr(w,xn.result,!0,{replace:j}),{shortCircuited:!0};let{loaderData:Mi,errors:rn}=mf(b,E,Fe,nn,B,ze,Cr,at);at.forEach((J,Ee)=>{J.subscribe(ft=>{(ft||J.done)&&at.delete(Ee)})}),d.v7_partialHydration&&Q&&b.errors&&Object.entries(b.errors).filter(J=>{let[Ee]=J;return!Fe.some(ft=>ft.route.id===Ee)}).forEach(J=>{let[Ee,ft]=J;rn=Object.assign(rn||{},{[Ee]:ft})});let Li=Oc(),Ni=_c(Y),Ai=Li||Ni||ze.length>0;return we({matches:E,loaderData:Mi,errors:rn},Ai?{fetchers:new Map(b.fetchers)}:{})}function kc(w){if(w&&!vt(w[1]))return{[w[0]]:w[1].data};if(b.actionData)return Object.keys(b.actionData).length===0?null:b.actionData}function Qm(w){return w.forEach(x=>{let E=b.fetchers.get(x.key),C=No(void 0,E?E.data:void 0);b.fetchers.set(x.key,C)}),new Map(b.fetchers)}function Km(w,x,E,C){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");F.has(w)&&wn(w);let I=(C&&C.unstable_flushSync)===!0,V=l||a,X=pu(b.location,b.matches,s,d.v7_prependBasename,E,d.v7_relativeSplatPath,x,C==null?void 0:C.relative),j=or(V,X,s),Q=Ti(j,V,X);if(Q.active&&Q.matches&&(j=Q.matches),!j){tn(w,x,et(404,{pathname:X}),{flushSync:I});return}let{path:H,submission:B,error:le}=cf(d.v7_normalizeFormMethod,!0,X,C);if(le){tn(w,x,le,{flushSync:I});return}let ue=Ho(j,H);if(N=(C&&C.preventScrollReset)===!0,B&&Ft(B.formMethod)){Xm(w,x,H,ue,j,Q.active,I,B);return}Ae.set(w,{routeId:x,path:H}),Gm(w,x,H,ue,j,Q.active,I,B)}async function Xm(w,x,E,C,I,V,X,j){Al(),Ae.delete(w);function Q(Oe){if(!Oe.route.action&&!Oe.route.lazy){let on=et(405,{method:j.formMethod,pathname:E,routeId:x});return tn(w,x,on,{flushSync:X}),!0}return!1}if(!V&&Q(C))return;let H=b.fetchers.get(w);bn(w,db(j,H),{flushSync:X});let B=new AbortController,le=Dr(e.history,E,B.signal,j);if(V){let Oe=await Di(I,E,le.signal);if(Oe.type==="aborted")return;if(Oe.type==="error"){let{error:on}=zi(E,Oe);tn(w,x,on,{flushSync:X});return}else if(Oe.matches){if(I=Oe.matches,C=Ho(I,E),Q(C))return}else{tn(w,x,et(404,{pathname:E}),{flushSync:X});return}}F.set(w,B);let ue=L,ne=(await So("action",b,le,[C],I,w))[C.route.id];if(le.signal.aborted){F.get(w)===B&&F.delete(w);return}if(d.v7_fetcherPersist&&ge.has(w)){if(sr(ne)||vt(ne)){bn(w,En(void 0));return}}else{if(sr(ne))if(F.delete(w),Y>ue){bn(w,En(void 0));return}else return Pe.add(w),bn(w,No(j)),tr(le,ne,!1,{fetcherSubmission:j});if(vt(ne)){tn(w,x,ne.error);return}}if(jn(ne))throw et(400,{type:"defer-action"});let Fe=b.navigation.location||b.location,ze=Dr(e.history,Fe,B.signal),Po=l||a,nn=b.navigation.state!=="idle"?or(Po,b.navigation.location,s):b.matches;ee(nn,"Didn't find any matches after fetcher action");let Cr=++L;ae.set(w,Cr);let xn=No(j,ne.data);b.fetchers.set(w,xn);let[Mi,rn]=df(e.history,b,nn,j,Fe,!1,d.v7_skipActionErrorRevalidation,Ue,he,A,ge,Ae,Pe,Po,s,[C.route.id,ne]);rn.filter(Oe=>Oe.key!==w).forEach(Oe=>{let on=Oe.key,Mc=b.fetchers.get(on),r0=No(void 0,Mc?Mc.data:void 0);b.fetchers.set(on,r0),F.has(on)&&wn(on),Oe.controller&&F.set(on,Oe.controller)}),$e({fetchers:new Map(b.fetchers)});let Li=()=>rn.forEach(Oe=>wn(Oe.key));B.signal.addEventListener("abort",Li);let{loaderResults:Ni,fetcherResults:Ai}=await Sc(b,nn,Mi,rn,ze);if(B.signal.aborted)return;B.signal.removeEventListener("abort",Li),ae.delete(w),F.delete(w),rn.forEach(Oe=>F.delete(Oe.key));let J=ca(Ni);if(J)return tr(ze,J.result,!1);if(J=ca(Ai),J)return Pe.add(J.key),tr(ze,J.result,!1);let{loaderData:Ee,errors:ft}=mf(b,nn,Mi,Ni,void 0,rn,Ai,at);if(b.fetchers.has(w)){let Oe=En(ne.data);b.fetchers.set(w,Oe)}_c(Cr),b.navigation.state==="loading"&&Cr>Y?(ee(D,"Expected pending action"),q&&q.abort(),St(b.navigation.location,{matches:nn,loaderData:Ee,errors:ft,fetchers:new Map(b.fetchers)})):($e({errors:ft,loaderData:vf(b.loaderData,Ee,nn,ft),fetchers:new Map(b.fetchers)}),Ue=!1)}async function Gm(w,x,E,C,I,V,X,j){let Q=b.fetchers.get(w);bn(w,No(j,Q?Q.data:void 0),{flushSync:X});let H=new AbortController,B=Dr(e.history,E,H.signal);if(V){let ne=await Di(I,E,B.signal);if(ne.type==="aborted")return;if(ne.type==="error"){let{error:Fe}=zi(E,ne);tn(w,x,Fe,{flushSync:X});return}else if(ne.matches)I=ne.matches,C=Ho(I,E);else{tn(w,x,et(404,{pathname:E}),{flushSync:X});return}}F.set(w,H);let le=L,pe=(await So("loader",b,B,[C],I,w))[C.route.id];if(jn(pe)&&(pe=await vc(pe,B.signal,!0)||pe),F.get(w)===H&&F.delete(w),!B.signal.aborted){if(ge.has(w)){bn(w,En(void 0));return}if(sr(pe))if(Y>le){bn(w,En(void 0));return}else{Pe.add(w),await tr(B,pe,!1);return}if(vt(pe)){tn(w,x,pe.error);return}ee(!jn(pe),"Unhandled fetcher deferred data"),bn(w,En(pe.data))}}async function tr(w,x,E,C){let{submission:I,fetcherSubmission:V,replace:X}=C===void 0?{}:C;x.response.headers.has("X-Remix-Revalidate")&&(Ue=!0);let j=x.response.headers.get("Location");ee(j,"Expected a Location header on the redirect Response"),j=hf(j,new URL(w.url),s);let Q=vi(b.location,j,{_isRedirect:!0});if(n){let ne=!1;if(x.response.headers.has("X-Remix-Reload-Document"))ne=!0;else if(mc.test(j)){const Fe=e.history.createURL(j);ne=Fe.origin!==t.location.origin||wo(Fe.pathname,s)==null}if(ne){X?t.location.replace(j):t.location.assign(j);return}}q=null;let H=X===!0||x.response.headers.has("X-Remix-Replace")?Te.Replace:Te.Push,{formMethod:B,formAction:le,formEncType:ue}=b.navigation;!I&&!V&&B&&le&&ue&&(I=wf(b.navigation));let pe=I||V;if(H1.has(x.response.status)&&pe&&Ft(pe.formMethod))await er(H,Q,{submission:we({},pe,{formAction:j}),preventScrollReset:N,enableViewTransition:E?W:void 0});else{let ne=vs(Q,I);await er(H,Q,{overrideNavigation:ne,fetcherSubmission:V,preventScrollReset:N,enableViewTransition:E?W:void 0})}}async function So(w,x,E,C,I,V){let X,j={};try{X=await J1(u,w,x,E,C,I,V,i,o)}catch(Q){return C.forEach(H=>{j[H.route.id]={type:de.error,error:Q}}),j}for(let[Q,H]of Object.entries(X))if(ib(H)){let B=H.result;j[Q]={type:de.redirect,response:tb(B,E,Q,I,s,d.v7_relativeSplatPath)}}else j[Q]=await eb(H);return j}async function Sc(w,x,E,C,I){let V=w.matches,X=So("loader",w,I,E,x,null),j=Promise.all(C.map(async B=>{if(B.matches&&B.match&&B.controller){let ue=(await So("loader",w,Dr(e.history,B.path,B.controller.signal),[B.match],B.matches,B.key))[B.match.route.id];return{[B.key]:ue}}else return Promise.resolve({[B.key]:{type:de.error,error:et(404,{pathname:B.path})}})})),Q=await X,H=(await j).reduce((B,le)=>Object.assign(B,le),{});return await Promise.all([sb(x,Q,I.signal,V,w.loaderData),ub(x,H,C)]),{loaderResults:Q,fetcherResults:H}}function Al(){Ue=!0,he.push(...jl()),Ae.forEach((w,x)=>{F.has(x)&&(A.add(x),wn(x))})}function bn(w,x,E){E===void 0&&(E={}),b.fetchers.set(w,x),$e({fetchers:new Map(b.fetchers)},{flushSync:(E&&E.flushSync)===!0})}function tn(w,x,E,C){C===void 0&&(C={});let I=Vr(b.matches,x);Ci(w),$e({errors:{[I.route.id]:E},fetchers:new Map(b.fetchers)},{flushSync:(C&&C.flushSync)===!0})}function Pc(w){return d.v7_fetcherPersist&&(kt.set(w,(kt.get(w)||0)+1),ge.has(w)&&ge.delete(w)),b.fetchers.get(w)||q1}function Ci(w){let x=b.fetchers.get(w);F.has(w)&&!(x&&x.state==="loading"&&ae.has(w))&&wn(w),Ae.delete(w),ae.delete(w),Pe.delete(w),ge.delete(w),A.delete(w),b.fetchers.delete(w)}function Ym(w){if(d.v7_fetcherPersist){let x=(kt.get(w)||0)-1;x<=0?(kt.delete(w),ge.add(w)):kt.set(w,x)}else Ci(w);$e({fetchers:new Map(b.fetchers)})}function wn(w){let x=F.get(w);ee(x,"Expected fetch controller: "+w),x.abort(),F.delete(w)}function Ec(w){for(let x of w){let E=Pc(x),C=En(E.data);b.fetchers.set(x,C)}}function Oc(){let w=[],x=!1;for(let E of Pe){let C=b.fetchers.get(E);ee(C,"Expected fetcher: "+E),C.state==="loading"&&(Pe.delete(E),w.push(E),x=!0)}return Ec(w),x}function _c(w){let x=[];for(let[E,C]of ae)if(C<w){let I=b.fetchers.get(E);ee(I,"Expected fetcher: "+E),I.state==="loading"&&(wn(E),ae.delete(E),x.push(E))}return Ec(x),x.length>0}function Jm(w,x){let E=b.blockers.get(w)||Lo;return Zt.get(w)!==x&&Zt.set(w,x),E}function Cc(w){b.blockers.delete(w),Zt.delete(w)}function Ri(w,x){let E=b.blockers.get(w)||Lo;ee(E.state==="unblocked"&&x.state==="blocked"||E.state==="blocked"&&x.state==="blocked"||E.state==="blocked"&&x.state==="proceeding"||E.state==="blocked"&&x.state==="unblocked"||E.state==="proceeding"&&x.state==="unblocked","Invalid blocker state transition: "+E.state+" -> "+x.state);let C=new Map(b.blockers);C.set(w,x),$e({blockers:C})}function Rc(w){let{currentLocation:x,nextLocation:E,historyAction:C}=w;if(Zt.size===0)return;Zt.size>1&&vo(!1,"A router only supports one blocker at a time");let I=Array.from(Zt.entries()),[V,X]=I[I.length-1],j=b.blockers.get(V);if(!(j&&j.state==="proceeding")&&X({currentLocation:x,nextLocation:E,historyAction:C}))return V}function Fl(w){let x=et(404,{pathname:w}),E=l||a,{matches:C,route:I}=yf(E);return jl(),{notFoundMatches:C,route:I,error:x}}function zi(w,x){return{boundaryId:Vr(x.partialMatches).route.id,error:et(400,{type:"route-discovery",pathname:w,message:x.error!=null&&"message"in x.error?x.error:String(x.error)})}}function jl(w){let x=[];return at.forEach((E,C)=>{(!w||w(C))&&(E.cancel(),x.push(C),at.delete(C))}),x}function Zm(w,x,E){if(S=w,h=x,p=E||null,!v&&b.navigation===ms){v=!0;let C=Tc(b.location,b.matches);C!=null&&$e({restoreScrollPosition:C})}return()=>{S=null,h=null,p=null}}function zc(w,x){return p&&p(w,x.map(C=>w1(C,b.loaderData)))||w.key}function e0(w,x){if(S&&h){let E=zc(w,x);S[E]=h()}}function Tc(w,x){if(S){let E=zc(w,x),C=S[E];if(typeof C=="number")return C}return null}function Ti(w,x,E){if(c){if(m.has(E))return{active:!1,matches:w};if(w){if(Object.keys(w[0].params).length>0)return{active:!0,matches:Oa(x,E,s,!0)}}else return{active:!0,matches:Oa(x,E,s,!0)||[]}}return{active:!1,matches:null}}async function Di(w,x,E){let C=w;for(;;){let I=l==null,V=l||a;try{await X1(c,x,C,V,i,o,Dl,E)}catch(Q){return{type:"error",error:Q,partialMatches:C}}finally{I&&(a=[...a])}if(E.aborted)return{type:"aborted"};let X=or(V,x,s);if(X)return Dc(x,m),{type:"success",matches:X};let j=Oa(V,x,s,!0);if(!j||C.length===j.length&&C.every((Q,H)=>Q.route.id===j[H].route.id))return Dc(x,m),{type:"success",matches:null};C=j}}function Dc(w,x){if(x.size>=g){let E=x.values().next().value;x.delete(E)}x.add(w)}function t0(w){i={},l=gi(w,o,void 0,i)}function n0(w,x){let E=l==null;km(w,x,l||a,i,o),E&&(a=[...a],$e({}))}return z={get basename(){return s},get future(){return d},get state(){return b},get routes(){return a},get window(){return t},initialize:Ml,subscribe:Nl,enableScrollRestoration:Zm,navigate:xc,fetch:Km,revalidate:Bm,createHref:w=>e.history.createHref(w),encodeLocation:w=>e.history.encodeLocation(w),getFetcher:Pc,deleteFetcher:Ym,dispose:Ll,getBlocker:Jm,deleteBlocker:Cc,patchRoutes:n0,_internalFetchControllers:F,_internalActiveDeferreds:at,_internalSetRoutes:t0},z}function W1(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function pu(e,t,n,r,o,i,a,l){let s,u;if(a){s=[];for(let d of t)if(s.push(d),d.route.id===a){u=d;break}}else s=t,u=t[t.length-1];let c=_l(o||".",Ol(s,i),wo(e.pathname,n)||e.pathname,l==="path");return o==null&&(c.search=e.search,c.hash=e.hash),(o==null||o===""||o===".")&&u&&u.route.index&&!gc(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:hn([n,c.pathname])),wr(c)}function cf(e,t,n,r){if(!r||!W1(r))return{path:n};if(r.formMethod&&!lb(r.formMethod))return{path:n,error:et(405,{method:r.formMethod})};let o=()=>({path:n,error:et(400,{type:"invalid-body"})}),i=r.formMethod||"get",a=e?i.toUpperCase():i.toLowerCase(),l=Sm(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Ft(a))return o();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,g)=>{let[m,S]=g;return""+y+m+"="+S+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Ft(a))return o();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return o()}}}ee(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=mu(r.formData),u=r.formData;else if(r.body instanceof FormData)s=mu(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=pf(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=pf(s)}catch{return o()}let c={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Ft(c.formMethod))return{path:n,submission:c};let d=Jn(n);return t&&d.search&&gc(d.search)&&s.append("index",""),d.search="?"+s,{path:wr(d),submission:c}}function Q1(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function df(e,t,n,r,o,i,a,l,s,u,c,d,f,y,g,m){let S=m?vt(m[1])?m[1].error:m[1].data:void 0,p=e.createURL(t.location),h=e.createURL(o),v=m&&vt(m[1])?m[0]:void 0,k=v?Q1(n,v):n,O=m?m[1].statusCode:void 0,R=a&&O&&O>=400,z=k.filter((D,N)=>{let{route:q}=D;if(q.lazy)return!0;if(q.loader==null)return!1;if(i)return typeof q.loader!="function"||q.loader.hydrate?!0:t.loaderData[q.id]===void 0&&(!t.errors||t.errors[q.id]===void 0);if(K1(t.loaderData,t.matches[N],D)||s.some(oe=>oe===D.route.id))return!0;let W=t.matches[N],ie=D;return ff(D,we({currentUrl:p,currentParams:W.params,nextUrl:h,nextParams:ie.params},r,{actionResult:S,actionStatus:O,defaultShouldRevalidate:R?!1:l||p.pathname+p.search===h.pathname+h.search||p.search!==h.search||xm(W,ie)}))}),b=[];return d.forEach((D,N)=>{if(i||!n.some(Ve=>Ve.route.id===D.routeId)||c.has(N))return;let q=or(y,D.path,g);if(!q){b.push({key:N,routeId:D.routeId,path:D.path,matches:null,match:null,controller:null});return}let W=t.fetchers.get(N),ie=Ho(q,D.path),oe=!1;f.has(N)?oe=!1:u.has(N)?(u.delete(N),oe=!0):W&&W.state!=="idle"&&W.data===void 0?oe=l:oe=ff(ie,we({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},r,{actionResult:S,actionStatus:O,defaultShouldRevalidate:R?!1:l})),oe&&b.push({key:N,routeId:D.routeId,path:D.path,matches:q,match:ie,controller:new AbortController})}),[z,b]}function K1(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function xm(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function ff(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function X1(e,t,n,r,o,i,a,l){let s=[t,...n.map(u=>u.route.id)].join("-");try{let u=a.get(s);u||(u=e({path:t,matches:n,patch:(c,d)=>{l.aborted||km(c,d,r,o,i)}}),a.set(s,u)),u&&ob(u)&&await u}finally{a.delete(s)}}function km(e,t,n,r,o){if(e){var i;let a=r[e];ee(a,"No route found to patch children into: routeId = "+e);let l=gi(t,o,[e,"patch",String(((i=a.children)==null?void 0:i.length)||"0")],r);a.children?a.children.push(...l):a.children=l}else{let a=gi(t,o,["patch",String(n.length||"0")],r);n.push(...a)}}async function G1(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];ee(o,"No route found in manifest");let i={};for(let a in r){let s=o[a]!==void 0&&a!=="hasErrorBoundary";vo(!s,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!y1.has(a)&&(i[a]=r[a])}Object.assign(o,i),Object.assign(o,we({},t(o),{lazy:void 0}))}async function Y1(e){let{matches:t}=e,n=t.filter(o=>o.shouldLoad);return(await Promise.all(n.map(o=>o.resolve()))).reduce((o,i,a)=>Object.assign(o,{[n[a].route.id]:i}),{})}async function J1(e,t,n,r,o,i,a,l,s,u){let c=i.map(y=>y.route.lazy?G1(y.route,s,l):void 0),d=i.map((y,g)=>{let m=c[g],S=o.some(h=>h.route.id===y.route.id);return we({},y,{shouldLoad:S,resolve:async h=>(h&&r.method==="GET"&&(y.route.lazy||y.route.loader)&&(S=!0),S?Z1(t,r,y,m,h,u):Promise.resolve({type:de.data,result:void 0}))})}),f=await e({matches:d,request:r,params:i[0].params,fetcherKey:a,context:u});try{await Promise.all(c)}catch{}return f}async function Z1(e,t,n,r,o,i){let a,l,s=u=>{let c,d=new Promise((g,m)=>c=m);l=()=>c(),t.signal.addEventListener("abort",l);let f=g=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:i},...g!==void 0?[g]:[]),y=(async()=>{try{return{type:"data",result:await(o?o(m=>f(m)):f())}}catch(g){return{type:"error",result:g}}})();return Promise.race([y,d])};try{let u=n.route[e];if(r)if(u){let c,[d]=await Promise.all([s(u).catch(f=>{c=f}),r]);if(c!==void 0)throw c;a=d}else if(await r,u=n.route[e],u)a=await s(u);else if(e==="action"){let c=new URL(t.url),d=c.pathname+c.search;throw et(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:de.data,result:void 0};else if(u)a=await s(u);else{let c=new URL(t.url),d=c.pathname+c.search;throw et(404,{pathname:d})}ee(a.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:de.error,result:u}}finally{l&&t.signal.removeEventListener("abort",l)}return a}async function eb(e){let{result:t,type:n}=e;if(Pm(t)){let u;try{let c=t.headers.get("Content-Type");c&&/\bapplication\/json\b/.test(c)?t.body==null?u=null:u=await t.json():u=await t.text()}catch(c){return{type:de.error,error:c}}return n===de.error?{type:de.error,error:new nl(t.status,t.statusText,u),statusCode:t.status,headers:t.headers}:{type:de.data,data:u,statusCode:t.status,headers:t.headers}}if(n===de.error){if(bf(t)){var r;if(t.data instanceof Error){var o;return{type:de.error,error:t.data,statusCode:(o=t.init)==null?void 0:o.status}}t=new nl(((r=t.init)==null?void 0:r.status)||500,void 0,t.data)}return{type:de.error,error:t,statusCode:Cl(t)?t.status:void 0}}if(ab(t)){var i,a;return{type:de.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((a=t.init)==null?void 0:a.headers)&&new Headers(t.init.headers)}}if(bf(t)){var l,s;return{type:de.data,data:t.data,statusCode:(l=t.init)==null?void 0:l.status,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}}return{type:de.data,data:t}}function tb(e,t,n,r,o,i){let a=e.headers.get("Location");if(ee(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!mc.test(a)){let l=r.slice(0,r.findIndex(s=>s.route.id===n)+1);a=pu(new URL(t.url),l,o,!0,a,i),e.headers.set("Location",a)}return e}function hf(e,t,n){if(mc.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=wo(o.pathname,n)!=null;if(o.origin===t.origin&&i)return o.pathname+o.search+o.hash}return e}function Dr(e,t,n,r){let o=e.createURL(Sm(t)).toString(),i={signal:n};if(r&&Ft(r.formMethod)){let{formMethod:a,formEncType:l}=r;i.method=a.toUpperCase(),l==="application/json"?(i.headers=new Headers({"Content-Type":l}),i.body=JSON.stringify(r.json)):l==="text/plain"?i.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?i.body=mu(r.formData):i.body=r.formData}return new Request(o,i)}function mu(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function pf(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function nb(e,t,n,r,o){let i={},a=null,l,s=!1,u={},c=n&&vt(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let f=d.route.id,y=t[f];if(ee(!sr(y),"Cannot handle redirect results in processLoaderData"),vt(y)){let g=y.error;c!==void 0&&(g=c,c=void 0),a=a||{};{let m=Vr(e,f);a[m.route.id]==null&&(a[m.route.id]=g)}i[f]=void 0,s||(s=!0,l=Cl(y.error)?y.error.status:500),y.headers&&(u[f]=y.headers)}else jn(y)?(r.set(f,y.deferredData),i[f]=y.deferredData.data,y.statusCode!=null&&y.statusCode!==200&&!s&&(l=y.statusCode),y.headers&&(u[f]=y.headers)):(i[f]=y.data,y.statusCode&&y.statusCode!==200&&!s&&(l=y.statusCode),y.headers&&(u[f]=y.headers))}),c!==void 0&&n&&(a={[n[0]]:c},i[n[0]]=void 0),{loaderData:i,errors:a,statusCode:l||200,loaderHeaders:u}}function mf(e,t,n,r,o,i,a,l){let{loaderData:s,errors:u}=nb(t,r,o,l);return i.forEach(c=>{let{key:d,match:f,controller:y}=c,g=a[d];if(ee(g,"Did not find corresponding fetcher result"),!(y&&y.signal.aborted))if(vt(g)){let m=Vr(e.matches,f==null?void 0:f.route.id);u&&u[m.route.id]||(u=we({},u,{[m.route.id]:g.error})),e.fetchers.delete(d)}else if(sr(g))ee(!1,"Unhandled fetcher revalidation redirect");else if(jn(g))ee(!1,"Unhandled fetcher deferred data");else{let m=En(g.data);e.fetchers.set(d,m)}}),{loaderData:s,errors:u}}function vf(e,t,n,r){let o=we({},t);for(let i of n){let a=i.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(o[a]=t[a]):e[a]!==void 0&&i.route.loader&&(o[a]=e[a]),r&&r.hasOwnProperty(a))break}return o}function gf(e){return e?vt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Vr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function yf(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function et(e,t){let{pathname:n,routeId:r,method:o,type:i,message:a}=t===void 0?{}:t,l="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(l="Bad Request",i==="route-discovery"?s='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+a):o&&n&&r?s="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?s="defer() is not supported in actions":i==="invalid-body"&&(s="Unable to encode submission body")):e===403?(l="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",s='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",o&&n&&r?s="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new nl(e||500,l,new Error(s),!0)}function ca(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,o]=t[n];if(sr(o))return{key:r,result:o}}}function Sm(e){let t=typeof e=="string"?Jn(e):e;return wr(we({},t,{hash:""}))}function rb(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function ob(e){return typeof e=="object"&&e!=null&&"then"in e}function ib(e){return Pm(e.result)&&$1.has(e.result.status)}function jn(e){return e.type===de.deferred}function vt(e){return e.type===de.error}function sr(e){return(e&&e.type)===de.redirect}function bf(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function ab(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Pm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function lb(e){return U1.has(e.toLowerCase())}function Ft(e){return j1.has(e.toLowerCase())}async function sb(e,t,n,r,o){let i=Object.entries(t);for(let a=0;a<i.length;a++){let[l,s]=i[a],u=e.find(f=>(f==null?void 0:f.route.id)===l);if(!u)continue;let c=r.find(f=>f.route.id===u.route.id),d=c!=null&&!xm(c,u)&&(o&&o[u.route.id])!==void 0;jn(s)&&d&&await vc(s,n,!1).then(f=>{f&&(t[l]=f)})}}async function ub(e,t,n){for(let r=0;r<n.length;r++){let{key:o,routeId:i,controller:a}=n[r],l=t[o];e.find(u=>(u==null?void 0:u.route.id)===i)&&jn(l)&&(ee(a,"Expected an AbortController for revalidating fetcher deferred result"),await vc(l,a.signal,!0).then(u=>{u&&(t[o]=u)}))}}async function vc(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:de.data,data:e.deferredData.unwrappedData}}catch(o){return{type:de.error,error:o}}return{type:de.data,data:e.deferredData.data}}}function gc(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Ho(e,t){let n=typeof t=="string"?Jn(t).search:t.search;if(e[e.length-1].route.index&&gc(n||""))return e[e.length-1];let r=ym(e);return r[r.length-1]}function wf(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:a}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function vs(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function cb(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function No(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function db(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function En(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function fb(e,t){try{let n=e.sessionStorage.getItem(wm);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function hb(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(wm,JSON.stringify(n))}catch(r){vo(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rl.apply(this,arguments)}const Rl=P.createContext(null),Em=P.createContext(null),Zn=P.createContext(null),yc=P.createContext(null),Jt=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Om=P.createContext(null);function pb(e,t){let{relative:n}=t===void 0?{}:t;xo()||ee(!1);let{basename:r,navigator:o}=P.useContext(Zn),{hash:i,pathname:a,search:l}=Cm(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:hn([r,a])),o.createHref({pathname:s,search:l,hash:i})}function xo(){return P.useContext(yc)!=null}function ko(){return xo()||ee(!1),P.useContext(yc).location}function _m(e){P.useContext(Zn).static||P.useLayoutEffect(e)}function bc(){let{isDataRoute:e}=P.useContext(Jt);return e?_b():mb()}function mb(){xo()||ee(!1);let e=P.useContext(Rl),{basename:t,future:n,navigator:r}=P.useContext(Zn),{matches:o}=P.useContext(Jt),{pathname:i}=ko(),a=JSON.stringify(Ol(o,n.v7_relativeSplatPath)),l=P.useRef(!1);return _m(()=>{l.current=!0}),P.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=_l(u,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:hn([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,a,i,e])}const vb=P.createContext(null);function gb(e){let t=P.useContext(Jt).outlet;return t&&P.createElement(vb.Provider,{value:e},t)}function $w(){let{matches:e}=P.useContext(Jt),t=e[e.length-1];return t?t.params:{}}function Cm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=P.useContext(Zn),{matches:o}=P.useContext(Jt),{pathname:i}=ko(),a=JSON.stringify(Ol(o,r.v7_relativeSplatPath));return P.useMemo(()=>_l(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function yb(e,t,n,r){xo()||ee(!1);let{navigator:o}=P.useContext(Zn),{matches:i}=P.useContext(Jt),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=ko(),c;c=u;let d=c.pathname||"/",f=d;if(s!=="/"){let m=s.replace(/^\//,"").split("/");f="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let y=or(e,{pathname:f});return Sb(y&&y.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:hn([s,o.encodeLocation?o.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?s:hn([s,o.encodeLocation?o.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,n,r)}function bb(){let e=Tm(),t=Cl(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:o},n):null,null)}const wb=P.createElement(bb,null);class xb extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?P.createElement(Jt.Provider,{value:this.props.routeContext},P.createElement(Om.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kb(e){let{routeContext:t,match:n,children:r}=e,o=P.useContext(Rl);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Jt.Provider,{value:t},r)}function Sb(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let c=a.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);c>=0||ee(!1),a=a.slice(0,Math.min(a.length,c+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let d=a[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:y}=n,g=d.route.loader&&f[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||g){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,d,f)=>{let y,g=!1,m=null,S=null;n&&(y=l&&d.route.id?l[d.route.id]:void 0,m=d.route.errorElement||wb,s&&(u<0&&f===0?(g=!0,S=null):u===f&&(g=!0,S=d.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,f+1)),h=()=>{let v;return y?v=m:g?v=S:d.route.Component?v=P.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,P.createElement(kb,{match:d,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?P.createElement(xb,{location:n.location,revalidation:n.revalidation,component:m,error:y,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var Rm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Rm||{}),ol=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ol||{});function Pb(e){let t=P.useContext(Rl);return t||ee(!1),t}function Eb(e){let t=P.useContext(Em);return t||ee(!1),t}function Ob(e){let t=P.useContext(Jt);return t||ee(!1),t}function zm(e){let t=Ob(),n=t.matches[t.matches.length-1];return n.route.id||ee(!1),n.route.id}function Tm(){var e;let t=P.useContext(Om),n=Eb(ol.UseRouteError),r=zm(ol.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function _b(){let{router:e}=Pb(Rm.UseNavigateStable),t=zm(ol.UseNavigateStable),n=P.useRef(!1);return _m(()=>{n.current=!0}),P.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,rl({fromRouteId:t},i)))},[e,t])}function Cb(e){let{to:t,replace:n,state:r,relative:o}=e;xo()||ee(!1);let{future:i,static:a}=P.useContext(Zn),{matches:l}=P.useContext(Jt),{pathname:s}=ko(),u=bc(),c=_l(t,Ol(l,i.v7_relativeSplatPath),s,o==="path"),d=JSON.stringify(c);return P.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:o}),[u,d,o,n,r]),null}function Rb(e){return gb(e.context)}function zb(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Te.Pop,navigator:i,static:a=!1,future:l}=e;xo()&&ee(!1);let s=t.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:s,navigator:i,static:a,future:rl({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=Jn(r));let{pathname:c="/",search:d="",hash:f="",state:y=null,key:g="default"}=r,m=P.useMemo(()=>{let S=wo(c,s);return S==null?null:{location:{pathname:S,search:d,hash:f,state:y,key:g},navigationType:o}},[s,c,d,f,y,g,o]);return m==null?null:P.createElement(Zn.Provider,{value:u},P.createElement(yc.Provider,{children:n,value:m}))}new Promise(()=>{});function Tb(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:P.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:P.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:P.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yi(){return yi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yi.apply(this,arguments)}function Db(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Mb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Lb(e,t){return e.button===0&&(!t||t==="_self")&&!Mb(e)}function vu(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(o=>[n,o]):[[n,r]])},[]))}function Nb(e,t){let n=vu(e);return t&&t.forEach((r,o)=>{n.has(o)||t.getAll(o).forEach(i=>{n.append(o,i)})}),n}const Ab=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Fb="6";try{window.__reactRouterVersion=Fb}catch{}function jb(e,t){return V1({basename:t==null?void 0:t.basename,future:yi({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:m1({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Ib(),routes:e,mapRouteProperties:Tb,unstable_dataStrategy:t==null?void 0:t.unstable_dataStrategy,unstable_patchRoutesOnNavigation:t==null?void 0:t.unstable_patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function Ib(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=yi({},t,{errors:Ub(t.errors)})),t}function Ub(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new nl(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let a=new i(o.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const $b=P.createContext({isTransitioning:!1}),Hb=P.createContext(new Map),qb="startTransition",xf=b0[qb],Bb="flushSync",kf=Tg[Bb];function Vb(e){xf?xf(e):e()}function Ao(e){kf?kf(e):e()}class Wb{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function Qb(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=P.useState(n.state),[a,l]=P.useState(),[s,u]=P.useState({isTransitioning:!1}),[c,d]=P.useState(),[f,y]=P.useState(),[g,m]=P.useState(),S=P.useRef(new Map),{v7_startTransition:p}=r||{},h=P.useCallback(b=>{p?Vb(b):b()},[p]),v=P.useCallback((b,D)=>{let{deletedFetchers:N,unstable_flushSync:q,unstable_viewTransitionOpts:W}=D;N.forEach(oe=>S.current.delete(oe)),b.fetchers.forEach((oe,Ve)=>{oe.data!==void 0&&S.current.set(Ve,oe.data)});let ie=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!W||ie){q?Ao(()=>i(b)):h(()=>i(b));return}if(q){Ao(()=>{f&&(c&&c.resolve(),f.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:W.currentLocation,nextLocation:W.nextLocation})});let oe=n.window.document.startViewTransition(()=>{Ao(()=>i(b))});oe.finished.finally(()=>{Ao(()=>{d(void 0),y(void 0),l(void 0),u({isTransitioning:!1})})}),Ao(()=>y(oe));return}f?(c&&c.resolve(),f.skipTransition(),m({state:b,currentLocation:W.currentLocation,nextLocation:W.nextLocation})):(l(b),u({isTransitioning:!0,flushSync:!1,currentLocation:W.currentLocation,nextLocation:W.nextLocation}))},[n.window,f,c,S,h]);P.useLayoutEffect(()=>n.subscribe(v),[n,v]),P.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new Wb)},[s]),P.useEffect(()=>{if(c&&a&&n.window){let b=a,D=c.promise,N=n.window.document.startViewTransition(async()=>{h(()=>i(b)),await D});N.finished.finally(()=>{d(void 0),y(void 0),l(void 0),u({isTransitioning:!1})}),y(N)}},[h,a,c,n.window]),P.useEffect(()=>{c&&a&&o.location.key===a.location.key&&c.resolve()},[c,f,o.location,a]),P.useEffect(()=>{!s.isTransitioning&&g&&(l(g.state),u({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),m(void 0))},[s.isTransitioning,g]),P.useEffect(()=>{},[]);let k=P.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:b=>n.navigate(b),push:(b,D,N)=>n.navigate(b,{state:D,preventScrollReset:N==null?void 0:N.preventScrollReset}),replace:(b,D,N)=>n.navigate(b,{replace:!0,state:D,preventScrollReset:N==null?void 0:N.preventScrollReset})}),[n]),O=n.basename||"/",R=P.useMemo(()=>({router:n,navigator:k,static:!1,basename:O}),[n,k,O]),z=P.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return P.createElement(P.Fragment,null,P.createElement(Rl.Provider,{value:R},P.createElement(Em.Provider,{value:o},P.createElement(Hb.Provider,{value:S.current},P.createElement($b.Provider,{value:s},P.createElement(zb,{basename:O,location:o.location,navigationType:o.historyAction,navigator:k,future:z},o.initialized||n.future.v7_partialHydration?P.createElement(Kb,{routes:n.routes,future:n.future,state:o}):t))))),null)}const Kb=P.memo(Xb);function Xb(e){let{routes:t,future:n,state:r}=e;return yb(t,void 0,r,n)}const Gb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hw=P.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:c,unstable_viewTransition:d}=t,f=Db(t,Ab),{basename:y}=P.useContext(Zn),g,m=!1;if(typeof u=="string"&&Yb.test(u)&&(g=u,Gb))try{let v=new URL(window.location.href),k=u.startsWith("//")?new URL(v.protocol+u):new URL(u),O=wo(k.pathname,y);k.origin===v.origin&&O!=null?u=O+k.search+k.hash:m=!0}catch{}let S=pb(u,{relative:o}),p=Jb(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:o,unstable_viewTransition:d});function h(v){r&&r(v),v.defaultPrevented||p(v)}return P.createElement("a",yi({},f,{href:g||S,onClick:m||i?r:h,ref:n,target:s}))});var Sf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sf||(Sf={}));var Pf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pf||(Pf={}));function Jb(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=bc(),u=ko(),c=Cm(e,{relative:a});return P.useCallback(d=>{if(Lb(d,n)){d.preventDefault();let f=r!==void 0?r:wr(u)===wr(c);s(e,{replace:f,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[u,s,c,r,o,n,e,i,a,l])}function qw(e){let t=P.useRef(vu(e)),n=P.useRef(!1),r=ko(),o=P.useMemo(()=>Nb(r.search,n.current?null:t.current),[r.search]),i=bc(),a=P.useCallback((l,s)=>{const u=vu(typeof l=="function"?l(o):l);n.current=!0,i("?"+u,s)},[i,o]);return[o,a]}function Zb({className:e}){return G.jsxs("div",{className:fm("flex items-center flex-col justify-center ",e),children:[G.jsx(u1,{color:"#41d9ce",size:"medium",text:"",textColor:""}),G.jsx("p",{className:"text-primary text-lg",children:"加载中..."})]})}function ew(){const e=P.useRef(null),t=n=>new Promise((r,o)=>{const i=new Image;i.src=n,i.onload=()=>r(i),i.onerror=o});return P.useEffect(()=>{const n=e.current;if(!n)return;const r=n.getContext("2d"),o="/project-preview/poster-bg.png",i="/project-preview/bar-code.gif";return(async()=>{try{const[l,s]=await Promise.all([t(o),t(i)]);r==null||r.drawImage(l,0,0,n.width,n.height),r==null||r.drawImage(s,145,1260,1200,300)}catch(l){console.error("Image loading failed:",l)}})(),()=>{r==null||r.clearRect(0,0,n.width,n.height)}},[]),G.jsx("div",{className:"h-[100vh] bg-[#F2F2F7]  flex-col flex  items-center",children:G.jsx("canvas",{ref:e,className:"aspect-[0.5618904726181545]",style:{width:"100%"},width:1498,height:2666})})}const tw=P.lazy(()=>_r(()=>import("./index-CMPv4-X_.js"),__vite__mapDeps([0,1]))),nw=P.lazy(()=>_r(()=>import("./index-Bn923e1s.js"),__vite__mapDeps([2,3,4,1,5,6,7]))),rw=P.lazy(()=>_r(()=>import("./detail-BjOMAZ1k.js"),__vite__mapDeps([8,9,3,7,1,10]))),ow=P.lazy(()=>_r(()=>import("./result-DoTyUsFe.js"),__vite__mapDeps([11,4,1]))),iw=P.lazy(()=>_r(()=>import("./not-find-eJsFgec7.js"),[])),aw=P.lazy(()=>_r(()=>import("./home-BfPHRRKm.js"),__vite__mapDeps([12,13,7,1,9,3,4,5,6,10]))),lw=P.lazy(()=>_r(()=>import("./service-3uXpx1RD.js"),__vite__mapDeps([14,13,7,1,10])));function da(){const e=Tm();return console.error(e),G.jsx("div",{children:"Dang!"})}const sw=[{path:"/",errorElement:G.jsx(da,{}),element:G.jsx(Pn,{children:G.jsx(tw,{})}),children:[{path:"/",element:G.jsx(Pn,{children:G.jsx(aw,{})})},{path:"/service",element:G.jsx(Pn,{children:G.jsx(lw,{})})}]},{path:"/order",errorElement:G.jsx(da,{}),element:G.jsx(Rb,{}),children:[{index:!0,element:G.jsx(Cb,{to:"/order/list",replace:!0})},{path:"list",element:G.jsx(Pn,{children:G.jsx(nw,{})})},{path:":id",element:G.jsx(Pn,{children:G.jsx(rw,{})})},{path:"result",element:G.jsx(Pn,{children:G.jsx(ow,{})})}]},{path:"/poster",errorElement:G.jsx(da,{}),element:G.jsx(Pn,{children:G.jsx(ew,{})})},{path:"*",errorElement:G.jsx(da,{}),element:G.jsx(Pn,{children:G.jsx(iw,{})})}];function Pn({children:e}){return G.jsx(P.Suspense,{fallback:G.jsx(Zb,{className:"min-h-[var(--content-height)]"}),children:e})}const uw=jb(sw,{basename:"/project-preview"});function cw(){return G.jsx(Qb,{router:uw})}var zl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Tl=typeof window>"u"||"Deno"in globalThis;function Lt(){}function dw(e,t){return typeof e=="function"?e(t):e}function fw(e){return typeof e=="number"&&e>=0&&e!==1/0}function hw(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Ef(e,t){return typeof e=="function"?e(t):e}function pw(e,t){return typeof e=="function"?e(t):e}function Of(e,t){const{type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:a,stale:l}=e;if(a){if(r){if(t.queryHash!==wc(a,t.options))return!1}else if(!wi(t.queryKey,a))return!1}if(n!=="all"){const s=t.isActive();if(n==="active"&&!s||n==="inactive"&&s)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||o&&o!==t.state.fetchStatus||i&&!i(t))}function _f(e,t){const{exact:n,status:r,predicate:o,mutationKey:i}=e;if(i){if(!t.options.mutationKey)return!1;if(n){if(bi(t.options.mutationKey)!==bi(i))return!1}else if(!wi(t.options.mutationKey,i))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function wc(e,t){return((t==null?void 0:t.queryKeyHashFn)||bi)(e)}function bi(e){return JSON.stringify(e,(t,n)=>gu(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function wi(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!wi(e[n],t[n])):!1}function Dm(e,t){if(e===t)return e;const n=Cf(e)&&Cf(t);if(n||gu(e)&&gu(t)){const r=n?e:Object.keys(e),o=r.length,i=n?t:Object.keys(t),a=i.length,l=n?[]:{};let s=0;for(let u=0;u<a;u++){const c=n?u:i[u];(!n&&r.includes(c)||n)&&e[c]===void 0&&t[c]===void 0?(l[c]=void 0,s++):(l[c]=Dm(e[c],t[c]),l[c]===e[c]&&e[c]!==void 0&&s++)}return o===a&&s===o?e:l}return t}function Bw(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Cf(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function gu(e){if(!Rf(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Rf(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Rf(e){return Object.prototype.toString.call(e)==="[object Object]"}function mw(e){return new Promise(t=>{setTimeout(t,e)})}function vw(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Dm(e,t):t}function gw(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function yw(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Mm=Symbol();function Lm(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Mm?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var ur,Tn,Jr,Tf,bw=(Tf=class extends zl{constructor(){super();se(this,ur);se(this,Tn);se(this,Jr);Z(this,Jr,t=>{if(!Tl&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){_(this,Tn)||this.setEventListener(_(this,Jr))}onUnsubscribe(){var t;this.hasListeners()||((t=_(this,Tn))==null||t.call(this),Z(this,Tn,void 0))}setEventListener(t){var n;Z(this,Jr,t),(n=_(this,Tn))==null||n.call(this),Z(this,Tn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){_(this,ur)!==t&&(Z(this,ur,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof _(this,ur)=="boolean"?_(this,ur):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},ur=new WeakMap,Tn=new WeakMap,Jr=new WeakMap,Tf),Nm=new bw,Zr,Dn,eo,Df,ww=(Df=class extends zl{constructor(){super();se(this,Zr,!0);se(this,Dn);se(this,eo);Z(this,eo,t=>{if(!Tl&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){_(this,Dn)||this.setEventListener(_(this,eo))}onUnsubscribe(){var t;this.hasListeners()||((t=_(this,Dn))==null||t.call(this),Z(this,Dn,void 0))}setEventListener(t){var n;Z(this,eo,t),(n=_(this,Dn))==null||n.call(this),Z(this,Dn,t(this.setOnline.bind(this)))}setOnline(t){_(this,Zr)!==t&&(Z(this,Zr,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return _(this,Zr)}},Zr=new WeakMap,Dn=new WeakMap,eo=new WeakMap,Df),il=new ww;function xw(e){return Math.min(1e3*2**e,3e4)}function Am(e){return(e??"online")==="online"?il.isOnline():!0}var Fm=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function gs(e){return e instanceof Fm}function jm(e){let t=!1,n=0,r=!1,o,i,a;const l=new Promise((p,h)=>{i=p,a=h}),s=p=>{var h;r||(g(new Fm(p)),(h=e.abort)==null||h.call(e))},u=()=>{t=!0},c=()=>{t=!1},d=()=>Nm.isFocused()&&(e.networkMode==="always"||il.isOnline())&&e.canRun(),f=()=>Am(e.networkMode)&&e.canRun(),y=p=>{var h;r||(r=!0,(h=e.onSuccess)==null||h.call(e,p),o==null||o(),i(p))},g=p=>{var h;r||(r=!0,(h=e.onError)==null||h.call(e,p),o==null||o(),a(p))},m=()=>new Promise(p=>{var h;o=v=>{(r||d())&&p(v)},(h=e.onPause)==null||h.call(e)}).then(()=>{var p;o=void 0,r||(p=e.onContinue)==null||p.call(e)}),S=()=>{if(r)return;let p;const h=n===0?e.initialPromise:void 0;try{p=h??e.fn()}catch(v){p=Promise.reject(v)}Promise.resolve(p).then(y).catch(v=>{var b;if(r)return;const k=e.retry??(Tl?0:3),O=e.retryDelay??xw,R=typeof O=="function"?O(n,v):O,z=k===!0||typeof k=="number"&&n<k||typeof k=="function"&&k(n,v);if(t||!z){g(v);return}n++,(b=e.onFail)==null||b.call(e,n,v),mw(R).then(()=>d()?void 0:m()).then(()=>{t?g(v):S()})})};return{promise:l,cancel:s,continue:()=>(o==null||o(),l),cancelRetry:u,continueRetry:c,canStart:f,start:()=>(f()?S():m().then(S),l)}}function kw(){let e=[],t=0,n=l=>{l()},r=l=>{l()},o=l=>setTimeout(l,0);const i=l=>{t?e.push(l):o(()=>{n(l)})},a=()=>{const l=e;e=[],l.length&&o(()=>{r(()=>{l.forEach(s=>{n(s)})})})};return{batch:l=>{let s;t++;try{s=l()}finally{t--,t||a()}return s},batchCalls:l=>(...s)=>{i(()=>{l(...s)})},schedule:i,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{o=l}}}var nt=kw(),cr,Mf,Im=(Mf=class{constructor(){se(this,cr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),fw(this.gcTime)&&Z(this,cr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Tl?1/0:5*60*1e3))}clearGcTimeout(){_(this,cr)&&(clearTimeout(_(this,cr)),Z(this,cr,void 0))}},cr=new WeakMap,Mf),to,no,Pt,Xe,xi,dr,Nt,ln,Lf,Sw=(Lf=class extends Im{constructor(t){super();se(this,Nt);se(this,to);se(this,no);se(this,Pt);se(this,Xe);se(this,xi);se(this,dr);Z(this,dr,!1),Z(this,xi,t.defaultOptions),this.setOptions(t.options),this.observers=[],Z(this,Pt,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,Z(this,to,Ew(this.options)),this.state=t.state??_(this,to),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=_(this,Xe))==null?void 0:t.promise}setOptions(t){this.options={..._(this,xi),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&_(this,Pt).remove(this)}setData(t,n){const r=vw(this.state.data,t,this.options);return We(this,Nt,ln).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){We(this,Nt,ln).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,o;const n=(r=_(this,Xe))==null?void 0:r.promise;return(o=_(this,Xe))==null||o.cancel(t),n?n.then(Lt).catch(Lt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(_(this,to))}isActive(){return this.observers.some(t=>pw(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!hw(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=_(this,Xe))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=_(this,Xe))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),_(this,Pt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(_(this,Xe)&&(_(this,dr)?_(this,Xe).cancel({revert:!0}):_(this,Xe).cancelRetry()),this.scheduleGc()),_(this,Pt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||We(this,Nt,ln).call(this,{type:"invalidate"})}fetch(t,n){var s,u,c;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(_(this,Xe))return _(this,Xe).continueRetry(),_(this,Xe).promise}if(t&&this.setOptions(t),!this.options.queryFn){const d=this.observers.find(f=>f.options.queryFn);d&&this.setOptions(d.options)}const r=new AbortController,o=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(Z(this,dr,!0),r.signal)})},i=()=>{const d=Lm(this.options,n),f={queryKey:this.queryKey,meta:this.meta};return o(f),Z(this,dr,!1),this.options.persister?this.options.persister(d,f,this):d(f)},a={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:i};o(a),(s=this.options.behavior)==null||s.onFetch(a,this),Z(this,no,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=a.fetchOptions)==null?void 0:u.meta))&&We(this,Nt,ln).call(this,{type:"fetch",meta:(c=a.fetchOptions)==null?void 0:c.meta});const l=d=>{var f,y,g,m;gs(d)&&d.silent||We(this,Nt,ln).call(this,{type:"error",error:d}),gs(d)||((y=(f=_(this,Pt).config).onError)==null||y.call(f,d,this),(m=(g=_(this,Pt).config).onSettled)==null||m.call(g,this.state.data,d,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return Z(this,Xe,jm({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:d=>{var f,y,g,m;if(d===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(S){l(S);return}(y=(f=_(this,Pt).config).onSuccess)==null||y.call(f,d,this),(m=(g=_(this,Pt).config).onSettled)==null||m.call(g,d,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:l,onFail:(d,f)=>{We(this,Nt,ln).call(this,{type:"failed",failureCount:d,error:f})},onPause:()=>{We(this,Nt,ln).call(this,{type:"pause"})},onContinue:()=>{We(this,Nt,ln).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),_(this,Xe).start()}},to=new WeakMap,no=new WeakMap,Pt=new WeakMap,Xe=new WeakMap,xi=new WeakMap,dr=new WeakMap,Nt=new WeakSet,ln=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...Pw(r.data,this.options),fetchMeta:t.meta??null};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return gs(o)&&o.revert&&_(this,no)?{..._(this,no),fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),nt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),_(this,Pt).notify({query:this,type:"updated",action:t})})},Lf);function Pw(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Am(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Ew(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Wt,Nf,Um=(Nf=class extends zl{constructor(t={}){super();se(this,Wt);this.config=t,Z(this,Wt,new Map)}build(t,n,r){const o=n.queryKey,i=n.queryHash??wc(o,n);let a=this.get(i);return a||(a=new Sw({cache:this,queryKey:o,queryHash:i,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(a)),a}add(t){_(this,Wt).has(t.queryHash)||(_(this,Wt).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=_(this,Wt).get(t.queryHash);n&&(t.destroy(),n===t&&_(this,Wt).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){nt.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return _(this,Wt).get(t)}getAll(){return[..._(this,Wt).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Of(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Of(t,r)):n}notify(t){nt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){nt.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){nt.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Wt=new WeakMap,Nf),Qt,Ze,fr,Kt,On,Af,Ow=(Af=class extends Im{constructor(t){super();se(this,Kt);se(this,Qt);se(this,Ze);se(this,fr);this.mutationId=t.mutationId,Z(this,Ze,t.mutationCache),Z(this,Qt,[]),this.state=t.state||_w(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){_(this,Qt).includes(t)||(_(this,Qt).push(t),this.clearGcTimeout(),_(this,Ze).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){Z(this,Qt,_(this,Qt).filter(n=>n!==t)),this.scheduleGc(),_(this,Ze).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){_(this,Qt).length||(this.state.status==="pending"?this.scheduleGc():_(this,Ze).remove(this))}continue(){var t;return((t=_(this,fr))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,i,a,l,s,u,c,d,f,y,g,m,S,p,h,v,k,O,R,z;Z(this,fr,jm({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(b,D)=>{We(this,Kt,On).call(this,{type:"failed",failureCount:b,error:D})},onPause:()=>{We(this,Kt,On).call(this,{type:"pause"})},onContinue:()=>{We(this,Kt,On).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>_(this,Ze).canRun(this)}));const n=this.state.status==="pending",r=!_(this,fr).canStart();try{if(!n){We(this,Kt,On).call(this,{type:"pending",variables:t,isPaused:r}),await((i=(o=_(this,Ze).config).onMutate)==null?void 0:i.call(o,t,this));const D=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,t));D!==this.state.context&&We(this,Kt,On).call(this,{type:"pending",context:D,variables:t,isPaused:r})}const b=await _(this,fr).start();return await((u=(s=_(this,Ze).config).onSuccess)==null?void 0:u.call(s,b,t,this.state.context,this)),await((d=(c=this.options).onSuccess)==null?void 0:d.call(c,b,t,this.state.context)),await((y=(f=_(this,Ze).config).onSettled)==null?void 0:y.call(f,b,null,this.state.variables,this.state.context,this)),await((m=(g=this.options).onSettled)==null?void 0:m.call(g,b,null,t,this.state.context)),We(this,Kt,On).call(this,{type:"success",data:b}),b}catch(b){try{throw await((p=(S=_(this,Ze).config).onError)==null?void 0:p.call(S,b,t,this.state.context,this)),await((v=(h=this.options).onError)==null?void 0:v.call(h,b,t,this.state.context)),await((O=(k=_(this,Ze).config).onSettled)==null?void 0:O.call(k,void 0,b,this.state.variables,this.state.context,this)),await((z=(R=this.options).onSettled)==null?void 0:z.call(R,void 0,b,t,this.state.context)),b}finally{We(this,Kt,On).call(this,{type:"error",error:b})}}finally{_(this,Ze).runNext(this)}}},Qt=new WeakMap,Ze=new WeakMap,fr=new WeakMap,Kt=new WeakSet,On=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),nt.batch(()=>{_(this,Qt).forEach(r=>{r.onMutationUpdate(t)}),_(this,Ze).notify({mutation:this,type:"updated",action:t})})},Af);function _w(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var pt,ki,Ff,$m=(Ff=class extends zl{constructor(t={}){super();se(this,pt);se(this,ki);this.config=t,Z(this,pt,new Map),Z(this,ki,Date.now())}build(t,n,r){const o=new Ow({mutationCache:this,mutationId:++Fi(this,ki)._,options:t.defaultMutationOptions(n),state:r});return this.add(o),o}add(t){const n=fa(t),r=_(this,pt).get(n)??[];r.push(t),_(this,pt).set(n,r),this.notify({type:"added",mutation:t})}remove(t){var r;const n=fa(t);if(_(this,pt).has(n)){const o=(r=_(this,pt).get(n))==null?void 0:r.filter(i=>i!==t);o&&(o.length===0?_(this,pt).delete(n):_(this,pt).set(n,o))}this.notify({type:"removed",mutation:t})}canRun(t){var r;const n=(r=_(this,pt).get(fa(t)))==null?void 0:r.find(o=>o.state.status==="pending");return!n||n===t}runNext(t){var r;const n=(r=_(this,pt).get(fa(t)))==null?void 0:r.find(o=>o!==t&&o.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){nt.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[..._(this,pt).values()].flat()}find(t){const n={exact:!0,...t};return this.getAll().find(r=>_f(n,r))}findAll(t={}){return this.getAll().filter(n=>_f(t,n))}notify(t){nt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return nt.batch(()=>Promise.all(t.map(n=>n.continue().catch(Lt))))}},pt=new WeakMap,ki=new WeakMap,Ff);function fa(e){var t;return((t=e.options.scope)==null?void 0:t.id)??String(e.mutationId)}function zf(e){return{onFetch:(t,n)=>{var c,d,f,y,g;const r=t.options,o=(f=(d=(c=t.fetchOptions)==null?void 0:c.meta)==null?void 0:d.fetchMore)==null?void 0:f.direction,i=((y=t.state.data)==null?void 0:y.pages)||[],a=((g=t.state.data)==null?void 0:g.pageParams)||[];let l={pages:[],pageParams:[]},s=0;const u=async()=>{let m=!1;const S=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(t.signal.aborted?m=!0:t.signal.addEventListener("abort",()=>{m=!0}),t.signal)})},p=Lm(t.options,t.fetchOptions),h=async(v,k,O)=>{if(m)return Promise.reject();if(k==null&&v.pages.length)return Promise.resolve(v);const R={queryKey:t.queryKey,pageParam:k,direction:O?"backward":"forward",meta:t.options.meta};S(R);const z=await p(R),{maxPages:b}=t.options,D=O?yw:gw;return{pages:D(v.pages,z,b),pageParams:D(v.pageParams,k,b)}};if(o&&i.length){const v=o==="backward",k=v?Hm:yu,O={pages:i,pageParams:a},R=k(r,O);l=await h(O,R,v)}else{const v=e??i.length;do{const k=s===0?a[0]??r.initialPageParam:yu(r,l);if(s>0&&k==null)break;l=await h(l,k),s++}while(s<v)}return l};t.options.persister?t.fetchFn=()=>{var m,S;return(S=(m=t.options).persister)==null?void 0:S.call(m,u,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function yu(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function Hm(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}function Vw(e,t){return t?yu(e,t)!=null:!1}function Ww(e,t){return!t||!e.getPreviousPageParam?!1:Hm(e,t)!=null}var _e,Mn,Ln,ro,oo,Nn,io,ao,jf,Cw=(jf=class{constructor(e={}){se(this,_e);se(this,Mn);se(this,Ln);se(this,ro);se(this,oo);se(this,Nn);se(this,io);se(this,ao);Z(this,_e,e.queryCache||new Um),Z(this,Mn,e.mutationCache||new $m),Z(this,Ln,e.defaultOptions||{}),Z(this,ro,new Map),Z(this,oo,new Map),Z(this,Nn,0)}mount(){Fi(this,Nn)._++,_(this,Nn)===1&&(Z(this,io,Nm.subscribe(async e=>{e&&(await this.resumePausedMutations(),_(this,_e).onFocus())})),Z(this,ao,il.subscribe(async e=>{e&&(await this.resumePausedMutations(),_(this,_e).onOnline())})))}unmount(){var e,t;Fi(this,Nn)._--,_(this,Nn)===0&&((e=_(this,io))==null||e.call(this),Z(this,io,void 0),(t=_(this,ao))==null||t.call(this),Z(this,ao,void 0))}isFetching(e){return _(this,_e).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return _(this,Mn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=_(this,_e).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{const n=this.defaultQueryOptions(e),r=_(this,_e).build(this,n);return e.revalidateIfStale&&r.isStaleByTime(Ef(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return _(this,_e).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),o=_(this,_e).get(r.queryHash),i=o==null?void 0:o.state.data,a=dw(t,i);if(a!==void 0)return _(this,_e).build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return nt.batch(()=>_(this,_e).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=_(this,_e).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=_(this,_e);nt.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=_(this,_e),r={type:"active",...e};return nt.batch(()=>(n.findAll(e).forEach(o=>{o.reset()}),this.refetchQueries(r,t)))}cancelQueries(e={},t={}){const n={revert:!0,...t},r=nt.batch(()=>_(this,_e).findAll(e).map(o=>o.cancel(n)));return Promise.all(r).then(Lt).catch(Lt)}invalidateQueries(e={},t={}){return nt.batch(()=>{if(_(this,_e).findAll(e).forEach(r=>{r.invalidate()}),e.refetchType==="none")return Promise.resolve();const n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e={},t){const n={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},r=nt.batch(()=>_(this,_e).findAll(e).filter(o=>!o.isDisabled()).map(o=>{let i=o.fetch(void 0,n);return n.throwOnError||(i=i.catch(Lt)),o.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(Lt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=_(this,_e).build(this,t);return n.isStaleByTime(Ef(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Lt).catch(Lt)}fetchInfiniteQuery(e){return e.behavior=zf(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Lt).catch(Lt)}ensureInfiniteQueryData(e){return e.behavior=zf(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return il.isOnline()?_(this,Mn).resumePausedMutations():Promise.resolve()}getQueryCache(){return _(this,_e)}getMutationCache(){return _(this,Mn)}getDefaultOptions(){return _(this,Ln)}setDefaultOptions(e){Z(this,Ln,e)}setQueryDefaults(e,t){_(this,ro).set(bi(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[..._(this,ro).values()];let n={};return t.forEach(r=>{wi(e,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(e,t){_(this,oo).set(bi(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[..._(this,oo).values()];let n={};return t.forEach(r=>{wi(e,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={..._(this,Ln).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=wc(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===Mm&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{..._(this,Ln).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){_(this,_e).clear(),_(this,Mn).clear()}},_e=new WeakMap,Mn=new WeakMap,Ln=new WeakMap,ro=new WeakMap,oo=new WeakMap,Nn=new WeakMap,io=new WeakMap,ao=new WeakMap,jf),qm=P.createContext(void 0),Qw=e=>{const t=P.useContext(qm);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},Rw=({client:e,children:t})=>(P.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),G.jsx(qm.Provider,{value:e,children:t}));const zw=new Um({onError(e){console.log(e)}}),Tw=new $m({onError(e){console.log(e)}}),Dw=new Cw({queryCache:zw,mutationCache:Tw,defaultOptions:{queries:{refetchOnMount:!1,refetchOnWindowFocus:!1,retry:0,staleTime:60*1e3}}});function Mw({children:e}){return G.jsxs(Rw,{client:Dw,children:[e,!1]})}const Lw=[{selector:".picker-country",content:"点击此处选择国家"},{selector:".phonenumber-input ",content:"此处输入号码"},{selector:".picker-operator",content:"点击此处选择运营商"},{selector:".goods-container",content:"选择任意产品充值"}],Nw={popover(e){return{...e,padding:`${30/75}rem ${45/75}rem`,borderRadius:"0.1rem"}},close(e){return{...e,top:`${18/75}rem`,right:`${18/75}rem`,background:"none"}},badge(e){return{...e,display:"none"}},dot(e){return{...e,background:e.background==="none"?"none":"#41d9ce"}}};function Aw(){return G.jsx(Uy,{steps:Lw,styles:Nw,children:G.jsx(Mw,{children:G.jsx(d1,{children:G.jsx(cw,{})})})})}ys.createRoot(document.getElementById("root")).render(G.jsx(M.StrictMode,{children:G.jsx(Aw,{})}));export{nt as A,jw as B,hc as C,Hw as L,Rb as O,M as R,zl as S,Ww as a,bc as b,fm as c,s1 as d,$w as e,Uw as f,Qw as g,Vw as h,zf as i,G as j,Uf as k,Iw as l,qw as m,pw as n,Ef as o,Lt as p,Dw as q,P as r,Bw as s,Tl as t,ko as u,fw as v,hw as w,Nm as x,Pw as y,vw as z};
