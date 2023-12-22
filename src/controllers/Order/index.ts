import { OrderService } from "../../services/Order";
import { Request, Response } from "express-serve-static-core";
import { BadRequestError } from "../../helpers/Error/BadRequestError";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import { logger } from "../../helpers/Log";
import SuccessSingularFormatter from '../../helpers/Response/SuccessSingularFormatter';
import { CreateOrderRequest } from "../../domains/web/Order/CreateOrderRequest";
import { ValidationException, Validator } from '../../helpers/Validator';
import { DEFAULT_LIMIT } from "../../utils/Constant";
import SuccessPluralFormatter from "../../helpers/Response/SuccessPluralFormatter";
import { HandleErrorResponse } from "../../helpers/Error/HandleErrorResponse";
import { NotificationService } from "../../services/Notification";
import { AuthService } from "../../services/Auth";

export class OrderController {
    orderService: OrderService
    notificationService: NotificationService
    authService: AuthService

    constructor(orderService: OrderService, notificationService: NotificationService,authService: AuthService){
        this.orderService = orderService
        this.notificationService = notificationService
        this.authService = authService
    }

    async GetOrderUserController(req: Request, res: Response){
        try {
            const {page} = req.query as any
            const limit = DEFAULT_LIMIT

            const {data, count} = await this.orderService.GetOrderUserService(page, req.authId);
            if(data.length != 0){
                const meta = {
                    currentPage: page || 1 ,
                    totalPage: Math.ceil(count / limit),
                    totalItems: count,
                    itemsPerPage: limit
                }
            const response = SuccessPluralFormatter('Data Semua Order', meta, data);
            return res.status(200).send(response);
            }else {
              const response = ErrorFormatter("Data Order User Tidak Ditemukan")
              return res.status(404).send(response);
            }
        } catch (error) {
            return HandleErrorResponse(res, error);
        }
    }





    async CreateOrderController(req: Request, res: Response){
        try {
            const talentId = req.params.talentId as string;
            const userId = req.authId
            const data: CreateOrderRequest = req.body;
            const validatedData = Validator.validate(data, CreateOrderRequest.getSchema());

            const result = await this.orderService.createOrderService(talentId, userId, validatedData);

            const messageNotifOrder = {
                    icon: "https://i.pinimg.com/564x/e8/a6/29/e8a6295025285f37aeb1a9ecbd9c642f.jpg",
                    title: "Order Kamu Berhasil",
                    body: "Yeay Order Kamu berhasil nih"
                
            }

            const notif = await this.notificationService.CreateNotificationService(req.authId, messageNotifOrder)

            const response = SuccessSingularFormatter('Berhasil Buat Order Baru', result);
    
            return res.status(200).send(response);
        } catch (error) {
            return HandleErrorResponse(res, error);
        }
    }

    async GetByIdOrderController(req: Request, res: Response){
        try {
            const orderId = req.params.orderId as string;
            const data = await this.orderService.getOrderByIdService(orderId);
            if (data){
                const response = SuccessSingularFormatter('Data Order', data);
                return res.status(200).send(response)
            }else {
                const response = ErrorFormatter('Data Order Tidak Ditemukan');
                return res.status(404).send(response);
            }    

        } catch (error) {
            return HandleErrorResponse(res, error);
        }
    }

    

    async WebHookMidtransController(req: Request, res: Response){
        try {
            const requestMidtrans = req.body;
            const findOrder = await this.orderService.getOrderByIdService(requestMidtrans.order_id);
            const findUser = await this.authService.GetProfileService(findOrder.toJSON().customerId);

            if (requestMidtrans.transaction_status === 'pending'){
                const messageNotifOrder = {
                    icon: "https://i.pinimg.com/564x/e8/a6/29/e8a6295025285f37aeb1a9ecbd9c642f.jpg",
                    title: "Order Kamu Berhasil",
                    body: "Yeay Order Kamu berhasil nih"   
                }
                await this.notificationService.CreateNotificationService(findUser.toJSON().authId, messageNotifOrder)
            } else if (requestMidtrans.transaction_status === 'deny'){
                const messageNotifOrder = {
                    icon: "https://i.pinimg.com/564x/e8/a6/29/e8a6295025285f37aeb1a9ecbd9c642f.jpg",
                    title: "Pembayaran Kamu Ditolak",
                    body: "Waduh, pembayaran Kamu ditolak. Coba lagi yuk"   
                }
                await this.notificationService.CreateNotificationService(findUser.toJSON().authId, messageNotifOrder)
            }else if (requestMidtrans.transaction_status === 'cancel'){
                const messageNotifOrder = {
                    icon: "https://i.pinimg.com/564x/e8/a6/29/e8a6295025285f37aeb1a9ecbd9c642f.jpg",
                    title: "Pembayaran Kamu Dibatalkan",
                    body: "Yah, pembayaran kamu dibatalkan nih"   
                }
                await this.notificationService.CreateNotificationService(findUser.toJSON().authId, messageNotifOrder)
            }else if (requestMidtrans.transaction_status === 'refund'){
                const messageNotifOrder = {
                    icon: "https://i.pinimg.com/564x/e8/a6/29/e8a6295025285f37aeb1a9ecbd9c642f.jpg",
                    title: "Pembayaran Kamu Direfund",
                    body: "Tenang duit kamu aman sama kami"   
                }
                await this.notificationService.CreateNotificationService(findUser.toJSON().authId, messageNotifOrder)
            } else if (requestMidtrans.transaction_status === 'settlement'){
                const messageNotifOrder = {
                    icon: "https://i.pinimg.com/564x/e8/a6/29/e8a6295025285f37aeb1a9ecbd9c642f.jpg",
                    title: "Pembayaran Kamu Berhasil",
                    body: "Yeay, pembayaran kamu berhasil nih"   
                }
                await this.notificationService.CreateNotificationService(findUser.toJSON().authId, messageNotifOrder)
            }
            

            await this.orderService.PaymentHandlingService(requestMidtrans);            
            return res.status(200).send("oke")

 

        } catch (error) {
            return HandleErrorResponse(res, error);
        }
    }

    async CreateTestOrderController(req: Request, res: Response){
        try {
            const talentId = req.params.talentId as string;
            const userId = req.authId
            const data: CreateOrderRequest = req.body;
            const validatedData = Validator.validate(data, CreateOrderRequest.getSchema());

            const result = await this.orderService.createOrderTestService(talentId, userId, validatedData);
          
            const response = SuccessSingularFormatter('Berhasil Buat Order Baru', result);
    
            return res.status(200).send(response);
        } catch (error) {
            return HandleErrorResponse(res, error);
        }
    }


    async PayOrderController(req: Request, res: Response){
        try {
            const orderId = req.params.orderId as string;

            const result = await this.orderService.createPaymentOrderService(orderId);
            const response = SuccessSingularFormatter('Berhasil Buat Order Baru', result);
    
            return res.status(200).send(response);
        } catch (error) {
            return HandleErrorResponse(res, error);
        }
    }

}