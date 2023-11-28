export default function FailFormatter(message: string){
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