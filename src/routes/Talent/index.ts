import { Router } from 'express';

import middlewareAuth from '../../middlewares/MiddlewareAuth';
import { TalentRepository } from '../../repositories/Talent';
import { TalentService } from '../../services/Talent';
import { TalentController } from '../../controllers/Talent';
import { AuthRepository } from '../../repositories/Auth';
import { HighlightRepository } from '../../repositories/Highlight';

const TalentRouter = Router();

const talentRepository = new TalentRepository();
const authRepository = new AuthRepository()
const highlightRepository = new HighlightRepository()

const talentService = TalentService.getInstance(talentRepository, authRepository, highlightRepository);

const talentController = new TalentController(talentService);

TalentRouter.get("/talent", middlewareAuth,  async (req, res) => talentController.GetAllTalentController(req, res));
TalentRouter.post("/talent-recommendation", middlewareAuth,  async (req, res) => talentController.GetRecomendationTalentController(req, res));
TalentRouter.get("/talent/:id", middlewareAuth,  async (req, res) => talentController.GetTalentByIdController(req, res));

export default TalentRouter