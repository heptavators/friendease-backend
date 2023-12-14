import { SendNotification } from "../../utils/Notification";
import { CreateNotificationRequest } from "../../domains/web/Notification/CreateNotificationRequest";
import { NotificationRepository } from "../../repositories/Notification";
import { AuthRepository } from "../../repositories/Auth";


export class NotificationService {
    private notificationRepository: NotificationRepository
    private authRepository: AuthRepository
    private static instance: NotificationService

    private constructor(notificationRepository: NotificationRepository, authRepository: AuthRepository) {
        this.notificationRepository = notificationRepository;
        this.authRepository = authRepository;
    }

    static getInstance(notificationRepository: NotificationRepository, authRepository: AuthRepository): NotificationService {
        if (!this.instance) {
            this.instance = new NotificationService(notificationRepository, authRepository);
        }
        return this.instance;
    }

    async GetNotificationService(authId: string){
        const data = await this.notificationRepository.GetAllNotificationUser(authId);
        // const count = await this.productRepository.countProduct(total);
        return data; 
    }


    async CreateNotificationService(authId: string, CreateNotificationRequest: CreateNotificationRequest){
        await SendNotification()
        const user = await this.authRepository.getProfileById(authId);
        console.log(user.toJSON().device_token)
        const data = await this.notificationRepository.CreateNotification(authId, CreateNotificationRequest);
        return data; 
    }

    async TestNotificationService(){
        await SendNotification()
        const data =  {message: "omke"}
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

