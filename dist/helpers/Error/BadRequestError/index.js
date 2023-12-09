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
var BadRequestError_exports = {};
__export(BadRequestError_exports, {
  BadRequestError: () => BadRequestError
});
module.exports = __toCommonJS(BadRequestError_exports);
class BadRequestError extends Error {
  errors;
  status;
  constructor(errors, status) {
    super("Validation failed");
    this.errors = errors;
    this.status = status;
    this.message = JSON.stringify(errors);
  }
  toResponseObject() {
    return {
      errors: this.errors.map(({ error, message }) => ({ error, message }))
    };
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BadRequestError
});
//# sourceMappingURL=index.js.map
