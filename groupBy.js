Object.prototype.customGroupBy = function(items, callback) {

}

const items = [
	{
		id: 1,
		kind: 'a',
	},
	{
		id: 2,
		kind: 'b',
	},
	{
		id: 3,
		kind: 'a',
	}
];

// const groups = Object.groupBy(items, ({ id }) => id);
// console.log(groups);

const map = new Map();

items.forEach((elem) => {
	if (!map.has(elem.kind)) {
		map.set(elem.kind, []);
	}
	map.get(elem.kind).push(elem);
});

// console.log(map);
// console.log(Array.from(map.values()));
// console.log(Object.fromEntries(map));

/********************************************************************************
 * Leetcode
 ********************************************************************************/

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
	const map = new Map();
	this.forEach((elem) => {
		if (!map.has(fn(elem))) {
			map.set(fn(elem), []);
		}
		map.get(fn(elem)).push(elem);
	});
	return Object.fromEntries(map);
};

console.log([1, 2, 3].groupBy(String));

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
