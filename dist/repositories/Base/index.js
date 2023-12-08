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
class BaseRepository {
  model;
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      return await this.model.create(data);
    } catch (e) {
      throw new Error(`Cannot create data because: ${e}`);
    }
  }
  async update(id, data) {
    try {
      const [updatedRowsCount] = await this.model.update(data, {
        where: { id }
      });
      return updatedRowsCount > 0;
    } catch (e) {
      throw new Error(`Cannot update data because: ${e}`);
    }
  }
  async delete(id) {
    try {
      const deletedRowsCount = await this.model.destroy({
        where: { id }
      });
      return deletedRowsCount > 0;
    } catch (e) {
      throw new Error(`Cannot delete data because: ${e}`);
    }
  }
  async find(options) {
    try {
      const instances = await this.model.findAll(options);
      return instances.map((instance) => instance.toJSON());
    } catch (e) {
      throw new Error(`Not found data: ${e}`);
    }
  }
  async count(options) {
    try {
      return await this.model.count(options);
    } catch (e) {
      throw new Error(`Not found data: ${e}`);
    }
  }
  async findOne(id) {
    try {
      const instance = await this.model.findOne(id);
      return instance ? instance.toJSON() : null;
    } catch (e) {
      throw new Error(`Cannot find data because: ${e}`);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseRepository
});
//# sourceMappingURL=index.js.map
