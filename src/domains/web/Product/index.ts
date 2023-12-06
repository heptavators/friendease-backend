import Joi from 'joi';

export class ProductRequest {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        
    }

    static getSchema() {
        return Joi.object({
            name: Joi.string().required().messages({
                'any.required': 'Nama Produk diperlukan',
                'string.empty': 'Nama Produk tidak boleh kosong',
            }),
            price: Joi.number().greater(0).messages({
                'any.required': 'Harga Produk diperlukan',
                'number.greater': 'Harga Produk harus lebih besar dari 0',
                'string.empty': 'Harga Produk tidak boleh kosong',
            }),
        });
    }
}
