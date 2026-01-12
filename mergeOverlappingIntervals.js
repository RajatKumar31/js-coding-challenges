let arr = [[1, 3], [2, 6], [8, 10], [15, 18]];

function merge(arr) {
	arr.sort((a, b) => a[0] - b[0]);
	let merged = [];
	for (let interval of arr) {
		if (merged.length == 0 || merged[merged.length - 1][1] < interval[0]) {
			merged.push(interval);
		} else {
			let maxEnd = Math.max(merged[merged.length - 1][1], interval[1]);
			merged[merged.length - 1][1] = maxEnd;
		}
	}
	return merged;
}

console.log(merge(arr));
