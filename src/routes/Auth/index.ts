import express, {Request, Response, Router } from 'express';
import { Auth as AuthController } from "../../controllers/Auth";
import { AuthRepository } from "../../repositories/Auth";
import { Auth as AuthService } from "../../services/Auth";

import SuccessFormatter from '../../helpers/Response/SuccessFormatter';
import ErrorFormatter from '../../helpers/Response/ErrorFormatter';
import FailFormatter from '../../helpers/Response/FailFormatter';
import { logger } from '../../helpers/Log';
import { Login  as LoginRequest } from '../../domains/web/Login';
import  Multer  from 'multer';
import { Validator } from '../../helpers/Validator';

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 50 * 1024 * 1024, 
    },
});
const authRouter = Router();
const authRepository = new AuthRepository();
const authService = new AuthService(authRepository);


const authController = new AuthController(authService, authRepository);



authRouter.post("/login", async (req, res) => authController.signInController(req, res));
// router.get("/user", async function(req, res){
//     let {name, page } = req.query as any
//     try {
        
//         page = req.query.page || 1; 
//         const data = await authController.find(name, page)
//         const count = await authController.count(name)
//         const totalPage = Math.ceil(count / 10)


//         if (data.length != 0){
//             const meta = {
//                 currentPage: page,
//                 totalPage: totalPage,
//                 totalItems: count,
//                 itemPerPage: 10
//             }
//             const response = SuccessFormatter("Data Semua Pengguna", meta, data)
//             res.status(200).send(response)
//         }else {
//             const response = FailFormatter("Pengguna Tidak Ditemukan");
//             res.status(404).send(response)
//         }

//     } catch (error: any) {  
//         const response = ErrorFormatter(error)
//         logger.error(error)
//         res.status(500).send(response)
//     }
// });

    // try {
    //     const data: LoginRequest = req.body as LoginRequest
    //     const validate: LoginRequest = Validator.validate(data, LoginRequest.getSchema());
    //     console.log(validate)

    //     if (JSON.stringify(validate) === JSON.stringify(data)) {
    //         res.status(200).json({ message: "omke" });
    //     } else {
    //         const response = ErrorFormatter(JSON.stringify(validate));
    //         res.status(422).json(response);
    //     }
    // } catch (error: any) {
    //     const response = ErrorFormatter(error)
    //     logger.error(error)
    //     res.status(500).send(response)
    // }


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