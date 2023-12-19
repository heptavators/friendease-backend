import { Router } from 'express';
import { TalentRepository } from "../../repositories/Talent";
import { OrderRepository } from "../../repositories/Order";
import { NotificationRepository } from "../../repositories/Notification";
import { AuthRepository } from "../../repositories/Auth";
import { OrderService } from "../../services/Order";
import { OrderController } from "../../controllers/Order";
import MiddlewareAuth from "../../middlewares/MiddlewareAuth";
import { NotificationService } from '../../services/Notification';

const OrderRouter = Router();

const orderRepository = new OrderRepository();
const talentRepository = new TalentRepository();
const authRepository = new AuthRepository();
const notificationRepository = new NotificationRepository();
const orderService = OrderService.getInstance(orderRepository, talentRepository, authRepository);

const notificationService = NotificationService.getInstance(notificationRepository, authRepository)

const orderController = new OrderController(orderService, notificationService);

OrderRouter.use(MiddlewareAuth)

OrderRouter.get("/order/user",  async (req, res) => orderController.GetOrderUserController(req, res));
OrderRouter.post("/order/:talentId",  async (req, res) => orderController.CreateOrderController(req, res));

OrderRouter.post("/order-test/:talentId",  async (req, res) => orderController.CreateTestOrderController(req, res));
OrderRouter.post("/pay/order/:orderId", async (req, res) => orderController.PayOrderController(req, res));

export default OrderRouter