import { ProductService } from "../../services/Product";
import { Request, Response } from "express-serve-static-core";
import { BadRequestError } from "../../helpers/Error/BadRequestError";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import { logger } from "../../helpers/Log";
import SuccessSingularFormatter from '../../helpers/Response/SuccessSingularFormatter';
import { CreateProductRequest } from "../../domains/web/Product/CreateProductRequest";
import { ValidationException, Validator } from '../../helpers/Validator';
import SuccessPluralFormatter from "../../helpers/Response/SuccessPluralFormatter";
import { DEFAULT_LIMIT } from "../../utils/Constant";
import { EditProductRequest } from "../../domains/web/Product/EditProductRequest";


export class ProductController {
    productService: ProductService

    constructor(productService: ProductService){
        this.productService = productService
    }



    async GetAllProductController(req: Request, res: Response){
        try {
            const {name, page} = req.query as any
            const limit = DEFAULT_LIMIT
            
            const {data, count} = await this.productService.getAllProductService(name, page)
            if (data.length != 0) {
                const meta = {
                    currentPage: page || 1 ,
                    totalPage: Math.ceil(count / limit),
                    totalItems: count,
                    itemsPerPage: limit
                }
    
                const response = SuccessPluralFormatter('Data Semua Produk', meta, data);
        
                return res.status(200).send(response);
            } else {
                const response = ErrorFormatter('Data Produk Tidak Ditemukan');
                return res.status(404).send(response);
            }              
        } catch (error) {
            console.log(error)
            return handleErrorResponse(res, error);
        }
    }

    async GetByIdProductController(req: Request, res: Response){
        try {
            const id = req.params as any
            const data = await this.productService.getProductByIdService(id);
            if (data){
                const response = SuccessSingularFormatter('Data Produk', data);
                return res.status(200).send(response)
            }else {
                const response = ErrorFormatter('Data Produk Tidak Ditemukan');
                return res.status(404).send(response);
            }    
;
        } catch (error) {
            return handleErrorResponse(res, error);
        }
    }

    async CreateProductController(req: Request, res: Response){
        try {
            const data: CreateProductRequest = req.body;
            const validatedData = Validator.validate(data, CreateProductRequest.getSchema());
            
            const result = await this.productService.createProductService(validatedData)
            const response = SuccessSingularFormatter('Berhasil Buat Produk Baru', result);
    
            return res.status(200).send(response);
        } catch (error) {
            return handleErrorResponse(res, error);
        }
    }

    async EditProductController(req: Request, res: Response){
        try {
            const id = req.params as any
            const data: EditProductRequest = req.body;
            const validatedData = Validator.validate(data, EditProductRequest.getSchema());
            
            const result = await this.productService.editProductService(id, validatedData)
            const response = SuccessSingularFormatter('Berhasil Edit Produk', result);
    
            return res.status(200).send(response);
        } catch (error) {
            return handleErrorResponse(res, error);

        }
    }

    async DeleteProductController(req: Request, res: Response){
        try {
            
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
  