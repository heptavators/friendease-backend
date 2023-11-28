import { AuthRepository } from "../../repositories/Auth";


export class Auth {
    authRepository: AuthRepository

    constructor(){
        this.authRepository = new AuthRepository()
    }

    async find(fullname: string, page: number){
        const gettingTransaction = await this.authRepository.find({
          where: {
            fullname: {
              contains: fullname,
              mode: 'insensitive'
            },
          },
          skip: page > 1 ? 10 * page - 10 : 0,
          take: 10
        })
    
        return gettingTransaction
      }


      async count(fullname: string): Promise<any>{
        const countingTransaction = await this.authRepository.count({
          where: {
            fullname: {
              contains: fullname,
              mode: 'insensitive'
            }
          },
        })
        return countingTransaction
      }}