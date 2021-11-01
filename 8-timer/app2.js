console.log("code1"); //1
console.time("timeout 0");
setTimeout(() => {
  console.timeEnd("timeout 0");
  console.log("setTimeOut 1");
}, 0); //5

console.log("code2"); //2
setImmediate(() => {
  console.log("setImmediate");
}); //6

console.log("code3"); //3
process.nextTick(() => {
  console.log("process.nextThick");
}); //4
