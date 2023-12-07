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
var import_routes = __toESM(require("./routes"));
var import_Log = require("./helpers/Log");
var import_Database = __toESM(require("./configs/Database"));
var import_Product = require("./domains/model/Product");
var import_uuid = require("uuid");
try {
  const app = (0, import_express.default)();
  import_Database.default.sync();
  const port = "3000";
  app.use(import_express.default.json());
  app.use(import_express.default.urlencoded({ extended: true }));
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.use("/api", import_routes.default);
  app.listen(port, () => {
    import_Log.logger.info(process.env.SECRET_KEYS);
    import_Log.logger.info("apps running on port " + port);
  });
} catch (error) {
  import_Log.logger.error("failed to running apps, error : " + error);
  process.exit(1);
}
async function createProduct(data) {
  await import_Database.default.sync();
  const createdProduct = await import_Product.Product.create(data);
  return createdProduct;
}
createProduct({
  id: (0, import_uuid.v4)(),
  name: "Example Product",
  price: 19.99
}).then((createdProduct) => {
  console.log("Product created:", createdProduct.toJSON());
}).catch((error) => {
  console.error("Error:", error.message);
});
//# sourceMappingURL=index.js.map
