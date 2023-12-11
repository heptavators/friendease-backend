import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";
import { AuthModel } from '../Auth';



export class HighlightModel extends Model{
    talentId!: string;
    profession!: string;
    verifiedStatus!: string;
    rating!: number;
}



HighlightModel.init(
  {
    talentId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      unique: true,
    },
    profession: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    verifiedStatus: {
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
    modelName: 'Highlight',
    sequelize: Database,
  }
);
