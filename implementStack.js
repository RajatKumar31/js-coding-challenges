export default class stack {
    constructor() {
        this.arr = [];
    }

    /**
     * pushes an item onto the top of the stack.
     * @param {*} item the item to be pushed onto the stack.
     * @return {number} the new length of the stack.
     */
    push(item) {
        this.arr.push(item);
        return this.arr.length;
    }

    /**
     * remove an item at the top of the stack.
     * @return {*} the item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    pop() {
        return this.arr.pop();
    }

    /**
     * determines if the stack is empty.
     * @return {boolean} `true` if the stack has no items, `false` otherwise.
     */
    isEmpty() {
        return this.arr.length == 0;
    }

    /**
     * returns the item at the top of the stack without removing it from the stack.
     * @return {*} the item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    peek() {
        return this.arr[this.arr.length - 1];
    }

    /**
     * returns the number of items in the stack.
     * @return {number} the number of items in the stack.
     */
    length() {
        return this.arr.length;
    }
}

let stack = new stack();
stack.push(5);
stack.push(6);
console.log(stack.peek());
