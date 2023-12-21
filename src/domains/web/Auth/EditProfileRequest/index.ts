import Joi from "joi";

export class EditProfileRequest {
    fullname!: string;
    username!: string;
    bod!: Date;
    locationId!: string;
    gender!: string;
    user_preferences!: string;
    tags!: string[];

    constructor(
        fullname: string,  
        username: string,
        bod: Date,
        locationId: string,
        gender: string,
        user_preferences: string,
        tags: string[])
        {
        this.fullname = fullname;
        this.username = username;
        this.bod = bod;
        this.locationId = locationId;
        this.gender = gender;
        this.user_preferences = user_preferences;
        this.tags = tags;
    }
    static getSchema() {
        return Joi.object({
            fullname: Joi.string().required().messages({
                'any.required': 'Nama Lengkap diperlukan',
                'string.empty': 'Nama Lengkap tidak boleh kosong',
            }),
            username: Joi.string().required().messages({
                'any.required': 'Username diperlukan',
                'string.empty': 'Username Tidak boleh kosong',
            }),
            bod: Joi.date().required().messages({
                'any.required': 'Tanggal Lahir diperlukan',
                'date.base': 'Tanggal Lahir harus berupa format tanggal yang valid',
                'string.empty': 'Tanggal Lahir tidak boleh kosong',
            }),
            locationId: Joi.string().required().messages({
                'any.required': 'Lokasi diperlukan',
                'string.empty': 'Lokasi tidak boleh kosong',
            }),
            gender: Joi.string().required().messages({
                'any.required': 'Jenis Kelamin diperlukan',
                'string.empty': 'Jenis Kelamin Tidak boleh kosong',
            }),
            user_preferences: Joi.string().required().messages({
                'any.required': 'Prefensi Pengguna diperlukan',
                'string.empty': 'Prefensi Pengguna Tidak boleh kosong',
            }),

            tags: Joi.array().items(Joi.string().uuid({ version: 'uuidv4' })).max(5).min(1).messages({
                'array.base': 'Tags harus berupa array',
                'array.max': 'Tags tidak boleh lebih dari 5',
                'array.min': 'Tags tidak boleh kurang dari 1'
            }),

            

        });
    }
}