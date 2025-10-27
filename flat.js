function flat_old(arr, depth = 1) {
    let result = [];
    function helper(arr, d) {
        for (let key in arr) {
            if (Array.isArray(arr[key]) && d < depth) {
                helper(arr[key], d + 1);
            } else {
                result.push(arr[key]);
            }
        }
        return result;
    }
    return helper(arr, 0);
}
const arr = [1, 2, [3, 4, [5, 6]]];
console.log(flat(arr));

function flat(arr) {
    let res = [];
    for (let elem of arr) {
        if (Array.isArray(elem)) {

        }
    }
}
