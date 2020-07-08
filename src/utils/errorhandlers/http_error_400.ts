import HttpException from './http_exception';

/**
 * Already Exist
 */
export default class Http400Error extends HttpException {
  constructor(message: string) {
    super(400, message);
  }
}
