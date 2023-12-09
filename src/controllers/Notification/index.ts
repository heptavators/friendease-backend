import { NotificationService } from "../../services/Notification";
import { Request, Response } from "express-serve-static-core";
import { logger } from "../../helpers/Log";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import SuccessSingularFormatter from '../../helpers/Response/SuccessSingularFormatter';
import { ValidationException } from '../../helpers/Validator';
import { BadRequestError } from "../../helpers/Error/BadRequestError";

export class NotificationController {
    notificationService: NotificationService

    constructor(notificationService: NotificationService){
        this.notificationService = notificationService
    }

    async NotificationController(req: Request, res: Response) {
        try {
          const result = await this.notificationService.GetNotificationService(req.body.userId.userId);
          if(result.length != 0){
            const response = SuccessSingularFormatter('Data Semua Notifikasi User', result);
            return res.status(200).send(response);
          }else {
            const response = ErrorFormatter("Data Notifikasi User Tidak Ditemukan")
            return res.status(404).send(response);
          }

  
        } catch (error: any) {
          handleErrorResponse(res, error)
        } 
      }
}

  
const handleErrorResponse = (res: Response, error: any) => {
    if (error instanceof BadRequestError || error instanceof ValidationException) {
      const response = ErrorFormatter(error.toResponseObject());
      return res.status(error.status).send(response);
    }
  
    logger.error(error);
    const response = ErrorFormatter(error);
    return res.status(500).send(response);
  };
  