import { OrderRepository } from "../../repositories/Order";
import { CreateProductRequest } from '../../domains/web/Product/CreateProductRequest';
import { DEFAULT_LIMIT } from "../../utils/Constant";
import { EditProductRequest } from "../../domains/web/Product/EditProductRequest";
import { Op } from "sequelize";

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

    async createOrderService(createProductRequest: any ){
        const product = await this.orderRepository.insertOrder(createProductRequest)
        return product
    }





}


