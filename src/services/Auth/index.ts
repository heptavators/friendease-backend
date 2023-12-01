import { AuthRepository } from "../../repositories/Auth";
import { Login  as LoginRequest } from '../../domains/web/Login';
import { GenerateJwtToken } from "../../helpers/JWT";

export class AuthService {
    private authRepository: AuthRepository

    constructor(authRepository: AuthRepository){
        this.authRepository = new AuthRepository()
    }

    async SignInService(LoginRequest: LoginRequest) {
        try {
            const user = await this.authRepository.findEmail(LoginRequest.email)
            if (user) {
                if (user.password != LoginRequest.email){
                    console.log(1)
                }
                const token = GenerateJwtToken(user);
                return token;
            }
            
        } catch (error) {
            throw new Error(`Something Wrong: ${error}`);
        }
      }




}


