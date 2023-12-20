import { ProductService } from "../../services/Product";
import { Request, Response } from "express-serve-static-core";
import { BadRequestError } from "../../helpers/Error/BadRequestError";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import { logger } from "../../helpers/Log";
import SuccessSingularFormatter from '../../helpers/Response/SuccessSingularFormatter';
import { CreateProductRequest } from "../../domains/web/Product/CreateProductRequest";
import { ValidationException, Validator } from '../../helpers/Validator';
import SuccessPluralFormatter from "../../helpers/Response/SuccessPluralFormatter";
import { DEFAULT_LIMIT } from "../../utils/Constant";
import { TalentService } from "src/services/Talent";
import { HandleErrorResponse } from "../../helpers/Error/HandleErrorResponse";


export class TalentController {
    talentService: TalentService

    constructor(talentService: TalentService){
        this.talentService = talentService
    }



    async GetAllTalentController(req: Request, res: Response){
        try {
            const {fullname, page} = req.query as any
            const limit = DEFAULT_LIMIT
            
            const {data} = await this.talentService.getAllTalentService(fullname, page)
            if (data.length != 0) {

                // const meta = {
                //     currentPage: page || 1 ,
                //     totalPage: Math.ceil(count / limit),
                //     totalItems: count,
                //     itemsPerPage: limit
                // }
    
                const response = SuccessPluralFormatter('Data Semua Talent', {}, data);
        
                return res.status(200).send(response);
            } else {
                const response = ErrorFormatter('Data Talent Tidak Ditemukan');
                return res.status(404).send(response);
            }              
        } catch (error) {
            return HandleErrorResponse(res, error);
        }
    }

    async GetRecomendationTalentController(req: Request, res: Response){
        try {
            const {data} = await this.talentService.getRecomendationTalentService()
            if (data.length != 0) {

                // const meta = {
                //     currentPage: page || 1 ,
                //     totalPage: Math.ceil(count / limit),
                //     totalItems: count,
                //     itemsPerPage: limit
                // }
    
                const response = SuccessPluralFormatter('Data Semua Talent', {}, data);
        
                return res.status(200).send(response);
            } else {
                const response = ErrorFormatter('Data Talent Tidak Ditemukan');
                return res.status(404).send(response);
            }              
        } catch (error) {
            return HandleErrorResponse(res, error);
        }
    }

    async GetTalentByIdController(req: Request, res: Response){
        try {
            const talentId = req.params.talentId as string; 
            const talent = await this.talentService.getTalentByIdService(talentId);
            if (talent){
                const response = SuccessSingularFormatter('Data Talent', talent);
                return res.status(200).send(response)
            }else {
                const response = ErrorFormatter('Data Talent Tidak Ditemukan');
                return res.status(404).send(response);
            }    
        } catch (error) {
            return HandleErrorResponse(res, error);
        }
    }

   

}
