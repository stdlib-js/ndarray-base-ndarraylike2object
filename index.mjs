// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs";function t(e,t){return e[t]}function r(e,t){return e.get(t)}function s(e,t,r){e[t]=r}function n(e,t,r){e.set(r,t)}function o(o){var a,d,f;return a=o.data,f=o.shape,d=Boolean(a.get&&a.set),{ref:o,dtype:o.dtype,data:a,length:e(f),shape:f,strides:o.strides,offset:o.offset,order:o.order,accessors:d,getter:d?r:t,setter:d?n:s}}export{o as default};
//# sourceMappingURL=index.mjs.map
