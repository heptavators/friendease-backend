import { Router } from 'express';
import { AuthController } from "../../controllers/Auth";
import { AuthRepository } from "../../repositories/Auth";
import { AuthService } from "../../services/Auth";

import ErrorFormatter from '../../helpers/Response/ErrorFormatter';
import FailFormatter from '../../helpers/Response/FailFormatter';
import { logger } from '../../helpers/Log';
import  Multer  from 'multer';
import MiddlewareAuth from '../../middlewares/MiddlewareAuth';
import { TagTalentRepository } from '../../repositories/TagTalent';

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 50 * 1024 * 1024, 
    },
});
const authRouter = Router();
const authRepository = new AuthRepository();
const tagTalentRepository = new TagTalentRepository();
const authService = AuthService.getInstance(authRepository, tagTalentRepository)


const authController = new AuthController(authService);



authRouter.post("/auth/login", async (req, res) => authController.LoginController(req, res));
authRouter.post("/auth/register", async (req, res) => authController.RegisterController(req, res));
authRouter.post("/auth/change-device-token", MiddlewareAuth, async (req, res) => authController.ChangeDeviceTokenController(req, res));
authRouter.post("/auth/change-profile", MiddlewareAuth, async (req, res) => authController.ChangeProfileController(req, res));
authRouter.get("/auth/profile", MiddlewareAuth, async (req, res) => authController.ProfileController(req, res));


export default authRouter