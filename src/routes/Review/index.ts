import { Router } from 'express';
import { ReviewRepository } from "../../repositories/Review";
import { ReviewService } from "../../services/Review";
import middlewareAuth from '../../middlewares/MiddlewareAuth';
import { ReviewController } from '../../controllers/Review';
import { OrderRepository } from '../../repositories/Order';
import { TalentRepository } from '../../repositories/Talent';
import multer from 'multer';

const storage = multer.memoryStorage();     
const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 20 * 1024 * 1024,
      }
});

const ReviewRouter = Router();

const reviewRepository = new ReviewRepository();
const orderRepository = new OrderRepository();
const talentRepository = new TalentRepository();
const reviewService = ReviewService.getInstance(reviewRepository, orderRepository, talentRepository);

const reviewController = new ReviewController(reviewService);

ReviewRouter.post("/review/:orderId", middlewareAuth, upload.single('media'), async (req, res) => reviewController.CreateReviewController(req, res));

export default ReviewRouter