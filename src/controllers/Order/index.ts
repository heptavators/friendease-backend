import { OrderService } from "../../services/Order";
import { Request, Response } from "express-serve-static-core";
import { BadRequestError } from "../../helpers/Error/BadRequestError";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import { logger } from "../../helpers/Log";
import SuccessSingularFormatter from '../../helpers/Response/SuccessSingularFormatter';
import { CreateOrderRequest } from "../../domains/web/Order/CreateOrderRequest";
import { ValidationException, Validator } from '../../helpers/Validator';


export class OrderController {
    orderService: OrderService

    constructor(orderService: OrderService){
        this.orderService = orderService
    }





    async CreateOrderController(req: Request, res: Response){
        try {
            const serviceId = req.params.serviceId as string;
            const data: CreateOrderRequest = req.body;
            console.log(serviceId)
            // const validatedData = Validator.validate(data, CreateOrderRequest.getSchema());
            // console.log(validatedData)
            const result = await this.orderService.createOrderService(serviceId);
            const response = SuccessSingularFormatter('Berhasil Buat Order Baru', result);
    
            return res.status(200).send(response);
        } catch (error) {
            return handleErrorResponse(res, error);
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
  