import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";
import { AuthModel } from '../Auth';



export class NotificationModel extends Model{
    id!: string;
    name!: string;
    price!: number;

}



NotificationModel.init(
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


//relationship
AuthModel.hasMany(NotificationModel, {as: "Auths"})
NotificationModel.belongsTo(AuthModel, {
    foreignKey: "auth_id"
});