import { Router } from 'express';
import { Auth as AuthController } from "../../controllers/Auth";
import { AuthRepository } from "../../repositories/Auth";
import { AuthService } from "../../services/Auth";

import ErrorFormatter from '../../helpers/Response/ErrorFormatter';
import FailFormatter from '../../helpers/Response/FailFormatter';
import { logger } from '../../helpers/Log';
import  Multer  from 'multer';

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 50 * 1024 * 1024, 
    },
});
const authRouter = Router();
const authRepository = new AuthRepository();
const authService = AuthService.getInstance(authRepository)


const authController = new AuthController(authService, authRepository);



authRouter.post("/login", async (req, res) => authController.signInController(req, res));


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