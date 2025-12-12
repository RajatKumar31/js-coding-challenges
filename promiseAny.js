function myPromiseAny(promises) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(promises)) {
			return reject(new TypeError("Argument must be an array"));
		}

		let rejections = [];
		let remaining = promises.length;

		if (remaining === 0) {
			// Must reject with AggregateError if given an empty array
			return reject(new AggregateError([], "All promises were rejected"));
		}

		promises.forEach((p, index) => {
			Promise.resolve(p)
				.then(value => {
					// Resolve as soon as one promise fulfills
					resolve(value);
				})
				.catch(error => {
					rejections[index] = error;
					remaining--;

					// If all promises rejected, reject with AggregateError
					if (remaining === 0) {
						reject(new AggregateError(rejections, "All promises were rejected"));
					}
				});
		});
	});
}
