import { Request, Response, NextFunction } from "express";

type Handler = (
    req: Request,
    res: Response,
    next: NextFunction
) => void;

export interface IBaseRoute {
    requestMethod: "get" | "put" | "post" | "patch" | "delete";
    path: string;
    handler: Handler
}