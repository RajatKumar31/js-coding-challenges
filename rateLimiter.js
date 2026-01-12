function rateLimit(fn, limit, windowMs) {
	let count = 0;
	let windowStart = Date.now();

	return function(...args) {
		const now = Date.now();

		// Reset window if expired
		if (now - windowStart >= windowMs) {
			count = 0;
			windowStart = now;
		}

		if (count >= limit) {
			return "Rate limit exceeded";
		}

		count++;
		return fn(...args);
	};
}

const fn = function() {

}

const rateLimitedFn = rateLimit();
