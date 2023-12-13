import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";

export class OrderModel extends Model{
    orderId!: string;
    talentId!: string;
    customerId!: string;
    name!: string;
    type!: string;
    start_hour!: string;
    end_hour!: string;
    price!: number;
    status!: string;
    date!: string;
}


OrderModel.init(
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
    type: {
        type: DataTypes.ENUM,
        values: ['ONLINE', 'OFFLINE'],
        defaultValue: "OFFLINE"
    },
    start_hour: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    end_hour: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    status: {
        type: DataTypes.ENUM,
        values: ['CANCELED', 'SCHEDULED', 'SUCCESS'],
        defaultValue: "SCHEDULED"
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
  },
  {
    modelName: 'Order',
    sequelize: Database,
  }
);