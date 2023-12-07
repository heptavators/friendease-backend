import { ProductModel } from "../../domains/model/Product";
import { CreateProductRequest } from '../../domains/web/Product/CreateProductRequest';
import { EditProductRequest } from "../../domains/web/Product/EditProductRequest";
import { BaseRepository } from "../Base";
import { v4 as uuidv4 } from 'uuid';

import PrismaService from "../prismaService";

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()



export class ProductRepository extends BaseRepository<ProductModel>{
    constructor(){
        super("Product")
    }

    
    async insert(createProductRequest: CreateProductRequest): Promise<any>  {
        try {
            const product = new ProductModel(uuidv4(), createProductRequest.name, createProductRequest.price)
            return prisma.product.create({data: product})
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

     edit(id: any, editproductRequest: EditProductRequest): Promise<any> {
        try {
            const product = new ProductModel(id, editproductRequest.name, editproductRequest.price);
            
            return prisma.product.update({
                where:  id,
                data: {
                    name: product.name,
                    price: product.price, 
                },
            });
        } catch (error) {
            throw new Error(`Cannot update data: ${error}`);
        }
    }

    async testRepo(id: any, editproductRequest: EditProductRequest ): Promise<any>  {
        const product = new ProductModel(id, editproductRequest.name, editproductRequest.price)
        return this.update(id, product)
    }
 

}