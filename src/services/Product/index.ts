import { ProductRepository } from "../../repositories/Product";
import { ProductRequest } from '../../domains/web/Product';
import { ProductModel } from "src/domains/model/Product";

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

    async createProductService(productRequest: ProductModel ){
        const product = await this.productRepository.insertAgain(productRequest)
        return product
    }

    async getProductByIdService(){

    }

    async getAllProductService(){

    }

    async updateProductService(){

    }

    async deleteProductService(){

    }




}


