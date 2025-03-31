export class BadRequestException extends Error{
  constructor(code, error){
    super()
    this.statusCode = code
    this.message = error
  }
}