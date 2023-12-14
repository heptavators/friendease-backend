import { DataTypes, Model } from 'sequelize';
import Database  from "../../../configs/Database";


export class MediaReviewModel extends Model {
    mediaReviewId!: string;
    reviewId!: string;
    mediaURL!: string;
    mediaNameFile!: string;
}


MediaReviewModel.init(
    {
    mediaReviewId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true,
        unique: true
    },
    reviewId: {
        type: DataTypes.UUID,
        allowNull: true,
    },
    mediaURL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mediaNameFile: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    },
    {
      modelName: 'Media_Review',
      sequelize: Database,
    }
  );


