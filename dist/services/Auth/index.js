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
var Auth_exports = {};
__export(Auth_exports, {
  AuthService: () => AuthService
});
module.exports = __toCommonJS(Auth_exports);
var import_BadRequestError = require("../../helpers/Error/BadRequestError");
var import_JWT = require("../../helpers/JWT");
var import_bcryptjs = __toESM(require("bcryptjs"));
class AuthService {
  authRepository;
  tagTalentRepository;
  static instance;
  constructor(authRepository, tagTalentRepository) {
    this.authRepository = authRepository;
    this.tagTalentRepository = tagTalentRepository;
  }
  static getInstance(authRepository, tagTalentRepository) {
    if (!this.instance) {
      this.instance = new AuthService(authRepository, tagTalentRepository);
    }
    return this.instance;
  }
  async SignInService(loginRequest) {
    const findUser = await this.authRepository.findEmail(loginRequest.email);
    if (!findUser) {
      throw new import_BadRequestError.BadRequestError([{ error: "email", message: "Email Tidak Ditemukan" }], 401);
    }
    const user = findUser.toJSON();
    const comparePassword = import_bcryptjs.default.compareSync(loginRequest.password, user.password);
    if (!comparePassword) {
      throw new import_BadRequestError.BadRequestError([{ error: "password", message: "Password Salah" }], 401);
    }
    const token = (0, import_JWT.GenerateJwtToken)(user);
    return token;
  }
  async ChangeDeviceTokenService(editDeviceTokenRequest, authId) {
    const user = await this.authRepository.changeDeviceToken(editDeviceTokenRequest, authId);
    return user;
  }
  async ChangeProfileService(editProfileRequest, authId) {
    const user = await this.authRepository.changeProfile(editProfileRequest, authId);
    const tags = await this.tagTalentRepository.InsertBulkTalent(editProfileRequest.tags, authId);
    const profile = await this.authRepository.getProfileById(authId);
    return profile;
  }
  async RegisterService(registerRequest) {
    const existingUser = await this.authRepository.findEmail(registerRequest.email);
    if (existingUser) {
      throw new import_BadRequestError.BadRequestError([{ error: "email", message: "Email already exists" }], 401);
    }
    const hashedPassword = await import_bcryptjs.default.hash(registerRequest.password, 10);
    const data = {
      email: registerRequest.email,
      password: hashedPassword
    };
    const newUser = await this.authRepository.createUser(data);
    return newUser;
  }
  async GetProfileService(authId) {
    const findUser = await this.authRepository.getProfileById(authId);
    if (!findUser) {
      throw new import_BadRequestError.BadRequestError([{ error: "email", message: "Email Tidak Ditemukan" }], 401);
    }
    return findUser;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthService
});
//# sourceMappingURL=index.js.map
