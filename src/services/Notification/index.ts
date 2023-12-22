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
        return data; 
    }


    async CreateNotificationService(authId: string, createNotificationRequest: CreateNotificationRequest){
        const user = await this.authRepository.getProfileById(authId);
        await SendNotification(user.toJSON().device_token, createNotificationRequest)
        const data = await this.notificationRepository.CreateNotification(authId, createNotificationRequest);
        return data; 
    }
}

