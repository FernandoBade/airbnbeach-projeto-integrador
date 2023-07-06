import{A as D,i as d,p as I,s as T,m as V,j as E,a as _,g as F,r as J}from"./@remix-run-cc96569a.js";import{a as B,r as a}from"./react-86a4a8f4.js";/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function $(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const z=typeof Object.is=="function"?Object.is:$,{useState:G,useEffect:W,useLayoutEffect:q,useDebugValue:K}=B;function Q(e,t,r){const n=t(),[{inst:o},l]=G({inst:{value:n,getSnapshot:t}});return q(()=>{o.value=n,o.getSnapshot=t,O(o)&&l({inst:o})},[e,n,t]),W(()=>(O(o)&&l({inst:o}),e(()=>{O(o)&&l({inst:o})})),[e]),K(n),n}function O(e){const t=e.getSnapshot,r=e.value;try{const n=t();return!z(r,n)}catch{return!0}}function X(e,t,r){return t()}const Y=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Z=!Y,H=Z?X:Q,A="useSyncExternalStore"in B?(e=>e.useSyncExternalStore)(B):H,N=a.createContext(null),P=a.createContext(null),b=a.createContext(null),S=a.createContext(null),m=a.createContext({outlet:null,matches:[]}),k=a.createContext(null);function xe(e,t){let{relative:r}=t===void 0?{}:t;g()||d(!1);let{basename:n,navigator:o}=a.useContext(b),{hash:l,pathname:s,search:u}=re(e,{relative:r}),i=s;return n!=="/"&&(i=s==="/"?n:E([n,s])),o.createHref({pathname:i,search:u,hash:l})}function g(){return a.useContext(S)!=null}function U(){return g()||d(!1),a.useContext(S).location}function ee(){g()||d(!1);let{basename:e,navigator:t}=a.useContext(b),{matches:r}=a.useContext(m),{pathname:n}=U(),o=JSON.stringify(F(r).map(u=>u.pathnameBase)),l=a.useRef(!1);return a.useEffect(()=>{l.current=!0}),a.useCallback(function(u,i){if(i===void 0&&(i={}),!l.current)return;if(typeof u=="number"){t.go(u);return}let c=J(u,JSON.parse(o),n,i.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:E([e,c.pathname])),(i.replace?t.replace:t.push)(c,i.state,i)},[e,t,o,n])}const w=a.createContext(null);function Ce(){return a.useContext(w)}function te(e){let t=a.useContext(m).outlet;return t&&a.createElement(w.Provider,{value:e},t)}function Ee(){let{matches:e}=a.useContext(m),t=e[e.length-1];return t?t.params:{}}function re(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=a.useContext(m),{pathname:o}=U(),l=JSON.stringify(F(n).map(s=>s.pathnameBase));return a.useMemo(()=>J(e,JSON.parse(l),o,r==="path"),[e,l,o,r])}function ne(e,t){g()||d(!1);let{navigator:r}=a.useContext(b),n=a.useContext(P),{matches:o}=a.useContext(m),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let i=U(),c;if(t){var h;let f=typeof t=="string"?I(t):t;u==="/"||(h=f.pathname)!=null&&h.startsWith(u)||d(!1),c=f}else c=i;let p=c.pathname||"/",C=u==="/"?p:p.slice(u.length)||"/",x=V(e,{pathname:C}),v=se(x&&x.map(f=>Object.assign({},f,{params:Object.assign({},s,f.params),pathname:E([u,r.encodeLocation?r.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:E([u,r.encodeLocation?r.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),o,n||void 0);return t&&v?a.createElement(S.Provider,{value:{location:y({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:D.Pop}},v):v}function ae(){let e=de(),t=_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),r?a.createElement("pre",{style:o},r):null,l)}class oe extends a.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location?{error:t.error,location:t.location}:{error:t.error||r.error,location:r.location}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?a.createElement(m.Provider,{value:this.props.routeContext},a.createElement(k.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function le(e){let{routeContext:t,match:r,children:n}=e,o=a.useContext(N);return o&&o.static&&o.staticContext&&r.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(m.Provider,{value:t},n)}function se(e,t,r){if(t===void 0&&(t=[]),e==null)if(r!=null&&r.errors)e=r.matches;else return null;let n=e,o=r==null?void 0:r.errors;if(o!=null){let l=n.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));l>=0||d(!1),n=n.slice(0,Math.min(n.length,l+1))}return n.reduceRight((l,s,u)=>{let i=s.route.id?o==null?void 0:o[s.route.id]:null,c=r?s.route.errorElement||a.createElement(ae,null):null,h=t.concat(n.slice(0,u+1)),p=()=>a.createElement(le,{match:s,routeContext:{outlet:l,matches:h}},i?c:s.route.element!==void 0?s.route.element:l);return r&&(s.route.errorElement||u===0)?a.createElement(oe,{location:r.location,component:c,error:i,children:p(),routeContext:{outlet:null,matches:h}}):p()},null)}var L;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(L||(L={}));var R;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(R||(R={}));function ue(e){let t=a.useContext(P);return t||d(!1),t}function ie(e){let t=a.useContext(m);return t||d(!1),t}function ce(e){let t=ie(),r=t.matches[t.matches.length-1];return r.route.id||d(!1),r.route.id}function de(){var e;let t=a.useContext(k),r=ue(R.UseRouteError),n=ce(R.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function ye(e){let{fallbackElement:t,router:r}=e,n=A(r.subscribe,()=>r.state,()=>r.state),o=a.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:s=>r.navigate(s),push:(s,u,i)=>r.navigate(s,{state:u,preventScrollReset:i==null?void 0:i.preventScrollReset}),replace:(s,u,i)=>r.navigate(s,{replace:!0,state:u,preventScrollReset:i==null?void 0:i.preventScrollReset})}),[r]),l=r.basename||"/";return a.createElement(a.Fragment,null,a.createElement(N.Provider,{value:{router:r,navigator:o,static:!1,basename:l}},a.createElement(P.Provider,{value:n},a.createElement(he,{basename:r.basename,location:r.state.location,navigationType:r.state.historyAction,navigator:o},r.state.initialized?a.createElement(pe,null):t))),null)}function Re(e){let{to:t,replace:r,state:n,relative:o}=e;g()||d(!1);let l=a.useContext(P),s=ee();return a.useEffect(()=>{l&&l.navigation.state!=="idle"||s(t,{replace:r,state:n,relative:o})}),null}function Pe(e){return te(e.context)}function fe(e){d(!1)}function he(e){let{basename:t="/",children:r=null,location:n,navigationType:o=D.Pop,navigator:l,static:s=!1}=e;g()&&d(!1);let u=t.replace(/^\/*/,"/"),i=a.useMemo(()=>({basename:u,navigator:l,static:s}),[u,l,s]);typeof n=="string"&&(n=I(n));let{pathname:c="/",search:h="",hash:p="",state:C=null,key:x="default"}=n,v=a.useMemo(()=>{let f=T(c,u);return f==null?null:{pathname:f,search:h,hash:p,state:C,key:x}},[u,c,h,p,C,x]);return v==null?null:a.createElement(b.Provider,{value:i},a.createElement(S.Provider,{children:r,value:{location:v,navigationType:o}}))}function pe(e){let{children:t,location:r}=e,n=a.useContext(N),o=n&&!t?n.router.routes:M(t);return ne(o,r)}var j;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(j||(j={}));new Promise(()=>{});function M(e,t){t===void 0&&(t=[]);let r=[];return a.Children.forEach(e,(n,o)=>{if(!a.isValidElement(n))return;if(n.type===a.Fragment){r.push.apply(r,M(n.props.children,t));return}n.type!==fe&&d(!1),!n.props.index||!n.props.children||d(!1);let l=[...t,o],s={id:n.props.id||l.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,hasErrorBoundary:n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle};n.props.children&&(s.children=M(n.props.children,l)),r.push(s)}),r}function me(e){return e.map(t=>{let r=y({},t);return r.hasErrorBoundary==null&&(r.hasErrorBoundary=r.errorElement!=null),r.children&&(r.children=me(r.children)),r})}export{Re as N,Pe as O,ye as R,ee as a,U as b,re as c,Ee as d,me as e,Ce as f,de as g,xe as u};
