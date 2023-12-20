import { TagModel } from "../../domains/model/Tag";


export class TagRepository{



    async getAllTags(options: object): Promise<any>{
        try {
            const tags = await TagModel.findAll(options)
            return tags
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }



    async countTag(options: object): Promise<any>{
        try {
            const data = await TagModel.count(options)
            return data
        } catch (error) {
            throw new Error(`Cannot count data because : ${error}`)

        }
    }

}

 