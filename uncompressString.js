/**
 * @param {string} str
 * @returns {string}
*/
const isNumeric = (str) => !isNaN(parseFloat(str)) && isFinite(Number(str));

function uncompress(str) {
    const stack = [];
    for (const char of str) {
        if (char !== ')') {
            stack.push(char);
        } else {
            let word = '';
            let count = '';
            // !1. Find the string
            while (stack.length && stack[stack.length - 1] !== '(') {
                word = stack.pop() + word;
            }
            stack.pop();
            // !2. Find the number of repetitions (or frequency)
            while (stack.length && isNumeric(stack[stack.length - 1])) {
                count = stack.pop() + count;
            }
            stack.push(word.repeat(Number(count)));
        }
    }
    return stack.join('');
}
console.log(uncompress("2(BFE2(dev))"));

/*
4 out of 7 tests failed to pass

BFE  
2(BFE)  
2(BFE)3(dev) spec  , expects "BFEBFEdevdevdev" but got "BFEdevdevdevBFEdevdevdev"
2(BFE1(dev))  
2(BFE1(dev))3(2(lover)) spec  , (diff is too big, full diff )
1(BFE11(dev)) spec  , expects "BFEdevdevdevdevdevdevdevdevdevdevdev" but got "BFEdev"
3(B2(F1(E))).dev spec  , (diff is too big, full diff )
*/
