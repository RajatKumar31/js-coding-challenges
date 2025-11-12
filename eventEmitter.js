class EventEmitter {
	map = new Map();
	/**
	 * @param {string} eventName
	 * @param {Function} callback
	 * @return {Object}
	 */
	subscribe(eventName, callback) {
		if (!this.map.get(eventName)) {
			this.map.set(eventName, []);
		}
		this.map.get(eventName).push(callback);
		return {
			unsubscribe: () => {
				const arr = this.map.get(eventName).filter((cb) => cb != callback);
				console.log("arr : ", arr);
				this.map.set(eventName, arr);
			}
		};
	}

	/**
	 * @param {string} eventName
	 * @param {Array} args
	 * @return {Array}
	 */
	emit(eventName, args = []) {
		if (!this.map.has(eventName)) {
			return [];
		}
		const res = [];
		this.map.get(eventName).forEach((cb) => {
			res.push(cb(...args));
		})
		return res;
	}
}


const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback1() { return 99 }
function onClickCallback2() { return 99 }
const sub1 = emitter.subscribe('onClick', onClickCallback1);
const sub2 = emitter.subscribe('onClick', onClickCallback2);

console.log(emitter.emit('onClick')); // [99]
console.log(sub1.unsubscribe()); // undefined
console.log(emitter.emit('onClick')); // []
