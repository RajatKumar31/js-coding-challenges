/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
	const _promises = promises.map((promise) => {
		if (promise instanceof Promise) {
			return promise;
		} else {
			return Promise.resolve(promise);
		}
	});
	if (promises.length === 0) {
		return Promise.resolve([]);
	}
	return new Promise((resolve, reject) => {
		let result = [];
		let fulfilledCount = 0;
		let isErrored = false;

		_promises.forEach((promise, index) => {
			promise.then((value) => {
				if (isErrored) {
					return;
				}
				result[index] = value;
				fulfilledCount++;
				if (fulfilledCount === _promises.length) {
					resolve(result);
				}
			}).catch((err) => {
				if (isErrored) {
					return;
				}
				isErrored = true;
				reject(err);
			})
		})
	})
}
