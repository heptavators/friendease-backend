import { AuthRepository } from "../../repositories/Auth";
import { LoginRequest } from '../../domains/web/Auth/LoginRequest';
import { RegisterRequest } from '../../domains/web/Auth/RegisterRequest';
import { BadRequestError } from "../../helpers/Error/BadRequestError";
import { GenerateJwtToken } from "../../helpers/JWT";
import bcryptjs from "bcryptjs";
import { EditDeviceTokenRequest } from "../../domains/web/Auth/EditDeviceTokenRequest";
import { EditProfileRequest } from "../../domains/web/Auth/EditProfileRequest";
import { TagTalentRepository } from "../../repositories/TagTalent";

export class AuthService {
    private authRepository: AuthRepository
    private tagTalentRepository: TagTalentRepository;
    private static instance: AuthService

    private constructor(authRepository: AuthRepository, tagTalentRepository: TagTalentRepository) {
        this.authRepository = authRepository;
        this.tagTalentRepository = tagTalentRepository;
    }

    static getInstance(authRepository: AuthRepository, tagTalentRepository: TagTalentRepository): AuthService {
        if (!this.instance) {
            this.instance = new AuthService(authRepository, tagTalentRepository);
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

    async ChangeDeviceTokenService(editDeviceTokenRequest: EditDeviceTokenRequest, authId: string) {
        const user = await this.authRepository.changeDeviceToken(editDeviceTokenRequest, authId);
        return user;
    }
    
    async ChangeProfileService(editProfileRequest: EditProfileRequest, authId: string){
        // const user = await this.authRepository.changeProfile(editProfileRequest, authId);
        const tags = await this.tagTalentRepository.InsertBulkTalent(editProfileRequest.tags, authId)
        const profile = await this.authRepository.getProfileById(authId);
        return profile;
    }

    async RegisterService(registerRequest: RegisterRequest) {
        const existingUser = await this.authRepository.findEmail(registerRequest.email);

        if (existingUser) {
          throw new BadRequestError([{ error: 'email', message: 'Email already exists' }], 401);
        }
  
        const hashedPassword = await bcryptjs.hash(registerRequest.password, 10);
        
        const data = {
            email: registerRequest.email,
            password: hashedPassword,
        }

        const newUser = await this.authRepository.createUser(data);
  
        return newUser;
    }

    async GetProfileService(authId: string){
        const findUser = await this.authRepository.getProfileById(authId);
        if (!findUser) {
                throw new BadRequestError([{ error: 'email', message: 'Email Tidak Ditemukan' }], 401);
        }

        return findUser; 
    }
}


