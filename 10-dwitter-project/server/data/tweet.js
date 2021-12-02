// import { db } from "../db/database.js";

import { getTweets } from "../db/database.js";
import * as userRepository from "../data/auth.js";
import MongoDb from "mongodb";
export async function getAll() {
  return getTweets() //
    .find()
    .sort({ createdAt: -1 })
    .toArray()
    .then(mapTweets);
}

export async function getAllByUsername(username) {
  return getTweets() //
    .find({ username })
    .sort({ createdAt: -1 })
    .toArray()
    .then(mapTweets);
}

export async function getById(id) {
  return getTweets().findOne({ _id: MongoDb.ObjectId(id) });
}

export async function create(text, userId) {
  const { name, username, url } = await userRepository.findById(userId);
  const tweet = {
    text,
    createdAt: new Date(),
    userId,
    name,
    username,
    url,
  };

  return getTweets()
    .insertOne(tweet)
    .then((data) => mapOtionalTweet({ ...tweet, _id: data.insertedId }));
}

export async function update(id, text) {
  return getTweets() //
    .findOneAndUpdate(
      { _id: MongoDb.ObjectId(id) },
      { $set: { text } },
      { returnDocument: "after" }
    )
    .then((result) => result.value)
    .then(mapOtionalTweet);
}

export async function remove(id) {
  return getTweets().deleteOne({ _id: MongoDb.ObjectId(id) });
}

function mapOtionalTweet(tweet) {
  return tweet ? { ...tweet, id: tweet._id.toString() } : tweet;
}
function mapTweets(tweets) {
  return tweets.map(mapOtionalTweet);
}
