// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Boolean;function e(t){var e,r,n;if(0===(e=t.length))return 0;for(r=1,n=0;n<e;n++)r*=t[n];return r}function r(t,e){return t[e]}function n(t,e){return t.get(e)}function o(t,e,r){t[e]=r}function s(t,e,r){t.set(r,e)}function f(f){var a,u,d;return a=f.data,d=f.shape,u=t(a.get&&a.set),{ref:f,dtype:f.dtype,data:a,length:e(d),shape:d,strides:f.strides,offset:f.offset,order:f.order,accessors:u,getter:u?n:r,setter:u?s:o}}export{f as default};
//# sourceMappingURL=mod.js.map
