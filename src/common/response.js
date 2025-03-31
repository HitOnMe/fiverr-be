export const responseSuccess = (data) => {
  return {
    status: 'ok',
    code: 200,
    data: data
  }
}
export const responseError = (error, code) => {
  return {
    status: error,
    code: code,
    message: 'fix error',
  }
}
