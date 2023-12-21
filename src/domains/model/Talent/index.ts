import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";
import { AuthModel } from '../Auth';



export class TalentModel extends Model{
    talentId!: string;
    authId!: string;
    description!: string;
    verified_status!: string;
    rating!: number;
    price!: number;
}



TalentModel.init(
  {
    talentId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      unique: true,
    },
    authId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    verified_status: {
        type: DataTypes.ENUM,
        values: ['verified', 'unverified'],
        defaultValue: "unverified"
    },
    rating: {
      type: DataTypes.DECIMAL(5, 1),
      allowNull: true,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    modelName: 'Talent',
    sequelize: Database,
  }
);

AuthModel.hasOne(TalentModel, {as: 'talent', foreignKey: "authId"})
TalentModel.belongsTo(AuthModel, {as: 'auth', foreignKey: 'authId'})


