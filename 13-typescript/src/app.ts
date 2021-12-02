import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import tweetsRouter from "./route/tweets";
import { Response, Request, NextFunction } from "express-serve-static-core";
const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use("/tweets", tweetsRouter);
app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.sendStatus(500);
});
app.listen(8080, () => {
  console.log("start");
});
