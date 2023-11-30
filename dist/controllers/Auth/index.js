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
var import_SuccessFormatter = __toESM(require("../../helpers/Response/SuccessFormatter"));
var import_FailFormatter = __toESM(require("../../helpers/Response/FailFormatter"));
class Auth {
  authService;
  constructor(authService, authRepository) {
    this.authService = new import_Auth.Auth(authRepository);
  }
  async signInController(req, res) {
    try {
      const { id } = req.body;
      const result = await this.authService.SignInService(id);
      if (result) {
        const response = (0, import_SuccessFormatter.default)("Data Semua Pengguna", {}, result);
        res.status(200).send(response);
      } else {
        const response = (0, import_FailFormatter.default)("Pengguna Tidak Ditemukan");
        res.status(404).send(response);
      }
    } catch (error) {
      const response = (0, import_ErrorFormatter.default)(error);
      import_Log.logger.error(error);
      res.status(500).send(response);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Auth
});
//# sourceMappingURL=index.js.map
