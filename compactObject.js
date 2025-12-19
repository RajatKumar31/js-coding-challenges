/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
	if (Boolean(obj) === false) { }
};

compactObject([null, 0, false, 1]);

// Example 1:
//
// Input: obj = [null, 0, false, 1]
// Output: [1]
// Explanation: All falsy values have been removed from the array.
// Example 2:
//
// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
// Example 3:
//
// Input: obj = [null, 0, 5, [0], [false, 16]]
// Output: [5, [], [16]]
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

/********************************************************************************
	LEETCODE
********************************************************************************/

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
	if (!Boolean(obj)) {
		return;
	}
	else if (Array.isArray(obj)) {
		let result = [];
		for (let elem of obj) {
			let value = compactObject(elem);
			if (value) {
				result.push(value);
			}
		}
		return result;
	}
	else if (Object.prototype.toString.call(obj) === "[object Object]") {
		let result = {};
		const keys = Object.keys(obj);
		for (let key of keys) {
			let value = compactObject(obj[key]);
			if (value) {
				result[key] = value;
			}
		}
		return result;
	}
	return obj;
};

// const obj = { "a": null, "b": [false, 1] }
const obj = [null, 0, 5, [0], [false, 16]]
const arr = [null, undefined, 1];
console.log(compactObject(obj));
