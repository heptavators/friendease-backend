export default function SuccessSingularFormatter(message: string, data: object){
    const response: object = {
      info: {
        success: true,
        message: message,
        meta: null
      },
      data: data,
    }
  
    return response
  }