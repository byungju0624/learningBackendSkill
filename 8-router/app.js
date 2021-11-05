import express from "express";

const app = express();

app.use(express.json());
//문제점: 코드가 반복되는 느낌이 있다.-> 라우트를 사용하면 해결
app
  .route("/post")
  .get((req, res) => {
    res.status(201).send("GET: /post");
  })
  .post((req, res) => {
    res.status(201).send("POST: /post");
  });
app
  .route("/post/:id")
  .put((req, res) => {
    res.status(201).send("PUT: /post/:id");
  })
  .delete((req, res) => {
    res.status(201).send("DELETE: /post/:id");
  });

app.listen(8080);
