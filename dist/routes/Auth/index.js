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
  default: () => Auth_default
});
module.exports = __toCommonJS(Auth_exports);
var import_express = require("express");
var import_Auth = require("../../controllers/Auth");
var import_SuccessFormatter = __toESM(require("../../helpers/Response/SuccessFormatter"));
var import_ErrorFormatter = __toESM(require("../../helpers/Response/ErrorFormatter"));
var import_FailFormatter = __toESM(require("../../helpers/Response/FailFormatter"));
var import_Log = require("../../helpers/Log");
var import_Login = require("../../domains/web/Login");
var import_multer = __toESM(require("multer"));
var import_Validator = require("../../helpers/Validator");
const router = (0, import_express.Router)();
const authController = new import_Auth.Auth();
const multer = (0, import_multer.default)({
  storage: import_multer.default.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024
  }
});
router.get("/user", async function(req, res) {
  let { name, page } = req.query;
  try {
    page = req.query.page || 1;
    const data = await authController.find(name, page);
    const count = await authController.count(name);
    const totalPage = Math.ceil(count / 10);
    if (data.length != 0) {
      const meta = {
        currentPage: page,
        totalPage,
        totalItems: count,
        itemPerPage: 10
      };
      const response = (0, import_SuccessFormatter.default)("Data Semua Pengguna", meta, data);
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
});
router.post("/login", async function(req, res) {
  try {
    const data = req.body;
    const validate = import_Validator.Validator.validate(data, import_Login.Login.getSchema());
    console.log(validate);
    if (JSON.stringify(validate) === JSON.stringify(data)) {
      res.status(200).json({ message: "omke" });
    } else {
      const response = (0, import_ErrorFormatter.default)(JSON.stringify(validate));
      res.status(422).json(response);
    }
  } catch (error) {
    const response = (0, import_ErrorFormatter.default)(error);
    import_Log.logger.error(error);
    res.status(500).send(response);
  }
});
router.post("/image", multer.single("image"), async function(req, res) {
  try {
    console.log(req.file);
    const response = (0, import_FailFormatter.default)("Login");
    res.status(200).send(response);
  } catch (error) {
    const response = (0, import_ErrorFormatter.default)(error);
    import_Log.logger.error(error);
    res.status(500).send(response);
  }
});
var Auth_default = router;
//# sourceMappingURL=index.js.map
