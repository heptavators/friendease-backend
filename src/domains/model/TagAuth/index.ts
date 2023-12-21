import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";
import { AuthModel } from '../Auth';
import { TagModel } from '../Tag';



export const TagAuth = Database.define('TagAuth', {
    tagAuthId: {
        type: DataTypes.UUID, 
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, 
      },
    authId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    tagId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
}, { timestamps: false });


AuthModel.belongsToMany(TagModel, { through: TagAuth, foreignKey: 'authId', as: 'tags', onDelete: 'cascade' });
TagModel.belongsToMany(AuthModel, { through: TagAuth, foreignKey: 'tagId', onDelete: 'cascade' });
