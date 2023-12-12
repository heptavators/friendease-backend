import Joi from 'joi';

export class CreateOrderRequest {
  name: string;
//   end_hour: string;
  date: Date;

  constructor(
    name: string, 
    // end_hour: string, 
    date: Date
    ) {
    this.name = name;
    // this.end_hour = end_hour;
    this.date = date;
  }

  static getSchema() {
    return Joi.object({
      name: Joi.string().required().messages({
        'any.required': 'Jam mulai diperlukan',
        'string.empty': 'Jam mulai tidak boleh kosong',
      }),
    //   end_hour: Joi.string().required().messages({
    //     'any.required': 'Jam selesai diperlukan',
    //     'string.empty': 'Jam selesai tidak boleh kosong',
    //   }),
      date: Joi.date().custom((value, helpers) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const selectedDate = new Date(value);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate <= today) {
          return helpers.error('date.not_future');
        }

        return value;
      }).required().messages({
        'any.required': 'Tanggal diperlukan',
        'date.base': 'Tanggal harus berupa format tanggal yang valid',
        'string.empty': 'Tanggal tidak boleh kosong',
        'date.not_future': 'Tanggal harus setidaknya satu hari ke depan',
      }),
    });
  }
}
