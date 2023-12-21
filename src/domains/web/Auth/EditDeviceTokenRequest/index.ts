import Joi from "joi";

export class EditDeviceTokenRequest {
    device_token: string;

    constructor(device_token: string){
        this.device_token = device_token;
    }
    static getSchema() {
        return Joi.object({
            device_token: Joi.string().required().messages({
                'any.required': 'Device Token diperlukan',
                'string.empty': 'Device Token tidak boleh kosong',
            }),

            

        });
    }
}