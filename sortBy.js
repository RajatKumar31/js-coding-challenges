//2724. Sort By

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    arr.sort((a, b) => fn(a) - fn(b));
    return arr;
};
const arr = [5, 4, 1, 2, 3, 0];
const fn = (x) => x;
console.log(sortBy(arr, fn));
