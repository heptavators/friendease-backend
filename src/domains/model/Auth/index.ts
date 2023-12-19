import { DataTypes, Model } from 'sequelize';
import Database  from "../../../configs/Database";

export class AuthModel extends Model {
    authId!: string;
    locationId!: string;
    fullname!: string;
    username!: string;
    email!: string;
    password!: string;
    avatar!: string;
    phone_number!: string;
    bio!: string;
    bod!: Date;
    gender!: string;
    status!: string;
    roles!: string;
    device_token!: string;
    user_preferences!: string;
}


AuthModel.init(
    {
      authId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true,
        unique: true
      },
      locationId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bod: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM,
        values: ['female', 'male', ''],
        defaultValue: ""
    },
      status: {
        type: DataTypes.ENUM,
        values: ['inactive', 'active'],
        defaultValue: "active"
      },
      roles: {
        type: DataTypes.ENUM,
        values: ['customer', 'admin', 'talent'],
        defaultValue: "customer"
    },
      device_token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_preferences: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      modelName: 'Auth',
      sequelize: Database,
    }
  );


// AuthModel.hasMany(NotificationModel, { foreignKey: 'authId', as: 'notifications' });
// NotificationModel.belongsTo(AuthModel, { foreignKey: 'authId', as: 'auth' });