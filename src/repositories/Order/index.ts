import { OrderModel } from "../../domains/model/Order";
import { CreateOrderRequest } from '../../domains/web/Order/CreateOrderRequest';
import { v4 as uuidv4 } from 'uuid';

export class OrderRepository{


    async insertOrder(createOrderRequest: CreateOrderRequest): Promise<any>  {
        try {

            const order = await OrderModel.create({
                orderId: uuidv4(),
                talentId: createOrderRequest.talentId,
                customerId: createOrderRequest.customerId,
                name: createOrderRequest.name,
                type: createOrderRequest.type,
                price: createOrderRequest.price,
                date: createOrderRequest.date,
                start_hour: createOrderRequest.start_hour,
                end_hour: createOrderRequest.end_hour,
                total_hour: createOrderRequest.total_hour,
                total_amount: createOrderRequest.total_amount,
              });

              return order.toJSON();

        } catch (error) {
            throw new Error(`Cannot insert data because : ${error}`)
        }
    }

    async getOrderById(talentId: string): Promise<any>{
        try {
            const order = await OrderModel.findByPk(talentId)
            return order
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

}

 