/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    if (this.length > 0) {
        return this[this.length - 1];
    }
    return -1;
};

const arr = [1, 2, 3, 4];
console.log(arr.last());
