import { ProductService } from "../../services/Product";
import { ProductRepository } from "../../repositories/Product";
import { Request, Response } from "express-serve-static-core";
import { BadRequestError } from "../../helpers/Error/BadRequestError";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import { logger } from "../../helpers/Log";
import SuccessSingularFormatter from '../../helpers/Response/SuccessSingularFormatter';
import { ProductRequest } from "../../domains/web/Product";
import { ValidationException, Validator } from '../../helpers/Validator';
import SuccessPluralFormatter from "../../helpers/Response/SuccessPluralFormatter";


export class ProductController {
    productService: ProductService

    constructor(productService: ProductService){
        this.productService = productService
    }



    async GetAllProductController(req: Request, res: Response){
        try {
            const {name, page} = req.query as any
            const limit = 4
            
            const {data, count} = await this.productService.getAllProductService(name, page, limit)

            const totalPage = Math.ceil(count / limit);
            const totalItems = count
            const currentPage = page
            const itemsPerPage = limit

            const response = SuccessPluralFormatter('Data Semua Produk', {currentPage, totalPage, totalItems, itemsPerPage}, data);
    
            return res.status(200).send(response);
        } catch (error) {
            
        }
    }

    async GetByIdProductController(req: Request, res: Response){
        try {
            
        } catch (error) {
            
        }
    }

    async CreateProductController(req: Request, res: Response){
        try {
            const data: ProductRequest = req.body;
            const validatedData = Validator.validate(data, ProductRequest.getSchema());
            
            const result = await this.productService.createProductService(validatedData)
            const response = SuccessSingularFormatter('Berhasil Buat Produk Baru', result);
    
            return res.status(200).send(response);
        } catch (error) {
            return handleErrorResponse(res, error);
        }
    }

    async EditProductController(req: Request, res: Response){
        try {
            
        } catch (error) {
            
        }
    }

    async DeleteProductController(req: Request, res: Response){
        try {
            
        } catch (error) {
            
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
  