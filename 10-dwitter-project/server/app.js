import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import {} from "express-async-errors";
import tweetRouter from "./router/tweetrouter.js";
const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/tweets", tweetRouter);
app.use((req, res, next) => {
  res.sendStatus(404);
});
app.use((err, req, res, next) => {
  console.log(err);
  res.sendStatus(500);
});
app.listen(8080);
