var throttle = function(fn, t) {
	let last = 0;
	return function(...args) {
		let now = new Date().getTime();
		if (now - last < t) return;
		last = now;
		return fn(...args);
	};
};
