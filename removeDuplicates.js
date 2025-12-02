/**
:* @param {any[]} arr
 */
function deduplicate(arr) {
	let j = 0;
	let set = new Set();
	for (let i = 0; i < arr.length; i++) {
		if (!set.has(arr[i])) {
			set.add(arr[i]);
			arr[j] = arr[i];
			j++;
		}
	}
	arr.length = j;
	// console.log(Array.from(set.values()));
	// arr = Array.from(set.values());
	return arr;
}

let arr = [1, 6, 7, 7, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7, 1, 2, 3];
// console.log(deduplicate(arr));

// return only the duplicates in the array 
function keepDuplicates(arr) {
	const map = new Map();
	for (let i = 0; i < arr.length; i++) {
		if (!map.has(arr[i])) {
			map.set(arr[i], 0);
		}
		map.set(arr[i], map.get(arr[i]) + 1);
	}
	let j = 0;
	for (let i = 0; i < arr.length; i++) {
		if (map.get(arr[i]) > 1) {
			map.set(arr[i], 0);
			arr[j] = arr[i];
			j++;
		}
	}
	arr.length = j;
	return arr;
}

// console.log(keepDuplicates(arr));

function removeDuplicatesFromSortedArray(arr) {
	if (arr.length == 0) {
		return 0;
	}
	let k = 1;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i - 1] != arr[i]) {
			arr[k] = arr[i];
			k++;
		}
	}
	return k;
}

arr = [1, 1, 3, 3, 4, 5, 5, 6, 6, 6, 7, 9];
console.log(removeDuplicatesFromSortedArray(arr));
console.log(arr);
