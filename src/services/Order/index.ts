import { OrderRepository } from "../../repositories/Order";
import { CreateOrderRequest } from '../../domains/web/Order/CreateOrderRequest';
import { DEFAULT_LIMIT } from "../../utils/Constant";
import { EditProductRequest } from "../../domains/web/Product/EditProductRequest";
import { Op } from "sequelize";
import Payment from "../../configs/Midtrans/Payment";

export class OrderService {
    private orderRepository: OrderRepository
    private static instance: OrderService

    private constructor(orderRepository: OrderRepository) {
        this.orderRepository = orderRepository;
    }

    static getInstance(orderRepository: OrderRepository): OrderService {
        if (!this.instance) {
            this.instance = new OrderService(orderRepository);
        }
        return this.instance;
    }


    // private buildQueryOptions(name: string, page: number) {
    //     const options: any = {
    //       order: [['createdAt', 'DESC']], 
    //       offset: page && page > 1 ? 10 * page - 10 : 0,
    //       limit: DEFAULT_LIMIT,
    //     };
      
    //     if (name) {
    //       options.where = {
    //         name: {
    //           [Op.iLike]: `%${name}%`,
    //         },
    //       };
    //     }
      
    //     return options;
    //   }

    // private buildQueryCount(name: any){
    //     const options: any = {
    //         order: [['createdAt', 'DESC']], 
    //       };
        
    //       if (name) {
    //         options.where = {
    //           name: {
    //             [Op.iLike]: `%${name}%`,
    //           },
    //         };
    //       }
        
    //       return options;
    // }

    async createOrderService(createOrderRequest: CreateOrderRequest){
        const totalHours = calculateTimeDifference(createOrderRequest.start_hour, createOrderRequest.end_hour);
        console.log(totalHours)
        let params = {
            "transaction_details": {
                "gross_amount": totalHours * 75_000 + 5000,
                "order_id":  "23234343",
            },
            "item_details": [
                {
                  "id": "idtalent-4025920594509",
                  "price": 75_000,
                  "quantity": totalHours,
                  "name": `${totalHours} Jam sama Talent` 
                },
                {
                 "id": "biaya-transanski-4209420923",
                 "price": 5000,
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

