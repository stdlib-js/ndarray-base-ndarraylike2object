// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function",r={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function t(e){var t=r[e];return"function"==typeof t?t:r.default}var n={complex128:function(e,r,t){e.set(t,r)},complex64:function(e,r,t){e.set(t,r)},default:function(e,r,t){e.set(t,r)}};function i(e){var r=n[e];return"function"==typeof r?r:n.default}var o={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function a(e){var r=o[e];return"function"==typeof r?r:o.default}var u={float64:function(e,r,t){e[r]=t},float32:function(e,r,t){e[r]=t},int32:function(e,r,t){e[r]=t},int16:function(e,r,t){e[r]=t},int8:function(e,r,t){e[r]=t},uint32:function(e,r,t){e[r]=t},uint16:function(e,r,t){e[r]=t},uint8:function(e,r,t){e[r]=t},uint8c:function(e,r,t){e[r]=t},generic:function(e,r,t){e[r]=t},default:function(e,r,t){e[r]=t}};function c(e){var r=u[e];return"function"==typeof r?r:u.default}function f(e){var r,t,n;if(0===(r=e.length))return 0;for(t=1,n=0;n<r;n++)t*=e[n];return t}function s(e){var r,t,n;for(t=e.length,r=[],n=0;n<t;n++)r.push(e[n]);return r}var l="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function g(e){return"number"==typeof e}function d(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function h(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+d(i):d(i)+e,n&&(e="-"+e)),e}var v=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function w(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!g(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=h(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=h(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===b.call(e.specifier)?b.call(t):v.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function y(e){return"string"==typeof e}var m=Math.abs,_=String.prototype.toLowerCase,x=String.prototype.toUpperCase,j=String.prototype.replace,k=/e\+(\d)$/,E=/e-(\d)$/,S=/^(\d+)$/,V=/^(\d+)e/,T=/\.0$/,$=/\.0*e/,F=/(\..*[^0])0*e/;function A(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!g(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":m(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=j.call(t,F,"$1e"),t=j.call(t,$,"e"),t=j.call(t,T,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=j.call(t,k,"e+0$1"),t=j.call(t,E,"e-0$1"),e.alternate&&(t=j.call(t,S,"$1."),t=j.call(t,V,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===x.call(e.specifier)?x.call(t):_.call(t)}function I(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function C(e,r,t){var n=r-e.length;return n<0?e:e=t?e+I(n):I(n)+e}var P=String.fromCharCode,R=isNaN,O=Array.isArray;function Z(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function G(e){var r,t,n,i,o,a,u,c,f;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if(y(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=Z(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,R(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,R(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!R(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=R(o)?String(n.arg):P(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=h(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=C(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function M(e){var r,t,n,i;for(t=[],i=0,n=W.exec(e);n;)(r=e.slice(i,W.lastIndex-n[0].length)).length&&t.push(r),t.push(L(n)),i=W.lastIndex,n=W.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function N(e){return"string"==typeof e}function U(e){var r,t,n;if(!N(e))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=M(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return G.apply(null,t)}var X,z,q=Object.prototype,B=q.toString,D=q.__defineGetter__,H=q.__defineSetter__,J=q.__lookupGetter__,K=q.__lookupSetter__;function Q(e,r){return"column-major"===r?function(e){var r,t,n;for(r=[],t=1,n=0;n<e.length;n++)r.push(t),t*=e[n];return r}(e):function(e){var r,t,n,i;for(r=e.length,t=[],i=0;i<r;i++)t.push(0);for(n=1,i=r-1;i>=0;i--)t[i]=n,n*=e[i];return t}(e)}function Y(e,r){var t,n,i;return"object"!=typeof(i=e.strides)||null===i?0===(n=e.shape).length?[0]:("string"!=typeof(t=e.order)&&(t="row-major"),Q(n,t)):r?s(i):i}function ee(e){var r,t,n;return"number"==typeof(n=e.offset)?n:0===(t=e.shape).length||"object"!=typeof(r=e.strides)||null===r?0:function(e,r){var t,n,i;for(n=e.length,t=0,i=0;i<n;i++)r[i]<0&&(t-=r[i]*(e[i]-1));return t}(t,r)}function re(e){return Math.abs(e)}X=function(){try{return l({},"x",{}),!0}catch(e){return!1}}()?p:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(e,r)||K.call(e,r)?(n=e.__proto__,e.__proto__=q,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&D&&D.call(e,r,t.get),a&&H&&H.call(e,r,t.set),e},z=function(e,r,t){return"column-major"===r?function(e,r){var t,n;for(t=1,n=0;n<e.length;n++)r[n]=t,t*=e[n];return r}(e,t):function(e,r){var t,n;for(t=1,n=e.length-1;n>=0;n--)r[n]=t,t*=e[n];return r}(e,t)},X(Q,"assign",{configurable:!1,enumerable:!1,writable:!1,value:z});var te="row-major";function ne(e){var r,t;return"string"==typeof(t=e.order)?t:"object"!=typeof(r=e.strides)||null===r?te:(t=function(e){var r,t,n,i,o,a;if(0===(t=e.length))return 0;for(r=!0,n=!0,i=re(e[0]),a=1;a<t;a++){if(o=re(e[a]),r&&o<i?r=!1:n&&o>i&&(n=!1),!n&&!r)return 0;i=o}return n&&r?3:n?1:2}(r),1===t||3===t?te:2===t?"column-major":0===e.shape.length?te:null)}return function(r){var n,o,u,l;return n=function(e){return e.data}(r),u=function(e,r){var t=e.shape;return r?s(t):t}(r,!0),l=function(e){return e.dtype}(r),o=function(r){return typeof r.get===e&&typeof r.set===e}(n),{ref:r,dtype:l,data:n,length:f(u),shape:u,strides:Y(r,!0),offset:ee(r),order:ne(r),accessorProtocol:o,accessors:o?[t(l),i(l)]:[a(l),c(l)]}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ndarraylike2object=r();
//# sourceMappingURL=index.js.map
