// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=function(t){var e,r,n;if(0===(e=t.length))return 0;for(r=1,n=0;n<e;n++)r*=t[n];return r},e=function(t,e){return t[e]},r=function(t,e){return t.get(e)},n=function(t,e,r){t[e]=r},o=function(t,e,r){t.set(r,e)};var s=function(s){var a,f,u;return a=s.data,u=s.shape,f=Boolean(a.get&&a.set),{ref:s,dtype:s.dtype,data:a,length:t(u),shape:u,strides:s.strides,offset:s.offset,order:s.order,accessors:f,getter:f?r:e,setter:f?o:n}};export{s as default};
//# sourceMappingURL=mod.js.map
