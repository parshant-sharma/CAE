"use strict";(self.webpackChunkcae=self.webpackChunkcae||[]).push([[537],{6744:function(e,t,n){n.d(t,{BV:function(){return ge},Kd:function(){return Ge},qh:function(){return fe}});var r=n(6540),a=(n(6069),"popstate");function o(e={}){return d((function(e,t){let{pathname:n,search:r,hash:a}=e.location;return s("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:c(t)}),null,e)}function i(e,t){if(!1===e||null==e)throw new Error(t)}function l(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function s(e,t,n=null,r){return{pathname:"string"==typeof e?e:e.pathname,search:"",hash:"",..."string"==typeof t?h(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function c({pathname:e="/",search:t="",hash:n=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),n&&"#"!==n&&(e+="#"===n.charAt(0)?n:"#"+n),e}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function d(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:l=!1}=r,h=o.history,d="POP",p=null,m=f();function f(){return(h.state||{idx:null}).idx}function v(){d="POP";let e=f(),t=null==e?null:e-m;m=e,p&&p({action:d,location:y.location,delta:t})}function g(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"==typeof e?e:c(e);return n=n.replace(/ $/,"%20"),i(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==m&&(m=0,h.replaceState({...h.state,idx:m},""));let y={get action(){return d},get location(){return e(o,h)},listen(e){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(a,v),p=e,()=>{o.removeEventListener(a,v),p=null}},createHref(e){return t(o,e)},createURL:g,encodeLocation(e){let t=g(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){d="PUSH";let r=s(y.location,e,t);n&&n(r,e),m=f()+1;let a=u(r,m),i=y.createHref(r);try{h.pushState(a,"",i)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;o.location.assign(i)}l&&p&&p({action:d,location:y.location,delta:1})},replace:function(e,t){d="REPLACE";let r=s(y.location,e,t);n&&n(r,e),m=f();let a=u(r,m),o=y.createHref(r);h.replaceState(a,"",o),l&&p&&p({action:d,location:y.location,delta:0})},go(e){return h.go(e)}};return y}new WeakMap;function p(e,t,n="/"){return m(e,t,n,!1)}function m(e,t,n,r){let a=L(("string"==typeof t?h(t):t).pathname||"/",n);if(null==a)return null;let o=f(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=k(a);i=S(o[l],e,r)}return i}function f(e,t=[],n=[],r=""){let a=(e,a,o)=>{let l={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};l.relativePath.startsWith("/")&&(i(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let u=O([r,l.relativePath]),s=n.concat(l);e.children&&e.children.length>0&&(i(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),f(e.children,t,s,u)),(null!=e.path||e.index)&&t.push({path:u,score:C(u,e.index),routesMeta:s})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of v(e.path))a(e,t,n);else a(e,t)})),t}function v(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=v(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}var g=/^:[\w-]+$/,y=3,w=2,b=1,E=10,x=-2,R=e=>"*"===e;function C(e,t){let n=e.split("/"),r=n.length;return n.some(R)&&(r+=x),t&&(r+=w),n.filter((e=>!R(e))).reduce(((e,t)=>e+(g.test(t)?y:""===t?b:E)),r)}function S(e,t,n=!1){let{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],u=l===r.length-1,s="/"===o?t:t.slice(o.length)||"/",c=$({path:e.relativePath,caseSensitive:e.caseSensitive,end:u},s),h=e.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=$({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},s)),!c)return null;Object.assign(a,c.params),i.push({params:a,pathname:O([o,c.pathname]),pathnameBase:F(O([o,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(o=O([o,c.pathnameBase]))}return i}function $(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t=!1,n=!0){l("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:r.reduce(((e,{paramName:t,isOptional:n},r)=>{if("*"===t){let e=u[r]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const a=u[r];return e[t]=n&&!a?void 0:(a||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function k(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return l(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function L(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function T(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function N(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function P(e){let t=N(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function M(e,t,n,r=!1){let a;"string"==typeof e?a=h(e):(a={...e},i(!a.pathname||!a.pathname.includes("?"),T("?","pathname","search",a)),i(!a.pathname||!a.pathname.includes("#"),T("#","pathname","hash",a)),i(!a.search||!a.search.includes("#"),T("#","search","hash",a)));let o,l=""===e||""===a.pathname,u=l?"/":a.pathname;if(null==u)o=n;else{let e=t.length-1;if(!r&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}o=e>=0?t[e]:"/"}let s=function(e,t="/"){let{pathname:n,search:r="",hash:a=""}="string"==typeof e?h(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:A(r),hash:_(a)}}(a,o),c=u&&"/"!==u&&u.endsWith("/"),d=(l||"."===u)&&n.endsWith("/");return s.pathname.endsWith("/")||!c&&!d||(s.pathname+="/"),s}var O=e=>e.join("/").replace(/\/\/+/g,"/"),F=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",_=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function D(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}var W=["POST","PUT","PATCH","DELETE"],B=(new Set(W),["GET",...W]);new Set(B),Symbol("ResetLoaderData");var U=r.createContext(null);U.displayName="DataRouter";var j=r.createContext(null);j.displayName="DataRouterState";var H=r.createContext({isTransitioning:!1});H.displayName="ViewTransition";var I=r.createContext(new Map);I.displayName="Fetchers";var J=r.createContext(null);J.displayName="Await";var z=r.createContext(null);z.displayName="Navigation";var Y=r.createContext(null);Y.displayName="Location";var K=r.createContext({outlet:null,matches:[],isDataRoute:!1});K.displayName="Route";var V=r.createContext(null);V.displayName="RouteError";var q=!0;function X(){return null!=r.useContext(Y)}function G(){return i(X(),"useLocation() may be used only in the context of a <Router> component."),r.useContext(Y).location}var Q="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Z(e){r.useContext(z).static||r.useLayoutEffect(e)}function ee(){let{isDataRoute:e}=r.useContext(K);return e?function(){let{router:e}=se("useNavigate"),t=he("useNavigate"),n=r.useRef(!1);return Z((()=>{n.current=!0})),r.useCallback((async(r,a={})=>{l(n.current,Q),n.current&&("number"==typeof r?e.navigate(r):await e.navigate(r,{fromRouteId:t,...a}))}),[e,t])}():function(){i(X(),"useNavigate() may be used only in the context of a <Router> component.");let e=r.useContext(U),{basename:t,navigator:n}=r.useContext(z),{matches:a}=r.useContext(K),{pathname:o}=G(),u=JSON.stringify(P(a)),s=r.useRef(!1);return Z((()=>{s.current=!0})),r.useCallback(((r,a={})=>{if(l(s.current,Q),!s.current)return;if("number"==typeof r)return void n.go(r);let i=M(r,JSON.parse(u),o,"path"===a.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:O([t,i.pathname])),(a.replace?n.replace:n.push)(i,a.state,a)}),[t,n,u,o,e])}()}r.createContext(null);function te(e,{relative:t}={}){let{matches:n}=r.useContext(K),{pathname:a}=G(),o=JSON.stringify(P(n));return r.useMemo((()=>M(e,JSON.parse(o),a,"path"===t)),[e,o,a,t])}function ne(e,t,n,a){i(X(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=r.useContext(z),{matches:s}=r.useContext(K),c=s[s.length-1],d=c?c.params:{},m=c?c.pathname:"/",f=c?c.pathnameBase:"/",v=c&&c.route;if(q){let e=v&&v.path||"";me(m,!v||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let g,y=G();if(t){let e="string"==typeof t?h(t):t;i("/"===f||e.pathname?.startsWith(f),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${e.pathname}" was given in the \`location\` prop.`),g=e}else g=y;let w=g.pathname||"/",b=w;if("/"!==f){let e=f.replace(/^\//,"").split("/");b="/"+w.replace(/^\//,"").split("/").slice(e.length).join("/")}let E=!u&&n&&n.matches&&n.matches.length>0?n.matches:p(e,{pathname:b});q&&(l(v||null!=E,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),l(null==E||void 0!==E[E.length-1].route.element||void 0!==E[E.length-1].route.Component||void 0!==E[E.length-1].route.lazy,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`));let x=le(E&&E.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:O([f,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?f:O([f,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,n,a);return t&&x?r.createElement(Y.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},x):x}function re(){let e=de(),t=D(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},i={padding:"2px 4px",backgroundColor:a},l=null;return q&&(console.error("Error handled by React Router default ErrorBoundary:",e),l=r.createElement(r.Fragment,null,r.createElement("p",null,"💿 Hey developer 👋"),r.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",r.createElement("code",{style:i},"ErrorBoundary")," or"," ",r.createElement("code",{style:i},"errorElement")," prop on your route."))),r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:o},n):null,l)}var ae=r.createElement(re,null),oe=class extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement(K.Provider,{value:this.props.routeContext},r.createElement(V.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ie({routeContext:e,match:t,children:n}){let a=r.useContext(U);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),r.createElement(K.Provider,{value:e},n)}function le(e,t=[],n=null,a=null){if(null==e){if(!n)return null;if(n.errors)e=n.matches;else{if(0!==t.length||n.initialized||!(n.matches.length>0))return null;e=n.matches}}let o=e,l=n?.errors;if(null!=l){let e=o.findIndex((e=>e.route.id&&void 0!==l?.[e.route.id]));i(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let u=!1,s=-1;if(n)for(let r=0;r<o.length;r++){let e=o[r];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(s=r),e.route.id){let{loaderData:t,errors:r}=n,a=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!r||void 0===r[e.route.id]);if(e.route.lazy||a){u=!0,o=s>=0?o.slice(0,s+1):[o[0]];break}}}return o.reduceRight(((e,a,i)=>{let c,h=!1,d=null,p=null;n&&(c=l&&a.route.id?l[a.route.id]:void 0,d=a.route.errorElement||ae,u&&(s<0&&0===i?(me("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,p=null):s===i&&(h=!0,p=a.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,i+1)),f=()=>{let t;return t=c?d:h?p:a.route.Component?r.createElement(a.route.Component,null):a.route.element?a.route.element:e,r.createElement(ie,{match:a,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(a.route.ErrorBoundary||a.route.errorElement||0===i)?r.createElement(oe,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()}),null)}function ue(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function se(e){let t=r.useContext(U);return i(t,ue(e)),t}function ce(e){let t=r.useContext(j);return i(t,ue(e)),t}function he(e){let t=function(e){let t=r.useContext(K);return i(t,ue(e)),t}(e),n=t.matches[t.matches.length-1];return i(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function de(){let e=r.useContext(V),t=ce("useRouteError"),n=he("useRouteError");return void 0!==e?e:t.errors?.[n]}var pe={};function me(e,t,n){t||pe[e]||(pe[e]=!0,l(!1,n))}r.memo((function({routes:e,future:t,state:n}){return ne(e,void 0,n,t)}));function fe(e){i(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ve({basename:e="/",children:t=null,location:n,navigationType:a="POP",navigator:o,static:u=!1}){i(!X(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),c=r.useMemo((()=>({basename:s,navigator:o,static:u,future:{}})),[s,o,u]);"string"==typeof n&&(n=h(n));let{pathname:d="/",search:p="",hash:m="",state:f=null,key:v="default"}=n,g=r.useMemo((()=>{let e=L(d,s);return null==e?null:{location:{pathname:e,search:p,hash:m,state:f,key:v},navigationType:a}}),[s,d,p,m,f,v,a]);return l(null!=g,`<Router basename="${s}"> is not able to match the URL "${d}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==g?null:r.createElement(z.Provider,{value:c},r.createElement(Y.Provider,{children:t,value:g}))}function ge({children:e,location:t}){return ne(ye(e),t)}r.Component;function ye(e,t=[]){let n=[];return r.Children.forEach(e,((e,a)=>{if(!r.isValidElement(e))return;let o=[...t,a];if(e.type===r.Fragment)return void n.push.apply(n,ye(e.props.children,o));i(e.type===fe,`[${"string"==typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),i(!e.props.index||!e.props.children,"An index route cannot have child routes.");let l={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=ye(e.props.children,o)),n.push(l)})),n}var we="get",be="application/x-www-form-urlencoded";function Ee(e){return null!=e&&"string"==typeof e.tagName}var xe=null;var Re=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ce(e){return null==e||Re.has(e)?e:(l(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${be}"`),null)}function Se(e,t){let n,r,a,o,i;if(Ee(l=e)&&"form"===l.tagName.toLowerCase()){let i=e.getAttribute("action");r=i?L(i,t):null,n=e.getAttribute("method")||we,a=Ce(e.getAttribute("enctype"))||be,o=new FormData(e)}else if(function(e){return Ee(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Ee(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||i.getAttribute("action");if(r=l?L(l,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||we,a=Ce(e.getAttribute("formenctype"))||Ce(i.getAttribute("enctype"))||be,o=new FormData(i,e),!function(){if(null===xe)try{new FormData(document.createElement("form"),0),xe=!1}catch(e){xe=!0}return xe}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else{if(Ee(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=we,r=null,a=be,i=e}var l;return o&&"text/plain"===a&&(i=o,o=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:o,body:i}}function $e(e,t){if(!1===e||null==e)throw new Error(t)}async function ke(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Le(e){return null!=e&&"string"==typeof e.page}function Te(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href)}function Ne(e,t,n,r,a,o){let i=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter(((e,t)=>i(e,t)||l(e,t))):"data"===o?t.filter(((t,o)=>{let u=r.routes[t.route.id];if(!u||!u.hasLoader)return!1;if(i(t,o)||l(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"==typeof r)return r}return!0})):[]}function Pe(e,t,{includeHydrateFallback:n}={}){return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a})).flat(1),[...new Set(r)];var r}function Me(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,a)=>{if(t&&!Le(a)&&"script"===a.as&&a.href&&r.has(a.href))return e;let o=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(a));return n.has(o)||(n.add(o),e.push({key:o,link:a})),e}),[])}function Oe(e){return{__html:e}}Symbol("SingleFetchRedirect");function Fe(e,t){let n="string"==typeof e?new URL(e,"undefined"==typeof window?"server://singlefetch/":window.location.origin):e;return"/"===n.pathname?n.pathname="_root.data":t&&"/"===L(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}r.Component;function Ae({error:e,isOutsideRemixApp:t}){console.error(e);let n,a=r.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(D(e))return r.createElement(_e,{title:"Unhandled Thrown Response!"},r.createElement("h1",{style:{fontSize:"24px"}},e.status," ",e.statusText),a);if(e instanceof Error)n=e;else{let t=null==e?"Unknown Error":"object"==typeof e&&"toString"in e?e.toString():JSON.stringify(e);n=new Error(t)}return r.createElement(_e,{title:"Application Error!",isOutsideRemixApp:t},r.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),r.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},n.stack),a)}function _e({title:e,renderScripts:t,isOutsideRemixApp:n,children:a}){let{routeModules:o}=je();return o.root?.Layout&&!n?a:r.createElement("html",{lang:"en"},r.createElement("head",null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),r.createElement("title",null,e)),r.createElement("body",null,r.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},a,t?r.createElement(Ve,null):null)))}function De(e){return!0===e}function We(){let e=r.useContext(U);return $e(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Be(){let e=r.useContext(j);return $e(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ue=r.createContext(void 0);function je(){let e=r.useContext(Ue);return $e(e,"You must render this element inside a <HydratedRouter> element"),e}function He(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Ie(e,t,n){if(n&&!Ke)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function Je({page:e,...t}){let{router:n}=We(),a=r.useMemo((()=>p(n.routes,e,n.basename)),[n.routes,e,n.basename]);return a?r.createElement(Ye,{page:e,matches:a,...t}):null}function ze(e){let{manifest:t,routeModules:n}=je(),[a,o]=r.useState([]);return r.useEffect((()=>{let r=!1;return async function(e,t,n){return Me((await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await ke(r,n);return e.links?e.links():[]}return[]})))).flat(1).filter(Te).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(e,t,n).then((e=>{r||o(e)})),()=>{r=!0}}),[e,t,n]),a}function Ye({page:e,matches:t,...n}){let a=G(),{manifest:o,routeModules:i}=je(),{basename:l}=We(),{loaderData:u,matches:s}=Be(),c=r.useMemo((()=>Ne(e,t,s,o,a,"data")),[e,t,s,o,a]),h=r.useMemo((()=>Ne(e,t,s,o,a,"assets")),[e,t,s,o,a]),d=r.useMemo((()=>{if(e===a.pathname+a.search+a.hash)return[];let n=new Set,r=!1;if(t.forEach((e=>{let t=o.routes[e.route.id];t&&t.hasLoader&&(!c.some((t=>t.route.id===e.route.id))&&e.route.id in u&&i[e.route.id]?.shouldRevalidate||t.hasClientLoader?r=!0:n.add(e.route.id))})),0===n.size)return[];let s=Fe(e,l);return r&&n.size>0&&s.searchParams.set("_routes",t.filter((e=>n.has(e.route.id))).map((e=>e.route.id)).join(",")),[s.pathname+s.search]}),[l,u,a,o,c,t,e,i]),p=r.useMemo((()=>Pe(h,o)),[h,o]),m=ze(h);return r.createElement(r.Fragment,null,d.map((e=>r.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...n}))),p.map((e=>r.createElement("link",{key:e,rel:"modulepreload",href:e,...n}))),m.map((({key:e,link:t})=>r.createElement("link",{key:e,...t}))))}Ue.displayName="FrameworkContext";var Ke=!1;function Ve(e){let{manifest:t,serverHandoffString:n,isSpaMode:a,ssr:o,renderMeta:i}=je(),{router:l,static:u,staticContext:s}=We(),{matches:c}=Be(),h=De(o);i&&(i.didRenderScripts=!0);let d=Ie(c,null,a);r.useEffect((()=>{Ke=!0}),[]);let m=r.useMemo((()=>{let a=s?`window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=u?`${t.hmr?.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${h?"":`import ${JSON.stringify(t.url)}`};\n${d.map(((e,n)=>{let r=`route${n}`,a=t.routes[e.route.id];$e(a,`Route ${e.route.id} not found in manifest`);let{clientActionModule:o,clientLoaderModule:i,hydrateFallbackModule:l,module:u}=a,s=[...o?[{module:o,varName:`${r}_clientAction`}]:[],...i?[{module:i,varName:`${r}_clientLoader`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:u,varName:`${r}_main`}];return 1===s.length?`import * as ${r} from ${JSON.stringify(u)};`:[s.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${s.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${h?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let n=new Set(t.state.matches.map((e=>e.route.id))),r=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(r.pop();r.length>0;)a.push(`/${r.join("/")}`),r.pop();a.forEach((e=>{let r=p(t.routes,e,t.basename);r&&r.forEach((e=>n.add(e.route.id)))}));let o=[...n].reduce(((t,n)=>Object.assign(t,{[n]:e.routes[n]})),{});return{...e,routes:o}}(t,l),null,2)};`:""}\n  window.__reactRouterRouteModules = {${d.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`:" ";return r.createElement(r.Fragment,null,r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Oe(a),type:void 0}),r.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Oe(o),type:"module",async:!0}))}),[]),f=Ke?[]:t.entry.imports.concat(Pe(d,t,{includeHydrateFallback:!0}));return Ke?null:r.createElement(r.Fragment,null,h?null:r.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin}),r.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin}),(v=f,[...new Set(v)]).map((t=>r.createElement("link",{key:t,rel:"modulepreload",href:t,crossOrigin:e.crossOrigin}))),m);var v}function qe(...e){return t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}}var Xe="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;try{Xe&&(window.__reactRouterVersion="7.3.0")}catch(it){}function Ge({basename:e,children:t,window:n}){let a=r.useRef();null==a.current&&(a.current=o({window:n,v5Compat:!0}));let i=a.current,[l,u]=r.useState({action:i.action,location:i.location}),s=r.useCallback((e=>{r.startTransition((()=>u(e)))}),[u]);return r.useLayoutEffect((()=>i.listen(s)),[i,s]),r.createElement(ve,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:i})}var Qe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ze=r.forwardRef((function({onClick:e,discover:t="render",prefetch:n="none",relative:a,reloadDocument:o,replace:u,state:s,target:h,to:d,preventScrollReset:p,viewTransition:m,...f},v){let g,{basename:y}=r.useContext(z),w="string"==typeof d&&Qe.test(d),b=!1;if("string"==typeof d&&w&&(g=d,Xe))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=L(t.pathname,y);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:b=!0}catch(it){l(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let E=function(e,{relative:t}={}){i(X(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=r.useContext(z),{hash:o,pathname:l,search:u}=te(e,{relative:t}),s=l;return"/"!==n&&(s="/"===l?n:O([n,l])),a.createHref({pathname:s,search:u,hash:o})}(d,{relative:a}),[x,R,C]=function(e,t){let n=r.useContext(Ue),[a,o]=r.useState(!1),[i,l]=r.useState(!1),{onFocus:u,onBlur:s,onMouseEnter:c,onMouseLeave:h,onTouchStart:d}=t,p=r.useRef(null);r.useEffect((()=>{if("render"===e&&l(!0),"viewport"===e){let e=new IntersectionObserver((e=>{e.forEach((e=>{l(e.isIntersecting)}))}),{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}}),[e]),r.useEffect((()=>{if(a){let e=setTimeout((()=>{l(!0)}),100);return()=>{clearTimeout(e)}}}),[a]);let m=()=>{o(!0)},f=()=>{o(!1),l(!1)};return n?"intent"!==e?[i,p,{}]:[i,p,{onFocus:He(u,m),onBlur:He(s,f),onMouseEnter:He(c,m),onMouseLeave:He(h,f),onTouchStart:He(d,m)}]:[!1,p,{}]}(n,f),S=function(e,{target:t,replace:n,state:a,preventScrollReset:o,relative:i,viewTransition:l}={}){let u=ee(),s=G(),h=te(e,{relative:i});return r.useCallback((r=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(r,t)){r.preventDefault();let t=void 0!==n?n:c(s)===c(h);u(e,{replace:t,state:a,preventScrollReset:o,relative:i,viewTransition:l})}}),[s,u,h,n,a,t,e,o,i,l])}(d,{replace:u,state:s,target:h,preventScrollReset:p,relative:a,viewTransition:m});let $=r.createElement("a",{...f,...C,href:g||E,onClick:b||o?e:function(t){e&&e(t),t.defaultPrevented||S(t)},ref:qe(v,R),target:h,"data-discover":w||"render"!==t?void 0:"true"});return x&&!w?r.createElement(r.Fragment,null,$,r.createElement(Je,{page:E})):$}));Ze.displayName="Link",r.forwardRef((function({"aria-current":e="page",caseSensitive:t=!1,className:n="",end:a=!1,style:o,to:l,viewTransition:u,children:s,...c},h){let d=te(l,{relative:c.relative}),p=G(),m=r.useContext(j),{navigator:f,basename:v}=r.useContext(z),g=null!=m&&function(e,t={}){let n=r.useContext(H);i(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=nt("useViewTransitionState"),o=te(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=L(n.currentLocation.pathname,a)||n.currentLocation.pathname,u=L(n.nextLocation.pathname,a)||n.nextLocation.pathname;return null!=$(o.pathname,u)||null!=$(o.pathname,l)}(d)&&!0===u,y=f.encodeLocation?f.encodeLocation(d).pathname:d.pathname,w=p.pathname,b=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;t||(w=w.toLowerCase(),b=b?b.toLowerCase():null,y=y.toLowerCase()),b&&v&&(b=L(b,v)||b);const E="/"!==y&&y.endsWith("/")?y.length-1:y.length;let x,R=w===y||!a&&w.startsWith(y)&&"/"===w.charAt(E),C=null!=b&&(b===y||!a&&b.startsWith(y)&&"/"===b.charAt(y.length)),S={isActive:R,isPending:C,isTransitioning:g},k=R?e:void 0;x="function"==typeof n?n(S):[n,R?"active":null,C?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let T="function"==typeof o?o(S):o;return r.createElement(Ze,{...c,"aria-current":k,className:x,ref:h,style:T,to:l,viewTransition:u},"function"==typeof s?s(S):s)})).displayName="NavLink";var et=r.forwardRef((({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:o,state:l,method:u=we,action:s,onSubmit:h,relative:d,preventScrollReset:p,viewTransition:m,...f},v)=>{let g=ot(),y=function(e,{relative:t}={}){let{basename:n}=r.useContext(z),a=r.useContext(K);i(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),l={...te(e||".",{relative:t})},u=G();if(null==e){l.search=u.search;let e=new URLSearchParams(l.search),t=e.getAll("index");if(t.some((e=>""===e))){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();l.search=n?`?${n}`:""}}e&&"."!==e||!o.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(l.pathname="/"===l.pathname?n:O([n,l.pathname]));return c(l)}(s,{relative:d}),w="get"===u.toLowerCase()?"get":"post",b="string"==typeof s&&Qe.test(s);return r.createElement("form",{ref:v,method:w,action:y,onSubmit:a?h:e=>{if(h&&h(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,a=r?.getAttribute("formmethod")||u;g(r||e.currentTarget,{fetcherKey:t,method:a,navigate:n,replace:o,state:l,relative:d,preventScrollReset:p,viewTransition:m})},...f,"data-discover":b||"render"!==e?void 0:"true"})}));function tt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nt(e){let t=r.useContext(U);return i(t,tt(e)),t}et.displayName="Form";var rt=0,at=()=>`__${String(++rt)}__`;function ot(){let{router:e}=nt("useSubmit"),{basename:t}=r.useContext(z),n=he("useRouteId");return r.useCallback((async(r,a={})=>{let{action:o,method:i,encType:l,formData:u,body:s}=Se(r,t);if(!1===a.navigate){let t=a.fetcherKey||at();await e.fetch(t,n,a.action||o,{preventScrollReset:a.preventScrollReset,formData:u,body:s,formMethod:a.method||i,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:u,body:s,formMethod:a.method||i,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})}),[e,t,n])}new TextEncoder}}]);
//# sourceMappingURL=a3bdc892-9902a26cc7e3c38704ef.js.map