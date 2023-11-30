"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Base_exports = {};
__export(Base_exports, {
  BaseRepository: () => BaseRepository
});
module.exports = __toCommonJS(Base_exports);
var import_client = require("@prisma/client");
const prisma = new import_client.PrismaClient();
class BaseRepository {
  model;
  constructor(model) {
    this.model = prisma[model];
  }
  async create(data) {
    try {
      return this.model.create({ data });
    } catch (e) {
      throw new Error(`Cannot create data because : ${e}`);
    }
  }
  update(special_id, data) {
    try {
      return this.model.update({ where: { special_id }, data });
    } catch (e) {
      throw new Error(`Cannot update data because : ${e}`);
    }
  }
  delete(special_id) {
    try {
      return this.model.delete({ where: { special_id } });
    } catch (e) {
      throw new Error(`Cannot delete data because : ${e}`);
    }
  }
  find(options) {
    try {
      return this.model.findMany(options);
    } catch (e) {
      throw new Error(`Not found data : ${e}`);
    }
  }
  count(options) {
    try {
      return this.model.count(options);
    } catch (e) {
      throw new Error(`Not found data : ${e}`);
    }
  }
  findOne(id) {
    try {
      return this.model.findUnique({ where: { id } });
    } catch (e) {
      throw new Error(`Cannot find data because : ${e}`);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseRepository
});
//# sourceMappingURL=index.js.map
