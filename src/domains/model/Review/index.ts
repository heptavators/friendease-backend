import { DataTypes, Model } from 'sequelize';
import Database  from "../../../configs/Database";


export class ReviewModel extends Model {
    reviewId!: string;
    orderId!: string;
    customerId!: string;
    talentId!: string;
    review!: string;
    rating!: number;
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
        type: DataTypes.STRING,
        allowNull: true,
      },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      modelName: 'Review',
      sequelize: Database,
    }
  );


