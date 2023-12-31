import Payment from "../../configs/Midtrans/Payment";
import { OrderModel } from "../../domains/model/Order";
import { CreateOrderRequest } from '../../domains/web/Order/CreateOrderRequest';
import { v4 as uuidv4 } from 'uuid';
import { FEE_PLATFORM } from "../../utils/Constant";
import { TalentModel } from "../../domains/model/Talent";
import { AuthModel } from "../../domains/model/Auth";



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
                order_status: 'waiting payment',
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

    async countOrderTalentById(talentId: string): Promise<any>{
        try {
            const order = await OrderModel.count({where: {
                "talentId": talentId
            }})
            return order
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }
    
    async GetAllOrderUser(options: object, customerId: string): Promise<any>{
        try {
            const data = await OrderModel.findAll({where: {
                "customerId": customerId
            },  ...options,
            include: [
                {
                    model: TalentModel,
                    as: 'talent',
                    attributes: {
                        exclude: ['talentId'],
                    },
                    include: [
                        {
                            model: AuthModel,
                            as: 'auth',
                            attributes: {
                                exclude: ['email', 'bio', 'bod', 'gender', 'status', 'roles', 'device_token', 'password', 'createdAt', 'updatedAt', "locationId", "phone_number", "user_preferences"],
                            },
                        },
                    ]
                },
            ], 
            });

            return data;
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }


    async countOrder(options: object): Promise<any>{
        try {
            const data = await OrderModel.count(options)
            return data
        } catch (error) {
            throw new Error(`Cannot count data because : ${error}`)

        }
    }

    async changeStatusOrder(orderId: string, order_status: string, transaction_status: string): Promise<any>{
        const [updatedRowsCount] = await OrderModel.update({ order_status, transaction_status }, {
            where: { orderId }
        });
        return updatedRowsCount > 0;
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

 