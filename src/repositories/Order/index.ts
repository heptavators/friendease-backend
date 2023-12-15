import Payment from "../../configs/Midtrans/Payment";
import { OrderModel } from "../../domains/model/Order";
import { CreateOrderRequest } from '../../domains/web/Order/CreateOrderRequest';
import { v4 as uuidv4 } from 'uuid';
import { FEE_PLATFORM } from "../../utils/Constant";



export class OrderRepository{

 

    async insertOrder(createOrderRequest: CreateOrderRequest, customer: any): Promise<any> {
        if (!OrderModel.sequelize) {
            throw new Error('Sequelize is not initialized on OrderModel.');
        }
        
        const transaction = await OrderModel.sequelize.transaction();
        
        try {
            const order =  await OrderModel.create({
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
                order_status: 'scheduled',
                transaction_status: 'pending'
            }, { transaction });


            // Call Midtrans
            const paymentParams = {
                "transaction_details": {
                    "gross_amount": order.toJSON().total_hour * order.toJSON().price + FEE_PLATFORM,
                    "order_id": order.toJSON().orderId,
                },
                "item_details": [
                    {
                        "id": order.toJSON().talentId,
                        "price": order.toJSON().price,
                        "quantity": order.toJSON().total_hour,
                        "name": order.toJSON().name,
                    },
                    {
                        "id": "biaya Transaksi",
                        "price": FEE_PLATFORM,
                        "quantity": 1,
                        "name": "Biaya Transaksi",
                    },
                ],
                "customer_details": {
                    "first_name":  customer.fullname,
                    "email": customer.email,
                    "phone": customer.phone_number,
                }
            };
            


            const payment = await Payment.createTransaction(paymentParams);


            // Update the order with Midtrans data
            await order.update({
                token: payment.token,
                redirect_url: payment.redirect_url
            });
            


            await transaction.commit();

            return order;
        } catch (error) {
            await transaction.rollback();
            throw new Error(`Cannot insert data because: ${error}`);
        }
    }

    async countOrderTalentById(talentId: string){
        try {
            const order = await OrderModel.findAndCountAll({where: {
                "talentId": talentId
            }})

            console.log(order)
            return order
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }
    


    async testInsertOrder(createOrderRequest: CreateOrderRequest): Promise<any>{
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

    async getOrderById(orderId: string): Promise<any>{
        try {
            const order = await OrderModel.findByPk(orderId)
            return order
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

    async addTokenMidtransOrder(orderId: string, payment: any): Promise<any>{
        try {
            const [updatedRowsCount] = await OrderModel.update({
                token: payment.token,
                redirect_url: payment.redirect_url
            }, {
                where: {orderId}
            });
            
              return this.getOrderById(orderId);
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

}

 