"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Auth_exports = {};
__export(Auth_exports, {
  Auth: () => Auth
});
module.exports = __toCommonJS(Auth_exports);
var import_Auth = require("../../repositories/Auth");
class Auth {
  authRepository;
  constructor() {
    this.authRepository = new import_Auth.AuthRepository();
  }
  async find(fullname, page) {
    const gettingTransaction = await this.authRepository.find({
      where: {
        fullname: {
          contains: fullname,
          mode: "insensitive"
        }
      },
      skip: page > 1 ? 10 * page - 10 : 0,
      take: 10
    });
    return gettingTransaction;
  }
  async count(fullname) {
    const countingTransaction = await this.authRepository.count({
      where: {
        fullname: {
          contains: fullname,
          mode: "insensitive"
        }
      }
    });
    return countingTransaction;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Auth
});
//# sourceMappingURL=index.js.map
