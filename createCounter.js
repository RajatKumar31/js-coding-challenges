// 2620. Counter

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
	return function() {
		return n++;
	};
};

const counter = createCounter(10)
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12


// class based
class Counter {

	constructor(n) {
		this.n = n;
	}

	increment() {
		return this.n++;
	}
}



//const counter = new Counter(10);
//console.log(counter.increment());
//console.log(counter.increment());
//console.log(counter.increment());
