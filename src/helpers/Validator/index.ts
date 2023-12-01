import Joi, { Schema, ValidationErrorItem } from "joi";

export class ValidationException extends Error {
    errors: Array<{ error: string; message: string; code: number }>;
    status: number;
  
    constructor(errors: Array<{ error: string; message: string; code: number }>, status: number = 400) {
      super('Validation failed');
      this.errors = errors;
      this.status = status;  
      this.message = JSON.stringify(errors); 
    }
  }
  
  export class Validator {
    static validate<T>(data: T, schema: Schema<T>): T {
      const { error } = schema.validate(data, { abortEarly: false });
  
      if (error) {
        const errors: Array<{ error: string; message: string; code: number }> = [];
  
        error.details.forEach((detail: ValidationErrorItem) => {
          if (detail.context && detail.context.key) {
            const key = detail.context.key;
            errors.push({ error: key, message: detail.message, code: 422 });
          }
        });
  
        throw new ValidationException(errors);
      }
  
      return data;
    }
  }
  