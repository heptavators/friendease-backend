
import { ReviewRepository } from "../../repositories/Review";
import { CreateReviewRequest } from "../../domains/web/Review";
import { OrderRepository } from "src/repositories/Order";
import { TalentRepository } from "../../repositories/Talent";
import { CustomException } from "../../helpers/Error/CustomException";
import { BadRequestError } from "../../helpers/Error/BadRequestError";


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
        const findReview = await this.reviewRepository.findReviewByOrderId(orderId);

        if (findReview > 0){
            throw new BadRequestError([{ error: 'Review', message: 'Review already exists' }], 400);
        }
        else {
            const findOrder = await this.orderRepository.getOrderById(orderId)
            const order = findOrder.toJSON();
    
            const review = await this.reviewRepository.insertReview(createReviewRequest, orderId, order.customerId, order.talentId)
    
    
            const totalReview = await this.reviewRepository.countOrderRatingsByTalentId(order.talentId);
            const sumReviewRating = await this.reviewRepository.sumOrderRatingsByTalentId(order.talentId);
            const countRating = (sumReviewRating / totalReview).toFixed(1)


            await this.talentRepository.changeRatingTalent(order.talentId, parseFloat(countRating))
    
    
    
            return review
        }

    
    }

    





}

