import { ProductModel } from "../../domains/model/Product";
import { ProductRequest } from '../../domains/web/Product';
import { BaseRepository } from "../Base";
import PrismaService from "../prismaService";

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()



export class ProductRepository extends BaseRepository<ProductModel>{
    constructor(){
        super("Product")
    }

    
    async insert(productRequest: ProductRequest): Promise<any>  {
          return prisma.product.create({data: productRequest})
}

async insertAgain(productRequest: any ): Promise<any>  {
    return this.create(productRequest)
}


}