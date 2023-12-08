import Joi from "joi";

export class RegisterRequest {
    fullname: string;
    email: string;
    password: string;

    constructor(fullname: string, email: string, password: string){
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }
    static getSchema() {
        return Joi.object({
            fullname: Joi.string().required().messages({
                'any.required': 'Nama Lengkap diperlukan',
                'string.empty': 'Nama Lengkap tidak boleh kosong',
            }),
            email: Joi.string().email({ tlds: false }).required().messages({
                'any.required': 'Alamat Email diperlukan',
                'string.empty': 'Alamat Email tidak boleh kosong',
                'string.email': 'Alamat Email Tidak Valid',
            }),
            password: Joi.string().required().messages({
                'any.required': 'Password diperlukan',
                'string.empty': 'Password tidak boleh kosong',
            }),
            

        });
    }
}