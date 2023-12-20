import { HighlightModel } from "../../domains/model/Highlight";
import { v4 as uuidv4 } from 'uuid';


export class HighlightRepository{
    async GetHighlightUser(talentId: string): Promise<any>{
        try {
            const highlight = await HighlightModel.findAll({where: {talentId},  attributes: {
                exclude: ['createdAt', 'updatedAt']
            }})
            return highlight
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

}

 