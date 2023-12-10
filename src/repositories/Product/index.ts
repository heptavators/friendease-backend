import { ProductModel } from "../../domains/model/Product";
import { CreateProductRequest } from '../../domains/web/Product/CreateProductRequest';
import { EditProductRequest } from "../../domains/web/Product/EditProductRequest";
import { v4 as uuidv4 } from 'uuid';

export class ProductRepository{


    async insertProduct(createProductRequest: CreateProductRequest): Promise<any>  {
        try {
            const product = await ProductModel.create({
                productId: uuidv4(),
                name: createProductRequest.name,
                price: createProductRequest.price,
              });
          
              return product.toJSON();
        } catch (error) {
            throw new Error(`Cannot insert data because : ${error}`)
        }
    }

    async getAllProducts(options: object): Promise<any>{
        try {
            const product = await ProductModel.findAll(options)
            return product
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

    async getProductById(productId: string): Promise<any>{
        try {
            const product = await ProductModel.findByPk(productId)
            return product
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

    async updateProduct(productId: string, editProductRequest: EditProductRequest){
        try {
            const [updatedRowsCount] = await ProductModel.update(editProductRequest, {
                where: {productId}
            });
            
              return updatedRowsCount > 0;
            } catch (error) {

            throw new Error(`Cannot update data because : ${error}`)
        }
    }

    async deleteProduct(productId: string){
        try {
             const data = await ProductModel.destroy({where: {
                productId: productId
             }});
            
              return data;
            } catch (error) {

            throw new Error(`Cannot update data because : ${error}`)
        }
    }

    async countProduct(options: object): Promise<any>{
        try {
            const data = await ProductModel.count(options)
            return data
        } catch (error) {
            throw new Error(`Cannot count data because : ${error}`)

        }
    }

}

 