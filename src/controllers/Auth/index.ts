import { AuthService } from "../../services/Auth";
import { Request, Response } from "express-serve-static-core";
import { logger } from "../../helpers/Log";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import SuccessSingularFormatter from '../../helpers/Response/SuccessSingularFormatter';
import { LoginRequest } from '../../domains/web/Auth/LoginRequest';
import { ValidationException, Validator } from '../../helpers/Validator';
import { BadRequestError } from "../../helpers/Error/BadRequestError";
import { RegisterRequest } from "../../domains/web/Auth/RegisterRequest";
import { HandleErrorResponse } from "../../helpers/Error/HandleErrorResponse";
import { EditDeviceTokenRequest } from "../../domains/web/Auth/EditDeviceTokenRequest";
import { EditProfileRequest } from "../../domains/web/Auth/EditProfileRequest";

export class AuthController {
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
        return HandleErrorResponse(res, error);
      } 
    }

    async ProfileController(req: Request, res: Response) {
      try {
        const result = await this.authService.GetProfileService(req.authId);

        const response = SuccessSingularFormatter('Profile User', result);

        return res.status(200).send(response);

      } catch (error: any) {
        return HandleErrorResponse(res, error);
      } 
    }

    async ChangeDeviceTokenController(req: Request, res: Response){
      try {
        const data = req.body as EditDeviceTokenRequest;
        const validatedData = Validator.validate(data, EditDeviceTokenRequest.getSchema());
        const result = await this.authService.ChangeDeviceTokenService(validatedData, req.authId);

        const response = SuccessSingularFormatter('Berhasil Ganti Device Token', result);

        return res.status(200).send(response);

      } catch (error) {
        return HandleErrorResponse(res, error);
      }
    }

    async ChangeProfileController(req: Request, res: Response){
      try {
        const data = req.body as EditProfileRequest;
        const validatedData = Validator.validate(data, EditProfileRequest.getSchema());
        const result = await this.authService.ChangeProfileService(validatedData, req.authId);

        const response = SuccessSingularFormatter('Berhasil Ganti Profile', result);
        return res.status(200).send(response);

      } catch (error) {
        return HandleErrorResponse(res, error);
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
        return HandleErrorResponse(res, error);
      }
    }
  

}