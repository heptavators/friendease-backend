import { AuthService } from "../../services/Auth";
import { Request, Response } from "express-serve-static-core";
import { logger } from "../../helpers/Log";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import SuccessSingularFormatter from '../../helpers/Response/SuccessSingularFormatter';
import { Login  as LoginRequest } from '../../domains/web/Login';
import { ValidationException, Validator } from '../../helpers/Validator';
import { BadRequestError } from "../../helpers/Error/BadRequestError";

export class Auth {
    authService: AuthService

    constructor(authService: AuthService){
        this.authService = authService
    }

    async signInController(req: Request, res: Response) {
      try {
        const data: LoginRequest = req.body as LoginRequest;
        const validatedData = Validator.validate(data, LoginRequest.getSchema());
        const result = await this.authService.SignInService(validatedData);

        // const comparePassword = bcryptjs.compareSync(validatedData.password, result.password)
        // console.log(result.password)
        // if (!comparePassword) {
        //     throw new BadRequestError([{ error: 'password', message: 'Password Salah' }], 401);
        // }

        // return user

        const response = SuccessSingularFormatter('Berhasil Login', { token: result });

        return res.status(200).send(response);

      } catch (error: any) {
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
