/**
 * @param {string} input
 * @returns string
 */

function removeChars(input) {
	const stack = [];
	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		if (char === 'b') {
			continue;
		} else if (char == 'c' && stack.length && stack[stack.length - 1] == 'a') {
			stack.pop();
		} else {
			stack.push(char);
		}
	}
	return stack.join("");
}

console.log(removeChars('cabbaabcca'));

/*
Given a string contaning only a, b and c, remove all b and ac.

removeChars('ab') // 'a'
removeChars('abc') // ''
removeChars('cabbaabcca') // 'caa'
*/
