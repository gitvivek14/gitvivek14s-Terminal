(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7734:(e,t,r)=>{Promise.resolve().then(r.bind(r,6316))},8173:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let n=r(306),o=r(5155),a=n._(r(2115)),l=r(180),s=r(1394),i=r(4116),u=r(4445),c=r(5353),f=r(2170),d=r(9544);function p(e,t,r){"undefined"!=typeof window&&(async()=>e.prefetch(t,r))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}r(2363);let m=a.default.forwardRef(function(e,t){let r,n;let{href:l,as:m,children:y,prefetch:x=null,passHref:g,replace:b,shallow:v,scroll:j,onClick:k,onMouseEnter:w,onTouchStart:N,legacyBehavior:E=!1,...P}=e;r=y,E&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let _=a.default.useContext(s.AppRouterContext),M=!1!==x,O=null===x?u.PrefetchKind.AUTO:u.PrefetchKind.FULL,{href:C,as:T}=a.default.useMemo(()=>{let e=h(l);return{href:e,as:m?h(m):e}},[l,m]),I=a.default.useRef(C),A=a.default.useRef(T);E&&(n=a.default.Children.only(r));let S=E?n&&"object"==typeof n&&n.ref:t,[R,L,U]=(0,i.useIntersection)({rootMargin:"200px"}),q=a.default.useCallback(e=>{(A.current!==T||I.current!==C)&&(U(),A.current=T,I.current=C),R(e)},[T,C,U,R]),z=(0,c.useMergedRef)(q,S);a.default.useEffect(()=>{_&&L&&M&&p(_,C,{kind:O})},[T,C,L,M,_,O]);let F={ref:z,onClick(e){E||"function"!=typeof k||k(e),E&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),_&&!e.defaultPrevented&&function(e,t,r,n,o,l,s){let{nodeName:i}=e.currentTarget;"A"===i.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),a.default.startTransition(()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,_,C,T,b,v,j)},onMouseEnter(e){E||"function"!=typeof w||w(e),E&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),_&&M&&p(_,C,{kind:O})},onTouchStart:function(e){E||"function"!=typeof N||N(e),E&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),_&&M&&p(_,C,{kind:O})}};return(0,f.isAbsoluteUrl)(T)?F.href=T:E&&!g&&("a"!==n.type||"href"in n.props)||(F.href=(0,d.addBasePath)(T)),E?a.default.cloneElement(n,F):(0,o.jsx)("a",{...P,...F,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(2115),o=r(8571),a="function"==typeof IntersectionObserver,l=new Map,s=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,u=i||!a,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(a){if(u||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},s.push(r),l.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(n);let e=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2115);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=a(e,n),o.current=a(t,n))}:e||t,[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},180:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return s},urlObjectKeys:function(){return l}});let n=r(9955)._(r(4156)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,a=e.protocol||"",l=e.pathname||"",s=e.hash||"",i=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(u+=":"+e.port)),i&&"object"==typeof i&&(i=String(n.urlQueryToSearchParams(i)));let c=e.search||i&&"?"+i||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==u?(u="//"+(u||""),l&&"/"!==l[0]&&(l="/"+l)):u||(u=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),""+a+u+(l=l.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+s}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return a(e)}},4156:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},2170:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return g},MissingStaticPage:function(){return x},NormalizeError:function(){return m},PageNotFoundError:function(){return y},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return i},getLocationOrigin:function(){return l},getURL:function(){return s},isAbsoluteUrl:function(){return a},isResSent:function(){return u},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return b}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=l();return e.substring(t.length)}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&u(r))return n;if(!n)throw Error('"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class x extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class g extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function b(e){return JSON.stringify({message:e.message,stack:e.stack})}},6316:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n=r(5155),o=r(2115);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,o.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:u="",children:c,iconNode:f,...d}=e;return(0,o.createElement)("svg",{ref:t,...s,width:n,height:n,stroke:r,strokeWidth:i?24*Number(a)/Number(n):a,className:l("lucide",u),...d},[...f.map(e=>{let[t,r]=e;return(0,o.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),u=(e,t)=>{let r=(0,o.forwardRef)((r,n)=>{let{className:s,...u}=r;return(0,o.createElement)(i,{ref:n,iconNode:t,className:l("lucide-".concat(a(e)),s),...u})});return r.displayName="".concat(e),r},c=u("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),f=u("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),d=u("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),p=u("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),h=u("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);var m=r(8173),y=r.n(m);let x=()=>(0,n.jsxs)("div",{className:"relative min-h-screen desktop",children:[(0,n.jsxs)("div",{className:"absolute inset-0 p-4 grid grid-cols-6 gap-4 content-start",children:[(0,n.jsxs)(y(),{href:"/terminal",className:"desktop-icon flex flex-col items-center gap-2 w-24 p-2 rounded-lg  hover:bg-black/30 transition-all duration-200    cursor-pointer",children:[(0,n.jsx)(c,{className:"w-12 h-12 text-white"}),(0,n.jsx)("span",{className:"mt-2 text-sm text-white font-medium px-2 py-1 rounded bg-black/20 backdrop-blur-sm",children:"Terminal"})]}),(0,n.jsxs)("div",{className:"desktop-icon flex flex-col items-center gap-2 w-24 p-2 rounded-lg hover:bg-white/10 cursor-pointer",children:[(0,n.jsx)(f,{className:"w-12 h-12 text-white"}),(0,n.jsx)("span",{className:"mt-2 text-sm text-white font-medium px-2 py-1 rounded bg-black/20 backdrop-blur-sm",children:"Documents"})]}),(0,n.jsxs)("div",{className:"desktop-icon flex flex-col items-center gap-2 w-24 p-2 rounded-lg hover:bg-white/10 cursor-pointer",children:[(0,n.jsx)(d,{className:"w-12 h-12 text-white"}),(0,n.jsx)("span",{className:"mt-2 text-sm text-white font-medium px-2 py-1 rounded bg-black/20 backdrop-blur-sm",children:"Pictures"})]}),(0,n.jsxs)("div",{className:"desktop-icon flex flex-col items-center gap-2 w-24 p-2 rounded-lg hover:bg-white/10 cursor-pointer",children:[(0,n.jsx)(p,{className:"w-12 h-12 text-white"}),(0,n.jsx)("span",{className:"mt-2 text-sm text-white font-medium px-2 py-1 rounded bg-black/20 backdrop-blur-sm",children:"Files"})]}),(0,n.jsxs)("div",{className:"desktop-icon flex flex-col items-center gap-2 w-24 p-2 rounded-lg hover:bg-white/10 cursor-pointer",children:[(0,n.jsx)(h,{className:"w-12 h-12 text-white"}),(0,n.jsx)("span",{className:"mt-2 text-sm text-white font-medium px-2 py-1 rounded bg-black/20 backdrop-blur-sm",children:"Trash"})]})]}),(0,n.jsx)("div",{className:"taskbar fixed bottom-0 left-0 right-0 h-16 flex items-center justify-start px-4 border-t border-white/20",children:(0,n.jsx)(y(),{href:"/",className:"p-2 rounded-lg hover:bg-black/10 transition-colors",children:(0,n.jsx)(c,{className:"w-6 h-6 text-gray-800"})})})]}),g=()=>(0,n.jsx)("div",{className:" w-full h-full fixed inset-0 bg-black flex items-center justify-center z-50",children:(0,n.jsxs)("div",{className:"hacker-loader",children:[(0,n.jsx)("div",{className:"loader-text",children:(0,n.jsx)("span",{"data-text":"Initializing...",className:"text-glitch",children:"Initializing..."})}),(0,n.jsxs)("div",{className:"loader-bar",children:[(0,n.jsx)("div",{className:"bar-fill"}),(0,n.jsx)("div",{className:"bar-glitch"})]}),(0,n.jsxs)("div",{className:"particles",children:[(0,n.jsx)("div",{className:"particle"}),(0,n.jsx)("div",{className:"particle"}),(0,n.jsx)("div",{className:"particle"}),(0,n.jsx)("div",{className:"particle"}),(0,n.jsx)("div",{className:"particle"})]})]})});function b(){let[e,t]=(0,o.useState)(!0);return((0,o.useEffect)(()=>{let e=setTimeout(()=>{t(!1)},2e3);return()=>clearTimeout(e)},[]),e)?(0,n.jsx)(g,{}):(0,n.jsx)(x,{})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(7734)),_N_E=e.O()}]);