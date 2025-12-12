/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function customPromiseAll(promises) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(promises)) {
			return reject(new Error("Argument must be an array"));
		}
		let results = [];
		let remaining = promises.length;

		promises.forEach((p, index) => {
			Promise.resolve(p).then((data) => {
				results[index] = data;
				remaining--;
				if (remaining == 0) {
					resolve(results);
				}
			}).catch((error) => {
				reject(error)
			});
		});
	});
}

customPromiseAll([
	Promise.resolve(1),
	2,
	new Promise(resolve => setTimeout(() => resolve(3), 1000))
]).then(console.log); 
