import { Router } from 'express';
import { NotificationRepository } from "../../repositories/Notification";
import { AuthRepository } from "../../repositories/Auth";
import { NotificationService } from "../../services/Notification";
import { NotificationController } from "../../controllers/Notification";
import middlewareAuth from '../../middlewares/MiddlewareAuth';

const NotificationRouter = Router();

const notificationRepository = new NotificationRepository();
const authRepository = new AuthRepository();
const notificationService = NotificationService.getInstance(notificationRepository, authRepository);

const notificationController = new NotificationController(notificationService);

NotificationRouter.get("/notification/user", middlewareAuth,  async (req, res) => notificationController.GetNotificationController(req, res));
NotificationRouter.post("/notification/create", middlewareAuth,  async (req, res) => notificationController.CreateNotificationController(req, res));

export default NotificationRouter