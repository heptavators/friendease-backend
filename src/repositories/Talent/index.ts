import { AuthModel } from "../../domains/model/Auth";
import { TalentModel } from "../../domains/model/Talent";
import { LocationModel } from "../../domains/model/Location";
import { HighlightModel } from "../../domains/model/Highlight";
import { Op } from "sequelize";
import { DEFAULT_LIMIT } from "../../utils/Constant";


export class TalentRepository{

    
    async getAllTalents(fullname: any): Promise<any>{
        try {
            const talents = await TalentModel.findAll({ 
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
                        },
                        where:{
                            fullname: {[Op.iLike]: `%${fullname}%`}
                        }
                    },
                    {
                        model: HighlightModel,
                        as: 'highlights',
                        attributes: ["highlightId", "highlightURL"]
                    }
                ],
                attributes: { exclude: ['authId', 'createdAt', 'updatedAt'] },
            });
    
            return talents
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

    async getTalentById(talentId: string): Promise<any>{
        try {
            const talent = await TalentModel.findByPk(talentId, {
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

 