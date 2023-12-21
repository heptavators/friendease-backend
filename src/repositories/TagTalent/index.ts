import { TagTalent } from "../../domains/model/TagTalent";


export class TagTalentRepository{
    async testInsertOrder(createOrderRequest: any): Promise<any>{
        try {

            console.log(createOrderRequest)
            
            // const order = await TagTalent.create({

            //   });

            //   return order.toJSON();
        } catch (error) {
            throw new Error(`Cannot insert data because : ${error}`)
        }
    }

}

 