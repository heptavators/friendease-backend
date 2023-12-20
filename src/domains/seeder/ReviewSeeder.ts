import { v4 as uuidv4 } from 'uuid';
import { ReviewModel } from '../model/Review';




export class ReviewSeeder {
  async run(){
    const reviews = [
    // { 
    //     reviewId: uuidv4(),
    //     orderId: "71e08a28-2ce1-4406-99b5-70925b4763d2",
    //     talentId: "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
    //     customerId: "a04e5c41-3bce-4d6a-bd04-c51a2d09fbc7",
    //     review: "Cosplaynya mantab benar, teman ku jadi iri hahahaha",
    //     rating: 5
    // },
    { 
        reviewId: uuidv4(),
        orderId: "dc92ec0c-3e02-4825-bdc4-3bdad0f166f0",
        talentId: "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
        customerId: "a04e5c41-3bce-4d6a-bd04-c51a2d09fbc7",
        review: "jago main gitar, cuman aku masih agak bingung dengan penjelasannya karena kakaknya ngomong kecepatan, next time order lagi deh",
        rating: 4
    },
    { 
        reviewId: uuidv4(),
        orderId: "cc317068-1297-4588-a58a-2ed09d8ccfe6",
        talentId: "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
        customerId: "a04e5c41-3bce-4d6a-bd04-c51a2d09fbc7",
        review: "Talentnya sangat ramah, belum pernah senyaman ini mau curhat ke orang lain",
        rating: 5
    },
   
  ];

  await ReviewModel.destroy({ where: {} })
  await ReviewModel.bulkCreate(reviews.map(review => ({...review })));
  }
} 