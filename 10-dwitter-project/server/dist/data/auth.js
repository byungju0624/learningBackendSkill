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
import { getUsers } from "../db/database.js";
import MongoDb from "mongodb";
export function findByUsername(username) {
    return __awaiter(this, void 0, void 0, function* () {
        return getUsers()
            .findOne({ username }) //
            .then(mapOptionalUser);
    });
}
export function findById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return getUsers()
            .findOne({ _id: new MongoDb.ObjectId(id) })
            .then(mapOptionalUser);
    });
}
export function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return getUsers()
            .insertOne(user)
            .then((data) => data.insertedId.toString());
    });
}
function mapOptionalUser(user) {
    return user ? Object.assign(Object.assign({}, user), { id: user._id.toString() }) : user;
}
//# sourceMappingURL=auth.js.map