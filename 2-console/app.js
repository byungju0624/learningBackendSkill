console.log("log");
console.info("info");
console.warn("warn");
console.error("error");

console.assert(2 === 3, "not same");
console.assert(2 === 2, "same");

const student = {
  name: "byungju",
  age: 32,
  job: { frontEnd: true, backEnd: false },
};
console.table(student);

console.dir(student, { showHidden: true, colors: false, depth: 1 });

console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  console.trace();
}
f1();
