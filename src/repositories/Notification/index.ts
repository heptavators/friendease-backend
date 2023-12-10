import { CreateNotificationRequest } from "../../domains/web/Notification/CreateNotificationRequest";
import { NotificationModel } from "../../domains/model/Notification";
import { v4 as uuidv4 } from 'uuid';


export class NotificationRepository{
    async GetAllNotificationUser(authId: string): Promise<any>{
        try {
            const notification = await NotificationModel.findAll({where: {authId}})
            return notification
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

    async CreateNotification(authId: string, createNotificationRequest: CreateNotificationRequest): Promise<any>{
        try {
            const notification = await NotificationModel.create({
                notificationId: uuidv4(),
                authId: authId,
                icon: createNotificationRequest.icon,
                title: createNotificationRequest.title,
                body: createNotificationRequest.body,
            })
            return notification.toJSON();

        } catch (error) {
            throw new Error(`Cannot create data because : ${error}`)
        }
    }
}

 