"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=i(function(y,o){
var u=require('@stdlib/array-base-assert-is-accessor-array/dist'),v=require('@stdlib/array-base-accessor-getter/dist'),d=require('@stdlib/array-base-accessor-setter/dist'),f=require('@stdlib/array-base-getter/dist'),n=require('@stdlib/array-base-setter/dist'),q=require('@stdlib/ndarray-base-numel/dist');function p(r){var e,t,a,s;return e=r.data,a=r.shape,s=r.dtype,t=u(e),{ref:r,dtype:s,data:e,length:q(a),shape:a,strides:r.strides,offset:r.offset,order:r.order,accessorProtocol:t,accessors:t?[v(s),d(s)]:[f(s),n(s)]}}o.exports=p
});var l=c();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
