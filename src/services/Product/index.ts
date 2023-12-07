import { ProductRepository } from "../../repositories/Product";
import { CreateProductRequest } from '../../domains/web/Product/CreateProductRequest';
import { ProductModel } from "../../domains/model/Product";
import { DEFAULT_LIMIT } from "../../utils/Constant";
import { EditProductRequest } from "../../domains/web/Product/EditProductRequest";

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


    private buildQueryOptions(name: any, page: any) {
        return {
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive',
                },
   
            },
            orderBy: [
                {
                    createdAt: 'desc', 
                }
            ],
            skip: page > 1 ? 10 * page - 10 : 0,
            take: DEFAULT_LIMIT,

        };
    }

    private buildQueryCount(name: any){
        return{
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive'
                }
            }
        }
    }

    async createProductService(createProductRequest: CreateProductRequest ){
        const product = await this.productRepository.insert(createProductRequest)
        return product
    }

    async getProductByIdService(id: string){
        const data = await this.productRepository.findOne(id);
        return data; 

    }

    async getAllProductService(name: any, page: any){
        const options = this.buildQueryOptions(name, page);
        const total = this.buildQueryCount(name)
        const data = await this.productRepository.find(options);
        const count = await this.productRepository.count(total);
        return { data, count }; 
    }

    async editProductService(id: string, editProductRequest: EditProductRequest){
        const product = await this.productRepository.edit(id, editProductRequest)
        return product
    }

    async deleteProductService(){

    }



}


