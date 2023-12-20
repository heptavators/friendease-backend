import { HighlightRepository } from "../../repositories/Highlight";
import { OrderRepository } from "../../repositories/Order";
import { TalentRepository } from "../../repositories/Talent";
import { ReviewRepository } from "../../repositories/Review";
import { DEFAULT_LIMIT, ITEMS_PER_PAGE, RECSYS_URL } from "../../utils/Constant";
import { Op } from "sequelize";
import { HighlightModel } from "../../domains/model/Highlight";
import { AuthModel } from "../../domains/model/Auth";
import { LocationModel } from "../../domains/model/Location";
import axios, { AxiosResponse } from 'axios';

export class TalentService {
    private talentRepository: TalentRepository;
    private reviewRepository: ReviewRepository;
    private orderRepository: OrderRepository;

    private static instance: TalentService;

    private constructor(talentRepository: TalentRepository, orderRepository: OrderRepository, reviewRepository: ReviewRepository) {
        this.talentRepository = talentRepository
        this.orderRepository = orderRepository
        this.reviewRepository = reviewRepository
    }

    static getInstance(talentRepository: TalentRepository, orderRepository: OrderRepository, reviewRepository: ReviewRepository ): TalentService {
        if (!this.instance) {
            this.instance = new TalentService(talentRepository, orderRepository, reviewRepository);
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
            offset: page && page > 1 ? ITEMS_PER_PAGE * page - ITEMS_PER_PAGE : 0,
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
        const totalReview = await this.reviewRepository.countReviewByTalentId(talentId);
        const totalOrder = await this.orderRepository.countOrderTalentById(talentId);

        return {talent, totalReview, totalOrder};
    }






}