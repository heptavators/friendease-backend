export default function SuccessFormatter(message: string, meta: object, data: Array<object> | object){
    const response: object = {
      info: {
        success: true,
        message: message,
        meta: meta
      },
      data: data,
    }
  
    return response
  }