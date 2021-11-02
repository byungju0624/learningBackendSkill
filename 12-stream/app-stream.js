const fs = require("fs");
const data = [];
const readStream = fs
  .createReadStream("./text.txt", {
    highWaterMark: 8, //defalute: 64KB
    //   encoding: "utf-8",
  })
  .once("data", (chunk) => {
    data.push(chunk);
    console.count("data");
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (error) => {
    console.log(error);
  });
