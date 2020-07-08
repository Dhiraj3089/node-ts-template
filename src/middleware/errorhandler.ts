import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/errorhandlers/http_exception';

const errorHandler = (error: HttpException, request: Request, response: Response, next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message || 'Internal Server Error';
    console.error(error);
    response
        .status(status)
        .send({
            message,
            status
        });
}

export default errorHandler;