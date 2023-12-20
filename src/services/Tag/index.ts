import { TagRepository } from "../../repositories/Tag";
import { CreateProductRequest } from '../../domains/web/Product/CreateProductRequest';
import { DEFAULT_LIMIT, ITEMS_PER_PAGE } from "../../utils/Constant";
import { EditProductRequest } from "../../domains/web/Product/EditProductRequest";
import { Op } from "sequelize";

export class TagService {
    private tagRepository: TagRepository
    private static instance: TagService

    private constructor(tagRepository: TagRepository) {
        this.tagRepository = tagRepository;
    }

    static getInstance(tagRepository: TagRepository): TagService {
        if (!this.instance) {
            this.instance = new TagService(tagRepository);
        }
        return this.instance;
    }


    private buildQueryOptions(name: string, page: number) {
        const options: any = {
          order: [['createdAt', 'DESC']], 
          offset: page && page > 1 ? ITEMS_PER_PAGE * page - ITEMS_PER_PAGE : 0,
          limit: DEFAULT_LIMIT,
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



    async getAllTagService(name: any, page: any){
        const options = this.buildQueryOptions(name, page);
        const total = this.buildQueryCount(name)
        const data = await this.tagRepository.getAllTags(options);
        const count = await this.tagRepository.countTags(total);
        return { data, count }; 
    }

}


