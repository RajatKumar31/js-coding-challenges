let str = "r#a$ce*^*car*";

// check palindrome string and ignore special characters
function palindromeString(str) {
	let i = 0, j=str.length-1;
	while(i<j) {
		if(!isAlphaNumeric(str[i])) {
			i++;	
		}
		else if(!isAlphaNumeric(str[j])) {
			j--;
		}
		else {
			if(str[i] !== str[j]) {
				return false;
			}
			i++;
			j--;
		}
	}
	return true;
}
console.log(palindromeString(str));

function isAlphaNumeric(char) {
	const asciCode = char.charCodeAt();	
	if((asciCode >= 97 && asciCode <= 122) || (asciCode >= 65 && asciCode <= 90) || (asciCode>=48 && asciCode <= 57)) {
		return true;
	}
	return false;
}
// isAlphaNumeric("9");
