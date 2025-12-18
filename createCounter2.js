/**
 * @returns { {count: number}}
 */

function createCounter2() {
	let counter = -1;
	return {
		get count() {
			counter++;
			return counter;
		}
	}
}

const counter = createCounter2()
console.log(counter.count) // 0, then it should increment
console.log(counter.count) // 1
console.log(counter.count) // 2
counter.count = 100 // it cannot be altered
console.log(counter.count)// 3
