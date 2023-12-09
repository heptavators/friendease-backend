import { AuthRepository } from "../../repositories/Auth";
import { LoginRequest } from '../../domains/web/Login/LoginRequest';
import { RegisterRequest } from '../../domains/web/Login/RegisterRequest';
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


    async SignInService(loginRequest: LoginRequest) {
            const findUser = await this.authRepository.findEmail(loginRequest.email);
            if (!findUser) {
                    throw new BadRequestError([{ error: 'email', message: 'Email Tidak Ditemukan' }], 401);
            }

            const user = findUser.toJSON();

            const comparePassword = bcryptjs.compareSync(loginRequest.password, user.password)
            if (!comparePassword) {
                throw new BadRequestError([{ error: 'password', message: 'Password Salah' }], 401);
            }

            const token = GenerateJwtToken(user);
            return token;
    }

    async RegisterService(registerRequest: RegisterRequest) {
        const existingUser = await this.authRepository.findEmail(registerRequest.email);

        if (existingUser) {
          throw new BadRequestError([{ error: 'email', message: 'Email already exists' }], 401);
        }
  
        // Hash the password using bcryptjs
        const hashedPassword = await bcryptjs.hash(registerRequest.password, 10);
        
        const data = {
            fullname: registerRequest.fullname,
            email: registerRequest.email,
            password: hashedPassword,
        }
        // Create a new user with the hashed password
        const newUser = await this.authRepository.createUser(data);
  
        return newUser;
}

    async GetProfileService(id: string){
        const findUser = await this.authRepository.getProfileById(id);
        if (!findUser) {
                throw new BadRequestError([{ error: 'email', message: 'Email Tidak Ditemukan' }], 401);
        }

        return findUser; 
    }




}


