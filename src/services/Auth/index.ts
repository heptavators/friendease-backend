import { AuthRepository } from "../../repositories/Auth";


export class Auth {
    private authRepository: AuthRepository

    constructor(authRepository: AuthRepository){
        this.authRepository = new AuthRepository()
    }

    async SignInService(id: string) {
        return this.authRepository.findOne(id);
      }


}


