// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n={complex128:function(n,t){return n.get(t)},complex64:function(n,t){return n.get(t)},default:function(n,t){return n.get(t)}};var t={complex128:function(n,t,u){n.set(u,t)},complex64:function(n,t,u){n.set(u,t)},default:function(n,t,u){n.set(u,t)}};function u(n){var u=t[n];return"function"==typeof u?u:t.default}var e={float64:function(n,t){return n[t]},float32:function(n,t){return n[t]},int32:function(n,t){return n[t]},int16:function(n,t){return n[t]},int8:function(n,t){return n[t]},uint32:function(n,t){return n[t]},uint16:function(n,t){return n[t]},uint8:function(n,t){return n[t]},uint8c:function(n,t){return n[t]},generic:function(n,t){return n[t]},default:function(n,t){return n[t]}};function f(n){var t=e[n];return"function"==typeof t?t:e.default}var o={float64:function(n,t,u){n[t]=u},float32:function(n,t,u){n[t]=u},int32:function(n,t,u){n[t]=u},int16:function(n,t,u){n[t]=u},int8:function(n,t,u){n[t]=u},uint32:function(n,t,u){n[t]=u},uint16:function(n,t,u){n[t]=u},uint8:function(n,t,u){n[t]=u},uint8c:function(n,t,u){n[t]=u},generic:function(n,t,u){n[t]=u},default:function(n,t,u){n[t]=u}};function r(n){var t=o[n];return"function"==typeof t?t:o.default}function i(n){var t,u,e;if(0===(t=n.length))return 0;for(u=1,e=0;e<t;e++)u*=n[e];return u}function c(t){var e,o,c,a,l,s,d;return e=t.data,c=t.shape,a=t.dtype,o="function"==typeof(l=e).get&&"function"==typeof l.set,{ref:t,dtype:a,data:e,length:i(c),shape:c,strides:t.strides,offset:t.offset,order:t.order,accessorProtocol:o,accessors:o?[(s=a,d=n[s],"function"==typeof d?d:n.default),u(a)]:[f(a),r(a)]}}export{c as default};
//# sourceMappingURL=mod.js.map