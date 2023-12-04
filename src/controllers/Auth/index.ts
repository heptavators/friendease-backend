import { AuthService } from "../../services/Auth";
import { AuthRepository } from "../../repositories/Auth";
import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { logger } from "../../helpers/Log";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import SuccessSingularFormatter from '../../helpers/Response/SuccessSingularFormatter';
import FailFormatter from '../../helpers/Response/FailFormatter';
import { Login  as LoginRequest } from '../../domains/web/Login';
import { ValidationException, Validator } from '../../helpers/Validator';
import ErrorInputFormatter from "../../helpers/Response/ErrorInputFormatter";
import { BadRequestError } from "../../helpers/Error/BadRequestError";
import { BaseError } from "../../helpers/Error/BaseError";



export class Auth {
    authService: AuthService

    constructor(authService: AuthService, authRepository: AuthRepository){
        this.authService = new AuthService(authRepository)
    }


    
    async signInController(req: Request, res: Response) {
      try {
        const data: LoginRequest = req.body as LoginRequest;
        const validatedData = Validator.validate(data, LoginRequest.getSchema());
    
        const result = await this.authService.SignInService(validatedData);
        const response = SuccessSingularFormatter('Berhasil Login', { token: result });

        return res.status(200).send(response);

      } catch (error: any) {
        // logger.error(error)
        if (error instanceof BaseError){
          const response = ErrorFormatter(error.message)
          return res.status(error.statusCode).send(response)
  
        }

        const response = ErrorFormatter(error)
        return res.status(500).send(response)


          // if (error instanceof ValidationException) {
          //   const formattedErrors = error.errors.map((err) => ({ error: err.error, message: err.message }));
          //   const response =  (formattedErrors)
            
          //   res.status(422).send(response);

          // }else if (error instanceof BadRequestError){

          //   const formattedErrors = error.errors.map((err) => ({ error: err.error, message: err.message }));
          //   const response = ErrorInputFormatter(formattedErrors)
            
          //   res.status(400).send(response);

          // }else {
          //   const response = ErrorFormatter(error)
          //   logger.error(error)
          //   res.status(500).send(response)
          // }
      
    } 
      
    }
}