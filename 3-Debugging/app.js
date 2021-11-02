function sayHello() {
  console.log("hello");
}

function calculate(x, y) {
  const result = x + y;
  console.log(result);
  sayHello();
  return result;
}

calculate(1, 2);
const stop = 4;
console.log("looping");
console.log("loooo");
for (let i = 0; i < 10; i++) {
  console.log("count", i);
  if (stop === i) {
    break;
  }
}
