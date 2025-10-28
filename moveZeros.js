/**
 * @param {Array<any>} list
 * @returns {void}
 */
function moveZeros(list) {
    let j = -1;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 0) {
            j = i;
            break;
        }
    }
    if (j === -1) {
        return;
    }
    for (let i = j + 1; i < list.length; i++) {
        if (list[i] !== 0) {
            let temp = list[i];
            list[i] = list[j];
            list[j] = temp;
            j++;
        }
    }
}

const list = [1, 0, 0, 2, 3]
moveZeros(list)
console.log(list) // [1,2,3,0,0]
