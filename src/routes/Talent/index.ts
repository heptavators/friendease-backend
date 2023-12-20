import { Router } from 'express';

import middlewareAuth from '../../middlewares/MiddlewareAuth';
import { TalentRepository } from '../../repositories/Talent';
import { TalentService } from '../../services/Talent';
import { TalentController } from '../../controllers/Talent';
import { OrderRepository } from '../../repositories/Order';
import { ReviewRepository } from '../../repositories/Review';
import { HighlightRepository } from '../../repositories/Highlight';

const TalentRouter = Router();

const talentRepository = new TalentRepository();
const orderRepository = new OrderRepository();
const reviewRepository = new ReviewRepository();

const talentService = TalentService.getInstance(talentRepository, orderRepository, reviewRepository);

const talentController = new TalentController(talentService);

TalentRouter.get("/talent", middlewareAuth,  async (req, res) => talentController.GetAllTalentController(req, res));
TalentRouter.post("/talent-recommendation", middlewareAuth,  async (req, res) => talentController.GetRecomendationTalentController(req, res));
TalentRouter.get("/talent/:talentId", middlewareAuth,  async (req, res) => talentController.GetTalentByIdController(req, res));

export default TalentRouter