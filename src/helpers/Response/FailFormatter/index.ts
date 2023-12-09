export default function FailFormatter(message: string){
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