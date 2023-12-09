import { NotificationModel } from "../../domains/model/Notification";


export class NotificationRepository{
    async GetAllNotificationUser(auth_id: string): Promise<any>{
        try {
            const notification = await NotificationModel.findAll({where: {auth_id}})
            return notification
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }
}

 