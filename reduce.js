//2626. Array Reduce Transformation

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

function fn(a, b) {
    return a + b;
}
Array.prototype.myreduce = function (nums, fn, init) {
    let ans = init;
    for (let i = 0; i < nums.length; i++) {
        if (!ans) {
            ans = nums[i];
        } else {
            ans = fn(ans, arr[i]);
        }
    }
    return ans;
};

const arr = [1, 2, 3, 4, 5, 6];
const sum = arr.reduce((acc, curr) => acc + curr);
console.log("sum : ", sum);
const sum1 = arr.myreduce(arr, fn);
console.log("sum1 : ", sum1);
