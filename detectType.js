/**
 * @param {any} data
 * @return {string}
*/

function detectType(data) {
	if (data === null) {
		return "null";
	} else if (Array.isArray(data)) {
		return "array";
	} else if (data instanceof Map) {
		return "map";
	} else if (data instanceof Set) {
		return "set";
	} else if (data instanceof Number) {
		return "number";
	} else if (data instanceof String) {
		return "string";
	} else if (data instanceof Date) {
		return "date";
	} else if (data instanceof ArrayBuffer) {
		return "arraybuffer";
	} else if (data instanceof Boolean) {
		return "boolean";
	}
	return typeof data;
}

console.log(detectType(1)) // 'number'
console.log(detectType(new Map())) // 'map'
console.log(detectType([])) // 'array'
console.log(detectType(null)) // 'null'

const sb = new ArrayBuffer();
console.log(sb instanceof ArrayBuffer);
