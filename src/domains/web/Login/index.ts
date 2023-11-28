import Joi from "joi";
import { Validator } from "../../../helpers/Validator";

export class Login {
    email: string

    constructor(email: string){
        this.email = email  
    }
    static getSchema() {
        return Joi.object({
            email: Joi.string().email({ tlds: false }).required().messages({
                'any.required': 'Alamat Email diperlukan',
                'string.empty': 'Alamat Email tidak boleh kosong',
                'string.email': 'Alamat Email Tidak Valid',
            }),
            fullname: Joi.string().required().messages({
                'any.required': 'Nama Lengkap diperlukan',
                'string.empty': 'Nama Lengkap tidak boleh kosong',
            }),
            

        });
    }
}