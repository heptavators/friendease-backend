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
import { EditProductRequest } from "../../domains/web/Product/EditProductRequest";
import { TalentService } from "src/services/Talent";


export class TalentController {
    talentService: TalentService

    constructor(talentService: TalentService){
        this.talentService = talentService
    }



    async GetAllTalentController(req: Request, res: Response){
        try {
            // const {name, page} = req.query as any
            // const limit = DEFAULT_LIMIT
            
            const data = await this.talentService.getAllTalentService()
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
            console.log(error)
            return handleErrorResponse(res, error);
        }
    }

    async GetTalentByIdController(req: Request, res: Response){
        try {
            const id = req.params.id as string; 
            const {talent, auth, highlight} = await this.talentService.getTalentByIdService(id);
            if (talent){
                const response = SuccessSingularFormatter('Data Talent', {talent, auth, highlight});
                return res.status(200).send(response)
            }else {
                const response = ErrorFormatter('Data Talent Tidak Ditemukan');
                return res.status(404).send(response);
            }    
        } catch (error) {
            console.log(error)
            return handleErrorResponse(res, error);
        }
    }

   

}


const handleErrorResponse = (res: Response, error: any) => {
    if (error instanceof BadRequestError || error instanceof ValidationException) {
      const response = ErrorFormatter(error.toResponseObject());
      return res.status(error.status).send(response);
    }
  
    logger.error(error);
    const response = ErrorFormatter(error);
    return res.status(500).send(response);
  };
  