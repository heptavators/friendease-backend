import { AuthModel } from "../../domains/model/Auth";
import { TalentModel } from "../../domains/model/Talent";
import { LocationModel } from "../../domains/model/Location";


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
                            exclude: ['password'],
                        },
                    },
                    'highlights',
                ],
                attributes: { exclude: ['authId'] },
            });
    
            return talents
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }


}

 