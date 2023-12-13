import Joi from 'joi';

export class CreateOrderRequest {
  name: string;
  start_hour: string;
  end_hour: string;
  date: Date;

  constructor(
    name: string,
    start_hour: string,
    end_hour: string,
    date: Date
  ) {
    this.name = name;
    this.start_hour = start_hour;
    this.end_hour = end_hour;
    this.date = date;
  }

  static getSchema() {
    const timeSchema = Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9] (AM|PM)$/);

    return Joi.object({
      name: Joi.string().required().messages({
        'any.required': 'Jam mulai diperlukan',
        'string.empty': 'Jam mulai tidak boleh kosong',
      }),
      start_hour: timeSchema.required().messages({
        'any.required': 'Jam mulai diperlukan',
        'string.empty': 'Jam mulai tidak boleh kosong',
        'string.pattern.base': 'Format jam mulai tidak valid (hh:mm AM/PM)',
      }),

      end_hour: timeSchema.required().custom(function (value, helpers) {
        const startHour = new Date(`2000-01-01 ${helpers.state.ancestors[0].start_hour}`);
        const endHour = new Date(`2000-01-01 ${value}`);

        if (startHour >= endHour) {
          return helpers.error('start_hour.before_end_hour');
        }

        return value;
      }).messages({
        'any.required': 'Jam selesai diperlukan',
        'string.empty': 'Jam selesai tidak boleh kosong',
        'string.pattern.base': 'Format jam selesai tidak valid (hh:mm AM/PM)',
        'start_hour.before_end_hour': 'Jam mulai tidak dapat lebih awal atau sama dengan jam selesai'
      }),
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
    }
    );
  }
}
