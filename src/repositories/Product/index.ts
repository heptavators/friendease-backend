import { count } from "console";
import { Product } from "../../domains/model/Product";
import { CreateProductRequest } from '../../domains/web/Product/CreateProductRequest';
import { EditProductRequest } from "../../domains/web/Product/EditProductRequest";
import { v4 as uuidv4 } from 'uuid';
import { BaseRepository } from "../Base";





export class ProductRepository extends BaseRepository<Product>{

    async test(id: string){
        this.findOne(id)
    }
    
    async insert(createProductRequest: CreateProductRequest): Promise<any>  {
        try {
            const product = await Product.create({
                id: uuidv4(),
                name: createProductRequest.name,
                price: createProductRequest.price,
              });
          
              return product.toJSON();
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

    async findMany(options: object): Promise<any>{
        try {
            const product = await Product.findAll(options)
            return product
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

    async findById(id: any): Promise<any>{
        try {
            const product = await Product.findOne(id)
            return product
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

    async count(options: object): Promise<any>{
        try {
            const data = await Product.count(options)
            return data
        } catch (error) {
            throw new Error(`Cannot count data because : ${error}`)

        }
    }

}



    //  edit(id: any, editproductRequest: EditProductRequest): Promise<any> {
    //     try {
    //         const product = new ProductModel(id, editproductRequest.name, editproductRequest.price);
            
    //         return prisma.product.update({
    //             where:  id,
    //             data: {
    //                 name: product.name,
    //                 price: product.price, 
    //             },
    //         });
    //     } catch (error) {
    //         throw new Error(`Cannot update data: ${error}`);
    //     }
    // }

    // async testRepo(id: any, editproductRequest: EditProductRequest ): Promise<any>  {
    //     const product = new ProductModel(id, editproductRequest.name, editproductRequest.price)
    //     return this.update(id, product)
    // }
 