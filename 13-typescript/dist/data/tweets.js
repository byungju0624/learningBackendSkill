"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const tweet = [
    {
        id: "1",
        text: "typescript study",
        createAt: new Date(),
        name: "byung",
        username: "julius",
    },
    {
        id: "2",
        text: "typescript is hard",
        createAt: new Date(),
        name: "byung",
        username: "julius",
    },
];
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        return tweet;
    });
}
exports.getAll = getAll;
//# sourceMappingURL=tweets.js.map