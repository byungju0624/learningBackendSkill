import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";
import {} from "express-async-errors"; //미들웨어에서 프로미스를 리턴하는 경우에만 감지해서 에러를 제일 마지막에 포착할 수 있다. 프로미스를 사용하면 return을 사용해야한다.
const app = express();
app.use(express.json());
//미들웨어의 체인은 동기적으로 이뤄져있다.
// 동기적인 것은 이것이 다처리가 되어야지만 다음으로 넘어간다. 여기서 에러가 발생하면 에러가 던져짐으로 마지막 안전망에 걸린다.
// 비동기적인 것은 호출만 해놓고 콜백만 던져놓고 넘어가는 경우는 에러가 내부에서 발생하기 때문에 즉 에러가 외부적으로 던져지지 않기 때문에 try-catch문으로 아무리 잡아지지 않는다.
app.get("/file1", (req, res, next) => {
  //   try {
  //     const data = fs.readFileSync("./flie.txt"); //readfileSync: 동기 try-catch문으로 시도하고 성공하면 데이터를 보내고 아니면 에러를 보낼 수 있게 해줘야한다.
  //   } catch (error) {
  //     res.status(400).send("File not found");
  //   }

  fs.readFile("file1.txt", (err, data) => {
    if (err) {
      res.status(400).send("File not found");
    }
  }); // readFile: 비동기 콜백함수 내부에서 에러처리를 해줘야한다.
});
app.get("/file2", (req, res, next) => {
  return fsAsync.readFile("./file.txt");
  // .catch((error) => res.status(404).send("File not found")); //에러를 next로 보내줘도 작동한다.
});
app.get("/file3", async (req, res, next) => {
  //동기적으로 처리되는 것처럼 만들 수 있지만 함수 자체는 비동기 즉 프로미스로 감싸진다.
  //안에서 에러가 발생하면 프로미스에서 발생하는 것과 같기 때문에 마지막 안전망으로 떨어지지 않는다.
  //try-catch문, catch둘다 에러를 잡을 수 있다.
  //   try {
  //     const data = await fsAsync.readFile("./file.txt");
  //   } catch (err) {
  //     res.status(404).send("File not found");
  //   }
  const data = await fsAsync.readFile("./file.txt");
});
//비동기로 작성한 코드는 마지막 안전망에 걸리지 않는다.
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({
    message: "Something went wrong",
  });
});
app.listen(8080);
