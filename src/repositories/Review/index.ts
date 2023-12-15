import { CreateReviewRequest } from "../../domains/web/Review";
import { ReviewModel } from "../../domains/model/Review";
import { v4 as uuidv4 } from 'uuid';
import { Op, col, fn } from "sequelize";

export class ReviewRepository{
    
    
    async insertReview(createReviewRequest: CreateReviewRequest): Promise<any>  {
        try {
            const review = await ReviewModel.create({
                reviewId: uuidv4(),
                review: createReviewRequest.review,
                rating: createReviewRequest.rating,
              });
          
              console.log("boop")
              return review.toJSON();
        } catch (error) {
            throw new Error(`Cannot insert data because : ${error}`)
        }
    }

    async getAverageReviewRatingByTalentId(talentId: string): Promise<any> {
        try {
          const averageResult = await ReviewModel.findOne({
            attributes: [[fn('AVG', col('rating')), 'average']],
            where: {
              talentId,
              rating: {
                [Op.ne]: null,
              },
            },
            raw: true, 
          });
            
          return averageResult && averageResult.average !== null
            ? parseFloat(Number(averageResult.average).toFixed(1))
            : 0;
        } catch (error) {
          throw new Error(`Error calculating average of review ratings: ${error}`);
        }
      }
    
    

}

 