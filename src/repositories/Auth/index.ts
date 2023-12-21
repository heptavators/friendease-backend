import { RegisterRequest } from "../../domains/web/Auth/RegisterRequest";
import { AuthModel } from "../../domains/model/Auth";
import { v4 as uuidv4 } from 'uuid';
import { EditDeviceTokenRequest } from "../../domains/web/Auth/EditDeviceTokenRequest";
import { EditProfileRequest } from "../../domains/web/Auth/EditProfileRequest";

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
                attributes: { exclude: ['password', 'locationId', 'createdAt', 'updatedAt'] },
            });
            return data;
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

    async changeDeviceToken(editDeviceTokenRequest: EditDeviceTokenRequest, authId: string): Promise<any>{
        try {
            const [updatedRowsCount] = await AuthModel.update(editDeviceTokenRequest, {
                where: {authId}
            });
            return updatedRowsCount > 0;
        } catch (error) {
            throw new Error(`Cannot change data because : ${error}`)

        }
    }

    async changeProfile(editProfileRequest: EditProfileRequest ,authId: string): Promise<any>{ 
        try {
            const [updatedRowsCount] = await AuthModel.update(editProfileRequest, {
                where: {authId}
            });
            return updatedRowsCount > 0;
        } catch (error) {
            throw new Error(`Cannot change data because : ${error}`)

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