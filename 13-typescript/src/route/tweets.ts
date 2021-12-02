import express from "express";
const router = express.Router();
import * as tweetController from "../controller/tweets";
router.get("/", tweetController.getTweets);

export default router;
