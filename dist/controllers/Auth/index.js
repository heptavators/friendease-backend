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
  AuthController: () => AuthController
});
module.exports = __toCommonJS(Auth_exports);
var import_SuccessSingularFormatter = __toESM(require("../../helpers/Response/SuccessSingularFormatter"));
var import_LoginRequest = require("../../domains/web/Login/LoginRequest");
var import_Validator = require("../../helpers/Validator");
var import_RegisterRequest = require("../../domains/web/Login/RegisterRequest");
var import_HandleErrorResponse = require("../../helpers/Error/HandleErrorResponse");
class AuthController {
  authService;
  constructor(authService) {
    this.authService = authService;
  }
  async LoginController(req, res) {
    try {
      const data = req.body;
      const validatedData = import_Validator.Validator.validate(data, import_LoginRequest.LoginRequest.getSchema());
      const result = await this.authService.SignInService(validatedData);
      const response = (0, import_SuccessSingularFormatter.default)("Berhasil Login", { token: result });
      return res.status(200).send(response);
    } catch (error) {
      return (0, import_HandleErrorResponse.HandleErrorResponse)(res, error);
    }
  }
  async ProfileController(req, res) {
    try {
      const result = await this.authService.GetProfileService(req.authId);
      const response = (0, import_SuccessSingularFormatter.default)("Profile User", result);
      return res.status(200).send(response);
    } catch (error) {
      return (0, import_HandleErrorResponse.HandleErrorResponse)(res, error);
    }
  }
  async RegisterController(req, res) {
    try {
      const data = req.body;
      const validatedData = import_Validator.Validator.validate(data, import_RegisterRequest.RegisterRequest.getSchema());
      const result = await this.authService.RegisterService(validatedData);
      const response = (0, import_SuccessSingularFormatter.default)("Berhasil Register Akun", result);
      return res.status(200).send(response);
    } catch (error) {
      return (0, import_HandleErrorResponse.HandleErrorResponse)(res, error);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthController
});
//# sourceMappingURL=index.js.map
