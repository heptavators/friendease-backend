import { DataTypes, Model } from 'sequelize';
import Database  from "../../../configs/Database";

export class AuthModel extends Model {
    id!: string;
    fullname!: string;
    email!: string;
    username!: string;
    password!: string;
    avatar!: string;
    bio!: string;
    status!: string;
    roles!: string;
    device_token!: string;
}



AuthModel.init(
    {
      id: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.STRING,
        primaryKey: true,
        unique: true
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      username: {
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
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roles: {
        type: DataTypes.ENUM,
        values: ['CUSTOMER', 'ADMIN', 'TALENT']
    },
      device_token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      modelName: 'Auth',
      sequelize: Database,
    }
  );