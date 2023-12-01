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
  AuthService: () => AuthService
});
module.exports = __toCommonJS(Auth_exports);
var import_Auth = require("../../repositories/Auth");
var import_JWT = require("../../helpers/JWT");
class AuthService {
  authRepository;
  constructor(authRepository) {
    this.authRepository = new import_Auth.AuthRepository();
  }
  async SignInService(LoginRequest2) {
    try {
      const user = await this.authRepository.findEmail(LoginRequest2.email);
      if (user) {
        if (user.password != LoginRequest2.email) {
          console.log(1);
        }
        const token = (0, import_JWT.GenerateJwtToken)(user);
        return token;
      }
    } catch (error) {
      throw new Error(`Something Wrong: ${error}`);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthService
});
//# sourceMappingURL=index.js.map
