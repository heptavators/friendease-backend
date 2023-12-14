import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";

export class OrderModel extends Model{
    orderId!: string;
    talentId!: string;
    customerId!: string;
    name!: string;
    type!: string;
    price!: number;
    date!: Date;
    start_hour!: string;
    end_hour!: string;
    total_hour!: number;
    order_status!: string;
    total_amount!: number;
    payment_type!: string;
    transaction_status!: string;
    transaction_time!: Date
}


OrderModel.init(
  {
    orderId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      unique: true
    },
    talentId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
        type: DataTypes.ENUM,
        values: ['online', 'offline'],
        defaultValue: "offline"
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    start_hour: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    end_hour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_hour: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    order_status: {
        type: DataTypes.ENUM,
        values: ['canceled', 'scheduled', 'success'],
        defaultValue: "scheduled"
    },
    payment_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    transaction_status: {
      type: DataTypes.ENUM,
      values: ['settlement', 'deny', 'pending', 'cancel', 'refund'],
      defaultValue: 'pending'
    },
    transaction_time: {
      type: DataTypes.DATE,
      allowNull: true,
    }

  },
  {
    modelName: 'Order',
    sequelize: Database,
  }
);