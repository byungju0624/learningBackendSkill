const fs = require("fs");

//3
//rename(...., callback(error,data))
//renameSync(....)
//promises.rename().then().catch()
// try {
//   fs.renameSync("./text.txt", "./file-new.txt");
// } catch (error) {
//   console.log(error);
// }
// console.log("hello");

// fs.rename("./text1.txt", "./text.txt", (err) => {
//   console.log(err);
// });
// console.log("hello");

fs.promises
  .rename("./text.txt", "text-new.txt")
  .then(() => console.log("done"))
  .catch(console.error);
