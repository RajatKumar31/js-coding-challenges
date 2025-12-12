function myPromiseRace(promises) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(promises)) {
			return reject(new TypeError("Argument must be an array"));
		}

		for (let p of promises) {
			// Wrap each in Promise.resolve so non-promises work too
			Promise.resolve(p)
				.then(resolve)
				.catch(reject);
		}
	});
}

myPromiseRace([
	new Promise(res => setTimeout(() => res("slow"), 1000)),
	new Promise(res => setTimeout(() => res("fast"), 100)),
	new Promise(res => setTimeout(() => res("super fast"), 10))
]).then(console.log);
