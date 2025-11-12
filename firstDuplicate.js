/**
 * @param {string} str
 * @return {string | null}
 */

function firstDuplicate(str) {
	const set = new Set();
	let duplicate = null;
	for (let i = 0; i < str.length; i++) {
		if (!set.has(str[i])) {
			set.add(str[i]);
		} else {
			duplicate = str[i];
			break;
		}
	}
	return duplicate;
}

console.log(firstDuplicate("abcab"));
