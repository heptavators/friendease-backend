import { AuthModel } from "../../domains/model/Auth";
import { TalentModel } from "../../domains/model/Talent";
import { LocationModel } from "../../domains/model/Location";
import { HighlightModel } from "../../domains/model/Highlight";
import { Op } from "sequelize";
import { DEFAULT_LIMIT } from "../../utils/Constant";
import { TagModel } from "../../domains/model/Tag";
import { TagTalent } from "../../domains/model/TagTalent";


export class TalentRepository{

    
    async getAllTalents(fullname: any): Promise<any>{
        try {
            const queryOptions: any = {
                include: [
                    {
                        model: AuthModel,
                        as: 'auth',
                        include: [
                            {
                                model: LocationModel,
                                attributes: ['locationId', 'province', 'city'],
                                as: 'location'
                            },
                        ],
                        attributes: {
                            exclude: ['email', 'bio', 'bod', 'gender', 'status', 'roles', 'device_token', 'password', 'createdAt', 'updatedAt', "locationId"],
                        }
                    },
                    {
                        model: TagModel,
                        as: 'tags',
                        attributes: {
                            exclude: ["createdAt", "updatedAt", "TagTalent"],
                        }
                    },
                    {
                        model: HighlightModel,
                        as: 'highlights',
                        attributes: ["highlightId", "highlightURL"]
                    }
                ],
                attributes: { exclude: ['authId', 'createdAt', 'updatedAt'] },
            };
    
            if (fullname) {
                queryOptions.include[0].where = {
                    [Op.or]: [
                        { fullname: { [Op.iLike]: `%${fullname}%` } },
                        { username: { [Op.iLike]: `%${fullname}%` } }
                    ]
                };
            }
    
            const talents = await TalentModel.findAll(queryOptions);
            // Remove TagTalent property from each tag in the result
            const talentsWithoutTagTalent = talents.map((talent: any) => ({
                ...talent.toJSON(),
                tags: talent.tags.map((tag: any) => ({ ...tag.toJSON(), TagTalent: undefined })),
            }));
            return talentsWithoutTagTalent;
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

    async getTalentById(talentId: string): Promise<any>{
        try {
            const talent = await TalentModel.findByPk(talentId, {
                include: [
                    {
                        model: AuthModel,
                        as: 'auth',
                        attributes: {
                            exclude: ['email', 'bio', 'bod', 'gender', 'status', 'roles', 'device_token', 'password', 'createdAt', 'updatedAt', "locationId"],
                        },
                    }
                ],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return talent
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

    
    async countTalent(options: object): Promise<any>{
        try {
            const data = await TalentModel.count(options)
            return data
        } catch (error) {
            throw new Error(`Cannot count data because : ${error}`)

        }
    }


}

 