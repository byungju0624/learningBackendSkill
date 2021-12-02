// import { db } from "../db/database.js";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getTweets } from "../db/database.js";
import * as userRepository from "../data/auth.js";
import MongoDb from "mongodb";
export function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        return getTweets() //
            .find()
            .sort({ createdAt: -1 })
            .toArray()
            .then(mapTweets);
    });
}
export function getAllByUsername(username) {
    return __awaiter(this, void 0, void 0, function* () {
        return getTweets() //
            .find({ username })
            .sort({ createdAt: -1 })
            .toArray()
            .then(mapTweets);
    });
}
export function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return getTweets().findOne({ _id: MongoDb.ObjectId(id) });
    });
}
export function create(text, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, username, url } = yield userRepository.findById(userId);
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
            .then((data) => mapOtionalTweet(Object.assign(Object.assign({}, tweet), { _id: data.insertedId })));
    });
}
export function update(id, text) {
    return __awaiter(this, void 0, void 0, function* () {
        return getTweets() //
            .findOneAndUpdate({ _id: MongoDb.ObjectId(id) }, { $set: { text } }, { returnDocument: "after" })
            .then((result) => result.value)
            .then(mapOtionalTweet);
    });
}
export function remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return getTweets().deleteOne({ _id: MongoDb.ObjectId(id) });
    });
}
function mapOtionalTweet(tweet) {
    return tweet ? Object.assign(Object.assign({}, tweet), { id: tweet._id.toString() }) : tweet;
}
function mapTweets(tweets) {
    return tweets.map(mapOtionalTweet);
}
//# sourceMappingURL=tweet.js.map