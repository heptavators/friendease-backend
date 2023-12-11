import { HighlightModel } from "../../domains/model/Highlight";
import { v4 as uuidv4 } from 'uuid';


export class HighlightRepository{
    async GetAllNotificationUser(authId: string): Promise<any>{
        try {
            const notification = await HighlightModel.findAll({where: {authId}})
            return notification
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

}

 