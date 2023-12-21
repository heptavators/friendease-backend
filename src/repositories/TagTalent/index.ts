import { TagAuth } from "../../domains/model/TagAuth";
import { v4 as uuidv4 } from 'uuid';


export class TagTalentRepository{
    async InsertBulkTalent(createOrderRequest: string[], authId: string): Promise<any>{
        try {

            const data = await TagAuth.bulkCreate(
                createOrderRequest.map(tagId => ({
                    tagAuthId: uuidv4(),
                    tagId: tagId,
                    authId: authId
                    
                }))
            );
            
            return data
        } catch (error) {
            throw new Error(`Cannot insert data because : ${error}`)
        }
    }

}

 