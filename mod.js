// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){var e,r,n;if(0===(e=t.length))return 0;for(r=1,n=0;n<e;n++)r*=t[n];return r}function e(t,e){return t[e]}function r(t,e){return t.get(e)}function n(t,e,r){t[e]=r}function o(t,e,r){t.set(r,e)}function s(s){var f,a,u;return f=s.data,u=s.shape,a=Boolean(f.get&&f.set),{ref:s,dtype:s.dtype,data:f,length:t(u),shape:u,strides:s.strides,offset:s.offset,order:s.order,accessors:a,getter:a?r:e,setter:a?o:n}}export{s as default};
//# sourceMappingURL=mod.js.map
