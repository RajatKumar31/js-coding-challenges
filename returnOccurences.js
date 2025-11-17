function returnOccurences(str) {
	let ans = "";
	let current = 0, previous = 0;
	let count = 0;
	while (current < str.length) {
		if (str[current] === str[previous]) {
			count++;
			previous = current;
			current++;
		} else {
			ans = ans + str[previous] + count;
			previous = current;
			count = 0;
		}
	}
	if (count > 0) {
		ans = ans + str[previous] + count;
	}
	return ans;
}

console.log(returnOccurences("aaabcccfffghh"));
