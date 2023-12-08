import { AuthModel } from "../../domains/model/Auth";

export class AuthRepository{

    async findEmail(email: string): Promise<any>  {
        try {
            const data = await AuthModel.findOne({ where: { email } });
            return data;
          } catch (e) {
            throw new Error(`Cannot find data because : ${e}`)
          }
      }

}