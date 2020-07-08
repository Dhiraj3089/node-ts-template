import HttpException from './http_exception';

export default class Http403Error extends HttpException {
  constructor(message: string) {
    super(403, message);
  }
}
