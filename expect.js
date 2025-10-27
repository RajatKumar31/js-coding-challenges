var createHelloWorld = function() {
	return function(...args) {
		return "Hello World";
	}
};

//***************************************************

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
	return {
		toBe: (value) => {
			if (val === value) {
				return true;
			} else {
				throw new Error("Not Equal");
			}
		},
		notToBe: (value) => {
			if (val !== value) {
				return true;
			} else {
				throw new Error("Equal");
			}
		}
	}
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
