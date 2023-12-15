import Joi from 'joi';

export class CreateReviewRequest {
    review: string;
    rating: number;

    constructor(review: string, rating: number) {
        this.review = review;
        this.rating = rating;
        
    }

    static getSchema() {
        return Joi.object({
            review: Joi.string().required().messages({
                'any.required': 'Review diperlukan',
                'string.empty': 'Review tidak boleh kosong',
            }),
            rating: Joi.number().greater(0).messages({
                'any.required': 'Rating diperlukan',
                'number.greater': 'Rating harus lebih besar dari 0',
                'string.empty': 'Rating tidak boleh kosong',
            }),
        });
    }
}
