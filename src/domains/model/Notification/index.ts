import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";


export class NotificationModel extends Model{
    notificationId!: string;
    icon!: string;
    title!: string;
    body!: string;
    status!: string;

}



NotificationModel.init(
  {
    notificationId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      unique: true,
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    authId: {
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
        values: ['unread', 'read'],
        defaultValue: "unread"
    },
  },
  {
    modelName: 'Notification',
    sequelize: Database,
    indexes: [
      {
        unique: false,
        fields: ["authId"]
      }
    ]
  }
);


// //relationship
// AuthModel.hasMany(NotificationModel, {as: "notifications", onDelete: 'CASCADE', foreignKey: 'authId'})
// NotificationModel.belongsTo(AuthModel, {
//     foreignKey: "authId",
//     as: "auth"
// });