/**
 * @param {any[]} arr
 */
function deduplicate(arr) {
    let j = 0;
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (!set.has(arr[i])) {
            set.add(arr[i]);
            arr[j] = arr[i];
            j++;
        }
    }
    // arr.length = j;
    // console.log(Array.from(set.values()));
    arr = Array.from(set.values());
    return arr;
}

let arr = [1, 6, 7, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7];
console.log(deduplicate(arr));
