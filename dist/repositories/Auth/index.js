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
  AuthRepository: () => AuthRepository
});
module.exports = __toCommonJS(Auth_exports);
var import_Base = require("../Base");
class AuthRepository extends import_Base.BaseRepository {
  getModel() {
    throw new Error("Method not implemented.");
  }
  constructor() {
    super("auth");
  }
  async findEmail(email) {
    try {
      return this.model.findUnique({ where: { email } });
    } catch (e) {
      throw new Error(`Cannot find data because : ${e}`);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthRepository
});
//# sourceMappingURL=index.js.map
