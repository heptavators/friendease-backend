import { CreateReviewRequest } from "../../domains/web/Review";
import { ReviewModel } from "../../domains/model/Review";
import { v4 as uuidv4 } from 'uuid';
import { Op, Sequelize, col, fn } from "sequelize";
import { AuthModel } from "../../domains/model/Auth";

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

   async getReviewTalentById(talentId: string){
      try {
        const result = await ReviewModel.findAll({where: {
          talentId: talentId
        }, include: [
          {
            model: AuthModel,
            as: 'customer',
            attributes: {
                exclude: ['email', 'bio', 'bod', 'gender', 'status', 'roles', 'device_token', 'password', 'createdAt', 'updatedAt', "locationId", "phone_number", "user_preferences"],
            },          
        }
        ]});
  
        return result; 
      } catch (error) {
        throw new Error(`Error find review by talent id : ${error}`);
      }
   }


}