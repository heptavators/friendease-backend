import ErrorFormatter from "../../Response/ErrorFormatter";

export class BadRequestError extends Error {
  errors: Array<{ error: string; message: string }>;
  status: number

  constructor(errors: Array<{ error: string; message: string}>, status: number) {
    super('Validation failed');
    this.errors = errors;
    this.status = status
    this.message = JSON.stringify(errors); 

    this.toResponseObject()

  }

  toResponseObject(){
    return {
      errors: this.errors.map(({ error, message }) => ({ error, message })),

    }
  }

}