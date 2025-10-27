//2703. Return Length of Arguments

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
	return args.length;
};

console.log(argumentsLength(1, 2, 3)); // 3

//*************************************************

//2666. Allow One Function Call

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
	let called = false;
	return function(...args) {
		if (!called) {
			called = true;
			return fn(...args);
		}
	}
};

let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
