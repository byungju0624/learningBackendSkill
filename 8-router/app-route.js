import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";
const app = express();
app.use(express.json()); //REST API, BODY
app.use(
  express.urlencoded({
    extended: false,
  })
); //HTML Form -> body
app.use(express.static("public"));
app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(8080);
