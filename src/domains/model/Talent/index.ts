import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";
import { AuthModel } from '../Auth';



export class TalentModel extends Model{
    talentId!: string;
    authId!: string;
    verified_status!: string;
    rating!: number;
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
    verified_status: {
        type: DataTypes.ENUM,
        values: ['VERIFIED', 'UNVERIFIED'],
        defaultValue: "UNVERIFIED"
    },
    rating: {
      type: DataTypes.FLOAT(5, 1),
      allowNull: true,
    }
  },
  {
    modelName: 'Talent',
    sequelize: Database,
  }
);
