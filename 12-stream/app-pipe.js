const fs = require("fs");
const zlib = require("zlib");
const readStream = fs.createReadStream("./text.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("file4.zip");

const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("Done");
});
