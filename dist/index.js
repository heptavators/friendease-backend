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
var import_DatabaseSeeder = require("./domains/seeder/DatabaseSeeder");
var import_connect_timeout = __toESM(require("connect-timeout"));
try {
  const app = (0, import_express.default)();
  import_Database.default.sync();
  const port = "3000";
  const checkAuthorization = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== "YourValidToken") {
      return res.status(401).json({ error: "Unauthorized" });
    }
    next();
  };
  const payload = {
    message: {
      token: "token"
    },
    notification: {
      title: "FCM IS COOL !",
      body: "Notification has been received",
      content_available: "true",
      image: "https://i.ytimg.com/vi/iosNuIdQoy8/maxresdefault.jpg"
    }
  };
  app.use((0, import_connect_timeout.default)("10s"));
  app.use(import_express.default.json());
  app.use(import_express.default.urlencoded({ extended: true }));
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.get("/seed", checkAuthorization, import_DatabaseSeeder.DatabaseSeeder);
  app.use("/api", import_routes.default);
  app.listen(port, () => {
    import_Log.logger.info(process.env.SECRET_KEYS);
    import_Log.logger.info("apps running on port " + port);
  });
} catch (error) {
  import_Log.logger.error("failed to running apps, error : " + error.message);
  process.exit(1);
}
//# sourceMappingURL=index.js.map
