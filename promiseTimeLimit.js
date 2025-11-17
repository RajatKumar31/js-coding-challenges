/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
		const origFnPromise = fn(...args);
		const timeoutPromise = new Promise((_, reject) => {
			setTimeout(() => reject("Time Limit Exceeded"), t);
		});
		return Promise.race([origFnPromise, timeoutPromise]);
	}
};

const fn = async function(...args) {
	return new Promise((resolve, reject) => setTimeout(() => {
		return resolve(2);
	}, 4000)
	);
}
let t = 3000;

const timeLimitedFunction = timeLimit(fn, t);
const result = await timeLimitedFunction();
console.log("result : ", result);

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
