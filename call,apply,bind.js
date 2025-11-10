const car = {
	color: "Red",
	company: "BMW"
};

function purchaseCar(currency, price) {
	console.log(`${this.color} ${this.company} car for price ${currency} ${price}`);
}
// purchaseCar.call(car, '$', 200);
// purchaseCar.apply(car, ['$', 900]);

Function.prototype.myCall = function(context = {}, ...args) {
	console.log("context : ", context);
	console.log("this : ", this);
	if (typeof this !== 'function') {
		throw new Error("not callable");
	}
	context.fn = this;
	context.fn(...args);
}

purchaseCar.myCall(car, '$', 400);

Function.prototype.myApply = function(context = {}, args = []) {
	if (typeof this !== 'function') {
		throw new Error("sdsdf");
	}
	if (!Array.isArray(args)) {
		throw new Error("sdsdf");
	}
	context.fn = this;
	context.fn(...args);
}

// purchaseCar.myApply(car, ['$', 900]);

Function.prototype.myBind = function(context = {}, ...args) {
	if (typeof this !== 'function') {
		throw new Error("sdfsdf");
	}
	context.fn = this;
	return function(...newArgs) {
		return context.fn(...args, ...newArgs);
	}
}

// const newFunc = purchaseCar.myBind(car);
// newFunc('$', 222);

