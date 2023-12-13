import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";

export class ProductModel extends Model{
    productId!: string;
    name!: string;
    price!: number;

}


ProductModel.init(
  {
    productId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    modelName: 'Product',
    sequelize: Database,
  }
);