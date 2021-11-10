import * as Controller from "../controller/router.js";
import { body, validationResult } from "express-validator";
import express from "express";
import { validate } from "../middleware/validate.js";

const router = express.Router();
const validateTweet = [
  body("text")
    .trim()
    .notEmpty()
    .withMessage("내용을 입력해 주세요")
    .isLength({ min: 3 })
    .withMessage("세 글자 이상 입력해주세요"),
  validate,
];
router.get("/", Controller.getRouter);
router.get("/:id", Controller.getUserRouter);
router.post("/", validateTweet, Controller.postRouter);
router.put("/:id", validateTweet, Controller.updateRouter);
router.delete("/:id", Controller.deleteRouter);
export default router;
