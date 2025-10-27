//2623. Memoize

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {};
    let callCount = 0;
    return function (...args) {
        let key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        } else {
            cache[key] = fn(...args);
            callCount++;
            return cache[key];
        }
    }
}


let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    // callCount += 1;
    return a + b;
})
memoizedFn(0, 0) // 5
memoizedFn(0, 0) // 5
console.log(callCount) // 1 
