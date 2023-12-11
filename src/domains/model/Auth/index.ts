import { DataTypes, Model } from 'sequelize';
import Database  from "../../../configs/Database";
import { LocationModel } from '../Location';
import { TalentModel } from '../Talent';

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
        values: ['FEMALE', 'MALE', ''],
        defaultValue: ""
    },
      status: {
        type: DataTypes.ENUM,
        values: ['INACTIVE', 'ACTIVE'],
        defaultValue: "ACTIVE"
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


