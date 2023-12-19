import { ProductService } from "../../services/Product";
import { Request, Response } from "express-serve-static-core";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import SuccessSingularFormatter from '../../helpers/Response/SuccessSingularFormatter';
import { CreateProductRequest } from "../../domains/web/Product/CreateProductRequest";
import { Validator } from '../../helpers/Validator';
import SuccessPluralFormatter from "../../helpers/Response/SuccessPluralFormatter";
import { DEFAULT_LIMIT } from "../../utils/Constant";
import { EditProductRequest } from "../../domains/web/Product/EditProductRequest";
import { HandleErrorResponse } from "../../helpers/Error/HandleErrorResponse";


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
            return HandleErrorResponse(res, error);
        }
    }

    async GetByIdProductController(req: Request, res: Response){
        try {
            const id = req.params.id as string; 
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
            return HandleErrorResponse(res, error);
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
            return HandleErrorResponse(res, error);
        }
    }
    async EditProductController(req: Request, res: Response) {
        try {
          const id = req.params.id as string;
          const data: EditProductRequest = req.body;
          const validatedData = Validator.validate(data, EditProductRequest.getSchema());
      
          const findData = await this.productService.getProductByIdService(id);
      
          if (!findData) {
            const response = ErrorFormatter('Data Produk Tidak Ditemukan');
            return res.status(404).send(response);
          } else {
            await this.productService.editProductService(id, validatedData);
            const dataUpdate = await this.productService.getProductByIdService(id);
        
            const response = SuccessSingularFormatter('Berhasil Edit Produk', { dataUpdate });
            return res.status(200).send(response);
          }  
        } catch (error) {
            return HandleErrorResponse(res, error);
        }
      }

    async DeleteProductController(req: Request, res: Response){
        try {
            const id = req.params.id as string;
            const findData = await this.productService.getProductByIdService(id);
            
            if(!findData){
                const response = ErrorFormatter('Data Produk Tidak Ditemukan');
                return res.status(404).send(response);
            }else{
                await this.productService.deleteProductService(id)            
                const response = SuccessSingularFormatter('Berhasil Hapus Produk', findData);
                return res.status(200).send(response);
            }

        } catch (error) {
            return HandleErrorResponse(res, error);
        }
    }


}

