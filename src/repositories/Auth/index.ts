import { RegisterRequest } from "../../domains/web/Login/RegisterRequest";
import { AuthModel } from "../../domains/model/Auth";
import { v4 as uuidv4 } from 'uuid';

export class AuthRepository{

    async findEmail(email: string): Promise<any>  {
        try {
            const data = await AuthModel.findOne({ where: { email } });
            return data;
          } catch (e) {
            throw new Error(`Cannot find data because : ${e}`)
          }
      }

      async getProfileById(authId: string): Promise<any>{
        try {
            const data = await AuthModel.findByPk(authId, {
                include: ['location'],
                attributes: { exclude: ['password', 'locationId', 'createdAt', 'updatedAt', 'device_token'] },
            })
            return data
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

    // async getNotificationById(id: string): Promise<any>{
    //     try {
    //         const data = await AuthModel.findByPk(id, {include: ["notifications"]})
    //         return data
    //     } catch (error) {
    //         throw new Error(`Cannot find data because : ${error}`)
    //     }
    // }

    async createUser(registerRequest : RegisterRequest): Promise<any>{
        try {
            console.log("status")
            const newUser = await AuthModel.create({
                authId: uuidv4(),
                email: registerRequest.email,
                password: registerRequest.password
            }, 
        );
            return newUser;
        } catch (error) {
            throw new Error(`Cannot create data because : ${error}`)
        }
    }

}