"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_express = __toESM(require("express"));
var import_Product = __toESM(require("./routes/Product"));
var import_Log = require("./helpers/Log");
try {
  const app = (0, import_express.default)();
  const port = "3000";
  app.use(import_express.default.json());
  app.use(import_express.default.urlencoded({ extended: true }));
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.use("/api", import_Product.default);
  app.listen(port, () => {
    import_Log.logger.info(process.env.SECRET_KEYS);
    import_Log.logger.info("apps running on port " + port);
  });
} catch (error) {
  import_Log.logger.error("failed to running apps, error : " + error);
  process.exit(1);
}
//# sourceMappingURL=index.js.map
