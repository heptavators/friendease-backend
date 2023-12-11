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
  AuthModel: () => AuthModel
});
module.exports = __toCommonJS(Auth_exports);
var import_sequelize = require("sequelize");
var import_Database = __toESM(require("../../../configs/Database"));
class AuthModel extends import_sequelize.Model {
  authId;
  locationId;
  fullname;
  username;
  email;
  password;
  avatar;
  phone_number;
  bio;
  bod;
  gender;
  status;
  roles;
  device_token;
}
AuthModel.init(
  {
    authId: {
      type: import_sequelize.DataTypes.UUID,
      defaultValue: import_sequelize.DataTypes.UUID,
      primaryKey: true,
      unique: true
    },
    locationId: {
      type: import_sequelize.DataTypes.UUID,
      allowNull: false
    },
    fullname: {
      type: import_sequelize.DataTypes.STRING,
      allowNull: true
    },
    username: {
      type: import_sequelize.DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    email: {
      type: import_sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: import_sequelize.DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: import_sequelize.DataTypes.STRING,
      allowNull: true
    },
    phone_number: {
      type: import_sequelize.DataTypes.STRING,
      allowNull: true
    },
    bio: {
      type: import_sequelize.DataTypes.STRING,
      allowNull: true
    },
    bod: {
      type: import_sequelize.DataTypes.DATEONLY,
      allowNull: true
    },
    gender: {
      type: import_sequelize.DataTypes.ENUM,
      values: ["FEMALE", "MALE", ""],
      defaultValue: ""
    },
    status: {
      type: import_sequelize.DataTypes.ENUM,
      values: ["INACTIVE", "ACTIVE"],
      defaultValue: "ACTIVE"
    },
    roles: {
      type: import_sequelize.DataTypes.ENUM,
      values: ["CUSTOMER", "ADMIN", "TALENT"],
      defaultValue: "CUSTOMER"
    },
    device_token: {
      type: import_sequelize.DataTypes.STRING,
      allowNull: true
    }
  },
  {
    modelName: "Auth",
    sequelize: import_Database.default
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthModel
});
//# sourceMappingURL=index.js.map
