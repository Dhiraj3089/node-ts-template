import HttpException from './http_exception';
/**
 * Not found
 */
export default class Http404Error extends HttpException {
  constructor(message: string) {
    super(404, message);
  }
}
