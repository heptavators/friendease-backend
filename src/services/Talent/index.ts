import { HighlightRepository } from "../../repositories/Highlight";
import { AuthRepository } from "../../repositories/Auth";
import { TalentRepository } from "../../repositories/Talent";
import { DEFAULT_LIMIT, RECSYS_URL } from "../../utils/Constant";
import { Op } from "sequelize";
import { HighlightModel } from "../../domains/model/Highlight";
import { AuthModel } from "../../domains/model/Auth";
import { LocationModel } from "../../domains/model/Location";
import axios, { AxiosResponse } from 'axios';

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
    private buildQueryOptions(fullname: string, page: number) {
        const options: any = {
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
                    where: {},
                    attributes: {
                        exclude: ['email', 'bio', 'bod', 'gender', 'status', 'roles', 'device_token', 'password', 'createdAt', 'updatedAt', 'locationId'],
                    },
                },
                {
                    model: HighlightModel,
                    as: 'highlights',
                    attributes: ['highlightId', 'highlightURL']
                }
            ],
            attributes: { exclude: ['authId', 'createdAt', 'updatedAt'] },
            order: [['createdAt', 'DESC']],
            offset: page && page > 1 ? 10 * page - 10 : 0,
            limit: DEFAULT_LIMIT,
        };
    
        // if (fullname) {
        //     options.include[0].where.fullname = {
        //         [Op.iLike]: `%${fullname}%`,
        //     };
        // }
    
        return options;
    }
    
    private buildQueryCount(fullname: any) {
        const options: any = {
            include: [
                {
                    model: AuthModel,
                    as: 'auth',
                    where: {},
                },
            ],
            attributes: ['talentId'],
        };
    
        if (fullname) {
            options.include[0].where.fullname = {
                [Op.iLike]: `%${fullname}%`,
            };
        }
    
        return options;
    }
    
    async getAllTalentService(fullname: any, page: any){

        const options = this.buildQueryOptions(fullname, page);
        const total = this.buildQueryCount(fullname)
        const data = await this.talentRepository.getAllTalents(fullname)
        const count = await this.talentRepository.countTalent(options);
        return {
            data, 
            count
        }; 
    }

    async getRecomendationTalentService(){
        const requestBody = {
            "id": "cc317068-1297-4588-a58a-2ed09d8ccfe6",
            "name": "Aoi Todo",
            "gender": "L",
            "birth_date": "12/06/2002",
            "age": 21,
            "location": "Jawa Timur, Surabaya",
            "tags": ["Desain", "Fashion", "Kreatif", "Perfeksionis", "Ramah"],
            "preferences": "Ingin memiliki teman yang bisa diajak kulineran dan staycation mengelilingi Indonesia"
        };
    
        try {
            const response = await axios.post(RECSYS_URL, requestBody);
    
            if (response.data && response.data.data && response.data.data.length > 0) {
                const talentIds = response.data.data.map((talent: { id: any; }) => talent.id);
                console.log("Talent IDs: ", talentIds);
    
                // Assuming you have a function findTalentById which queries talents by ID
                const talents = await Promise.all(talentIds.map((id: string) => this.getTalentByIdService(id)));
    
                console.log("Talents: ", talents);
                return talents;
            } else {
                console.error("No data found in the response");
                return null;
            }
        } catch (error) {
            console.error("Error fetching data: ", error);
            throw error;
        }
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