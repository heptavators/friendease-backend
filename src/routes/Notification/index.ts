import { Router } from 'express';
import { NotificationRepository } from "../../repositories/Notification";
import { NotificationService } from "../../services/Notification";
import { NotificationController } from "../../controllers/Notification";
import middlewareAuth from '../../middlewares/JWT';

const NotificationRouter = Router();

const notificationRepository = new NotificationRepository();
const notificationService = NotificationService.getInstance(notificationRepository);

const notificationController = new NotificationController(notificationService);

NotificationRouter.get("/notification/user", middlewareAuth,  async (req, res) => notificationController.NotificationController(req, res));

export default NotificationRouter