import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";
import { AuthModel } from '../Auth';



export class LocationModel extends Model{
    locationId!: string;
    province!: string;
    city!: string;
}



LocationModel.init(
  {
    locationId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      unique: true,
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  },
  {
    modelName: 'Location',
    sequelize: Database,
  }
);

LocationModel.hasOne(AuthModel, {as: 'auths', foreignKey: "locationId"})
AuthModel.belongsTo(LocationModel, { as: 'location', foreignKey: 'locationId' })