this.workbox=this.workbox||{},this.workbox.routing=function(t,e){"use strict";try{self.workbox.v["workbox:routing:4.0.0-beta.0"]=1}catch(t){}const r="GET";var s=t=>t&&"object"==typeof t?t:{handle:t};class n{constructor(t,e,n){this.handler=s(e),this.match=t,this.method=n||r}}class o extends n{constructor(t,{whitelist:e=[/./],blacklist:r=[]}={}){super(t=>this.t(t),t),this.e=e,this.r=r}t({url:t,request:e}){if("navigate"!==e.mode)return!1;const r=t.pathname+t.search;for(const t of this.r)if(t.test(r))return!1;return!!this.e.some(t=>t.test(r))}}class i extends n{constructor(t,e,r){super(({url:e})=>{const r=t.exec(e.href);return r?e.origin!==location.origin&&0!==r.index?null:r.slice(1):null},e,r)}}class u{constructor(){this.s=new Map}get routes(){return this.s}addFetchListener(){self.addEventListener("fetch",t=>{const{request:e}=t,r=this.handleRequest({request:e,event:t});r&&t.respondWith(r)})}addCacheListener(){self.addEventListener("message",t=>{if("CACHE_URLS"===t.data.type&&"workbox-window"===t.data.meta){const{urlsToCache:e}=t.data.payload;for(const r of e){const e=new Request(r);this.handleRequest({request:e,event:t})}}})}handleRequest({request:t,event:e}){const r=new URL(t.url,location);if(!r.protocol.startsWith("http"))return;let s,{params:n,route:o}=this.findMatchingRoute({url:r,request:t,event:e}),i=o&&o.handler;if(!i&&this.n&&(i=this.n),i){try{s=i.handle({url:r,request:t,event:e,params:n})}catch(t){s=Promise.reject(t)}return s&&this.o&&(s=s.catch(t=>this.o.handle({url:r,event:e,err:t}))),s}}findMatchingRoute({url:t,request:e,event:r}){const s=this.s.get(e.method)||[];for(const n of s){let s,o=n.match({url:t,request:e,event:r});if(o)return Array.isArray(o)&&o.length>0?s=o:o.constructor===Object&&Object.keys(o).length>0&&(s=o),{route:n,params:s}}return{}}setDefaultHandler(t){this.n=s(t)}setCatchHandler(t){this.o=s(t)}registerRoute(t){this.s.has(t.method)||this.s.set(t.method,[]),this.s.get(t.method).push(t)}unregisterRoute(e){if(!this.s.has(e.method))throw new t.WorkboxError("unregister-route-but-not-found-with-method",{method:e.method});const r=this.s.get(e.method).indexOf(e);if(!(r>-1))throw new t.WorkboxError("unregister-route-route-not-registered");this.s.get(e.method).splice(r,1)}}class c extends u{constructor(){super(),this.addFetchListener(),this.addCacheListener()}registerRoute(e,r,s="GET"){let o;if("string"==typeof e){const t=new URL(e,location);o=new n(({url:e})=>e.href===t.href,r,s)}else if(e instanceof RegExp)o=new i(e,r,s);else if("function"==typeof e)o=new n(e,r,s);else{if(!(e instanceof n))throw new t.WorkboxError("unsupported-route-type",{moduleName:"workbox-routing",className:"DefaultRouter",funcName:"registerRoute",paramName:"capture"});o=e}return super.registerRoute(o),o}registerNavigationRoute(t,r={}){const s=e.cacheNames.getPrecacheName(r.cacheName),n=new o(()=>caches.match(t,{cacheName:s}).then(e=>{if(e)return e;throw new Error(`The cache ${s} did not have an entry for `+`${t}.`)}).catch(e=>fetch(t)),{whitelist:r.whitelist,blacklist:r.blacklist});return super.registerRoute(n),n}}var a=Object.freeze({DefaultRouter:c,RegExpRoute:i,Route:n,Router:u,NavigationRoute:o}),h=new c;return Object.assign(h,a)}(workbox.core._private,workbox.core._private);

//# sourceMappingURL=workbox-routing.prod.js.map
