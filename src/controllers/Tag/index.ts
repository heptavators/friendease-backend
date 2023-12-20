import { TagService } from "../../services/Tag";
import { Request, Response } from "express-serve-static-core";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import SuccessPluralFormatter from "../../helpers/Response/SuccessPluralFormatter";
import { DEFAULT_LIMIT } from "../../utils/Constant";
import { HandleErrorResponse } from "../../helpers/Error/HandleErrorResponse";


export class TagController {
    tagService: TagService

    constructor(tagService: TagService){
        this.tagService = tagService
    }



    async GetAllTagController(req: Request, res: Response){
        try {
            const {name, page} = req.query as any
            const limit = DEFAULT_LIMIT
            
            const {data, count} = await this.tagService.getAllTagService(name, page)
            if (data.length != 0) {
                const meta = {
                    currentPage: page || 1 ,
                    totalPage: Math.ceil(count / limit),
                    totalItems: count,
                    itemsPerPage: limit
                }

                console.log(count / limit)
    
                const response = SuccessPluralFormatter('Data Semua Tags', meta, data);
        
                return res.status(200).send(response);
            } else {
                const response = ErrorFormatter('Data Tags Tidak Ditemukan');
                return res.status(404).send(response);
            }              
        } catch (error) {
            return HandleErrorResponse(res, error);
        }
    }




}

