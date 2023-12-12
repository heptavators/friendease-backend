import { OrderModel } from "../../domains/model/Order";
import { CreateProductRequest } from '../../domains/web/Product/CreateProductRequest';
import { EditProductRequest } from "../../domains/web/Product/EditProductRequest";
import { v4 as uuidv4 } from 'uuid';

export class OrderRepository{


    async insertOrder(createProductRequest: any): Promise<any>  {
        try {
            const order = await OrderModel.create({
                productId: uuidv4(),
                name: createProductRequest.name,
                price: createProductRequest.price,
              });
          
              return order.toJSON();
        } catch (error) {
            throw new Error(`Cannot insert data because : ${error}`)
        }
    }

}

 