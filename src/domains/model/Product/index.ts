import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";

export class ProductModel extends Model{
    id!: string;
    name!: string;
    price!: number;

}


ProductModel.init(
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.STRING,
      primaryKey: true,
      unique: true
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