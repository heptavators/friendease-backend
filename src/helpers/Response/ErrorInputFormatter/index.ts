import { logger } from "../../../helpers/Log";
import { ValidationException } from "../../../helpers/Validator";
import ErrorFormatter from "../ErrorFormatter";

export default function ErrorInputFormatter(message: Array<Object>) {
    const response: object = {
        info: {
          success: false,
          message: message,
          meta: null
        },
        data: null,
      }
    
      return response
}
  