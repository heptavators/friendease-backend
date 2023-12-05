import { ProductService } from "../../services/Product";
import { ProductRepository } from "../../repositories/Product";
import { Request, Response } from "express-serve-static-core";
import { BadRequestError } from "../../helpers/Error/BadRequestError";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import { logger } from "../../helpers/Log";
import SuccessSingularFormatter from '../../helpers/Response/SuccessSingularFormatter';
import { ProductRequest } from "../../domains/web/Product";
import { Validator } from '../../helpers/Validator';


export class ProductController {
    productService: ProductService

    constructor(productService: ProductService){
        this.productService = productService
    }

    async CreateProductController(req: Request, res: Response){
        try {
            const data: ProductRequest = req.body;
            const validatedData = Validator.validate(data, ProductRequest.getSchema());
        
            const result = await this.productService.createProductService(validatedData)
            const response = SuccessSingularFormatter('Berhasil Buat Product Baru', result);
    
            return res.status(200).send(response);
        } catch (error: any) {
            if (error instanceof BadRequestError) {
                const response = ErrorFormatter(error.toResponseObject())
                return res.status(error.status).send(response);
            }
            logger.error(error)
            const response = ErrorFormatter(error);
            return res.status(500).send(response);
        }
    }
}