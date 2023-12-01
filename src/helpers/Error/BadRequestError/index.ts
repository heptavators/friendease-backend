import { CustomError } from "../CustomError";

export class BadRequestError extends Error {
    errors: Array<{ error: string; message: string; code: number }>;
    status: number;
  
    constructor(errors: Array<{ error: string; message: string; code: number }>) {
      super('Validation failed');
      this.errors = errors;
      this.status = 400;  
      this.message = JSON.stringify(errors); 
    }
}