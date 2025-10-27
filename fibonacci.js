//2648. Generate Fibonacci Sequence
/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

// general
function fib(n) {
  if (n === 0 || n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  let a = 0;
  let b = 1;
  let count = 2;
  let arr = [0, 1];
  while (count < n) {
    let c = a + b;
    arr.push(c);
    a = b;
    b = c;
    count++;
  }
  return arr;
}

console.log(fib(10));
