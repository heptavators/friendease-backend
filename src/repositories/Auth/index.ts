import { Prisma } from "@prisma/client";
import { Auth } from "../../domains/model/Auth";

import { BaseRepository } from "../Base";

export class AuthRepository extends BaseRepository<Auth>{
    getModel(): Prisma.ModelName {
      throw new Error("Method not implemented.");
    }
    constructor(){
        super("auth")
    }

    async findEmail(email: string): Promise<any>  {
        try {
            return this.model.findUnique({ where: { email } });
          } catch (e) {
            throw new Error(`Cannot find data because : ${e}`)
          }
      }

}