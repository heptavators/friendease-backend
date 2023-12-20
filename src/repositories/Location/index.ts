import { LocationModel } from "../../domains/model/Location";


export class LocationRepository{



    async getAllLocations(options: object): Promise<any>{
        try {
            const locations = await LocationModel.findAll({
                ...options,
                attributes: {
                  exclude: ['createdAt', 'updatedAt'],
                },
              });
            
        return locations;          
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }

    async getLocationById(locationId: string): Promise<any>{
        try {
            const product = await LocationModel.findByPk(locationId)
            return product
        } catch (error) {
            throw new Error(`Cannot find data because : ${error}`)
        }
    }


    async countLocation(options: object): Promise<any>{
        try {
            const data = await LocationModel.count(options)
            return data
        } catch (error) {
            throw new Error(`Cannot count data because : ${error}`)

        }
    }

}

 