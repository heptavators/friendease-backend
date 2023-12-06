import { ProductModel } from "../../domains/model/Product";
import { ProductRequest } from '../../domains/web/Product';
import { BaseRepository } from "../Base";
import { v4 as uuidv4 } from 'uuid';

import PrismaService from "../prismaService";

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()



export class ProductRepository extends BaseRepository<ProductModel>{
    constructor(){
        super("Product")
    }

    
    async insert(productRequest: ProductRequest): Promise<any>  {
        try {
            const product = new ProductModel(uuidv4(), productRequest.name, productRequest.price)
            return prisma.product.create({data: product})
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
}

async insertAgain(productRequest: ProductModel ): Promise<any>  {
    return this.create(productRequest)
}
 

}