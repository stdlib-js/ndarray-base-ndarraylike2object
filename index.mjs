// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/boolean-ctor@v0.0.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs";function s(t,e){return t[e]}function r(t,e){return t.get(e)}function n(t,e,s){t[e]=s}function d(t,e,s){t.set(s,e)}function o(o){var i,a,f;return i=o.data,f=o.shape,a=t(i.get&&i.set),{ref:o,dtype:o.dtype,data:i,length:e(f),shape:f,strides:o.strides,offset:o.offset,order:o.order,accessors:a,getter:a?r:s,setter:a?d:n}}export{o as default};
//# sourceMappingURL=index.mjs.map
