function ObjectGroupBy<T, K extends keyof any>(
	items: Array<T>,
	callback: (item: T) => K
): Record<K, Array<T>> {
	const map = new Map();
	items.forEach((item) => {
		if (!map.has(item)) {
			map.set(callback(item), []);
		}
		map.get(callback(item)).push(item);
	});
	return Object.fromEntries(map);
}
