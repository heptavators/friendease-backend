import { LocationService } from "../../services/Location";
import { Request, Response } from "express-serve-static-core";
import ErrorFormatter from "../../helpers/Response/ErrorFormatter";
import SuccessPluralFormatter from "../../helpers/Response/SuccessPluralFormatter";
import { DEFAULT_LIMIT } from "../../utils/Constant";
import { HandleErrorResponse } from "../../helpers/Error/HandleErrorResponse";


export class LocationController {
    locationService: LocationService

    constructor(locationService: LocationService){
        this.locationService = locationService
    }



    async GetAllLocationController(req: Request, res: Response){
        try {
            const {name, page} = req.query as any
            const limit = DEFAULT_LIMIT
            
            const {data, count} = await this.locationService.getAllLocationService(name, page)
            if (data.length != 0) {
                const meta = {
                    currentPage: page || 1 ,
                    totalPage: Math.ceil(count / limit),
                    totalItems: count,
                    itemsPerPage: limit
                }

                console.log(count / limit)
    
                const response = SuccessPluralFormatter('Data Semua Lokasi', meta, data);
        
                return res.status(200).send(response);
            } else {
                const response = ErrorFormatter('Data Lokasi Tidak Ditemukan');
                return res.status(404).send(response);
            }              
        } catch (error) {
            return HandleErrorResponse(res, error);
        }
    }




}

