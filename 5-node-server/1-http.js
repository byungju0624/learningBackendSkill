const http = require("http");
const fs = require("fs");
console.log(http.STATUS_CODES);
console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log("incomming");
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    fs.createReadStream("./template/privacyPolicy.html").pipe(res);
  } else if (url === "/courses") {
    fs.createReadStream("./template/test.html").pipe(res);
  } else {
    res.write("not found");
  }
}); //서버를 만들 수 있다.

server.listen(3001);
