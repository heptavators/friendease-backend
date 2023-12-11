import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";
import { TalentModel } from '../Talent';



export class HighlightModel extends Model{
    highlightId!: string;
    talentId!: string;
    highlightURL!: string;
    highlightNameFile!: string;
}



HighlightModel.init(
  {
    highlightId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      unique: true,
    },
    talentId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    highlightURL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    highlightNameFile: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  },
  {
    modelName: 'Highlight',
    sequelize: Database,
    indexes: [
      {
        unique: false,
        fields: ["talentId"]
      }
    ]
  }
);
