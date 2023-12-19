
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
            throw new CustomException([{ error: 'Review', message: 'Review already exists' }], 401);
            }else {
            const findOrder = await this.orderRepository.getOrderById(orderId)
            const order = findOrder.toJSON();
    
            const beforeInsert = await this.reviewRepository.countOrderRatingsByTalentId(order.talentId);
            const sumBeforeReviewRating = await this.reviewRepository.sumOrderRatingsByTalentId(order.talentId);
    
            console.log("before insert review: " + sumBeforeReviewRating / beforeInsert);
    
            const review = await this.reviewRepository.insertReview(createReviewRequest, orderId, order.customerId, order.talentId)
    
    
            const afterInsert = await this.reviewRepository.countOrderRatingsByTalentId(order.talentId);
            const sumReviewRating = await this.reviewRepository.sumOrderRatingsByTalentId(order.talentId);
    
            console.log("rating after insert review: " + sumReviewRating / afterInsert);
    
    
            return review

        }
    }

    





}

