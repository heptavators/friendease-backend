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
var import_Auth = require("../../domains/model/Auth");
var import_uuid = require("uuid");
class AuthRepository {
  async findEmail(email) {
    try {
      const data = await import_Auth.AuthModel.findOne({ where: { email } });
      return data;
    } catch (e) {
      throw new Error(`Cannot find data because : ${e}`);
    }
  }
  async getProfileById(authId) {
    try {
      const data = await import_Auth.AuthModel.findByPk(authId, {
        include: ["location", "tags"],
        attributes: { exclude: ["password", "locationId", "createdAt", "updatedAt"] }
      });
      return data;
    } catch (error) {
      throw new Error(`Cannot find data because : ${error}`);
    }
  }
  async changeDeviceToken(editDeviceTokenRequest, authId) {
    try {
      const [updatedRowsCount] = await import_Auth.AuthModel.update(editDeviceTokenRequest, {
        where: { authId }
      });
      return updatedRowsCount > 0;
    } catch (error) {
      throw new Error(`Cannot change data because : ${error}`);
    }
  }
  async changeProfile(editProfileRequest, authId) {
    try {
      const [updatedRowsCount] = await import_Auth.AuthModel.update(editProfileRequest, {
        where: { authId }
      });
      return updatedRowsCount > 0;
    } catch (error) {
      throw new Error(`Cannot change data because : ${error}`);
    }
  }
  // async getNotificationById(id: string): Promise<any>{
  //     try {
  //         const data = await AuthModel.findByPk(id, {include: ["notifications"]})
  //         return data
  //     } catch (error) {
  //         throw new Error(`Cannot find data because : ${error}`)
  //     }
  // }
  async createUser(registerRequest) {
    try {
      const newUser = await import_Auth.AuthModel.create(
        {
          authId: (0, import_uuid.v4)(),
          email: registerRequest.email,
          password: registerRequest.password
        }
      );
      return newUser;
    } catch (error) {
      throw new Error(`Cannot create data because : ${error}`);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthRepository
});
//# sourceMappingURL=index.js.map
