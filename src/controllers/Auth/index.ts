import { Auth as AuthService } from "../../services/Auth";
import { AuthRepository } from "../../repositories/Auth";
import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { logger } from "../../helpers/Log";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import SuccessFormatter from '../../helpers/Response/SuccessFormatter';
import FailFormatter from '../../helpers/Response/FailFormatter';

export class Auth {
    authService: AuthService

    constructor(authService: AuthService, authRepository: AuthRepository){
        this.authService = new AuthService(authRepository)
    }


    
    async signInController(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
      try {
        const {id} = req.body
        const result = await this.authService.SignInService(id)

        if (result){
          const response = SuccessFormatter("Data Semua Pengguna", {}, result)
          res.status(200).send(response)

        }else {
          const response = FailFormatter("Pengguna Tidak Ditemukan");
          res.status(404).send(response)

        }
      } catch (error: any) {
        const response = ErrorFormatter(error);
        logger.error(error);
        res.status(500).send(response);
      }


  }

}