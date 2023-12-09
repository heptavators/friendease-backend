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
var Validator_exports = {};
__export(Validator_exports, {
  ValidationException: () => ValidationException,
  Validator: () => Validator
});
module.exports = __toCommonJS(Validator_exports);
class ValidationException extends Error {
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
      throw new ValidationException(errors, 422);
    }
    return data;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ValidationException,
  Validator
});
//# sourceMappingURL=index.js.map
