class TimeLimitedCache {

	cache: object;

	constructor() {
		this.cache = {};
	}

	set(key: number, value: number, duration: number): boolean {
		if (this.cache[key]) {
			clearTimeout(this.cache[key].ttl);
			this.cache[key] = { value, ttl: setTimeout(() => delete this.cache[key], duration) };
			return true;
		}
		this.cache[key] = { value, ttl: setTimeout(() => delete this.cache[key], duration) };
		return false;
	}

	get(key: number): number {
		if (this.cache[key]) {
			return this.cache[key].value;
		}
		return -1;
	}

	count(): number {
		return Object.keys(this.cache).length;
	}
}

const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
// setTimeout(() => {
// 	console.log(timeLimitedCache.get(1));
// }, 3000);

console.log(timeLimitedCache.set(1, 42, 1000)); // false
