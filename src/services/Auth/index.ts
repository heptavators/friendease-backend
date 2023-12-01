import { AuthRepository } from "../../repositories/Auth";
import { Login  as LoginRequest } from '../../domains/web/Login';
import { GenerateJwtToken } from "../../helpers/JWT";
import bcryptjs from "bcryptjs"
import { ValidationException } from "../../helpers/Validator";
import { BadRequestError } from "../../helpers/Error/BadRequestError";

export class AuthService {
    private authRepository: AuthRepository

    constructor(authRepository: AuthRepository){
        this.authRepository = new AuthRepository()
    }

    async SignInService(LoginRequest: LoginRequest) {
            const user = await this.authRepository.findEmail(LoginRequest.email)
            if (!user) {
                throw new ValidationException([{ error: 'email', message: 'Incorrect Email', code: 404 }]);
            }

            const comparePassword = bcryptjs.compareSync(LoginRequest.password, user.password)
            if (!comparePassword) {
                throw new BadRequestError([{ error: 'password', message: 'Incorrect password', code: 401 }]);
            }

            const token = GenerateJwtToken(user);
            return token;

      }




}


