// implement custom Array.prototype.forEach method

Array.prototype.customForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

const numbers = [1, 2, 3, 4, 5];
numbers.customForEach((num) => console.log(num + 1));
