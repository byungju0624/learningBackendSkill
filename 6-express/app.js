import express from "express";
const app = express();
//미들웨어는 설정된 순서가 아주 중요하다.
//한번 반응하면 그 뒤에 있는 미들웨어는 반응하지 않는다.
// 같은 콜백함수에서 두개의 send를 작성하지 못한다.
app.use(express.json());
app.post("/", (req, res, next) => {
  console.log(req.body);
});
app.listen(8080);
