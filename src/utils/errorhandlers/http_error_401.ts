import HttpException from './http_exception';
/**
 * Wrong creds
 * Unauthorized
 */
export default class Http401Error extends HttpException {
  constructor(message: string) {
    super(401, message);
  }
}
