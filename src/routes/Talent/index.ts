import { Router } from 'express';

import middlewareAuth from '../../middlewares/MiddlewareAuth';
import { TalentRepository } from '../../repositories/Talent';
import { TalentService } from '../../services/Talent';
import { TalentController } from '../../controllers/Talent';

const TalentRouter = Router();

const talentRepository = new TalentRepository();
const talentService = TalentService.getInstance(talentRepository);

const talentController = new TalentController(talentService);

TalentRouter.get("/talent", middlewareAuth,  async (req, res) => talentController.GetAllTalentController(req, res));

export default TalentRouter