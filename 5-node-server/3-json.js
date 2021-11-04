const http = require("http");
const fs = require("fs");
console.log(http.STATUS_CODES);
console.log(http.METHODS);
const list = [
  { name: "byung" },
  { name: "CSS" },
  { name: "JS" },
  { name: "BACK" },
];
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/courses") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(list));
    } else if (method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });

      req.on("end", () => {
        const cource = JSON.parse(Buffer.concat(body).toString());
        list.push(cource);
        console.log(cource);
        res.writeHead(201);
        res.end();
      });
    }
  }
}); //서버를 만들 수 있다.

server.listen(3001);
