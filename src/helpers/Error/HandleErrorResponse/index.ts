import { ValidationException } from "../../../helpers/Validator";
import { BadRequestError } from "../BadRequestError";
import ErrorFormatter from "../../../helpers/Response/ErrorFormatter";
import { logger } from "../../../helpers/Log";
import { Response } from 'express';
import { CustomException } from "../CustomException";

export const HandleErrorResponse = (res: Response, error: any) => {
    if (error instanceof BadRequestError || error instanceof ValidationException || error instanceof CustomException) {
      const response = ErrorFormatter(error.toResponseObject());
      return res.status(error.status).send(response);
    } else {
        logger.error(error.message);
        const response = ErrorFormatter(error.message);
        return res.status(500).send(response);
    }
  
};