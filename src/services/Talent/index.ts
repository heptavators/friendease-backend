import { HighlightRepository } from "../../repositories/Highlight";
import { AuthRepository } from "../../repositories/Auth";
import { TalentRepository } from "src/repositories/Talent";

export class TalentService {
    private talentRepository: TalentRepository;
    private static instance: TalentService;

    private constructor(talentRepository: TalentRepository) {
        this.talentRepository = talentRepository
    }

    static getInstance(talentRepository: TalentRepository): TalentService {
        if (!this.instance) {
            this.instance = new TalentService(talentRepository);
        }
        return this.instance;
    }


    
    async getAllTalentService(){

        const data = await this.talentRepository.getAllTalents()

        // const count = await this.productRepository.countProduct(total);
        return data; 
    }


    // async createProductService(createProductRequest: CreateProductRequest ){
    //     const product = await this.productRepository.insertProduct(createProductRequest)
    //     return product
    // }

    // async getProductByIdService(id: string){
    //     const data = await this.productRepository.getProductById(id);
    //     return data; 

    // }




}

