/**
 * @param {any[]} arr
 * @returns {void}
 */

function shuffle(arr) {
    // modify the arr inline to change the order randomly
    // Fisher-yates shuffle
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
        console.log(arr);
    }
}

for (let i = 0; i < 10; i++) {
    shuffle([1, 2, 3]);
}
