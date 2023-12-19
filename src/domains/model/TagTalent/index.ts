import { Model, DataTypes } from 'sequelize';
import Database  from "../../../configs/Database";
import { AuthModel } from '../Auth';
import { TalentModel } from '../Talent';
import { TagModel } from '../Tag';



export const TagTalent = Database.define('TagTalent', {}, { timestamps: false });




TalentModel.belongsToMany(TagModel, { through: TagTalent, foreignKey: 'talentId', as: "tags" });
TagModel.belongsToMany(TalentModel, { through: TagTalent, foreignKey: 'tagId', });

   