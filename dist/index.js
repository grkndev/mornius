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
exports.searchTopics = exports.searchUsers = exports.getUser = exports.getRepositories = void 0;
function getRepositories(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`https://api.github.com/repos/${query}`);
        const data = yield res.json();
        return data;
    });
}
exports.getRepositories = getRepositories;
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`https://api.github.com/users/${username}`);
        const data = yield res.json();
        return data;
    });
}
exports.getUser = getUser;
function searchUsers(query, page, per_page, sort, order) {
    return __awaiter(this, void 0, void 0, function* () {
        const baseUrl = `https://api.github.com/search/users?q=${query}
  ${page &&
            `&page=${page}` + per_page &&
            `&per_page=${per_page}` + sort &&
            `&sort=${sort}` + order &&
            `&order=${order}`}`;
        const res = yield fetch(baseUrl);
        const data = yield res.json();
        return data;
    });
}
exports.searchUsers = searchUsers;
function searchTopics(query, page, per_page) {
    return __awaiter(this, void 0, void 0, function* () {
        const baseUrl = `https://api.github.com/search/topics?q=${query}
    ${page && `&page=${page}` + per_page && `&per_page=${per_page}`}`;
        const res = yield fetch(baseUrl);
        const data = yield res.json();
        return data;
    });
}
exports.searchTopics = searchTopics;
