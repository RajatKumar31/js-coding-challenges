// implement custom Array.prototype.some method

Array.prototype.customSome = function (callback) {
    let flag = false;
    this.forEach((elem) => {
        if (callback(elem)) {
            flag = true;
        }
        console.log("elem : ", elem, " result : ", callback(elem));
    });
    return flag;
}


const numbers = [1, 2, 3, 4, -1];
console.log(numbers.customSome((num) => num + 1 == 0));
