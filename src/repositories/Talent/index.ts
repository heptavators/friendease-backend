import { AuthModel } from "../../domains/model/Auth";
import { TalentModel } from "../../domains/model/Talent";
import { LocationModel } from "../../domains/model/Location";
import { HighlightModel } from "../../domains/model/Highlight";


export class TalentRepository{

    async getAllTalents(): Promise<any>{
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
                            exclude: ['password', 'createdAt', 'updatedAt', "locationId"],
                        },
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


}

 