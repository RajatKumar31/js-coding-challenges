/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

var join = function(arr1, arr2) {
	const map = new Map();
	arr1.forEach((elem) => {
		map.set(elem.id, elem);
	});
	arr2.forEach((elem) => {
		if (!map.has(elem.id)) {
			map.set(elem.id, elem);
		} else {
			const obj = map.get(elem.id);
			map.set(elem.id, { ...obj, ...elem });
		}
	});
	return Array.from(map.values()).sort((a, b) => a.id - b.id);
};

let arr1 = [
	{ "id": 1, "b": { "b": 94 }, "v": [4, 3], "y": 48 }
];
let arr2 = [
	{ "id": 1, "b": { "c": 84 }, "v": [1, 3] }
];

// console.log(join(arr1, arr2));

let obj1 = { "id": 1, "b": { "b": 94 }, "v": [4, 3], "y": 48 };
let obj2 = { "id": 1, "b": { "c": 84 }, "v": [1, 3] };
console.log(join(arr1, arr2));




/*
Output: [
	{"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
]
*/
