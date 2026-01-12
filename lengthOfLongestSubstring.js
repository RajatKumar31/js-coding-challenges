/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
	const set = new Set();
	let left = 0, right = 0;
	let longestSubstring = 0;
	while (right < s.length) {
		if (!set.has(s[right])) {
			set.add(s[right]);
			longestSubstring = Math.max(longestSubstring, right - left + 1);
			right++;
		} else {
			set.delete(s[left]);
			left++;
		}
	}
	return longestSubstring;
};

console.log(lengthOfLongestSubstring("pwwkew"));
