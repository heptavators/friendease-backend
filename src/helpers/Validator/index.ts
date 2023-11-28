import Joi, { Schema, ValidationErrorItem } from 'joi';

export class Validator {
    static validate<T>(data: T, schema: Schema<T>): T {
        const { error } = schema.validate(data, { abortEarly: false });

        if (error) {
            const errors: Record<string, { message: string }> = {};

            error.details.forEach((detail: ValidationErrorItem) => {
                if (detail.context && detail.context.key) {
                    const key = detail.context.key;

                    if (!errors[key]) {
                        errors[key] = { message: '' };
                    }

                    if (errors[key]) {
                        errors[key].message = detail.message;
                    }
                }
            });

            throw errors;
        }

        return data;
    }
}
