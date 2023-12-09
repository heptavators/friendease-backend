import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";
import { AuthModel } from '../Auth';



export class NotificationModel extends Model{
    id!: string;
    icon!: string;
    title!: string;
    body!: string;
    status!: string;

}



NotificationModel.init(
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.STRING,
      primaryKey: true,
      unique: true,
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    auth_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    body: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    status: {
        type: DataTypes.ENUM,
        values: ['UNREAD', 'READ'],
        defaultValue: "UNREAD"
    },
  },
  {
    modelName: 'Notification',
    sequelize: Database,
    indexes: [
      {
        unique: false,
        fields: ["auth_id"]
      }
    ]
  }
);


//relationship
AuthModel.hasMany(NotificationModel, {as: "notifications", onDelete: 'CASCADE', foreignKey: 'auth_id'})
NotificationModel.belongsTo(AuthModel, {
    foreignKey: "auth_id",
    as: "auth"
});