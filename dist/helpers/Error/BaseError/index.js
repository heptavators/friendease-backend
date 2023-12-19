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
var BaseError_exports = {};
__export(BaseError_exports, {
  CustomException: () => CustomException,
  Validator: () => Validator
});
module.exports = __toCommonJS(BaseError_exports);
class CustomException extends Error {
  errors;
  status;
  constructor(errors, status, message = "Validation failed") {
    super(message);
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
class Validator {
  static validate(data, schema) {
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      const errors = [];
      error.details.forEach((detail) => {
        if (detail.context && detail.context.key) {
          const key = detail.context.key;
          errors.push({ error: key, message: detail.message });
        }
      });
      throw new CustomException(errors, 422, "Custom validation failed");
    }
    return data;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CustomException,
  Validator
});
//# sourceMappingURL=index.js.map
