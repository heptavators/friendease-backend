import Joi from 'joi';
import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";

export class ProductModel {
    id: string;
    name: string;
    price: number;

    constructor(
        id: string,
        name: string,
        price: number,
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        
    }

    static getSchema() {
        return Joi.object({
            id: Joi.string().required().messages({
                'any.required': 'ID Produk diperlukan',
                'string.empty': 'ID tidak boleh kosong',
            }),
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

export class Product extends Model{
    id!: string;
    name!: string;
    price!: number;

}


Product.init(
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    modelName: 'Product',
    sequelize: Database,
  }
);
