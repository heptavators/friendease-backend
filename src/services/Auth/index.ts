import { AuthRepository } from "../../repositories/Auth";
import { Login  as LoginRequest } from '../../domains/web/Login';
import { BadRequestError } from "../../helpers/Error/BadRequestError";
import { GenerateJwtToken } from "../../helpers/JWT";
import bcryptjs from "bcryptjs";

export class AuthService {
    private authRepository: AuthRepository
    private static instance: AuthService

    private constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository;
    }

    static getInstance(authRepository: AuthRepository): AuthService {
        if (!this.instance) {
            this.instance = new AuthService(authRepository);
        }
        return this.instance;
    }


    async SignInService(LoginRequest: LoginRequest) {
            const findUser = await this.authRepository.findEmail(LoginRequest.email);
            if (!findUser) {
                    throw new BadRequestError([{ error: 'email', message: 'Email Tidak Ditemukan' }], 401);
            }

            const user = findUser.toJSON();

            const comparePassword = bcryptjs.compareSync(LoginRequest.password, user.password)
            if (!comparePassword) {
                throw new BadRequestError([{ error: 'password', message: 'Password Salah' }], 401);
            }

            const token = GenerateJwtToken(user);
            return token;
    }




}


