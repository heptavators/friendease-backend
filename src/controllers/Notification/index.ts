import { NotificationService } from "../../services/Notification";
import { Request, Response } from "express-serve-static-core";
import { logger } from "../../helpers/Log";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import SuccessSingularFormatter from '../../helpers/Response/SuccessSingularFormatter';
import { Validator } from '../../helpers/Validator';
import { CreateNotificationRequest } from "../../domains/web/Notification/CreateNotificationRequest";
import { HandleErrorResponse } from "../../helpers/Error/HandleErrorResponse";

export class NotificationController {
    notificationService: NotificationService

    constructor(notificationService: NotificationService){
        this.notificationService = notificationService
    }

    async GetNotificationController(req: Request, res: Response) {
        try {
          const result = await this.notificationService.GetNotificationService(req.authId);
          if(result.length != 0){
            const response = SuccessSingularFormatter('Data Semua Notifikasi User', result);
            return res.status(200).send(response);
          }else {
            const response = ErrorFormatter("Data Notifikasi User Tidak Ditemukan")
            return res.status(404).send(response);
          }

  
        } catch (error: any) {
          return HandleErrorResponse(res, error);
        } 
      }
      


    async CreateNotificationController(req: Request, res: Response){
      try {
            const data: CreateNotificationRequest = req.body;
            const validatedData = Validator.validate(data, CreateNotificationRequest.getSchema());
            const result = await this.notificationService.CreateNotificationService(req.authId, validatedData)
            const response = SuccessSingularFormatter('Berhasil Buat Notifikasi Baru', result);
    
            return res.status(200).send(response);
      } catch (error) {
        return HandleErrorResponse(res, error);
      }
    }

    async TestNotificationController(req: Request, res: Response){
      try {
            const result = await this.notificationService.TestNotificationService()
            const response = SuccessSingularFormatter('Berhasil Buat Notifikasi Baru', result);
    
            return res.status(200).send(response);
      } catch (error) {
        return HandleErrorResponse(res, error);
      }
    }
    
    
    }
