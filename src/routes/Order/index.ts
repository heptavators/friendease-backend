import { Router } from 'express';
import { OrderRepository } from "../../repositories/Order";
import { OrderService } from "../../services/Order";
import { OrderController } from "../../controllers/Order";

const OrderRouter = Router();

const orderRepository = new OrderRepository();
const orderService = OrderService.getInstance(orderRepository);

const orderController = new OrderController(orderService);

OrderRouter.post("/order/:serviceId", async (req, res) => orderController.CreateOrderController(req, res));

export default OrderRouter