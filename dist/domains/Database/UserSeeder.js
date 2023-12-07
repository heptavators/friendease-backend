"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var UserSeeder_exports = {};
__export(UserSeeder_exports, {
  UserSeeder: () => UserSeeder
});
module.exports = __toCommonJS(UserSeeder_exports);
var import_uuid = require("uuid");
var import_bcryptjs = __toESM(require("bcryptjs"), 1);
var import_Auth = require("../../domains/model/Auth");
class UserSeeder {
  async run() {
    const auths = [
      {
        id: (0, import_uuid.v4)(),
        fullname: "Farhan Rivaldy",
        username: "farhanrivaldy",
        email: "fariv.fariv12@gmail.com",
        password: import_bcryptjs.default.hashSync("password123!", 8),
        avatar: "https://avatars.githubusercontent.com/u/42530587?v=4",
        bio: "Tech Enthusiast | A newbie at everything",
        status: "active",
        role: "CUSTOMER"
      }
    ];
    for (const authData of auths) {
      await import_Auth.User.destroy({ where: {} });
      await import_Auth.User.create({ data: authData });
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserSeeder
});
//# sourceMappingURL=UserSeeder.js.map
