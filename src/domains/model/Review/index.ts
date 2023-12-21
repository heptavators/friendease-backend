import { DataTypes, Model } from 'sequelize';
import Database  from "../../../configs/Database";
import { TalentModel } from '../Talent';
import { AuthModel } from '../Auth';


export class ReviewModel extends Model {
    reviewId!: string;
    orderId!: string;
    customerId!: string;
    talentId!: string;
    review!: string;
    rating!: number;
    mediaURL!: string;
    mediaNameFile!: string;
}


ReviewModel.init(
    {
    reviewId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true,
        unique: true
      },
    orderId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      customerId: {
        type: DataTypes.UUID,
        allowNull: true,
    },
    talentId: {
      type: DataTypes.UUID,
      allowNull: true,
  },
    review: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    mediaURL: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      mediaNameFile: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      modelName: 'Review',
      sequelize: Database,
    }
  );


TalentModel.hasMany(ReviewModel, { as: 'reviews', foreignKey: 'talentId' });
ReviewModel.belongsTo(TalentModel, { foreignKey: 'talentId' }); 
ReviewModel.belongsTo(AuthModel, { foreignKey: 'customerId', as: 'customer' });