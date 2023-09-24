// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n="function",t={complex128:function(n,t){return n.get(t)},complex64:function(n,t){return n.get(t)},default:function(n,t){return n.get(t)}},e={complex128:function(n,t,e){n.set(e,t)},complex64:function(n,t,e){n.set(e,t)},default:function(n,t,e){n.set(e,t)}};function u(n){var t=e[n];return"function"==typeof t?t:e.default}var o={float64:function(n,t){return n[t]},float32:function(n,t){return n[t]},int32:function(n,t){return n[t]},int16:function(n,t){return n[t]},int8:function(n,t){return n[t]},uint32:function(n,t){return n[t]},uint16:function(n,t){return n[t]},uint8:function(n,t){return n[t]},uint8c:function(n,t){return n[t]},generic:function(n,t){return n[t]},default:function(n,t){return n[t]}};function f(n){var t=o[n];return"function"==typeof t?t:o.default}var i={float64:function(n,t,e){n[t]=e},float32:function(n,t,e){n[t]=e},int32:function(n,t,e){n[t]=e},int16:function(n,t,e){n[t]=e},int8:function(n,t,e){n[t]=e},uint32:function(n,t,e){n[t]=e},uint16:function(n,t,e){n[t]=e},uint8:function(n,t,e){n[t]=e},uint8c:function(n,t,e){n[t]=e},generic:function(n,t,e){n[t]=e},default:function(n,t,e){n[t]=e}};function r(n){var t=i[n];return"function"==typeof t?t:i.default}function c(n){var t,e,u;if(0===(t=n.length))return 0;for(e=1,u=0;u<t;u++)e*=n[u];return e}return function(e){var o,i,a,d,l,s,p;return o=e.data,a=e.shape,d=e.dtype,i=typeof(l=o).get===n&&typeof l.set===n,{ref:e,dtype:d,data:o,length:c(a),shape:a,strides:e.strides,offset:e.offset,order:e.order,accessorProtocol:i,accessors:i?[(s=d,p=t[s],"function"==typeof p?p:t.default),u(d)]:[f(d),r(d)]}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).ndarraylike2object=t();
//# sourceMappingURL=index.js.map
