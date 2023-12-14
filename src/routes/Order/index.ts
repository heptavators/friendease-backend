import { Router } from 'express';
import { TalentRepository } from "../../repositories/Talent";
import { OrderRepository } from "../../repositories/Order";
import { OrderService } from "../../services/Order";
import { OrderController } from "../../controllers/Order";
import MiddlewareAuth from "../../middlewares/MiddlewareAuth";

const OrderRouter = Router();

const orderRepository = new OrderRepository();
const talentRepository = new TalentRepository();
const orderService = OrderService.getInstance(orderRepository, talentRepository);

const orderController = new OrderController(orderService);

OrderRouter.use(MiddlewareAuth)

OrderRouter.post("/order/:talentId",  async (req, res) => orderController.CreateOrderController(req, res));

OrderRouter.post("/order-test/:talentId",  async (req, res) => orderController.CreateTestOrderController(req, res));
OrderRouter.post("/pay/order/:orderId", async (req, res) => orderController.PayOrderController(req, res));

export default OrderRouter