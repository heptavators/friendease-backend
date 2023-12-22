import { LocationRepository } from "../../repositories/Location";
import { DEFAULT_LIMIT, ITEMS_PER_PAGE } from "../../utils/Constant";
import { Op } from "sequelize";

export class LocationService {
    private locationRepository: LocationRepository
    private static instance: LocationService

    private constructor(locationRepository: LocationRepository) {
        this.locationRepository = locationRepository;
    }

    static getInstance(locationRepository: LocationRepository): LocationService {
        if (!this.instance) {
            this.instance = new LocationService(locationRepository);
        }
        return this.instance;
    }


    private buildQueryOptions(name: string, page: number) {
        const options: any = {
          order: [['createdAt', 'DESC']], 
        };
      
        if (name) {
          options.where = {
            name: {
              [Op.iLike]: `%${name}%`,
            },
          };
        }
      
        return options;
      }

    private buildQueryCount(name: any){
        const options: any = {
            order: [['createdAt', 'DESC']], 
          };
        
          if (name) {
            options.where = {
              name: {
                [Op.iLike]: `%${name}%`,
              },
            };
          }
        
          return options;
    }



    async getAllLocationService(name: any, page: any){
        const options = this.buildQueryOptions(name, page);
        const total = this.buildQueryCount(name)
        const data = await this.locationRepository.getAllLocations(options);
        const count = await this.locationRepository.countLocation(total);
        return { data, count }; 
    }

}


