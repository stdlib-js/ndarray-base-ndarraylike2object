/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var numel = require( '@stdlib/ndarray-base-numel' );
var getIndexed = require( './getter.js' );
var getAccessor = require( './getter.accessor.js' );
var setIndexed = require( './setter.js' );
var setAccessor = require( './setter.accessor.js' );


// MAIN //

/**
* Converts an ndarray-like to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding ndarray meta data to ensure that internal functions operating on ndarrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **ref**: reference to the original ndarray-like object.
*     -   **dtype**: underlying data type.
*     -   **data**: data buffer.
*     -   **length**: number of elements.
*     -   **shape**: array dimensions.
*     -   **strides**: array strides.
*     -   **offset**: index offset.
*     -   **order**: order.
*     -   **accessors**: `boolean` indicating whether the data buffer uses accessors for getting and setting elements.
*     -   **getter**: accessor for retrieving a data buffer element.
*     -   **setter**: accessor for setting a data buffer element.
*
* @param {ndarrayLike} x - ndarray-like object
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @returns {Object} object containing ndarray meta data
*
* @example
* var array = require( '@stdlib/ndarray-array' );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
*
* var obj = ndarraylike2object( x );
* // returns {...}
*/
function ndarraylike2object( x ) {
	var xbuf;
	var bool;
	var sh;

	xbuf = x.data;
	sh = x.shape;

	bool = Boolean( xbuf.get && xbuf.set ); // Note: intentional weak check, as we don't explicitly check for functions for (perhaps marginally) better performance.

	return {
		'ref': x,
		'dtype': x.dtype,
		'data': xbuf,
		'length': numel( sh ),
		'shape': sh,
		'strides': x.strides,
		'offset': x.offset,
		'order': x.order,
		'accessors': bool,
		'getter': ( bool ) ? getAccessor : getIndexed,
		'setter': ( bool ) ? setAccessor : setIndexed
	};
}


// EXPORTS //

module.exports = ndarraylike2object;
