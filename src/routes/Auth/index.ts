import { Router } from 'express';
import { Auth as AuthController } from "../../controllers/Auth";
import { AuthRepository } from "../../repositories/Auth";
import { AuthService } from "../../services/Auth";

import ErrorFormatter from '../../helpers/Response/ErrorFormatter';
import FailFormatter from '../../helpers/Response/FailFormatter';
import { logger } from '../../helpers/Log';
import  Multer  from 'multer';
import middlewareAuth from '../../middlewares/JWT';

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 50 * 1024 * 1024, 
    },
});
const authRouter = Router();
const authRepository = new AuthRepository();
const authService = AuthService.getInstance(authRepository)


const authController = new AuthController(authService);



authRouter.post("/auth/login", async (req, res) => authController.LoginController(req, res));
authRouter.post("/auth/register", middlewareAuth, async (req, res) => authController.RegisterController(req, res));
authRouter.get("/auth/profile", middlewareAuth, async (req, res) => authController.ProfileController(req, res));


authRouter.post("/image", multer.single("image"), async function(req, res) {
    try {
        console.log(req.file)

        const response = FailFormatter("Login");
        res.status(200).send(response)
    } catch (error: any) {
        const response = ErrorFormatter(error)
        logger.error(error)
        res.status(500).send(response)
    }
});

export default authRouter