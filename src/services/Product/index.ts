import { ProductRepository } from "../../repositories/Product";
import { ProductRequest } from '../../domains/web/Product';
import { ProductModel } from "../../domains/model/Product";

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

    async createProductService(productRequest: ProductRequest ){
        
        const product = await this.productRepository.insert(productRequest)
        return product
    }

    async getProductByIdService(){

    }

    async getAllProductService(name: any, page: any, limit: any){
        const data = await this.productRepository.find({
            where: {
                name: {
                  contains: name,
                  mode: 'insensitive'
                },
              },
              skip: page > 1 ? 10 * page - 10 : 0,
              take: limit
        
        })
        const count = await this.productRepository.count({
            where: {
                name: {
                  contains: name,
                  mode: 'insensitive'
                },
              },
        })
        return {data, count} ; 
    }

    async updateProductService(){

    }

    async deleteProductService(){

    }




}


