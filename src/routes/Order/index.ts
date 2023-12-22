import { Router } from 'express';
import { TalentRepository } from "../../repositories/Talent";
import { OrderRepository } from "../../repositories/Order";
import { NotificationRepository } from "../../repositories/Notification";
import { AuthRepository } from "../../repositories/Auth";
import { OrderService } from "../../services/Order";
import { OrderController } from "../../controllers/Order";
import MiddlewareAuth from "../../middlewares/MiddlewareAuth";
import { NotificationService } from '../../services/Notification';
import { AuthService } from '../../services/Auth';
import { TagTalentRepository } from '../../repositories/TagTalent';

const OrderRouter = Router();

const orderRepository = new OrderRepository();
const talentRepository = new TalentRepository();
const authRepository = new AuthRepository();
const tagTalentRepository = new TagTalentRepository();
const notificationRepository = new NotificationRepository();

const orderService = OrderService.getInstance(orderRepository, talentRepository, authRepository);
const notificationService = NotificationService.getInstance(notificationRepository, authRepository)
const authService = AuthService.getInstance(authRepository, tagTalentRepository);

const orderController = new OrderController(orderService, notificationService, authService);


OrderRouter.post("/webhook-order",  async (req, res) => orderController.WebHookMidtransController(req, res));


OrderRouter.use(MiddlewareAuth)

OrderRouter.get("/order/user",  async (req, res) => orderController.GetOrderUserController(req, res));
OrderRouter.post("/create-order/:talentId",  async (req, res) => orderController.CreateOrderController(req, res));
OrderRouter.get("/view-order/:orderId",  async (req, res) => orderController.GetByIdOrderController(req, res));



OrderRouter.post("/order-test/:talentId",  async (req, res) => orderController.CreateTestOrderController(req, res));
OrderRouter.post("/pay/order/:orderId", async (req, res) => orderController.PayOrderController(req, res));

export default OrderRouter