class CustomError extends Error {
  code: number;
  array?: any[];

  constructor(message, errorCode, errorArray?) {
    super(message);
    this.code = errorCode;
    this.array = errorArray;
  }
}

export default CustomError;
