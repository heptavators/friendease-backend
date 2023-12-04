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
  Auth: () => Auth
});
module.exports = __toCommonJS(Auth_exports);
var import_Auth = require("../../services/Auth");
var import_Log = require("../../helpers/Log");
var import_ErrorFormatter = __toESM(require("../../helpers/Response/ErrorFormatter"));
var import_SuccessSingularFormatter = __toESM(require("../../helpers/Response/SuccessSingularFormatter"));
var import_Login = require("../../domains/web/Login");
var import_Validator = require("../../helpers/Validator");
var import_BadRequestError = require("../../helpers/Error/BadRequestError");
class Auth {
  authService;
  constructor(authService, authRepository) {
    this.authService = new import_Auth.AuthService(authRepository);
  }
  async signInController(req, res) {
    try {
      const data = req.body;
      const validatedData = import_Validator.Validator.validate(data, import_Login.Login.getSchema());
      const result = await this.authService.SignInService(validatedData);
      const response = (0, import_SuccessSingularFormatter.default)("Berhasil Login", { token: result });
      return res.status(200).send(response);
    } catch (error) {
      if (error instanceof import_BadRequestError.BadRequestError) {
        const response2 = (0, import_ErrorFormatter.default)(error.toResponseObject());
        return res.status(error.status).send(response2);
      }
      import_Log.logger.error(error);
      const response = (0, import_ErrorFormatter.default)(error);
      return res.status(500).send(response);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Auth
});
//# sourceMappingURL=index.js.map
