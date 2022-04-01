// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs";var t=e,r=function(e,t){return e[t]},s=function(e,t){return e.get(t)},n=function(e,t,r){e[t]=r},a=function(e,t,r){e.set(r,t)};var o=function(e){var o,d,f;return o=e.data,f=e.shape,d=Boolean(o.get&&o.set),{ref:e,dtype:e.dtype,data:o,length:t(f),shape:f,strides:e.strides,offset:e.offset,order:e.order,accessors:d,getter:d?s:r,setter:d?a:n}};export{o as default};
//# sourceMappingURL=index.mjs.map
