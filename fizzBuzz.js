for (let i = 0; i < 100; i++) {
  let f = i % 3,
    b = i % 5;
  console.log(f ? (b ? "fizzbuzz" : "fizz") : b ? "buzz" : i);
}
