// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.0.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.1.0-esm/index.mjs";function i(i){var o,m,n,c;return o=i.data,n=i.shape,c=i.dtype,m=s(o),{ref:i,dtype:c,data:o,length:d(n),shape:n,strides:i.strides,offset:i.offset,order:i.order,accessorProtocol:m,accessors:m?[e(c),r(c)]:[t(c),a(c)]}}export{i as default};
//# sourceMappingURL=index.mjs.map
