import express from "express";
import { body, validationResult } from "express-validator"; //chaining이 가능하다.
const app = express();
app.use(express.json());

app.post(
  "/users",
  body("name")
    .trim()//공백제거
    .notEmpty()
    .withMessage("이름을 입력해주세요")
    .isLength({ min: 2 })
    .withMessage("이름은 두글자 이상"),
  (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      res.status(400).json({ massage: error.array() });
    }
    console.log(req.body);
    res.sendStatus(201);
  }
);
app.get("/:email", (req, res, next) => {
  res.send("💌");
});
app.listen(8080);
