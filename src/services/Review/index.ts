
import { ReviewRepository } from "../../repositories/Review";
import { CreateReviewRequest } from "../../domains/web/Review";
import { OrderRepository } from "src/repositories/Order";
import { TalentRepository } from "src/repositories/Talent";


export class ReviewService {
    private reviewRepository: ReviewRepository;
    private orderRepository: OrderRepository;
    private talentRepository: TalentRepository;
    private static instance: ReviewService

    private constructor(reviewRepository: ReviewRepository, orderRepository: OrderRepository, talentRepository: TalentRepository) {
        this.reviewRepository = reviewRepository;
        this.orderRepository = orderRepository;
        this.talentRepository = talentRepository;
    }

    static getInstance(reviewRepository: ReviewRepository, orderRepository: OrderRepository, talentRepository: TalentRepository): ReviewService {
        if (!this.instance) {
            this.instance = new ReviewService(reviewRepository, orderRepository, talentRepository);
        }
        return this.instance;
    }

    async createReviewService(createReviewRequest: CreateReviewRequest, orderId: string){
        // const review = await this.reviewRepository.insertReview(createReviewRequest)
        const findOrder = await this.orderRepository.getOrderById(orderId)
        const order = findOrder.toJSON();

        const sumOfRatings = await this.reviewRepository.getAverageReviewRatingByTalentId(order.talentId);


        console.log(sumOfRatings)
        return order
    }

    





}

