import { AuthService } from "../../services/Auth";
import { Request, Response } from "express-serve-static-core";
import { logger } from "../../helpers/Log";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import SuccessSingularFormatter from '../../helpers/Response/SuccessSingularFormatter';
import { LoginRequest } from '../../domains/web/Login/LoginRequest';
import { ValidationException, Validator } from '../../helpers/Validator';
import { BadRequestError } from "../../helpers/Error/BadRequestError";
import { RegisterRequest } from "../../domains/web/Login/RegisterRequest";

export class Auth {
    authService: AuthService

    constructor(authService: AuthService){
        this.authService = authService
    }

    async LoginController(req: Request, res: Response) {
      try {
        const data = req.body as LoginRequest;
        const validatedData = Validator.validate(data, LoginRequest.getSchema());
        const result = await this.authService.SignInService(validatedData);

        const response = SuccessSingularFormatter('Berhasil Login', { token: result });

        return res.status(200).send(response);

      } catch (error: any) {
        handleErrorResponse(res, error)
      } 
    }

    async ProfileController(req: Request, res: Response) {
      try {
        const result = await this.authService.GetProfileService(req.userId);

        const response = SuccessSingularFormatter('Profile User', result);

        return res.status(200).send(response);

      } catch (error: any) {
        handleErrorResponse(res, error)
      } 
    }

    async RegisterController(req: Request, res: Response){
      try {
        const data = req.body as RegisterRequest;
        const validatedData = Validator.validate(data, RegisterRequest.getSchema());
        const result = await this.authService.RegisterService(validatedData);

        const response = SuccessSingularFormatter('Berhasil Register Akun', result );

        return res.status(200).send(response);

      } catch (error) {
        handleErrorResponse(res, error)
      }
    }
  

  }


  
const handleErrorResponse = (res: Response, error: any) => {
  if (error instanceof BadRequestError || error instanceof ValidationException) {
    const response = ErrorFormatter(error.toResponseObject());
    return res.status(error.status).send(response);
  }

  logger.error(error);
  const response = ErrorFormatter(error);
  return res.status(500).send(response);
};
