import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan"; //사용자에게 요청을 받을 때 마다 어떤 요청을 받았는지 얼마나 걸렸는지 로그로 남기고 싶을 때 자동으로 해주는 것
import helmet from "helmet"; //공통적으로 보안에 필요한 헤더를 추가해준다.
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(helmet());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Alloww-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "OPTIONS,GET,POST,PUT,DELETE");
//   next();
// });
app.use(cors());
app.get("/", (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  console.log(req.cookies.cokietest);
  res.send("Welcome!");
});

app.listen(8080);
