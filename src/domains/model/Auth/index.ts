import Joi from 'joi';

export class Auth {
    id: string;
    fullname: string;
    email: string;
    username: string;
    password: string;
    avatar: string;
    bio: string;
    status: string;
    roles: string;
    device_token: string;

    constructor(
        id: string,
        fullname: string,
        email: string,
        username: string,
        password: string,
        avatar: string,
        bio: string,
        status: string,
        roles: string,
        device_token: string
    ) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.avatar = avatar;
        this.bio = bio;
        this.status = status;
        this.roles = roles;
        this.device_token = device_token;
    }

    static getSchema() {
        return Joi.object({
            id: Joi.string().required().messages({
                'any.required': 'ID diperlukan',
                'string.empty': 'ID tidak boleh kosong',
            }),
            fullname: Joi.string().required().messages({
                'any.required': 'Nama Lengkap diperlukan',
                'string.empty': 'Nama Lengkap tidak boleh kosong',
            }),
            username: Joi.string().messages({
                'any.required': 'Username diperlukan',
                'string.empty': 'Username tidak boleh kosong',
            }),
            password: Joi.string().required().messages({
                'any.required': 'Password diperlukan',
                'string.empty': 'Password tidak boleh kosong',
            }),
            email: Joi.string().email({ tlds: false }).required().messages({
                'any.required': 'Alamat Email diperlukan',
                'string.empty': 'Alamat Email tidak boleh kosong',
                'string.email': 'Alamat Email Tidak Valid',
            }),
            avatar: Joi.string().required().messages({
                'any.required': 'Avatar diperlukan',
                'string.empty': 'Avatar tidak boleh kosong',
            }),
            bio: Joi.string().required().messages({
                'any.required': 'Bio diperlukan',
                'string.empty': 'Bio tidak boleh kosong',
            }),
            status: Joi.string().required().messages({
                'any.required': 'Status diperlukan',
                'string.empty': 'Status tidak boleh kosong',
            }),
            roles: Joi.string().required().messages({
                'any.required': 'Roles diperlukan',
                'string.empty': 'Roles tidak boleh kosong',
            }),
            device_token: Joi.string().required().messages({
                'any.required': 'Device Token diperlukan',
                'string.empty': 'Device Token tidak boleh kosong',
            }),
        });
    }
}
