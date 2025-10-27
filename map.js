//2635: Apply Transform Over Each Element in Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
Array.prototype.mymap = function (fn) {
    const temp = [];
    for (let i = 0; i < this.length; i++) {
        temp[i] = fn(this[i], i);
    }
    return temp;
};

function fn(x) {
    return x + 8;
}

const arr = [1, 2, 3, 4];
// map(arr, fn);
// console.log(arr);
// const result = arr.mymap(fn);
const result = arr.mymap((x) => x + 8);
console.log("result : ", result);
