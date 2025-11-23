/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
	const arr1 = v1.split(".");
	const arr2 = v2.split(".");
	let i = 0;
	while (i < arr1.length && i < arr2.length) {
		if (Number(arr1[i]) > Number(arr2[i])) {
			return 1;
		} else if (Number(arr1[i]) < Number(arr2[i])) {
			return -1;
		} else {
			i++;
		}
	}
	return 0;
}

console.log(compare('12.1.0', '12.0.9')); // 1, meaning first one is greater
console.log(compare('12.1.0', '12.1.2')); // -1, meaning latter one is greater
console.log(compare('5.0.1', '5.0.1')); // 0, meaning they are equal.
console.log(compare('0.1.100', '0.1.99'));
