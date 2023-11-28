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
var import_joi = __toESM(require("joi"));
class Auth {
  id;
  fullname;
  email;
  avatar;
  bio;
  status;
  roles;
  device_token;
  constructor(id, fullname, email, avatar, bio, status, roles, device_token) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.avatar = avatar;
    this.bio = bio;
    this.status = status;
    this.roles = roles;
    this.device_token = device_token;
  }
  static getSchema() {
    return import_joi.default.object({
      id: import_joi.default.string().required().messages({
        "any.required": "ID diperlukan",
        "string.empty": "ID tidak boleh kosong"
      }),
      fullname: import_joi.default.string().required().messages({
        "any.required": "Nama Lengkap diperlukan",
        "string.empty": "Nama Lengkap tidak boleh kosong"
      }),
      email: import_joi.default.string().email({ tlds: false }).required().messages({
        "any.required": "Alamat Email diperlukan",
        "string.empty": "Alamat Email tidak boleh kosong",
        "string.email": "Alamat Email Tidak Valid"
      }),
      avatar: import_joi.default.string().required().messages({
        "any.required": "Avatar diperlukan",
        "string.empty": "Avatar tidak boleh kosong"
      }),
      bio: import_joi.default.string().required().messages({
        "any.required": "Bio diperlukan",
        "string.empty": "Bio tidak boleh kosong"
      }),
      status: import_joi.default.string().required().messages({
        "any.required": "Status diperlukan",
        "string.empty": "Status tidak boleh kosong"
      }),
      roles: import_joi.default.string().required().messages({
        "any.required": "Roles diperlukan",
        "string.empty": "Roles tidak boleh kosong"
      }),
      device_token: import_joi.default.string().required().messages({
        "any.required": "Device Token diperlukan",
        "string.empty": "Device Token tidak boleh kosong"
      })
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Auth
});
//# sourceMappingURL=index.js.map
