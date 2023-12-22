import { OrderRepository } from "../../repositories/Order";
import { CreateOrderRequest } from '../../domains/web/Order/CreateOrderRequest';
import { DEFAULT_LIMIT, FEE_PLATFORM, ITEMS_PER_PAGE } from "../../utils/Constant";
import { Op } from "sequelize";
import Payment from "../../configs/Midtrans/Payment";
import { TalentRepository } from "../../repositories/Talent";
import { AuthRepository } from "../../repositories/Auth";
import { NotificationRepository } from "../../repositories/Notification";
import { BadRequestError } from "../../helpers/Error/BadRequestError";

export class OrderService {
    private orderRepository: OrderRepository;
    private talentRepository: TalentRepository;
    private authRepository: AuthRepository;
    private static instance: OrderService

    private constructor(
        orderRepository: OrderRepository, 
        talentRepository: TalentRepository, 
        authRepository: AuthRepository,
        ) {
        this.orderRepository = orderRepository;
        this.talentRepository = talentRepository;
        this.authRepository = authRepository;
    }

    static getInstance(
        orderRepository: OrderRepository, 
        talentRepository: TalentRepository, 
        authRepository: AuthRepository,
        ): OrderService {
        if (!this.instance) {
            this.instance = new OrderService(orderRepository, talentRepository, authRepository);
        }
        return this.instance;
    }


    private buildQueryOptions(page: number) {
        const options: any = {
          order: [['createdAt', 'DESC']], 
          offset: page && page > 1 ? ITEMS_PER_PAGE * page - ITEMS_PER_PAGE : 0,
          limit: DEFAULT_LIMIT,
        };
      
        return options;
      }

    private buildQueryCount(){
        const options: any = {
            order: [['createdAt', 'DESC']], 
          };
                
          return options;
    }

    async GetOrderUserService(page: any, authId: string){
        const options = this.buildQueryOptions(page);
        const total = this.buildQueryCount()
        const data = await this.orderRepository.GetAllOrderUser(options, authId);
        const count = await this.orderRepository.countOrder(total);
        return { data, count }; 
    }

    async getOrderByIdService(orderId: string){
        const data = await this.orderRepository.getOrderById(orderId);
        return data; 
    }

    async PaymentHandlingService(requestMidtrans: any){
        const { transaction_status, order_id } = requestMidtrans;

        if (transaction_status === 'settlement') {
            const order_status = "scheduled"
            return this.updateOrderStatus(order_id, order_status, transaction_status)
        } else if (transaction_status === 'deny') {
            const order_status = "canceled"
            return this.updateOrderStatus(order_id, order_status, transaction_status)

        } else if (transaction_status === 'cancel') {
            const order_status = "canceled"
            return this.updateOrderStatus(order_id, order_status, transaction_status)

        } else if (transaction_status === 'refund') {
            const order_status = "canceled"
            return this.updateOrderStatus(order_id, order_status, transaction_status)

        } else if (transaction_status === 'pending') {
            const order_status = "waiting payment"
           return this.updateOrderStatus(order_id, order_status, transaction_status)

        } else {
            throw new BadRequestError([{ error: 'transaction_status', message: 'Unsupported Transaction Status' }], 422);
        }
      }
    


    async updateOrderStatus(orderId: string, order_status: string, transaction_status: string){

        const updateOrder = await this.orderRepository.changeStatusOrder(orderId, order_status, transaction_status);
        const order = await this.orderRepository.getOrderById(orderId)
        return order;

    }

    async createOrderService(talentId: string, userId: string, createOrderRequest: CreateOrderRequest){
        const findTalent = await this.talentRepository.getTalentById(talentId);
        const findCustomer = await this.authRepository.getProfileById(userId);
        const talent = findTalent.toJSON();
        const customer = findCustomer.toJSON();

        const totalHours = calculateTimeDifference(createOrderRequest.start_hour, createOrderRequest.end_hour);
            
        const orderData: CreateOrderRequest = {
            ...createOrderRequest,
            talentId: talent.talentId,
            price: talent.price, 
            customerId: userId,
            total_hour: totalHours,
            total_amount: totalHours * talent.price + FEE_PLATFORM,
          };

        

          
        const order = await this.orderRepository.insertOrder(orderData, customer);
        return order;
    }

    
    async createOrderTestService(talentId: string, userId: string, createOrderRequest: CreateOrderRequest){
        const findTalent = await this.talentRepository.getTalentById(talentId);
        const talent = findTalent.toJSON()
        const totalHours = calculateTimeDifference(createOrderRequest.start_hour, createOrderRequest.end_hour);
            
        const orderData: CreateOrderRequest = {
            ...createOrderRequest,
            talentId: talent.talentId,
            price: talent.price, 
            customerId: userId,
            total_hour: totalHours,
            total_amount: totalHours * talent.price + FEE_PLATFORM,
          };

          
        const order = await this.orderRepository.testInsertOrder(orderData);
        
        return order;
    }

    async createMidtransTokenService(orderId: string){
        const findOrder = await this.orderRepository.getOrderById(orderId);
        const order = findOrder.toJSON();
        let params = {
            "transaction_details": {
                "gross_amount": order.total_hour * order.price + FEE_PLATFORM,
                "order_id":  order.orderId,
            },
            "item_details": [
                {
                  "id": order.talentId,
                  "price": order.price,
                  "quantity": order.total_hour,
                  "name": order.name 
                },
                {
                 "id": "biaya Transaksi",
                 "price": FEE_PLATFORM,
                 "quantity": 1,
                 "name": "Biaya Transaksi"
                 }
            ]
        };

        const payment = await Payment.createTransaction(params)
        const changeOrder = await this.orderRepository.addTokenMidtransOrder(orderId, payment)
        return changeOrder
    }

    async createPaymentOrderService(orderId: string){
        const findOrder = await this.orderRepository.getOrderById(orderId);
        const order = findOrder.toJSON();
        console.log(order)
        let params = {
            "transaction_details": {
                "gross_amount": order.total_hour * order.price + FEE_PLATFORM,
                "order_id":  order.orderId,
            },
            "item_details": [
                {
                  "id": order.talentId,
                  "price": order.price,
                  "quantity": order.total_hour,
                  "name": order.name 
                },
                {
                 "id": "biaya Transaksi",
                 "price": FEE_PLATFORM,
                 "quantity": 1,
                 "name": "Biaya Transaksi"
                 }
            ]
        };

        const payment = await Payment.createTransaction(params)
        return payment
    }


}


function calculateTimeDifference(startHour: string, endHour: string): number {
    const startTime = new Date(`2000-01-01 ${startHour}`);
    const endTime = new Date(`2000-01-01 ${endHour}`);
    const timeDifferenceInMilliseconds = endTime.getTime() - startTime.getTime();
    const timeDifferenceInHours = timeDifferenceInMilliseconds / (1000 * 60 * 60);
    const roundedTimeDifferenceInHours = Math.ceil(timeDifferenceInHours);
    return roundedTimeDifferenceInHours;
  }

