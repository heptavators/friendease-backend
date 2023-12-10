import Joi from 'joi';

export class CreateNotificationRequest {
    icon: string;
    title: string;
    body: string;

    constructor(icon: string, title: string, body: string, status: string) {
        this.icon = icon;
        this.title = title;
        this.body = body;

    }

    static getSchema() {
        return Joi.object({
            icon: Joi.string().required().messages({
                'any.required': 'Icon diperlukan',
                'string.empty': 'Icon tidak boleh kosong',
            }),
            title: Joi.string().messages({
                'any.required': 'Title diperlukan',
                'string.empty': 'Title tidak boleh kosong',
            }),
            body: Joi.string().messages({
                'any.required': 'Body diperlukan',
                'string.empty': 'Body tidak boleh kosong',
            }),
        });
    }

}