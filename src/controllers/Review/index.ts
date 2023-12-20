import { Request, Response } from "express-serve-static-core";
import { BadRequestError } from "../../helpers/Error/BadRequestError";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import { logger } from "../../helpers/Log";
import { CreateReviewRequest } from "../../domains/web/Review";
import { ValidationException, Validator } from '../../helpers/Validator';
import { ReviewService } from "../../services/Review";
import { CustomException } from "../../helpers/Error/CustomException";
import SuccessSingularFormatter from "../../helpers/Response/SuccessSingularFormatter";
import { HandleErrorResponse } from "../../helpers/Error/HandleErrorResponse";


export class ReviewController {
    reviewService: ReviewService

    constructor(reviewService: ReviewService){
        this.reviewService = reviewService
    }


    async CreateReviewController(req: Request, res: Response){
        try {
            const orderId = req.params.orderId as string;
            const data: CreateReviewRequest = req.body;
            const media = req.file

            if(media != null){
            if (!media.mimetype.startsWith('image')) {
                throw new BadRequestError([{ error: 'Media', message: 'Only image files are allowed' }], 400);
            }
            const validatedData = Validator.validate(data, CreateReviewRequest.getSchema());
            
            const result = await this.reviewService.createReviewService(validatedData, orderId, media);
            const response = SuccessSingularFormatter('Berhasil Menambahkan Review', result );

            return res.status(200).send(response);
            }else{
            throw new BadRequestError([{ error: 'Media', message: 'Media Not Found' }], 404);
            }

            } catch (error) {
            return HandleErrorResponse(res, error);
        }
    }

}


  