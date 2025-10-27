//2632. Curry

function curry(fn) {
	let nums = [];
	return function curried(...args) {
		nums = [...nums, ...args];
		if (fn.length === nums.length) {
			const res = fn(...nums);
			nums = [];
			return res;
		} else {
			return curried;
		}
	};
}

function sum(a, b) { return a + b; }
const csum = curry(sum);
console.log(csum(19)(20)); // 3


const curry = function(fn) {
	return function curried(...args) {
		if (fn.length === args.length) {
			return fn(...args);
		} else {
			return function(...nextArgs) {
				return curried(...args, ...nextArgs);
			};
		}
	}
}
