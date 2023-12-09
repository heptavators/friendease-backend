import { ProductRepository } from "../../repositories/Product";
import { CreateProductRequest } from '../../domains/web/Product/CreateProductRequest';
import { DEFAULT_LIMIT } from "../../utils/Constant";
import { EditProductRequest } from "../../domains/web/Product/EditProductRequest";
import { BadRequestError } from "../../helpers/Error/BadRequestError";
import { Op } from "sequelize";

export class ProductService {
    private productRepository: ProductRepository
    private static instance: ProductService

    private constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    static getInstance(productRepository: ProductRepository): ProductService {
        if (!this.instance) {
            this.instance = new ProductService(productRepository);
        }
        return this.instance;
    }


    private buildQueryOptions(name: string, page: number) {
        const options: any = {
          order: [['createdAt', 'DESC']], 
          offset: page && page > 1 ? 10 * page - 10 : 0,
          limit: DEFAULT_LIMIT,
        };
      
        if (name) {
          options.where = {
            name: {
              [Op.iLike]: `%${name}%`,
            },
          };
        }
      
        return options;
      }

    private buildQueryCount(name: any){
        const options: any = {
            order: [['createdAt', 'DESC']], 
          };
        
          if (name) {
            options.where = {
              name: {
                [Op.iLike]: `%${name}%`,
              },
            };
          }
        
          return options;
    }

    async createProductService(createProductRequest: CreateProductRequest ){
        const product = await this.productRepository.insertProduct(createProductRequest)
        return product
    }

    async getProductByIdService(id: string){
        const data = await this.productRepository.getProductById(id);
        return data; 

    }

    async getAllProductService(name: any, page: any){
        const options = this.buildQueryOptions(name, page);
        const total = this.buildQueryCount(name)
        const data = await this.productRepository.getAllProducts(options);
        const count = await this.productRepository.countProduct(total);
        return { data, count }; 
    }

    async editProductService(id: string, editProductRequest: EditProductRequest){
        const data = await this.productRepository.updateProduct(id, editProductRequest)
        return data
    }

    async deleteProductService(id: string){
      const data = await this.productRepository.deleteProduct(id)
      return data
    }



}


