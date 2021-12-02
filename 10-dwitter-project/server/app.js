import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import tweetsRouter from "./router/tweets.js";
import authRouter from "./router/auth.js";
import { config } from "./config.js";
import { initSocket } from "./connection/socket.js";
import { connectDB } from "./db/database.js";
import yaml from "yamljs";
import swaggerUI from "swagger-ui-express";
import * as OpenAPIValidator from "express-openapi-validator";
import * as apis from "./controller/index.js";

import { authHandler } from "./middleware/auth.js";
const app = express();
const openAPIDocument = yaml.load("./api/openapi.yaml");
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(openAPIDocument));
app.use("/tweets", tweetsRouter);
app.use("/auth", authRouter);

app.use(
  OpenAPIValidator.middleware({
    apiSpec: "./api/openapi.yaml",
    validateResponses: true,
    operationHandlers: {
      resolver: modulePathResolver,
    },
    validateSecurity: {
      handlers: {
        jwt_auth: authHandler,
      },
    },
  })
);

function modulePathResolver(_, route, apiDoc) {
  const pathKey = route.openApiRoute.substring(route.basePath.length);
  const operation = apiDoc.paths[pathKey][route.method.toLowerCase()];
  const methodName = operation.operationId;
  return apis[methodName];
}

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({
    message: error.message,
  });
});
connectDB() //
  .then(() => {
    console.log(`server start ${new Date()}`);
    const server = app.listen(config.port);
    initSocket(server);
  }) //
  .catch(console.error);
