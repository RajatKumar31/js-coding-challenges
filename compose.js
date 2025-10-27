//2629. Function Composition

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return function (x) {
        let ans = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            let fn = functions[i];
            ans = fn(ans);
        }
        return ans;
    }
};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)); // 9
