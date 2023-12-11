import { HighlightRepository } from "../../repositories/Highlight";
import { AuthRepository } from "../../repositories/Auth";
import { TalentRepository } from "../../repositories/Talent";

export class TalentService {
    private talentRepository: TalentRepository;
    private authRepository: AuthRepository;
    private highlightRepository: HighlightRepository;
    private static instance: TalentService;

    private constructor(talentRepository: TalentRepository, authRepository: AuthRepository, highlightRepository: HighlightRepository) {
        this.talentRepository = talentRepository
        this.authRepository = authRepository
        this.highlightRepository = highlightRepository
    }

    static getInstance(talentRepository: TalentRepository, authRepository: AuthRepository, highlightRepository: HighlightRepository ): TalentService {
        if (!this.instance) {
            this.instance = new TalentService(talentRepository, authRepository, highlightRepository);
        }
        return this.instance;
    }


    
    async getAllTalentService(){

        const data = await this.talentRepository.getAllTalents()

        // const count = await this.productRepository.countProduct(total);
        return data; 
    }

    async getTalentByIdService(talentId: string){
        const talent = await this.talentRepository.getTalentById(talentId);
        const auth = await this.authRepository.getProfileById(talent.toJSON().authId);
        const highlight = await this.highlightRepository.GetHighlightUser(talent.toJSON().talentId)
        return {talent, auth, highlight};
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

