import { CreateReviewRequest } from "../../domains/web/Review";
import { ReviewModel } from "../../domains/model/Review";
import { v4 as uuidv4 } from 'uuid';
import { Op, Sequelize, col, fn } from "sequelize";

export class ReviewRepository{
    
    
    async insertReview(createReviewRequest: CreateReviewRequest, orderId: any, customerId: any, talentId: string, mediaURL: string, mediaFileName: string): Promise<any>  {
        try {
            const review = await ReviewModel.create({
                reviewId: uuidv4(),
                orderId: orderId,
                customerId: customerId,
                talentId: talentId,
                review: createReviewRequest.review,
                rating: createReviewRequest.rating,
                mediaURL: mediaURL,
                mediaNameFile: mediaFileName
              });
          
              return review;
        } catch (error) {
            throw new Error(`Cannot insert data because : ${error}`)
        }
    }
    async sumReviewRatingsByTalentId(talentId: string): Promise<any> {
      try {
        const result = await ReviewModel.aggregate('rating', 'SUM', {
          where: {
            talentId,
            rating: {
              [Op.ne]: null, 
            },
          },
        });
  
        return result || 0; 
      } catch (error) {
        throw new Error(`Error calculating sum of order ratings: ${error}`);
      }
    }
    async countReviewByTalentId(talentId: string): Promise<any> {
      try {
          const result = await ReviewModel.count({where: {
            talentId: talentId
          }});

          return result;
      } catch (error) {
          throw new Error(`Error calculating count of order ratings: ${error}`);
      }
   }

   async findReviewByOrderId(orderId: string): Promise<any> {
    try {
      const result = await ReviewModel.count({where: {
        orderId: orderId
      }});

      return result;
    } catch (error) {
      throw new Error(`Error find review by order id : ${error}`);

    }
   }


}