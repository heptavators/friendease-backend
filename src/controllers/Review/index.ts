import { Request, Response } from "express-serve-static-core";
import { BadRequestError } from "../../helpers/Error/BadRequestError";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import { logger } from "../../helpers/Log";
import { CreateReviewRequest } from "../../domains/web/Review";
import { ValidationException, Validator } from '../../helpers/Validator';
import { ReviewService } from "../../services/Review";
import { CustomException } from "../../helpers/Error/CustomException";


export class ReviewController {
    reviewService: ReviewService

    constructor(reviewService: ReviewService){
        this.reviewService = reviewService
    }


    async CreateReviewController(req: Request, res: Response){
        try {
            const orderId = req.params.orderId as string;
            const data: CreateReviewRequest = req.body;
            const validatedData = Validator.validate(data, CreateReviewRequest.getSchema());
            
            const result = await this.reviewService.createReviewService(validatedData, orderId)
            
            return res.status(200).send(result)
        } catch (error) {
            console.log(error)
            return handleErrorResponse(res, error);
        }
    }



}


const handleErrorResponse = (res: Response, error: any) => {
    if (error instanceof BadRequestError || error instanceof ValidationException || error instanceof CustomException) {
      const response = ErrorFormatter(error.toResponseObject());
      return res.status(error.status).send(response);
    }
  
    logger.error(error);
    const response = ErrorFormatter(error);
    return res.status(500).send(response);
  };
  