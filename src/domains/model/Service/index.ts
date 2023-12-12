import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";
import { TalentModel } from '../Talent';

export class ServiceModel extends Model{
    serviceId!: string;
    talentId!: string;
    name!: string;
    type!: string;
    description!: string;
    price!: number;
}


ServiceModel.init(
  {
    serviceId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      unique: true
    },
    talentId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
        type: DataTypes.ENUM,
        values: ['ONLINE', 'OFFLINE'],
        defaultValue: "OFFLINE"
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
  },
  {
    modelName: 'Service',
    sequelize: Database,
  }
);

TalentModel.hasMany(ServiceModel, { as: 'services', foreignKey: 'talentId' });
ServiceModel.belongsTo(TalentModel, { foreignKey: 'talentId' }); 