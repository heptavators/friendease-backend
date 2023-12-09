import { logger } from "../../../helpers/Log";
import { ValidationException } from "../../../helpers/Validator";
import ErrorFormatter from "../ErrorFormatter";

export default function ErrorInputFormatter(message: Array<Object>) {
    const response: object = {
        info: {
          success: false,
          meta: null,
          message: message
        },
        data: null,
      }
    
      return response
}
  