import { DataTypes, Model } from 'sequelize';
import Database  from "../../../configs/Database";
import { LocationModel } from '../Location';

export class AuthModel extends Model {
    authId!: string;
    locationId!: string;
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
      authId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true,
        unique: true
      },
      locationId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
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
      bio: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      roles: {
        type: DataTypes.ENUM,
        values: ['CUSTOMER', 'ADMIN', 'TALENT'],
        defaultValue: "CUSTOMER"
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


