import { AuthService } from "../../services/Auth";
import { AuthRepository } from "../../repositories/Auth";
import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { logger } from "../../helpers/Log";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import SuccessSingularFormatter from '../../helpers/Response/SuccessSingularFormatter';
import FailFormatter from '../../helpers/Response/FailFormatter';
import { Login  as LoginRequest } from '../../domains/web/Login';
import { Validator } from '../../helpers/Validator';



export class Auth {
    authService: AuthService

    constructor(authService: AuthService, authRepository: AuthRepository){
        this.authService = new AuthService(authRepository)
    }


    
    async signInController(req: Request, res: Response) {
      try {

        const data: LoginRequest = req.body as LoginRequest
        const validate: LoginRequest = Validator.validate(data, LoginRequest.getSchema());
          if (JSON.stringify(validate) === JSON.stringify(data)) {
            const result = await this.authService.SignInService(validate)
            if (result){
              const response = SuccessSingularFormatter("Berhasil Login", {token: result})
              res.status(200).send(response)
    
            }else {
              const response = FailFormatter("Pengguna Tidak Ditemukan");
              res.status(404).send(response)    
            }
          } else {
            const response = ErrorFormatter(JSON.stringify(validate));
            res.status(422).json(response);
        }

      } catch (error: any) {
        const response = ErrorFormatter(error.message);
        logger.error(error);
        res.status(500).send(response);
      }


  }

}