function myPromiseAllSettled(promises) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(promises)) {
			return reject(new Error("Arguments should an Array"));
		}
		let results = [];
		let remaining = promises.length;

		promises.forEach((p, index) => {
			Promise.resolve(p).then((data) => {
				results[index] = { status: "fulfilled", data };
			}).catch((error) => {
				results[index] = { status: "rejected", error };
			}).finally(() => {
				remaining--;
				if (remaining == 0) {
					resolve(results);
				}
			});
		});
	});
}

myPromiseAllSettled([
	Promise.resolve(1),
	Promise.reject("error"),
	3
]).then(console.log);
