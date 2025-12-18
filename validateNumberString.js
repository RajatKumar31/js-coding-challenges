/**
 * @param {string} str
 * @returns {boolean}
 */
function validateNumberString(str) {
	return !isNaN(parseFloat(str)) && isFinite(str);
}

console.log(validateNumberString(10000e10000100001000010000));
console.log(!isNaN(""));
