//2677. Chunk Array

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
	let res = [];
	let chunk = [];
	for (let i = 0; i < arr.length; i++) {
		chunk.push(arr[i]);
		if (chunk.length === size) {
			res.push(chunk);
			chunk = [];
		}
	}

	if (chunk.length > 0) {
		res.push(chunk);
	}
	return res;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(arr, 3));
