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
var Login_exports = {};
__export(Login_exports, {
  Login: () => Login
});
module.exports = __toCommonJS(Login_exports);
var import_joi = __toESM(require("joi"));
class Login {
  email;
  password;
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  static getSchema() {
    return import_joi.default.object({
      email: import_joi.default.string().email({ tlds: false }).required().messages({
        "any.required": "Alamat Email diperlukan",
        "string.empty": "Alamat Email tidak boleh kosong",
        "string.email": "Alamat Email Tidak Valid"
      }),
      password: import_joi.default.string().required().messages({
        "any.required": "Password diperlukan",
        "string.empty": "Password tidak boleh kosong"
      })
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Login
});
//# sourceMappingURL=index.js.map
