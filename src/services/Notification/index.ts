import { BadRequestError } from "../../helpers/Error/BadRequestError";
import { NotificationRepository } from "../../repositories/Notification"
import { Op } from "sequelize";

export class NotificationService {
    private notificationRepository: NotificationRepository
    private static instance: NotificationService

    private constructor(notificationRepository: NotificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    static getInstance(notificationRepository: NotificationRepository): NotificationService {
        if (!this.instance) {
            this.instance = new NotificationService(notificationRepository);
        }
        return this.instance;
    }

    async GetNotificationService(id: string){
        const data = await this.notificationRepository.GetAllNotificationUser(id);
        // const count = await this.productRepository.countProduct(total);
        return data; 
    }





    // async createProductService(createProductRequest: CreateProductRequest ){
    //     const product = await this.productRepository.insertProduct(createProductRequest)
    //     return product
    // }

    // async getProductByIdService(id: string){
    //     const data = await this.productRepository.getProductById(id);
    //     return data; 

    // }




}

