import { ProductModel } from "../../domains/model/Product";
import { CreateProductRequest } from '../../domains/web/Product/CreateProductRequest';
import { EditProductRequest } from "../../domains/web/Product/EditProductRequest";
import { v4 as uuidv4 } from 'uuid';

export class ProductRepository{


    async insertProduct(createProductRequest: CreateProductRequest): Promise<any>  {
        try {
            const product = await ProductModel.create({
                product_id: uuidv4(),
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

    async getProductById(id: string): Promise<any>{
        try {
            const product = await ProductModel.findByPk(id)
            return product
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

    async updateProduct(id: string, editProductRequest: EditProductRequest){
        try {
            const [updatedRowsCount] = await ProductModel.update(editProductRequest, {
                where: {id}
            });
            
              return updatedRowsCount > 0;
            } catch (error) {

            throw new Error(`Cannot update data because : ${error}`)
        }
    }

    async deleteProduct(id: string){
        try {
             const data = await ProductModel.destroy({where: {
                id: id
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

 