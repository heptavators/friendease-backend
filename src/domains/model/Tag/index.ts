import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";

export class TagModel extends Model{
    tagId!: string;
    name!: string;

}


TagModel.init(
  {
    tagId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: 'Tag',
    sequelize: Database,
  }
);