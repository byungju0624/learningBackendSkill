const fs = require("fs").promises;
// reading a file
fs.readFile("./text-new.txt", "utf8") //
  .then((data) => console.log(data))
  .catch(console.error);

//writing a file

fs.writeFile("./text-new.txt", "world,") //
  .catch(console.error);

fs.appendFile("./text-new.txt", "hi, byungju") //
  .catch(console.error);

//copy
fs.copyFile("./text-new.txt", "./text-copy.txt") //
  .catch(console.error);

//folder
fs.mkdir("sub-folder") //
  .catch(console.error);

fs.readdir("./") //
  .then(console.log)
  .catch(console.error);
