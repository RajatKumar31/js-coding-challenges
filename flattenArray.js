//2625. Flatten Deeply Nested Array

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function(arr, n) {
	let res = [];
	function helper(arr, depth) {
		for (let elem of arr) {
			if (Array.isArray(elem) && depth < n) {
				helper(elem, depth + 1);
			} else {
				res.push(elem);
			}
		}
		return res;
	}
	return helper(arr, 0);
};

// flatten the array (depth is not considered)
const flatten = function(arr) {
	let res = [];
	function helper(arr) {
		for (let elem of arr) {
			if (Array.isArray(elem)) {
				helper(elem);
			} else {
				res.push(elem);
			}
		}
		return res;
	}
	return helper(arr);
};

const arr = [1, 2, [3, 4, [5, [6]]], [7, 8], [9, [10, [11]]]];
// const arr = [1, [2], [3], [4]];
// console.log(flatten(arr));
console.log(flat(arr, 1));
